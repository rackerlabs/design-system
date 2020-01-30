---
title: Button Menu
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A button menu is an element that, when clicked, reveals additional options to launch a process or initiate an action.
preview-image: preview-images/buttons-dropdown-thumbnail.svg
status: stable
resource: true
last-modified: 2018-09-06
helix-ui-css: true
helix-ui-javascript: na
pageLink: components/menu/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a button menu when there are multiple actions associated with a button but no primary action is designated. When the user clicks a button menu, all actions appear in a menu.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

In addition to the best practices outlined in [buttons]({{site.baseurl}}/components/buttons.html), consider the following best practices when you construct a button menu:

- Ensure that you label a button menu accurately. The user should be able to predict the options that are available in the drop-down menu.
- While a button menu reduces the clutter on a page, button menus conceal user options. Consider listing all options as an alternative to concealing options within a button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a button menu.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A button menu contains the following elements:

- **Button (required)**: Refer to [buttons]({{site.baseurl}}/components/buttons.html) for more information about constructing a button.
- **Angle-down icon (required)**: The drop-down menu appears when the user clicks the angle-down icon. See the [Icons](https://rackerlabs.github.io/helix-ui/components/icons/) page of the Helix Toolkit for information about the angle-down icon.
- **Section header (optional)**: Include a section header to organize menu items into logical groups. Consider using section headers when the menu container contains many items.
- **Menu item (required)**: A menu item is an action that a user can select.
- **Menu container (required)**: The menu container includes the section header and menu items.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button menu composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-composition.png" width="314"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a button menu.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button menu style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-style.png" width="360"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

In addition to the spacing specifications documented in [Buttons]({{site.baseurl}}/components/buttons.html), use these spacing guidelines when you construct a button menu.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button menu spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-spacing.png" width="260"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
