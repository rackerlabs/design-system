---
title: Selection Bucket
parent: Tables
layout: component
category: Components
usage: >
  A selection bucket is located below the table and contains all selected values across all table pages. Each time a user selects a table value, a pill representing the selected value appears in the selection bucket. The user can remove selected values from the selection bucket.
preview-image: preview-images/selector-strip.svg
status: stable
resource: true
last-modified: 2018-12-10
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a selection bucket to help the user manage bulk selection across multiple pages of table data. A selection bucket reminds the user of prior selections, and provides a way for the user to efficiently deselect those values, if required. Without a selection bucket the user must navigate to the specific page in order to deselect a value.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a selection bucket:

- Only use a selection bucket when the table spans multiple pages, or when the table includes more than 25 rows. A selection bucket should prevent the user from scrolling or navigating to see what they selected.
- By default, the selection bucket can be collapsed or expanded by default, depending on the workflow. Collapsing provides more vertical space and a summary of the number of values selected, but hides the selected values.
- Construct the selection bucket so that the **Deselect All** option launches a confirmation modal that asks the user to confirm their choice.
- When no rows have been selected by the user, the **Deselect All** option is disabled by default.

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
- **Pill (required)**: When the user makes a selection in the table, a pill appears in the selection bucket. The user can deselect the value by removing the pill.
- **Vertical expand (optional)**: The user can expand the selection bucket to see selected value, or collapse it to hide the selections.
- **Scroll bar (optional)**: Add a scrollbar when the user can select more values than there is space to display the pills.
- **Number selected (optional)**: The number selected show the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user. If you include number selected, then also include the **Select All** option.
- **Select All (optional)**: When the user clicks **Select All**, all records in the current page are selected.
- **Deselect All (optional)**: The user can remove all current selections by clicking **Deselect All**. The **Deselect All** option is located inside the selection bucket container.

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

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/selection-bucket/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
