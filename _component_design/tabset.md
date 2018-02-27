---
title: Tabsets
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

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## When to use

Tabs enable users to easily switch between multiple sections of a page without losing context. Tabs help organize content at a high level, such as switching between views, data sets, or the functional aspects of an application.

Use tabs when:

- Users need to alternate between different views, while the context remains constant.
- Users do not need to simultaneously view content from multiple tabs.
- You want the content of a page to be scannable and easy to navigate. Tabs help users quickly find what they need.
- You do not want to create a single, unified experience for the user. Tabsets eliminate the need for the user to scroll through long pages to find the right section.
- You want to eliminate the need to stack sections **<<Not sure what this means>>**

Do not use tabs:

- For navigation
- When users need to view content from multiple tabs simultaneously

## Best practices

Consider the following best practices when designing a tabset:

- There can be only one active tab per page.
- The default view must display the left-most tab.
- Present tabs as a single row.
- Do not include another set of tabbed content within a tab (no nested tabsets).
- Highlight the tab corresponding to the visible content.
- Provide all relevant contextual information and interface items so a user can perform a single task within the same tab.
- Do not use tabsets for primary navigation.
- Clearly label tabs to differentiate them. Labels should be short, scannable, and (preferably) one word.
- Write tab labels in camel case so that the first letter of each word is capitalized.
- Wrap tab labels to a second line if needed. Truncate tab labels that exceed two lines.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A generic tabset"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-lorem-ipsum.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Default layout

By default, the left-most tab is selected. In the example image, **Notes** is the default tab.

Tabsets are contained in a transparent canvas specific to that the tab. **<<not sure what this means>>**

The tab content area adopts the color of the content behind it. Top and bottom lines extend to the edge of the content area.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Tab menu structure"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-menu.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Content area padding

Pad the top and bottom of the tab content area by 24px. Pad the sides of the tab content area by 20px.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Tab content area structure"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-content-area.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Hover state

The tab text color should change to hex color #16b9d4 when a user hovers over the tab. When a user moves off the tab, the text should change back to the default color.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Tab hover state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-hover-state.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Pressed state

To visually confirm to a user that a tab is selected, change the color of the tab text by a few shades.
**<<Can we be more specific about what 'a few shades' means?>>**

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Tab pressed state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-pressed-state.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Zero state

Center zero state messaging horizontally and vertically. Use a minimum height of 220px for the container.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Tab zero state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-zero-state.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
