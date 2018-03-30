---
title: Pills
parent: Content Areas
secondary: Editing
layout: component
category: Components
usage: >
  Pills are small, pill-shaped containers that indicate selection. They are useful for their small size and for the ease with which they can be removed. As selection indicators (not selectors themselves), they have a broad set of possible applications. 
preview-image: preview-images/pills.svg
resource: true
status: Stable
last-modified: 2018-02-07
---


{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to Use

Pills are small, pill-shaped containers that indicate selection. They are useful for their small size and for the ease with which they can be removed. As selection indicators (not selectors themselves), they have a broad set of possible applications. 

### Best practices

When using pills, ensure they are uniform in size, shape, and application. Pills may be modified with color if done carefully and intentionally. 

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The pill pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-hero.png){:width="1200px"}
{% endfigure %}

{% endcolumn %}

</div>
  
</section> 

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Default layout

Pills are a component with a variety of use cases, so they can be used for many ways of indicating something has been selected: keyword search, input text search, the name of a server you’ve selected. If it can be selected, you can make a pill of it. 

A pill is different than a tag in a variety of ways, with the most important being you cannot remove a tag.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The pill pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-default.png){:width="499px"}
{% endfigure %}

{% endcolumn %}

</div>
  
</section> 

## Specifications

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

While pills may be larger or smaller than body font, generally use body font.

Pills consist of a container, text, and an “x” icon to indicate removal. By default, they are `gray 400` background.

### Spacing

Pills have 16px of space on either side and 8px below and beside when grouped together. Put pills 4px beneath other associated components&mdash;use the best top spacing for your particular use case. Unless there is a legitimate reason, justify pills to the left.

If more than 15 pills are bunched together, consider an alternative pattern or contact the Helix team.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The pill pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-specs.png){:width="509px"}
{% endfigure %}

{% endcolumn %}

</div>
  
</section> 

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### States

**Active:** This state indicates that a selection has been made and is the default state for a pill.

**Hover:** The hover state indicates the pill may be interacted with to remove the selection.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The pill pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/pills/pills-states.png){:width="499px"}
{% endfigure %}

{% endcolumn %}

</div>
  
</section> 
