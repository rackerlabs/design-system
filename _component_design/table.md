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
last-modified: 2018-11-26
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/tables/#basic-table
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a table when you want to clearly display a large amount of data. Tables make make scanning and sorting complex data sets easier for the user.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a table:

- When organizing content in a table, focus on the user's primary task.
- If possible, do not construct a table with more than seven columns.
- Because tables are visually complex, keep the visual noise around a table to a minimum.
- In general, order columns left to right, from most important to least important. You can reserve the right-most column for important secondary information, especially if it is critical to users tasks. For example, in a billing application the last column is **Total** which indicates row total.
- Include filter and sort controls to allow users to quickly find important information organize the data set.
- If you are presenting a small amount of information, consider using a condensed table. A condensed table provides a concise presentation and is preferred over bulleted lists or key-value pairs.
- Left-justify text.
- Right-justify numbers.
- Center-align the null and undefined (-) character, not applicable (n/a), and icons.
- Only add units to the column header unless the column unit can differ among rows.
- Truncated text must have a [tooltip]({{site.baseurl}}/components/tooltip.html) that displays the entire table cell value.

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

- **Column heading label (required)**: The column heading label is the name of the column.
- **Bulk selection (optional)**: Click the bulk selection checkbox to select all items in the table.
- **Sort (optional)**: Sorting enables the user to determine the order of the rows that appear in the table. For example, a column that contains text can be sorted alphabetically. Sorting helps users find data quickly and easily.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table header composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
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
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
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
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table row specifications

The table row contains data associated with an object.

Use the following specifications when you construct a table row.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A table row is comprised of the following elements:

- **Select checkbox (optional)**: Include a checkbox if a user needs to select or manipulate data within a table. Always list the checkbox as the first element in the table row. See [table controls]({{site.baseurl}}/components/tables-controls.html). The user clicks the checkbox and then clicks a button or selects an action from a cog.
- **Summary rows (optional)**: You can add a summary row at the bottom of the table that displays column summary information such as totals. You can also add summary rows to an [expanded table]({{site.baseurl}}/components/table-expansion.html)
- **Bulk selection (optional)**: Include bulk selection when you want the user to select or deselect all objects in the table.
- **Totaling (optional)**: Totaling is the sum of all column summaries. Totaling is used to calculate a grand total.
- **Reveal (optional)**: Some table rows can contain a lot of information, including data and text. If you construct a table row with reveal, then the user can expand or collapse the row, which hides or shows more data. By providing the ability to hide information, reveal allows for a more optimum use of table space.  
- **Heartbeat (optional)**: When the user edits an object in the table, the edited rows glows briefly (the *heartbeart*) when the user saves the change. As the table refreshes, the heartbeat focuses the users' eyes on the change they made.
- **Cog (optional)**: The cog contains a list of actions from which the user can select. Include the action cog menu if the objects in each row have two or more available actions.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table row composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
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
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
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
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
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
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

A user can encounter an **empty table** when there isn't yet any data for the table. For example, a table for a new account that does not yet have servers displays an empty state.



**Hover and selected State**

When using the check box icon within a table, each row supports the following states:

- **Hover state:** Indicates a row is currently hovered by a user.
- **Selected state:** Indicates the check-box icon has been clicked.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Table states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
