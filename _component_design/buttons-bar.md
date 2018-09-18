---
title: Buttons (Bar)
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A buttons bar consolidates multiple related actions into one or more simple buttons, and a drop-down button. When the user
  clicks the drop-down button a drop-down menu appears.
preview-image: preview-images/buttons-bar.svg
status: stable
resource: true
last-modified: 2018-09-18
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a buttons bar in the following situations:

- When there is a primary action represented by a simple button and you want to list additional actions in a drop-down menu.
- To display a number of options in one place, rather than placing multiple buttons horizontally. A buttons bar conserves
space.
- To launch the user into an editing process on a different page.
- To initiate a workflow.
- When a user takes action on the current page or in a [modal]({{site.baseurl}}/components/modals.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

In addition to the [Simple Buttons]({{site.baseurl}}/components/simple-buttons.html) best practices,
consider the following best practices when you construct a buttons bar:

- Do not use a buttons bar for objects with a small number of actions. For example, do not use a buttons bar for table objects that have only a create and delete action. When a table object has a small number of actions, use table controls at the top of the table. For more information, see [tables]({{site.baseurl}}/components/tables.html).
- Do not mix button weights or sizes in a buttons bar.
- The drop-down button should always be the last button in the bar.
- Destructive actions should be placed inside the drop-down menu, and not as a visible button in the bar.
- Do not use tertiary buttons in a buttons bar.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a buttons bar.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A buttons bar contains the following elements:

- **Simple button (required)**: The simple button represents the primary action that the user can take. A buttons bar can contain multiple simple buttons.
- **Drop-down button (required)**: When the user clicks the drop-down buttons, additional actions appear on a drop-down menu.
- **Divider (required)**: The divider separates the simple button and the drop-down button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Buttons bar composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons-bar/buttonbar-composition.png" width="284"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a buttons bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Buttons bar style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons-bar/buttonbar-style.png" width="404"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct a buttons bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Buttons bar spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons-bar/buttonbar-spacing.png" width="137"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Primary button bar

A primary button bar is useful when you want to present a generic action in the primary button and specific options in the drop-down menu. For example, you can construct a **Create Database** primary button and a drop-down menu that contains **Standalone MySQL** and **HA MySQL**.

Do not include tertiary buttons in a buttons bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Primary buttons bar"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons-bar/buttonbar-variations-primary.png" width="137"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
