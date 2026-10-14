(() => {
  const screens = {
  "dashboard": {
    "title": "Сводка",
    "heading": "Все пространства — рядом.",
    "text": "Главная показывает сохранённые серверы, доступные каналы и непрочитанные. Два пространства на снимке используют демонстрационные данные.",
    "alt": "Flutter-приложение Space: сводка, актуальные виджеты и демонстрационные данные"
  },
  "chat": {
    "title": "Чат",
    "heading": "Разговор в пузырьках.",
    "text": "Текущий Flutter-интерфейс: входящие сообщения слева, ваши справа, отдельная вкладка сервера. Содержимое разговора демонстрационное.",
    "alt": "Flutter-приложение Space: чат, актуальные виджеты и демонстрационные данные"
  },
  "settings": {
    "title": "Настройки",
    "heading": "Ваше оформление.",
    "text": "Тема, палитра и язык приложения настраиваются локально. На снимке актуальная форма личных настроек.",
    "alt": "Flutter-приложение Space: настройки, актуальные виджеты и демонстрационные данные"
  },
  "identity": {
    "title": "Восстановление",
    "heading": "Доступ под вашей защитой.",
    "text": "Настоящий диалог шифрования recovery-карточки: пароль остаётся на устройстве и проверяется перед сохранением.",
    "alt": "Flutter-приложение Space: восстановление, актуальные виджеты и демонстрационные данные"
  },
  "channels": {
    "title": "Каналы",
    "heading": "Свои каналы и права.",
    "text": "Текущие общие Flutter-формы: каналы, архив, публичный предпросмотр и редактор ACL. Данные из изолированной проверки.",
    "alt": "Flutter-приложение Space: каналы, актуальные виджеты и демонстрационные данные"
  },
  "members": {
    "title": "Участники",
    "heading": "Сообщество и роли.",
    "text": "Список участников, поиск, роли и блокировка. На снимке демонстрационные идентификаторы и роли.",
    "alt": "Flutter-приложение Space: участники, актуальные виджеты и демонстрационные данные"
  },
  "invites": {
    "title": "Приглашения",
    "heading": "Приглашайте своих.",
    "text": "Роль, срок действия, число использований и отзыв приглашения в общей Flutter-форме. Данные демонстрационные.",
    "alt": "Flutter-приложение Space: приглашения, актуальные виджеты и демонстрационные данные"
  },
  "devices": {
    "title": "Устройства",
    "heading": "Доступ каждого устройства.",
    "text": "Список своей идентичности, разрешения и отзыв устройства или recovery-карточки. Записи на снимке тестовые.",
    "alt": "Flutter-приложение Space: устройства, актуальные виджеты и демонстрационные данные"
  },
  "home": {
    "title": "Домашний сервер",
    "heading": "Выйти в эфир из Space.",
    "text": "Текущая форма домашнего запуска: адрес, управление и включение сервера. Здесь показан тестовый IPv4, реальный сервер при съёмке не запускался.",
    "alt": "Flutter-приложение Space: домашний сервер, актуальные виджеты и демонстрационные данные"
  },
  "pairing": {
    "title": "Сопряжение",
    "heading": "Подключить новое устройство.",
    "text": "Форма независимой сверки кода после проверки root-подписи. Код на снимке демонстрационный и не предоставляет доступа.",
    "alt": "Flutter-приложение Space: сопряжение, актуальные виджеты и демонстрационные данные"
  }
};
  const keys = Object.keys(screens);
  const tabs = [...document.querySelectorAll('[data-screen]')];
  const dots = [...document.querySelectorAll('[data-carousel]')];
  const image = document.getElementById('screen-image');
  const stage = document.getElementById('screen-stage');
  const panel = document.getElementById('screen-panel');
  const dialog = document.getElementById('screen-dialog');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pictures = new Map();
  let current = 'dashboard', requested = 'dashboard', generation = 0;
  let touchStart = null;
  let ignoreClickUntil = 0;
  function preload(key) {
    if (!pictures.has(key)) {
      const picture = new Image();
      picture.src = `assets/screens/${key}.png?v=20261014-v022`;
      const ready = picture.decode ? picture.decode() : new Promise((resolve,reject)=>{if(picture.complete&&picture.naturalWidth)resolve();else{picture.onload=resolve;picture.onerror=reject;}});
      pictures.set(key,ready.then(()=>picture).catch(error=>{pictures.delete(key);throw error;}));
    }
    return pictures.get(key);
  }
  function updateControls(key) {
    tabs.forEach(tab=>{const active=tab.dataset.screen===key;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
    dots.forEach(dot=>dot.setAttribute('aria-pressed',String(dot.dataset.carousel===key)));
  }
  function animateChange(previous,direction) {
    stage.querySelectorAll('.screen-outgoing').forEach(node=>node.remove());
    image.getAnimations?.().forEach(animation=>animation.cancel());
    if (reducedMotion.matches || typeof image.animate!=='function') return;
    previous.removeAttribute('id');previous.className='screen-outgoing';previous.alt='';previous.setAttribute('aria-hidden','true');stage.append(previous);
    const options={duration:320,easing:'cubic-bezier(.22,.65,.2,1)'};
    previous.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-direction*18}px)`}],options).finished.catch(()=>{}).finally(()=>previous.remove());
    image.animate([{opacity:0,transform:`translateX(${direction*22}px)`},{opacity:1,transform:'translateX(0)'}],options);
    document.querySelector('.screen-description').animate([{opacity:.35,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'ease-out'});
  }
  async function select(key,direction=1) {
    if (!screens[key] || key===requested) return;
    requested=key;
    const token=++generation;
    updateControls(key);panel.setAttribute('aria-busy','true');
    try {
      const picture=await preload(key);
      if(token!==generation)return;
      const previous=image.cloneNode(false);
      image.src=picture.src;image.alt=screens[key].alt;
      current=key;
      panel.setAttribute('aria-labelledby',`tab-${key}`);
      document.getElementById('screen-title').textContent=screens[key].title;
      document.getElementById('screen-heading').textContent=screens[key].heading;
      document.getElementById('screen-text').textContent=screens[key].text;
      document.getElementById('screen-index').textContent=`${String(keys.indexOf(key)+1).padStart(2,'0')} / ${String(keys.length).padStart(2,'0')}`;
      animateChange(previous,direction);
    } catch (_) {
      if(token!==generation)return;
      requested=current;updateControls(current);
      document.getElementById('screen-text').textContent='Снимок не загрузился. Выберите экран ещё раз.';
    } finally {if(token===generation)panel.setAttribute('aria-busy','false');}
  }
  function step(direction) {const index=keys.indexOf(requested);select(keys[(index+direction+keys.length)%keys.length],direction);}
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>select(tab.dataset.screen,keys.indexOf(tab.dataset.screen)>=keys.indexOf(current)?1:-1));
    tab.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
      if(event.key==='Home')next=0;
      if(event.key==='End')next=tabs.length-1;
      if(next===undefined)return;
      event.preventDefault();select(tabs[next].dataset.screen,next>=index?1:-1);tabs[next].focus();
    });
  });
  dots.forEach(dot=>dot.addEventListener('click',()=>select(dot.dataset.carousel)));
  document.getElementById('screen-prev').addEventListener('click',()=>step(-1));
  document.getElementById('screen-next').addEventListener('click',()=>step(1));
  panel.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();step(event.key==='ArrowRight'?1:-1);}});
  stage.addEventListener('touchstart',event=>{touchStart=event.touches.length===1?{x:event.touches[0].clientX,y:event.touches[0].clientY}:null;},{passive:true});
  stage.addEventListener('touchend',event=>{if(!touchStart)return;const touch=event.changedTouches[0];const dx=touch.clientX-touchStart.x,dy=touch.clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3){ignoreClickUntil=Date.now()+500;step(dx<0?1:-1);}},{passive:true});
  stage.addEventListener('touchcancel',()=>{touchStart=null;},{passive:true});
  function openScreenshot() {
    const expanded=document.getElementById('dialog-image');expanded.src=image.src;expanded.alt=image.alt;
    document.getElementById('dialog-title').textContent=screens[current].title;
    if(typeof dialog.showModal==='function')dialog.showModal();else window.open(image.src,'_blank','noopener');
  }
  document.getElementById('screen-expand').addEventListener('click',openScreenshot);
  stage.addEventListener('click',()=>{if(Date.now()>=ignoreClickUntil)openScreenshot();});
  let closing = false, closeTimer;
  function requestClose() {
    if (!dialog.open || closing) return;
    if (reducedMotion.matches) { dialog.close(); return; }
    closing = true;
    dialog.classList.add('is-closing');
    const finish = () => {
      clearTimeout(closeTimer);
      dialog.removeEventListener('animationend', onEnd);
      dialog.close();
      dialog.classList.remove('is-closing');
      closing = false;
    };
    const onEnd = event => { if (event.target === dialog && event.animationName === 'dialog-exit') finish(); };
    dialog.addEventListener('animationend', onEnd);
    closeTimer = setTimeout(finish, 300);
  }
  dialog.querySelector('form').addEventListener('submit',event=>{event.preventDefault();requestClose();});
  dialog.addEventListener('cancel',event=>{event.preventDefault();requestClose();});
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)requestClose();});
  keys.forEach(key=>{preload(key).catch(()=>{});});
})();
