---
title: Selector Strip
parent: Inputs and Controls
secondary: Selectors
layout: component
category: Components
usage: >
  A selector strip enables the user to make a selection from a group of options and can be used as a form input.
preview-image: preview-images/selector-strip.svg
status: stable
resource: true
last-modified: 2018-09-28
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/selector-strips/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Selector strip types

There are two types of selector strips:

- **Single-select strip**: A single-select strip has rounded corners and functions like a radio as the user can only select one option. Selecting another option deselects the previously selected option.
- **Multi-select strip**: A multi-select strip has squared corners and functions like checkboxes as the user can select multiple options. Enabling a user to schedule a job to run multiple days of the week is a common use case for multi-select strips.

{% figure [caption:"Selector strip types"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-overview.png" width="288"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<!--- End of Usage section --->

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use selector strips in the following situations:

- When the selector strip is the only input on a form.
- When vertical spacing isn't available and you want to make use of horizontal spacing. A selector strip can function similarly to [radios]({{site.baseurl}}/components/radio-buttons.html) (single-select strip) or [checkboxes]({{site.baseurl}}/components/checkboxes.html) (multi-select strip).
- When the user's selection alters the data input options presented on the page. For example, use a selector strip when the user selects credit card as the payment option. The fields on the form are dependent on the selected credit card option.
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

- For single-select strips, one option is selected by default.
- A selector strip should contain no more than seven options. It is important to balance the length of the option labels with the number of options listed.
- Use short option labels (for example, three words maximum and up to 10 characters) so that the number of options can fit horizontally on a small screen.
- If they are commonly understood, use abbreviations. For example, on a credit card selector strip the user understands that *AmEx* stands for *American Express*.
- A selector strip should not wrap.
- Do not use a selector strip to trigger an action. If you need multiple triggers alongside each other, consider a [button bar]({{site.baseurl}}/components/button-bars.html) or a [button set]({{site.baseurl}}/components/buttons.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Single-select strip specifications

Consider the following specifications when you construct a single-select strip.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A single-select strip contains the following elements:

- **Strip container (required)**: The selector strip container holds the options.
- **Selected option container (required)**: The selected option container surrounds the selected option label.
- **Option label (required)**: The user makes a choice by selecting an option. Ensure you consider best practices when writing option labels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single-select strip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-single-composition.png" width="347"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a Single-select strip.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single-select strip style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-single-style.png" width="336"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing specifications when you construct a single-select strip.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single-select strip spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-single-spacing.png" width="174"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Single-select strip states

A single-select strip can be in an *enabled*, *disabled*, or *error state*.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

A user can select or deselect a single-select option in the enabled state.

See [focus states]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused single-select options in an enabled state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single-select strip enabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-single-states-enabled.png" width="429"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

A user can't select or deselect a single-select option in the disabled state. In the disabled state, the option is locked and cannot be changed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single-select strip disabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-single-states-disabled.png" width="424"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

An error state can apply to a single-select option when the user selects, deselects, and hovers over the option.

See [focus states]({{site.baseurl}}/style/focus-states.html) for guidance in constructing a focused single-select option in an error state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single-select strip error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-single-states-error.png" width="451"/>
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

- **Strip container (required)**: The selector strip container holds the select options.
- **Selected option container (required)**: The selected option container surrounds the selected option label.
- **Option label (required)**: The user makes a choice by selecting an option. Ensure you consider best practices when writing option labels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-select strip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-multi-composition.png" width="464"/>
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

{% figure [caption:"Multi-select strip style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-multi-style.png" width="449"/>
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

{% figure [caption:"Multi-select strip spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-multi-spacing.png" width="288"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Multi-select strip states

A multi-select strip can be in an *enabled*, *disabled*, or *error* state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

A user can select or deselect a multi-select options in the enabled state.

See [focus states]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused multi-select options in an enabled state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-select strip enabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-multi-states-enabled.png" width="426"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

A user can't select or deselect a multi-select option in the disabled state. In the disabled state, the option is locked and cannot be changed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-select strip disabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-multi-states-disabled.png" width="424"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

An error state can apply to a multi-select option when the user selects, deselects, and hovers over the option.

See [focus states]({{site.baseurl}}/style/focus-states.html) for guidance in constructing a focused multi-select option in an error state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-select strip error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-multi-states-error.png" width="451"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Selector strips in a form

When you add a selector strip to a form, include a description between item selection and the selector strip. Write the description to clarify the action the user is taking.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Selector strips in a form"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/selector-strip/selectorstrip-inaform.png" width="288"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
