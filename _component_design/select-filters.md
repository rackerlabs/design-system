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
last-modified: 2018-04-26
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## When to use

Use a select filter when you want a user to filter table data.

Do not use a select filter on non-table data. To search non-table data, use a search filter, which filters data based on search terms and assistive search elements.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## Best practices

Consider the following best practices when you construct a select filter.

- If a select filter popover becomes too large, consider using a search filter.
- Right-align select filter buttons above a data set.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## Specifications

Use the following specifications when you construct a select filter.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

Select filters found within a popover are triggered by a button. Filters are selected using checkboxes and are then applied with a **Apply Filters** button. The **Clear Filters** button removes all selected filters.

The **Cancel** button closes the popover without applying any filters, even if some were selected. Any filters that had been previously applied remain until the filter is removed by the user.

After a filter has been applied by the user, pills are placed on to the base page. A filter can be removed by clicking the **x** inside of that filter's pill.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"The select filter popover consists of a panel, heading, filtering options and buttons."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/select-filter.png){: width="633px"}
{% endfigure %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-pills.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Style

Select filters are triggered by a secondary button which contains the filter icon and a label named **Filters**. We recommend placing the filter button on the top right side of a data set, but it does not need to be the most right aligned element.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-button.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Popover element

MOVE THIS TO COMPOSITION ONCE HAVE THE NEW VISUAL

After the filter button is triggered, the popover element containing the filter checkboxes appears. Popover size depends on the amount of filters that are selectable. If the size of the popover becomes too large, consider using a search filter.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"The select filter popover consists of a panel, heading, filtering options and buttons."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-elements.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing

To see specifications for laying out form fields and body text within a popover, see the following patterns:

- [Popovers](http://helix.rax.io/components/popovers.html)
- [Checkboxes](http://helix.rax.io/components/checkboxes.html)
- [Typography](http://helix.rax.io/style/typography.html)

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-popover-spacing.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Post-filter pills

When a filter is applied in the filter popover, the applied filters are reflected by placing a pill 16 px below the control bar (shown as a filter button and search bar in the example) and 16 px above the data set (shown as a device table in the example). Select filter pills are right aligned.

For more details on pills, see [Pills documentation](http://helix.rax.io/components/pills.html).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/post-filter-pills.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Too many pills

If the amount of filter pills cannot fit a singe horizontal line above the data set, use the "Too Many" pattern for Pills.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A pill containing an ellipsis can be used to show more filters as pills."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/too-many-pills.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Loading state

Use a simple loading spinner while a popover loads. For detailed specifications, see [Loading indicators](http://helix.rax.io/components/loading-indicators.html).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-loading-state.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Single column popover

Use a single column popover if a data set only has a small number of filters.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A popover in a loading state using a spinner."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-single-column.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Multicolumn popover

Use the multicolumn popover variation if you have multiple filter checkboxes in the popover and the filters are not categorized. Each column is equal in size within the popover. Checkboxes are placed according to the bounding box of the checkbox itself.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-multicolumn.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Multi-category popover

Use a multi-category when filters can be categorized. Use one column for each category. In this example, the user has categorized their checkboxes into three different categories, each with their own column. The category title is placed at the top of the column with filter checkboxes placed underneath.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/select-filters/filter-multicategory.png){: width="633px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
