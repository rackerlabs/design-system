/* jshint esversion:6 */

var results = [];

var searchpg = document.getElementById("search-results");
var searchBox = document.getElementById("search-box");
var searchcount = document.getElementById("search-count");

// Take in query string

//ref https://stackoverflow.com/a/4656873
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
//endref

var queried = getUrlVars().q;
var queriedupper = queried.replace(queried[0], queried[0].toUpperCase());
var escaped = escape(queried);
var queried2 = new RegExp("\\b" + queried + "\\b", 'i');

var re = new RegExp("\\b" + queried + "\\b", 'gi');

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
    var fulltext = element.content_text;

    // Add the item to a dictionary
    if (fulltext.match(queried2)) {
      var matchd = fulltext.match(queried2);
      console.log(matchd.input);

      //cleanup
      matchd.input = matchd.input.replace(/«««#div.*»»»/gi," ");
      matchd.input = matchd.input.replace(/«««#\/div#»»»/gi," ");

      // DONE: Identify how many times the string appears in each kv pairs
      if (fulltext.match(re)) {
        ranking = fulltext.match(re);
        rankd = ranking.length;
      }
      else {
        const rankd = 1;
      }
      if (matchd.index > 120){
        preindex = matchd.index - 120;
      } else {
        preindex = 0;
      }
      if (matchd.index + 120){
        postindex = matchd.index + 120;
      } else {
        postindex = matchd.length;
      }
      if (matchd.input.slice(preindex, postindex)){
        snipd = matchd.input.slice(preindex, postindex);
      } else {
        snipd = "No relevant text here.";
      }
      snipd = snipd.replace(queried, `<b>${queried}</b>`);
      snipd = snipd.replace(queriedupper, `<b>${queriedupper}</b>`);
      results.push({
        "id": element.id,
        "title": element.title,
        "url": element.url,
        "summary": element.summary,
        "hero-image": element.image,
        "snippet": snipd,
        "rank": rankd
      });

    }
  });
  if (!queried || queried == undefined){
    return;
  } else {
    // Add search query as prefilled in the search box
    searchBox.value = escaped;

    searchcount.innerHTML=`Your search returned ${results.length} results.`;

    // DONE: Add weighting based on how many times the string appears
    results = results.sort(function (a,b){
      return a.rank - b.rank;
    });
    results = results.reverse();
    results.forEach(function(element){
      return;
    });
    // Return the dictionary to the search page as an HTML object
    results.forEach(function(result) {
      //ref: https://stackoverflow.com/questions/595808/is-it-possible-to-append-to-innerhtml-without-destroying-descendants-event-list#comment407853_595825
      var resultList = document.createElement("li");
      if (result.rank > 1) {
        countedText = `There were ${result.rank} instances of <i>${escaped}</i> on this page.`;
      } else {
        countedText = `There was ${result.rank} instance of <i>${escaped}</i> on this page.`;
      }
      resultList.innerHTML = `<p><a class='result-title hxContainerTitle' href="${result.url}">${result.title}</a></p><p class='result-summary hxSubdued'>${result.snippet}</p><p class='result-count hxSubBody'>${countedText}</p>`;
      searchpg.appendChild(resultList);
      //endref
    });
  }
});
