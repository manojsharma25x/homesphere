window.onload = function digital() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      
     
      300: {
        slidesPerView: 1 ,
        spaceBetweenSlides: 0,
      },
      // when window width is <= 499px
      500: {
        slidesPerView: 2 ,
        spaceBetweenSlides: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetweenSlides: 10,
      },

      // when window width is <= 999px
      999: {
        slidesPerView: 3,
        spaceBetweenSlides: 10,
      },
      
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 10,
    },
      
    1440: {
      slidesPerView: 4,
      spaceBetweenSlides: 10,
    },
    },
  });

  // swiper
  var myswiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is <= 499px
      499: {
        slidesPerView: 1,
        spaceBetweenSlides: 0,
      },
      // when window width is <= 999px
      999: {
        slidesPerView: 1,
        spaceBetweenSlides: 10,
      },
      1200: {
        slidesPerView: 1,
        spaceBetweenSlides: 10,
      },
      1440: {
        slidesPerView: 1,
        spaceBetweenSlides: 10,
      },
    },
  });
  // swiper
};
