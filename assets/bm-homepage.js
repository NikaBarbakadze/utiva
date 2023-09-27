
$(document).ready(function(){

  // script start for bm-customers-testimonial section
  $('.bm-customers-testimonial-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  // for thumbnails
  $('.bm-customers-testimonial-slider-dot-right').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.bm-customers-testimonial-slider',
    dots: true,
    speed:400,
    focusOnSelect: true,
    arrows: true
  });

  //keeps thumbnails active when changing main image, via mouse/touch drag/swipe
  $('.bm-customers-testimonial-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //remove all active class
    $('.bm-customers-testimonial-slider-dot-right .slick-slide').removeClass('slick-current');
    //set active class for current slide
    $('.bm-customers-testimonial-slider-dot-right .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
  }); 

  // script end for bm-customers-testimonial section


  // script start for bm-doctors-testimonial section

  $('.bm-doctors-testimonial-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 400,
    fade: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });


  // script end for bm-doctors-testimonial section

  // script start for bm-popular-solutions-product section

  $('.bm-popular-solutions-product-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true
  });


  // script end for bm-popular-solutions-product section


});