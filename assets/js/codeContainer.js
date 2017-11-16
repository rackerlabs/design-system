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
          var cleanedData = data.replace(re,"");
          console.log(cleanedData);
          $( ".code-container" ).append( cleanedData );
        }, "text");
      }
    };
}());
