---
title: Radio Buttons
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Radio buttons are used when the user is only allowed to select one option from a list. A minimum of one choice is required, and one is preselected by default.
preview-image: preview-images/radio-buttons.svg
resource: true
status: stable
need: selectors
last-modified: 2017-11-04
---

{% include toc.html %}






## Introduction

<div class="hxRow">

{% column left:"hxCol-6 hxCol-xs-12 hxCol-sm-12 hxCol-md-6 hxCol-lg-6" %}

### When to use

- Radio buttons should be used when a user has to select **only one option** in a list.
- If multiple options can be selected, use [checkboxes]({{site.baseurl}}/components/checkboxes.html) instead.
- A [dropdown menu]({{site.baseurl}}/components/dropdowns.html) can also be used for selecting only one option, but radio buttons are a better pattern if you want to reveal all options on the page without asking the user to click on the dropdown to see all available options. If you’re using more than five options, strongly consider the dropdown pattern.
- Consider using a [switch]({{site.baseurl}}/components/switch.html) component if a singular input may be used to enable/disable a feature (in place of two yes/no radio buttons).

{% endcolumn %}
{% column right:"hxCol-6 hxCol-xs-12 hxCol-sm-12 hxCol-md-6 hxCol-lg-6" %}
{% figure [] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-hero.svg)
{% endfigure %}
{% endcolumn %}

</div>

### Best practices 

<div class="hxRow">

{% column left :"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}  

- Always use a label above the available options.
- Keep the number of options to between 2 and 5 choices.
- There is always a default option selected (preferably at the top or the list).
- If the user clicks on another option, the first is unselected.
- Radio buttons should only be used when the list can be vertical. If space is not available, consider a dropdown menu.
- List options in an order that makes logical sense. Depending on the context, the order could be alphabetical or most common to least common. For example, if listing accounts by name, list them alphabetically. In billing, paying the amount due should be listed above letting the user enter a custom payment amount.
- Use checkboxes and radio buttons only to change settings, not as action buttons that make something happen.

{% endcolumn %}

</div>

## Specifications

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

A radio button group consists of a Section Label, followed by pairs of radio buttons and radio button labels.

#### Labeling:

- Labels should start with a capital letter.
- Labels should not have punctuation at the end, such as a period, unless more than one sentence is used. 

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Radio button group composition"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-composition.svg)
{% endfigure %}
{% endcolumn %}

</div>

### Spacing

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

A title should always be located above the radio buttons. More context can be provided under the title (subtitle) but it is optional (shown here as “Select an option” on left). If subtitle is not needed, use specs in the design on the right.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Radio button spacing"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-spacing.svg)
{% endfigure %}
{% endcolumn %}

</div>

### States

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Overview

A title should always be located above the radio buttons. More context can be provided under the title (subtitle) but it is optional (shown here as “Select an option” on left). If subtitle is not needed, use specs in the design on the right.

Best practice form design would not allow a radio button to ever exist in error state, so try to avoid it at all cost.


{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Radio button states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-states.svg)
{% endfigure %}
{% endcolumn %}

</div>



<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Error state - expanded

The question with the error receives an asterisk. The asterisk position floats to the left, in the margin, not in vertical alignment with the text. The section label should remain in its natural vertical alignment. 

Only the option with the error receives the error radio button.

Let the error message wrap to fixed upper and lower bounds, so as to adhere to 40-80 characters per line.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Radio button error state details"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-error.svg)
{% endfigure %}
{% endcolumn %}

</div>
