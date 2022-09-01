let navToggle = document.querySelector(".navToggle input")
    ,navList = document.querySelector("nav ul");

navToggle.addEventListener('click', function () {
    navList.classList.toggle('slide');
});


var swiper = new Swiper(".projectsContent", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 2,
        },
        1200:{
            slidesPerView: 3,
        },
    },
  });