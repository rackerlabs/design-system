---
title: Bulk Selection
parent: Tables
layout: component
category: Components
usage: >
  Bulk selection refers to a group of actions a user can perform that results in the selection of multiple table rows. After they are selected, user can act on the group of objects. There are three types of bulk selection methods: keyboard, bulk selection checkbox, and Select All and Deselect All.
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

Include bulk selection any time the table includes data that the user can updated. If the information you are presenting in a table is read-only, you do not need to include bulk selection.

includes checkboxes. When compared to selecting children checkboxes individually, bulk selection is a more convenient approach for the user to select all rows in a table.

**NOT SURE WHAT TO DO WITH THIS INFORMATION, IF ANYTHING.**
Ways you can bulk select:
* bulk select checkboxes
* Select All/Deselect All
* click rows separately, but work with that data as a group.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when add bulk selection to a table:

- The table should support using the keyboard to select multiple objects. For example, after selecting a row, the user can hold down the **Shift** and select another row. This action selects all rows between the first and second selections.
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

Use the following specifications when you construct basic bulk selection.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Basic bulk selection contains the following elements:

- **Checkbox (required)**: When the user selects the bulk selection checkbox, all children checkboxes are selected. When the user deselects the bulk selection checkbox, all children checkboxes are deselected.
- **Select All (optional)**: When the user clicks **Select All**, all records on the current page are selected.
- **Deselect All (optional)**: When the user click **Deselect All**, all records on the current page are deselected.
- **Number selected (optional)**: xxxxxx
- **Selection bucket (optional)**: xxxl

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

Use these specifications when you construct basic bulk selection.

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

Use these spacing guidelines when you construct basic bulk selection.

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

Ensure that the user interactions support the following behaviors:

- When the user selects multiple (but not all) checkboxes individually, the bulk selection checkbox changes to the indeterminate state and the **Select All** control becomes active.
- When some checkboxes are selected and the user selects the bulk selection checkbox, all children values become selected and the **Select All** control changes to the **Deselect All** control.
- When all rows are selected, the user can deselect those rows by deselecting the bulk selection checkbox or clicking **Deselect All**.
- When all rows are selected and the user deselects one or more rows individually, the bulk selection checkbox changes to the indeterminate state and the **Select All** control becomes active.
- If a user selects all currently viewed table rows, the bulk selection checkbox becomes selected and the **Select All** control is active.

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

- Selected
- Deselected
- Indeterminate

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/bulk-selection/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
