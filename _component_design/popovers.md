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

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## When to Use

A popover is a user interface element that shows notifications or other important information to users
without the user losing the context of the current activity. Popovers allow users to make small changes, view additional detail, or take actions without leaving the page. In addition to preserving context, popovers declutter a webpage.

<<Not sure what this means..."Popovers are triggered as a result of a user action and provide a user with additional context through language, actions through buttons, or both.">>

Use popovers for short create or edit workflows where background content is required. If a large workflow is
required, consider creating a new page.

## Best practices

Consider the following best practices when designing a popover:

- Do not design a popover to open within another popover.
- Design a popover to open when a user clicks a CTA. Do not design a popover to open when a user hovers over a CTA.
- Because a popover is not always open, avoid including important or required information in a popover.
- Use popovers when a user needs to make small changes with a limited number of inputs.
- Design a popover to extend toward the center of the screen.
- Do not place the popover so that it obstructs important background content.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Meet the popover pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-hero-image.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Default layout

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

A popover consists of a **container** and a **pointer**. The container appears on top of the canvas. The pointer points to the user interface element that triggers the popover. You can place a pointer on any corner of the popover.

- Most popovers include a heading and submit and cancel buttons. If buttons are not required, a popover should close when the user clicks outside of the popover.
- The content area can include text, inputs, or interactive content such as a table or visualization.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A popover consists of a panel, contextual pointer, heading, and buttons."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-default-layout.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Inputs and controls

See [inputs and controls]({{site.baseurl}}/components/inputs-and-controls.html) for specifications that describe adding form fields and body text within a popover.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Popover spacing specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-spacing.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Size and style

Use the following guidelines when sizing and styling a popover:

- **Always** apply `box-shadow` to a popover.
- You **should not** create a popover larger than 500px x 500px.

{% include note.html content="If more space is required, solve the design challenge with a different Helix pattern."%}

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Popover redline specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-specs.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Pointer size and placement

Use the following guidelines when designing the popover pointer:

- The base of the popover pointer is 16px wide.
- The pointer apex is 8px from the side of the rectangle.
- The pointer should start 12px from the corner.
- The side on which the pointer is located depends on the location of the trigger on the screen.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Pointer specifications and pointer placement variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-pointer-size-placement.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Create and edit popovers

You can use popovers for small create or edit workflows that must remain in context.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A popover with a small create workflow"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-small-create-edit-popover.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Hidden content

Use a popover to reveal hidden content so that it is accessible, but doesn’t clutter the background screen.

If the content is dynamic or interactive, a popover is preferable to a [tooltip]({{site.baseurl}}/components/tooltip.html). For example, use a popover when you present the user with a table or visualization that contain clickable areas.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"An interactive informational popover."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-large-hidden-content.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Loading

Use a simple loading circle to load a popover. Refer to the [Loading]({{site.baseurl}}/components/loading-indicators.html) pattern for more detailed specifications.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"A popover in loading state using a spinner"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-loading.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
