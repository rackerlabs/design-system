$(document).ready(function() {
  console.log("working");

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
    $('#setWidth').width(395-subtract_width);

    //typeahead
    $( function() {
      var availableTags = [
        "Bart Renner",
        "Carmen Broomes",
        "Elizabeth Grothues",
        "Eric Weidner",
        "Lane Fielder",
        "Mikey Hougland",
        "Tommy Shook",
        "Ty Taylor"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
    } );

    $( function() {
      var availableTags = [
        "Bart Renner",
        "Carmen Broomes",
        "Elizabeth Grothues",
        "Eric Weidner",
        "Lane Fielder",
        "Mikey Hougland",
        "Tommy Shook",
        "Ty Taylor"
      ];
      function split( val ) {
        return val.split( /,\s*/ );
      }
      function extractLast( term ) {
        return split( term ).pop();
      }

      $( "#tags-multi" )
        // don't navigate away from the field on tab when selecting an item
        .on( "keydown", function( event ) {
          if ( event.keyCode === $.ui.keyCode.TAB &&
              $( this ).autocomplete( "instance" ).menu.active ) {
            event.preventDefault();
          }
        })
        .autocomplete({
          minLength: 0,
          source: function( request, response ) {
            // delegate back to autocomplete, but extract the last term
            response( $.ui.autocomplete.filter(
              availableTags, extractLast( request.term ) ) );
          },
          focus: function() {
            // prevent value inserted on focus
            return false;
          },
          select: function( event, ui ) {
            var terms = split( this.value );
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push( ui.item.value );
            // add placeholder to get the comma-and-space at the end
            terms.push( "" );
            this.value = terms.join( ", " );
            return false;
          }
        });
    } );

    //dropdown selector
    $('#contact1').selectmenu();
    $('#contact2').selectmenu();
    $('#contact3').selectmenu();
    $('#contact3-button').addClass('textInputError');
    $('#contact-multi').multiselect({
        columns: 1,
        placeholder: 'Select Contacts'
    });

    //dropdown selector w/ typeahead
      $.widget( "custom.combobox", {
        _create: function() {
          this.wrapper = $( "<span>" )
            .addClass( "custom-combobox" )
            .insertAfter( this.element );

          this.element.hide();
          this._createAutocomplete();
          this._createShowAllButton();
        },

        _createAutocomplete: function() {
          var selected = this.element.children( ":selected" ),
            value = selected.val() ? selected.text() : "";

          this.input = $( "<input>" )
            .appendTo( this.wrapper )
            .val( value )
            .attr( "title", "Title" )
            .attr( "placeholder", "Type or select an option" )
            .addClass( "custom-combobox-input ui-widget ui-widget-content ui-selectmenu-button ui-button ui-state-default" )
            .autocomplete({
              delay: 0,
              minLength: 0,
              source: $.proxy( this, "_source" )
            })

          this._on( this.input, {
            autocompleteselect: function( event, ui ) {
              ui.item.option.selected = true;
              this._trigger( "select", event, {
                item: ui.item.option
              });
            },

            autocompletechange: "_removeIfInvalid"
          });
        },

        _createShowAllButton: function() {
          var input = this.input,
            wasOpen = false;

          $( "<span>" )
            .attr( "tabIndex", -1 )
            .tooltip()
            .appendTo( this.wrapper )
            .button({
              icons: {
                primary: "ui-icon-triangle-1-s"
              },
              text: false
            })
            .removeClass( "ui-corner-all" )
            .addClass( "custom-combobox-toggle ui-corner-right" )
            .on( "mousedown", function() {
              wasOpen = input.autocomplete( "widget" ).is( ":visible" );
            })
            .on( "click", function() {
              input.trigger( "focus" );

              // Close if already visible
              if ( wasOpen ) {
                return;
              }

              // Pass empty string as value to search for, displaying all results
              input.autocomplete( "search", "" );
            });
        },

        _source: function( request, response ) {
          var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
          response( this.element.children( "option" ).map(function() {
            var text = $( this ).text();
            if ( this.value && ( !request.term || matcher.test(text) ) )
              return {
                label: text,
                value: text,
                option: this
              };
          }) );
        },

        _removeIfInvalid: function( event, ui ) {

          // Selected an item, nothing to do
          if ( ui.item ) {
            return;
          }

          // Search for a match (case-insensitive)
          var value = this.input.val(),
            valueLowerCase = value.toLowerCase(),
            valid = false;
          this.element.children( "option" ).each(function() {
            if ( $( this ).text().toLowerCase() === valueLowerCase ) {
              this.selected = valid = true;
              return false;
            }
          });

          // Found a match, nothing to do
          if ( valid ) {
            return;
          }

          // Remove invalid value
          this.input
            .val( "" )
            .attr( "title", value + " didn't match any item" )
            .tooltip( "open" );
          this.element.val( "" );
          this._delay(function() {
            this.input.tooltip( "close" ).attr( "title", "" );
          }, 2500 );
          this.input.autocomplete( "instance" ).term = "";
        },

        _destroy: function() {
          this.wrapper.remove();
          this.element.show();
        }
      });

      $( "#combobox" ).combobox();
      $( "#toggle" ).on( "click", function() {
        $( "#combobox" ).toggle();
      });


    //dropdown buttons
    var page = $( "#page" );

    $( ".dropdown-btn" ).controlgroup();
    $( "#dropdown-btn" ).on( "selectmenuchange", function() {
      page.css({ "dropdown-btn": $( this ).val() });
    });
    $('#dropdown-btn-button').addClass('ds-btn-med');


    $( "#dropdown-btn-combo" ).selectmenu({
      classes: {
        "ui-selectmenu-button": "ui-button-icon-only demo-splitbutton-select ds-btn-med"
      },
      position: { my: "right top", at: "right bottom" },
      change: function(){
        $( ".output" ).append( "<li>" + this.value + "</li>" );
      }
    });
    $( ".controlgroup" ).controlgroup();
    $( "button" ).click(function() {
      $( ".output" ).append( "<li>...</li>" );
    });

    $( ".dropdown-btn" ).controlgroup();
    $( "#dropdown-btn-sec" ).on( "selectmenuchange", function() {
      page.css({ "dropdown-btn": $( this ).val() });
    });
    $('#dropdown-btn-sec-button').addClass('ds-btn-med-sec');

    $( "#dropdown-btn-combo-sec" ).selectmenu({
      classes: {
        "ui-selectmenu-button": "ui-button-icon-only demo-splitbutton-select ds-btn-med-sec"
      },
      position: { my: "right top", at: "right bottom" },
      change: function(){
        $( ".output" ).append( "<li>" + this.value + "</li>" );
      }
    });
    $( ".controlgroup" ).controlgroup();
    $( "button" ).click(function() {
      $( ".output" ).append( "<li>...</li>" );
    });

    //selectors keyboard accesibility
    $('.icheck input').iCheck({
        checkboxClass: 'icheckbox',
        radioClass: 'iradio'
    });

    //overview div height
    /*var maxheight = 0;

    $('.ws-sum-con').each(function () {
        maxheight = ($(this).height() > maxheight ? $(this).height() : maxheight);
    });

    $('.ws-sum-con').height(maxheight);*/

});
