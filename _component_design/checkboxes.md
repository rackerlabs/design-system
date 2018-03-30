---
title: Checkboxes
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Checkboxes are used to change settings or bulk item selection. Checkboxes allow the user to select zero, one, or several items.
preview-image: preview-images/checkboxes.svg
resource: true
status: stable
need: selectors
last-modified: 2018-01-04
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use checkboxes

- You can use checkable input to select any number of options, including zero, one, or several.
- Use when selecting multiple items from a set, it is important for the user to view all options at once. If viewing items side by side is not important, consider a drop-down as it uses less space.
- Use a stand-alone checkbox for single options that the user can turn on or off.
- If there are multiple choices and only one option can be selected, use a radio button or drop-down list.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [The checkbox component] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-hero.png){:width="1440px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Best practices for checkboxes

- Each input is independent of all other input in the list, and checking one box does not uncheck the others.
- Use singular input to enable or disable a feature, or use in place of two yes and no radio buttons.
- Use checkboxes and radio buttons only to change settings, not as action buttons that trigger another process or workflow.
- Typically, checkboxes default to having no options selected. However, if Rackspace recommends an option, make that the default.

### Presentation for checkboxes

If possible, use checkboxes rather than multi-select drop-down menus. Checkboxes have lower cognitive load and are easier to operate for users who have difficulty making precise mouse movements. Limited space can force you to violate this guideline, but do try to keep choices visible whenever possible.

### Problems solved by checkboxes

Checkboxes allow users to make selections in a form, as follows:

- A checkbox list enables users to select one or more items while being able to visually compare them all at once.
- A singular checkbox enables them to enable or disable a feature.

When a user needs to manage a group of items, checkboxes may be added to a list to allow for bulk actions.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Default layout

A checkbox group consists of a section label followed by pairs of checkboxes and checkbox labels.

#### Labeling checkboxes

- Use positive and active wording for checkbox labels. Avoid negations such as "Don't send me more email". Negative labels on checkboxes would mean that the user would have to check the box in order for something not to happen.
- Write checkbox labels so that users know both what will happen if they check a particular box and what will happen if they leave it unchecked. If you are unable to do this, we recommend using two radio buttons: one for having the feature on and one for having it off. Ensure you write clear labels for each of the two cases.

{% include note.html content="Allow users to select an option by clicking on either the button, the box itself, or the label; a bigger target is faster to click." %}

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox group composition and specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-default.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Checkbox group specifications

- Visually present groups, and clearly separate the choices from other groups on the same page.
- With sub-heads, users might misunderstand each sub-group as a separate set of options. With checkboxes, each box is an independent choice.
- Lay out your lists vertically, with one choice per line. If you must use a horizontal layout, consider using a checkbox button group instead.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox group spacing"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-group-image.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### States

The checkbox component may be in the following states:

- Selected
- Deselected
- Indeterminate

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Checkbox states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-states-image.png)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Required group

Use a red asterisk to designate that a selection is required for a group of checkboxes. The label should remain in vertical alignment. The asterisk floats to the left of the text in the margin and is vertically aligned with the text.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Designating a required checkbox field"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-required-group-image.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Group with an error

In the case of an error, always include an error message below the checkbox group. Only highlight the input that must be changed. For example, don’t highlight all checkboxes in an error group.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-group-with-error-image.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Indeterminate

The indeterminate state is only used with bulk selections to indicate that one or more, but not all options, have been selected. Refer to the [tables]({{site.baseurl}}/components/tables.html) page for more information.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"When selecting multiple items from a table, an indeterminate
 checkbox may be used to show that several, but not all, items are selected."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/checkboxes/checkbox-indeterminate-image.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
