semantic = {};
// ready event
semantic.ready = function() {

  // selector cache
  var
    $buttons = $('.ui.buttons .button'),
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

  var
    $buttonsmulti = $('.ui.buttons.multi .button.multi'),
    $buttonmulti  = $('.ui.button.multi').not($buttons).not($button).not($buttonsmulti),
    // alias
    handler = {

      activate: function() {
        $(this)
          .addClass('active')
        ;
      }

    }
  ;

  $buttonsmulti
    .on('click', handler.activate)
  ;

};


// attach ready event
$(document)
  .ready(semantic.ready)
;
