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

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Assisted search drop-down

When the user clicks the search box, show them a list of keywords that they can use to filter their search.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the assisted search drop-down menu"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-drop-down-menu.png){: width="548px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Layout specifications

Separate groups of keywords using a horizontal divider.

Append the keyword with colon to the search input when the user clicks on a keyword in the menu.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assist search specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-layout-specifications.png){: width="548px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Search results

Divide search results into categories.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search - search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-predictive-results-list.png){: width="548px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Assisted search states

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading

Use a [loading spinner]({{site.baseurl}}/components/loading-indicators.html) if results take need to be processed prior to display.

User should still have instructions for how to search without autocompleted results (Enter).


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assist search loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-loading-state.png){: width="548px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Hover and focus

The user can click on a search result or use their up and down arrow keys to traverse items in the drop-down list.

Clicking on a search result item, or pressing the enter key when a result item has focus will close the drop-down menu and execute the search using the selected item.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-hover-and-focus.png){: width="548px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Active keyword

When a keyword is in active use, but the query has not been completed with search criteria.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search results - active state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-active-keyword.png){: width="548px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Active keyword + no terms

Do not apply the gray background color if keyed entries have not formed a complete query string.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Cyan search pills are used to display the active state."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-active-and-entering-terms.png){: width="548px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Completed search

When the user has typed the key and term and pressed enter, the search is completed and the gray pill shape surrounds the query.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Gray search pills are used to display the complete state."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-completed-search.png){: width="548px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Deleting terms

Use backspace to delete a single character and not the entire query or search pill.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Backspace deletes single characters, and not the entire set."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-deleting-terms.png){: width="548px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>
