/******************************************
    Version: 1.0
/****************************************** */

(function ($) {
  "use strict";


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Banner 

  $('.heading').height($(window).height());
  $('.parallaxie').parallaxie();

  // CONTACT
  jQuery(document).ready(function () {
    $('#contactform').submit(function () {
      var action = $(this).attr('action');
      $("#message").slideUp(750, function () {
        $('#message').hide();
        $('#submit')
          .after('<img src="images/ajax-loader.gif" class="loader" />')
          .attr('disabled', 'disabled');
        $.post(action, {
          first_name: $('#first_name').val(),
          last_name: $('#last_name').val(),
          email: $('#email').val(),
          phone: $('#phone').val(),
          select_service: $('#select_service').val(),
          select_price: $('#select_price').val(),
          comments: $('#comments').val(),
          verify: $('#verify').val()
        },
          function (data) {
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#contactform img.loader').fadeOut('slow', function () {
              $(this).remove()
            });
            $('#submit').removeAttr('disabled');
            if (data.match('success') != null) $('#contactform').slideUp('slow');
          }
        );
      });
      return false;
    });
  });

})(jQuery);