---
title: Checkboxes
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A checkbox is a square box on a control panel page that a user can select to indicate an answer to a question or to enable a setting. You can construct a checkbox group or a single checkbox.
preview-image: preview-images/checkboxes.svg
resource: true
status: stable
need: selectors
last-modified: 2018-07-19
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use checkboxes in the following situations:

- When the user needs to answer a question or wants to change a control panel setting. Do not use a checkbox to trigger another process or workflow.
- When the user can select any number of choices, including zero, one, or several choices. If a user can only select one option, use a radio button or an input selector.
- When the user can turn on or turn off a single option. For example, use a single checkbox when a user accepts the terms of an End User License Agreement (EULA).
- When it is important for the user to compare all options simultaneously. If it is not important for the user to compare all options at the same time, consider using an input selector. An input selector uses less space than a checkbox group (but introduces greater cognitive load), and is more difficult to navigate for users who have difficulty making precise mouse movements.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider using the following best practices when you construct a checkbox group or single checkbox:

- List checkbox options vertically, with one choice per line. If you must use a horizontal layout, consider using a selector strip.
- Construct a checkbox input so that it is independent from all other inputs in the list. A selected checkbox does not deselect any other checkboxes.
- When you want to enable the user to select or deselect all visible checkboxes in a list, use a header checkbox that, when selected, also selects all checkboxes in the list.
- In most cases, there is no default checkbox selected. However, if Rackspace recommends an option, make that option the default selection.

Consider the following best practices when you label a checkbox option:

- Use positive and active wording for option labels. Avoid negations such as **Don't send me more email**. Negative option labels indicate that the user must select the checkbox in order for something *to not happen*.
- Write an option label so that a user understands what happens when the checkbox is selected, and what will *not* happen if the checkbox is *not* selected. If you can't write a clear label, use two radio buttons instead: one radio button for turning the feature on and one radio button for turning the feature off. Ensure that you write clear labels for each of the two cases.

{% include note.html content="Allow users to select an option by clicking on the checkbox or the option label. A larger target is easier to click." %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Refer to the following specifications when you construct a checkbox.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A checkbox contains the following elements:

- **Field name (optional)**: The field name represents the question being asked of the user, or a system setting that the user can configure. Use a field name to group checkboxes. A checkbox group contains pairs of checkboxes and option labels.
- **Option label (required)**: The option label indicates the user's answer to the question asked or the setting the user is enabling.
- **Help text (optional)**: Use help text to provide the user with information about a checkbox option.
- **Checkbox (required)**: The user selects or deselects the checkbox.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-composition.png" width="259"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a checkbox.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-style.png" width="366"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct a checkbox group or a single checkbox.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-spacing.png" width="190"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A checkbox can exist in **enabled**, **disabled**, **error**, **group error**, and **group required** states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

A user can select or deselect a checkbox in the enabled state.

See [focus states]({{site.baseURL}}/style/focus-states.html) for guidance in constructing focused checkboxes in an enabled state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Enabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-states-enabled.png" width="398"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

A user can't select or deselect a checkbox in the disabled state. In the disabled state, the checkbox is locked and cannot be changed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Disabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-states-disabled.png" width="439"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

An error state can apply to checkboxes when the user selects, deselects, and hovers over a checkbox.

See [focus states]({{site.baseURL}}/style/focus-states.html) for guidance in constructing focused checkboxes in an error state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-states-error.png" width="432"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Group checkbox error

In the case of a group checkbox error, include an error message below the checkbox group and highlight the input that the user must change. Don’t highlight all checkboxes in an error group.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Group error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-states-error-group.png" width="432"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Required group

Use a red asterisk to designate that a selection is required for a checkbox group. The asterisk floats to the left of the text in the margin and is vertically aligned with the text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Group error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-states-error-required.png" width="328"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Indeterminate checkboxes

Use an indeterminate state with a nested group that provides for bulk selection. An indeterminate checkbox indicates that the user has selected one or more, but not all, options in a nested group. See  [tables]({{site.baseurl}}/components/tables.html) for more information about checkboxes in tables.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Indeterminate state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkboxes-states-indeterminate.png" width="612"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
