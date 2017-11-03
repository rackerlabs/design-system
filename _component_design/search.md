---
title: Search Bar
parent: Search and Filters
layout: component
category: Components
usage: >
  A search box is a combination of input field and submit button. One may think that the search box doesn’t need a design; after all, it’s just two simple elements. But since the search box is one of the most frequently used design element on content-heavy websites, its usability is critical.
preview-image: preview-images/search.svg
resource: true
status: unknown
last-modified: 2017-09-11
---

{% include toc.html %}

## Introduction

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### When to use
When an app supports large amounts of information, users should be able to quickly locate content by searching for it.

### Best practices

- Display the search element prominently on the page.
- Always pair the search with the eyeglass icon.
- Place search on every page that is displaying aggregate data sets.
- Rule of thumb is to have bar length incorporate 30 - character text input .

{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Search implemented in the support delivery platform UI"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-hero.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Specifications
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Basic search bar


Search Bars utilize the same specs as text inputs and as such should align unless otherwise specified.

By default, the search bar will extend across the full width of its container, though we do recommend a minimum width of 294px so that the user can see what they have typed previously. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Basic search bar"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-basic.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### States

When a user clicks into the search bar it becomes active. Showing the user their mouse as shown. Keep in mind, other types of searches will have different active interaction states. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"On focus, users cursor becomes active within the search bar. Depending on users state of the search bar may change. If no results, or an error occurs, display error state along with error message about error. "] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-states.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing

- Content should be vertically centered.
- Padding around edges of search box: 8px.
- When no search results found, error message displays, “No results found”.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Spacing specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-spacing.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### No results

When a user enters a search term and presses enter and there are no results, the form remains in Filled state with a message beneath it placed as an error message is, but in our subdued text style, encouraging the user to try another search term.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"When no results found use the default unfilled search bar state and add a “No results” message beneath."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-no-results.svg)
{% endfigure %}
{% endcolumn %}

</div>
