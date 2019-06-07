var UIUXdesign = document.getElementsByClassName('UIUXdesign')[0];
var wordpressDevelopment = document.getElementsByClassName('wordpressDevelopment')[0];
var seoMarketing = document.getElementsByClassName('seoMarketing')[0];
var ecommerceSolutions = document.getElementsByClassName('ecommerceSolutions')[0];
var uiuxText = document.getElementsByClassName('uiuxText');

function selectService(e) {
  UIUXdesign.style.width = '2.5%';
  wordpressDevelopment.style.width = '2.5%';
  seoMarketing.style.width = '2.5%';
  ecommerceSolutions.style.width = '2.5%';
  e.target.style.width = '100%';
  console.log(e.target.dataset.number);
  uiuxText[0].style.transform = 'rotate(90deg)';
  uiuxText[1].style.transform = 'rotate(90deg)';
  uiuxText[2].style.transform = 'rotate(90deg)';
  uiuxText[3].style.transform = 'rotate(90deg)';
  uiuxText[e.target.dataset.number].style.transform = 'rotate(0deg)';
}

UIUXdesign.addEventListener('click',(e)=>{
    selectService(e);
})
wordpressDevelopment.addEventListener('click',(e)=>{
    selectService(e);
})
seoMarketing.addEventListener('click',(e)=>{
    selectService(e);
})
ecommerceSolutions.addEventListener('click',(e)=>{
    selectService(e);
})