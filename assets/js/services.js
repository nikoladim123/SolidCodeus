var UIUXdesign = document.getElementsByClassName('UIUXdesign')[0];
var wordpressDevelopment = document.getElementsByClassName('wordpressDevelopment')[0];
var seoMarketing = document.getElementsByClassName('seoMarketing')[0];
var ecommerceSolutions = document.getElementsByClassName('ecommerceSolutions')[0];
var uiuxText = document.getElementsByClassName('uiuxText');
var clickable = document.getElementsByClassName('clickable');
var banDiv = document.getElementsByClassName('banDiv');
var headingTop = document.getElementsByClassName('headingTop');
var headingBot = document.getElementsByClassName('headingBot');


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




function selectNew(e) {
  textChange();
  banDiv[e.target.dataset.num].style.width = '100%';
  uiuxText[e.target.dataset.num].style.transform = 'rotate(0deg)';
  uiuxText[e.target.dataset.num].style.fontSize = '3vw';
  console.log(e.target.dataset.num);
}

clickable[0].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'ECOMMERCE';
    headingBot[0].innerText = 'SOLUTIONS';
})
clickable[1].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'SEO &';
    headingBot[0].innerText = 'MARKETING';
})
clickable[2].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'WORDPRESS';
    headingBot[0].innerText = 'DEVELOPMENT';
})
clickable[3].addEventListener('click',(e)=>{
    selectNew(e);
    highLight(e);
    headingTop[0].innerText = 'UI/UX';
    headingBot[0].innerText = 'DESIGN';
})

  // Load headings top/bot
function loadHeadings(ses) {
  if(ses === 3){
    headingTop[0].innerText = 'UI/UX';
    headingBot[0].innerText = 'DESIGN';
  }
  if(ses === 2){
    headingTop[0].innerText = 'WORDPRESS';
    headingBot[0].innerText = 'DEVELOPMENT';
  }
  if(ses === 1){
    headingTop[0].innerText = 'SEO &';
    headingBot[0].innerText = 'MARKETING';
  }
  if(ses === 0){
    headingTop[0].innerText = 'ECOMMERCE';
    headingBot[0].innerText = 'SOLUTIONS';
  }
}

  // loadSelection
function loadSelection() {
  if(typeof window.sessionStorage.selection !== 'undefined'){
    textChange();
    banDiv[window.sessionStorage.selection].style.width = '100%';
    uiuxText[window.sessionStorage.selection].style.transform = 'rotate(0deg)';
    uiuxText[window.sessionStorage.selection].style.fontSize = '3vw';
    clickable[window.sessionStorage.selection].style = 'rgba(255,255,255,1)';
    loadHeadings(window.sessionStorage.selection);
  }
}

// windows events
// windows events
// windows events
window.addEventListener('load',()=>{
  loadSelection();
})
