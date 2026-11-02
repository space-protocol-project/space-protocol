"""Приёмка схемы профилей; не загрузчик и не доказательство изоляции WASM."""
import copy
import json
from pathlib import Path

from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[1] / 'docs/extensions/p1'
SCHEMA = json.loads((ROOT / 'package-profile.schema.json').read_text(encoding='utf-8'))
Draft202012Validator.check_schema(SCHEMA)
VALIDATOR = Draft202012Validator(SCHEMA)


def valid(value):
    if not VALIDATOR.is_valid(value):
        return False
    ids = [item['id'] for item in value['contributions']]
    if len(ids) != len(set(ids)):
        return False
    for item in value['contributions']:
        if item['owner'] == 'client' and 'ui.contribute' not in value['modules']['client']['permissions']:
            return False
    return True


def changed(value, path, replacement, remove=False):
    result = copy.deepcopy(value)
    parent = result
    for key in path[:-1]:
        parent = parent[key]
    if remove:
        del parent[path[-1]]
    else:
        parent[path[-1]] = replacement
    return result


def check():
    cases = []
    fixtures = {}
    for profile in ('server', 'client', 'hybrid'):
        value = json.loads((ROOT / f'package-profile-{profile}.json').read_text(encoding='utf-8'))
        fixtures[profile] = value
        cases.append((profile, value, True))
        for key in SCHEMA['required']:
            cases.append((f'{profile}/missing/{key}', changed(value, [key], None, True), False))
            cases.append((f'{profile}/null/{key}', changed(value, [key], None), False))
        cases.append((f'{profile}/unknown', changed(value, ['unknown'], True), False))
        for side in value['modules']:
            prefix = ['modules', side]
            for key in value['modules'][side]:
                cases.append((f'{profile}/{side}/missing/{key}', changed(value, prefix+[key], None, True), False))
            for key, replacement in [('entrypoint', '../escape.wasm'), ('entrypoint', '/client.wasm'), ('entrypoint', 'https://example.com/client.wasm'), ('entrypoint', 'CLIENT.WASM'), ('host_api', 'unknown'), ('wasm_abi', 'unknown'), ('platforms', []), ('platforms', ['android']), ('platforms', ['windows', 'windows']), ('data_schema', 0), ('data_schema', 65536), ('data_schema', 1.5), ('permissions', ['shell']), ('permissions', ['storage.own' if side == 'client' else 'device.catalog.read']), ('permissions', ['storage.instance', 'storage.instance']), ('unknown', True)]:
                cases.append((f'{profile}/{side}/{key}/{replacement}', changed(value, prefix+[key], replacement), False))
    client, server, hybrid = (fixtures[name] for name in ('client', 'server', 'hybrid'))
    for name, value in [('client/server-module', changed(client, ['modules', 'server'], server['modules']['server'])), ('server/client-module', changed(server, ['modules', 'client'], client['modules']['client'])), ('hybrid/no-client', changed(hybrid, ['modules', 'client'], None, True)), ('hybrid/no-compatibility', changed(hybrid, ['compatibility'], None, True)), ('client/compatibility', changed(client, ['compatibility'], hybrid['compatibility'])), ('client/server-surface', changed(client, ['contributions', 0, 'surface'], 'space.overview')), ('client/missing-owner-module', changed(client, ['contributions', 0, 'owner'], 'server')), ('server/client-surface', changed(server, ['contributions', 0, 'surface'], 'app.home')), ('client/no-ui-permission', changed(client, ['modules', 'client', 'permissions'], ['storage.instance'])), ('hybrid/duplicate-id', changed(hybrid, ['contributions', 1, 'id'], hybrid['contributions'][0]['id'])), ('hybrid/unknown-compatibility', changed(hybrid, ['compatibility', 'unknown'], True)), ('hybrid/zero-revision', changed(hybrid, ['compatibility', 'revision'], 0))]:
        cases.append((name, value, False))
    local = copy.deepcopy(client)
    local['contributions'] = []
    local['modules']['client']['permissions'] = ['storage.instance']
    cases.append(('client/no-ui-no-catalog', local, True))
    assert len({name for name, _, _ in cases}) == len(cases)
    for name, value, expected in cases:
        assert valid(value) == expected, name
    print(json.dumps({'suite': 'package-profile.p1', 'cases': len(cases), 'accepted': sum(expected for _, _, expected in cases), 'rejected': sum(not expected for _, _, expected in cases)}, sort_keys=True))


if __name__ == '__main__':
    check()
