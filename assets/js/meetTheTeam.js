var redQuareAnimBoxOne = document.getElementsByClassName('redQuareAnimBoxOne');
var mebmerNameBoxAnimBox = document.getElementsByClassName('mebmerNameBoxAnimBox');
var memberPicutreAnimBox = document.getElementsByClassName('memberPicutreAnimBox');
var sideTextAnimBox = document.getElementsByClassName('sideTextAnimBox');



// cyrus
function cyrusRevealAnimFun() {
  if(redQuareAnimBoxOne[0].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    redQuareAnimBoxOne[0].style.width = '0%';
  }
  if(mebmerNameBoxAnimBox[0].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    mebmerNameBoxAnimBox[0].style.width = '0%';
  }
  if(memberPicutreAnimBox[0].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    memberPicutreAnimBox[0].style.width = '0%';
  }
  if(sideTextAnimBox[0].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    sideTextAnimBox[0].style.height = '0%';
  }
}

// sara
function saraRevealAnimFun() {
  if(redQuareAnimBoxOne[1].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    redQuareAnimBoxOne[1].style.width = '0%';
  }
  if(mebmerNameBoxAnimBox[1].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    mebmerNameBoxAnimBox[1].style.width = '0%';
  }
  if(memberPicutreAnimBox[1].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    memberPicutreAnimBox[1].style.width = '0%';
  }
  if(sideTextAnimBox[1].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    sideTextAnimBox[1].style.height = '0%';
  }
}

window.onscroll = ()=>{
  cyrusRevealAnimFun();
  saraRevealAnimFun();
}
