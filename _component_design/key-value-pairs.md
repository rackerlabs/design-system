---
title: Key-value pairs
parent: Content Areas
layout: component
category: Components
usage: >
   A key-value pair is a group of two related data items. Key-value pairs display a label (the key) with the corresponding data (the value). Color and alignment of key-value pairs allow the user to scan the page quickly for relevant data.
preview-image: preview-images/key-value.svg
resource: true
status: stable
last-modified: 2018-04-09
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## When to use

Use key-value pairs when a key has a corresponding value that can be displayed visually or with text.

## Best practices

Consider the following best practices when designing key-value pairs:

- Ensure the key (label) corresponds with the data (value).
- Limit key-value pairs to one line.
- Follow the Helix grid guidelines for spacing and placement.
- Use icons sparingly.
- Use the vertical key pattern if key-value pair sections are arranged on the page side-by-side.
- If there are more than five sets of key-value pairs, consider dividing pairs into subgroups.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Horizontal layout

Use the following specifications when constructing horizontal key-value pairs.

### Composition

Gap.

### Style

By default, key-value pairs appear in the body of a page. Key labels (for example, **Ticket ID**) are displayed on the left and are right-aligned. Data values (for example, **Summary**) are displayed on the right and are left-aligned.

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

### Text wrapping

In some cases, key-value pair text wraps to two lines. We recommend formatting key labels across two columns and data values across four columns.

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

## States

When a data value loads, the system should display the key label and the word **Loading...** (ellipses included) in the data value field.

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

## Vertical layout

Use vertical key-value pairs when you position multiple pairs beside each other on the body of a page. Vertical key-value pairs list the key label above the data value at a maximum width of four columns on the Helix grid. Do not place more than three vertical key-value pairs on a page.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A vertical key pair set on a 1200px grid"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-vertical-keyvalue.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
