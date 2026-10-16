import test from 'node:test';
import assert from 'node:assert/strict';
import {shellTokens} from './command-highlight.mjs';

test('Подсветка сохраняет все символы копируемой команды', () => {
  for (const source of [
    'curl -fsSL https://example.org/install.sh | sh\n',
    './runtime/space-server -home-runtime "$PWD/runtime" \\\n  -home-data "$PWD/home/data"',
    '# пример\nmkdir -p ~/space && cd ~/space\nchmod +x runtime/*',
    '<script>danger</script> & "кавычки"',
  ]) assert.equal(shellTokens(source).map(token => token.text).join(''), source);
});

test('Команды, параметры, строки и адреса получают разные цвета', () => {
  const tokens = shellTokens('curl -fsSL https://example.org | sh\ncd "$PWD/space"');
  for (const [text, kind] of [['curl','command'], ['-fsSL','option'], ['https://example.org','address'], ['sh','command'], ['cd','command'], ['"$PWD/space"','string']]) {
    assert.equal(tokens.find(token => token.text === text)?.kind, kind);
  }
});
