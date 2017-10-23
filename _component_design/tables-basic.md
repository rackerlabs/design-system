---
title: Tables - Basic
parent: Tables
layout: component
category: Components
usage: >
  Tables present data on nearly every page in Helix control panels. Tables are highly valuable, but always run the risk of putting too high a cognitive load on users. Our goal with tables should always be to decrease cognitive load so users can get the data they need quickly and easily.
preview-image: preview-images/tables.svg
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

## Introduction
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use
{: .hxSubSectionTitle}
At Rackspace, we present data in a table on nearly every page in our control panels. Tables are highly valuable, but always run the risk of putting too high a cognitive load on users. Our goal with tables should always be to decrease cognitive load so users can get the data they need quickly and easily. With such pervasive use, it’s important that we make sure our tables are efficient, powerful, and user-friendly.


### Best practice
{: .hxSubSectionTitle}

- Keep column count to under 7 columns when possible. 
- Try to keep the visual clutter to a minimum so users can focus on the data.
- When organizing content in a table, focus on a user’s task.
- Try to preserve hierarchies left to right when possible.
- Make it easy to scan and dig so users can quickly decide where to drill for more information.
- All tables should be sortable and, if possible, filterable so users can find the exact record they are looking for with minimal scrolling or navigating through pagination.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the table pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-hero.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

## Default layout
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

- Always offer checkbox if user needs to select or manipulate data.
- Include an action cog if user can trigger 2 or more actions on the record from the row.
- Justification within each cell is content specific.
- Text should be left justified.
- Icons, “&mdash;” (null/undefined), and “n/a” (not applicable) should be center justified.
- Numbers should be right justified.
- Only use units in row if they differ row by row and cannot be standardized. Units in body rows appear without parentheses.
- Truncated text should appear in a tooltip available on hover (in full if possible).

{% endcolumn %}

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
{% figure [caption:"Default table specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

## Condensed table
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

Using a condensed table can be benefitial to users when there is a desire for many results in a single page. Rackers especially, appreciate condensed tables due to the data density.


{% endcolumn %}

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
{% figure [caption:"Condensed table specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-condensed.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}


{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Two-row / small tables
{: .hxSubSectionTitle}


Conversely, situations will arise where small bits of data are best presented in a tabular form, but which don't have a lot of rows. Information such as this should also look into using the condensed table form. E.g. - IP addresses applied to a cloud server.


{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example of table in loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-small-condensed.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

## Table states 
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Loading
{: .hxSubSectionTitle}


When tables are loading, we use a gray placeholder for where text will go. This will allow your able to either load all at once, or if you have data that comes back at different times, it will allow data that is available to be visible to the user. 


{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example of table in loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-loading.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Empty
{: .hxSubSectionTitle}


Empty tables can occur due to filtering or due to the user not having any of the items visible. 

In the text state that there is nothing visible and list possible solutions if this could be in error. 

Examples of the direction could be:
- … contact your account owner.
- … remove search filters.
- … contact support.

{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example of an empty table"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-empty.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Hover & selected row
{: .hxSubSectionTitle}


In some interfaces we support a selected state for a row to indicate what is being viewed or selected in a multi-select view. When the user hovers over a 

{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Hover and selected row examples for default and condensed table rows"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-hover-selected.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<!-- At Rackspace, we present data in a table on nearly every page in our control
panels. Tables are highly valuable, but always run the risk of putting too high
a cognitive load on users. Our goal with tables should always be to decrease
cognitive load so users can get the data they need quickly and easily. With
such pervasive use, it’s important that we make sure our tables are efficient,
powerful, and user-friendly.

# Structure

A data table contains a header row at the top that lists column names, followed
by rows for data.

**Data tables may include**

- Three or more columns of data
- A corresponding visualization
- The ability for users to query and manipulate data

## Best Practices

-   Keep column count to under 7 columns if possible

-   Try to keep the visual clutter to a minimum so users can focus on the data

-   When organizing content in a table, focus on a user’s task

-   Try to preserve hierarchies left to right when possible

-   Make it easy to scan and dig so users can quickly decide where to drill for
  more information

-   All tables should be sortable and, if possible, filterable so users can
  find the exact record they are looking for with minimal scrolling or
  navigating through pagination

# Header Row

Every table must have a header row, and every column must have a header row
label.

## Best Practices

-   Use Roboto 14px Med All Caps to differentiate the header row from the body
  row

-   Always include units in a column label if applicable (unless units differ
  row by row). Units appear after text label in parentheses. Eg. “SIZE (GB)”

-   If bulk selection is possible be sure to include the bulk select check box
  in the header row. See the selectors section below for implementation details
  and best practices.



## Structured Table

Use a structured table header when multiple columns fit under a single
category. The columns affected should always be placed as far to the right side
of the table as possible.



# Sorting

The ability to reorder table rows makes it easier for users to find the data
they are want.

## Best Practices:

-   Auto sort according to primary user goals/tasks. (If you’re not sure what
  the key goals/tasks are, reach out to your PM or the RED team who’ll be able
  to help you identify task flows through research, analytics, or SME
  interviews

-   Make sure that any row that is sortable has the sort hover states

-   It’s helpful to include an information icon with a tooltip that explains
  the sorting function on sortable rows



# Body Row

## Best Practices:

-   Roboto 16px Reg for reading clarity

-   Always offer checkbox if user needs to select or manipulate data

-   Include an action cog if user can trigger 2 or more actions on the record
  from the row

-   Justification within each cell is content specific

-   Text should be left justified

-   Icons, “--” (null/undefined), and “n/a” (not applicable) should be center
  justified

-   Numbers should be right justified

-   Only use units in row if they differ row by row and cannot be standardized.
  Units in body rows appear without parentheses

-   Truncated text should appear in a tooltip available on hover (in full if
  possible)



# Row Hover State

Hover on row only if row is expandable


# Expandable Row

Expandable rows are great for giving users the ability to dig for more data
without having to navigate to a different page. When a row expands, the parent
row becomes a header for the expanded content area.

## Best Practices

-   All rows should be closed by default

-   The expanded area inherits the styling of the parent row (i.e.
  bound/unbound, and zebra stripe color)

-   There can only be one expandable content area per row

-   Expand can be triggered in three ways:

    -   Clicking anywhere in the row that is not a link

    -   Clicking the down pointing carat icon

    -   Clicking an badge count icon (e.g. open alert count in the MyCloud
      Server List table)

-   Collapse can be triggered in 2 ways:

    -   Clicking anywhere in the parent row

    -   Clicking directly on the collapse icon (either in parent row or at
      bottom of the expanded area if there is one)

-   Rows remain expanded until collapsed by user

-   Be sure you include a collapse icon in the bottom right corner of the
  expanded area in addition to the collapse icon in the parent row

-   Viewport remains unchanged with expansion and collapse


# Filtering

Filtering is critical for users to quickly find exactly the data they need.

Search vs preset



## Search

Search bar should always be floated left above the top controls.



# Download

Download is a critical function for users of data tables.

Download icon is right justified, above the header row

If your table has action buttons, the download icon should be vertically
aligned with them and placed as far to the right as possible

If your table has a search bar, the download icon should be vertically aligned
with and placed just to the left of it

If you have multiple file types available, only display one download icon. When
clicked, trigger a dropdown list that users can select their preferred file type


# Action Buttons

## Top placement

### Best practices

-   If you must present more than three bulk action options, use a primary or
  secondary dropdown button. Make sure you group like actions in the dropdown
  and avoid grouping unlike options.

-   Do not only have action buttons below the table

-   If you have action buttons below the table, make sure they are the same
  options as what’s presented above the table header

-   If you use action buttons below the table, make sure you include selector
  text feedback and links (see selectors section below for specific layout
  rules)



# Bulk Selectors


### None Selected

- Empty checkbox
- Clicking the empty-state bulk-select check box selects all records.

### Indeterminate (1 or more but not all records are selected)

- Dash in check box; text feedback “<#> selected.”. Link text “Select all <#>.”
- Clicking the indeterminate-state bulk-select checkbox deselects all records.
- Clicking “Select all <#>.” Text link selects all records

### All Selected

- Check in check box; text feedback beside action “All <#> selected.”.
- Clicking the checked-state bulk-select checkbox deselects all records.

## In Row

### Unselected

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-controls-top.svg){:width="100%"}
{% endfigure %}

### Indeterminate (1 or more but not all records are selected)

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-controls-selected.svg){:width="100%"}
{% endfigure %}

### All Selected
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-controls-selected-all.svg){:width="100%"}
{% endfigure %}

# Cog

The Row Cog is a useful, if problematic component. One the one hand it allows
power users to quickly initiate a number of create/edit workflows on an item in
a list without drilling into that item’s detail page. On the other, it hides
available actions behind an icon, forcing users to explore the cog just to find
out what actions are available.

## Best practices

-   Avoid using a cog if possible

-   Only use a cog if you have 3 or more actions that can be performed on that
  record

-   Keep the actions list to 7 or fewer actions

-   Make sure you group like actions in the dropdown and avoid grouping unlike
  options.

## Cog

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-cog.svg){:width="100%"}
{% endfigure %}

## Cog with selector



# Pagination/Lazy Loading/Load More Button

## Best Practices:

-   Always list the scope of records visible. e.g.:

    - A date range “September 25, 2016- September 26, 2016”
    - A record count range “1-25 of 800”

-   If you have a definite page count, make sure you display the total page
  count, what page user is currently on, and allow the ability to move by
  single page or jump multiple pages to the last/first page

-   Give users a way to change the page size (number of records that are
  displayed) when possible

-   In the URL, embed filters applied, page number and page size so results are
  sharable via URL.

-   If you are using a marker based system, include the top result in the
  viewport’s unique id

-   Make sure lazy load works for both scrolling up and down so that if a user
  navigates via URL to a data set that is in the middle of a lazy loaded data
  set


# Table Styles

There are three table styles to choose from, Unbound, Bound, and Zebra
Striping.

## Unbound Rows

Use unbound rows when you don’t need to differentiate the table from other
content on the page. Unbound rows remove unnecessary visual clutter.

### Best Practices

-   The unbound table should be the only (or primary) content on the page or
  page section

-   Use unbound styling if the table will appear in a compact content area with
  strict horizontal constraints. You don’t need the bounding lines for clarity
  and you can save the pixels (e.g. on a mobile device or in a panel)


## Bounded Rows
Use bounded rows to visually separate your table from the surrounding content.
This is particularly helpful if your table is not the primary content on the
page. E.g. a data table in an expanded content area, a table paired with a data
visualization, or if the table appears as one step in a larger create/edit
workflow.



## Zebra Striping

Zebra stripes help users scan across a row without losing their place. Though
best practice for table design is to keep your column count below 7 columns,
when you must display 7+ columns, zebra striping will help users maintain row
orientation. Notice that the horizontal lines that separate each row are gone
if you use zebra striping. -->
