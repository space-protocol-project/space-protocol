"""Чистая модель контракта P1. Не файловый API и не реализация разрешений ОС."""
import copy

BINDING = ('device', 'local_profile', 'installation', 'instance', 'package_digest', 'generation')


def manage(installation, grant, command, authority):
    if not authority['local_user'] or not authority['profile_unlocked']:
        return 'PermissionDenied', installation, grant
    if any(command[key] != installation[key] for key in BINDING):
        return 'StaleBinding', installation, grant
    if command['expected_revision'] != installation['revision']:
        return 'Conflict', installation, grant
    if any(grant[key] != installation[key] for key in BINDING):
        return 'StaleBinding', installation, grant
    if installation['state'] == 'removed' or installation['revision'] >= 2147483646:
        return 'FailedPrecondition', installation, grant
    action = command['action']
    if action == 'grant':
        if 'device.catalog.read' not in installation['requested']:
            return 'PermissionDenied', installation, grant
        if not authority['consent_current'] or not authority['picker_verified']:
            return 'PermissionDenied', installation, grant
        if grant['state'] != 'revoked':
            return 'FailedPrecondition', installation, grant
    if grant['grant_revision'] >= 2147483646:
        return 'FailedPrecondition', installation, grant
    next_installation, next_grant = copy.deepcopy(installation), copy.deepcopy(grant)
    next_installation['revision'] += 1
    next_grant['grant_revision'] += 1
    next_grant['state'] = 'active' if action == 'grant' else 'revoked'
    if action in ('disable', 'remove'):
        next_installation['state'] = 'disabled' if action == 'disable' else 'removed'
    return 'OK', next_installation, next_grant


def catalog(installation, grant, request, resource):
    if installation['state'] != 'enabled' or grant['state'] != 'active':
        return 'PermissionDenied'
    if 'device.catalog.read' not in installation['requested']:
        return 'PermissionDenied'
    for key in BINDING:
        if request[key] != installation[key] or grant[key] != installation[key]:
            return 'StaleBinding'
    for key in ('grant_id', 'grant_revision', 'root_id'):
        if request[key] != grant[key]:
            return 'StaleBinding'
    if not resource['handle_bound'] or not resource['cursor_bound']:
        return 'StaleHandle'
    if not resource['within_root'] or not resource['identity_stable']:
        return 'PermissionDenied'
    if not resource['regular_type'] or not resource['budget_available']:
        return 'ResourceLimit'
    return 'OK'
