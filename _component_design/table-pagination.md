---
title: Table Pagination
parent: Tables
layout: component
category: Components
usage: >
  Table pagination refers to the controls that enable a user to traverse large data sets by viewing one page of table data at a time. Each page of data contains a set number of table rows (for example, 10). Users can navigate to any page including the first, last, next, and previous pages.
preview-image: preview-images/tables-controls.svg
status: stable
resource: true
last-modified: 2018-12-06
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Consider using pagination when table contains many rows. Without pagination, all table records appear on a single, scrollable page that increases the cognitive load experienced by the user. In addition to usability concerns, and single, scrollable page takes longer to load.

Pagination divides the data set into multiple pages, which enhances performance by decreasing the amount of data that the system loads for each page. A multi-page table is quicker to load and decreases the user's cognitive load.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a pagination bar:

- Construct each page to display the same number of records, until there are no more records. For example, if the table has 27 records, the first two pages display ten records each, and the third page displays 7 records.
- Assess the information needs of the user and workflow when you determine the default number of records the table displays on each page.
- Although you are not limited by this constraint, we recommend that you construct the table to display ten records on each page. The user can also use the row controls to specify the number of records to display on a page. **Xref to row controls section on this page**
- Consider how many page numbers to present to the user. Use **1** for a small data set that does not span multiple page. Use **1** and **2** for two pages of data. Use **1**, **2** and **3** for three or more pages of data. For five or more pages, you can also use **1**, **2**, **3**, **4**, and **5**.
- For row control values, use whole numbers arranged in order and in multiples of five. For example, you can use the row control values **10**, **25**, and **50**. Keep in mind that the more rows displayed per page, the longer it can take for results to load.

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
- **Next** and **Previous (required)**: The user can click the **Next** and **Previous** buttons to navigate to adjacent pages in the data set. The **Previous** and **Next** buttons always remain visible, but can become disabled based on the current page position.
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

- When the first page is selected, the **First Page** and **Previous** buttons are visible and disabled.
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
