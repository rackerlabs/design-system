---
title: Table Pagination
parent: Tables
layout: component
category: Components
usage: >
  Table pagination refers to the controls that enable a user to traverse large data sets by viewing one page of table data at a time. Each page of data contains a set number of table rows (for example, 10). Users can navigate to Next and Previous pages.  
preview-image: preview-images/tables-controls.svg
status: stable
resource: true
last-modified: 2018-11-28
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Consider using pagination when a table spans multiple pages. You can also address large data sets by adding a **Load More** button that when clicked, scrolls the next group of table results up and into view.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a pagination bar:

- xxxxx.
- xxxxx.
- xxxxx.

NOTE: Need to formulate a best practice around the number of page buttons show..1, 3 or 5..

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Pagination bar specifications

Refer to the following specifications when you construct a pagination bar.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The pagination bar contains the following elements:

- **Page number (required)**: Sometimes data sets are large and span multiple pages of results. A user can click a page number button to navigate to that page of results. By default, the pagination bar displays three pages, although you can include up to five pages. When there are five or less pages of data, the button bar shrinks to accommodate the number of pages.
- **First** and **Last (required)**: The user can navigate to the first and last pages in the data set. The **First** and **Last** buttons always remain visible, but can become disabled based on the current page position.
- **Next** and **Back (required)**: The user can click the **Next** and **Back** buttons to navigate to adjacent pages in the data set. The **Back** and **Next** buttons always remain visible, but can become disabled based on the current page position.
- **Showing (required)**: Displays the range of results shown and the total number of records. For example, **Showing 1-10 of 1,234** means that the first 10 records of 1,234 records are displayed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a pagination bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

The pagination bar is centered below the table.

Refer to these spacing specifications when you construct a pagination bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behavior

Use the following behavior guidelines when you construct a pagination bar.

- When the first page is selected, the **First Page** and **Back** buttons are visible and disabled.
- When the last page is selected, the **Next** and **Last Page** buttons are visible and disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Row count control specifications

Refer to the following specifications when you construct row count controls.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Row count controls contain the following elements:

- **Rows (required)**: Rows is a text label placed to the left of the row count controls.
- **Row count controls (required)**: The user can click a row count control value to change the number of records displayed on a page. The number of records can be determined at implementation, and largely depends on the performance of the back-end system serving the data.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct row count controls.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Row count controls are aligned to the right edge of the table.

Refer to these spacing specifications when you construct a pagination bar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States
To include:

* Loading
* Default
* Hover
* Pressed
* Selected
* Indeterminate - Sometimes, a back-end system that serves data cannot determine the total number of pages.  In that scenario, the pagination bar behaves as follows:

- The Last Page button is disabled
- Change the cursor to “unavailable” when the user hovers over the button
- Display a tooltip explaining why the button is not clickable.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
