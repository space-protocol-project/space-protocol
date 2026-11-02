"""Чистая модель журнала локальной установки; не БД и не WASM-исполнитель."""
import copy

SCOPE = ('device', 'local_profile', 'installation', 'instance', 'generation')
LIMIT = 2147483646
STATES = {
    'install': ('absent',), 'enable': ('disabled',), 'disable': ('enabled',),
    'drained': ('draining',), 'prepare': ('disabled',), 'advance': ('updating',),
    'publish': ('ready',), 'abort': ('updating', 'ready'),
    'quarantine': ('disabled', 'enabled', 'draining', 'updating', 'ready'),
    'recover': ('quarantined',), 'remove': ('disabled',), 'purge': ('removed',),
    'reopen': ('disabled', 'enabled', 'draining', 'updating', 'ready', 'quarantined', 'removed'),
    'restore': ('disabled', 'enabled', 'draining', 'updating', 'ready', 'quarantined', 'removed'),
}


def valid_plan(state, plan):
    return (plan is not None and plan['source'] == state['package_digest']
            and plan['target'] != plan['source'] and plan['schema_from'] == state['schema']
            and plan['schema_to'] - plan['schema_from'] == plan['steps']
            and plan['data_revision'] == state['data_revision']
            and plan['plan_id'] not in state['history'] and len(state['history']) < 128)


def guard(state, command, evidence):
    if not evidence['authorized']:
        return 'PermissionDenied'
    if any(command[key] != state[key] for key in SCOPE):
        return 'StaleBinding'
    if command['expected_revision'] != state['revision']:
        return 'Conflict'
    if state['revision'] >= LIMIT or state['grant_epoch'] >= LIMIT:
        return 'ResourceLimit'
    action = command['action']
    if state['state'] not in STATES[action]:
        return 'FailedPrecondition'
    if action not in ('disable', 'quarantine') and evidence['active_calls'] != 0:
        return 'Busy'
    if action == 'prepare':
        if not valid_plan(state, command['plan']) or not evidence['checkpoint_valid']:
            return 'InvalidPlan'
    elif command['plan'] is not None:
        return 'InvalidPlan'
    if action in ('advance', 'publish') and not valid_plan(state, state['plan']):
        return 'InvalidPlan'
    if action == 'advance' and state['step'] >= state['plan']['steps']:
        return 'InvalidPlan'
    if action in ('install', 'enable', 'prepare', 'publish', 'recover') and not evidence['package_verified']:
        return 'UntrustedPackage'
    if action in ('enable', 'publish') and not evidence['permissions_approved']:
        return 'PermissionDenied'
    if action == 'advance' and not evidence['migration_ok']:
        return 'MigrationFailed'
    if action in ('publish', 'restore', 'recover') and not evidence['checkpoint_valid']:
        return 'InvalidCheckpoint'
    if action == 'publish' and (state['plan'] is None or state['step'] != state['plan']['steps']):
        return 'InvalidPlan'
    if action == 'purge' and (not evidence['purge_confirmed'] or not state['data_present']):
        return 'FailedPrecondition'
    if evidence['new_generation'] == state['generation']:
        return 'StaleBinding'
    return 'OK'


def apply(state, command, evidence):
    """Один атомарный переход. При ошибке возвращается неизменённая запись."""
    code = guard(state, command, evidence)
    if code != 'OK':
        return code, copy.deepcopy(state)
    result = copy.deepcopy(state)
    result['revision'] += 1
    result['generation'] = evidence['new_generation']
    result['grant_epoch'] += 1
    action = command['action']
    if action == 'prepare':
        result.update(plan=copy.deepcopy(command['plan']), step=0, staged_digest=state['data_digest'])
        result['state'] = 'ready' if command['plan']['steps'] == 0 else 'updating'
    elif action == 'advance':
        result['step'] += 1
        result['staged_digest'] = evidence['output_digest']
        if result['step'] == result['plan']['steps']:
            result['state'] = 'ready'
    elif action == 'publish':
        result.update(package_digest=state['plan']['target'], schema=state['plan']['schema_to'], data_digest=state['staged_digest'], state='disabled')
        result['history'].append(state['plan']['plan_id'])
        result['plan'] = None
        result['step'] = 0
    elif action in ('abort', 'recover'):
        result.update(state='disabled', plan=None, step=0, staged_digest=state['data_digest'])
    elif action in ('reopen', 'restore'):
        if state['state'] in ('enabled', 'draining'):
            result['state'] = 'disabled'
    elif action == 'purge':
        result['data_present'] = False
    else:
        result['state'] = {'install':'disabled', 'enable':'enabled', 'disable':'draining', 'drained':'disabled', 'quarantine':'quarantined', 'remove':'removed'}[action]
    return 'OK', result


def crash(state, command, evidence, point):
    """Выбор сохранённой записи до/после единственного COMMIT модели."""
    code, next_state = apply(state, command, evidence)
    if code != 'OK':
        return code, next_state
    return 'UnknownOutcome', copy.deepcopy(state if point == 'before_commit' else next_state)
