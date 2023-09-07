//  $('.owl-carousel').owlCarousel({
//     loop:false,
//     margin:20,
//     items: 2,
//     responsiveClass:true,
//     navigation:false,
//     navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
//    autoplay: true,
//    nav:false,
//     responsive:{
//         0:{
//             items:1,
//             nav:false
//         },
//         600:{
//             items:1,
//             nav:false
//         },
//         1000:{
//             items:2,
//             nav:false,
//             loop:true
//         }
//     }
// })




// $(window).scroll(function() {
//     if ($(this).scrollTop() > 0){  
//         $('.header').addClass("sticky");
//     }
//     else{
//         $('.header').removeClass("sticky");
//     }
// });



jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">&#708;</div><div class="quantity-button quantity-down">&#709;</div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
    updateTotalPrice();
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
    updateTotalPrice();
  });

});
$('#img1').on('click', function () {
  var divID = $(this).attr('data-box');
  $(this).addClass('Active').siblings().removeClass('Active');
  $('#' + divID).addClass('Active').siblings().removeClass('Active');
  $("#div1").show("slow");
  $("#div2").hide("slow");
  $("#div3").hide("slow");
  $("#div4").hide("slow");
  $("#div5").hide("slow");
  $("#div6").hide("slow");
})   

$('#img2').on('click', function () {
  var divID = $(this).attr('data-box');
  $(this).addClass('Active').siblings().removeClass('Active');
  $('#' + divID).addClass('Active').siblings().removeClass('Active');
  $("#div2").show("slow");
  $("#div1").hide("slow");
  $("#div3").hide("slow");
  $("#div4").hide("slow");
  $("#div5").hide("slow");
  $("#div6").hide("slow");
})   
$('#img3').on('click', function () {
  var divID = $(this).attr('data-box');
  $(this).addClass('Active').siblings().removeClass('Active');
  $('#' + divID).addClass('Active').siblings().removeClass('Active');
  $("#div3").show("slow");
  $("#div1").hide("slow");
  $("#div2").hide("slow");
  $("#div4").hide("slow");
  $("#div5").hide("slow");
  $("#div6").hide("slow");
})   
$('#img4').on('click', function () {
  var divID = $(this).attr('data-box');
  $(this).addClass('Active').siblings().removeClass('Active');
  $('#' + divID).addClass('Active').siblings().removeClass('Active');
  $("#div4").show("slow");
  $("#div1").hide("slow");
  $("#div2").hide("slow");
  $("#div3").hide("slow");
  $("#div5").hide("slow");
  $("#div6").hide("slow");
})   
$('#img5').on('click', function () {
  var divID = $(this).attr('data-box');
  $(this).addClass('Active').siblings().removeClass('Active');
  $('#' + divID).addClass('Active').siblings().removeClass('Active');
  $("#div5").show("slow");
  $("#div1").hide("slow");
  $("#div2").hide("slow");
  $("#div3").hide("slow");
  $("#div4").hide("slow");
  $("#div6").hide("slow");
})   
$('#img6').on('click', function () {
  var divID = $(this).attr('data-box');
  $(this).addClass('Active').siblings().removeClass('Active');
  $('#' + divID).addClass('Active').siblings().removeClass('Active');
  $("#div6").show("slow");
  $("#div1").hide("slow");
  $("#div2").hide("slow");
  $("#div3").hide("slow");
  $("#div4").hide("slow");
  $("#div5").hide("slow");
})   
$("#img1").click(function() {
  $('html, body').animate({ scrollTop:$("#product-sect").offset().top}, 500);
});
$("#img2").click(function() {
  $('html, body').animate({ scrollTop:$("#product-sect").offset().top}, 500);
});
$("#img3").click(function() {
  $('html, body').animate({ scrollTop:$("#product-sect").offset().top}, 500);
});
$("#img4").click(function() {
  $('html, body').animate({ scrollTop:$("#product-sect").offset().top}, 500);
});
$("#img5").click(function() {
  $('html, body').animate({ scrollTop:$("#product-sect").offset().top}, 500);
});
$("#img6").click(function() {
  $('html, body').animate({ scrollTop:$("#product-sect").offset().top}, 500);
});

function updateTotalPrice() {
  setTimeout(function() {
    var price = parseFloat($('.product-single__prices [data-product-price]').text().trim().replace('$', ''));
    var quantity = parseInt($('input[name="quantity"]').first().val());
    var total = price * quantity;
    $('.product__price-total').text('$'+total.toFixed(2));  
  }, 50)
}
var callback = function(mutationsList, observer) {
  for (var mutation of mutationsList) {
    updateTotalPrice();
  }
};
var targetNode = document.querySelector(".product-single__prices [data-product-price]");
var observer = new MutationObserver(callback);
observer.observe(targetNode, {childList: true});