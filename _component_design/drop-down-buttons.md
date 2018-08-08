---
title: Buttons (Drop-down)
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A drop-down button is an element that, when clicked, reveals additional options to launch a process or initiate an action. The two types of drop-down buttons are the basic drop-down button and the split drop-down button.
preview-image: preview-images/buttons.svg
status: stable
resource: true
last-modified: 2018-08-08
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a basic drop-down button when there are multiple actions associated with a button but no primary action is designated. When the user clicks a drop-down button, all actions appear in an actions menu.

Use a split drop-down button when multiple actions are associated with a button but only one action is primary. The primary action is visible and available on the button, while the secondary actions are accessed through the drop-down menu.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

In addition to the best practices outlined in [simple buttons]({{site.baseURL}}/components/buttons.html), consider the following best practices when you construct a drop-down button:

- While a drop-down button reduces the clutter on a page, drop-down buttons conceal user options. Consider listing all options as an alternative to concealing options within a button.
- Ensure that you label a basic drop-down button accurately. The user should be able to predict the options that are available in the drop-down menu.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Basic drop-down button specifications

Use the following specifications when you construct a basic drop-down button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A basic drop-down button contains the following elements:

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

Use these specifications when you construct a basic drop-down button.

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

In addition to the spacing specifications documented in [simple buttons]({{site.baseURL}}/components/buttons.html), use these spacing guidelines when you construct a basic drop-down button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Basic drop-down button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-spacing.png" width="278"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Split drop-down button specifications

Use the following specifications when you construct a split drop-down button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A split drop-down button contains the following elements:

- **Basic drop-down button (required)**: See [basic drop-down button specifications](#basic-drop-down-button-specifications) for more information about constructing a basic drop-down button.
- **Divider (required)**: A divider separates the button label and the angle down icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Split drop-down button composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-split-composition.png" width="337"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

The divider adopts the color of the text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Split drop-down button style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-split-style.png" width="401"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

In addition to the spacing specifications documented in [simple buttons]({{site.baseURL}}/components/buttons.html), use these spacing guidelines when you construct a split drop-down button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Split drop-down button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-split-spacing.png" width="287"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Cog button specifications

Use the following specifications when you construct a split drop-down button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A cog button contains the following elements:

- **Basic drop-down button (required)**: See [basic drop-down button specifications](#basic-drop-down-button-specifications) for more information about constructing a basic drop-down button.
- **Divider (required)**: A divider separates the button label and the angle down icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Split drop-down button composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-split-composition.png" width="337"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

The divider adopts the color of the text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Split drop-down button style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-split-style.png" width="401"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

In addition to the spacing specifications documented in [simple buttons]({{site.baseURL}}/components/buttons.html), use these spacing guidelines when you construct a cog button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Split drop-down button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-buttons/buttons-dropdown-split-spacing.png" width="287"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

Basic drop-down buttons and split drop-down buttons feature the same state changes as simple buttons. Refer to [simple buttons]({{site.baseURL}}/components/buttons.html) for specifications.

{% endcolumn %}

</div>

</section>
