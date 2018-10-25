---
title: Text Input
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Text inputs allow users to input, edit, and select text, numbers, and passwords. Text inputs are validated to ensure that the input value format is correct.
preview-image: preview-images/text-inputs.svg
resource: true
status: stable
last-modified: 2018-10-26
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/text-inputs/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use text inputs to enable users to enter text, numbers, passwords, emails, login credentials, an API key, and any other data required by the user to complete a task.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a text input:

- Text inputs should convey the data type format of the input value entered by the user.
- Consider including required fields on a primary create form, and placing non-required fields in an optional, post-creation workflow.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Refer to the following specifications when you construct a text input.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A text input consists of the following elements:

- **Container (required)**: The container holds the input value.
- **Label (required)**: The label displays the type of input value the user should enter. Place the label above and left aligned with the container.
- **Input value (required)**: The user enters an input value.
- **Helper text (optional)**: Use helper text to provide clear instructions such as examples, syntax, or other parameters that are required for validation. If possible, keep helper text to a single line. If more than two lines are required, consider using a tooltip.
- **Character counter (optional)**: Use a character or word counter when there is a character or word limit on a text input. Right justify the counter with the container. Display the counter as a ratio of characters used to the character limit for the text input. Use the format `characters used/character limit`. For example, `5/10`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text input composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-composition.png" width="398"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a text input.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text input style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-style.png" width="453"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct a text input.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text input spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-spacing.png" width="314"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## States

Text inputs can be in an *enabled*, *disabled*, or *error* state.

Input value validation occurs when the user shifts focus to another element (`onBlur`). The page is validated when the user clicks **Submit**.

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

Consider the following guidelines when you construct an enabled text input:

- A text input begins in the inactive and empty state.
- Use an optional placeholder to provide instructive text or an example, such as a phone number or email address.
- When the user clicks in the text input, the text input becomes active. Placeholder text remains visible until the user types and reappears when the user deletes an input value.
- A text input remains active until the user clicks outside of the field.
- To indicate a required field, place an asterisk to the left of the label. To aid recognition, overhang the asterisk 4 pixels to the left of the label.

See [focus states]({{site.baseurl}}/components/focus-states.html) for guidance in constructing focused text inputs in an enabled state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text input enabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-states-enabled.png" width="389"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

In a disabled state, a text input cannot be edited by the user and the `not-allowed` style is applied to the cursor. The `not-allowed` cursor style prevents the user from clicking in the text input.

When a field is disabled, consider changing the helper text so the user understands why it is disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text input disabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-disabled.png" width="400"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

An inactive and error state occurs when the user closes or submits a form and a required field is empty.

Consider the following guidelines when you construct an error state text input:

- The text input container changes color to reflect the invalid state.
- Place the error icon to the left of the error message.
- Place the error message below the helper text.
- When the user enters a valid value, the text input returns to the enabled state and the error message is removed.
- Extended error message text extends to the right edge of the text input container.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text input error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-states-error.png" width="428"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Variations

You can format text inputs to accept only certain types of data. For example, you can add the dollar sign (**$**) prefix to a text input to indicate that the user should enter numeric values.

This section includes specifications for prefix and suffix text inputs, password redaction text inputs, and multi-line text inputs.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Prefixes and suffixes

Use a prefix or suffix to clarify the meaning of the numeric input value entered by the user. Left align a prefix and right align a suffix.

A text input can have a prefix and a suffix.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Prefixes and suffixes"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-variations-prefixes.png" width="400"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Password redaction

Use password redaction when you want to disguise an input value. Use midline ellipses to represent each character of a password entered (such as `•••••••`).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Password redaction"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-variations-redaction.png" width="400"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Text areas

Use a text area when you want the user to enter long-form content up to a predetermined limit.

Consider the following guidelines when you construct a multi-line text area:

- Text areas are taller than text inputs and wrap overflow text onto a new line.
- Text areas scroll vertically when the cursor reaches the bottom of the field.
- A text area can include an optional draggable resize icon in the lower corner.
- All text input specifications apply to a text area.
- Text area states follow the same layout and behaviors as [text input]({{site.baseurl}}/components/text-input.html/#states) states.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text areas"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-input/textinput-variations-textareas.png" width="208"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
