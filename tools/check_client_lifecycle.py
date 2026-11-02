"""Схемы, переходы и точки сбоя модели; не испытание настоящей локальной БД."""
import copy
import json
from pathlib import Path
from jsonschema import Draft202012Validator
from client_lifecycle_model import apply, crash, SCOPE

ROOT = Path(__file__).resolve().parents[1] / 'docs/extensions/p1'


def load(name):
    return json.loads((ROOT / name).read_text(encoding='utf-8'))


def command(state, action, plan=None):
    return {'format':'space.client.lifecycle-command.p1', **{k:state[k] for k in SCOPE}, 'expected_revision':state['revision'], 'action':action, 'plan':plan}


def evidence(state, **changes):
    return {'authorized':True, 'active_calls':0, 'checkpoint_valid':True, 'package_verified':True, 'permissions_approved':True, 'migration_ok':True, 'purge_confirmed':True, 'output_digest':'e'*64, 'new_generation':f"{state['revision']+1:032x}", **changes}


def check():
    counts = {'schema_checks':0, 'transition_checks':0, 'crash_checks':0}
    for name in ('client-lifecycle', 'client-lifecycle-command'):
        schema = load(name+'.schema.json')
        Draft202012Validator.check_schema(schema)
        validator = Draft202012Validator(schema)
        value = load(name+'.json')
        validator.validate(value)
        counts['schema_checks'] += 1
        for key in value:
            invalid = copy.deepcopy(value)
            del invalid[key]
            assert not validator.is_valid(invalid)
            counts['schema_checks'] += 1
        for key in ('unknown', 'authorized', 'active_calls'):
            assert not validator.is_valid({**value, key:True})
            counts['schema_checks'] += 1
    state_validator = Draft202012Validator(load('client-lifecycle.schema.json'))
    state = load('client-lifecycle.json')
    plan = {'plan_id':'f'*32, 'source':state['package_digest'], 'target':'d'*64, 'schema_from':1, 'schema_to':3, 'data_revision':0, 'checkpoint':'9'*64, 'steps':2}
    command_validator = Draft202012Validator(load('client-lifecycle-command.schema.json'))
    sample = command(state, 'prepare', plan)
    command_validator.validate(sample)
    for key in plan:
        invalid = copy.deepcopy(sample)
        del invalid['plan'][key]
        assert not command_validator.is_valid(invalid)
        counts['schema_checks'] += 1
    for key,value in [('steps',33),('steps',-1),('schema_to',65536),('data_revision',1.5),('unknown',True)]:
        invalid=copy.deepcopy(sample)
        invalid['plan'][key]=value
        assert not command_validator.is_valid(invalid)
        counts['schema_checks'] += 1
    trace = ('install','enable','disable','drained','prepare','advance','advance','publish','enable','disable','drained','remove','purge')
    for action in trace:
        cmd = command(state, action, plan if action == 'prepare' else None)
        ev = evidence(state)
        code, next_state = apply(state, cmd, ev)
        assert code == 'OK', (action,code)
        state_validator.validate(next_state)
        assert next_state['generation'] != state['generation']
        assert next_state['grant_epoch'] == state['grant_epoch']+1
        for key in SCOPE:
            assert apply(state, {**cmd,key:'other'}, ev)[0] == 'StaleBinding'
            counts['transition_checks'] += 1
        assert apply(state, cmd, {**ev,'authorized':False})[1] == state
        assert apply(next_state, cmd, evidence(next_state))[0] == 'StaleBinding'
        assert apply(state, {**cmd,'expected_revision':state['revision']+1},ev)[0] == 'Conflict'
        counts['transition_checks'] += 4
        for point in ('before_commit','after_commit'):
            outcome, durable = crash(state, cmd, ev, point)
            assert outcome == 'UnknownOutcome'
            assert durable == (state if point=='before_commit' else next_state)
            if durable['state'] != 'absent':
                code, opened = apply(durable,command(durable,'reopen'),evidence(durable))
                assert code == 'OK'
                assert opened['package_digest'] == durable['package_digest']
                assert opened['data_digest'] == durable['data_digest']
                assert opened['step'] == durable['step'] and opened['history'] == durable['history']
                assert opened['state'] != 'enabled'
                assert apply(opened,cmd,evidence(opened))[0] == 'StaleBinding'
            counts['crash_checks'] += 1
        if action in ('prepare','advance'):
            assert next_state['package_digest'] == state['package_digest'] and next_state['data_digest'] == state['data_digest']
            failure = 'checkpoint_valid' if action == 'prepare' else 'migration_ok'
            assert apply(state,cmd,{**ev,failure:False})[1] == state
        if action == 'publish':
            assert next_state['package_digest']==plan['target'] and next_state['schema']==3
            assert next_state['data_digest']==state['staged_digest'] and next_state['history']==[plan['plan_id']]
            assert apply(state,cmd,{**ev,'permissions_approved':False})[1]==state
        state=next_state
    assert state['state']=='removed' and not state['data_present']
    assert apply(state,command(state,'enable'),evidence(state))[0]=='FailedPrecondition'
    state=load('client-lifecycle.json')
    _,state=apply(state,command(state,'install'),evidence(state))
    for key,value in [('source','0'*64),('target',plan['source']),('schema_from',2),('schema_to',4),('data_revision',1)]:
        assert apply(state,command(state,'prepare',{**plan,key:value}),evidence(state))[0]=='InvalidPlan'
        counts['transition_checks']+=1
    for action in ('prepare','remove','enable'):
        assert apply(state,command(state,action,plan if action=='prepare' else None),evidence(state,active_calls=1))[0]=='Busy'
        counts['transition_checks']+=1
    for terminal_action in ('abort','quarantine','restore'):
        _,pending=apply(state,command(state,'prepare',plan),evidence(state))
        _,pending=apply(pending,command(pending,'advance'),evidence(pending))
        code,result=apply(pending,command(pending,terminal_action),evidence(pending))
        assert code=='OK' and result['package_digest']==state['package_digest'] and result['data_digest']==state['data_digest']
        if terminal_action=='restore':
            assert result['step']==1 and result['plan']==plan
            assert apply(pending,command(pending,'restore'),evidence(pending,checkpoint_valid=False))[1]==pending
        if terminal_action=='quarantine':
            assert apply(result,command(result,'advance'),evidence(result))[0]=='FailedPrecondition'
            code,result=apply(result,command(result,'recover'),evidence(result))
            assert code=='OK' and result['state']=='disabled' and result['plan'] is None
        counts['transition_checks']+=1
    code,ready=apply(state,command(state,'prepare',{**plan,'steps':0,'schema_to':1}),evidence(state))
    assert code=='OK' and ready['state']=='ready'
    code,published=apply(ready,command(ready,'publish'),evidence(ready))
    assert code=='OK' and published['data_digest']==state['data_digest']
    assert apply(state,command(state,'enable'),evidence(state,new_generation=state['generation']))[0]=='StaleBinding'
    counts['transition_checks']+=3
    print(json.dumps({'suite':'client-lifecycle.p1','result':'success',**counts},sort_keys=True))


if __name__ == '__main__':
    check()
