---
title: Table Variations
parent: Tables
layout: component
category: Components
usage: >
  Depending on your use case, you can consider adding a multi-value row or dual-layout table to the page.
preview-image: preview-images/popover.svg
resource: true
status: stable
last-modified: 2018-11-26
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/popovers/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table variations

Note to Chris and Bart: This section will include content taken from the Table page.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use the following guidelines when you decide which table variation to construct.

- Construct a table that includes *multi-value rows* when you want to include multiple data points in a single table cell. The user can sort on the primary data point (for example, **Name**) or any secondary data point (for example, **ID**) but not both. Don't use multi-value rows when the user needs to sort on primary data and secondary data independently.
- Use a *dual-layout* table when you need to display data in two tables, one on the left and one on the right of the page.

If your use case does not require multi-value rows or a dual-layout table, consider constructing a [table]({{site.baseurl}}/components/table.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct table variations.

- In multi-value rows, increase the font weight and use **bold** to emphasize the primary data point.
- If you use the sort control in the table header, ensure that the sort is based on the primary key.
- Due to the amount of information that can be displayed in a multi-value row, consider pairing the table with [assisted search]({{site.baseurl}}/components/assisted-search.html). Assisted search provides more robust filtering of table content.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Multi-value row specifications

Use these specifications when you construct a multi-value row table.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A multi-value row is composed of the following elements:

- **Primary data point (required)**: A primary data point is any data that is of most interest to the user.
- **Secondary data point (required)**: A secondary data point provides supporting information about the primary data point. For example, if the primary data point is **Name**, then **ID** could be a secondary data point.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-variations/placeholder-image.png" width="444px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a multi-value row.

Refer to the [shadow system]({{site.baseurl}}/style/shadows.html) for guidelines on constructing shadows.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-variations/placeholder-image.png" width="444px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing specifications when you construct a multi-value row.

**OLD STUFF...KEEP FOR NOW**
Using the dual-line text variation impacts standard table layout in the following ways:

- The top and bottom padding for cells moves from 20px to 16px.
- Spacing between lines in dual-line rows are 10px apart.
- Suggested implementation: apply 1.5em line height to dual-line rows
- Independent text rows have a line-height of 12px and get truncated instead of wrapping.
- In lines that include a contextual icon, the supporting icon is spaced 4px from the adjacent text. The icon is the same size as surrounding text: 16x16px.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-variations/placeholder-image.png" width="444px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Dual-layout table specifications

Use these specifications when you construct a dual-layout table.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The dual-layout table is composed of the following elements:

- **xxxxx (Required/Optional)**: xxxxx.
- **xxxxx (Required/Optional)**: xxxxx.
- **xxxxx (Required/Optional)**: xxxxx.
- **xxxxx (Required/Optional)**: xxxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-variations/placeholder-image.png" width="444px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a dual-layout table.

Refer to the [shadow system]({{site.baseurl}}/style/shadows.html) for guidelines on constructing shadows.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-variations/placeholder-image.png" width="444px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing specifications when you construct a dual-layout table.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-variations/placeholder-image.png" width="444px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
