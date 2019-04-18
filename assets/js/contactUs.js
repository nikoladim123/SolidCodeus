var LetterOpenContainer = document.getElementsByClassName('LetterOpenContainer')[0];
var letterPaper = document.getElementsByClassName('letterPaper')[0];

function LetterOpenContainerFun(){
  LetterOpenContainer.style.transition = '2s';
  LetterOpenContainer.style.transform = 'rotateX(69deg)';
  setTimeout(function () {
    letterPaperFun();
  }, 1800);
}

function letterPaperFun() {
  letterPaper.style.bottom = "0vw";
}

window.onload = function(){
  LetterOpenContainerFun();
}
