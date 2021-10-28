/*-- Initialize Swiper Intro -- */
var swiper1 = new Swiper(".swiper-container.swiper-container--intro", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,
});

/*-- Initialize Swiper Projects -- */
var swiper2 = new Swiper(".swiper-container.swiper-container--projects", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,
});

/*-- Initialize Swiper Review -- */
var swiper3 = new Swiper(".swiper-container.swiper-container--review", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
