// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>'
//       });
//   });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 1200,
    nav: false,
    controls: false,
    navPosition: 'bottom',
    responsive: {
        320: {
            nav: true
        },
        575: {
            nav: false
        },
        767: {
            nav: false
        },
        1200: {
            nav: false,
        }
      }
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };

  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };

