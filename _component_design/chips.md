---
title: Chips
parent: Content Areas
layout: component
category: Components
usage: >
  Chips represent a conceptual unit, such as a user, a device, a filter term, or a chunk of metadata and provide the user with the visual understanding of this conceptual unit as well as the ability to interact with them.
preview-image: preview-images/chip.svg
resource: true
status: in-progress
last-modified: 2017-08-17
---

{% include toc.html %}

## Introduction

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- lorem
- ipsum

### Best practices

- lorem
- ipsum

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"The chip component"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-hero.png){: width="1440px"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default chip

Default chip is a single circle that contains a preview of the item the chip represents. This can be either letters to indicate the name, an image to indicate a user, or a product icon to indicate the type of device.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Default chip specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-default.png){: width="580px"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Expanded chip

Expanded chips should be used when additional context is needed to differentiate the chip from the other chips or when the additional information is required by the user.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Expanded chip specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-expanded.png){: width="624px"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Interactions

Clicking a chip reveals additional related information in a card that overlays the chip. 

For example: Click a user chip, allows the user to view email address, permissions, contact info, or other similar data. 


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Interacting with an expanded chip"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-expanded-ixd.png){: width="624px"}
{% endfigure %}
{% endcolumn %}

</div>

