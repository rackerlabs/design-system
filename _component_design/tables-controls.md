---
title: Tables - Controls
parent: Tables
layout: component
category: Components
usage: >
  Table controls refer to elements which may be present on any table variation that allows users to interact with the data contained within a table. These controls are a collection of smaller elements such as search bars, buttons, pagination controls, action cogs, amoung others. 
preview-image: preview-images/tables-controls.svg
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

## Introduction
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### When to use
{: .hxSubSectionTitle}
The table pattern has multiple controls that can be used to interact with the contents displayed within a table. Controls can be placed in three primary locations:

- [On top of the table]({{page.url}}#top)
- [Below the table]({{page.url}}#below)
- [Within the table itself]({{page.url}}#within)

{% endcolumn %}

{% column right:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
{% figure [caption:"Table snippets showing the three locations for table controls. NOT TO SCALE "] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-controls-hero.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>


<div id="top" class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Table controls - top
{: .hxSectionTitle}
The following controls can be found on the top of a table:
- Primary actions
- Secondary actions
- Filter actions
- Select actions
- Sorting actions
- Search actions
 
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Definition of actions on top of a table and spacing specifications. NOT TO SCALE"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-controls-top.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Filter 
{: .hxSubSectionTitle}

The filter button is a specialized button used on the top of a table. It is ALWAYS the final button in a button group. Filter buttons come in the following variations:

- Regular
- Compact
- Truncated
- Truncated-compact

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Filter regular / compact variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-filter-1.svg){:width="100%"}
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Filter buttons trancated / truncated-compact variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-filter-2.svg){:width="100%"}
{% endfigure %}

{% endcolumn %}

</div>

<div id="top" class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Sorting
{: .hxSubSectionTitle}

Sorting is applied to tables headers. It can be in the following states:

- Ascending
- Descending
- Hover 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Sorting states and icons"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-sorting.svg){:width="100%"}
{% endfigure %}

{% endcolumn %}

</div>

<div id="below" class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Table controls - below
{: .hxSectionTitle}
The following controls can be found on the bottom of a table:
- Primary actions
- Secondary action
- Pagination actions
- Select actions
- Number items displayed actions
 
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Definition of actions on bottom of a table and spacing specifications. NOT TO SCALE"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-controls-bottom.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pagination
{: .hxSubSectionTitle}

The pagination controls group controls which page of a table is currently being viewed.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Filter regular / compact variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-pagination-1.svg){:width="100%"}
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Filter buttons trancated / truncated-compact variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-pagination-2.svg){:width="100%"}
{% endfigure %}

{% endcolumn %}

</div>

<div id="within" class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Table controls - within
{: .hxSectionTitle}
The following controls can be found inside a table:
- Select Icon
- Action Cog Button
- Sort table actions
- Expand Table Row
- Retract / Truncate table row
 
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Definition of within table actions and spacing specifications. NOT TO SCALE"] [class:"image bg-light border"] %}          
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-controls-within.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<div id="within" class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Actions cog
{: .hxSubSectionTitle}

The actions cog used within a table row is a useful component. The cog allows users to quickly initiate a number of create / edit workflows on an item in a list without drilling into that item’s detail page. It hides these available actions behind the cog icon, forcing users to explore the cog to execute these actions. By hiding these options behind a user click, it keeps from overloading the users view of the table data.

To ensure proper usage following these guidelines:

- Avoid using a cog if possible
- Only use a cog if you have 3 or more actions that    can be performed on that record
- Keep the actions list to 7 or fewer actions
- Make sure you group like actions in the dropdown and avoid grouping unlike options.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Actions cog triggered IxD. NOT TO SCALE"] [class:"image bg-light border"] %}          
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-actions-ixd.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<div id="within" class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Variations and icon spacing
{: .hxSubSectionTitle}


To ensure proper usage following these guidelines:

- If a checkbox is present it **will always** be the first option
- If the actions cog is present and a checkbox is not present it **will be the first option**
- Icons should be 16px wide with 20px spacing on both sides.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Variations best practices and spacing. NOT TO SCALE"] [class:"image bg-light border"] %}          
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-actions-spacing.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<div id="within" class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Bulk selections
{: .hxSubSectionTitle}


Bulk selection is the process of selecting one or more of the visible rows within a table. After the selection process primary and secondary action buttons, regardless of orientation, will apply to the selected row set. Bulk selection has the following states:

None Selected:
- Empty checkbox
- Clicking the empty-state bulk-select check box selects all visible records.

Indeterminate: ( 1 to n-1 where n is the total of # of visible rows)

- Dash in check box; text feedback “[#] selected.”. Link text “Select all [#].”
- Clicking the indeterminate-state bulk-select checkbox deselects all visible records.
- Clicking “Select all [#].” Text link selects all visible records

All Selected

- Check in check box; text feedback beside action “All [#] selected.”.
- Clicking the checked-state bulk-select checkbox deselects all visible records.
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Bulk Selection IxD. NOT TO SCALE"] [class:"image bg-light border"] %}          
![]({{site.url}}/assets/images/components/tables/controls-tables/tables-bulk-select.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>


