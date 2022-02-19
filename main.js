/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
  })
}




 	/*==================== CHANGE BACKGROUND HEADER ====================*/
   function scrollHeader(){
    const header = document.getElementById('l-header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)









//Initialize Swiper BANNER

  var swiper = new Swiper(".mySwiper", {
    speed: 700,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




//Video MODAL

  function toggle(){
    var trailer = document.querySelector(".trailer")
    var video = document.querySelector("video")
    trailer.classList.toggle("active")
    video.pause();
    video.currentTime = 0;
}






//Initialize Swiper TIENDAS


  var swiper = new Swiper(".tiendas", {
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });





  //Initialize Swiper PROMOCIONAL


  var swiper = new Swiper(".promocional", {
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1500,
  //reset: true
})


/*SCROLL HOME*/
sr.reveal('.img1_about', {origin:'right', delay: 100})
sr.reveal('.textos_about', {origin:'left', delay: 100})
sr.reveal('.left', {origin:'left', delay: 100})
sr.reveal('.icon', {origin:'top', delay: 100,  interval: 200})


