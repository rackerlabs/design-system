$(document).ready(function() {

  $('body').on('click','hx-reveal',function() {
    $(this).siblings('hx-reveal').removeAttr('open');
  });

});