var simpleArc = document.getElementsByClassName('simpleArc');
var w = document.getElementsByClassName('w');
var leftPortfolioText = document.getElementsByClassName('leftPortfolioText');
var leftImgContainerRevealDiv = document.getElementsByClassName('leftImgContainerRevealDiv');
var spanDelayClass = document.getElementsByClassName('spanDelayClass');


var spanDelayTime = 0.05;
for (var i = 0; i < spanDelayClass.length; i++) {
  spanDelayClass[i].transitionDelay = `${spanDelayTime}s`
  spanDelayTime+=0.035;
}

function spanMoveLeft(spanClass,sectionSide) {
  var spanElement = document.getElementsByClassName(spanClass);
  var leftPos = 0;
  for (var i = 0; i < spanElement.length; i++) {
    spanElement[i].style.left = `${leftPos}vw`;
    spanElement[i].style.filter = 'blur(0)';
    if(sectionSide == 'left'){
      leftPos-=2;
    }else{
      leftPos+=2;
    }
  }
}

function rotate(spanClass) {
  var spanElement = document.getElementsByClassName(spanClass);
  var rotateAngle = 0;
  for (var i = 0; i < w.length; i++) {
    spanElement[i].style.transform = `rotate(${rotateAngle}deg)`;
    spanElement[i].style.left = `0`;
    rotateAngle+=13;
  }
}

// var fireFirstMovement = 1;
function fireSpanMovement(arcActualElement,spanClassName,sectionSide) {
  if(arcActualElement.getClientRects()[0].top < window.innerHeight *0.95 && arcActualElement.dataset.atr != 'yes'){
    arcActualElement.dataset.atr = 'yes';
    spanMoveLeft(spanClassName,sectionSide)
    console.log(123);
  }
}

function fireSpanRotate(arcActualElement,spanClass) {
  if(arcActualElement.getClientRects()[0].top < window.innerHeight *0.35){
    rotate(spanClass);
  }
}

function fireRevealAndTextAnim(revealActualElement,textActualElement,sectionSide) {
  if(revealActualElement.getClientRects()[0].top < window.innerHeight *0.30){
    revealActualElement.style.width = '0%';
    setTimeout(function () {
      if(sectionSide === 'left'){
        textActualElement.style.left = '46vw';
      }else{
        textActualElement.style.right = '48.13vw';
      }
    }, 500);
  }
}

// simplify


window.addEventListener('scroll',()=>{
  // 1
  fireSpanMovement(simpleArc[0],'w','left');
  fireSpanRotate(simpleArc[0],'w');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[0], leftPortfolioText[0], 'left')

  // 2
  fireSpanMovement(simpleArc[1],'b');
  fireSpanRotate(simpleArc[1],'b');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[1],leftPortfolioText[1])

  // 3
  fireSpanMovement(simpleArc[2],'c','left');
  fireSpanRotate(simpleArc[2],'c');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[2], leftPortfolioText[2], 'left')

  // 2
  fireSpanMovement(simpleArc[3],'d');
  fireSpanRotate(simpleArc[3],'d');
  fireRevealAndTextAnim(leftImgContainerRevealDiv[3],leftPortfolioText[3])
});
