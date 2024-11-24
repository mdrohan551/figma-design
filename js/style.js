window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    })
  }
  // counter js 
  $(function () {
    'use stickt';
  
    $('.counter').counterUp({
      delay:100,
      time: 20000
  });
  $(function () {
    'use stickt';
     var containerEi = document.getElementsByClassName('.click_box');
     var mixer = mixitup (containerEi);
  });
// slider 
    });
ScrollReveal().reveal('.right-img', {
   origin: 'right',
   reset:true,
   distance: '10px',
});
ScrollReveal().reveal('.revel_inm', { 
  origin: 'left',
  reset:true,
  distance: '60px',
});
ScrollReveal().reveal('.about_img', { 
  delay: 500 ,
  origin: 'left',
  reset:true,
  distance: '60px',
  delay:500
});
ScrollReveal().reveal('.about_text', { 
  delay: 500 ,
  origin: 'right',
  reset:true,
  distance: '60px',
  delay:500
});
ScrollReveal().reveal('.scaleUp', { 
  scale: 0.85,
    origin: 'bottom',
  reset:true,
  distance: '60px',
  delay:500
 });
ScrollReveal().reveal('.footer', { 
  scale: 0.85,
    origin: 'bottom',
  reset:true,
  distance: '60px',
  delay:500
 });
// scroll top button 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// slider 

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow:3,
  slidesToScroll:1,
  autoplay:true,
  autoplaySpeed:500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
