---
title: Table
parent: Tables
layout: component
category: Components
usage: >
  A table displays data or other information in rows and columns. Tables make parsing data and comparing and contrasting data much easier.
preview-image: preview-images/tables.svg
status: stable
resource: true
last-modified: 2018-11-15
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/tables/#basic-table
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Table types

There are four table types for you to consider:

- **Condensed table**: Use a condensed table when you want to show a limited amount of data in a small area.
- **Dual-line table**: A dual-line table contains text that wraps into multiple lines of text.
- **Dual-layout tables**: Dual-layout tables display one table on the left, and one table on the right.
- **Responsive table**: Responsive tables adjust in size to accommodate the display size of the customer.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table header composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg"/>
{% endfigure %}

{% figure [caption:"Table header composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg"/>
{% endfigure %}

{% figure [caption:"Table header composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg"/>
{% endfigure %}

{% figure [caption:"Table header composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a table when you want to clearly display a large amount of data and any time you want to aggregate that data. Tables make working with data much easier for the user.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a table:

- Do not construct a table with more than seven columns.
- Do not visually clutter the user interface. Visual clutter can be distracting.
- When organizing content in a table, focus on the user's primary task.
- Order columns left to right, from most important to least important.
- Include filter and sort controls to allow users to find the most important information.
- If you are presenting a small amount of information, consider using a condensed table. A condensed table provides a concise presentation and is preferred over bulleted lists or key-value pairs.
- Left-justify text, right-justify numbers. Center-align the null and undefined (-) character, not applicable (n/a), and icons.
- Only use units in row if they differ row by row and cannot be standardized. Units in body rows appear without parentheses.
- Truncated text should appear in a [tooltip]({{site.baseurl}}/components/tooltip.html), which displays text on hover or click.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table header specifications

The table header is located on top of the table and spans the width of the table.

Use the following specifications when you construct a table header.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A table header is comprised of the following elements:

- **Column heading label (Required)**: The column heading label is the name of the column.
- **Bulk selection (Optional)**: Click the bulk selection checkbox to select all items in the table.
- **Sort (Optional)**: Sorting enables the user to determine the order of the rows that appear in the table. For example, a column that contains text can be sorted alphabetically. Sorting helps users find data quickly and easily.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table header composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a table header.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table header style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-condensed.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct a table header.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table header spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-small-condensed.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table row specifications

The table row contains data associated with an object. The data appears in cells, which are located at the intersection of a row an column.

Use the following specifications when you construct a table row.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A table row is comprised of the following elements:

- **Select checkbox (Required/Optional)**: Include a checkbox if a user needs to select or manipulate data within a table. Always list the checkbox as the first element in the table row. See [table controls]({{site.baseurl}}/components/tables-controls.html). The user clicks the checkbox and then clicks a button or selects an action from a cog.
- **Summary rows (Required/Optional)**: You can add a summary row at the bottom of the table that displays column summary information such as totals.
- **Bulk selection (Required/Optional)**: Include bulk selection when you want the user to select or deselect all objects in the table.
- **Totaling (Required/Optional)**: Totaling is the sum of all column summaries. Totaling is used to calculate a grand total.
- **Reveal (Required/Optional)**: Some table rows can contain a lot of information, including data and text. If you construct a table row with reveal, then the user can expand or collapse the row, which hides or shows more data. By providing the ability to hide information, reveal allows for a more optimum use of table space.  
- **Heartbeat (Required/Optional)**: When the user edits an object in the table, the edited rows glows briefly (the *heartbeart*) when the user saves the change. As the table refreshes, the heartbeat focuses the users' eyes on the change they made.
- **Cog (Required/Optional)**: The cog contains a list of actions from which the user can select. Include the action cog menu if the objects in each row have two or more available actions.
- **Status indicator (Optional)**: If the objects in the table are services, use a status indicator icon to communicate service status.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table row composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-loading.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a table row.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table row style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-loading.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct a table row.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table row spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-loading.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Cell width

Some text here on cell width...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Cell width spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-loading.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

**Empty tables** occur when no data is available or when a user has applied a filter that does not fit the table parameters.

When no data is available due to an error occurring, the empty state is presented with textual hints that direct the user towards possible solutions in the event an error has occurred.

Examples of this direction include:

- "… contact your account owner."
- "… remove search filters."
- "… contact support."

**Hover and selected State**

When using the check box icon within a table, each row supports the following states:

- **Hover state:** Indicates a row is currently hovered by a user.
- **Selected state:** Indicates the check-box icon has been clicked.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-empty.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
