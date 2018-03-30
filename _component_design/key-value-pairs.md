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
last-modified: 2018-04-13
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12 hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## When to use

Use a key-value pair to represent a single row's worth of data, where the key represents a column header and the value represents a corresponding cell. Key-value pairs are often used to present identifying information.

Do not use key-value pairs to represent multiple rows or columns of data.

## Best practices

Consider the following best practices when you design key-value pairs:

- Use horizontal key-value pairs when you have tight vertical constraints.
- Use vertical key-value pairs when you have tight horizontal constraints, are developing for a mobile device, or are viewing data inside an expanded table row.
- Do not place more than three vertical key-value pairs on a page.
- Ensure that the key (label) corresponds with the data (value).
- If possible, limit key-value pairs to one line.
- Follow the Helix grid guidelines for spacing and placement.
- Use icons sparingly.
- For more than five sets of key-value pairs, consider dividing pairs into subgroups.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Horizontal layout

Use the following specifications when you construct horizontal key-value pairs.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

By default, key-value pairs appear in the body of a page. Key labels display right-aligned on the left side. Data values display left-aligned on the right side.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:""] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue_composition.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

To determine the indentation of key-value pairs, use two columns on the Helix grid for key labels and four columns for data values. Space between the key labels and data values must align with the grid gutter between the second and third columns.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Horizontal key-value pairs style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-default-layout.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Text wrapping

Restrict text wrapping to two columns for key labels and four columns for data values.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A set of key-value pairs that use two lines"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-two-lines.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Other elements

You can use icons, compact tertiary buttons, and text links in key-value pairs.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Key-value pairs that contain icons, buttons, and text links"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-other-elements.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Vertical layout

Use vertical key-value pairs when you position multiple pairs beside each other on the body of a page.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

Vertical key-value pairs list the key label above the data value at a maximum width of four columns on the Helix grid.

Key labels and data values display left-aligned on the left.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical key-value pair composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/key-value-vertical-composition.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use the following redline specifications when you construct vertical layout key-value pairs.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical key-value pairs style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-vertical-keyvalue.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Loading state

When a data value loads, the system should display the key label and the word **Loading...** (ellipses included) in the data value field.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Horizontal key-value pairs in a loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/keypairs-loading-state.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

When vertical key values load, they take the same loading pattern as the horizontal key values by populating the value with **Loading…**, styled in active body font, Roboto Regular, #424242.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Vertical key-value pairs in a loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/key-pairs/key-value-vertical-loading.png)
{% endfigure %}

{% endcolumn %}

</div>

</section>
