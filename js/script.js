
var swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: "auto",
  centeredSlides: false,
  allowTouchMove: false, 
  speed: 2000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  }
});

let btn=document.getElementById("btn")

window.onscroll= function(){
  if(scrollY >=500){
    btn.style.display="block"
  }
  else{
    btn.style.display="none"
  }
}

btn.onclick = function(){
  scrollTo({
    left:0,
    top:0,

    behavior:"smooth"


  })
}