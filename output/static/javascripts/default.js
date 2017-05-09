$(document).ready(function() {
  // put your code here.
  $('.ui.progress').progress();

  // Swiper slides
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // Autoplay time duration (ms)
    autoplay: 3000,
    
    // Speed of moving (ms)
    speed: 1000,

    // Default first slide
    initialSlide: 0,

    // Transition effects: fade, cube, slide, coverflow, flip
    effect: 'fade',

    // Touch screen
    touchEventsTarget: 'container',
    touchRatio: 1,
    touchAngle: 45,
  })
});
