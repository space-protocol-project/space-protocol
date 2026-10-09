(() => {
  const screens = {
    chat: {title:'Общий чат',heading:'Разговор в центре.',text:'Каналы и разделы слева, общение в центре, контекст пространства справа. На снимке показан экран до подключения к серверу.',alt:'Flutter-приложение Space: общий чат и боковая навигация, подключение ещё не выполнено'},
    settings: {title:'Личные настройки',heading:'Пусть будет удобно вам.',text:'Светлая и тёмная темы, компактный режим и личные палитры. Оформление сохраняется на устройстве и не меняет права доступа.',alt:'Flutter-приложение Space: настройки тёмной темы, компактного режима и палитры'},
    identity: {title:'Идентичность и восстановление',heading:'Ваши ключи. Ваш доступ.',text:'Состояние устройства, восстановление и ротация ключа находятся на странице идентичности. На снимке показана сборка без активного подключения.',alt:'Flutter-приложение Space: идентичность, восстановление ключей и ротация'},
    channels: {title:'Управление каналами',heading:'Правила рядом с разговором.',text:'Общие Flutter-формы позволяют настраивать каналы, порядок и архив. Этот снимок сделан в тестовой оболочке общего модуля; сейчас управление встроено в основное приложение.',alt:'Общие Flutter-формы: настройки пространства, список каналов и изменение канала'}
  };
  const tabs = [...document.querySelectorAll('[data-screen]')];
  const image = document.getElementById('screen-image');
  const dialog = document.getElementById('screen-dialog');
  let current = 'chat';
  function select(key) {
    const screen = screens[key];
    if (!screen) return;
    current = key;
    tabs.forEach(tab => {const active=tab.dataset.screen===key;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
    image.src = `assets/screens/${key}.png`;
    image.alt = screen.alt;
    document.getElementById('screen-panel').setAttribute('aria-labelledby',`tab-${key}`);
    document.getElementById('screen-title').textContent = screen.title;
    document.getElementById('screen-heading').textContent = screen.heading;
    document.getElementById('screen-text').textContent = screen.text;
    document.getElementById('screen-index').textContent = `0${tabs.findIndex(tab=>tab.dataset.screen===key)+1} / 04`;
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click',()=>select(tab.dataset.screen));
    tab.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight') next=(index+1)%tabs.length;
      if(event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length;
      if(event.key==='Home') next=0;
      if(event.key==='End') next=tabs.length-1;
      if(next===undefined)return;
      event.preventDefault();select(tabs[next].dataset.screen);tabs[next].focus();
    });
  });
  document.getElementById('screen-expand').addEventListener('click',()=>{
    const expanded=document.getElementById('dialog-image');
    expanded.src=image.src;expanded.alt=image.alt;
    document.getElementById('dialog-title').textContent=screens[current].title;
    if(typeof dialog.showModal==='function')dialog.showModal();
    else window.open(image.src,'_blank','noopener');
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog){const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();}});
})();
