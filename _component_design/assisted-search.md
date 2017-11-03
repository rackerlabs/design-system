---
title: Assisted Search
parent: Search and Filters
layout: component
category: Components
usage: >
  A search box is a combination of input field and submit button. One may think that the search box doesn’t need a design; after all, it’s just two simple elements. But since the search box is one of the most frequently used design element on content-heavy websites, its usability is critical.
preview-image: preview-images/assisted-search.svg
resource: true
status: unknown
last-modified: 2017-09-11
---

{% include toc.html %}

## Assisted search

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default state

Upon clicking the search box the user should be presented with a list of keyword that they can use to filter their search. The user can click or type out a keyword to use it as a filter to narrow down their search.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assist search specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-default.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading state

If autocomplete is taking time to load, a loading spinner should be used in place of results.

User should still have instructions for how to search without autocompleted results (Enter).


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assist search specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-loading.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Search results

Search completion results should be divided up by categories.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-results.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Assisted search states

**Hover:** The user may click or use their arrow keys to select one of the items in the dropdown list.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-states-1.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

**Active:** When a keyword is actively being used but has not yet been completed with search criteria.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-states-2.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- **Filter + No Autocomplete:** Keyed entries that have not formed a complete query string should not have a background color.

- **Complete:** When a filter+search pill has been completed. 

- **Delete:** Backspace should delete a single character and not the entire query and/or search pill.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-states-3.svg)
{% endfigure %}
{% endcolumn %}

</div>
