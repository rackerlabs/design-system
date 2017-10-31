---
title: Popovers
parent: Content Areas
secondary: Editing
layout: component
category: Components
usage: >
  Popovers present a small group of information or inputs that is presented in a panel. To preserve the user’s context, the panel is overlaid on top of the original page.
preview-image: preview-images/popover.svg
resource: true
status: in-progress
last-modified: 2017-10-22
---

{% include toc.html %}

## Introduction

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to Use

Popovers are triggered as a result of a user action and provide a user with additional context through language, actions through buttons, or both.

You can use popovers for short create or edit workflows and are particularly useful if context from the page is needed while making the change. Consider creating a new page if a large workflow is required.


### Best practices

- Avoid opening a popover from within another popover.
- Open popovers by clicking them and never from a hover.
- Avoid putting important or required information in a popover, since the content inside of a popover is not always visible.
- Use popovers to make small changes with a small number of inputs.

### Problems being solved

- Popovers allow users to make small changes, view additional details, or take actions without leaving the page, which preserves context. In addition to preserving context, using popovers declutters a webpage.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the popover pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-hero-image.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

## Default layout

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The most defining aspects of a popover are the container and the pointer. The container appears on top of the canvas. The pointer points to the popover trigger. Pointers can be used on either side of the four corners.

- Most popovers have a heading and submit/cancel buttons. If buttons are not needed, a popover should close when the user clicks outside of the popover.
- The content area can include text, inputs, or interactive content like a table or visualization.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A popover consists of a panel, contextual pointer, heading, and buttons."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-default-layout.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

## Pattern specifications

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Popover Spacing


See [inputs and controls]({{site.baseurl}}/components/inputs-and-controls.html) for specifications that describe laying out form fields and body text within a popover.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Popover spacing specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-spacing.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Popover specifications


- Popovers **always** have a `box-shadow` applied.
- Popovers **should not** be larger than 500 x 500 px.

{% include note.html content="If more space is required, solve the design challenge with a different Helix pattern."%}


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Popover redline specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-specs.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pointer size and placement


The pointer is 16 px wide at the base. The apex is 8 px from the side of the rectangle. The pointer should start 12 px from the corner. The side from which the pointer protrudes depends on the location of the trigger on the screen.

- Always have the popover protrude toward the center of the screen.
- Do not hide important information with the popover.
- The popover should not obstruct important information on the screen.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Pointer specifications and pointer placement variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-pointer-size-placement.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

## Types of popovers

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Small create or edit popover

You can use popovers for small create or edit workflows that must remain in context.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A popover with a small create workflow"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-small-create-edit-popover.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Large hidden content

A popover may be used to reveal hidden content so the information is still accessible but doesn’t clutter the screen.

In this instance, a popover is preferable to a [tooltip]({{site.baseurl}}/components/tooltip.html) if the content is dynamic or interactive. For example, when presenting the user with a table or visualization.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"An interactive informational popover."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-large-hidden-content.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading

Use a simple loading circle to load a popover. Refer to the [Loading]({{site.baseurl}}/components/loading.html) pattern for more detailed specifications.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A popover in loading state using a spinner"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-loading.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>
