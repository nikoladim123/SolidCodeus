var UIUXdesign = document.getElementsByClassName('UIUXdesign')[0];
var wordpressDevelopment = document.getElementsByClassName('wordpressDevelopment')[0];
var seoMarketing = document.getElementsByClassName('seoMarketing')[0];
var ecommerceSolutions = document.getElementsByClassName('ecommerceSolutions')[0];

function selectService(e) {
  UIUXdesign.style.width = '2.5%';
  wordpressDevelopment.style.width = '2.5%';
  seoMarketing.style.width = '2.5%';
  ecommerceSolutions.style.width = '2.5%';
  e.target.style.width = '100%';
  console.log(e.target);
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
