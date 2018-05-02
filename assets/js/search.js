---
---
/* jshint esversion:6 */
var results = [];

var searchpg = document.getElementById("search-results");
var searchBox = document.getElementById("search-box");
var searchcount = document.getElementById("search-count");
var skeletonRows = document.querySelectorAll('.skeleton-row');

// Take in query string

//ref https://stackoverflow.com/a/4656873
// Read a page's GET URL variables and return them as an associative array.

// TODO: Implement some sort of NOT feature.

function getUrlVars() {
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

// DONE: Allow for plus and quotes.
function cleanEntry(element) {
  var entryMap = [{
    "plus": /%2B/gi,
    "quote": /%22/gi
  }];
  entryMap.forEach(function(mapped){
    if (element.includes("%2B")){
      element = element.replace(mapped.plus, " ");
    }
    if (element.includes("%22")){
      element = element.replace(mapped.quote, "");
    }
  });
  return element;
}

var queried = getUrlVars().q.replace("+", " ");
var queriedupper = queried.replace(queried[0], queried[0].toUpperCase());
// var escaped = escape(queried);

queried = cleanEntry(queried);

var queried2 = new RegExp("\\b" + queried + "\\b", 'i');

var re = new RegExp("\\b" + queried + "[s]?\\b", 'gi');
var re2 = new RegExp(queried, 'gi');

// Call the JSON feed as an object

function jsonCall(urlValue){
  return $.ajax({
    method: "GET",
    url: urlValue,
    dataType: "json",
  });
}

jsonCall("{{ site.baseurl }}/feed.json").done(function(data,textStatus,jqXHR) {
  const docArray = data.items;

  // Loop through the content_text kv pairs to find the query string.
  docArray.forEach(function(element) {

    // TODO: Hide the TOC from the full text.
    var fulltext = element.content_text;
    var titled = element.title;

    // Add the item to a dictionary
    if (fulltext.match(queried2)) {
      var matchd = fulltext.match(queried2);
      var inputValue = matchd.input;

      //cleanup
      inputValue = inputValue.replace(/«««#\/div#»»»/gi," ");
      inputValue = inputValue.replace(/«««#div.*#»»»/gi," ");
      inputValue = inputValue.replace(/\n/gi," ");

      if (inputValue.search(queried2) > 0){
        indexValue = inputValue.search(queried2);
      } else {
        indexValue = inputValue.search(queriedupper);
      }

      // DONE: Identify how many times the string appears in each kv pairs
      if (fulltext.match(re)) {
        ranking = fulltext.match(re);
        rankd = ranking.length;
      }
      else {
        const rankd = 1;
      }

      // DONE: Scan titles and rank higher based on term in title.
      if (titled.search(re2) > -1) {
        fullrank = rankd + 10;
      } else {
        fullrank = rankd;
      }

      // scale snippet size based on ranking
      // TODO: Cut off at word boundaries instead of by character count.
      if (rankd > 10) {
        snipdLength = 10 * rankd;
      } else {
        snipdLength = 100;
      }

      if (indexValue - snipdLength > 0){
        preindex = indexValue - snipdLength;
      } else {
        preindex = 0;
      }

      if (indexValue + snipdLength < inputValue.length){
        postindex = indexValue + snipdLength;
      } else {
        postindex = inputValue.length;
      }

      if (inputValue.slice(preindex, postindex)){
        snipd = inputValue.slice(preindex, postindex);
      } else {
        snipd = "No relevant text here. Your query might be in an image.";
        // TODO: Figure out if we can index images...
        // TODO: Provide page sample instead of actual snippet if no clear example (e.g., the term is in the title).
      }

      if (element.image){
        imaged = element.image;
      } else {
        imaged = "preview-images/helix_thumbnail_placeholder.svg";
      }

      snipd = snipd.replace(re, `<b>${queried}</b>`);
      results.push({
        "id": element.id,
        "title": element.title,
        "url": element.url,
        "summary": element.summary,
        "image": imaged,
        "snippet": snipd,
        "counted": rankd,
        "used": element.used,
        "rank": fullrank
      });

    }
  });

  results.forEach(function(result) {
    var indexed = results.indexOf(result);
    if (result.used != "true") {
      results.splice(indexed,1);
    }
    return;
  });

  if (!queried || queried == undefined){
    return;
  } else {
    // Add search query as prefilled in the search box
    searchBox.value = queried;

    skeletonRows.forEach(function(element) {
      element.style.display = "none";
    });

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
      if (result.used != "true") {
      } else {
        // REF: https://stackoverflow.com/questions/595808/is-it-possible-to-append-to-innerhtml-without-destroying-descendants-event-list#comment407853_595825
        var resultList = document.createElement("div");
        resultList.setAttribute("id", "result-object");
        if (result.rank > 1 && result.rank > result.counted) {
          countedText = `<b>${queried}</b> appears ${result.counted} times in this article, and <b>${queried}</b> appears in the title.`;
        } else if (result.rank > 1) {
          countedText = `<b>${queried}</b> appears ${result.counted} times in this article.`;
        } else {
          countedText = `<b>${queried}</b> appears ${result.counted} time in this article.`;
        }
        resultList.innerHTML = `
          <div class="hxRow">
            <div class="hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-10-md hxSpan-10-lg">
              <p class='result-title'>
                <a href="${result.url}">${result.title}</a>
              </p>
              <p class='result-summary'>${result.snippet}</p>
              <p class='result-count'>${countedText}</p>
            </div>
            <div class="hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-2-md hxSpan-2-lg">
              <div class='side-image'>
                <a href="${result.url}">
                  <img src="assets/images/${result.image}">
                </a>
              </div>
            </div>
          </div>
        `;
        searchpg.appendChild(resultList);
        //endref
      }
    });
  }
});
