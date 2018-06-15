---
title: Checkboxes
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A check box is a square box on a Control Panel panel page that a user can select to indicate an answer to a question or to enable a setting. You can construct a stand-alone checkbox or a group of checkboxes.
preview-image: preview-images/checkboxes.svg
resource: true
status: stable
need: selectors
last-modified: 2018-06-12
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use checkboxes in the following situations:

- Use a checkbox group when the user can select any number of choices, including zero, one, or several choices. If a user can only select one option, use a radio button or a drop-down list.
- Use a stand-alone checkbox for a single option that the user can turn on or off. For example, use a stand-alone checkbox when a user accepts the terms of an End User License Agreement (EULA).
- Use checkboxes when it is important for the user to compare all options simultaneously. If it is not important for the user to compare all options at the same time, consider using a multi-select drop-down menu. A multi-select drop-down menu uses less space than a checkbox group, but introduces greater cognitive load and are more difficult to navigate for users who have difficulty making precise mouse movements.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a checkbox:

- When a user needs to manage a group of items, add checkboxes to a list to allow for bulk actions.
- Construct a checkbox input so that it is independent from all other inputs in the list. A selected checkbox does not de-select any other checkboxes.
- Use checkboxes and radio buttons only to change settings and not as action buttons that trigger another process or workflow.
- In most cases, there is no default checkbox selected. However, if Rackspace recommends an option, make that option the default selection.

Consider the following best practices when you label a checkbox:

- Use positive and active wording for checkbox labels. Avoid negations such as **Don't send me more email**. Negative labels on checkboxes indicate that the user must select the checkbox in order for something *not to happen*.
- Write a checkbox label so that a user understands what happens when the checkbox is selected, and what will *not* happen if the checkbox is not selected. If you can't write a clear label, use two radio buttons instead: one radio button for turning the feature on and one radio button for turning the feature off. Ensure you write clear labels for each of the two cases.

{% include note.html content="Allow users to select an option by clicking on either the button, the box itself, or the label. A bigger target is easier to click." %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## specifications

Refer to the following specifications when you construct a checkbox.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A checkbox contains the following elements:

- **Field group name (optional)**: Use a field group name when you group checkboxes. A checkbox group consists of a field group name followed by pairs of checkboxes and checkbox labels.
- **Checkbox (required)**: The user selects or de-selects the checkbox.
- **Field name (required)**: The field name indicates the user's answer to the question asked or the setting the user is enabling.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a checkbox.

- Visually present groups, and clearly separate the choices from other groups on the same page.
- With sub-heads, users might misunderstand each sub-group as a separate set of options. With checkboxes, each box is an independent choice.
- Arrange lists vertically, with one choice per line. If you must use a horizontal layout, consider using a checkbox button group instead.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct a checkbox.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

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
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
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
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
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
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
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
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
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
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Indeterminate

Use an indeterminate state with nested checkboxes that provide for bulk selections. An indeterminate checkbox indicates that the user has selected one or more, but not all, options in a nested group. Refer to  [tables]({{site.baseurl}}/components/tables.html) for more information.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Indeterminate state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
