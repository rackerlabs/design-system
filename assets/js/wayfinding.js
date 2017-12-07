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

for (var key in dict){
  if (prevUrl.includes(dict[key])) {
    anchor.innerHTML = key;
  }
}
