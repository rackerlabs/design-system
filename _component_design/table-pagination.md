---
title: Table Pagination
parent: Tables
layout: component
category: Components
usage: >
  Table pagination...
preview-image: preview-images/tables-controls.svg
status: stable
resource: true
last-modified: 2018-11-20
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Pagination bar specifications

xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

xxxxx.


OLD STUFF...

Pagination controls

* Pagination controls enable users to traverse large data sets by viewing one “page” of data at a time.
* The pagination bar is centered below the table and facilitates up to five numerical page buttons.
* The bar contains a back and next button so that the user can navigate to adjacent pages.
* The bar contains first page and last page buttons so that the user can navigate to the first and last pages of data in the set.

The number of buttons

- The pagination bar displays three page buttons by default, but can be configured to display up to five page buttons.
- When there are five or less pages of data, the button bar shrinks to accommodate.
- The back, next, first page, and last page buttons always remain visible, but are disabled depending on current page position.
- The bar must remain centered in its position under the table

Page button behaviors

- When the first page is selected, the First Page and Back buttons are disabled.
- When the last page is selected the Next and Last Page buttons are disabled.
- The back, next, first page, and last page buttons always remain visible, but are disabled depending on current page position.

Indeterminate page count

Sometimes, a back-end system that serves data cannot determine the total number of pages.  In that scenario, the pagination bar behaves as follows:

- The Last Page button is disabled
- Change the cursor to “unavailable” when the user hovers over the button
- Display a tooltip explaining why the button is not clickable.

Row count controls

Row count controls are aligned to the right edge of the table.  The number in each option can be determined at implementation, and largely depends on the performance of the back-end system serving the data.

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

xxxxx.

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

xxxx.

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

xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

xxxxx.

Row count controls

Row count controls are aligned to the right edge of the table.  The number in each option can be determined at implementation, and largely depends on the performance of the back-end system serving the data.


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

xxxxx.

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

xxxx.

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
* Indeterminate

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/table-pagination/placeholder-image.png" width="444"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
