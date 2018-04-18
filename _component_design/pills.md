---
title: Pills
parent: Content Areas
secondary: Editing
layout: component
category: Components
usage: >
  A pill is a small, oval-shaped component that indicates selection. Pills are often associated with tags, however, you can also apply pills to keyword search terms, input text search, or the name of a server selected by the user. You can represent any selectable object with a pill.
preview-image: preview-images/pills.svg
resource: true
status: Stable
last-modified: 2018-04-18
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## When to Use

Use pills when you want to indicate that a user has selected an object.

## Best practices

When using pills, ensure they are uniform in size, shape, and application.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Specifications
Refer to the following specifications when constructing pills.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

Pills consist of a container, text, and an “x” icon that indicates the user can remove the pill.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pill composition"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-default.png){:width="499px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Style

Pills can be larger or smaller than body font. In general, use body font.

Use the following redline specifications when you construct pills.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pill style"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-specs.png){:width="509px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing

Place 16px of horizontal space and 4px of vertical space between a pill an another component. Use the best top spacing for your particular use case.

Unless you have a reason, justify pills to the left.

If you group pills together, provide 8px of space below and next to a pill. If you group more than 15 pills together, consider an alternative pattern or contact the Helix team.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pill spacing"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-specs.png){:width="509px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## States

Pills can exist in an **active** state, or a **hover** state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Active
The active state is the default state, and indicates that a user has made a selection.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pill states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-states.png){:width="499px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Hover
The hover state indicates that the user can remove the selection.

{% endcolumn %}

</div>

</section>
