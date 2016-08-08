$(document).ready(function() {
    //count down on text area characters
    var text_max = 50;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;
        var text_remaining = text_max - text_length;
        if(text_remaining<10){
        	$('#textarea_feedback').html('<span style="color:#F44336">' + text_remaining + '</span>/'+text_max+' characters remaining');
        }else{
        	$('#textarea_feedback').html(text_remaining + '/'+text_max+' characters remaining');
        }
    });

    //size of text field with prefix or suffix
    var prefix_width = $('#inputPrefix').width()+5;
    var suffix_width = $('#inputSuffix').width()+5;
    var subtract_width = prefix_width + suffix_width;
    $('#setWidth').width(400-subtract_width);

    $('#contact').selectmenu();

    $( function() {
    var page = $( "#page" );
 
    $( ".toolbar" ).controlgroup();
    $( "#dropdown-btn" ).on( "selectmenuchange", function() {
      page.css({ "dropdown-btn": $( this ).val() });
    })
    $( basicControls.concat( valueControls ).join( ", " ) ).on( "click change selectmenuchange",
      function() {
        document.execCommand(
          this.id,
          false,
          $( this ).val()
        );
      } );

    } );

    $('.icheck input').iCheck({
        checkboxClass: 'icheckbox',
        radioClass: 'iradio'
    });

});
