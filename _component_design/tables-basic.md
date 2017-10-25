---
title: Basic Tables
parent: Tables
layout: component
category: Components
usage: >
  Tables present data on nearly every page in Helix control panels. Tables are highly valuable, but always run the risk of putting too high a cognitive load on users. Our goal with tables should always be to decrease cognitive load so users can get the data they need quickly and easily.
preview-image: preview-images/tables.svg
status: Stable
resource: true
last-modified: 2017-10-24
---

{% include toc.html %}

## Introduction

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Tables are the bread-and-butter component for displaying complex objects in a neat and tidy format. By presenting complex objects in an easy-to-consume format, Helix control panels allow for advanced users to quickly interact with a large amount of data while ensuring the data are presented efficiently in a user-friendly manner for novice users.

### Best practice

- Keep the column count to under seven. 
- Keep visual clutter to a minimum to maintain a user's focus.
- When organizing content in a table, focus on the user's primary task.
- Preserve hierarchies from left to right. (Most important to least important)
- Provide filtering and sorting table controls to allow users to interact with and select the most important information.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the table pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-hero.svg)
{% endfigure %}
{% endcolumn %}

</div>

## Default layout

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Include the check box icon if a user needs to select or manipulate data within a table. This check box icon will always be the first element in a table row; see [table controls]({{site.baseurl}}/components/tables-controls.html)
- Include the action cog menu if the objects in each row have two or more available actions.
- Text justification within each cell is content specific.
  - Text should be left justified.
  - Center justify columns that contain null/undefined (–), not applicable (n/a), or icons.
  - Numbers should be right justified.
- Only use units in row if they differ row by row and cannot be standardized. Units in body rows appear without parentheses.
- Truncated text should appear in a [tooltip]({{site.baseurl}}/components/tooltip.html), enabling display on hover or click.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Default table specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg)
{% endfigure %}
{% endcolumn %}

</div>

## Condensed table

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The use of a condensed table provides for views that display either many or few results. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Condensed table specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-condensed.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Two-row / small tables

Use the condensed table style for small sets of data which are best represented in tabular form. In cases such as this, tables are preferred over bullet lists, or key-value lists.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example: IP addresses currently applied in a cloud server"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-small-condensed.svg)
{% endfigure %}
{% endcolumn %}

</div>

## Table states 

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Loading

As tables load, use a gray placeholder to represent the loading text. This pattern informs the user that the data is present but not yet available.

{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example of table in loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-loading.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Empty

Empty tables occur when no data is available or when a user has applied a filter that does not fit the table parameters. 

At times no data is available, the empty state is presented with textual hints that direct the user towards possible solutions in the event an error has occurred.

Examples of this direction include:
- "… contact your account owner."
- "… remove search filters."
- "… contact support."

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example of an empty table"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-empty.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Hover & selected row

When using the check box icon within a table, each row supports the following states:

- **Hover state:** Indicates a row is currently hovered by a user.
- **Selected state:** Indicates the check-box icon has been clicked.


{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Hover and selected row examples for default and condensed table rows"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/basic-tables/tables-hover-selected.svg)
{% endfigure %}
{% endcolumn %}

</div>
