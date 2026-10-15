(() => {
  const dialog = document.getElementById('screen-dialog');
  const image = document.getElementById('dialog-image');
  const title = document.getElementById('dialog-title');
  let activeShot;

  function openScreenshot(event) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    const link = event.currentTarget;
    activeShot = link;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    title.textContent = link.dataset.galleryTitle;
    dialog.showModal();
  }

  document.querySelectorAll('.gallery-shot').forEach(link => {
    link.addEventListener('click', openScreenshot);
    link.addEventListener('keydown', event => {
      if (event.key === ' ') openScreenshot(event);
    });
  });

  document.addEventListener('space-language-change', () => {
    if (!dialog.open || !activeShot) return;
    image.alt = activeShot.querySelector('img').alt;
    title.textContent = activeShot.dataset.galleryTitle;
  });

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) dialog.close();
  });
})();
