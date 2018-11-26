---
title: Table Controls
parent: Tables
layout: component
category: Components
usage: >
  Table controls are elements that allow users to interact with the data contained in a table. These controls include elements such as search bars, buttons, pagination controls, and action cogs among others. Table controls appear at the top and the bottom of the table and in the table header and table rows.
preview-image: preview-images/tables-controls.svg
status: stable
resource: true
last-modified: 2018-11-26
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use controls when you want the user to interact with table data.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a table control:

- On the top of the table, a filter button is always the last button in a button group.
- If you add checkboxes to table rows, list the checkbox first. If you include a cog and not a checkbox, list the cog first.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table top control specifications

Use the following specifications when you construct table top controls.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The top of the table can include the following controls:

- **Primary button (Required)**: The primary button indicates the primary action a user can take on a selected object in the table. The primary button commands user's attention.
- **Secondary button (Required)**: The secondary button indicates other, less frequently used actions a users can take on a selected object.
- **Tertiary button (Optional)**: Use a tertiary button with a primary button or secondary button when there are two options and you want to de-emphasize one of them. For example, in a confirmation modal with two options, use **Submit** (primary) and **Cancel** (tertiary).
- **Filter button (Optional)**: When the user clicks the filter button, the data set in the table is reduced based on the selected criteria. Filter buttons come in the following variations: regular, compact, truncated, and truncated-compact.
- **Select all (Required/Optional)**: When the user clicks **Select All**, all records in the table or page are selected.
- **Number selected (Required/Optional)**: The number selected show the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user.
- **Search (Optional)**: The top of the table can include a search bar that a user can use to locate records.
- **Show/Hide (Required/Optional)**: The user can select to show or hide columns from view. Show/hide enables the user to select which data they want to view.
- **Range indicator (Required/Optional)**: The range indicator displays which records are displayed currently in the table. For example, **Showing 20-30 of 450** means that out of 450 objects, the only ones being displayed are records 20 through 30.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Filter buttons trancated/truncated-compact variations"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct table top controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct table top controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table header control specifications

Use the following specifications when you construct table header controls.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The header of the table can include the following controls:

- **Bulk selection (Optional)**: When the user clicks the bulk selection checkbox, all records in on the current page are selected.
- **Sorting (Optional)**: Users can sort the table rows to appear either in ascending order or descending order.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Filter buttons trancated/truncated-compact variations"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct table header controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct table header controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table row control specifications

Use the following specifications when you construct table row controls.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The row of the table can include the following controls:

- **Bulk selection (Optional)**: When the user clicks the bulk selection checkbox, all records in on the current page are selected.
- **Reveal (Optional)**: The reveal option enables the use to expand the height of the rows to display more data.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Filter buttons trancated/truncated-compact variations"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct table row controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct table row controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Table bottom control specifications

Use the following specifications when you construct table bottom controls.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The bottom of the table can include the following controls:

- **Primary button (Required)**: The primary button indicates the primary action a user can take on a selected object in the table. The primary button commands user's attention.
- **Secondary button (Required)**: The secondary button indicates other, less frequently used actions a users can take on a selected object.
- **Tertiary button (Optional)**: Use a tertiary button with a primary button or secondary button when there are two options and you want to de-emphasize one of them. For example, in a confirmation modal with two options, use **Submit** (primary) and **Cancel** (tertiary).
- **Select all (Required/Optional)**: When the user clicks **Select All**, all records in the current page page are selected.
- **Pagination (Optional)**: Pagination controls enable users to navigate large data sets by viewing one page of data at a time.
- **Selection bucket (Optional)**: The selection bucket shows all objects that the user has selected across all pages. The user can use the selection bucket to deselect records.
- **Number selected (Required/Optional)**: The number selected show the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Filter buttons trancated/truncated-compact variations"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct table bottom controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct table bottom controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-controls/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
