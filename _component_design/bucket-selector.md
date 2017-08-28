---
title: Bucket Selector
parent: Selector
layout: component
category: Components
usage: Teaser Text
preview-image: components/device-picker.svg
published: true
status: complete, in-progress
resource: true
---

{% include toc.html %}

Bucket Selector is helpful when you are selecting multiple objects from large
option sets within a larger workflow. The bucket area (located below the table)
operates as a holding area where users can view all their selections,
regardless of the table content. This allows users to search and/or filter the
table to locate items to select without losing visibility into what they have
selected.

# Uncollapsed Current Selection

This area is for use when a user needs to verify their current selection and
quickly make edits to it.

-   When uncollapsed shows user the items that have been currently selected
  from within the table.

-   Current Selection area is collapsed on default.

# Multiple Selections

State of device picker when multiple items have been selected from within the
table.

-   Current selection uncollapse and collapsed shows number of devices selected

-   Allows user to deselect all current selections

-   Allows user to verify current selections as well as remove individual
  selections

-   On-hover these tags will display the full device ID

-   Default state for current selection area when no items are selected is a
  disabled ‘deselect all’ link

-   Area becomes scrollable as more items are added

-   Current selection should display full device nickname for customers and
  device ID for Rackers

-   On-hover these tags should display in a tooltip the full device ID for
  customers and the device nickname for Rackers

# Default State

Use when selecting and searching for multiple items from a large dataset and
displaying those selections for user-verification.

-   Default sort should be the first column within the table

    - For Rackers this is done by device ID
    - For Customers this is done by the device nickname

-   Sort should be available for other table columns

-   Current Selection area is collapsed on default

-   Default selection for table is 10 items with options to select 25 and 50

-   Displays number of items as well as number currently viewing

-   Select all check box selects everything from the current page.

Considerations: Shown here the device picker component is specifically being
used to help the user search, sort, display, and select devices related to
their current workflow. This component can scale and be used for a variety of
use cases, though.

# Default

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/device-picker.svg){:width="100%"}
{% endfigure %}

## Default
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/device-picker-selected.svg){:width="100%"}
{% endfigure %}
