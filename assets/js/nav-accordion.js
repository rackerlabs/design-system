$(document).ready(function() {

  $('body').on('click','hx-disclosure',function() {
    var siblingSet = $(this).siblings('hx-disclosure');
    var thisThing = $("nav").find('hx-reveal[open]');
    $(siblingSet).each(function() {
      var childrenSet = $(this).children('hx-reveal');
      childrenSet.removeAttr('open');
      $(this).attr('aria-expanded','false');
    });
  });

});
