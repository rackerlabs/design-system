---
title: Popovers
parent: Content Areas
secondary: Editing
layout: component
category: Components
usage: >
  To preserve the user’s context, popovers present a small group of information or inputs that is presented in a panel that is overlayed on top of the original page, preserving the user’s context.
preview-image: preview-images/popover.svg
resource: true
status: unknown
last-modified: 2017-08-17
---

{% include toc.html %}

## Introduction
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to Use
{: .hxSubSectionTitle}
Popovers are triggered as a result of a user action and provide a user with additional context through language, actions through buttons, or both. 

Popovers may also be used for short create/edit workflows, and are particularly useful if context from the page is needed while making the change. If a large workflow is required, consider creating a new page.


### Best Practice
{: .hxSubSectionTitle}

- Avoid opening a popover from within another popover
- Open popovers via click, and never open them via hover.
- Avoid putting important or required information in a popover because the content inside of a popover isn't always visible.
- Use popovers to make small changes, with a small number of inputs.

### Problems Being Solved
{: .hxSubSectionTitle}
- For users needing to make changes or take actions while remaining in their original context (page) a popover allows for small changes or actions to take place without leaving the page.
- For user needing to be able to view additional details about an item in a workflow, a popover allows easy access to this complex or interactive information without cluttering the page.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the popover pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-hero-image.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

</div>

## Default Layout 
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The most defining aspects of a popover are the container and the pointer. The container  appears on top of the canvas. The pointer points to the popover trigger. Pointers may be used on either side of the four corners.

- Most popovers have a heading and submit/cancel buttons. If buttons are not needed, a popover should close when the user clicks outside of the popover.
- The content area may include text, inputs, or interactive content like a table or visualization.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A popover consists of a panel, contextual pointer, heading and buttons."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-default-layout.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

## Pattern Specifications 
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Popover Spacing
{: .hxSubSectionTitle}

For specs on laying out form fields and body text within a popover, refer to [Inputs and Controls]({{site.baseurl}}/components/inputs-and-controls.html)


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Popover spacing specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-spacing.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Popover Specs
{: .hxSubSectionTitle}

- Popovers **always** have a `box-shadow` applied.
- Popover **should not** be larger than 500 x 500px. 

{% include note.html content="If more space than the above guide lines is required, look into solving the design challenge with a different Helix pattern."%}


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Popover redline specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-specs.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pointer Size and Placement
{: .hxSubSectionTitle}

The pointer is 16 px wide at the base. The apex is 8 px from the side of the rectangle. The pointer should start 12 px from the corner. The side from which the pointer protrudes depends on the location of the trigger on the screen.

- Always have the popover protrude toward the center of the screen.
- Be sure not to hide important information with the popover.
- The popover content should be repositioned so that it doesn’t bleed off the screen.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Pointer specifications and pointer placement variations"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-pointer-size-placement.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

## Types of Popovers
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Small Create/Edit Popover
{: .hxSubSectionTitle}
A popover may be used for small create/edit workflows that need to remain in-context.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A popover with a small create workflow"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-small-create-edit-popover.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Large Hidden Content
{: .hxSubSectionTitle}
A popover may be used to reveal hidden content, so the information is still accessible, but doesn’t clutter the screen.

In this instance popover is preferred over a [tooltip]({{site.baseurl}}/components/tooltip.html) if the content is dynamic or interactive (e.g. when presenting the user a table or visualization). 

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
{: .hxSubSectionTitle}
A simple loading circle should be used to load a popover. Refer to the [Loading]({{site.baseurl}}/components/loading.html) pattern for more detailed specifications.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A popover in loading state using a spinner"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/popovers/popover-loading.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>
