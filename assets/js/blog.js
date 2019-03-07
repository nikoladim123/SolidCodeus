window.onscroll = function(){
  // console.log(appMenu.getBoundingClientRect().top);
  // appMenuSticky();
  if(scrollY >100){
    imageReveal();
    textReveal();
    optimizationSectionReveal();
  }
}

window.onload = function(){
  // revealOnLoad();
}


// burger menu hover anim
// burger menu hover anim
// burger menu hover anim
var burgerMenu = document.getElementsByClassName('burgerMenu')[0];
var burgerLine = document.getElementsByClassName('burgerLine');
burgerMenu.addEventListener('mouseenter',()=>{
  burgerLine[0].style.left = '-0.5vw';
  burgerLine[1].style.left = '0.5vw';
  burgerLine[2].style.left = '-0.5vw';
  burgerLine[0].style.backgroundColor = 'rgb(253,216,47)';
  burgerLine[1].style.backgroundColor = 'rgb(253,216,47)';
  burgerLine[2].style.backgroundColor = 'rgb(253,216,47)';
});

burgerMenu.addEventListener('mouseleave',()=>{
  burgerLine[0].style.left = '0vw';
  burgerLine[1].style.left = '0vw';
  burgerLine[2].style.left = '0vw';
  burgerLine[0].style.backgroundColor = 'white';
  burgerLine[1].style.backgroundColor = 'white';
  burgerLine[2].style.backgroundColor = 'white';
});
// .appMenu STICKY ON / OFF
// .appMenu STICKY ON / OFF
// .appMenu STICKY ON / OFF
// var appMenu = document.getElementsByClassName('appMenu')[0];
// var content = document.getElementsByClassName('content')[0];
// function appMenuSticky(){
//   if(content.getBoundingClientRect().top <= 0){
//     console.log('zxczxc');
//     appMenu.style.position = 'fixed';
//   }
//   if(content.getBoundingClientRect().top > 1){
//     appMenu.style.position = 'absolute';
//     console.log('im absolute');
//   }
// }
//
// //Dev Anim
// var devIcon = document.getElementsByClassName('devIcon')[0];
// var devText = document.getElementsByClassName('devText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[0].addEventListener('mouseenter',function(){
//   devIcon.style.marginLeft = '18%';
//   devIcon.style.transform = 'rotate(360deg)'
//   setTimeout(function(){
//     devText.style.opacity = '1';
//   },1);
// });
//
// appMenuOptionsDiv[0].addEventListener('mouseleave',function(){
//   devIcon.style.marginLeft = '50%';
//   devText.style.opacity = '0';
//   devIcon.style.transform = 'rotate(0deg)'
// });
// //CMS anim
// var cmsIcon = document.getElementsByClassName('cmsIcon')[0];
// var cmsText = document.getElementsByClassName('cmsText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[1].addEventListener('mouseenter',function(){
//   cmsIcon.style.marginLeft = '18%';
//   setTimeout(function(){
//     cmsText.style.opacity = '1';
//   },10);
// });
//
// appMenuOptionsDiv[1].addEventListener('mouseleave',function(){
//   cmsIcon.style.marginLeft = '50%';
//   cmsText.style.opacity = '0';
// });
// //Speed Anim
// var speedIcon = document.getElementsByClassName('speedIcon')[0];
// var speedText = document.getElementsByClassName('speedText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[2].addEventListener('mouseenter',function(){
//   speedIcon.style.marginLeft = '18%';
//   setTimeout(function(){
//     speedText.style.opacity = '1';
//   },10);
// });
//
// appMenuOptionsDiv[2].addEventListener('mouseleave',function(){
//   speedIcon.style.marginLeft = '50%';
//   speedText.style.opacity = '0';
// });
// //contact Anim
// var contactIcon = document.getElementsByClassName('contactIcon')[0];
// var contactText = document.getElementsByClassName('contactText')[0];
// var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');
//
// appMenuOptionsDiv[3].addEventListener('mouseenter',function(){
//   contactIcon.style.marginLeft = '18%';
//   setTimeout(function(){
//     contactText.style.opacity = '1';
//   },10);
// });
//
// appMenuOptionsDiv[3].addEventListener('mouseleave',function(){
//   contactIcon.style.marginLeft = '50%';
//   contactText.style.opacity = '0';
// });
// // appMenu Selection
// // appMenu Selection
// // var appMenuOptionsDiv existing in code
// var contentOne = document.getElementsByClassName('contentOne')[0];
// var contentTwo = document.getElementsByClassName('contentTwo')[0];
// var contentThree = document.getElementsByClassName('contentThree')[0];
// var contentFour = document.getElementsByClassName('contentFour')[0];
// var headingTop = document.getElementsByClassName('headingTop')[0];
// var headingBot = document.getElementsByClassName('headingBot')[0];
//
// appMenuOptionsDiv[0].addEventListener('click',function(){
//   contentOne.style.display = 'block';
//   contentTwo.style.display = 'none';
//   contentThree.style.display = 'none';
//   contentFour.style.display = 'none';
//   // resetReavealForClick();
//   // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = 'WEB';
//     headingBot.innerHTML = 'DEVELOPMENT';
//   },1);
// });
//
// appMenuOptionsDiv[1].addEventListener('click',function(){
//   contentOne.style.display = 'none';
//   contentTwo.style.display = 'block';
//   contentThree.style.display = 'none';
//   contentFour.style.display = 'none';
//   // resetReavealForClick();
//   // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = 'CMS';
//     headingBot.innerHTML = 'DEVELOPMENT';
//   },1);
// });
//
// appMenuOptionsDiv[2].addEventListener('click',function(){
//   contentOne.style.display = 'none';
//   contentTwo.style.display = 'none';
//   contentThree.style.display = 'block';
//   contentFour.style.display = 'none';
//   // resetReavealForClick();
//   // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = 'PERFORMANCE';
//     headingBot.innerHTML = 'OPTIMIZATION';
//   },1);
// });
//
// appMenuOptionsDiv[3].addEventListener('click',function(){
//   contentOne.style.display = 'none';
//   contentTwo.style.display = 'none';
//   contentThree.style.display = 'none';
//   contentFour.style.display = 'block';
  // resetReavealForClick();
  // revealOnSelect();
//   setTimeout(function(){
//     headingTop.innerHTML = '&nbsp';
//     headingBot.innerHTML = 'CONTACT US';
//   },1);
// });

// animated Heading reveal
// animated Heading reveal
// animated Heading reveal
// var animatedHeading = document.getElementsByClassName('animatedHeading')[0];
//
// function revealOnLoad(){
//   animatedHeading.style.height = '0%';
// }
//
// function revealOnSelect(){
//   animatedHeading.style.transition = '0s';
//   animatedHeading.style.top = '0%';
//   setTimeout(function(){
//   animatedHeading.style.transition = '0.5s';
//   animatedHeading.style.height = '100%';
//   animatedHeading.style.top = '0%';
//     setTimeout(function(){
//       animatedHeading.style.height = '0%';
//       animatedHeading.style.top = '100%';
//     },500);
//   },5);
// }

// reveal anim Images Text
// reveal anim Images Text
// reveal anim Images Text
var screenVar = document.getElementsByClassName('screen');
var text = document.getElementsByClassName('text');
var images = document.getElementsByClassName('images');

// function screenReveal(){
//   for (var i = 0; i < screenVar.length; i++) {
//     screenVar[i].style.right = '0';
//   }
// }

function textReveal(){
  for (var i = 0; i < text.length; i++) {
    if(text[i].childNodes[1].getBoundingClientRect().top < (window.innerHeight / 100) *95){
      text[i].style.left = '0';
    }
    // text[i].style.left = '0';
  }
}

function imageReveal(){
  setTimeout(function(){
    for (var i = 0; i < images.length; i++) {
      if(images[i].childNodes[1].getBoundingClientRect().top < (window.innerHeight / 100) *95){
        images[i].childNodes[1].style.right = '0vw';
      }
      // images[i].childNodes[1].style.right = '0vw';
    }
  },500)
}

var OptimizedAnimBox = document.getElementsByClassName('OptimizedAnimBox')[0];
function optimizationSectionReveal(){
  if(OptimizedAnimBox.getBoundingClientRect().top < (window.innerHeight / 100) *95){
    OptimizedAnimBox.style.right = '0vw';
  }
}

// appmenu on click goes gray
// appmenu on click goes gray
// appmenu on click goes gray
// appMenuOptionsDiv[0].addEventListener('click',function(){
//   appMenuOptionsDiv[0].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[1].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[2].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[3].style.background = "rgb(36,34,40)";
// });
// appMenuOptionsDiv[1].addEventListener('click',function(){
//   appMenuOptionsDiv[1].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[0].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[2].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[3].style.background = "rgb(36,34,40)";
// });
// appMenuOptionsDiv[2].addEventListener('click',function(){
//   appMenuOptionsDiv[2].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[1].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[0].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[3].style.background = "rgb(36,34,40)";
// });
// appMenuOptionsDiv[3].addEventListener('click',function(){
//   appMenuOptionsDiv[3].style.background = "rgb(124,105,193)";
//   appMenuOptionsDiv[1].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[2].style.background = "rgb(36,34,40)";
//   appMenuOptionsDiv[0].style.background = "rgb(36,34,40)";
// });

// searchLayer anim
// searchLayer anim
// searchLayer anim
var searchIcon = document.getElementsByClassName('searchIcon')[0];
var SearchDivLayer = document.getElementsByClassName('SearchDivLayer')[0];
var exitButton = document.getElementsByClassName('exitButton')[0];

searchIcon.addEventListener('click',function(){
  SearchDivLayer.className += ' SearchDivLayerAnimOpen';
  setTimeout(function(){
     SearchDivLayer.style.width = '100%';
     SearchDivLayer.className = ' SearchDivLayer';
   }, 1000);
})

exitButton.addEventListener('click',function(){
  SearchDivLayer.className += ' SearchDivLayerAnimClose';
  setTimeout(function(){
     SearchDivLayer.style.width = '0';
     SearchDivLayer.className = ' SearchDivLayer';
   }, 1000);
})
