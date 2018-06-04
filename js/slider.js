$(document).ready(function () {
  $('.daft-player__song--thumbnail').slick({
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    arrows: true,
    variableWidth: true,
    infinite: false,
    initialSlide: 1,
    nextArrow: $(".control__next-song"),
    prevArrow: $(".control__previous-song")
  });
});
