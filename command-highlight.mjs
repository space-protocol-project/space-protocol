// Подсветка не меняет текст команды: в буфер попадает исходный shell-код.
export function shellTokens(source) {
  const parts = source.match(/"(?:\\.|[^"\\])*"|'[^']*'|#[^\n]*|https?:\/\/[^\s"']+|\$\{[^}]*\}|\$[A-Za-z_]\w*|&&|\|\||[|;\\]|\s+|[^\s"'|;&\\]+|./g) ?? [];
  let command = true;
  let continued = false;
  return parts.map(text => {
    const kind = shellKind(text, command);
    if (/\n/.test(text) && !continued) command = true;
    if (/^(?:&&|\|\||\||;)$/.test(text)) command = true;
    else if (!/^\s+$/.test(text) && text !== '\\') command = false;
    if (text === '\\') continued = true;
    else if (/\n/.test(text)) continued = false;
    return {text, kind};
  });
}

function shellKind(text, command) {
  if (/^\s+$/.test(text)) return '';
  if (text.startsWith('#')) return 'comment';
  if (/^["']/.test(text)) return 'string';
  if (/^\$/.test(text)) return 'variable';
  if (/^(?:&&|\|\||[|;\\])$/.test(text)) return 'operator';
  if (command) return 'command';
  if (/^-/.test(text)) return 'option';
  if (/^https?:/.test(text)) return 'address';
  if (/^[0-9]+$/.test(text)) return 'number';
  return '';
}

if (typeof document !== 'undefined') {
  for (const code of document.querySelectorAll('.setup-command code')) {
    const fragment = document.createDocumentFragment();
    for (const {text, kind} of shellTokens(code.textContent)) {
      const node = document.createElement('span');
      if (kind) node.className = `shell-${kind}`;
      node.textContent = text;
      fragment.append(node);
    }
    code.replaceChildren(fragment);
  }
}
