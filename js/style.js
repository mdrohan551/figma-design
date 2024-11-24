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
