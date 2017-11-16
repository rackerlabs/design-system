---
title: Selector Strip
parent: Inputs and Controls
secondary: Selectors
layout: component
category: Components
usage: >
  Selector strips allow the user to make a selection from a group of options. This pattern is a more visually prominent alternative to check boxes (multi-select) or radio buttons (single-select).
preview-image: preview-images/selector-strip.svg
status: stable
resource: true
last-modified: 2017-11-07
---

{% include toc.html %}

## Overview

<div class="hxRow"  markdown="1">
{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

### When to use

Use a selector strip on forms requiring a user to select from a small group of action. Selector strips function similarly to [radio buttons]({{site.baseurl}}/components/radio-buttons.html) or [check-boxes]({{site.baseurl}}/components/checkboxes.html) depending on the variation used: single-select or multi-select. Selector strips are best used in situations where the selection alters the data options presented on the page, or when seeking to more visual prominence to group a of options.

{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Best practice

The selector strip component functions best when:

- The labels inside the strip are short (1-3 words long max) so the number of options can fit horizontally on a small screen.
- Checkboxes or radio buttons do not make sense visually.
- The options are important to the rest of user's workflow and deserve a more prominent visual treatment.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the selector strip pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-hero.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Default layout

<div class="hxRow"  markdown="1">
{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

The default layout has two main styles: single-select and multi-select. In both layouts, the unselected options have a white background with cyan text, and selected options have a cyan background with white text.

{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Single-select  selector strips

Single-select strips have rounded corners and function like a radio button; only one option can be selected at a time. Selecting another option deselects the previously selected option. Single select always starts with one option selected. There are no alternative focus states on single-select strips, because you cannot focus on an item without selecting it.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Selector strip build specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-single.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Multi-select selector strips

Multi-select selector strips have more squared edges and function like checkboxes so more than one option can be selected at a time. The primary use-case for multi-select is selecting days of the week.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Selector strip build specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-multi.svg)
{% endfigure %}
{% endcolumn %}
</div>

## States

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pressed state

There are no hover states for selector strips. Unlike buttons, when a selection is made the selector strip remains in the same place. Having a hover state would immediately cover the selected area after a selection is made.

When the mouse button is pressed, the fill area changes to `cyan 700`. When the mouse button is released, the fill changes to `cyan 900` or white, depending on if the option is being selected or deselected (multi-select only).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Selector strip in pressed state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-pressed.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Error states

When there is an error, the invalid selection has a red border. Text explaining the reason for the error appears below and left aligned to the element also in red.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Selector strip in error state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-error.svg)
{% endfigure %}
{% endcolumn %}
</div>
