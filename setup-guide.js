(() => {
  const toggle = document.querySelector('.setup-toggle');
  const reveal = document.getElementById('setup-guide');
  if (!toggle || !reveal) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let closeTimer;

  function expand(open) {
    clearTimeout(closeTimer);
    toggle.setAttribute('aria-expanded', String(open));
    reveal.inert = !open;
    if (open) {
      reveal.hidden = false;
      reveal.getBoundingClientRect();
      reveal.classList.add('is-open');
    } else {
      reveal.classList.remove('is-open');
      if (reduced.matches) reveal.hidden = true;
      else closeTimer = setTimeout(() => { reveal.hidden = true; }, 400);
    }
  }
  toggle.addEventListener('click', () => expand(toggle.getAttribute('aria-expanded') !== 'true'));
  function openLinkedSection() {
    const target = document.getElementById(location.hash.slice(1));
    if (!target || (target !== reveal && !reveal.contains(target))) return;
    expand(true);
    for (let node = target; node && node !== reveal; node = node.parentElement) {
      if (node.tagName === 'DETAILS') node.open = true;
    }
  }
  openLinkedSection();
  window.addEventListener('hashchange', openLinkedSection);

  const tabs = [...reveal.querySelectorAll('[role="tab"]')];
  function activate(selected) {
    for (const tab of tabs) {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    }
  }
  for (const [index, tab] of tabs.entries()) {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      const next = {ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1}[event.key];
      if (next === undefined) return;
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].focus();
    });
  }

  for (const button of reveal.querySelectorAll('[data-copy]')) {
    const labels = [...button.querySelectorAll('span')];
    let timer;
    function label(index) {
      labels.forEach((span, i) => { span.hidden = i !== index; });
      button.classList.toggle('is-copied', index === 1);
      button.classList.toggle('copy-failed', index === 2);
    }
    button.setAttribute('aria-live', 'polite');
    button.addEventListener('click', async () => {
      clearTimeout(timer);
      try {
        await navigator.clipboard.writeText(document.getElementById(button.dataset.copy).textContent);
        label(1);
      } catch { label(2); }
      timer = setTimeout(() => label(0), 1800);
    });
  }
})();
