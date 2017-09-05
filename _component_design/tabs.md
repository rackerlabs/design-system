---
title: Tabs
parent: Content Areas
layout: component
category: Components
usage: Teaser Text
preview-image: components/preview-images/tabs.svg
resource: true
status: unknown
last-modified: 2017-08-17
---

{% include toc.html %}

Tabs are used to separate content into different views, which can be displayed
one at a time without a page refresh. Tabs provide easy access to additional
content without requiring the user to either navigate to a new page or scroll
too much. The default view should always display the left-most tab.

# Introduction

Tabs separate content into different views, making it easy to explore
content by clicking a descriptive tab title. Switching between tabs is
quick, since it doesn't require scrolling or refreshing the page. Tabs
enable content organization at a high level, such as switching between
views, data sets, or functional aspects of an application.


<!-- {% figure [caption:"Default state"] [class:"image bg-light border col-md-12"] %} -->
<!-- ![]({{site.cdn_url}}/img/components/tabs.svg){:width="80%"} -->
<!-- {% endfigure %} -->

<!-- {% figure [caption:"Hover state"] [class:"image bg-light border col-md-12"] %} -->
<!-- ![]({{site.cdn_url}}/img/components/tabs-hover.svg){:width="80%"} -->
<!-- {% endfigure %} -->


## When to use tabs

Use tabs to organize content at a high level. For example, you could
use tabs to present different sections of a newspaper: one section per
tab.

Use fixed tabs only with a limited number of tabs and when consistent
placement would aid muscle memory.

Use scrollable tabs only when there are many tabs, or when you have a
variable number of tabs.


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

  * Do not include a set of tabbed content within a tab. (No nested
    tabs.)

  * Highlight the tab corresponding to the visible content.

  * Don't force customers to jump back and forth between tabs to
    perform a single task. A customer should be able to discover the
    relevant information needed and complete the task within the same
    tab.

  * Do not use tabs for primary navigation.

  * Clearly label tabs to differentiate them. Labels should be short,
    scannable, and preferably one word.


# Designing with tabs

## Tab menu

The default layout must always have the left-most tab selected. In the
example image, **Notes** is the default. Tabs live on a transparent
canvas specific to that the tab. The tab content area adopts the color
of the content behind it. Top and bottom lines extend to the edge of
the content area.

[IMAGE]


## Tab content area

Pad the top and bottom of the content area by 24px. Pad the sides of
the content area by 20px.

[IMAGE]


## States

[IMAGE]


### Hover state

Hovering over another tab changes the color of the text. Hovering off
the tab changes it back to the default color.


[IMAGE]


### Pressed state

Clicking the text on the tab changes the color a few shades to confirm
that an action was taken.

[IMAGE]


### Zero state

Zero state messaging is centered both horizontally and vertically. Use
a minimum height of 220px for the container.

[IMAGE]
>>>>>>> [WIP] SURF-308 Edited content for tabs
