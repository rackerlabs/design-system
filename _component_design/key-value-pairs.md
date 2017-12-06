---
title: Key-value pairs
parent: Content Areas
layout: component
category: Components
usage: >
   Key-value pairs display a label (the key) with the corresponding to data (the value). Color and alignment of key-value pairs allow the user to scan the page quickly for relevant data.
preview-image: preview-images/key-value.svg
resource: true
status: stable
last-modified: 2017-11-07
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Use key-value pairs when a key (label) needs either text or a visual display of that key’s corresponding value (data).

### Best practices

- Ensure the key (label) corresponds with the data (value).
- Limit key-value pairs to one line.
- Follow the Helix grid guidelines for spacing and placement.
- Use icons sparingly.
- Use the vertical key pattern if key-value pair sections are arranged on the page side by side.
- Consider breaking key-value pairs into subgroups if there are more than five sets of pairs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/key-value-hero.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications and states

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default layout

Key-value pairs are contained in the body of the page by default. Key labels such as "Ticket ID" display on the left and are right-aligned. Data values such as "Summary" display on the right and are left-aligned.

To determine the indentation of key-value pairs, use two columns on the Helix grid for key labels and four columns for data values. Space between the key labels and data values must align with the grid gutter between the second and third columns.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"This example uses a spacing guideline for a 1200px screen size. Spacing widths might vary depending on your screen size."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-default-layout.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Two lines

In certain cases, key-value pair text can wrap to two lines. We recommend formatting key labels across two columns and data  values across four columns.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A set of key-value pairs that use two lines"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-two-lines.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Other elements

You can use icons, compact tertiary buttons, and text links in key-value pairs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"key-value pairs that contain icons, buttons, and text links"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-other-elements.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading state

If a data value is still being called, list the key label, and then the word "Loading" followed by an ellipses for the data value.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A set of key-value pairs in a loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-loading-state.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Vertical key values

If multiple key-value pairs are listed next to each other on the body of the page, use vertical key-value pairs. Vertical key-value pairs list the key lable above the data value at a maximum width of four columns on the Helix grid. Do not place more than three vertical key-value pairs on the page.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A vertical key pair set on a 1200px grid"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-vertical-keyvalue.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
