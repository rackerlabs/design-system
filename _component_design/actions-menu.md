---
title: Actions Menu
parent: Inputs and Controls
secondary: Editing
layout: component
category: Components
usage: >
  An actions menu is used any time a group of actions can be performed on a specific object on the current page. By grouping these actions within an actions menu, it allows users to have a single location to trigger multiple types of actions.
preview-image: preview-images/actions-menu.svg
status: stable
resource: true
last-modified: 2017-11-03
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- Use actions menus to consolidate multiple related actions into a single menu.

### When not to use

- If a table object has only a limited number of associated actions (such as create and delete), use table controls at the top of the table. For more information, see the [tables]({{site.baseurl}}/components/tables.html) documentation.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Example actions menus from various triggers"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-hero.png){: width="469px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

### Best practices

Items in the actions menu must always initiate an action and must never be used for simple navigation. Actions can include the following types:

  - Immediate actions on the current page
  - Actions in [modals]({{site.baseurl}}/components/modals.html)
  - Creating and editing items on a different page
  - The start of a related workflow

When using section headers within an actions menu, consider the following practices:

  - Use headers to segment actions into logical groups.
  - Consider using a single header if more than three actions are present and its inclusion provides additional clarity.
  - Do **not** use a header when fewer than three actions are present.
  - Use multiple headers on menus of more than seven items to make the list easier to read.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Specifications

Section headers in the menu are optional. They are used if clarity is needed, or if there are more than seven actions in the list.

There are 8px of space between each section.

Minimum menu width is 10 rem.  Maximum menu width is 20 rem.  

If an action name is longer than the length of the button the menu can extend beyond the right side of the button.

If an action label is too long, truncate the text, and show the full name on hover.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Menu specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-menu-specifications.png){: width="px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Cog button states

When a cog is used on its own, it appears in `gray900` as a default state. Shown are the others states to consider in your designs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"The advanced actions menu has actions separated into groups with titles."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-cog-button-states.png){: width="558px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
