---
title: Table Expansion
parent: Tables
layout: component
category: Components
usage: >
  Table rows can be expanded to show the user additional data. Using table expansion provides the user with a more scannable, less data-dense view of data and the ability to reveal more detail within context, directly on the canvas. Expanded tables provide for more data rich layouts without increasing the complexity for the user.
preview-image: preview-images/tables-nested.svg
status: stable
resource: true
last-modified: 2018-12-07
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

The amount of table data the system loads and makes viewable to the user impacts system performance. The more data, the more resources are required to present that data. You can use table expansion as one way to increase system performance as only viewable data requires system resources. Additional content only requires system resources when the expands the row.

You should also use table expansion when there may be information relevant to the user, but the user doesn't need all of the information all of the time. Table expansion enables the user to self-serve based on their information needs.

Use a single-level expanded table when you want to include free-form descriptions (text) and key-value pairs in the content area. Use a multi-level (or nested) table when you want to aggregate data.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct expanded tables:

- All rows should be collapsed by default.
- The expanded area inherits the styling of the parent row.
- A parent can have only one expanded child and grandchild.
- Rows remain expanded until collapsed by the user.
- In addition to the parent row, include an angle-up icon in the bottom right corner of the expanded area.
- Ensure that expanding a table row does not change the user's viewport or auto-scroll the screen.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Single-level table expansion specifications

Use the following specifications when you construct single-level expanded table.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A single-level expanded table contains the following elements:

- **Vertical expand (required)**: The table row expands when the user clicks the angle-down icon.
- **Content area (required)**: The content area can contain explanatory text, such as a description, or key-value pairs. You can add a single line of text, or wrap text to multiple lines. If the expanded row shows key-value pairs, limit the number of key-value pairs to eight.
- **Supporting explanatory text (optional)**: You can add supporting text, such as the date and time a comment was updated.
- **Vertical collapse (required)**: The table row collapses when the user clicks the angle-up icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a single-level expanded table.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct a single-level expanded table.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Multi-level table expansion specifications

Use the following specifications when you construct a multi-level expanded table.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A multi-level expanded table contains the following elements:

- **Vertical expand (required)**: Table rows expand when the user clicks the angle-down icon.
- **Primary object (required)**: The name of the primary object.
- **Primary object summary value (required)**: The numeric, primary object value. The primary object value is an aggregate of secondary object values.
- **Secondary object (required)**: The name of the secondary object.
- **Secondary object summary value (required)**: The numeric, secondary object value. A secondary object value is an aggregate of tertiary object values.
- **Tertiary object (required)**: The name of the tertiary object.
- **Tertiary object value (required)**: The numeric, tertiary object value. Tertiary objects aggregate into secondary object values.
- **Vertical collapse (required)**: The table row collapses when the user clicks the angle-up icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a multi-level expanded table.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct a multi-level expanded table.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Behavior

Table expansion should support the following interactions.

**NEED TO ADDRESS ANIMATION IN THIS SECTION**

To expand a row, the user:

- Clicks anywhere in the row that is not a link.
- Clicks the angle-down icon.
- Clicks a badge icon. **Asking Lane about this**

To collapse a row, the user:

- Clicks anywhere in the parent row.
- Clicks directly on the angle-up icon in a parent row or at the bottom of an expanded area.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
