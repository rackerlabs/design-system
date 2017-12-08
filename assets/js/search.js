/* jshint esversion:6 */

var results = [];

var searchpg = document.getElementById("search-results");

// Take in query string

//ref https://stackoverflow.com/a/4656873
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
//endref

var queried = getUrlVars().q;

// Call the JSON feed as an object

function jsonCall(urlValue){
  return $.ajax({
    method: "GET",
    url: urlValue,
    dataType: "json",
  });
}

jsonCall("feed.json").done(function(data,textStatus,jqXHR) {
  const docArray = data.items;

  // Loop through the content_text kv pairs to find the query string.
  docArray.forEach(function(element) {
    // TODO: Identify how many times the string appears in each kv pairs

    var fulltext = element.content_text;

    // Add the item to a dictionary
    if (fulltext.match(queried)) {
      results.push({
        "id": element.id,
        "title": element.title,
        "url": element.url,
        "summary": element.summary,
        "hero-image": element.image
      });

      // TODO: Add weighting based on how many times the string appears
    }
  });

  // Return the dictionary to the search page as an HTML object
  results.forEach(function(result) {
    //ref: https://stackoverflow.com/questions/595808/is-it-possible-to-append-to-innerhtml-without-destroying-descendants-event-list#comment407853_595825
    var resultList = document.createElement("li");
    resultList.innerHTML = `<a class='result-title hxContainerTitle' href="${result.url}">${result.title}</a><br/><span class='result-summary hxSubBody'>${result.summary}</span>`;
    searchpg.appendChild(resultList);
    //endref
  });
});
