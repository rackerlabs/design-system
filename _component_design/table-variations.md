---
title: Table Types
parent: Tables
layout: component
category: Components
usage: >
  Intro here about what table types are...
preview-image: preview-images/popover.svg
resource: true
status: stable
last-modified: 2018-08-02
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/popovers/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct xxxxx:

- xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Condensed table specifications
Use these specifications when you construct a xxxxx.

The use of a condensed table provides for views that display either many or few results.

If presenting a small amount of information, a condensed table format allows for particular and concise presentation. In cases such as this, tables are preferred over bullet lists, or key-value lists.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
The condensed table is composed of the following elements:

- xxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-composition.png" width="486px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these guidelines when you construct a condensed table.

Refer to the [shadow system]({{site.baseurl}}/style/shadows.html) for guidelines on constructing shadows.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-style.png" width="553px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-spacing.png" width="356px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Dual-line table specifications
Use these specifications when you construct a xxxxx.

This variation of the basic table pattern is designed to allow the display of two lines of text.

This variation is used in the following situations:

- When a key has two values that are meaningfully related to each other and require display within the same cell. For example, last updated cell in the image to the right.
- When two independent key:values are more meaningful displayed together.

Best practices:
- **Rule**: (**Important**) Each cell with more than one line of text must have a designated primary and secondary value.
- **Rule**: In rows with the [table controls]({{site.baseurl}}/components/tables-controls.html) sorting pattern applied, the pattern will always sort based on the primary key.
- **Suggestion**: Increase the `font-weight` between the primary and secondary values in dual-line rows to make the sorting function more clear to a user.
- **Suggestion**: Due to the amount of information presented with this pattern, consider pairing it with [assisted search]({{site.baseurl}}/components/assisted-search.html) to allow more robust filtering of table content.



{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
The xxx table is composed of the following elements:

- xxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-composition.png" width="486px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these guidelines when you construct a xxxx table.

Refer to the [shadow system]({{site.baseurl}}/style/shadows.html) for guidelines on constructing shadows.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-style.png" width="553px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Using the dual-line text variation impacts standard table layout in the following ways:

- The top and bottom padding for cells moves from 20px to 16px.
- Spacing between lines in dual-line rows are 10px apart.
  - Suggested implementation: apply 1.5em line height to dual-line rows
- Independent text rows have a line-height of 12px and get truncated instead of wrapping.
- In lines displaying two independent text rows, emphasize the primary line (on top) by increasing its font weight to **bold**.
- In lines that include a contextual icon, the supporting icon is spaced 4px from the adjacent text. The icon is the same size as surrounding text: 16x16px.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-spacing.png" width="356px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Dual-layout table specifications
Use these specifications when you construct a xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
The xxx table is composed of the following elements:

- xxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-composition.png" width="486px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these guidelines when you construct a xxxx table.

Refer to the [shadow system]({{site.baseurl}}/style/shadows.html) for guidelines on constructing shadows.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-style.png" width="553px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-spacing.png" width="356px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Responsive layout table specifications
Use these specifications when you construct a xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
The xxx table is composed of the following elements:

- xxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-composition.png" width="486px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these guidelines when you construct a xxxx table.

Refer to the [shadow system]({{site.baseurl}}/style/shadows.html) for guidelines on constructing shadows.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-style.png" width="553px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Popover spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-spacing.png" width="356px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
