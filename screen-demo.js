(() => {
  const dialog = document.getElementById('screen-dialog');
  const image = document.getElementById('dialog-image');
  const title = document.getElementById('dialog-title');
  const shots = [...document.querySelectorAll('.gallery-shot')];
  const counter = document.getElementById('dialog-counter');
  let activeShot;
  let closeTimer;
  let switching = false;
  let queuedDirection = 0;
  let swipeStart;
  const stage = dialog.querySelector('.dialog-stage');

  stage.addEventListener('touchstart', event => {
    swipeStart = undefined;
    if (event.touches.length !== 1 || event.target.closest('button')) return;
    const touch = event.touches[0];
    swipeStart = {x: touch.clientX, y: touch.clientY, time: performance.now()};
  }, {passive: true});
  stage.addEventListener('touchcancel', () => { swipeStart = undefined; }, {passive: true});
  stage.addEventListener('touchend', event => {
    const start = swipeStart;
    swipeStart = undefined;
    if (!start || event.touches.length || event.changedTouches.length !== 1) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (performance.now() - start.time > 1000 || Math.abs(dx) < 48) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.4) return;
    switchScreenshot(dx < 0 ? 1 : -1);
  }, {passive: true});

  function updateCaption() {
    image.alt = activeShot.querySelector('img').alt;
    title.textContent = activeShot.dataset.galleryTitle;
    counter.textContent = `${shots.indexOf(activeShot) + 1} / ${shots.length}`;
  }

  async function switchScreenshot(direction) {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    if (switching) {
      queuedDirection = direction;
      return;
    }
    switching = true;
    const next = shots[(shots.indexOf(activeShot) + direction + shots.length) % shots.length];
    const preload = new Image();
    preload.src = next.href;
    try {
      await preload.decode();
      if (!dialog.open || dialog.classList.contains('is-closing')) return;
      const duration = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 140;
      await image.animate([{opacity: 1, transform: 'translateX(0)'},
        {opacity: 0, transform: `translateX(${-direction * 18}px)`}],
      {duration, easing: 'ease-in', fill: 'forwards'}).finished;
      if (!dialog.open || dialog.classList.contains('is-closing')) return;
      activeShot = next;
      image.src = next.href;
      updateCaption();
      await image.animate([{opacity: 0, transform: `translateX(${direction * 18}px)`},
        {opacity: 1, transform: 'translateX(0)'}],
      {duration: duration ? 180 : 0, easing: 'ease-out', fill: 'forwards'}).finished;
    } catch {
      // При ошибке загрузки сохраняем текущий снимок.
    } finally {
      image.getAnimations().forEach(animation => animation.cancel());
      switching = false;
      const pending = queuedDirection;
      queuedDirection = 0;
      if (pending) switchScreenshot(pending);
    }
  }

  dialog.querySelector('.dialog-previous').addEventListener('click', () => switchScreenshot(-1));
  dialog.querySelector('.dialog-next').addEventListener('click', () => switchScreenshot(1));
  dialog.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    switchScreenshot(event.key === 'ArrowLeft' ? -1 : 1);
  });

  function finishClosing() {
    clearTimeout(closeTimer);
    queuedDirection = 0;
    swipeStart = undefined;
    dialog.close();
    image.getAnimations().forEach(animation => animation.cancel());
    dialog.classList.remove('is-closing');
  }

  function closeScreenshot(event) {
    event.preventDefault();
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishClosing();
      return;
    }
    dialog.classList.add('is-closing');
    closeTimer = setTimeout(finishClosing, 300);
  }

  dialog.querySelector('form').addEventListener('submit', closeScreenshot);
  dialog.addEventListener('cancel', closeScreenshot);
  dialog.addEventListener('animationend', event => {
    if (event.target === dialog && event.animationName === 'dialog-exit') finishClosing();
  });

  function openScreenshot(event) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    const link = event.currentTarget;
    activeShot = link;
    image.src = link.href;
    updateCaption();
    dialog.showModal();
  }

  shots.forEach(link => {
    link.addEventListener('click', openScreenshot);
    link.addEventListener('keydown', event => {
      if (event.key === ' ') openScreenshot(event);
    });
  });

  document.addEventListener('space-language-change', () => {
    if (!dialog.open || !activeShot) return;
    updateCaption();
  });

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) closeScreenshot(event);
  });
})();
