// global sticky menu
// global sticky menu
// global sticky menu
var stickyMenu = document.getElementsByClassName('stickyMenu')[0];
function stickyMenuFunc(){
  if(this.oldScroll > this.scrollY && window.scrollY > 1 ){
    if(window.innerWidth > window.innerHeight){
        stickyMenu.style.height = '5.2vw';
    }else{
      stickyMenu.style.height = '15.384vw';
    }
  }
  else {
    stickyMenu.style.height = '0vw';
  }
  this.oldScroll = this.scrollY;
}

// burger overlay logic
// burger overlay logic
// burger overlay logic
//burgerMenu
var burgerDiv = document.getElementsByClassName('burgerMenu');
var burgerMenuOverlayWhite = document.getElementsByClassName('burgerMenuOverlayWhite')[0];
var burgerOverlayBlackBox = document.getElementsByClassName('burgerOverlayBlackBox')[0];
var wholePageOverlay = document.getElementsByClassName('wholePageOverlay')[0];
var closeBox = document.getElementsByClassName('closeBox')[0];
var stickySwitch = 0;
burgerDiv[0].addEventListener('click',function(){
  openMenu();
})
burgerDiv[1].addEventListener('click',function(){
  openMenu();
})
function openMenu(){
  stickySwitch =1;
  burgerMenuOverlayWhite.style.width = "102%";
  stickyMenu.style.height = '0vw';
  setTimeout(function(){
    if(window.innerWidth > window.innerHeight){
    burgerOverlayBlackBox.style.width = '30vw';
  }else{
    burgerOverlayBlackBox.style.width = '75vw';
  }
    wholePageOverlay.style.filter = 'blur(10px)';
  },1000)
}

closeBox.addEventListener('click',function(){
  closeBoxFun();
});
function closeBoxFun(){
  stickySwitch = 0;
  wholePageOverlay.style.filter = 'blur(0px)';
  setTimeout(function(){
    burgerMenuOverlayWhite.style.width = "0%";
    burgerOverlayBlackBox.style.width = '0vw';
  },700)
}
//<a> slider close on click
var closeMeClass = document.getElementsByClassName('closeMeClass');
for(var i=0;i<closeMeClass.length;i++){
  closeMeClass[i].addEventListener('click',function(){
    closeBoxFun();
  });
}

// global window on scroll
// global window on scroll
// global window on scroll

window.addEventListener('scroll', ()=>{
  stickyMenuFunc();
});
