
//home video load
//home video load
//home video load
var myVideo = document.getElementById('myVideo');
function videoBreakPointsBaner(){
  if(window.innerWidth >= 1366){
    myVideo.src = "assets/videos/videos-desktop/background-video.mp4";
  }
  if(window.innerWidth < 1366 && window.innerHeight >= 420){
    myVideo.src = "assets/videos/videos-tablet/background-video-tablet.mp4";
  }
  if(window.innerWidth < 420){
    myVideo.src = "assets/videos/videos-desktop/Help.mp4";
  }
}

//mobile video load
//mobile video load
//mobile video load
var mobVideo = document.getElementById('mobVideo');
function videoBreakPoints(){
  if(window.innerWidth >= 1366){
    mobVideo.src = "assets/videos/videos-desktop/mobileVideo.mp4";
  }
  if(window.innerWidth < 1366 && window.innerHeight >= 420){
    mobVideo.src = "assets/videos/videos-tablet/mobileVideo.mp4";
  }
  if(window.innerWidth < 420){
    mobVideo.src = "assets/videos/videos-tablet/mobileVideo.mp4";
  }
}

// video text animation
// video text animation
// video text animation
var animQuot = document.getElementsByClassName('animQuot');
var quot = 0;
setInterval(function () {
	if(quot%5 === 0 ){
		animQuot[0].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[1].style.display = 'block';
			animQuot[1].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 2 ){
		animQuot[1].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[0].style.display = 'block';
			animQuot[0].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 1 ){
		animQuot[0].style.opacity = '0';
		animQuot[1].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[2].style.display = 'block';
			animQuot[2].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 3 ){
		animQuot[0].style.opacity = '0';
		animQuot[1].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[4].style.opacity = '0';
		setTimeout(function(){
			animQuot[3].style.display = 'block';
			animQuot[3].style.opacity = '1';
		},1000)
	}
	if(quot%5 === 4 ){
		animQuot[0].style.opacity = '0';
		animQuot[1].style.opacity = '0';
		animQuot[2].style.opacity = '0';
		animQuot[3].style.opacity = '0';
		setTimeout(function(){
			animQuot[4].style.display = 'block';
			animQuot[4].style.opacity = '1';
		},1000)
	}
	quot++;
}, 5000);

// video slider anim
// video slider anim
// video slider anim
var arrow = document.getElementsByClassName('arrow')[0];
var videoSlider = document.getElementsByClassName('videoSlider')[0];
var vidModulo =1;
arrow.addEventListener('click',function(){
  if(vidModulo % 2 === 0){
    videoSlider.style.width = '0';
  }
  if(vidModulo % 2 === 1){
    videoSlider.style.width = '56vw';
  }
  vidModulo++;
});

// mobile paralax anim
// mobile paralax anim
// mobile paralax anim
var mobileVid = document.getElementsByClassName("mobileVid")[0];
function mobVidCall(){
	if (parseInt(window.getComputedStyle(mobileVid).bottom) > -(window.innerWidth/100 *36) ) {
    mobileVid.style.bottom = parseInt(window.getComputedStyle(mobileVid).bottom) - window.scrollY/130 + 'px';
  }
}

var mobileParrot = document.getElementsByClassName("mobileParrot")[0];
function	mobParrotCall(){
	if (parseInt(window.getComputedStyle(mobileParrot).bottom) > -(window.innerWidth/100 *18) ) {
    mobileParrot.style.bottom = parseInt(window.getComputedStyle(mobileParrot).bottom) - window.scrollY/150 + 'px';
  }
}

// webDevelopment text anim;
// webDevelopment text anim;
// webDevelopment text anim;
var webDevelopment = document.getElementsByClassName('webDevelopment')[0];
function webDevelopmentReveal(){
	if(webDevelopment.getBoundingClientRect().y < window.innerHeight/100 *90){
		webDevelopment.style.left = '8vw'
	}
}

// recent project hover
// recent project hover
// recent project hover
var imgBox = document.getElementsByClassName('imgBox');
var recentWorkImages = document.getElementsByClassName('recentWorkImages');
imgBox[0].addEventListener('mouseenter',()=>{
  recentWorkImages[0].style.height = '95%';
  recentWorkImages[0].style.width = '95%';
  recentWorkImages[0].style.marginTop = '1.25%';
  recentWorkImages[0].style.marginLeft = '2.5%';
});

imgBox[0].addEventListener('mouseleave',()=>{
  recentWorkImages[0].style.height = '100%';
  recentWorkImages[0].style.width = '100%';
  recentWorkImages[0].style.marginTop = '0%';
  recentWorkImages[0].style.marginLeft = '0%';
});

imgBox[1].addEventListener('mouseenter',()=>{
  recentWorkImages[1].style.height = '95%';
  recentWorkImages[1].style.width = '95%';
  recentWorkImages[1].style.marginTop = '1.25%';
  recentWorkImages[1].style.marginLeft = '2.5%';
});

imgBox[1].addEventListener('mouseleave',()=>{
  recentWorkImages[1].style.height = '100%';
  recentWorkImages[1].style.width = '100%';
  recentWorkImages[1].style.marginTop = '0%';
  recentWorkImages[1].style.marginLeft = '0%';
});

imgBox[2].addEventListener('mouseenter',()=>{
  recentWorkImages[2].style.height = '95%';
  recentWorkImages[2].style.width = '95%';
  recentWorkImages[2].style.marginTop = '1.25%';
  recentWorkImages[2].style.marginLeft = '2.5%';
});

imgBox[2].addEventListener('mouseleave',()=>{
  recentWorkImages[2].style.height = '100%';
  recentWorkImages[2].style.width = '100%';
  recentWorkImages[2].style.marginTop = '0%';
  recentWorkImages[2].style.marginLeft = '0%';
});

// 4image grid hover
// 4image grid hover
// 4image grid hover
var gridImgBox = document.getElementsByClassName('gridImgBox');
var gridParaFont = document.getElementsByClassName('gridParaFont');
var gridParaFontOne = document.getElementsByClassName('gridParaFontOne');
  gridImgBox[0].addEventListener('mouseenter',function(){
      gridImgBox[0].style.width = '95%';
      gridImgBox[0].style.height = '95%';
      gridImgBox[0].style.marginTop = '2.5%';
      gridImgBox[0].style.marginLeft = '2.5%';
			blackTestlayerFun();
    });

  gridImgBox[0].addEventListener('mouseleave',function(){
      gridImgBox[0].style.width = '100%';
      gridImgBox[0].style.height = '100%';
      gridImgBox[0].style.marginTop = '0%';
      gridImgBox[0].style.marginLeft = '0%';
			blackTestlayerMouseOfFun();
    });

  gridImgBox[1].addEventListener('mouseenter',function(){
      gridImgBox[1].style.width = '96%';
      gridImgBox[1].style.height = '96%';
      gridImgBox[1].style.marginTop = '3%';
      gridImgBox[1].style.marginLeft = '3%';
			blackTestlayerFunTwo();
    });

  gridImgBox[1].addEventListener('mouseleave',function(){
      gridImgBox[1].style.width = '100%';
      gridImgBox[1].style.height = '100%';
      gridImgBox[1].style.marginTop = '0%';
      gridImgBox[1].style.marginLeft = '0%';
			blackTestlayerMouseOfFunTwo();
    });

  gridImgBox[2].addEventListener('mouseenter',function(){
      gridImgBox[2].style.width = '95%';
      gridImgBox[2].style.height = '95%';
      gridImgBox[2].style.marginTop = '2.5%';
      gridImgBox[2].style.marginLeft = '2.5%';
			blackTestlayerFunthree();
    });

  gridImgBox[2].addEventListener('mouseleave',function(){
      gridImgBox[2].style.width = '100%';
      gridImgBox[2].style.height = '100%';
      gridImgBox[2].style.marginTop = '0%';
      gridImgBox[2].style.marginLeft = '0%';
			blackTestlayerMouseOfFunThree();
    });

  gridImgBox[3].addEventListener('mouseenter',function(){
      gridImgBox[3].style.width = '95%';
      gridImgBox[3].style.height = '95%';
      gridImgBox[3].style.marginTop = '2.5%';
      gridImgBox[3].style.marginLeft = '2.5%';
			blackTestlayerFunFour();
    });

  gridImgBox[3].addEventListener('mouseleave',function(){
      gridImgBox[3].style.width = '100%';
      gridImgBox[3].style.height = '100%';
      gridImgBox[3].style.marginTop = '0%';
      gridImgBox[3].style.marginLeft = '0%';
			blackTestlayerMouseOfFunFour();
    });
// black layer text anim hover
var blackTextLayer = document.getElementsByClassName('blackTextLayer');
var blackLayerInside = document.getElementsByClassName('blackLayerInside');
function blackTestlayerFun(){
	blackTextLayer[0].style.width = '90%';
	blackTextLayer[0].style.height = '90%';
	blackTextLayer[0].style.left = '5%';
	blackTextLayer[0].style.top = '5%';
	blackTextLayer[0].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[0].style.opacity = '1';
}
function blackTestlayerMouseOfFun(){
	blackTextLayer[0].style.width = '100%';
	blackTextLayer[0].style.height = '100%';
	blackTextLayer[0].style.left = '0%';
	blackTextLayer[0].style.top = '0%';
	blackTextLayer[0].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[0].style.opacity = '0';
}

function blackTestlayerFunTwo(){
	blackTextLayer[1].style.width = '90%';
	blackTextLayer[1].style.height = '90%';
	blackTextLayer[1].style.left = '5%';
	blackTextLayer[1].style.top = '5%';
	blackTextLayer[1].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[1].style.opacity = '1';
}
function blackTestlayerMouseOfFunTwo(){
	blackTextLayer[1].style.width = '100%';
	blackTextLayer[1].style.height = '100%';
	blackTextLayer[1].style.left = '0%';
	blackTextLayer[1].style.top = '0%';
	blackTextLayer[1].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[1].style.opacity = '0';
}

function blackTestlayerFunthree(){
	blackTextLayer[2].style.width = '90%';
	blackTextLayer[2].style.height = '90%';
	blackTextLayer[2].style.left = '5%';
	blackTextLayer[2].style.top = '5%';
	blackTextLayer[2].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[2].style.opacity = '1';
}
function blackTestlayerMouseOfFunThree(){
	blackTextLayer[2].style.width = '100%';
	blackTextLayer[2].style.height = '100%';
	blackTextLayer[2].style.left = '0%';
	blackTextLayer[2].style.top = '0%';
	blackTextLayer[2].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[2].style.opacity = '0';
}

function blackTestlayerFunFour(){
	blackTextLayer[3].style.width = '90%';
	blackTextLayer[3].style.height = '90%';
	blackTextLayer[3].style.left = '5%';
	blackTextLayer[3].style.top = '5%';
	blackTextLayer[3].style.backgroundColor = 'rgb(0,0,0,0.8)';
	blackLayerInside[3].style.opacity = '1';
}
function blackTestlayerMouseOfFunFour(){
	blackTextLayer[3].style.width = '100%';
	blackTextLayer[3].style.height = '100%';
	blackTextLayer[3].style.left = '0%';
	blackTextLayer[3].style.top = '0%';
	blackTextLayer[3].style.backgroundColor = 'rgb(0,0,0,0)';
	blackLayerInside[3].style.opacity = '0';
}

// read more line anim
// read more line anim
// read more line anim
var readMoreDiv = document.getElementsByClassName('readMoreDiv');
var readMoreAnimDiv = document.getElementsByClassName('readMoreAnimDiv');
readMoreDiv[0].addEventListener('mouseenter',function(){
	readMoreAnimDiv[0].style.width = '100%';
})
readMoreDiv[0].addEventListener('mouseleave',function(){
	readMoreAnimDiv[0].style.width = '40%';
})

readMoreDiv[1].addEventListener('mouseenter',function(){
	readMoreAnimDiv[1].style.width = '100%';
})
readMoreDiv[1].addEventListener('mouseleave',function(){
	readMoreAnimDiv[1].style.width = '40%';
})

readMoreDiv[2].addEventListener('mouseenter',function(){
	readMoreAnimDiv[2].style.width = '100%';
})
readMoreDiv[2].addEventListener('mouseleave',function(){
	readMoreAnimDiv[2].style.width = '40%';
})

readMoreDiv[3].addEventListener('mouseenter',function(){
	readMoreAnimDiv[3].style.width = '100%';
})
readMoreDiv[3].addEventListener('mouseleave',function(){
	readMoreAnimDiv[3].style.width = '40%';
})

//purple screen anim
//purple screen anim
//purple screen anim
var purpScreenDiv = document.getElementsByClassName('purpScreenDiv')[0];
var purpTabletDiv = document.getElementsByClassName('purpTabletDiv')[0];
var purpleScreen = document.getElementsByClassName('purpScreen')[0];

function purpleScreens(){
	if (purpleScreen.getClientRects()[0].top < window.innerHeight / 100 * 30) {
		purpScreenDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
		purpTabletDiv.style.transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)"
	}
}

// contact us line anim
// contact us line anim
// contact us line anim
var contactUsMaintenance = document.getElementsByClassName('contactUsMaintenance')[0];
var maintenanceLineAnim = document.getElementsByClassName('maintenanceLineAnim')[0];
var svgArrow = document.getElementsByClassName('svgArrow')[0];
contactUsMaintenance.addEventListener('mouseenter',function(){
	maintenanceLineAnim.style.width = '90%';
	svgArrow.style.filter = 'brightness(120%)';
});
contactUsMaintenance.addEventListener('mouseleave',function(){
	maintenanceLineAnim.style.width = '40%';
	svgArrow.style.filter = 'brightness(100%)';
});

// technologies Line Anim
// technologies Line Anim
// technologies Line Anim
var technologiesReadMoreDiv = document.getElementsByClassName('technologiesReadMoreDiv')[0];
var technoLineAnim = document.getElementsByClassName('technoLineAnim')[0];
technologiesReadMoreDiv.addEventListener('mouseenter',function(){
	technoLineAnim.style.width = '100%';
});
technologiesReadMoreDiv.addEventListener('mouseleave',function(){
	technoLineAnim.style.width = '40%';
});

// Disscus new project paralax
// Disscus new project paralax
// Disscus new project paralax
var discussNewIdeas = document.getElementsByClassName('discussNewIdeas')[0];

function newIdeasParalaxFun(){
  if(discussNewIdeas.getBoundingClientRect().y < window.innerHeight){
    discussNewIdeas.style.backgroundPosition = "0 " + ((-discussNewIdeas.getBoundingClientRect().y/5) - discussNewIdeas.getBoundingClientRect().height/3) + "px";
  }
}

// Discuss new projects contactUs LineANim
// Discuss new projects contactUs LineANim
// Discuss new projects contactUs LineANim
var contactUsMaintenanceDiscuss = document.getElementsByClassName('contactUsMaintenance')[1];
var maintenanceLineAnimDiscuss = document.getElementsByClassName('maintenanceLineAnim')[1];
var svgArrow = document.getElementsByClassName('svgArrow')[1];
contactUsMaintenanceDiscuss.addEventListener('mouseenter',function(){
	maintenanceLineAnimDiscuss.style.width = '90%';
	svgArrow.style.filter = 'brightness(120%)';
});
contactUsMaintenanceDiscuss.addEventListener('mouseleave',function(){
	maintenanceLineAnimDiscuss.style.width = '40%';
	svgArrow.style.filter = 'brightness(100%)';
});

// window document events
// window document events
// window document events
window.onload = function(){
  videoBreakPoints();
  videoBreakPointsBaner();
}

window.onresize = function(){
  videoBreakPoints();
  videoBreakPointsBaner();
}

window.onscroll = function(){
  mobVidCall();
  mobParrotCall();
  webDevelopmentReveal();
  purpleScreens();
  newIdeasParalaxFun();
}
