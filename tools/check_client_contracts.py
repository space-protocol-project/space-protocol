"""Проверка схем и переходов модели; исполняется в GitHub CI."""
import copy
import json
from pathlib import Path
from jsonschema import Draft202012Validator
from client_contract_model import BINDING, catalog, manage

ROOT = Path(__file__).resolve().parents[1] / 'docs/extensions/p1'


def check():
    fixtures = {}
    checks = 0
    for name in ('installation', 'grant', 'catalog', 'management'):
        schema = json.loads((ROOT / f'client-{name}.schema.json').read_text(encoding='utf-8'))
        Draft202012Validator.check_schema(schema)
        validator = Draft202012Validator(schema)
        value = json.loads((ROOT / f'client-{name}.json').read_text(encoding='utf-8'))
        fixtures[name] = value
        validator.validate(value)
        checks += 1
        for key in schema['required']:
            missing = copy.deepcopy(value)
            del missing[key]
            assert not validator.is_valid(missing), (name, key)
            invalid = copy.deepcopy(value)
            invalid[key] = None
            assert not validator.is_valid(invalid), (name, key, 'null')
            checks += 2
        for key in ('unknown', 'absolute_path', 'token', 'local_user'):
            invalid = copy.deepcopy(value)
            invalid[key] = '/etc/passwd'
            assert not validator.is_valid(invalid), (name, key)
            checks += 1
    i, g, q, cmd = (fixtures[n] for n in ('installation', 'grant', 'catalog', 'management'))
    validator = Draft202012Validator(json.loads((ROOT / 'client-catalog.schema.json').read_text()))
    for key, value in [('limit', 0), ('limit', 129), ('limit', 1.5), ('offset', 1), ('handle', '../escape'), ('cursor', 'C:\\games'), ('operation', 'write')]:
        invalid = {**q, key: value}
        assert not validator.is_valid(invalid), (key, value)
        checks += 1
    read = {**q, 'operation': 'read', 'limit': 65536, 'offset': 9007199254740991}
    validator.validate(read)
    for invalid in ({**read, 'limit': 65537}, {**read, 'offset': 9007199254740992}, {**read, 'cursor': 'a'*32}):
        assert not validator.is_valid(invalid)
        checks += 1
    checks += 1
    resource = dict.fromkeys(('handle_bound', 'cursor_bound', 'within_root', 'identity_stable', 'regular_type', 'budget_available'), True)
    assert catalog(i, g, q, resource) == 'OK'
    semantics = 1
    for key in resource:
        assert catalog(i, g, q, {**resource, key: False}) != 'OK', key
        semantics += 1
    for key in (*BINDING, 'grant_id', 'grant_revision', 'root_id'):
        wrong = 2 if key == 'grant_revision' else ('f'*64 if key == 'package_digest' else 'f'*32 if key in ('generation','grant_id','root_id') else 'other')
        assert catalog(i, g, {**q, key: wrong}, resource) == 'StaleBinding', key
        semantics += 1
    authority = dict.fromkeys(('local_user', 'profile_unlocked', 'consent_current', 'picker_verified'), True)
    revoked = {**g, 'state': 'revoked'}
    for key in authority:
        code, same_i, same_g = manage(i, revoked, cmd, {**authority, key: False})
        assert code == 'PermissionDenied' and same_i == i and same_g == revoked, key
        semantics += 1
    for key in BINDING:
        assert manage(i, {**revoked, key: 'other'}, cmd, authority)[0] == 'StaleBinding'
        semantics += 1
    assert manage(i, revoked, {**cmd, 'expected_revision': 2}, authority)[0] == 'Conflict'
    assert manage({**i, 'requested': []}, revoked, cmd, authority)[0] == 'PermissionDenied'
    semantics += 2
    for action in ('revoke', 'disable', 'remove'):
        code, next_i, next_g = manage(i, g, {**cmd, 'action': action}, authority)
        assert code == 'OK' and next_i['revision'] == 2 and next_g['grant_revision'] == 2
        # Повторная проверка перед передачей результата отменяет уже начатое чтение.
        assert catalog(next_i, next_g, q, resource) == 'PermissionDenied'
        assert manage(next_i, next_g, {**cmd, 'action': action}, authority)[0] == 'Conflict'
        semantics += 3
    code, next_i, next_g = manage(i, revoked, cmd, authority)
    assert code == 'OK'
    assert catalog(next_i, next_g, q, resource) == 'StaleBinding'
    assert catalog(next_i, next_g, {**q, 'grant_revision': 2}, resource) == 'OK'
    # Смена поколения при восстановлении/обновлении не оживляет прежние разрешения.
    assert catalog({**i, 'generation': 'f'*32}, g, q, resource) == 'StaleBinding'
    assert catalog({**i, 'package_digest': 'f'*64}, g, q, resource) == 'StaleBinding'
    semantics += 5
    print(json.dumps({'suite': 'client-local.p1', 'schema_checks': checks, 'semantic_checks': semantics, 'result': 'success'}, sort_keys=True))


if __name__ == '__main__':
    check()
