---
title: Selection Bucket
parent: Tables
layout: component
category: Components
usage: >
  A selection bucket contains lists of table values selected by the user. Each time a user selects a table value, a pill representing the selected value appears in the selection bucket. The selection bucket is located below the table and holds all selected values, across all table pages. The user can remove selected values from the selection bucket.
preview-image: preview-images/selector-strip.svg
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

Use a selection bucket when the user can select table values across multiple pages of results. A selection bucket helps remind the user of prior selections, and provides a way for the user to easily deselect those values.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a selection bucket:

- Only use a selection bucket when the table spans multiple pages.

**NOT SURE IF ANY OF THESE ARE RELEVANT...**
- On-hover these tags will display the full device ID.
- Default state for current selection area when no items are selected is a disabled ‘deselect all’ link.
- Allows user to deselect all current selections

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Consider the following specifications when you construct a selection bucket.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A selection bucket contains the following elements:

- **Container (required)**: The container holds the selection pills and if applicable, the scrollbar.
Uncollapsed Current Selection

This area is for use when a user needs to verify their current selection and quickly make edits to it.

- When uncollapsed shows user the items that have been currently selected from within the table.
- The current selection area is collapsed on default.


- **Pill (required)**: When the user makes a selection in the table, a pill appears in the selection bucket. The user can deselect the value by removing the pill.
- **Expand (optional)**: The user can expand the selection bucket to see selected value, or collapse it to hide the selections.
- **Scroll bar (optional)**: Add a scrollbar when the user can select more values than there is space to display the pills.
- **Number selected (optional)**: The number selected show the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user.
- **Select All (optional)**: When the user clicks **Select All**, all records in the current page are selected.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/selection-bucket/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a selection bucket.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/selection-bucket/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing specifications when you construct a selection bucket.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/selection-bucket/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

A selection bucket can exist in the following states:

- Selected
- Unselected
- Hover

**OLD STUFF...**
Use the default state when selecting and searching for multiple items from a large dataset and displaying those selections for user verification.

- Default sort should be the first column within the table
    - For Rackers this is done by device ID
    - For Customers this is done by the device nickname
- Sort should be available for other table columns
- Current Selection area is collapsed on default
- Default selection for table is 10 items with options to select 25 and 50
- Displays number of items as well as number currently viewing
- Select all check box selects everything from the current page.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/selection-bucket/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
