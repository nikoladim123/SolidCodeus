var UIUXdesign = document.getElementsByClassName('UIUXdesign')[0];
var wordpressDevelopment = document.getElementsByClassName('wordpressDevelopment')[0];
var seoMarketing = document.getElementsByClassName('seoMarketing')[0];
var ecommerceSolutions = document.getElementsByClassName('ecommerceSolutions')[0];
var uiuxText = document.getElementsByClassName('uiuxText');
var clickable = document.getElementsByClassName('clickable');
var banDiv = document.getElementsByClassName('banDiv');
var headingTop = document.getElementsByClassName('headingTop');
var headingBot = document.getElementsByClassName('headingBot');
var content = document.getElementsByClassName('content');



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

function highLight(e) {
  clickable[0].style.background = 'rgba(255,255,255,0.3)';
  clickable[1].style.background = 'rgba(255,255,255,0.3)';
  clickable[2].style.background = 'rgba(255,255,255,0.3)';
  clickable[3].style.background = 'rgba(255,255,255,0.3)';
  e.target.style.background = 'rgba(255,255,255,1)';
}

function hightLightOnLoad(e) {
  clickable[0].style.background = 'rgba(255,255,255,0.3)';
  clickable[1].style.background = 'rgba(255,255,255,0.3)';
  clickable[2].style.background = 'rgba(255,255,255,0.3)';
  clickable[3].style.background = 'rgba(255,255,255,0.3)';
  for (var i = 0; i < clickable.length; i++) {
    if (clickable[i].dataset.num == e) {
      clickable[i].style.background = 'rgba(255,255,255,1)';
    }
  }
}




function selectNew(e) {
  textChange();
  banDiv[e.target.dataset.num].style.width = '100%';
  uiuxText[e.target.dataset.num].style.transform = 'rotate(0deg)';
  uiuxText[e.target.dataset.num].style.fontSize = '3vw';
  console.log(e.target.dataset.num);
}

function controlContent(param) {
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  };
  content[param].style.display = 'block';
}

function scrollintoViewMain() {
  setTimeout(function() {
    document.getElementsByClassName('main')[0].scrollIntoView()
  }, 900);
}

clickable[0].addEventListener('click', (e) => {
  selectNew(e);
  highLight(e);
  headingTop[0].innerText = 'ECOMMERCE';
  headingBot[0].innerText = 'SOLUTIONS';
  controlContent(3);
  scrollintoViewMain();
})
clickable[1].addEventListener('click', (e) => {
  selectNew(e);
  highLight(e);
  headingTop[0].innerText = 'SEO &';
  headingBot[0].innerText = 'MARKETING';
  controlContent(2);
  scrollintoViewMain();
})
clickable[2].addEventListener('click', (e) => {
  selectNew(e);
  highLight(e);
  headingTop[0].innerText = 'WEB';
  headingBot[0].innerText = 'DEVELOPMENT';
  controlContent(1);
  scrollintoViewMain();
})
clickable[3].addEventListener('click', (e) => {
  selectNew(e);
  highLight(e);
  headingTop[0].innerText = 'UI/UX';
  headingBot[0].innerText = 'DESIGN';
  controlContent(0);
  scrollintoViewMain();
})

// Load headings top/bot
function loadHeadings(ses) {
  if (ses === 0) {
    headingTop[0].innerText = 'UI/UX';
    headingBot[0].innerText = 'DESIGN';
  }
  if (ses === 1) {
    headingTop[0].innerText = 'WEB';
    headingBot[0].innerText = 'DEVELOPMENT';
  }
  if (ses === 2) {
    headingTop[0].innerText = 'SEO &';
    headingBot[0].innerText = 'MARKETING';
  }
  if (ses === 3) {
    headingTop[0].innerText = 'ECOMMERCE';
    headingBot[0].innerText = 'SOLUTIONS';
  }
}

// load content
function loadContentFun() {
  content[parseInt(window.sessionStorage.selection)].style.display = 'block';
}

// loadSelection
function loadSelection() {
  if (typeof window.sessionStorage.selection == 'undefined') {
    content[0].style.display = 'block';
  }
  if (typeof window.sessionStorage.selection !== 'undefined') {
    textChange();
    banDiv[window.sessionStorage.selection].style.width = '100%';
    uiuxText[window.sessionStorage.selection].style.transform = 'rotate(0deg)';
    uiuxText[window.sessionStorage.selection].style.fontSize = '3vw';
    clickable[window.sessionStorage.selection].style.background = 'rgba(255,255,255,1)';
    loadHeadings(parseInt(window.sessionStorage.selection));
    hightLightOnLoad(parseInt(window.sessionStorage.selection));
    loadContentFun();
  }
}


// web dev JS
// web dev JS
var webDevText = document.getElementsByClassName('webDevText');

function webDevTextFun() {
  if (webDevText[0].getClientRects()[0].top < window.innerHeight / 1.5) {
    webDevText[0].style.top = '-4vw';
    console.log(123);
  }
}

// ecoom cont js
// ecoom cont js
// var ppheaderLeftContent = document.getElementsByClassName('ppheaderLeftContent');
// function ppheaderLeftContentFun() {
//   if (typeof ppheaderLeftContent[0].getClientRects()[0] != 'undefined') {
//     if(ppheaderLeftContent[0].getClientRects()[0].top < window.innerHeight /2){
//       ppheaderLeftContent[0].style.left = '-11vw';
//     }else{
//       ppheaderLeftContent[0].style.left = '-60vw';
//     }
//   }
// }

var eComMain = document.getElementsByClassName('eComMain');

function eComMainFun() {
  if (typeof eComMain[0].getClientRects()[0] != 'undefined') {
    if (eComMain[0].getClientRects()[0].top < window.innerHeight / 2) {
      eComMain[0].style.background = 'white';
    } else {
      eComMain[0].style.background = '#e49b13';
    }
  }
}

var dust = document.getElementsByClassName('dust');
var bigProductImg = document.getElementsByClassName('bigProductImg');
var prodMiniBox = document.getElementsByClassName('prodMiniBox');
var leftCarArrowBox = document.getElementsByClassName('leftCarArrowBox');

var ecomProdImages = 3;
// assets/images/desktop/eCommerce/1.png
setInterval(function() {
  leftCarArrowBoxFunAnim();
  bigProductImg[0].style.opacity = '0';
  dust[0].style.transform = 'rotate(360deg)';
  dust[0].style.opacity = '0';
  setTimeout(function() {
    ecomProdImages++;
    bigProductImg[0].src = 'assets/images/desktop/eCommerce/' + (1 + ecomProdImages % 3) + '.png';
    prodMiniBoxFun();
  }, 1000);
  setTimeout(function() {
    bigProductImg[0].style.opacity = '1';
    dust[0].style.opacity = '1';
    dust[0].style.transform = 'rotate(0deg)';
  }, 1200);
}, 4000);

function prodMiniBoxFun() {
  for (var i = 0; i < prodMiniBox.length; i++) {
    prodMiniBox[i].style.transform = 'scale(1)';
  }
  prodMiniBox[ecomProdImages % 3].style.transform = 'scale(1.2)';
}

function leftCarArrowBoxFunAnim() {
  leftCarArrowBox[0].style.background = 'rgb(230,230,230,0.65)';
  setTimeout(function() {
    leftCarArrowBox[0].style.background = 'rgb(230,230,230,0.25)';
  }, 500);
}


// UI/UX design
// UI/UX design
var purpleDiv = document.getElementsByClassName('purpleDiv');
var purpleDivImg = document.getElementsByClassName('purpleDivImg');
var leftPurpInsideTextContainer = document.getElementsByClassName('leftPurpInsideTextContainer');

var purpleDivRight = document.getElementsByClassName('purpleDivRight');
var purpleDivImgRight = document.getElementsByClassName('purpleDivImgRight');
var rightPurpInsideTextContainer = document.getElementsByClassName('rightPurpInsideTextContainer');
var imgAnim = document.getElementsByClassName('imgAnim');

function purpDivAnimOne() {
  if (typeof purpleDiv[0].getClientRects()[0] != 'undefined') {
    if (purpleDiv[0].getClientRects()[0].top < 200) {
      // purpleDiv[0].style.marginLeft = '6.75vw';
      // purpleDivImg[0].style.left = '37vw';
      // leftPurpInsideTextContainer[0].style.left = '5vw';
      imgAnim[0].style.width = '0';
    }
  }
}

function purpDivAnimTwo() {
  if (typeof purpleDiv[1].getClientRects()[0] != 'undefined') {
    if (purpleDiv[1].getClientRects()[0].top < 200) {
      // purpleDivRight[0].style.marginLeft = '0vw';
      // purpleDivImgRight[0].style.left = '0vw';
      // rightPurpInsideTextContainer[0].style.right = '6vw';
      imgAnim[1].style.width = '0';
    }
  }
}

function purpDivAnimThree() {
  if (typeof purpleDiv[2].getClientRects()[0] != 'undefined') {
    if (purpleDiv[2].getClientRects()[0].top < 200) {
      // purpleDiv[2].style.marginLeft = '6.5vw';
      // purpleDivImg[1].style.left = '42.5vw';
      // leftPurpInsideTextContainer[2].style.left = '5vw';
      imgAnim[2].style.width = '0';
    }
  }
}

function purpDivAnimFour() {
  if (typeof purpleDiv[3].getClientRects()[0] != 'undefined') {
    if (purpleDiv[3].getClientRects()[0].top < 200) {
      // purpleDivRight[1].style.marginLeft = '0vw';
      // purpleDivImgRight[1].style.left = '-0vw';
      // rightPurpInsideTextContainer[1].style.right = '6.5vw';
      imgAnim[3].style.width = '0';
    }
  }
}


//purple screen anim
var purpScreenDiv = document.getElementsByClassName('purpScreenDiv')[0];
var purpTabletDiv = document.getElementsByClassName('purpTabletDiv')[0];
var purpleScreen = document.getElementsByClassName('purpScreen')[0];

function purpleScreens() {
  if (typeof purpScreenDiv.getClientRects()[0] != 'undefined') {
    if (purpleScreen.getClientRects()[0].top < window.innerHeight / 100 * 30) {
      purpScreenDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
      purpTabletDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
    }
  }
}

// shoter
var headerbg = document.getElementsByClassName('headerbg');
var shoterAray = Array.from(headerbg).reverse();
var shooter = document.getElementsByClassName('shooter');

var shoterModulo = 0;
var shoterLoop;

function startLoop() {
  shoterLoop = setInterval(function() {
    for (var i = 0; i < headerbg.length; i++) {
      headerbg[i].style.opacity = '0';
    }
    headerbg[shoterModulo % 7].style.opacity = '1';
    shoterModulo++;
    // console.log(shoterModulo % 7);
  }, 200);
}



shooter[0].addEventListener('mouseenter', () => {
  clearInterval(shoterLoop);
});

shooter[0].addEventListener('mouseleave', () => {
  startLoop();
});
startLoop();

// watches module
var coloredWatches = document.getElementsByClassName('coloredWatches');
var colorChangeButton = document.getElementsByClassName('colorChangeButton');

for (var i = 0; i < colorChangeButton.length; i++) {
  colorChangeButton[i].addEventListener('click', (e) => {
    for (var i = 0; i < coloredWatches.length; i++) {
      coloredWatches[i].style.opacity = '0';
    };
    coloredWatches[e.currentTarget.dataset.colorpick].style.opacity = '1';
    console.log(e.currentTarget.dataset.colorpick);
  })
}


var iterWatch = 0;
setInterval(function() {
  for (var i = 0; i < coloredWatches.length; i++) {
    coloredWatches[i].style.opacity = '0';
  };
  coloredWatches[iterWatch % 5].style.opacity = '1';
  colorChangeBGautoFun();
  iterWatch++;
}, 2000);


// colorChangeBG
var colorChangeBG = document.getElementsByClassName('colorChangeBG');

function colorChangeBGautoFun() {
  for (var i = 0; i < colorChangeBG.length; i++) {
    colorChangeBG[i].style.left = '-3vw';
    colorChangeBG[i].style.top = '-3vw';
  }
  colorChangeBG[iterWatch % 5].style.top = '-2.5vw';
  colorChangeBG[iterWatch % 5].style.left = '-2.5vw';
}


// SEO and marketing
// SEO and marketing
var graphContainer = document.getElementsByClassName('graphContainer');
var grapLineContaienr = document.getElementsByClassName('grapLineContaienr');


function purpDivAnimOne() {
  if (typeof graphContainer[0].getClientRects()[0] != 'undefined') {
    if (grapLineContaienr[0].getClientRects()[0].top < window.innerHeight) {
      for (var i = 0; i < grapLineContaienr.length; i++) {
        grapLineContaienr[i].style.height = i*5 + Math.random() * 5 + 10 + 'vw';
      }
    }
  }
}


// windows events
// windows events
// windows events
window.addEventListener('load', () => {
  loadSelection();
})

window.addEventListener('scroll', () => {
  // ppheaderLeftContentFun();
  purpDivAnimOne()
  eComMainFun();
  purpDivAnimOne();
  purpDivAnimTwo();
  purpDivAnimThree();
  purpDivAnimFour();
  purpleScreens()
  // webDevTextFun();
})
