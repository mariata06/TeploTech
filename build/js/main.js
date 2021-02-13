/*-- Initialize Swiper Intro, Projects-- */
var swiper1 = new Swiper(".swiper-container.swiper-container--intro", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,
});

var swiper2 = new Swiper(".swiper-container.swiper-container--projects", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,
});

/*-- Initialize Swiper Review -- */
var swiper3 = new Swiper(".swiper-container.swiper-container--review", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
