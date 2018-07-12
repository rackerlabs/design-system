---
title: Radio Buttons
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A radio button is a user interface (UI) element that allows the user to choose only one of a predefined set of mutually exclusive options.
preview-image: preview-images/radio-buttons.svg
resource: true
status: stable
last-modified: 2018-07-12
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use radio buttons in the following situations:

- When the user can select from two or more mutually exclusive options. If the user can select multiple options, use [checkboxes]({{site.baseurl}}/components/checkboxes.html) instead.
- When the user needs to answer a question or wants to change a control panel setting. Do not use radio buttons to trigger another process or workflow.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}  

## Best practices

Consider the following best practices when you construct a radio button:

- By default, the radio button at the top of the list is selected. The user can then make a different selection, if required.
- When the user clicks a radio button, the previously selected button is deselected.
- Keep the number of options to between two and five choices. If you’re providing more than five options, consider using a drop-down list.
- List radio button options vertically, with one choice per line. If space is not available, consider using a drop-down list.
- List radio button options in logical order. Depending on the context, the order could be alphabetical or from most common to least common. For example, if listing accounts by name, list them alphabetically. In billing, place the paying the amount due option above the enter a custom payment amount option.
- Consider using a [switch]({{site.baseurl}}/components/switches.html) component if a singular input can be used to enable or disable a feature (in place of two yes/no radio buttons).

Consider the following best practices when you label a radio button option:

- Use positive and active wording for option labels. Avoid negations such as **Don't send me more email**. Negative option labels indicate that the user must select the radio button in order for something *not to happen*.
- Write an option label so that the user understands what happens when the radio button is selected, and what will *not* happen if the radio button is not selected.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

Refer to the following specifications when you construct a radio button.

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A radio button consists of the following elements:

- **Field name (required)**: The field name represents the question being asked of the user, or a system setting that the user can configure. Use a field name to group radio buttons. A radio button group contains pairs of option labels and radio buttons.
- **Option label (required)**: The option label indicates the user's answer to the question asked or the setting the user is enabling.
- **Help text (optional)**: Include help text to provide the user with information about a radio button option.
- **Radio button (required)**: The user selects the radio button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Radio button group composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-composition.png" width="265"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a radio button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Radio button group style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-style.png" width="363"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct a radio button group.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Radio button group spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-spacing.png" width="194"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A radio button can exist in **enabled**, **disabled**, **error**, **group error**, and **group required** states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

A user can select a radio button in the enabled state.

See [Focus States]({{site.baseURL}}/style/focus-states.html) for guidance in constructing in focus radio buttons in an enabled state.

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

A user can't select a radio button in the disabled state. In the disabled state, the radio button is locked and cannot be changed.

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

An error state can apply to radio buttons when the user selects, deselects, and hovers over a checkbox.

Refer to [Focus States]({{site.baseURL}}/style/focus-states.html) for guidance in constructing in focus radio buttons in an error state.

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

In the case of an error, include an error message below the radio button group and highlight the input that the user must change. Don’t highlight all radio buttons in the group.

Position the error icon to the left of the error message.

Wrap the error message text to fixed upper and lower bounds, so as to adhere to 40-80 characters per line.

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
