---
title: Assisted Search
parent: Search and Filters
layout: component
category: Components
usage: >
  By using assisted search, users can see the available facets or filters within the search field and construct their own search criteria.
preview-image: preview-images/assisted-search.svg
resource: true
status: stable
last-modified: 2017-11-07
---

{% include toc.html %}

## Assisted search

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default state

When the user clicks the search box, show them a list of keywords that they can use to filter their search.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assist search specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/search-assisted-default.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading state

Use a [loading spinner]({{site.baseurl}}/components/loading-indicators.html) if results take need to be processed prior to display.

User should still have instructions for how to search without autocompleted results (Enter).


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assist search loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/search-assisted-loading.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Search results

Divide search completion results into categories.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search - search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/search-assisted-results.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Assisted search states

**Hover:** The user can click or use their arrow keys to select one of the items in the dropdown list.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-states-1.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

**Active:** When a keyword is in active use, but has not yet been completed with search criteria.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results - active state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-states-2.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- **Filter + No Autocomplete:** Do not use a background color if keyed entries have not formed a complete query string.

- **Complete:** When a filter + search pill has been completed. 

- **Delete:** Use backspace to delete a single character and not the entire query or search pill.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Search pills are used to display the active and complete states in the assisted search pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-assisted-states-3.svg)
{% endfigure %}
{% endcolumn %}

</div>
