"""Контракт manifest v2 и общие схемы результатов/событий."""
import copy
import json
from pathlib import Path
from jsonschema import Draft202012Validator

root = Path(__file__).resolve().parents[1] / 'docs/extensions/p1'
schema = json.loads((root / 'manifest-v2.schema.json').read_text(encoding='utf-8'))
Draft202012Validator.check_schema(schema)
validator = Draft202012Validator(schema)
manifest = json.loads((root / 'manifest-v2.json').read_text(encoding='utf-8'))
validator.validate(manifest)
for key in schema['required']:
    invalid = copy.deepcopy(manifest)
    del invalid[key]
    assert not validator.is_valid(invalid), key
for key in ('result', 'effect', 'capabilities', 'events'):
    invalid = copy.deepcopy(manifest)
    del invalid['contracts']['commands']['save'][key]
    assert not validator.is_valid(invalid), key
for kind in ('commands', 'queries'):
    assert set(manifest[kind]) == set(manifest['contracts'][kind])
    for op in manifest['contracts'][kind].values():
        assert set(op['capabilities']) <= set(manifest['permissions'])
        assert set(op['events']) <= set(manifest['contracts']['events'])
        assert op['effect'] == 'none' or kind == 'commands'
profile = json.loads((root / 'value-schema.schema.json').read_text())
Draft202012Validator.check_schema(profile)
profile_validator = Draft202012Validator(profile)
assert not profile_validator.is_valid({'$ref': 'https://example.com/schema'})
for name in ('empty', 'result', 'event'):
    value = json.loads((root / f'contracts/{name}.json').read_text())
    profile_validator.validate(value)
    Draft202012Validator.check_schema(value)
    values = Draft202012Validator(value)
    values.validate({'ui_api': 'space.ui.p1'} if name == 'result' else {})
    assert not values.is_valid({'extra': True})
print('manifest v2: required fields, operation links, capabilities, result and event schemas passed')
