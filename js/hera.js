//header
const header = document.querySelector("#header");

window.onscroll = function(){
  const top = window.scrollY;
  console.log(top);
  if(top >= 50){
    header.classList.add("backchg")
  } else {
    header.classList.remove("backchg");
  }
}

const html= document.querySelector("html");
const searchIcon = document.querySelector(".search_icon");
const closeIcon = document.querySelector(".close");
const form = document.querySelector(".search");

searchIcon.addEventListener('click', function(event){
  event.preventDefault();
  form.classList.toggle("on");
  html.classList.toggle("colorChg");
})

closeIcon.addEventListener('click', function(event){
  event.preventDefault();
  form.classList.remove("on");
})

//main_slide
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slide:first-child");

function slide(){
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if(currentSlide){
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if(nextSlide){
      nextSlide.classList.add(SHOWING_CLASS);
    } else{
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else{
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

const slides = document.querySelector(".slide_container");
const slideImg = document.querySelector(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function moveRight(){
  nextBtn.addEventListener("click", slide);
  firstSlide.classList.add(SHOWING_CLASS);
}

slide();
setInterval(slide, 6000);
moveRight();

//sns_slide
const snsSlide = document.querySelector(".sns_slides");
const slideLis = document.querySelectorAll(".sns_slides>li");
const snsNext = document.querySelector(".control>.sns_next");
const snsPrev = document.querySelector(".control>.sns_prev");

let currentIdx = 0;

const slideCount = slideLis.length;
const slideWidth = 280;
const slideMargin = 20;

makeClone();

function makeClone(){
  for (let i = 0; i < slideCount; i++){
    const cloneSlide = slideLis[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    snsSlide.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i>=0; i--){
    const cloneSlide = slideLis[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    snsSlide.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  snsSlide.classList.add("animated");
}

function updateWidth(){
  const currentSnsSlide = document.querySelectorAll(".sns_slides>li");
  const newSlideCount = currentSnsSlide.length;

  const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
  snsSlide.style.width = newWidth;
}

function setInitialPos(){
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  snsSlide.style.transform = "translateX(" + initialTranslateValue + "px)";
}

snsNext.addEventListener("click", function(){
  moveSlide(currentIdx + 1);
});
snsPrev.addEventListener("click",function(){
  moveSlide(currentIdx - 1);
});

function moveSlide(num){
  snsSlide.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIdx = num;
  console.log(currentIdx, slideCount);
  if(currentIdx  == slideCount || currentIdx == -slideCount){
    setTimeout(function(){
      snsSlide.classList.remove("animated");
      snsSlide.style.left = "0px";
      currentIdx = 0;
    }, 500)
    setTimeout(function(){
      snsSlide.classList.add("animated");
    }, 600)
  }
}

//footer_language_select
const drop_btn = document.querySelector(".dropdown_btn");
const lan_slide = document.querySelector(".language_slide");

drop_btn.addEventListener("click", function(event){
  event.preventDefault();
  lan_slide.classList.toggle("show");
})

//more_footer menu_slide
const copyright = document.querySelector('.quick_copyright');
const moreMenu = document.querySelector('.more_footer');

function openCloseMenu(){
  if(moreMenu.style.display == 'block'){
    moreMenu.style.display = 'none';
  } else{
    moreMenu.style.display = 'block';
  }
}

copyright.addEventListener('click', openCloseMenu);

//rside_menu 
const sideBtn = document.querySelector(".hammenu");
const rsideMenu = document.querySelector(".rsidemenu");
const closeBtn = document.querySelector('.rside_close');

function rsideMenuOpen(){
  if(rsideMenu.style.display == 'block'){
    rsideMenu.style.display = 'none';
  } else{
    rsideMenu.style.display = 'block';
  }
}
function closeSide(){
  if(rsideMenu.style.display == 'block'){
    rsideMenu.style.display = 'none';
  } else{
    rsideMenu.style.display = 'block';
  }
}

sideBtn.addEventListener('click', rsideMenuOpen);
closeBtn.addEventListener('click', closeSide);




const sideMenu = document.querySelectorAll('.rside_gnb>a');
let i;

for(i = 0; i < sideMenu.length; i++){
  sideMenu[i].addEventListener('click',function(){
    this.classList.toggle('active');

    const sideDepth1 = this.nextElementSibling;
    if(sideDepth1.style.maxHeight){
      sideDepth1.style.maxHeight = null;
    } else{
      sideDepth1.style.maxHeight = sideDepth1.scrollHeight + "550px";
    }
  });
}
