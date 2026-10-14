(() => {
  const dialog = document.getElementById('screen-dialog');
  const image = document.getElementById('dialog-image');
  const title = document.getElementById('dialog-title');

  function openScreenshot(event) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    const link = event.currentTarget;
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

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) dialog.close();
  });
})();
