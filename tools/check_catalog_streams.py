"""Приёмка формата и чистой модели событий каталога в GitHub CI."""
import copy
import json
from pathlib import Path
from jsonschema import Draft202012Validator
from catalog_stream_model import CatalogStream, SCOPE, cursor_valid

ROOT = Path(__file__).resolve().parents[1] / 'docs/extensions/p1'


def load(name):
    return json.loads((ROOT / name).read_text(encoding='utf-8'))


def check():
    schema_checks = 0
    fixtures = {}
    for name in ('call', 'cancel', 'event'):
        schema = load(f'client-catalog-{name}.schema.json')
        Draft202012Validator.check_schema(schema)
        validator = Draft202012Validator(schema)
        value = load(f'client-catalog-{name}.json')
        fixtures[name] = value
        validator.validate(value)
        schema_checks += 1
        for key in value:
            invalid = copy.deepcopy(value)
            del invalid[key]
            assert not validator.is_valid(invalid), (name, key)
            invalid[key] = None
            assert not validator.is_valid(invalid), (name, key, 'null')
            schema_checks += 2
        for key in ('path', 'token', 'unknown'):
            assert not validator.is_valid({**value, key: '/private'}), (name, key)
            schema_checks += 1
    call, cancel, page = (fixtures[n] for n in ('call', 'cancel', 'event'))
    validator = Draft202012Validator(load('client-catalog-event.schema.json'))
    common = {k: page[k] for k in ('format', *SCOPE, 'request_id')}
    terminal = {**common, 'sequence': 2, 'kind': 'terminal', 'code': 'Completed'}
    chunk = {**common, 'sequence': 1, 'kind': 'chunk', 'snapshot': page['snapshot'], 'offset': 0, 'data_base64': 'YWJj', 'eof': False}
    invalidated = {**common, 'sequence': 1, 'kind': 'invalidated', 'reason': 'directory_changed'}
    for value in (terminal, chunk, invalidated):
        validator.validate(value)
        for key in value:
            wrong = dict(value)
            del wrong[key]
            assert not validator.is_valid(wrong), (value['kind'], key)
            schema_checks += 1
        assert not validator.is_valid({**value, 'entries': []})
        schema_checks += 2
    for value in ({**page, 'next_cursor': ''}, {**page, 'more': False}, {**page, 'entries': []}, {**page, 'entries': page['entries']*129}, {**page, 'sequence': 0}, {**chunk, 'data_base64': '!'}, {**terminal, 'code': 'unknown'}):
        assert not validator.is_valid(value)
        schema_checks += 1
    for name in ('../game', 'C:\\game', 'bad\nname'):
        value = copy.deepcopy(page)
        value['entries'][0]['name'] = name
        assert not validator.is_valid(value)
        schema_checks += 1
    current = {**{k: call['request'][k] for k in SCOPE}, 'active': True}
    stream = CatalogStream(call, page['snapshot'])
    assert stream.accept(page, current) and stream.accept(terminal, current)
    assert not stream.accept(terminal, current) and not stream.accept({**page, 'sequence': 3}, current)
    semantic_checks = 4
    for key in (*SCOPE, 'request_id', 'sequence', 'snapshot'):
        value = {**page, key: 2 if key in ('grant_revision', 'sequence') else 'f'*32}
        assert not CatalogStream(call, page['snapshot']).accept(value, current), key
        semantic_checks += 1
    for key in SCOPE:
        stream = CatalogStream(call, page['snapshot'])
        assert not stream.accept(page, {**current, key: 2 if key == 'grant_revision' else 'other'})
        assert stream.accept({**terminal, 'sequence': 1, 'code': 'AccessRevoked'}, current)
        assert not CatalogStream(call, page['snapshot']).cancel({**cancel, key: 'other'})
        semantic_checks += 3
    for first in ('cancel', 'revoke', 'both'):
        stream = CatalogStream(call, page['snapshot'])
        if first != 'revoke':
            assert stream.cancel(cancel) and stream.cancel(cancel)
        if first != 'cancel':
            stream.revoke()
        assert not stream.accept(page, current)
        code = 'Cancelled' if first == 'cancel' else 'AccessRevoked'
        assert stream.accept({**terminal, 'sequence': 1, 'code': code}, current)
        semantic_checks += 2
    stream = CatalogStream(call, page['snapshot'])
    assert stream.accept(page, current)
    stream.revoke()
    assert not stream.accept(terminal, current)
    assert stream.accept({**terminal, 'code': 'AccessRevoked'}, current)
    stream = CatalogStream(call, page['snapshot'])
    assert stream.accept(invalidated, current)
    assert not stream.accept({**page, 'sequence': 2}, current)
    assert stream.accept({**terminal, 'code': 'StaleHandle'}, current)
    semantic_checks += 6
    read = copy.deepcopy(call)
    read['request'].update(operation='read', cursor='', limit=3)
    assert CatalogStream(read, page['snapshot']).accept(chunk, current)
    for value in ({**chunk, 'data_base64': 'YWJjZA=='}, {**chunk, 'offset': 1}, {**chunk, 'data_base64': ''}, {**chunk, 'data_base64': 'YR=='}):
        assert not CatalogStream(read, page['snapshot']).accept(value, current)
        semantic_checks += 1
    stream = CatalogStream(read, page['snapshot'])
    assert not stream.accept(chunk, {**current, 'active': False})
    assert stream.accept({**terminal, 'sequence': 1, 'code': 'AccessRevoked'}, current)
    cursor = {**current, 'snapshot': page['snapshot'], 'handle': call['request']['handle'], 'token': page['next_cursor']}
    next_call = copy.deepcopy(call)
    next_call['request']['cursor'] = page['next_cursor']
    assert cursor_valid(cursor, next_call, page['snapshot'], current)
    assert not cursor_valid(cursor, next_call, page['snapshot'], current, expired=True)
    assert not cursor_valid(cursor, next_call, 'f'*32, current)
    assert not cursor_valid(cursor, next_call, page['snapshot'], {**current, 'active': False})
    semantic_checks += 7
    for key in (*SCOPE, 'handle', 'token'):
        assert not cursor_valid({**cursor, key: 'other'}, next_call, page['snapshot'], current), key
        semantic_checks += 1
    print(json.dumps({'suite': 'client-catalog-stream.p1', 'schema_checks': schema_checks, 'semantic_checks': semantic_checks, 'result': 'success'}, sort_keys=True))


if __name__ == '__main__':
    check()
