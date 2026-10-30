"""Проверка экспериментальных схем и отрицательных вариантов без установки пакета."""
import copy
import json
from pathlib import Path
from jsonschema import Draft202012Validator

root = Path(__file__).resolve().parents[1] / 'docs/extensions/p1'
for name in ('manifest','ui','request','error','retry'):
    schema=json.loads((root/f'{name}.schema.json').read_text(encoding='utf-8'))
    Draft202012Validator.check_schema(schema)
    validator=Draft202012Validator(schema)
    value=json.loads((root/f'{name}.json').read_text(encoding='utf-8'))
    validator.validate(value)
    unknown=copy.deepcopy(value);unknown['unknown']=True
    assert not validator.is_valid(unknown),name
    for key in schema['required']:
        missing=copy.deepcopy(value);del missing[key]
        assert not validator.is_valid(missing),(name,key)
    print(f'{name}: valid fixture, unknown field and missing required fields checked')
ui=json.loads((root/'ui.json').read_text(encoding='utf-8'))
validator=Draft202012Validator(json.loads((root/'ui.schema.json').read_text(encoding='utf-8')))
ui['body'][0]['children'][0]['component']='webview.v1'
assert not validator.is_valid(ui)
manifest=json.loads((root/'manifest.json').read_text(encoding='utf-8'))
validator=Draft202012Validator(json.loads((root/'manifest.schema.json').read_text(encoding='utf-8')))
for entrypoint in ('../server.wasm','/server.wasm','https://example.com/server.wasm'):
    manifest['entrypoint']=entrypoint
    assert not validator.is_valid(manifest)
print('unknown mandatory component and unsafe entrypoints rejected')

retry=json.loads((root/'retry.json').read_text(encoding='utf-8'))
assert len({case['name'] for case in retry['cases']})==len(retry['cases'])
print(f"retry: {len(retry['cases'])} uniquely named shared scenarios")
