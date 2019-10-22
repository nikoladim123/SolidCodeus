var UIUXdesign = document.getElementsByClassName('UIUXdesign')[0];
var wordpressDevelopment = document.getElementsByClassName('wordpressDevelopment')[0];
var seoMarketing = document.getElementsByClassName('seoMarketing')[0];
var ecommerceSolutions = document.getElementsByClassName('ecommerceSolutions')[0];
var uiuxText = document.getElementsByClassName('uiuxText');
var clickable = document.getElementsByClassName('clickable');
var banDiv = document.getElementsByClassName('banDiv');
var headingTop = document.getElementsByClassName('headingTop');
var headingBot = document.getElementsByClassName('headingBot');
var content = document.getElementsByClassName('content');



function textChange() {
  uiuxText[0].style.transform = 'rotate(90deg)';
  uiuxText[1].style.transform = 'rotate(90deg)';
  uiuxText[2].style.transform = 'rotate(90deg)';
  uiuxText[3].style.transform = 'rotate(90deg)';
  uiuxText[0].style.fontSize = '1.7vw';
  uiuxText[1].style.fontSize = '1.7vw';
  uiuxText[2].style.fontSize = '1.7vw';
  uiuxText[3].style.fontSize = '1.7vw';
  UIUXdesign.style.width = '0%';
  wordpressDevelopment.style.width = '0%';
  seoMarketing.style.width = '0%';
  ecommerceSolutions.style.width = '0%';
}

function highLight(e) {
  clickable[0].style.background = 'rgba(255,255,255,0.3)';
  clickable[1].style.background = 'rgba(255,255,255,0.3)';
  clickable[2].style.background = 'rgba(255,255,255,0.3)';
  clickable[3].style.background = 'rgba(255,255,255,0.3)';
  e.target.style.background = 'rgba(255,255,255,1)';
}

function hightLightOnLoad(e) {
  clickable[0].style.background = 'rgba(255,255,255,0.3)';
  clickable[1].style.background = 'rgba(255,255,255,0.3)';
  clickable[2].style.background = 'rgba(255,255,255,0.3)';
  clickable[3].style.background = 'rgba(255,255,255,0.3)';
  for (var i = 0; i < clickable.length; i++) {
    if(clickable[i].dataset.num == e){
      clickable[i].style.background = 'rgba(255,255,255,1)';
    }
  }
}




function selectNew(e) {
  textChange();
  banDiv[e.target.dataset.num].style.width = '100%';
  uiuxText[e.target.dataset.num].style.transform = 'rotate(0deg)';
  uiuxText[e.target.dataset.num].style.fontSize = '3vw';
  console.log(e.target.dataset.num);
}

function controlContent(param) {
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  };
  content[param].style.display = 'block';
}

function scrollintoViewMain() {
  setTimeout(function () {
    document.getElementsByClassName('main')[0].scrollIntoView()
  }, 900);
}

clickable[0].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'ECOMMERCE';
    headingBot[0].innerText = 'SOLUTIONS';
    controlContent(3);
    scrollintoViewMain();
})
clickable[1].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'SEO &';
    headingBot[0].innerText = 'MARKETING';
    controlContent(2);
    scrollintoViewMain();
})
clickable[2].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'WEB';
    headingBot[0].innerText = 'DEVELOPMENT';
    controlContent(1);
    scrollintoViewMain();
})
clickable[3].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'UI/UX';
    headingBot[0].innerText = 'DESIGN';
    controlContent(0);
    scrollintoViewMain();
})

  // Load headings top/bot
function loadHeadings(ses) {
  if(ses === 0){
    headingTop[0].innerText = 'UI/UX';
    headingBot[0].innerText = 'DESIGN';
  }
  if(ses === 1){
    headingTop[0].innerText = 'WEB';
    headingBot[0].innerText = 'DEVELOPMENT';
  }
  if(ses === 2){
    headingTop[0].innerText = 'SEO &';
    headingBot[0].innerText = 'MARKETING';
  }
  if(ses === 3){
    headingTop[0].innerText = 'ECOMMERCE';
    headingBot[0].innerText = 'SOLUTIONS';
  }
}

  // load content
function loadContentFun() {
  content[parseInt(window.sessionStorage.selection)].style.display = 'block';
}

  // loadSelection
function loadSelection() {
  if(typeof window.sessionStorage.selection !== 'undefined'){
    textChange();
    banDiv[window.sessionStorage.selection].style.width = '100%';
    uiuxText[window.sessionStorage.selection].style.transform = 'rotate(0deg)';
    uiuxText[window.sessionStorage.selection].style.fontSize = '3vw';
    clickable[window.sessionStorage.selection].style.background = 'rgba(255,255,255,1)';
    loadHeadings(parseInt(window.sessionStorage.selection));
    hightLightOnLoad(parseInt(window.sessionStorage.selection));
    loadContentFun();
  }
}


// web dev JS
// web dev JS
var webDevText = document.getElementsByClassName('webDevText');

function webDevTextFun() {
  if (webDevText[0].getClientRects()[0].top < window.innerHeight / 1.5) {
    webDevText[0].style.top = '-4vw';
    console.log(123);
  }
}

// ecoom cont js
// ecoom cont js
var ppheaderLeftContent = document.getElementsByClassName('ppheaderLeftContent');
function ppheaderLeftContentFun() {
  if(ppheaderLeftContent[0].getClientRects()[0].top < window.innerHeight /2){
    ppheaderLeftContent[0].style.left = '-11vw';
  }else{
    ppheaderLeftContent[0].style.left = '-60vw';
  }
}

var eComMain = document.getElementsByClassName('eComMain');
function eComMainFun() {
  if(eComMain[0].getClientRects()[0].top < window.innerHeight /2){
    eComMain[0].style.background = 'white';
  }else{
    eComMain[0].style.background = '#e49b13';
  }
}

var dust = document.getElementsByClassName('dust');
var bigProductImg = document.getElementsByClassName('bigProductImg');
var prodMiniBox = document.getElementsByClassName('prodMiniBox');
var leftCarArrowBox = document.getElementsByClassName('leftCarArrowBox');

var ecomProdImages = 3;
// assets/images/desktop/eCommerce/1.png
setInterval(function () {
  leftCarArrowBoxFunAnim();
  bigProductImg[0].style.opacity = '0';
  dust[0].style.transform = 'rotate(360deg)';
  dust[0].style.opacity = '0';
  setTimeout(function () {
    ecomProdImages++;
    bigProductImg[0].src = 'assets/images/desktop/eCommerce/' + (1 + ecomProdImages%3) + '.png';
    prodMiniBoxFun();
  }, 1000);
  setTimeout(function () {
    bigProductImg[0].style.opacity = '1';
    dust[0].style.opacity = '1';
    dust[0].style.transform = 'rotate(0deg)';
  }, 1200);
}, 4000);

function prodMiniBoxFun() {
  for (var i = 0; i < prodMiniBox.length; i++) {
    prodMiniBox[i].style.transform = 'scale(1)';
  }
  prodMiniBox[ecomProdImages%3].style.transform = 'scale(1.2)';
}

function leftCarArrowBoxFunAnim() {
  leftCarArrowBox[0].style.background = 'rgb(230,230,230,0.65)';
  setTimeout(function () {
    leftCarArrowBox[0].style.background = 'rgb(230,230,230,0.25)';
  }, 500);
}


// windows events
// windows events
// windows events
window.addEventListener('load',()=>{
  loadSelection();
})

window.addEventListener('scroll',()=>{
  ppheaderLeftContentFun();
  eComMainFun();
  // webDevTextFun();
})
