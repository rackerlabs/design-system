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
helix-ui-css: false
helix-ui-javascript: false
last-modified: 2018-02-12
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pre-entry state


Assistive search is a content container and a set of behaviors given to a search box. The assistive search container does not populate under text is entered, and is indistinguishable from a default search box state.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the assisted search menu"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-pre-entry.png){:width="566px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Active state

When the search box is clicked and the cursor is active, a designer may choose to prompt the user with recent or suggested searches depending on their context. Recent Searches is just one example of content that can populate an assistive search box.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-active.png){: width="633px"}
{% endfigure %}
{% endcolumn %}

</div>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Post-entry state

Follow the [search box]({{site.baseurl}}/components/search.html) conventions for entered text within the text box. As text is entered in the search box, that text is represented in the Assistive Search Box in the first line: “Search for ‘item’”. The “X” to remove the search item appears as soon as any text is entered.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search post-entry"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-post-entry.png){: width="633px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading

Use a [loading spinner]({{site.baseurl}}/components/loading-indicators.html) if results take need to be processed prior to display. As a default, use a height of 248px.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-loading-state.png){: width="566px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

## Specifications

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Layout

Groups of available keywords are separated by a horizontal divider.

Clicking on a keyword in the menu fills the search input with the keyword and colon, so that the user can then enter their search terms.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-layout-specifications.png){: width="633px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Container

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Sizing and styling

**Minimums:** The assistive search box should have a minimum height of 88px, enough to contain the Search reminder, the command tip, and one assistive search item. It should have a minimum width of the size of the search box itself.

**Maximums:** It should have a maximum height of 328px so that it does not take over the entire screen. Populate an 8px scroll bar in the right gutter to navigate if options exceed 306px height. If the search box itself is small, the recommended width for an assistive search box is 548px, as shown here to the right.

**Style:** The container uses `gray400` and 5px rounded corners.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search styling"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-container.png){: width="648px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Elements

**Elements:** Assistive search boxes consist of an indicator bar, divider line, and assistance at minimum. Category headers and the actual kind of assistive text are to be determined by your product’s needs. You may also include “Additional attributes” to help the user identify the category of the search result.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Assisted search container elements"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-container-elements.png){: width="788px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<!-- Commented out because search pills were put on hold for this pattern. 2/6/18-EN

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
-->
