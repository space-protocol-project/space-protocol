"""Проверка экспериментальных схем и отрицательных вариантов без установки пакета."""
import copy
import json
from pathlib import Path
from jsonschema import Draft202012Validator

root = Path(__file__).resolve().parents[1] / 'docs/extensions/p1'
for name in ('manifest','ui','request','error','retry','lifecycle','upgrade-plan','migration-data'):
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

lifecycle=json.loads((root/'lifecycle.json').read_text(encoding='utf-8'))
schema=json.loads((root/'lifecycle.schema.json').read_text(encoding='utf-8'))
validator=Draft202012Validator(schema)
assert len({case['name'] for case in lifecycle['cases']})==len(lifecycle['cases'])
for key in schema['properties']['cases']['items']['properties']['input']['required']:
    invalid=copy.deepcopy(lifecycle);del invalid['cases'][0]['input'][key]
    assert not validator.is_valid(invalid),key
for key,value in [('state','unknown'),('version','v99'),('active',-1),('active',129),('active',1.5),('revision',2147483647),('authorized','true'),('extra',True)]:
    invalid=copy.deepcopy(lifecycle);invalid['cases'][0]['input'][key]=value
    assert not validator.is_valid(invalid),(key,value)
for part in ('input','expected'):
    invalid=copy.deepcopy(lifecycle);invalid['cases'][0][part]['extra']=True
    assert not validator.is_valid(invalid),part
invalid=copy.deepcopy(lifecycle);invalid['cases'][0]['expected']['preserve_data']=False
assert not validator.is_valid(invalid)
print(f"lifecycle: {len(lifecycle['cases'])} shared scenarios; nested required fields, types, limits and data preservation checked")

plan=json.loads((root/'upgrade-plan.json').read_text(encoding='utf-8'))
schema=json.loads((root/'upgrade-plan.schema.json').read_text(encoding='utf-8'))
validator=Draft202012Validator(schema)
for key in schema['required']:
    invalid=copy.deepcopy(plan);invalid[key]=None
    assert not validator.is_valid(invalid),key
for key in schema['properties']['steps']['items']['required']:
    invalid=copy.deepcopy(plan);del invalid['steps'][0][key]
    assert not validator.is_valid(invalid),key
invalid=copy.deepcopy(plan);invalid['steps'][0]['extra']=True
assert not validator.is_valid(invalid)
import hashlib
keys=['version','space','installation','generation','revision','data_revision','source','target','grants','checkpoint','schema_from','schema_to','steps']
canonical={key:plan[key] for key in keys}
canonical['steps']=[{key:step[key] for key in ('id','from','to','digest')} for step in plan['steps']]
digest=hashlib.sha256(b'space.upgrade.p1\0'+json.dumps(canonical,separators=(',',':')).encode()).hexdigest()
assert digest==(root/'upgrade-plan.sha256').read_text(encoding='ascii').strip()
print('upgrade-plan: required fields, nulls, nested fields and shared digest checked')

data=json.loads((root/'migration-data.json').read_text(encoding='utf-8'))
validator=Draft202012Validator(json.loads((root/'migration-data.schema.json').read_text(encoding='utf-8')))
for key,value in [('schema',0),('schema',65536),('schema',1.5),('values',None),('values',{'../escape':1}),('values',{f'key{i}':i for i in range(33)})]:
    invalid=copy.deepcopy(data);invalid[key]=value
    assert not validator.is_valid(invalid),(key,value)
print('migration-data: schema bounds, value keys and item quota checked')
