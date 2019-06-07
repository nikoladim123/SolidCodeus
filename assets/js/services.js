var UIUXdesign = document.getElementsByClassName('UIUXdesign')[0];
var wordpressDevelopment = document.getElementsByClassName('wordpressDevelopment')[0];
var seoMarketing = document.getElementsByClassName('seoMarketing')[0];
var ecommerceSolutions = document.getElementsByClassName('ecommerceSolutions')[0];
var uiuxText = document.getElementsByClassName('uiuxText');
var clickable = document.getElementsByClassName('clickable');
var banDiv = document.getElementsByClassName('banDiv');


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

function selectService(e) {
  textChange();
  e.target.style.width = '100%';
  console.log(e.target.dataset.number);
  uiuxText[e.target.dataset.number].style.transform = 'rotate(0deg)';
  uiuxText[e.target.dataset.number].style.fontSize = '3vw';
}


// new
function selectNew(e) {
  textChange();
  banDiv[e.target.dataset.num].style.width = '100%';
  uiuxText[e.target.dataset.num].style.transform = 'rotate(0deg)';
  uiuxText[e.target.dataset.num].style.fontSize = '3vw';
  console.log(e.target.dataset.num);
}

clickable[0].addEventListener('click',(e)=>{
    selectNew(e);
})
clickable[1].addEventListener('click',(e)=>{
    selectNew(e);
})
clickable[2].addEventListener('click',(e)=>{
    selectNew(e);
})
clickable[3].addEventListener('click',(e)=>{
    selectNew(e);
})
  // loadSelection
function loadSelection() {
  textChange();
  if(typeof window.sessionStorage.selection !== 'undefined'){
    banDiv[window.sessionStorage.selection].style.width = '100%';
    uiuxText[window.sessionStorage.selection].style.transform = 'rotate(0deg)';
    uiuxText[window.sessionStorage.selection].style.fontSize = '3vw';
  }
}

// windows events
// windows events
// windows events
window.addEventListener('load',()=>{
  loadSelection();
})
