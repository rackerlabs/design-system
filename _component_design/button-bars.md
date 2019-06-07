---
title: Button Bars
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A button bar consolidates multiple buttons into one multi-button component. You can combine multiple buttons and a single drop-down button.
preview-image: preview-images/buttons-bar.svg
status: stable
resource: true
last-modified: 2018-09-20
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/menus/#split-menu
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a button bar in the following situations:

- When there is a primary action represented by a button and you want to list additional actions in a drop-down menu.
- To offer a number of action buttons at once and conserve horizontal space.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

In addition to the [buttons]({{site.baseurl}}/components/buttons.html) best practices,
consider the following best practices when you construct a button bar:

- Do not mix button weights or sizes in a button bar.
- Place the drop-down button as the last button in the bar.
- Do not include destructive actions in a button bar unless they are in the drop-down menu of actions. This is because most of the time the destructive action is disabled.
- Destructive actions should be placed inside the drop-down menu, and not as a visible button in the bar.
- Do not use a tertiary button in a button bar.

{% endcolumn %}

</div>

</section>

<!--- End of Usage section --->

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a button bar.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A button bar contains the following elements:

- **Button (required)**: A button represents the primary action that the user can take. A button bar can contain multiple  buttons.
- **Drop-down button (optional)**: When the user clicks the drop-down button, additional actions appear on a drop-down menu. Include only one drop-down button in a button bar.
- **Divider (required)**: The divider separates the buttons in a button bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button bar composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-bars/buttonbar-composition.png" width="284"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a button bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button bar style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-bars/buttonbar-style.png" width="404"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Depending on the location of the button bar on the page, ensure the drop-down menu aligns with either the last divider or the right edge of the button bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button bar spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-bars/buttonbar-spacing.png" width="137"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Primary button bar

A primary button bar is useful when you want to present a generic action in the primary button and specific options in the drop-down menu. For example, you can construct a **Create Database** primary button and a drop-down menu that contains **Standalone MySQL** and **HA MySQL**.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Primary button bar"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-bars/buttonbar-variations-primary.png" width="137"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
