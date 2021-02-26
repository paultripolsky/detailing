//SLIDER COUNTERS
  $('.slider-2-desktop').on(`init reInit`, function(event, slick) {
    $('.counter-2').text(1 + ' / ' + slick.slideCount);
  })
  $('.slider-2-desktop').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.counter-2').text(currentSlide + 1 + ' / ' + slick.slideCount);
  })

  $('.slider_1').on(`init reInit`, function(event, slick) {
    $('.counter-1').text(1 + ' / ' + slick.slideCount);
  })
  $('.slider_1').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.counter-1').text(currentSlide + 1 + ' / ' + slick.slideCount);
  })

//LEAD SLIDER(MOBILE)
$('.slider_1').slick({
  arrows: true,
  dots: true,
  dotsClass: "my-dots",
  nextArrow: $('.next-btn_1'),
  prevArrow: $('.previous-btn_1'),
});

//LEAD SLIDER DESKTOP
$('.slider-2-desktop').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  variableWidth: true,
  arrows: true,
  nextArrow: $('.next-btn_2'),
  prevArrow: $('.previous-btn_2'),
});

//SLIDER OFFERS MOBILE
$('.slider-2-mobile').slick({
  arrows: true,
  nextArrow: $('.next-btn-mobile'),
  prevArrow: $('.prev-btn-mobile'),
});

//SLIDER REVIEWS MOBILE
$('.slider_3').slick({
  arrows:true,
  nextArrow: $('.mobile-reviews-slider-next'),
  prevArrow: $('.mobile-reviews-slider-prev'),
});


