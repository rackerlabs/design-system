---
title: Chips
parent: Content Areas
layout: component
category: Components
usage: >
  Chips represent a conceptual unit, such as a user, a device, a filter term, or a chunk of metadata and provide the user with the visual understanding of this conceptual unit as well as the ability to interact with them.
preview-image: preview-images/chip.svg
resource: true
status: stable
last-modified: 2017-11-16
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

Chips are best used with indicating a list of items that may be part of a different workflow. For example, adding or removing a list of requestors on a ticket.

### Best practices

- Avoid using chips in multiple locations on a page.
- Ensure the user can concretely identify the item represented by the chip.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The chip component"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-hero.png){: width="1440px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Default chip

The default chip is a single circle that contains a preview of the item the chip represents. The preview can consist of the the following; letters to indicate the name, an image to indicate a user, or a product icon to indicate the type of device.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default chip specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-default.png){: width="580px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
