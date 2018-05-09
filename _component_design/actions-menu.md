---
title: Actions Menu
parent: Inputs and Controls
layout: component
category: Components
usage: >
  An actions menu is used any time a group of actions can be performed on a specific object on the current page. By grouping these actions within an actions menu, it allows users to have a single location to trigger multiple types of actions.
preview-image: preview-images/actions-menu.svg
status: stable
resource: true
last-modified: 2018-05-09
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use actions menus to consolidate multiple related actions into a single menu.

Do not use actions menus when a table object has only a limited number of associated actions, such as create and delete. When a table object has small number of actions, use table controls at the top of the table. For more information, see [tables]({{site.baseurl}}/components/tables.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

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

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct actions menus.

Section headers in the menu are optional. They are used if clarity is needed, or if there are more than seven actions in the list.

There are 8px of space between each section.

Minimum menu width is 10 rem.  Maximum menu width is 20 rem.  

If an action name is longer than the length of the button the menu can extend beyond the right side of the button.

If an action label is too long, truncate the text, and show the full name on hover.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Composition text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Actions menu composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-menu-specifications.png" width="558"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Style text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Actions menu style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-menu-specifications.png" width="558"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Spacing text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Actions menu spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-menu-specifications.png" width="558"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Cog button states

When a cog is used on its own, it appears in `gray900` as a default state. Shown are the others states to consider in your designs.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The advanced actions menu has actions separated into groups with titles."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-cog-button-states.png" width="558"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
