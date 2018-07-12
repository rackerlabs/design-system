---
title: Radio Buttons
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A radio button is a graphical control element that allows the user to choose only one of a predefined set of mutually exclusive options.

  radio groups—collections of radio buttons describing a set of related options.

  Radio buttons are used when the user is only allowed to select one option from a list. A minimum of one choice is required, and one is preselected by default.
preview-image: preview-images/radio-buttons.svg
resource: true
status: stable
last-modified: 2018-06-13
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Radio buttons are used when there is a list of two or more options that are mutually exclusive and the user must select exactly one choice. In other words, clicking a non-selected radio button will deselect whatever other button was previously selected in the list.


- Radio buttons should be used when a user has to select **only one option** in a list.
- If multiple options can be selected, use [checkboxes]({{site.baseurl}}/components/checkboxes.html) instead.
- Radio buttons are useful when you have a small set of options and want to show all of them. If you’re using more than five options, strongly consider the dropdown pattern.
- Consider using a [switch]({{site.baseurl}}/components/switches.html) component if a singular input can be used to enable or disable a feature (in place of two yes/no radio buttons).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}  

## Best practices

Consider the following best practices when you construct a radio button:

- Always use a label above the available options.
- Keep the number of options to between two and five choices.
- There is always a default option selected (preferably at the top or the list).
- If the user clicks on another option, the first is unselected.
- Radio buttons should only be used when the list can be vertical. If space is not available, consider a dropdown menu.
- List options in an order that makes logical sense. Depending on the context, the order could be alphabetical or from most common to least common. For example, if listing accounts by name, list them alphabetically. In billing, paying the amount due should be listed above letting the user enter a custom payment amount.
- Use checkboxes and radio buttons only to change settings, not as action buttons that make something happen.

Consider the following best practices when you label a radio button:

- Labels should start with a capital letter.
- Labels should not have punctuation at the end, such as a period, unless more than one sentence is used.

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

- **xxxx (required)**: xxxxx
- **xxxxx (required)**: xxxxx

A radio button group consists of a section label, followed by pairs of radio buttons and radio button labels.

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

{% figure [caption:"Radio button group composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-style.png" width="363"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

A title should always be located above the radio buttons. More context can be provided under the title or subtitle, but it is optional (shown here as “Select an option” on left).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Radio button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-spacing.png" width="194"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A checkbox can exist in **enabled**, **disabled**, **error**, **group error**, **group required**, and **indeterminate** states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

A user can select or de-select a checkbox in the enabled state.

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

A user can't select or de-select a checkbox in the disabled state. In the disabled state, the checkbox is locked and cannot be changed.

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

An error state can apply to checkboxes when the user selects, de-selects, and hovers over a checkbox.

Refer to [focus states]({{site.baseURL}}/style/focus-states.html), for guidance in constructing in focus checkboxes in an error state.

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

In the case of an error, include an error message below the checkbox group and highlight the input that the user must change. Don’t highlight all checkboxes in an error group.

Use a red asterisk to designate that a selection is required for a group of checkboxes. The label should remain in vertical alignment. The asterisk floats to the left of the text in the margin and is vertically aligned with the text.

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

xxxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Group error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radiobuttons-states-error-required.png" width="331"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
