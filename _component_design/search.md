---
title: Search Bar
parent: Search and Filters
layout: component
category: Components
usage: >
  A search box is a combination of input field and submit button. One may think that the search box doesn’t need a design; after all, it’s just two simple elements. But since the search box is one of the most frequently used design element on content-heavy websites, its usability is critical.
preview-image: preview-images/search.svg
resource: true
status: stable
last-modified: 2017-11-07
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
- Search bars are variable in size from app-to-app. To ensure smaller search bar function well for users, a 30 character minimum text input is displayed.

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


Search Bars utilize the same text specifications defined in [text inputs]({{site.baseurl}}/components/text-fields.html).

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

The basic search bar component has the following states:

- **Idle & empty:** Base state of component, prior to user interaction.
- **Focused:** Once a user has clicked inside the search bar, it enters a focused state.
- **Idle & filled:** Once a user has performed a query and selected another element on the page.
- **Error:** Displayed in the event an error occurs within the search.
- **Error & focused:** After an error has occurred and a user has focused the search bar. Search bar will reenter focused state once the error is remedied.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Basic search bar states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-states.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing

- Content is vertically centered.
- Padding around edges of search box: 8px.
- When displaying an error message or "no search results" message, place 4px below the search bar.


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

The 'no results' state mimics the 'Idle and filled' state and displays a specialized error message in subdued text style.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"No results state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/search-and-filters/search-bar/search-no-results.svg)
{% endfigure %}
{% endcolumn %}

</div>
