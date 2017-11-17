/* jshint esversion: 6 */

var CODELIB = CODELIB || ( function() {
  var _args = {}; // private

  return {
      init : function(Args) {
        _args = Args;
      },
      codeContainer : function() {
        $.get("https://raw.githubusercontent.com/rackerlabs/helix-ui/master/source/components/" + _args[0] + "/index.html", function( data ) {
          var re = new RegExp("-{3}[\s\S]*?{% block content %}");
          var mappedClean = {
            obj1:/{% code 'html' %}[\s\S]*?{% endcode %}/gi,
            obj2:/{% endblock %}/gi,
            obj3:/-{3}[\s\S]*?{% block content %}/gi
          };
          for (const objected in mappedClean) {
            data = data.replace( mappedClean[objected], "<p></p>");
          }
          $( ".code-container" ).append( data );
        }, "text");
      }
    };
}());
