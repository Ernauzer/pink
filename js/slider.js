$(".select_color_slider").slick({
  dots: true,
});

console.log($('.swiper-wrapper'));
$(".comment_wrapper .swiper-wrapper").slick({
  dots: true,
  spaceBetween: 30,
  nextButton: ".comment_button-next",
  prevButton: ".comment_button-prev",
  pagination: {
    el: '.swiper-pagination_block',
    clickable: true,
  },
});
