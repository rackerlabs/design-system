---
title: Bulk Selection
parent: Tables
layout: component
category: Components
usage: >
  Bulk selection refers to the ways a user can simultaneously select and deselect multiple table rows. After bulk selection, the user can act on the group of selected objects.
preview-image: preview-images/tables-controls.svg
status: stable
resource: true
last-modified: 2018-12-12
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Add bulk selection to a table when you want users to be able to select or deselect multiple rows, and then perform an action on the group of selected rows. If the information you are presenting in a table is read-only, do not provide bulk selection.

When compared to selecting checkboxes individually, bulk selection is a more convenient approach to selecting or deselecting all visible rows.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Note to Bart and Chris:
* Need to follow up on how to multi-select without checkboxes. For example, after selecting a row, the user can hold down the Shift key and select another row. This action selects all rows between the first and second selections.
* Think about bulk select of file tiles and cards.

Consider the following best practices when you add bulk selection to a table:

- The table should support keyboard accessibility shortcuts as a way for the user to select multiple objects.
- If you include number selected feedback, add a **Select All** and **Deselect All** option so that the user doesn't need to select each row manually.
- **Select All** and **Deselect All** only act on the visible set of rows; they do not apply to all table pages.
- Use a selection bucket to help the user can manage multiple selections across pages.

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

- **Parent checkbox (optional)**: When the user clicks the parent checkbox, all children checkboxes are selected. When the user clicks the parent checkbox, all children checkboxes are deselected.
- **Number selected feedback (optional)**: The number selected feedback shows the number of objects selected in the table. For example, **3 Selected** means that out of 10 records displayed in the table, three of those records are currently selected by the user. If you include number selected feedback, then also include a **Select All** or **Deselect All** option, depending on your workflow.
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

- When the user selects multiple (but not all) checkboxes individually, the parent checkbox changes to the indeterminate state. If you include the number selected feedback, then also include a **Select All** option.
- When some checkboxes are selected and the user clicks the parent checkbox, all children values are deselected.
- When all rows are selected, the parent checkbox is in a selected state. Clicking the parent checkbox deselects all rows.
- When all rows are selected, and you have included the number selected feedback, then also include a **Deselect All** option.
- When all rows are selected and the user deselects one or more rows individually, the parent checkbox changes to the indeterminate state. If you include the number selected feedback, then also include a **Select All** option.

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
