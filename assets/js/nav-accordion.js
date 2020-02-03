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
  var currentNav = $('#nav').find('.current');
  var navHeight = $('#nav').height();
  var itemHeight = currentNav.height();
  $('#nav').scrollTop(currentNav.position().top-(navHeight/2)+itemHeight);
});
