---
title: Chips
parent: Content Areas
layout: component
category: Components
usage: >
  Chips represent a block of information, such as a user, a device, a filter term, or metadata. Chips provide the user with a visual understanding of the information, and the ability to interact with it. Contact information and tags are common types of chips.
preview-image: preview-images/chip.svg
resource: true
status: stable
last-modified: 2018-04-02
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## When to use

Use chips to indicate that a list of items is part of a different workflow. For example, use chips when users add or remove requestors to or from a ticket.

## Best practices

Consider the following best practices when constructing a chip:

- Avoid using chips in multiple locations on a page.
- Label the chip so that the user can identify the item represented by the chip.

{% endcolumn %}


</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}


## Specifications
Refer to the following specifications when constructing chips.

### Composition
A chip is a single circle that contains a preview of the item the chip represents. The preview can consist of the following:

- Letters to indicate the name
- An image to indicate a user
- A product icon to indicate the type of device

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Chip composition"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-composition.png){: width="580px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Style

Style text here.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Chip style"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/chips/chips-style.png){: width="580px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
