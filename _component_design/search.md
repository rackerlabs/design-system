---
title: Search
parent: Search and Filters
layout: component
category: Components
usage: >
  By using the Helix search pattern, users can see the available facets or filters within the search field and construct their own search criteria.
preview-image: preview-images/assisted-search.svg
resource: false
status: stable
helix-ui-css: true
helix-ui-javascript: true
last-modified: 2018-04-06
pageLink: components/search/
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Pre-entry state


Assistive search is a content container and a set of behaviors given to a search box. The assistive search container does not populate under text is entered, and is indistinguishable from a default search box state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Meet the assisted search menu"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-pre-entry.png" width="566"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Active state

When the search box is clicked and the cursor is active, a designer may choose to prompt the user with recent or suggested searches depending on their context. Recent Searches is just one example of content that can populate an assistive search box.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Assisted search specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-active.png" width="633"/>
{% endfigure %}
{% endcolumn %}

</div>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Post-entry state

Follow the [search box]({{site.baseurl}}/components/search.html) conventions for entered text within the text box. As text is entered in the search box, that text is represented in the Assistive Search Box in the first line: “Search for ‘item’”. The “X” to remove the search item appears as soon as any text is entered.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Assisted search post-entry"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-post-entry.png" width="633"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

Use a [loading spinner]({{site.baseurl}}/components/loading-indicators.html) if results take need to be processed prior to display. As a default, use a height of 248px.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Assisted search loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-loading-state.png" width="566"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>

## Specifications

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Layout

Groups of available keywords are separated by a horizontal divider.

Clicking on a keyword in the menu fills the search input with the keyword and colon, so that the user can then enter their search terms.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Assisted search specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-layout-specifications.png" width="633"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Container

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Sizing and styling

**Minimums:** The assistive search box should have a minimum height of 88px, enough to contain the Search reminder, the command tip, and one assistive search item. It should have a minimum width of the size of the search box itself.

**Maximums:** It should have a maximum height of 328px so that it does not take over the entire screen. Populate an 8px scroll bar in the right gutter to navigate if options exceed 306px height. If the search box itself is small, the recommended width for an assistive search box is 548px, as shown here to the right.

**Style:** The container uses `gray400` and 5px rounded corners.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Assisted search styling"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-container.png" width="648"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Elements

**Elements:** Assistive search boxes consist of an indicator bar, divider line, and assistance at minimum. Category headers and the actual kind of assistive text are to be determined by your product’s needs. You may also include “Additional attributes” to help the user identify the category of the search result.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Assisted search container elements"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-assisted/assisted-search-container-elements.png" width="788"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>
