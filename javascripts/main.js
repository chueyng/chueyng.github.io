var isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(document).ready(function () {

  // Offset for Main Navigation
  $('#mainNav').affix({
      offset: {
        top: 100
      }
  });


  var inView = false;

  $(window).scroll(function() {
      if (isScrolledIntoView('.move')) {
          inView = true;
          $('.move').addClass('animated fadeInDown');
      } else if (isScrolledIntoView('.fil') || isScrolledIntoView('.fir')) {
          inView = true;
          $('.fil').addClass('animated fadeInLeft');
          $('.fir').addClass('animated fadeInRight');
      } else {
          inView = false;
      }

      /* For back-to-top button */
      if ($(this).scrollTop() > 250) {
        $('.top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
      } else {
        $('.top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
      }

      return inView;
  });
});

