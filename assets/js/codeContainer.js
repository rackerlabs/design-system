var CODELIB = CODELIB || ( function() {
  var _args = {}; // private

  return {
      init : function(Args) {
        _args = Args;
      },
      codeContainer : function() {
        $.get("https://raw.githubusercontent.com/rackerlabs/helix-ui/master/source/components/" + _args[0] + "/index.html", function( data) {
          $( ".code-container" ).append(data);
        }, "text");
      }
    };
}());
