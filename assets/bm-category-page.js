
$(document).ready(function(){
  
  if (window.location.href.indexOf('/collections/collections-page-uti') == -1) {
    $('#shopify-section-bm-collection-bundles').hide();
  }

  // menu active

  let currentURL = window.location.href;
  document.querySelectorAll(".bm-collection-header-menu-block a").forEach(p => {
    if(currentURL.indexOf(p.getAttribute("href")) !== -1){
      p.classList.add("active");
    }
  })



  // For bm-collection-bundles section 

  $(".bm-collection-bundles-product-title").click(function(){
    $(this).toggleClass("bm-arrow-down");
    $(".bm-collection-bundles-product").toggleClass("bm-bundles-show" );
  });


  // For bm-collection-recent-articles section

  $('.bm-collection-recent-articles-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });


});