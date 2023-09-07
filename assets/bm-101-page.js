// Start Contents 
$(document).ready(function() {

  $('.bm-right-top-content p').click(function() {
    var text = $(this).text();
    var target = $('strong:contains(' + text + ')');
    if (target.length) {

      if ($(window).width() < 768) {
        // console.log('>>announcement: ' + $('.announcement').height());
        // console.log('>>top: ' + target.offset().top);
        var top = target.offset().top - $('.announcement').height();
      } else {
        var top = target.offset().top - $('.site-header').height();
        // console.log('>>site-header: ' + $('.site-header').height());
        // console.log('>>top: ' + target.offset().top);
      }

      $('html, body').animate({
        scrollTop: top
      }, 500);
    }
  });
  
});



// references accordian start
document.querySelectorAll('.bm-references-acordian-title').forEach(function(item){
  item.addEventListener('click', function(){
    this.classList.toggle('bm-page-acordian-arrow');
    this.nextElementSibling.classList.toggle('bm-page-acordian-content-show');

  })
})
