var swiper = new Swiper(".home-slider", {
 
    loop:true,

    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".pro-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { 
        slidesPerView: 1
      },
      768: { 
        slidesPerView: 2
      },
      1024: { 
        slidesPerView: 3
      }
    }
    
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { 
        slidesPerView: 1
      },
      768: { 
        slidesPerView: 2
      },
      1024: { 
        slidesPerView: 3
      }
    }
  });


  var swiper = new Swiper(".blogs", {
    slidesPerView: 3,
    loop:true,

    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { 
        slidesPerView: 1
      },
      768: { 
        slidesPerView: 2
      },
      1024: { 
        slidesPerView: 3
      }
    }
  });
  
  