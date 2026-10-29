"""Снимок контрактов и файлов для статической инвентаризации расширений."""

from pathlib import Path
import re
import subprocess


ROOT = Path(__file__).resolve().parents[1]
REPOS = {name: ROOT.parent / name for name in
         ('space-protocol', 'space-server', 'space-app')}


def git(repo, *args):
    return subprocess.check_output(
        ['git', '-C', str(REPOS[repo]), *args], encoding='utf-8')


def source(repo, path):
    return git(repo, 'show', f'HEAD:{path}')


def link(repo, path):
    revision = revisions[repo]
    return f'[{path}](https://github.com/space-protocol-project/{repo}/blob/{revision}/{path})'


revisions = {repo: git(repo, 'rev-parse', 'HEAD').strip() for repo in REPOS}
tracked = {repo: git(repo, 'ls-tree', '-r', '--name-only', 'HEAD').splitlines()
           for repo in REPOS}
lines = ['# Снимок исходников для P0', '',
         'Дополнение к [карте перехода](SPACE-PLUGINS-P0.md). '
         'Создаётся `python tools/inventory_plugins.py` из зафиксированных HEAD трёх репозиториев. '
         'Незакоммиченные правки не включаются. Это статический каталог, не результат запуска тестов.', '']
for repo, revision in revisions.items():
    lines.append(f'- `{repo}`: `{revision}`.')
lines += ['', '## RPC и сервисы', '',
          'Перечислены все RPC всех контрактов, включая общие службы ядра. '
          'Назначение при переносе задаёт основная карта.', '']
rpc_count = 0
for path in tracked['space-protocol']:
    if not path.startswith('protocol/proto/') or not path.endswith('.proto'):
        continue
    content = source('space-protocol', path)
    service = None
    lines += [f'### {Path(path).name}', '', link('space-protocol', path), '',
              '| Сервис | RPC |', '| --- | --- |']
    for row in content.splitlines():
        match = re.match(r'service\s+(\w+)', row)
        if match:
            service = match[1]
        match = re.match(r'\s*rpc\s+(\w+)\s*\((.*?)\)\s*returns\s*\((.*?)\)', row)
        if match:
            rpc_count += 1
            lines.append(f'| `{service}` | `{match[1]}({match[2]}) → {match[3]}` |')
    lines.append('')
lines += ['## Миграции и объекты SQL', '',
          'Все миграции перечислены, включая общую инфраструктуру. '
          'Имена взяты из CREATE/ALTER/DROP; ограничения, внешние ключи и определения '
          'индексов доступны по ссылке на полный SQL. Это история DDL, не дамп живой БД.', '',
          '| Миграция | Создаваемые таблицы | Изменяемые таблицы | Именованные индексы |',
          '| --- | --- | --- | --- |']
for path in tracked['space-server']:
    if '/migrations/' not in path or not path.endswith('.sql'):
        continue
    content = source('space-server', path)
    groups = [re.findall(pattern, content, re.I) for pattern in (
        r'CREATE\s+TABLE\s+(?:IF NOT EXISTS\s+)?(\w+)',
        r'(?:ALTER|DROP)\s+TABLE\s+(\w+)',
        r'(?:CREATE\s+(?:UNIQUE\s+)?INDEX|DROP\s+INDEX)\s+(?:IF EXISTS\s+)?(\w+)')]
    cells = [', '.join(f'`{name}`' for name in sorted(set(group))) or '—'
             for group in groups]
    lines.append('| ' + link('space-server', path) + ' | ' + ' | '.join(cells) + ' |')

lines += ['', '## Каталог реализации и проверок', '',
          'В каталог включены общие зависимости, чтобы не ограничивать поиск файлами '
          'с названием функции. Генерируемый и сторонний код исключён. '
          'Наличие тестового файла не означает успешного прогона.', '']
scopes = {
    'space-server': ('internal/postgres/', 'internal/voice/', 'internal/authn/',
                     'internal/transport/', 'internal/push/', 'internal/home/',
                     'cmd/', '.github/workflows/'),
    'space-app': ('client/lib/src/', 'client/lib/ui/', 'client/test/',
                  'client/integration_test/', 'packages/space_admin_ui/lib/',
                  'packages/space_api/lib/', 'packages/space_voice_native/lib/',
                  'packages/space_mls_native/lib/', 'native/space_voice/',
                  'native/space_mls/', 'client/android/app/src/',
                  'tools/', '.github/workflows/'),
}
for repo, prefixes in scopes.items():
    for prefix in prefixes:
        paths = [p for p in tracked[repo] if p.startswith(prefix)
                 and p.endswith(('.go', '.dart', '.rs', '.kt', '.java', '.cpp',
                                 '.h', '.ps1', '.py', '.yml', '.yaml', '.toml'))
                 and '/generated/' not in p and '/vendor/' not in p
                 and not p.endswith('.freezed.dart')]
        lines += [f'### {repo} / {prefix}', '']
        lines += ['- ' + link(repo, p) for p in paths]
        lines.append('')
output = ROOT / 'docs/SPACE-PLUGINS-P0-INVENTORY.md'
output.write_text('\n'.join(lines).rstrip() + '\n', encoding='utf-8')
print(f'RPC: {rpc_count}; output: {output}')
