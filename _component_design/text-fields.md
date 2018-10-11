---
title: Text Fields
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Text fields, including text inputs and text areas, allow users to input, edit, and select text, numbers and passwords.  Text inputs facilitate validation and can be surrounded with help and error information, to instruct the user on filling in information.
preview-image: preview-images/text-inputs.svg
resource: true
status: stable
last-modified: 2017-10-24
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/text-inputs/
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

- Use text fields to enable users to enter text, numbers, passwords, emails, logging in, copying API keys, and any other data pertinent to accomplishing their tasks.

### Best practices

- Text fields should indicate state&emdash;whether enabled or disabled, empty or filled, valid or invalid&emdash;with clear label, input, and assistive text.
- Text fields should guide the user with data type, format, or other parameters the information should include.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-hero-image.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Basic layout

- Labels display the type of input a field requires. Every text field should have a label.
- Labels are placed above and are left aligned with the input box.
- Labels should always be visible. Avoid using placeholder text for labeling.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-basic-layout.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Placeholder text

- Placeholder text can be displayed in an empty text field until input is entered.
- The placeholder can be instructive text or an example, such as a phone number or email address.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-placeholder-text.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Helper text

- Use helper text to provide clear instructions such as examples, syntax, or other parameters required for validation.
- Keep text to a single line if possible, though two lines are acceptable.
- If more than two lines of help text are needed, consider using a tooltip instead.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-helper-text.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Required fields

- Indicate that a field is required by displaying an asterisk `*` to the left of the label.
- To aid recognition, the asterisk should overhang the space to the left of the group by 4 pixels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-required.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Character or word counter

- Use character or word counters if there is a character or word limit on the input.
- Justify the counter to the right within the control group.
- Display the counter as a ratio of characters used to the character limit for the input field.
- **Format:** `characters used / character limit`. For example, `5/10`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-character-or-word-counter.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## States overview

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Validation for individual inputs should occur when the user shifts focus to another element (`onBlur`), and the entire form should go through a validation check on submit.

### Are non-required fields always necessary?

- **Design goal**: Enable users to get what they need with as few up-front choices as possible.
- In our industry, complex resources often have fields that are configurable AFTER the resource is created.
- Consider only including required fields in the main create form, and placing non-required fields in an optional, post-creation workflow.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-states-overview.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled state

- Disabled text fields are not editable. They have a slightly darker background fill, lighter border, and lighter input text.
- Disabled fields are also indicated with a cursor change to “not-allowed”, reinforcing the state for the user.
- When a field is disabled, consider changing the help text so the user understands why it is disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-disabled.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focused

- When a text field is selected, the border color changes to `cyan 700` and is raised by a shadow to give the user an indication of where they are in the form.
- The field remains in a focused state as long as the user inputs text or doesn't make a selection outside of the field.
- As the user types into the text field, input text replaces any placeholder text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-focused.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Invalid

- The input border changes color and thickness to reflect the invalid state.
- Stack error messages below any helper text.
- The error message must be preceded by the error icon.
- Error text should fit on a single line.
- When focused, the input box gains a shadow, matching the red error color.
- Once the input contains valid data, it returns to default state and the error message is removed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-invalid.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Input types

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

Text fields can be formatted to indicate the types of data a field accepts by using placeholder text, a preset layout, and character limits. Text formatting should be displayed only when the field is focused or filled.

Characters can be formatted using:
- Prefixes and suffixes
- Password redaction

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Prefixes and suffixes

- Prefixes and suffixes can be used to clarify units or to add input in advance.
- Prefixes are left justified in the text field; suffixes are right justified.
- Text fields can have both prefixes and suffixes.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-prefixes-and-suffixes.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Password redaction

Password input is disguised by default. Midline ellipses are displayed to represent each character of a password entered (such as `•••••••`).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-input-password-redaction.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Text Areas

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Basic layout

- Layout specs for text areas are the same as for text inputs.
- Text areas are taller than text fields and wrap overflow text onto a new line.
- Text areas scroll vertically when the cursor reaches the bottom of the field.
- They can include an optional draggable resize icon in the lower corner.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-area-basic-layout.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Text area states

Text area states also follow the same layout and behaviors as text inputs.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/text-fields/text-fields-text-area-states-overview.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
