---
title: Tabs
parent: Content Areas
layout: component
category: Components
usage: Teaser Text
preview-image: components/preview-images/tabs.svg
resource: true
status: unknown
last-modified: 2017-09-11
---

{% include toc.html %}

Use tabs to separate content into different views that can each be
displayed quickly without a page refresh. Tabs provide easy access to
sets of content without requiring the user to either move to a new
page or scroll across a page.


# Introduction

Tabs separate content into different views, making it easy to explore
content by clicking a descriptive tab title. Switching between tabs is
quick, since it doesn't require scrolling or refreshing the page. Tabs
enable content organization at a high level, such as switching between
views, data sets, or functional aspects of an application.

{% figure [caption:"A generic tab"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-lorem-ipsum.svg){:width="80%"}
{% endfigure %}


## When to use tabs

Use tabs to organize content at a high level. For example, you could
use tabs to present different sections of a newspaper: one section per
tab.

Use fixed tabs only with a limited number of tabs and when consistent
placement would aid muscle memory.

Use scrollable tabs only when there are many tabs or a variable (not
fixed) number of tabs.


## Problems solved by tabs

  * Tabs eliminate the need to scroll through long pages to find the
    right section. With tabs, it's easy to see what sections are
    available.

  * Tabs eliminate the need to stack sections.


## Best practices for tabs

  * There must be only one active tab per page.

  * The default view must always display the left-most tab.

  * Present tabs as a single row. Wrap tab labels to a second line if
    needed, and then truncate.

  * Do not include another set of tabbed content within a tab (No
    nested tabs.)

  * Highlight the tab corresponding to the visible content.

  * Provide all relevant contextual information and interface items to
    perform a single task within the same tab.

  * Do not use tabs for primary navigation.

  * Clearly label tabs to differentiate them. Labels should be short,
    scannable, and (preferably) one word.


# Designing with tabs

## Tab menu

The default layout must always have the left-most tab selected. In the
example image that follows, **Notes** is the default. Tabs are
contained in a transparent canvas specific to that the tab. The tab
content area adopts the color of the content behind it. Top and bottom
lines extend to the edge of the content area.

{% figure [caption:"Tab menu"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-menu.svg){:width="80%"}
{% endfigure %}


## Tab content area

Pad the top and bottom of the content area by 24px. Pad the sides of
the content area by 20px.

{% figure [caption:"Tab content area"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-content-area.svg){:width="80%"}
{% endfigure %}


## States

### Hover state

Hovering over another tab changes the color of the text. Hovering off
the tab changes it back to the default color.

{% figure [caption:"Tab hover state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-hover-state.svg){:width="80%"}
{% endfigure %}


### Pressed state

Clicking the text on the tab changes the color by a few shades to
visually confirm an action.

{% figure [caption:"Tab pressed state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-pressed-state.svg){:width="80%"}
{% endfigure %}


### Zero state

Zero state messaging is centered both horizontally and vertically. Use
a minimum height of 220px for the container.

{% figure [caption:"Tab zero state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/tabs/tabs-zero-state.svg){:width="80%"}
{% endfigure %}
