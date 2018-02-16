/* jshint esversion: 6 */

var CODELIB = CODELIB || ( function() {
  var _args = {}; // private

  return {
      init : function(Args) {
        _args = Args;
      },
      codeContainer : function() {
        $.get("https://raw.githubusercontent.com/rackerlabs/helix-ui/master/docs/" + _args[0] + "/index.html", function( data ) {
          const object1 = /{% endblock %}/gi;
          var mappedClean = {
            obj1:object1,
            obj2:/-{3}[\s\S]*?{% block content %}/gi
          };
          for (const objected in mappedClean) {
            data1 = data.replace( mappedClean[objected], "<p></p>");
          }
          const codebase1 = /{% code 'html' %}/gi;
          const codebase2 = /{% endcode %}/gi;
          const wholecode = /{% code 'html' %}[\s\S]*?{% endcode %}/gi;
          var testString = data.match(/{% code 'html' %}([\s\S]*?){% endcode %}/i);
          var escaped = new Option(testString[1]).innerHTML.trim();
          data1 = data1.replace( codebase1, "<p></p><pre><code class='html'>"+escaped+"</code></pre><p></p>{% code 'html' %}" );
          data1 = data1.replace( wholecode, "<p></p>" );
          data1 = data1.replace( codebase2, "<p></p>" );
          data1 = data1.replace( object1, "" );
          $( ".code-container" ).append( data1 );
        }, "text");
      }
    };
}());
