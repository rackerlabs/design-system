---
title: Actions Menu
parent: Inputs and Controls
layout: component
category: Components
usage: >
  An actions menu contains a group of operations that a user can take on an object on the current page. Items appear in an actions menu when a user clicks a button.
preview-image: preview-images/actions-menu.svg
status: stable
resource: true
last-modified: 2018-05-16
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use an actions menus to consolidate multiple related actions into a single menu. Use an action menu in the following situations:

  - When a user takes action on the current page or in a [modals]({{site.baseurl}}/components/modals.html)
  - The user creates or edits items on a different page
  - The user starts a workflow

Do not use an actions menu for objects with a small number of actions. For example, do not use an actions menu for table objects that have only a create and delete action. When a table object has small number of actions, use table controls at the top of the table. For more information, see [tables]({{site.baseurl}}/components/tables.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct an actions menu.

- Items in the actions menu must initiate an action. Do not use an actions menu for navigation.
- If an action name is longer than the length of the button, extend the menu beyond the right side of the button.
- If an action label is too long, truncate the text and display the entire name when the users hover over the label.

Consider the following best practices when you construct an actions menu that contains many items.

- Group related items into headers. Headers provide clarity and help users locate menu items of interest.
- Use a header when the actions menu includes greater than three actions. Do **not** use a header when the actions menu includes three or fewer actions.
- Use multiple headers on an actions menu with greater than seven items.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct an actions menu.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

An actions menu is comprised of the following elements:

- **Trigger button (required)**: When the user clicks the trigger button, the actions menu opens and displays the menu items.
- **Section header (optional)**: Use a section header to group related menu items.
- **Menu item (required)**: A menu item is an action the user can take on an object.
- **Menu container (required)**: The menu container holds the menu items and if used, the section header.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Actions menu composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-composition.png" width="249"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct an actions menu.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Actions menu style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-menu-specifications.png" width="541"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

There are 8px of space between each section.

Minimum menu width is 10 rem.  Maximum menu width is 20 rem.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Actions menu spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-spacing.png" width="132"/>
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
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-states-cog.png" width="560"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
