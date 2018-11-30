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
last-modified: 2018-11-30
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
- If you include a search bar, the preferred location is to place it up and to the left of the table.
- Even if disabled, all table controls should be visible at all times. Don't show or hide table controls based on the scope of the data in the table.

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

All table top controls are optional. Be sure to include only those controls relevant to your use case. Keep in mind that some controls are paired together. For example, if you enable a user to click **Select all**, ensure you construct an easy way for the user to **Deselect All**. Similarly, if a user can select records, use **Number selected** to give feedback on the number of selected rows.

The top of the table can include the following controls:

- **Primary button (optional)**: The primary button indicates the primary action a user can take on a selected object in the table. The primary button commands user's attention.
- **Secondary button (optional)**: The secondary button indicates other, less frequently used actions a users can take on a selected object.
- **Tertiary button (optional)**: Use a tertiary button with a primary button or secondary button when there are two options and you want to de-emphasize one of them. For example, in a confirmation modal with two options, use **Submit** (primary) and **Cancel** (tertiary).
- **Filter button (optional)**: When the user clicks the filter button, the data set in the table is reduced based on the selected criteria. Filter buttons come in the following variations: regular, compact, truncated, and truncated-compact.
- **Select all (optional)**: When the user clicks **Select All**, all records in the table or page are selected.
- **Number selected (optional)**: The number selected show the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user.
- **Search (optional)**: The top of the table can include a search bar that a user can use to locate records.
- **Show/Hide (optional)**: The user can select to show or hide columns from view. Show/hide enables the user to select which data they want to view.
- **Range indicator (optional)**: The range indicator displays which records are displayed currently in the table. For example, **Showing 20-30 of 450** means that out of 450 objects, the only ones being displayed are records 20 through 30.

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

The spacing of controls dependent on the spacing of the table. A small, medium, or large table require small, med, or large control spacing. TBD.

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

- **Bulk selection (optional)**: When the user clicks the bulk selection checkbox, all records in on the current page are selected. See [checkbox]({{site.baseurl}}\components\checkboxes.html) for more information on constructing checkboxes.
- **Sorting (optional)**: Users can sort the table rows to appear either in ascending order or descending order. During construction, you must select a default sort column. Choose the default sort column based on the information needs of the user. For example, if a table contains a list of tickets, then use **Date** as the default sort so that tickets are listed from least to most recent. The down arrow sorts rows in descending order. The up arrow sorts rows in ascending order.

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

- **Bulk selection (optional)**: When the user clicks the bulk selection checkbox, all records on the current page are selected. See [bulk selection]({{site.baseurl}}\components\bulk-selection.html) for more information.
- **Expand (optional)**: This option enables the use to expand the height of the rows to display more data. See [table expansion]({{site.baseurl}}\components\table-expansion.html) for more information on constructing expanded tables.

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

All table bottom controls are optional. Be sure to include only those controls relevant to your use case. Keep in mind that some controls are paired together. For example, if you enable a user to click **Select all**, ensure you construct an easy way for the user to **Deselect All**. Similarly, if a user can select records, use **Number selected** to give feedback on the number of selected rows.

The bottom of the table can include the following controls:

- **Select all (optional)**: When the user clicks **Select All**, all records in the current page page are selected.
- **Pagination (optional)**: Pagination controls enable users to navigate large data sets by viewing one page of data at a time. See [pagination]({{site.baseurl}}\components\pagination.html) for more information.
- **Selection bucket (optional)**: The selection bucket shows all objects that the user has selected across all pages. The user can use the selection bucket to deselect records. See [selection bucket]({{site.baseurl}}\components\selection-bucket.html) for more information.
- **Number selected (optional)**: The number selected show the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user.
- **Primary button (optional)**: The primary button indicates the primary action a user can take on a selected object in the table. The primary button commands user's attention.
- **Secondary button (optional)**: The secondary button indicates other, less frequently used actions a users can take on a selected object.
- **Tertiary button (optional)**: Use a tertiary button with a primary button or secondary button when there are two options and you want to de-emphasize one of them. For example, in a confirmation modal with two options, use **Submit** (primary) and **Cancel** (tertiary).

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
