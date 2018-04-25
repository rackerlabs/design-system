---
title: Table
parent: Tables
layout: component
category: Components
usage: >
  Tables present data on nearly every page in Helix control panels. Tables are highly valuable, but always run the risk of putting too high a cognitive load on users. Our goal with tables should always be to decrease cognitive load so users can get the data they need quickly and easily.
preview-image: preview-images/tables.svg
status: stable
resource: true
last-modified: 2017-11-16
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

Tables are the bread-and-butter component for displaying complex objects in a neat and tidy format. By presenting complex objects in an easy-to-consume format, Helix control panels allow for advanced users to quickly interact with a large amount of data while ensuring the data are presented efficiently in a user-friendly manner for novice users.

### Best practice

- Keep the column count to under seven.
- Keep visual clutter to a minimum to maintain a user's focus.
- When organizing content in a table, focus on the user's primary task.
- Preserve hierarchies from left to right. (Most important to least important)
- Provide filtering and sorting table controls to allow users to interact with and select the most important information.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Meet the table pattern"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-hero.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Default layout

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

- Include the check box icon if a user needs to select or manipulate data within a table. This check box icon will always be the first element in a table row, see [table controls]({{site.baseurl}}/components/tables-controls.html).
- Include the action cog menu if the objects in each row have two or more available actions.
- Text justification within each cell is content specific.
  - Text should be left justified.
  - Center justify columns that contain null/undefined (–), not applicable (n/a), or icons.
  - Numbers should be right justified.
- Only use units in row if they differ row by row and cannot be standardized. Units in body rows appear without parentheses.
- Truncated text should appear in a [tooltip]({{site.baseurl}}/components/tooltip.html), enabling display on hover or click.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default table specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-default.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Condensed table

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

The use of a condensed table provides for views that display either many or few results.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Condensed table specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-condensed.svg"/>
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Small tables

If presenting a small amount of information, a condensed table format allows for particular and concise presentation. In cases such as this, tables are preferred over bullet lists, or key-value lists.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Example: IP addresses currently applied in a cloud server"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-small-condensed.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Table states

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

Use a gray placeholder to represent loading text to inform the user that the data is present, but not yet available.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Example of table in loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-loading.svg"/>
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Empty

Empty tables occur when no data is available or when a user has applied a filter that does not fit the table parameters.

When no data is available due to an error occurring, the empty state is presented with textual hints that direct the user towards possible solutions in the event an error has occurred.

Examples of this direction include:

- "… contact your account owner."
- "… remove search filters."
- "… contact support."

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Example of an empty table"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-empty.svg"/>
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Hover & selected row

When using the check box icon within a table, each row supports the following states:

- **Hover state:** Indicates a row is currently hovered by a user.
- **Selected state:** Indicates the check-box icon has been clicked.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Hover and selected row examples for default and condensed table rows"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-hover-selected.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Variations

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Dual line text table

This variation of the basic table pattern is designed to allow the display of two lines of text.

#### When to use

This variation is used in the following situations:

- When a key has two values that are meaningfully related to each other and require display within the same cell. For example, last updated cell in the image to the right.
- When two independent key:values are more meaningful displayed together.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Dual line text table example. **not to scale**"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-dualline-overview.png" width="580"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

#### Best practices

- **Rule**: (**Important**) Each cell with more than one line of text must have a designated primary and secondary value.
- **Rule**: In rows with the [table controls]({{site.baseurl}}/components/tables-controls.html) sorting pattern applied, the pattern will always sort based on the primary key.
- **Suggestion**: Increase the `font-weight` between the primary and secondary values in dual-line rows to make the sorting function more clear to a user.
- **Suggestion**: Due to the amount of information presented with this pattern, consider pairing it with [assisted search]({{site.baseurl}}/components/assisted-search.html) to allow more robust filtering of table content.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Spacing

Using the dual-line text variation impacts standard table layout in the following ways:

- The top and bottom padding for cells moves from 20px to 16px.
- Spacing between lines in dual-line rows are 10px apart.
  - Suggested implementation: apply 1.5em line height to dual-line rows
- Independent text rows have a line-height of 12px and get truncated instead of wrapping.
- In lines displaying two independent text rows, emphasize the primary line (on top) by increasing its font weight to **bold**.
- In lines that include a contextual icon, the supporting icon is spaced 4px from the adjacent text. The icon is the same size as surrounding text: 16x16px.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Dual-line text table specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/tables/basic-tables/tables-dualline-specs.png" width="580"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
