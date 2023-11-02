$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        breakpoints: {  
          '767': {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          '480': {
            slidesPerView: 1,
            spaceBetween: 20,},

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });


      var swiper = new Swiper(".amySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {  
          '767': {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          '480': {
            slidesPerView: 2,
            spaceBetween: 20,},
          '@0': {
            slidesPerView: 1,
            spaceBetween: 10, },
        },
      });
      
});
