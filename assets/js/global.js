// global sticky menu
// global sticky menu
// global sticky menu
var stickyMenu = document.getElementsByClassName('stickyMenu')[0];
function stickyMenuFunc(){
  if(this.oldScroll > this.scrollY && window.scrollY > 1 ){
    if(window.innerWidth > window.innerHeight){
        stickyMenu.style.height = '5.2vw';
    }else{
      stickyMenu.style.height = '17vw';
    }
  }
  else {
    stickyMenu.style.height = '0vw';
  }
  this.oldScroll = this.scrollY;
}

// global window on scroll
// global window on scroll
// global window on scroll

window.addEventListener('scroll', ()=>{
  stickyMenuFunc();
});
