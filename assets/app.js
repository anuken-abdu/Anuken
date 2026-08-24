/* ═══════════════════════════════════════════════════════════
   Anuken — общий скрипт. Подключается на всех страницах.
   ═══════════════════════════════════════════════════════════ */
(function(){
'use strict';
var WA='77074534518';
var TG='https://t.me/Anukenn';
window.ANUKEN={wa:WA,tg:TG};

/* ── 1. Картинки: плавное появление + запасной .jpg, если .webp нет ── */
function markLoaded(img){
  img.classList.add('loaded');
  var box=img.closest('.case-img,.rev-item');
  if(box)box.classList.add('done');
}
function imgFallback(img){
  var pic=img.parentElement;
  if(pic&&pic.tagName==='PICTURE'){
    var s=pic.querySelector('source');
    if(s){s.remove();var f=img.getAttribute('data-fallback')||img.currentSrc||img.src;img.src=f;return}
  }
  img.style.visibility='hidden';
  var box=img.closest('.case-img,.rev-item');
  if(box)box.classList.add('done');
}
window.anukenImg=function(img){
  if(img.complete&&img.naturalWidth>0)markLoaded(img);
  else{
    img.addEventListener('load',function(){markLoaded(img)},{once:true});
    img.addEventListener('error',function(){imgFallback(img)},{once:true});
  }
};
function scanImages(root){
  (root||document).querySelectorAll('img:not([data-scanned])').forEach(function(img){
    img.setAttribute('data-scanned','1');
    if(!img.hasAttribute('decoding'))img.decoding='async';
    window.anukenImg(img);
  });
}
window.anukenScanImages=scanImages;

/* ── 2. Фон первого экрана: одна картинка, один запрос ── */
window.anukenHero=function(){
  var box=document.querySelector('.hero-bg img');
  if(!box)return;
  scanImages(document.querySelector('.hero-bg'));
};

/* ── 3. Ссылки WhatsApp с готовым текстом ── */
window.buildWA=function(root){
  (root||document).querySelectorAll('[data-wa]').forEach(function(a){
    a.href='https://wa.me/'+WA+'?text='+encodeURIComponent(a.getAttribute('data-wa'));
    a.setAttribute('rel','noopener');
  });
};

/* ── 4. Появление блоков при прокрутке ── */
var obs=null;
window.initA=function(){
  if(!('IntersectionObserver'in window)){
    document.querySelectorAll('[data-a]').forEach(function(e){e.classList.add('vis')});return;
  }
  if(!obs)obs=new IntersectionObserver(function(en){
    en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}})
  },{threshold:.06,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('[data-a]:not(.vis)').forEach(function(el){obs.observe(el)});
};

/* ── 5. FAQ ── */
window.togFAQ=function(el){
  var it=el.closest('.faq-item');
  var was=it.classList.contains('open');
  var scope=it.parentElement;
  scope.querySelectorAll('.faq-item').forEach(function(f){
    f.classList.remove('open');
    var a=f.querySelector('.faq-a');if(a)a.style.maxHeight='0';
  });
  if(!was){
    it.classList.add('open');
    var a=it.querySelector('.faq-a');
    a.style.maxHeight=a.scrollHeight+'px';
  }
};

/* ── 6. Шапка, кнопка «вверх», прозрачность у низа страницы ── */
var hdr=null,fabUp=null,ticking=false;
function onScroll(){
  if(ticking)return;ticking=true;
  requestAnimationFrame(function(){
    var y=window.scrollY||document.documentElement.scrollTop;
    if(hdr)hdr.classList.toggle('scrolled',y>40);
    if(fabUp)fabUp.classList.toggle('show',y>420);
    var doc=document.documentElement;
    var bottomGap=doc.scrollHeight-(y+window.innerHeight);
    document.body.classList.toggle('at-bottom',bottomGap<140);
    ticking=false;
  });
}

/* ── 7. Кнопка «Назад» ── */
function initBack(){
  var b=document.getElementById('btnBack');
  if(!b)return;
  var ref=document.referrer;
  var sameHost=false;
  try{sameHost=ref&&new URL(ref).host===location.host}catch(e){}
  var canBack=sameHost&&window.history.length>1;
  if(!document.body.hasAttribute('data-tabs')&&canBack)b.classList.add('show');
  b.addEventListener('click',function(){
    if(canBack){window.history.back()}
    else{window.location.href=b.getAttribute('data-home')||'/'}
  });
}
window.anukenShowBack=function(show){
  var b=document.getElementById('btnBack');
  if(b)b.classList.toggle('show',!!show);
};

/* ── 8. Лайтбокс для скриншотов отзывов ── */
var lbItems=[],lbIdx=0;
function lbOpen(i){
  var lb=document.getElementById('lb');if(!lb)return;
  lbIdx=i;lbRender();lb.classList.add('open');document.body.style.overflow='hidden';
}
function lbClose(){
  var lb=document.getElementById('lb');if(!lb)return;
  lb.classList.remove('open');document.body.style.overflow='';
}
function lbRender(){
  var img=document.getElementById('lbImg');
  var cnt=document.getElementById('lbCount');
  if(!img)return;
  img.src=lbItems[lbIdx].src;
  img.alt=lbItems[lbIdx].alt||'';
  if(cnt)cnt.textContent=(lbIdx+1)+' / '+lbItems.length;
}
function lbMove(d){
  if(!lbItems.length)return;
  lbIdx=(lbIdx+d+lbItems.length)%lbItems.length;lbRender();
}
window.anukenInitLightbox=function(){
  var nodes=document.querySelectorAll('.rev-item');
  if(!nodes.length)return;
  lbItems=[];
  nodes.forEach(function(n,i){
    var im=n.querySelector('img');
    lbItems.push({src:n.getAttribute('data-full')||(im?im.getAttribute('data-fallback')||im.src:''),alt:im?im.alt:''});
    n.addEventListener('click',function(){lbOpen(i)});
    n.addEventListener('keydown',function(ev){if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();lbOpen(i)}});
  });
  var lb=document.getElementById('lb');
  if(!lb)return;
  lb.addEventListener('click',function(e){if(e.target===lb)lbClose()});
  var c=document.getElementById('lbClose');if(c)c.addEventListener('click',lbClose);
  var p=document.getElementById('lbPrev');if(p)p.addEventListener('click',function(e){e.stopPropagation();lbMove(-1)});
  var n=document.getElementById('lbNext');if(n)n.addEventListener('click',function(e){e.stopPropagation();lbMove(1)});
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')lbClose();
    if(e.key==='ArrowLeft')lbMove(-1);
    if(e.key==='ArrowRight')lbMove(1);
  });
};

/* ── 9. Только один голосовой отзыв играет одновременно ── */
function initAudio(){
  var list=document.querySelectorAll('audio');
  list.forEach(function(a){
    a.addEventListener('play',function(){
      list.forEach(function(o){if(o!==a&&!o.paused)o.pause()});
    });
  });
}

/* ── 10. Мобильное меню ── */
function initMenu(){
  var btn=document.getElementById('menuBtn'),m=document.getElementById('mmenu');
  if(!btn||!m)return;
  var open=false;
  function set(v){
    open=v;m.classList.toggle('open',v);
    btn.innerHTML=v?'<i class="fas fa-times"></i>':'<i class="fas fa-bars"></i>';
    btn.setAttribute('aria-expanded',v?'true':'false');
    document.body.style.overflow=v?'hidden':'';
  }
  btn.addEventListener('click',function(){set(!open)});
  var x=document.getElementById('mmClose');
  if(x)x.addEventListener('click',function(){set(false)});
  m.addEventListener('click',function(ev){if(ev.target===m)set(false)});
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
  document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&open)set(false)});
  window.anukenCloseMenu=function(){set(false)};
}

/* ── старт ── */
function boot(){
  hdr=document.getElementById('hdr');
  fabUp=document.getElementById('fabUp');
  if(fabUp)fabUp.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll,{passive:true});
  onScroll();
  initBack();initMenu();initAudio();
  window.buildWA();scanImages();window.initA();
  window.anukenInitLightbox();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
else boot();
})();
