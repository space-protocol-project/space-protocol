(() => {
  const screens = {
    chat: {title:'Общий чат',heading:'Разговор в центре.',text:'Каналы и разделы слева, общение в центре, контекст пространства справа. На снимке показан экран до подключения к серверу.',alt:'Flutter-приложение Space: общий чат и боковая навигация, подключение ещё не выполнено'},
    settings: {title:'Личные настройки',heading:'Пусть будет удобно вам.',text:'Светлая и тёмная темы, компактный режим и личные палитры. Оформление сохраняется на устройстве и не меняет права доступа.',alt:'Flutter-приложение Space: настройки тёмной темы, компактного режима и палитры'},
    identity: {title:'Идентичность и восстановление',heading:'Ваши ключи. Ваш доступ.',text:'Состояние устройства, восстановление и ротация ключа находятся на странице идентичности. На снимке показана сборка без активного подключения.',alt:'Flutter-приложение Space: идентичность, восстановление ключей и ротация'},
    channels: {title:'Управление каналами',heading:'Правила рядом с разговором.',text:'Общие Flutter-формы позволяют настраивать каналы, порядок и архив. Этот снимок сделан в тестовой оболочке общего модуля; сейчас управление встроено в основное приложение.',alt:'Общие Flutter-формы: настройки пространства, список каналов и изменение канала'}
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
  let current = 'chat', requested = 'chat', generation = 0;
  let touchStart = null;
  function preload(key) {
    if (!pictures.has(key)) {
      const picture = new Image();
      picture.src = `assets/screens/${key}.png`;
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
      document.getElementById('screen-index').textContent=`0${keys.indexOf(key)+1} / 04`;
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
  stage.addEventListener('touchend',event=>{if(!touchStart)return;const touch=event.changedTouches[0];const dx=touch.clientX-touchStart.x,dy=touch.clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)step(dx<0?1:-1);},{passive:true});
  stage.addEventListener('touchcancel',()=>{touchStart=null;},{passive:true});
  document.getElementById('screen-expand').addEventListener('click',()=>{
    const expanded=document.getElementById('dialog-image');expanded.src=image.src;expanded.alt=image.alt;
    document.getElementById('dialog-title').textContent=screens[current].title;
    if(typeof dialog.showModal==='function')dialog.showModal();else window.open(image.src,'_blank','noopener');
  });
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();});
  keys.forEach(key=>{preload(key).catch(()=>{});});
})();
