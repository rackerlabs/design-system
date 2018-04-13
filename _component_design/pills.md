---
title: Pills
parent: Content Areas
secondary: Editing
layout: component
category: Components
usage: >
  A pill is a small, oval-shaped component that indicates selection. Pills are often associated with tags, however, you can also apply pills to keyword search terms, input text search, or the name of a server selected by the user. You can represent any selectable object with a pill.

  Not sure what this means "A pill is different than a tag in a variety of ways, with the most important being you cannot remove a tag."
preview-image: preview-images/pills.svg
resource: true
status: Stable
last-modified: 2018-04-13
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

Use the following redline specifications when constructing pills:

**Container**
- Height: 24px
- Width: variable
- Border radius: 100px
- Background color: #d8d8d8 (Gray 400)

**Text**
- Roboto, regular, 16px, #424242 (Gray 900)
- Alignment: left, centered vertically
- Line height: 24px

**Icon**
- Shape and size: Use an 'x' icon, 10x10, #9e9e9e (Gray 600)
- Alignment: centered vertically

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

Pills have 16px of space on either side and 8px below and beside when grouped together. Put pills 4px beneath other associated components&mdash;use the best top spacing for your particular use case. Unless there is a legitimate reason, justify pills to the left.

If more than 15 pills are bunched together, consider an alternative pattern or contact the Helix team.

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

**Active:** This state indicates that a selection has been made and is the default state for a pill.

**Hover:** The hover state indicates the pill may be interacted with to remove the selection.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pill states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-states.png){:width="499px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
