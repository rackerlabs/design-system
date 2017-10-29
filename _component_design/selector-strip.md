---
title: Selector Strip
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Selector Strips allow the user to make a selection from a group of options. This pattern is a more visually prominent alternative to check boxes (multi-select) or radio buttons (single-select).
preview-image: preview-images/selector-strip.svg
status: stable
resource: true
last-modified: 2017-10-29
---

{% include toc.html %}

## Introduction

<div class="hxRow">


{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use
{: .hxSubSectionTitle}

Use a selector strip when you have a small group of options the user must select from. Selector strips can be functionally identical to radio buttons or check boxes (single-select or multi-select), but are typically used instead of those patterns in situations where the selection effects the rest of the page, alters the data on the page, or where the designer would like to give more visual prominence to the group of options.

### Best practice
{: .hxSubSectionTitle}

Selector strips function best when:
- The labels inside the strip are short (1-3 words long max) so the number of options can fit horizontally on a small screen.
- checkboxes or radio buttons do not make sense visually.
- the options are important to the rest of user’s workflow and deserve a more prominent visual treatment. 	


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the selector strip pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-hero.svg)
{% endfigure %}
{% endcolumn %}

</div>

## Default layout

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The default layout has two main styles: Single-Select and Multi-Select. In both layouts the unselected options have a white background with cyan text & selected options have a cyan background with white text. 

### Single-Select 

Single-select selector strips have rounded corners & function like a radio button; only one option can be selected at a time. Selecting another option deselects the previously selected option. Single select always starts with one option selected. There are no alternative focus states on single select, because you cannot focus an item without selecting it.

### Multi-Select

Multi-select selector strips have more squared edges and function like checkboxes so more than one option can be selected at a time. The primary use case for mult-select is selecting days of the week.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Selector strip build specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-default.svg)
{% endfigure %}
{% endcolumn %}


</div>

## States

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pressed state

There are no hover states for selector strips. Unlike buttons, when a selection is made the selector strip remains in the same place so having a hover state would immediately cover the selected area after a selection is made.

When the mouse button is pressed, the fill area changes to cyan 700. When the mouse button is released the fill changes to cyan 900 or white, depending on if the option is being selected or deselected (multi-select only).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Selector strip in pressed state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-pressed.svg)
{% endfigure %}
{% endcolumn %}
	
</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Error states

When there is an error, the invalid selection has a red border. Text explaining the reason for the error appears below & left aligned to the element also in red.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Selector strip in error state] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/selector-strip/select-strip-error.svg)
{% endfigure %}
{% endcolumn %}
	
</div>