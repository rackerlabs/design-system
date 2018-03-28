---
title: Table Controls
parent: Tables
layout: component
category: Components
usage: >
  Table controls are elements which allow users to interact with the data contained in a table. These controls include elements such as search bars, buttons, pagination controls, and action cogs among others.
preview-image: preview-images/tables-controls.svg
status: stable
resource: true
last-modified: 2017-10-24
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol-3 hxCol-xs-12 hxCol-sm-12 hxCol-md-3 hxCol-lg-3" %}

### When to use

The table pattern has multiple controls that are used to interact with the contents displayed within a table. Controls may be placed in three primary locations:

- [Controls placed on top]({{page.url}}#top)
- [Controls placed below]({{page.url}}#below)
- [Controls placed in a row]({{page.url}}#within)

{% endcolumn %}

{% column right:"hxCol-9 hxCol-xs-12 hxCol-sm-12 hxCol-md-9 hxCol-lg-9" %}

{% figure [caption:"Table with controls placed on top"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-hero-top.png)
{% endfigure %}

{% figure [caption:"Table with controls placed below"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-hero-bottom.png)
{% endfigure %}

{% figure [caption:"Table with controls placed on rows"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-hero-row.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Table controls - top
{: id="top"}

The following controls may be found at the top of the table:

- Primary actions
- Secondary actions
- Filter actions
- Select actions
- Sorting actions
- Search actions

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Definition of actions on top of a table and spacing specifications. **not to scale**"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-controls-top.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Filter

The filter button is a specialized button used on top of a table. It is **always** the final button in a button group. Filter buttons come in the following variations:

- Regular
- Compact
- Truncated
- Truncated-compact

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Filter regular/compact variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-filter-1.svg)
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Filter buttons trancated/truncated-compact variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-filter-2.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Sorting

Apply sorting to table headers via a click interaction and an icon visual indicator. The icon may take the following states:

- Ascending
- Descending
- Hover

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-sorting.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Table controls - below
{: id="below"}

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The following controls can be located at the bottom of a table:

* Rows shown, and total rows
* Pagination controls
* Row count controls
* Primary action button
* Secondary action buttons
* Number of selected items

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Definition of actions on bottom of a table and spacing specifications. **not to scale**"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-controls-bottom.png){: width="622px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pagination controls

* Pagination controls enable users to traverse large data sets by viewing one “page” of data at a time.
* The pagination bar is centered below the table and facilitates up to five numerical page buttons.
* The bar contains a back and next button so that the user can navigate to adjacent pages.
* The bar contains first page and last page buttons so that the user can navigate to the first and last pages of data in the set.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pagination bar specs and states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/table-controls-pagination-bar-specs-and-states.png){: width="565px"}
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### The number of buttons

* The pagination bar displays three page buttons by default, but can be configured to display up to five page buttons.
* When there are five or less pages of data, the button bar shrinks to accommodate.
* The back, next, first page, and last page buttons always remain visible, but are disabled depending on current page position.
* The bar must remain centered in its position under the table.



{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Default to three page buttons"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/table-controls-pagination-bar-page-button-options.png){: width="306px"}
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Page button behaviors

* When the first page is selected, the First Page and Back buttons are disabled.
* When the last page is selected the Next and Last Page buttons are disabled.
* The back, next, first page, and last page buttons always remain visible, but are disabled depending on current page position.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pagination button bar behavior"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/table-controls-pagination-bar-button-behaviors.png){: width="238px"}
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Indeterminate page count

Sometimes, a back-end system that serves data cannot determine the total number of pages.  In that scenario, the pagination bar behaves as follows:

* The Last Page button is disabled
* Change the cursor to “unavailable” when the user hovers over the button
* Display a tooltip explaining why the button is not clickable.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Handling indeterminate page count"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/table-controls-pagination-bar-indeterminate-page-count.png){: width="239px"}
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Row count controls

Row count controls are aligned to the right edge of the table.  The number in each option can be determined at implementation, and largely depends on the performance of the back-end system serving the data.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Row count control specs and states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/table-controls-pagination-row-count-controls.png){: width="404px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Table controls - row
{: id="within"}

The following controls may be found inside a table:

- Select icon
- Action cog button
- Sort table actions
- Expand table row
- Retract / truncate table row

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Spacing specifications for controls placed within a table row. **not to scale**"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-controls-within.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Actions cog

The actions cog allows user's to quickly initiate a number of create and edit workflows on an item in a table without clicking into an item’s detail page. These available actions are hidden behind the cog icon, allowing a user to interact with the cog to execute these actions. In obscuring these options behind a user click, the actions cog does not overload the users view of the table data.

To ensure proper use, follow these guidelines:

- Only use a cog if you have three or more actions that may be performed on a table row.
- Keep the actions list to seven or fewer actions.
- Group like actions in the drop-down together through the use of a title. Multiple groupings may occur, but avoid exceeding seven actions.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Actions cog triggered. **not to scale**"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-actions-ixd.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Variations and icon spacing

To ensure proper use, follow these guidelines:

- If a check-box is present, it is **always** the first option for clarity.
- If the actions cog is present and a check-box is not present, the cog becomes the **first** option.
- Icons should be 16px wide with 20px spacing on both sides.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Variations best practices and spacing. **not to scale**"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-actions-spacing.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Bulk selection

Apply the primary and secondary action buttons to the row set after the selection process. Bulk selection has the following states:

**None Selected:**

- Empty check box icon, no tertiary action displayed.
- Clicking the empty-state bulk-select check-box selects all visible records.

**Indeterminate:** ( 1 to _n_-1 where _n_ is the total # of visible rows)

- Dash in check-box icon. Text feedback "[#] selected". Link text "Select all \[#\]."
- Clicking the indeterminate state, bulk select icon deselects all visible records.
- Clicking “Select all \[#\].” Text link selects all visible records.

**All Selected:**

- Check in check-box icon, text feedback beside action "All [#] selected."
- Clicking the checked state, bulk select icon deselects all visible records.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Bulk Selection interaction lifecycle. **not to scale**"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-bulk-select.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
