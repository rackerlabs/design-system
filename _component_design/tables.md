---
title: Tables
parent: null
layout: component
category: Components
usage: Teaser Text
preview-image: components/preview-images/tables.svg
resource: true
---

<!-- TODO: Break out into components? -->

At Rackspace, we present data in a table on nearly every page in our control
panels. Tables are highly valuable, but always run the risk of putting too high
a cognitive load on users. Our goal with tables should always be to decrease
cognitive load so users can get the data they need quickly and easily. With
such pervasive use, it’s important that we make sure our tables are efficient,
powerful, and user-friendly.

# Structure {% include inprogress.html %}

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

# Header Row {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-header.svg){:width="100%"}
{% endfigure %}

## Structured Table

Use a structured table header when multiple columns fit under a single
category. The columns affected should always be placed as far to the right side
of the table as possible.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-header-structured.svg){:width="100%"}
{% endfigure %}

# Sorting {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-sort.svg){:width="100%"}
{% endfigure %}

# Body Row {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-row.svg){:width="100%"}
{% endfigure %}

# Row Hover State {% include inprogress.html %}

Hover on row only if row is expandable

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-row-hover.svg){:width="100%"}
{% endfigure %}

# Expandable Row {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-row-expand.svg){:width="100%"}
{% endfigure %}

# Filtering {% include inprogress.html %}

Filtering is critical for users to quickly find exactly the data they need.

Search vs preset

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-filter.svg){:width="100%"}
{% endfigure %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-filter-select.svg){:width="100%"}
{% endfigure %}

## Search

Search bar should always be floated left above the top controls.

## Facets

Coming Soon

  <!--<div class="ui segments">
    <div class="ui segment">
## Alternate Preset Filters
    </div>
  </div>-->

# Download {% include inprogress.html %}

Download is a critical function for users of data tables.

Download icon is right justified, above the header row

If your table has action buttons, the download icon should be vertically
aligned with them and placed as far to the right as possible

If your table has a search bar, the download icon should be vertically aligned
with and placed just to the left of it

If you have multiple file types available, only display one download icon. When
clicked, trigger a dropdown list that users can select their preferred file type

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-download.svg){:width="100%"}
{% endfigure %}

# Action Buttons {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-controls-top.svg){:width="100%"}
{% endfigure %}

## Bottom placement

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-controls-bottom.svg){:width="100%"}
{% endfigure %}

# Bulk Selectors {% include inprogress.html %}

## In Header

<video controls>
  <source src="{{site.cdn_url}}/img/components/tables-selectors-prototype.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

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

# Cog {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-cog-selector.svg){:width="100%"}
{% endfigure %}

# Pagination/Lazy Loading/Load More Button {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-pagination.svg){:width="100%"}
{% endfigure %}

# Table Styles {% include inprogress.html %}

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

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-style-unbound.svg){:width="100%"}
{% endfigure %}

## Bounded Rows
Use bounded rows to visually separate your table from the surrounding content.
This is particularly helpful if your table is not the primary content on the
page. E.g. a data table in an expanded content area, a table paired with a data
visualization, or if the table appears as one step in a larger create/edit
workflow.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-style-bounded.svg){:width="100%"}
{% endfigure %}

## Zebra Striping

Zebra stripes help users scan across a row without losing their place. Though
best practice for table design is to keep your column count below 7 columns,
when you must display 7+ columns, zebra striping will help users maintain row
orientation. Notice that the horizontal lines that separate each row are gone
if you use zebra striping.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/tables-style-zebra.svg){:width="100%"}
{% endfigure %}

<!--(h3) Totalling
Documentation for totalling?

Pagination (in tommy’s queue)
Heart beat (in Elizabeth’s queue?)
	Status indicators (ping RED designers to gather reqs)
		R/Y/G/disabled/indeterminate?
	Error states (in Eric’s queue)
		Full table, row, column, cell
	Loading red-504 red-675 (in Eric’s queue)
	Totalling (CBUI) (in Tommy’s queue)
		Expansion (in Tommy’s queue)
		Data table


	Customizing columns
		Talk to Eric
	Multiple rows of text in a single table row
		Talk to Eric
	Actions
		Cog
		Actions not in cog
		Buttons within table row


	Icons
		Icon links (eg. Visualization icon external link)
		Icon expansion


	Margins/padding in expanded area
		E.g. Nested table, details, bar graph, alert feed, etc.


	Responsive Behavior in all its glory-->
