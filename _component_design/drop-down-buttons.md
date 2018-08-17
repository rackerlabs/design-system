---
title: Buttons (Drop-down)
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A drop-down button is an element that, when clicked, reveals additional options to launch a process or initiate an action.
preview-image: preview-images/buttons.svg
status: stable
resource: true
last-modified: 2018-08-17
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a drop-down button when there are multiple actions associated with a button but no primary action is designated. When the user clicks a drop-down button, all actions appear in a menu.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

In addition to the best practices outlined in [simple buttons]({{site.baseURL}}/components/buttons.html), consider the following best practices when you construct a drop-down button:

- Ensure that you label a drop-down button accurately. The user should be able to predict the options that are available in the drop-down menu.
- While a drop-down button reduces the clutter on a page, drop-down buttons conceal user options. Consider listing all options as an alternative to concealing options within a button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a drop-down button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A drop-down button contains the following elements:

- **Simple button (required)**: Refer to [simple buttons]({{site.baseURL}}/components/buttons.html) for more information about constructing a simple button.
- **Angle down (required)**: The drop-down menu appears when the user clicks the angle down icon.
- **Menu (required)**: The menu contains the list of actions from which the user can select.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Basic drop-down button composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-composition.png" width="397"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a drop-down button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Basic drop-down button style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-style.png" width="487"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

In addition to the spacing specifications documented in [simple buttons]({{site.baseURL}}/components/buttons.html), use these spacing guidelines when you construct a drop-down button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Basic drop-down button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-spacing.png" width="278"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
