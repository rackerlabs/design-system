---
title: Bulk Selection
parent: Tables
layout: component
category: Components
usage: >
  Bulk selection refers to the ways a user can simultaneously select and deselect multiple table rows. After bulk selection, the user can act on the group of selected objects. There are three types of bulk selection: keyboard, parent checkbox, and Select All and Deselect All.
preview-image: preview-images/tables-controls.svg
status: stable
resource: true
last-modified: 2018-12-11
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Add bulk selection options to a table when you want users to be able to select (or deselect) all visible rows, and then perform an action on the group of selected rows. If the information you are presenting in a table is read-only, do not provide bulk selection.

When compared to selecting checkboxes individually, bulk selection is a more convenient approach to selecting or deselecting all visible rows.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you add bulk selection to a table:

- The table should support the keyboard shortcuts to selecting multiple objects. For example, after selecting a row, the user can hold down the **Shift** key and select another row. This action selects all rows between the first and second selections.
- xxxxxx.
- xxxxxx.
- xxcxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct bulk selection.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Bulk selection contains the following elements:

- **Parent checkbox (required)**: When the user selects the parent checkbox, all children checkboxes are selected. When the user deselects the parent checkbox, all children checkboxes are deselected.
- **Select All (optional)**: When the user clicks **Select All**, all records on the current page are selected.
- **Deselect All (optional)**: When the user click **Deselect All**, all records on the current page are deselected.
- **Number selected (optional)**: The number selected shows the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user.
- **Selection bucket (optional)**: You can add a [selection bucket]({{site.baseurl}}/components/selection-bucket.html) to help the user manage table selections across multiple pages.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/bulk-selection/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct bulk selection.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/bulk-selection/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct bulk selection.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/bulk-selection/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behaviors

Ensure that the bulk selection user interactions support the following behaviors:

- When the user selects multiple (but not all) checkboxes individually, the parent checkbox changes to the indeterminate state and the **Select All** control becomes active.
- When some checkboxes are selected and the user selects the parent checkbox, all children values become selected and the **Select All** control changes to the **Deselect All** control.
- When all rows are selected, the user can deselect those rows by deselecting the parent checkbox or clicking **Deselect All**.
- When all rows are selected and the user deselects one or more rows individually, the parent checkbox changes to the indeterminate state and the **Select All** control becomes active.
- If a user selects all currently visible rows individually, the parent checkbox becomes selected and the **Select All** control changes to the **Deselect All** control.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/bulk-selection/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

States include:

- Selected: When the bulk selection checkbox is selected, all visible records are selected.
- Deselected: When the bulk selection checkbox is deselected, all visible records are deselected.
- Indeterminate: When some, but not all, records are selected, the bulk selection checkbox changes to the indeterminate state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/bulk-selection/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
