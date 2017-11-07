---
title: Key value pairs
parent: Content Areas
layout: component
category: Components
usage: >
   Key value pairs display data which corresponds that data's corresponding label. Color and alignment of key value pairs allows user to quickly scan the page for relevant data.
preview-image: null
resource: true
status: Stable
last-modified: 2017-11-07
---

{% include toc.html %}

## Introduction

<div class="hxRow">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

### When to use

Use key value pairs when a piece of data needs either a text or visual display of that data's corresponding value. The data in which key values are paired with are called "Data values".

### Best practices

- Make sure key values corresponds with the label used for the data.
- Keep key values limited to one line.
- Follow the Helix grid guidelines for spacing and placement.
- Use icons sparingly.
- Use the vertical key pattern if key value sections are arranged on the page side by side.
- Consider breaking key value pairs into sub-groups if there are more than five sets of pairs.

{% endcolumn %}
</div>

## Specifications and states

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Key value pairs include the following specifications and states:

### Default layout

Key value pairs are contained in the body of the page by default. Key values (i.e. "Ticket ID") are displayed on the left and aligned right. Data values (i.e. "Summary") are displayed on the right and are aligned left.

To determine the indentation of key value pairs, use 2 columns on the Helix grid for key values and 4 columns for data values. Space between the key and data values must align with the grid gutter between the 2nd and 3rd columns.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"This example uses a spacing guideline for a 1200px screen size. Spacing widths might vary depending on your screen size"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-default-layout.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Two lines

In certain cases, key value pair text can wrap to two lines. We recommend formatting key value's across two columns and data value's across 4.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A set of key value pairs that use two lines"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-two-lines.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Other elements

Icons, compact tertiary buttons, and text links can be used in key value pairs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Key value pairs that contain icons, buttons, and text links"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-other-elements.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading state

If a data value are still being called, list the key value, and then the word "Loading" followed by an ellipses for the data value.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A set of key value pairs in a loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-loading-state.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Vertical key values

If multiple key value pairs are listed next to each other on the body of the page, use vertical key value pairs. A vertical key value pair lists the key value above the data value, at a maximum width of four columns on the helix grid. Do not place more than three vertical key value pairs on the page.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A vertical key pair set on a 1200px grid"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-vertical-keyvalue.svg)

{% endfigure %}
{% endcolumn %}

</div>
