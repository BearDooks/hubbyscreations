$(function () {
  $("#navigation-bar").load("/includes/header.html");
  $("#footer-area").load("/includes/footer.html");
});

$(document).ready(function(){
  $('.slick_photo').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});