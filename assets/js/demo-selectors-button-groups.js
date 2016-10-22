semantic = {};
// ready event
semantic.ready = function() {

  // selector cache
  var
    $buttons = $('.ui.buttons.single .button'),
    $button  = $('.ui.button').not($buttons),
    // alias
    handler = {

      activate: function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
        ;
      }

    }
  ;

  $buttons
    .on('click', handler.activate)
  ;

    $( ".ui.buttons.multi .button" ).click(function() {
    $( this ).toggleClass( "active" );
  });
};


// attach ready event
$(document)
  .ready(semantic.ready)
;
