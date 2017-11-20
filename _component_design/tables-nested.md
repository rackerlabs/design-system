---
title: Table Nesting
parent: Tables
layout: component
category: Components
usage: >
  Nested tables come in a variety of forms and allow users to drill into additional data within a table row. By hiding this data behind a user interaction, the interface adheres to the low cognitive load goals of the table pattern, while allowing for more data rich layouts.
preview-image: preview-images/tables-nested.svg
status: stable
resource: true
last-modified: 2017-10-24
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Nested tables allow the nesting of additional levels of data within a table.

### Best practice

- All rows should be closed by default.
- The expanded area inherits the styling of the parent row (for example, bound or unbound and zebra-stripe color).
- There can only be one expandable content area per row.
- Expand may be triggered in three ways:
  - Clicking anywhere within the row that is not a link
  - Clicking the down-caret icon
  - Clicking a badge icon
- Collapse may be triggered in two ways:
  - Clicking anywhere in the parent row
  - Clicking directly on the collapse icon (either in a parent row or at the bottom of an expanded area)
- Rows remain expanded until collapsed by the user.
- Include a collapse icon in the bottom right corner of the expanded area in addition to the collapse icon in the parent row.
- The viewport remains unchanged with expansion and collapse.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the nested table pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-nested-hero.svg)
{% endfigure %}
{% figure [caption:"Nested table interactions"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-nested-ixd.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Variations

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Explanatory text variation

Use this variation of an expandable table to add additional supporting text to a table row.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Nested table IxD"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-explanatory.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Key: Value variation

Use this variation of an expandable table to add additional key value pairs of associated meta data to a table row.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Key: Value expandable row. NOT TO SCALE"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-key-value.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Aggregate data variation

Use the aggregate data table to show primary, secondary, and tertiary values of some aggregate total.

{% endcolumn %}

{% column right:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
{% figure [caption:"Aggregate nested table specs. NOT TO SCALE"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-aggregate.svg)
{% endfigure %}
{% endcolumn %}
</div>
