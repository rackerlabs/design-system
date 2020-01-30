---
title: Radios
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A radio is a user interface (UI) element that allows the user to choose only one of a predefined set of mutually exclusive options.
preview-image: preview-images/radio-buttons.svg
resource: true
status: stable
last-modified: 2018-07-26
helix-ui-css: false
helix-ui-javascript: true
pageLink: components/radio/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use radios in the following situations:

- When the user can select from two or more mutually exclusive options. If the user can select multiple options, use [checkboxes]({{site.baseurl}}/components/checkboxes.html) instead.
- When the user needs to answer a question or wants to change a control panel setting. Do not use radios to trigger another process or workflow.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}  

## Best practices

Consider the following best practices when you construct radios:

- By default, the radio at the top of the list is selected. The user can then make a different selection, if required.
- When the user clicks a radio, the previously selected radio is deselected.
- Keep the number of options to two and five choices. If you’re providing more than five options, consider using a drop-down.
- List radio options vertically, with one choice per line.  If space is not available, consider using a [drop-down selector]({{site.baseurl}}/components/dropdowns.html) or [single select strip]({{site.baseurl}}/components/selector-strip.html).
- List radio options in logical order. Depending on the context, the order could be alphabetical or from most common to least common. For example, if listing accounts by name, list them alphabetically. In billing, place the payment amount due option above the option to enter a custom payment amount.
- Consider using a [switch]({{site.baseurl}}/components/switches.html) component if a singular input can be used to enable or disable a feature (in place of two yes/no radios).

Consider the following best practices when you label a radio option:

- Use positive and active wording for option labels. Avoid negations such as **Don't send me more email**. Negative option labels indicate that the user must select the radio in order for something *to not happen*.
- Write an option label so that the user understands what happens when the radio is selected, and what will *not* happen if the radio is *not* selected.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

Refer to the following specifications when you construct radios.

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A radio consists of the following elements:

- **Field name (required)**: The field name represents the question being asked of the user, or a system setting that the user can configure. Use a field name to group radios. A radio group contains pairs of option labels and radios.
- **Option label (required)**: The option label indicates the user's answer to the question asked or the setting the user is enabling.
- **Help text (optional)**: Include help text to provide the user with information about a radio option.
- **Radio (required)**: The user selects the radio.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Radio group composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-composition.png" width="265"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct radios.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Radio group style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-style.png" width="363"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct a radio group.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Radio group spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-spacing.png" width="194"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A radio can exist in **enabled**, **disabled**, **error**, **group error**, and **group required** states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

A user can select a radio in the enabled state.

See [Focus States]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused radios in an enabled state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Enabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-states-enabled.png" width="412"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

A user can't select a radio in the disabled state. In the disabled state, the radio is locked and cannot be changed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Disabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-states-disabled.png" width="411"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

An error state can apply to radios when the user selects, deselects, and hovers over a radio.

Refer to [Focus States]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused radios in an error state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-states-error.png" width="407"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Group error

In the case of an error, include an error message below the radio group and highlight the input that the user must change. Don’t highlight all radios in the group.

Position the error icon to the left of the error message.

Wrap the error message text to fixed upper and lower bounds to adhere to 40-80 characters per line.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Group error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-states-error-group.png" width="441"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Required group

Use a red asterisk to designate that a selection is required. The label should remain in vertical alignment. The asterisk floats to the left of the text in the margin and is vertically aligned with the text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Required group state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-states-error-required.png" width="331"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
