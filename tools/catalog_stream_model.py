"""Модель порядка выдачи результатов P1, без файловых операций и потоков ОС."""
import base64
import binascii
from client_contract_model import BINDING

SCOPE = (*BINDING, 'grant_id', 'grant_revision', 'root_id')


class CatalogStream:
    def __init__(self, call, snapshot):
        self.call = call
        self.snapshot = snapshot
        self.sequence = 1
        self.terminal = False
        self.stop = None
        self.delivered = False

    def cancel(self, command):
        if command['request_id'] != self.call['request_id']:
            return False
        if any(command[key] != self.call['request'][key] for key in SCOPE):
            return False
        if not self.terminal and self.stop != 'AccessRevoked':
            self.stop = 'Cancelled'
        return True

    def revoke(self):
        if not self.terminal:
            self.stop = 'AccessRevoked'

    def accept(self, event, current):
        if self.terminal or event['request_id'] != self.call['request_id'] or event['sequence'] != self.sequence:
            return False
        if any(event[key] != self.call['request'][key] for key in SCOPE):
            return False
        if not current['active'] or any(current[key] != self.call['request'][key] for key in SCOPE):
            self.revoke()
        if self.stop is not None and (event['kind'] != 'terminal' or event['code'] != self.stop):
            return False
        if not self.valid_payload(event):
            return False
        self.sequence += 1
        self.terminal = event['kind'] == 'terminal'
        self.delivered = self.delivered or event['kind'] in ('page', 'chunk')
        return True

    def valid_payload(self, event):
        kind = event['kind']
        request = self.call['request']
        if kind == 'terminal':
            return event['code'] != 'Completed' or self.delivered
        if self.delivered:
            return False
        if kind == 'invalidated':
            self.stop = 'StaleHandle'
            return True
        if event['snapshot'] != self.snapshot:
            return False
        if kind == 'page':
            handles = [entry['handle'] for entry in event['entries']]
            return request['operation'] == 'list' and len(handles) <= request['limit'] and len(handles) == len(set(handles)) and all(entry['name'] not in ('.', '..') for entry in event['entries'])
        if request['operation'] != 'read' or event['offset'] != request['offset']:
            return False
        try:
            raw = base64.b64decode(event['data_base64'], validate=True)
        except (ValueError, binascii.Error):
            return False
        return (base64.b64encode(raw).decode() == event['data_base64']
                and len(raw) <= request['limit']
                and event['offset'] + len(raw) <= 9007199254740991
                and (bool(raw) or event['eof']))


def cursor_valid(cursor, call, snapshot, current, expired=False):
    """cursor — запись закрытой таблицы хоста, не JSON гостя."""
    if expired or not current['active'] or cursor['snapshot'] != snapshot:
        return False
    request = call['request']
    return (cursor['handle'] == request['handle']
            and cursor['token'] == request['cursor']
            and all(cursor[key] == request[key] == current[key] for key in SCOPE))
