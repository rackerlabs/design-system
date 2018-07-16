---
title: Selector Strip
parent: Inputs and Controls
secondary: Selectors
layout: component
category: Components
usage: >
  A selector strip is a component that enables the user to make a selection from a group of options. This pattern is a more visually prominent alternative to check boxes (multi-select) or radio buttons (single-select).
preview-image: preview-images/selector-strip.svg
status: stable
resource: true
last-modified: 2018-07-13
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Selector strip types

There are two types of selector strips:

- **Single select strip**: A single-select strip has rounded corners and functions like a radio button; only one option can be selected at a time. Selecting another option deselects the previously selected option.
- **Multi-select strip**: A multi-select selector strip has squared edges and functions like checkboxes where more than one option can be selected at a time. The primary use-case for multi-select is selecting days of the week.

{% figure [caption:"Selector strip types"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use selector strips in the following situations:

- When the selector strip is the only input on a form.
- When vertical spacing isn't available and you want to make use of horizontal spacing. A selector strip can function similarly to [radio buttons]({{site.baseurl}}/components/radio-buttons.html) (single select strip) or [checkboxes]({{site.baseurl}}/components/checkboxes.html) (multi-select strip).
- When the user's selection alters the data input options presented on the page. For example, use a selector strip when the user selects credit card as the payment option. The fields on the form are dependent on the selected credit card option.
- When you want to use a selector strip as a control, such as providing the option for the user to view data in a day, week, or month view.
- When you want an operation to recur periodically. For example, use a selector strip when the user needs to schedule maintenance by selecting from preset days and times.
- When you want to provide more visual prominence to a group of options.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a selector strip:

- **A selector strip can be used as an input or a control. As an input, a selector strip provides data entry fields based on the option selected. As a control, a selector strip option can also ...**
- For single select strips, one option is selected by default.
- A selector strip should contain no greater than seven options. It is important to balance the length of the option labels with the number of options listed.
- Use short option labels (for example, three words maximum and up to 10 characters) so that the number of options can fit horizontally on a small screen.
- If they are commonly understood, use abbreviations. For example, in a credit card selector strip the user understands that *AmEx* stands for *American Express*.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Single select strip specifications

Consider the following specifications when you construct a single select strip.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A single select strip contains the following elements:

- **Strip container (required)**: The selector strip container holds the select
- **Selected option container (required)**: The selected option container expands to include the option label.
- **Option label (required)**: The user makes a choice by selecting an option label. Ensure you consider best practices when writing option labels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single selector strip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a single select strip.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single selector strip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing specifications when you construct a single select strip.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Single select strip states

A single select strip can be in *enabled*, *disabled*, or *error state*.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

xxxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

xxxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

xxxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Multi-select strip specifications

Consider the following specifications when you construct a multi-select strip.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A multi-select strip contains the following elements:

- **Strip container (required)**: The selector strip container holds the select
- **Selected option container (required)**: The selected option container expands to include the option label.
- **Option label (required)**: The user makes a choice by selecting an option label. Ensure you consider best practices when writing option labels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-selector strip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a multi-select strip.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-selector strip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing specifications when you construct a multi-select strip.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-selector strip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Multi-select strip states

A multi-select strip can be *enabled*, *disabled*, or in *error* state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled (Pressed)

There are no hover states for selector strips. Unlike buttons, when a selection is made the selector strip remains in the same place. Having a hover state would immediately cover the selected area after a selection is made.

When the mouse button is pressed, the fill area changes to `cyan 700`. When the mouse button is released, the fill changes to `cyan 900` or white, depending on if the option is being selected or deselected (multi-select only).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Selector strip in pressed state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-pressed.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

xxxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Selector strip in pressed state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-pressed.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

When there is an error, the invalid selection has a red border. Text explaining the reason for the error appears below and left aligned to the element also in red.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Selector strip in error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-error.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
