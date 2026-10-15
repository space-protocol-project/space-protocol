import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {browserLanguage, savedLanguage, saveLanguage, translate} from './language.mjs';
import translations from './translations.mjs';

test('Выбор по языкам браузера и запасной английский', () => {
  assert.equal(browserLanguage(['ru-RU', 'en']), 'ru');
  assert.equal(browserLanguage(['zh-Hans-CN']), 'zh');
  assert.equal(browserLanguage(['zh-TW']), 'zh');
  assert.equal(browserLanguage(['de', 'en-GB']), 'en');
  assert.equal(browserLanguage(['fr', 'ru']), 'ru');
  assert.equal(browserLanguage([]), 'en');
});

test('Ручной выбор сохраняется, автоматический удаляет предпочтение', () => {
  const data = new Map();
  const storage = {getItem: key => data.get(key), setItem: (key, value) => data.set(key, value), removeItem: key => data.delete(key)};
  assert.equal(savedLanguage(storage), 'auto');
  saveLanguage(storage, 'zh');
  assert.equal(savedLanguage(storage), 'zh');
  saveLanguage(storage, 'auto');
  assert.equal(savedLanguage(storage), 'auto');
  saveLanguage(storage, 'unsupported');
  assert.equal(savedLanguage(storage), 'auto');
});

test('Запрет хранилища не ломает выбор языка', () => {
  const storage = {getItem() {throw Error('blocked');}, setItem() {throw Error('blocked');}, removeItem() {throw Error('blocked');}};
  assert.equal(savedLanguage(storage), 'auto');
  assert.doesNotThrow(() => saveLanguage(storage, 'en'));
  assert.doesNotThrow(() => saveLanguage(storage, 'auto'));
  assert.equal(savedLanguage(undefined), 'auto');
});

test('Переводы полные, русский восстанавливается без изменения разметки', () => {
  for (const [source, versions] of Object.entries(translations)) {
    assert.ok(versions.en.trim(), source);
    assert.ok(versions.zh.trim(), source);
    assert.equal(translate(source, 'ru'), source);
    assert.equal(translate(source, 'en'), versions.en);
    assert.equal(translate(source, 'zh'), versions.zh);
    assert.doesNotMatch(versions.en, /[А-Яа-яЁё]/, source);
    assert.doesNotMatch(versions.zh, /[А-Яа-яЁё]/, source);
  }
});

test('Все русские тексты и доступные названия страницы имеют перевод', () => {
  const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
  const texts = [...html.matchAll(/>([^<>]+)</g)].map(match => match[1].trim());
  const attributes = [...html.matchAll(/(?:aria-label|alt|content|data-gallery-title)="([^"]+)"/g)].map(match => match[1]);
  for (const source of [...texts, ...attributes]) {
    if (!/[А-Яа-яЁё]/.test(source) || source === 'Русский') continue;
    assert.ok(translations[source], `Отсутствует перевод: ${source}`);
  }
});
