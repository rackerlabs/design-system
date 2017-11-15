---
title: Key-value pairs
parent: Content Areas
layout: component
category: Components
usage: >
   Key-value pairs display data (the value) that corresponds to a label (the key). Color and alignment of key-value pairs allow the user to scan the page quickly for relevant data.
preview-image: preview-images/key-value.svg
resource: true
status: stable
last-modified: 2017-11-07
---

{% include toc.html %}

## Introduction

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Use key-value pairs when a key, an identifier for data, needs either a text or visual display of that key's corresponding value.

### Best practices

- Ensure key values correspond with the label used for the data.
- Limit key values to one line.
- Follow the Helix grid guidelines for spacing and placement.
- Use icons sparingly.
- Use the vertical key pattern if key value sections are arranged on the page side by side.
- Consider breaking key-value pairs into subgroups if there are more than five sets of pairs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/key-value-hero.svg)

{% endfigure %}
{% endcolumn %}

</div>

## Specifications and states

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Key-value pairs include the following specifications and states:

### Default layout

Key-value pairs are contained in the body of the page by default. Keys such as "Ticket ID" display on the left and are right-aligned. Values (such as "Summary" display on the right and are left-aligned.

To determine the indentation of key-value pairs, use two columns on the Helix grid for key values and four columns for data values. Space between the key and data values must align with the grid gutter between the second and third columns.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"This example uses a spacing guideline for a 1200px screen size. Spacing widths might vary depending on your screen size."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-default-layout.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Two lines

In certain cases, key-value pair text can wrap to two lines. We recommend formatting key labels across two columns and values across four.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A set of key-value pairs that use two lines"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-two-lines.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Other elements

You can use icons, compact tertiary buttons, and text links in key-value pairs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"key-value pairs that contain icons, buttons, and text links"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-other-elements.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading state

If a value is still being called, list the key label, and then the word "Loading" followed by an ellipses for the value.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A set of key-value pairs in a loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-loading-state.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Vertical key values

If multiple key-value pairs are listed next to each other on the body of the page, use vertical key-value pairs. Vertical key value pairs list the key value above the data value at a maximum width of four columns on the Helix grid. Do not place more than three vertical key-value pairs on the page.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A vertical key pair set on a 1200px grid"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-vertical-keyvalue.svg)

{% endfigure %}
{% endcolumn %}

</div>
