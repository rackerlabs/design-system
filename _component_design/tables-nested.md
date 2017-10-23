---
title: Tables - Nested
parent: Tables
layout: component
category: Components
usage: >
  Nested tables are a specialized sub pattern of basic tables. Nested tables come in a variety of forms and allow users to drill into additional data within a table row. By hiding this data behind a user interaction we maintain the low cognitive load goals of the table pattern, while allowing for more data rich layouts.
preview-image: preview-images/tables-nested.svg
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
Nested tables allow the nesting of additional levels of data within a table. .


### Best practice
{: .hxSubSectionTitle}

- All rows should be closed by default
- The expanded area inherits the styling of the parent row (i.e. bound/unbound, and zebra stripe color)
- There can only be one expandable content area per row
- Expand can be triggered in three ways:
	- Clicking anywhere in the row that is not a link
	- Clicking the down pointing carat icon
	- Clicking an badge count icon
- Collapse can be triggered in two ways:
	- Clicking anywhere in the parent row
	- Clicking directly on the collapse icon (either in parent row or at bottom of the expanded area if there is one)
-  Rows remain expanded until collapsed by user
-  Be sure you include a collapse icon in the bottom right corner of the expanded area in addition to the collapse icon in the parent row
-  Viewport remains unchanged with expansion and collapse


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the nested table pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-nested-hero.svg){:width="100%"}
{% endfigure %}
{% figure [caption:"Nested table IxD"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-nested-ixd.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

## Variations
{: .hxSubSectionTitle}

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Explanatory text variation
{: .hxSubSectionTitle}

This variation of an expandable table is used to add additional supporting text to a table row.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Nested table IxD"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-explanatory.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Key:value variation
{: .hxSubSectionTitle}

This variation of an expandable table is used to add additional key value pairs of associated meta data to a table row.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Key:Value expandable row. NOT TO SCALE"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-key-value.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Aggregate data variation
{: .hxSubSectionTitle}

The aggregate data table is a specialized table used to show primary, secondary, and tertiary values of some aggregate total. 

{% endcolumn %}

{% column right:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
{% figure [caption:"Aggregate nested table specs. NOT TO SCALE"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/tables/nested-tables/tables-aggregate.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>
