var main = document.getElementsByTagName('main');



function gardAnim() {
  main[0].style.background = `radial-gradient(ellipse at center,#f8eac3 0,#e3b63f ${gradScaler}%)`
}

var gradScaler = 80;
var swch = 0;
function functionName() {
  if(swch){
    gradScaler++;
    if(gradScaler>100){
      swch = 0;
    }
  }else{
    gradScaler--;
    if(gradScaler<65){
      swch = 1;
    }
  }
}
setInterval(function () {
  gardAnim();
  functionName()
}, 100);

// images anim
var imaeForAnim = document.getElementsByClassName('imaeForAnim');


function animScreens() {
  for (var i = 0; i < imaeForAnim.length; i++) {
    imaeForAnim[i].style.margin = '0 -3vw';
    imaeForAnim[i].style.opacity = '1';
  }
}

// reset
function reset() {
  for (var i = 0; i < imaeForAnim.length; i++) {
    imaeForAnim[i].style.margin = '0 15vw';
    imaeForAnim[i].style.opacity = '0';
  }
}

// right
var rightArrow = document.getElementsByClassName('right')
rightArrow[0].addEventListener('click',()=>{
  moveRight();
})

var folderNumber = 999;
function moveRight() {
  reset();
  folderNumber++;
  setTimeout(function () {
    for (var i = 0; i < imaeForAnim.length; i++) {
      imaeForAnim[i].src = `assets/images/desktop/recentWorks/${(folderNumber % 3)+1}/${i+1}.png`
    }
    animScreens()
  }, 1500);
}

// left
var leftArrow = document.getElementsByClassName('left')
leftArrow[0].addEventListener('click',()=>{
  moveLeft();
})

function moveLeft() {
  reset();
  folderNumber--;
  setTimeout(function () {
    for (var i = 0; i < imaeForAnim.length; i++) {
      imaeForAnim[i].src = `assets/images/desktop/recentWorks/${(folderNumber % 3)+1}/${i+1}.png`
    }
    animScreens()
  }, 1600);
}

// double hover
var overviewSection = document.getElementsByClassName('overviewSection');
function doubleHoverContent() {
  if(overviewSection[0].getClientRects()[0].top < window.innerHeight /1.4){
    overviewSection[0].style.background = '#e8e8e8'
    console.log(1);
  }else{
    overviewSection[0].style.background = '#e3b63f'
    console.log(2);
  }
}

// window events
window.addEventListener('load',()=>{
  animScreens();
});

window.addEventListener('scroll',()=>{
  doubleHoverContent()
});
