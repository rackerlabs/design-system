---
title: Select filter
parent: Search and Filters
layout: component
category: Components
usage: >
  A select filter allows users to filter table data using existing values in a row. When a select filter is applied, the table filters the data to include all rows that contain a value that matches the filter value. Each table column contains a list of filter values that a user can select.
preview-image: preview-images/select-filter.svg
resource: true
status: stable
last-modified: 2018-05-08
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a select filter when you want a user to filter table data.

Do not use a select filter on non-table data. To search non-table data, use a search filter, which filters data based on search terms and assistive search elements.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a select filter.

- If a select filter popover becomes too large, consider using a search filter.
- Right-align select filter buttons above a data set.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## User interaction

This user interaction illustrates the steps a user takes when using a select filter.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:""] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/select-filters/selectfilter_videoflow_02.mov" width="1148px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a select filter.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A select filter is composed of the following elements:

- **Popover (required)**: A popover provides the container for the select filter. See [popovers](http://helix.rax.io/components/popovers.html) for information on constructing a popover.
- **Filter button (required)**: When a user clicks the filter button, the select filter popover opens. See [bottons](http://helix.rax.io/components/buttons.html) for information on constructing buttons.
- **Checkboxes (required)**: Checkboxes represent filter values that can be selected by a user. See [checkboxes](http://helix.rax.io/components/checkboxes.html) for information on constructing checkboxes.
- **Button set**: Filters are selected using checkboxes and are then applied with a **Apply Filters** button. The **Clear Filters** button removes all selected filters. The **Cancel** button closes the popover without applying any filters. A filter remains until the filter is removed by the user. See [buttons](http://helix.rax.io/components/buttons.html) for information on constructing button sets.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Select filter composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/select-filters/selectfilter-composition01.png" width="587px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

After a filter has been applied by the user, pills are placed on the base page. A user can remove the filter by clicking the **x** inside of a filter pill.

See [pills](helix.rax.io/components/pills.html) for information on contructing pills.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Select filter pills"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/select-filters/selectfilter-composition02-image.png" width="618px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Apply 16px of padding above and below filter pills.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Filter pill spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/select-filters/selectfilter-spacing.png" width="635px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Multi-category popover

Use a single column popover when a data set has five or fewer filters.

Use a multi-column popover when a data set has greater than five filters. Size each column equally. Place checkboxes according to the bounding box of the checkbox itself.

Use a multi-category popover when you can categorize filters. Use one column for each category. In the example, filters are organized into three categories, each category with its own column. The category title is placed at the top of the column with filter checkboxes placed beneath.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Mult-category select filter"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/select-filters/selectfilter-variation-multicategory.png" width="508px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
