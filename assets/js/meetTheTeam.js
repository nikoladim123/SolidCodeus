var redQuareAnimBoxOne = document.getElementsByClassName('redQuareAnimBoxOne');
var mebmerNameBoxAnimBox = document.getElementsByClassName('mebmerNameBoxAnimBox');
var memberPicutreAnimBox = document.getElementsByClassName('memberPicutreAnimBox');
var sideTextAnimBox = document.getElementsByClassName('sideTextAnimBox');
  // graphLine
var graphLine = document.getElementsByClassName('graphLine');



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

// sarvesh
function sarveshRevealAnimFun() {
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

// sara
function saraRevealAnimFun() {
  if(redQuareAnimBoxOne[2].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    redQuareAnimBoxOne[2].style.width = '0%';
  }
  if(mebmerNameBoxAnimBox[2].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    mebmerNameBoxAnimBox[2].style.width = '0%';
  }
  if(memberPicutreAnimBox[2].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    memberPicutreAnimBox[2].style.width = '0%';
  }
  if(sideTextAnimBox[2].getBoundingClientRect().top - window.innerHeight <= -(window.innerHeight/100 * 20) ){
    sideTextAnimBox[2].style.height = '0%';
  }
}

// graph anim
// graph anim
// graph anim
function graphLineFun() {
  graphLine[0].style.height = "6vw";
  graphLine[1].style.height = "8vw";
  graphLine[2].style.height = "10vw";
  graphLine[3].style.height = "8vw";
  graphLine[4].style.height = "12vw";
  setTimeout(function () {
    graphLine[0].style.height = "0vw";
    graphLine[1].style.height = "0vw";
    graphLine[2].style.height = "0vw";
    graphLine[3].style.height = "0vw";
    graphLine[4].style.height = "0vw";
    setTimeout(function () {
      graphLineFun();
    }, 6000);
  }, 6000);
}




window.onscroll = ()=>{
  cyrusRevealAnimFun();
  sarveshRevealAnimFun();
  saraRevealAnimFun();
}

window.onload = ()=>{
  graphLineFun();
}
