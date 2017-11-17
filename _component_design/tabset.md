---
title: Tabset
parent: Content Areas
layout: component
category: Components
usage: >
  Tabs provide users with the ability to access multiple sections of content seperated by tabs. This seperation makes it easy to explore and switch between different views. Tabs enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app.
preview-image: preview-images/tabs.svg
resource: true
status: stable
last-modified: 2017-09-11
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Problems Solved
- Tabsets eliminate the need to scroll through long pages to find the right section. With tabs, it's easy to see what sections are available.
- Tabsets eliminate the need to stack sections.

### Best Practices
- There must be only one active tab per page.
- The default view must always display the left-most tab.
- Present tabs as a single row. Wrap tab labels to a second line if needed, and then truncate.
- Do not include another set of tabbed content within a tab (no nested tabsets).
- Highlight the tab corresponding to the visible content.
- Provide all relevant contextual information and interface items to perform a single task within the same tab.
- Do not use tabsets for primary navigation.
- Clearly label tabs to differentiate them. Labels should be short, scannable, and (preferably) one word.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A generic tabset"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-lorem-ipsum.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Design Specs

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Tab menu

The default layout must always have the left-most tab selected. In the example image that follows, **Notes** is the default. Tabsets are contained in a transparent canvas specific to that the tab. The tab content area adopts the color of the content behind it. Top and bottom lines extend to the edge of the content area.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tab menu structure"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-menu.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Tab content area

Pad the top and bottom of the content area by 24px. Pad the sides of the content area by 20px.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tab content area structure"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-content-area.svg)
{% endfigure %}
{% endcolumn %}
</div>

## States

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Hover state

Hovering over another tab changes the color of the text. Hovering off the tab changes it back to the default color.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tab hover state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-hover-state.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pressed state

Clicking the text on the tab changes the color by a few shades to visually confirm an action.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tab pressed state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-pressed-state.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Zero state

Zero state messaging is centered both horizontally and vertically. Use a minimum height of 220px for the container.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tab zero state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-zero-state.svg)
{% endfigure %}
{% endcolumn %}
</div>
