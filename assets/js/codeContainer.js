var CODELIB = CODELIB || ( function() {
  var _args = {}; // private

  return {
      init : function(Args) {
        _args = Args;
      },
      codeContainer : function() {
        $.get("https://raw.githubusercontent.com/rackerlabs/helix-ui/master/source/components/" + _args[0] + "/index.html", function( data ) {
          // console.log(data);
          // $(data).find(".demo").appendTo( ".code-container" );
          var re = new RegExp("(-{3})([\s\S]*?)({% block content %})");
          var mappedClean = {
            obj1:"{% code 'html' %}",
            obj2:"{% endcode %}",
            obj3:"{% endblock %}"
          };
          for (var objected in mappedClean) {
            data = data.replace(objected, "");
          }
          console.log(data.replace(re, ""));
          $( ".code-container" ).append( data );
        }, "text");
      }
    };
}());
