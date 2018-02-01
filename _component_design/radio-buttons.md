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
last-modified: 2017-11-04
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- Radio buttons should be used when a user has to select **only one option** in a list.
- If multiple options can be selected, use [checkboxes]({{site.baseurl}}/components/checkboxes.html) instead.
- Radio buttons are useful when you have a small set of options and want to show all of them. If you’re using more than five options, strongly consider the dropdown pattern.
- Consider using a [switch]({{site.baseurl}}/components/switches.html) component if a singular input can be used to enable or disable a feature (in place of two yes/no radio buttons).

{% endcolumn %}

{% column right:"hxCol-6 hxCol-xs-12 hxCol-sm-12 hxCol-md-6 hxCol-lg-6" %}

{% figure [caption="The radio button pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-hero.png){:width="432px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}  

### Best practices

- Always use a label above the available options.
- Keep the number of options to between two and five choices.
- There is always a default option selected (preferably at the top or the list).
- If the user clicks on another option, the first is unselected.
- Radio buttons should only be used when the list can be vertical. If space is not available, consider a dropdown menu.
- List options in an order that makes logical sense. Depending on the context, the order could be alphabetical or from most common to least common. For example, if listing accounts by name, list them alphabetically. In billing, paying the amount due should be listed above letting the user enter a custom payment amount.
- Use checkboxes and radio buttons only to change settings, not as action buttons that make something happen.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

A radio button group consists of a section label, followed by pairs of radio buttons and radio button labels.

#### Labeling

- Labels should start with a capital letter.
- Labels should not have punctuation at the end, such as a period, unless more than one sentence is used.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Radio button group composition"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-composition.png){:width="404px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Spacing

A title should always be located above the radio buttons. More context can be provided under the title or subtitle, but it is optional (shown here as “Select an option” on left).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Radio button spacing"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-spacing.png){:width="580px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## States

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Overview

Form design best practices prohibit a radio button from existing in an error state. Avoid this situation.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Radio button states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-states.png){:width="561px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Error state - expanded

The question with the error receives an asterisk. The asterisk position floats to the left, in the margin, not in vertical alignment with the text. The section label should remain in its natural vertical alignment.

Only the option with the error receives error styling.

The error icon is positioned to the left of the error message.

The error message should be 40-80 characters per line, and may wrap if needed.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Radio button error state details"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/radio-buttons/radio-error.png){:width="482px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
