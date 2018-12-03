---
title: Table Expansion
parent: Tables
layout: component
category: Components
usage: >
  Table rows can be expanded to show the user additional data. By hiding some table data that can only be accessed at the request of the user, expanded tables provide for more data rich layouts without increasing the complexity for the user.
preview-image: preview-images/tables-nested.svg
status: stable
resource: true
last-modified: 2018-12-03
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use expanded tables when you want to include additional levels of data within a table.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct expanded tables:

- All rows should be collapsed by default.
- The expanded area inherits the styling of the parent row (for example, bound or unbound and zebra-stripe color).
- Rows remain expanded until collapsed by the user.
- There can only be one expandable area per row.
- A user can expand a row by:
  - Clicking anywhere in the row that is not a link.
  - Clicking the angle-down icon.
  - Clicking a badge icon.
- A user can collapse a row by:
  - Clicking anywhere in the parent row.
  - Clicking directly on the angle-up icon in a parent row or at the bottom of an expanded area.
- In addition to the parent row, include an angle-up icon in the bottom right corner of the expanded area.
- The viewport remains unchanged with expansion and collapse.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Explanatory text specifications

Use this variation of an expandable table to add additional supporting text to a table row.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A table that includes explanatory text contains the following elements:

- **Expand (required)**: The table row expands when the user clicks the angle-down icon.
- **Explanatory text (required)**: Explanatory text appears when the table row expands. Text can be a single line or can wrap to multiple lines.
- **Supporting explanatory text (optional)**: You can add supporting text, such as the date and time a comment was updated.
- **Collapse (required)**: The table row collapses when the user clicks the angle-up icon.

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

Use these specifications when you construct an expanded table that includes explanatory text.

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

Refer to these spacing specifications when you construct an expanded table that includes explanatory text.

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

## Key-value pair specifications

Use this variation of an expandable table to add key value pairs to a table row.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

An expandable table that includes key-value pairs contains the following elements:

- **Expand (required)**: The table row expands when the user clicks the angle-down icon.
- **Key-value pair (required)**: The row can expand to include one or more key-value pairs. Limit the number of key-value pairs to eight.
- **Collapse (required)**: The table row collapses when the user clicks the angle-up icon.

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

Use these specifications when you construct an expandable table that includes key-value pairs.

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

Refer to these spacing specifications when you construct an expandable table that includes key-value pairs.

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

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Data aggregation specifications

Use the aggregate data table to show primary, secondary, and tertiary values of an aggregate total.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A table that includes data aggregation contains the following elements:

- **Expand (required)**: Table rows expand when the user clicks the angle-down icon.
- **Primary object (required)**: The name of the primary object.
- **Primary object summary value (required)**: The numeric, primary object value. The primary object value is an aggregate of secondary object values.
- **Secondary object (required)**: The name of the secondary object.
- **Secondary object summary value (required)**: The numeric, secondary object value. A secondary object value is an aggregate of tertiary object values.
- **Tertiary object (required)**: The name of the tertiary object.
- **Tertiary object value (required)**: The numeric, tertiary object value. Tertiary objects aggregate into secondary object values.
- **Collapse (required)**: The table row collapses when the user clicks the angle-up icon.

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

Use these specifications when you construct an expandable table that includes aggregation.

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

Refer to these spacing specifications when you construct an expandable table that includes aggregation.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-expansion/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
