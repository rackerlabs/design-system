---
title: Key-value List
parent: Content Areas
layout: component
category: Components
usage: >
   A key-value pair is a group of two related data items. Key-value pairs display a label (the key) with the corresponding data (the value). Color and alignment of key-value pairs enable the user to scan the page quickly for relevant data.
preview-image: preview-images/key-value.svg
resource: true
status: stable
last-modified: 2018-05-07
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/lists/#description-list
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a key-value pair to represent a single row's worth of data, where the key represents a column header and the value represents a corresponding cell. Key-value pairs are used to present identifying information.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you design key-value pairs:

- Do not use key-value pairs to represent multiple rows or columns of data.
- Use horizontal key-value pairs when you have tight vertical constraints.
- Use vertical key-value pairs when you have tight horizontal constraints, are developing for a mobile device, or are viewing data inside an expanded table row.
- Do not place more than three vertical key-value pairs on a page.
- Ensure that the key (label) corresponds with the value (data).
- If possible, limit key-value pairs to one line.
- Follow the Helix grid guidelines for spacing and placement.
- Use icons sparingly.
- For more than five sets of key-value pairs, consider dividing pairs into subgroups.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Horizontal layout

Use the following specifications when you construct horizontal key-value pairs.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

By default, key-value pairs appear in the body of a page. Key labels display right-aligned on the left side. Data values display left-aligned on the right side.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Horizontal key-value pairs composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-horizontal-composition.png" width="264px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

To determine the indentation of key-value pairs, use two columns on the Helix grid for key labels and four columns for data values. Space between the key labels and data values must align with the grid gutter between the second and third columns.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Horizontal key-value pairs style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-horizontal-style.png" width="448px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Text wrapping

Restrict text wrapping to two columns for key labels and four columns for data values.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Key-value pairs wrapped text"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-horizontal-textwrapping.png" width="330px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Use these spacing guidelines for single-line key-value pairs.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single line key-value pairs"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-horizontal-spacing.png" width="310px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Other elements

You can use icons, compact tertiary buttons, and text links in key-value pairs.

- Use icons to make the key value pairs easier to scan.
- Use compact tertiary buttons when you want users to trigger an action.
- Use a link when you want users to navigate.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Key-value pairs with icons, buttons, and text links"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-horizontal-otherelements.png" width="431px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Vertical layout

Use vertical key-value pairs when you position multiple pairs beside each other on the body of a page.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Vertical key-value pairs list the key label above the data value at a maximum width of four columns on the Helix grid.

Key labels and data values display left-aligned on the left.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical key-value pair composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-vertical-composition.png"
 width="472px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct key-value pairs in a vertical layout.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical key-value pair style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-vertical-style.png"
 width="410px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct vertical key-value pairs.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical key-value pair spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-vertical-spacing.png"
 width="612px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Loading state

When a data value loads, the system should display the key label and the word **Loading...** (ellipses included) in the data value field.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Horizontal key-value pairs loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-loading1.png"
 width="431px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

When vertical key values load, they take the same loading pattern as the horizontal key values by populating the value with **Loading…**, styled in body font, Roboto Regular, `#424242`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical key-value pairs loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/key-pairs/keyvalue-loading2.png"
 width="362px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
