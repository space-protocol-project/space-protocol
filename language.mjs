import translations from './translations.mjs?v=20261023-forum-reports';

const supported = ['ru', 'zh', 'en'];
const storageKey = 'space.site.language';

export function browserLanguage(languages = []) {
  const available = languages.map(language => language.toLowerCase().split(/[-_]/)[0]);
  return supported.find(language => available.includes(language)) ?? 'en';
}

export function savedLanguage(storage) {
  try {
    const value = storage.getItem(storageKey);
    return supported.includes(value) ? value : 'auto';
  } catch {
    return 'auto';
  }
}

export function saveLanguage(storage, language) {
  try {
    if (language === 'auto') storage.removeItem(storageKey);
    else storage.setItem(storageKey, language);
  } catch {
    // Выбор продолжает работать, даже если браузер запретил сохранение.
  }
}

export function translate(source, language) {
  return translations[source]?.[language] ?? source;
}

function pageText() {
  const items = [];
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, select')) continue;
    const source = node.textContent;
    if (translations[source.trim()]) items.push({node, source});
  }
  return items;
}

function pageAttributes() {
  const items = [];
  for (const node of document.querySelectorAll('[aria-label], [alt], [content], [data-gallery-title]')) {
    for (const attribute of ['aria-label', 'alt', 'content', 'data-gallery-title']) {
      const source = node.getAttribute(attribute);
      if (translations[source]) items.push({node, attribute, source});
    }
  }
  return items;
}

function initialize() {
  const select = document.getElementById('site-language');
  const automatic = select.querySelector('[value="auto"]');
  const texts = pageText();
  const attributes = pageAttributes();
  // Получение localStorage тоже может быть запрещено настройками браузера.
  let storage;
  try { storage = window.localStorage; } catch { /* Без сохранения выбора. */ }
  select.value = savedLanguage(storage);

  function apply() {
    const language = select.value === 'auto'
      ? browserLanguage(navigator.languages ?? [navigator.language])
      : select.value;
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : language;
    for (const {node, source} of texts) {
      const key = source.trim();
      node.textContent = source.replace(key, translate(key, language));
    }
    for (const {node, attribute, source} of attributes) {
      node.setAttribute(attribute, translate(source, language));
    }
    automatic.textContent = translate('Автоматически', language);
    document.dispatchEvent(new Event('space-language-change'));
  }

  select.addEventListener('change', () => {
    saveLanguage(storage, select.value);
    apply();
  });
  window.addEventListener('languagechange', apply);
  apply();
}

if (typeof document !== 'undefined') initialize();
