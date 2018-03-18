$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var OldScrollTop = 0;
  $(window).scroll(function(){
    var ScrollTop = $(this).scrollTop();
    if (ScrollTop - OldScrollTop > 50) {
      var NavbarHeight = $('.navbar').height();
      $('.navbar').animate({
        top: '-' + NavbarHeight
      }, 150);
      OldScrollTop = ScrollTop;
    } else if(OldScrollTop - ScrollTop > 50) {
      $('.navbar').animate({
        top: '0px'
      }, 150);
      OldScrollTop = ScrollTop;
    }
  });
});
