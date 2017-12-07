/* jshint esversion: 6 */

var prevUrl = document.referrer;

var anchor = document.getElementById('breadcrumbLink');
anchor.href = prevUrl;

var dict = {
  "Content Areas": "content-areas",
  "Editing": "editing",
  "Help": "help",
  "Inputs and Controls": "inputs-and-controls",
  "Navigation": "navigation",
  "Notifications": "notifications",
  "Selectors": "selectors",
  "Processing": "processing",
  "Search and Filters": "search-and-filters",
  "Tables": "tables"
};

var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType !== 1 || sibling === elem) continue;
        siblings.push(sibling);
    }
    return siblings;
};

for (var key in dict){
  if (prevUrl.includes(dict[key])) {
    var famAnchor = document.getElementById(dict[key]);
    var sibAnchor = getSiblings(famAnchor);
    for (var elem in sibAnchor) {
      sibAnchor[elem].classList.remove("current");
    }
    famAnchor.className = "current";
    anchor.innerHTML = key;
  }
}
