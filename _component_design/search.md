---
title: Search Bar
parent: Search and Filters
layout: component
category: Components
usage: >
  A search box is a combination of an input field and a submit button. One may think that the search box doesn’t need a design; after all, it’s just two simple elements. But since the search box is one of the most frequently used design elements on content-heavy websites, its usability is critical.
preview-image: preview-images/search.svg
resource: true
status: stable
last-modified: 2017-11-07
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

When an app supports large amounts of information, users can quickly locate content by searching.

### Best practices

- Display the search element prominently on the page.
- Always pair the search with the eyeglass icon.
- Place search on every page that displays aggregate data sets.
- Search bars are variable in size from app to app. The minimum text input size is 30 characters to ensure that smaller search bars are usable.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Search implemented in the support delivery platform UI"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-bar/search-hero.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Basic search bar

Search bars utilize the same text specifications defined in [text inputs]({{site.baseurl}}/components/text-fields.html).

By default, the search bar will extend across the full width of its container. We recommend a minimum search bar width of 294px so that the user can see their input text.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Basic search bar"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-bar/search-basic.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### States

The basic search bar component has the following states:

- **Idle & empty:** Base state of component, prior to user interaction.
- **Focused:** After a user has clicked inside the search bar, it enters a focused state.
- **Idle & filled:** After a user has performed a query and selected another element on the page.
- **Error:** Displayed in the event an error occurs within the search.
- **Error & focused:** After an error has occurred and a user has focused the search bar. The search bar will re-enter a focused state once the error is remedied.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Basic search bar states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-bar/search-states.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

- Content is vertically centered.
- Padding around edges of search box: 8px.
- When displaying an error message or "no search results" message, place 4px below the search bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Spacing specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-bar/search-spacing.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### No results

The 'no results' state mimics the 'Idle & filled' state and displays a specialized error message in subdued text style.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"No results state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/search-and-filters/search-bar/search-no-results.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
