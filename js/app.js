$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('li a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('li a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});
