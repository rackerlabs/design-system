---
title: Description List
parent: Content Areas
layout: component
category: Components
usage: >
   A description list is a group of two related data items. Description lists display a label (the key) with the corresponding data (the value). Color and alignment of description lists enable the user to scan the page quickly for relevant data.
preview-image: preview-images/description.svg
resource: true
status: stable
last-modified: 2018-05-07
helix-ui-css: true
helix-ui-javascript: na
pageLink: components/list/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a description list to represent a single row's worth of data, where the key represents a column header and the value represents a corresponding cell. Description lists are used to present identifying information.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you design description lists:

- Do not use description lists to represent multiple rows or columns of data.
- Use horizontal description lists when you have tight vertical constraints.
- Use vertical description lists when you have tight horizontal constraints, are developing for a mobile device, or are viewing data inside an expanded table row.
- Do not place more than three vertical description lists on a page.
- Ensure that the key (label) corresponds with the value (data).
- If possible, limit description lists to one line.
- Follow the Helix grid guidelines for spacing and placement.
- Use icons sparingly.
- For more than five sets of description lists, consider dividing lists into subgroups.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Horizontal layout

Use the following specifications when you construct horizontal description lists.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

By default, description lists appear in the body of a page. Key labels display right-aligned on the left side. Data values display left-aligned on the right side.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Horizontal description lists composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-horizontal-composition.png" width="264px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

To determine the indentation of description lists, use two columns on the Helix grid for key labels and four columns for data values. Space between the key labels and data values must align with the grid gutter between the second and third columns.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Horizontal description lists style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-horizontal-style.png" width="448px"/>
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

{% figure [caption:"Description lists wrapped text"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-horizontal-textwrapping.png" width="330px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Use these spacing guidelines for single-line description lists.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single line description lists"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-horizontal-spacing.png" width="310px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Other elements

You can use icons, compact tertiary buttons, and text links in description lists.

- Use icons to make the key value lists easier to scan.
- Use compact tertiary buttons when you want users to trigger an action.
- Use a link when you want users to navigate.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Description lists with icons, buttons, and text links"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-horizontal-otherelements.png" width="431px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Vertical layout

Use vertical description lists when you position multiple lists beside each other on the body of a page.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Vertical description lists list the key label above the data value at a maximum width of four columns on the Helix grid.

Key labels and data values display left-aligned on the left.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical description list composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-vertical-composition.png"
 width="472px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct description lists in a vertical layout.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical description list style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-vertical-style.png"
 width="410px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct vertical description lists.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical description list spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-vertical-spacing.png"
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

{% figure [caption:"Horizontal description lists loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-loading1.png"
 width="431px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

When vertical description lists load, they take the same loading pattern as the horizontal description lists by populating the value with **Loading…**, styled in body font, Roboto Regular, `#424242`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical description lists loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/description-lists/description-list-loading2.png"
 width="362px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
