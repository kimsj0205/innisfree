const hambergerBtn = document.querySelector('header .main-menu .hambergerBtn');
const dropMenu = document.querySelector('header .drop-category');


hambergerBtn.addEventListener('click',function(){
  dropMenu.classList.toggle('dsnone') 
})

// search bar
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

//focus & blur
searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  this.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  this.setAttribute('placeholder','');
});


// main swiper 
const swiper = new Swiper('.visual .swiper',{
  direction : 'horizontal',
  autoplay : true,
  loop :true,
  speed : 700,
  navigation : {
    prevEl : '.visual .swiper .swiper-button-prev',
    nextEl : '.visual .swiper .swiper-button-next',
  },
  pagination : {
    el : '.swiper-pagination',
    type: 'fraction',
    clickable:true
  }
});

// notice line
const swiper2 = new Swiper('.notice-line .swiper',{
  direction :'vertical',
  autoplay : true,
  loop :true
});

// event banner
const swiper3 = new Swiper('.event-page .swiper ',{
  slidesPerView : 3,
  spaceBetween : 50, 
  centeredSlides : true, 
  loop:true, 
  autoplay:{
    delay : 5000
  },
  pagination : {
    el : '.notice .event-page .swiper-pagination',
    clickable:true
  }
});

// rank swiper
const swiper4 = new Swiper('.rank-page .swiper',{
  slidesPerView : 3,
  spaceBetween:50,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay:4000
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  pagination:{
    el:'.rank-page .swiper .swiper-notification'
  }
})

// 토글버튼 클릭 시 eventpage 열고 닫힘
const eventPageEl = document.querySelector('.event-page')
const eventPageToggleBtn = document.querySelector('.toggle-event')

let isHideEventToggleBtn = false;
eventPageToggleBtn.addEventListener('click',()=>{
  isHideEventToggleBtn = !isHideEventToggleBtn;
  if(isHideEventToggleBtn){
    eventPageEl.classList.add('hide')
  } else{
    eventPageEl.classList.remove('hide')
  }
});

// scroll magic
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement : spyEl,
    triggerHook : .8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller())
});

// to-top버튼
window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY > 500){
    gsap.to(toTopEl,.7,{
      x:0
    })
  } else {
    gsap.to(toTopEl,.7,{
      x:100
    })
  }
}))
const toTopEl = document.querySelector('.to-top');
toTopEl.addEventListener('click',function(){
  gsap.to(window, .7,{
    // 쓸려면 플러그인 연결이 되어야함
    scrollTo:0
  })
})
