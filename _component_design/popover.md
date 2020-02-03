---
title: Popover
parent: Content Areas
layout: component
category: Components
usage: >
  A popover is a user interface element that allow users to make small changes, view additional details, or take action without losing the context of the current page. For example, when a user clicks an Edit link, a popover containing the parameters to edit opens. In addition to preserving context, popovers declutter a webpage.
preview-image: preview-images/popover.svg
resource: true
status: stable
last-modified: 2018-08-02
helix-ui-css: true
helix-ui-javascript: true
pageLink: components/popover/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a popover for small Create, Read, Update (edit), or Delete (CRUD) workflows that preserve context. If a large workflow is required, consider creating a new page.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a popover:

- Use a popover when a user needs to make small changes with a limited number of inputs.
- Because a popover is not always open, avoid including important or required information in a popover.
- A popovers always opens toward the center of the screen.
- Place the popover within the content area of the page it is on.
- Do not place the popover so that it obstructs important background content.
- Do not design a popover to open within another popover.
- A popover should open on click and not open on hover.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications
Use these specifications when you construct a popover.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
The popover pattern is composed of the following elements:

- **Container (required)**: The container appears on top of the canvas.
- **Pointer (required)**: The pointer points to the user interface element that triggers the popover. You can place a pointer on any corner of the popover.
- **Header (optional)**: The header contains the popover title.
- **Content area (required)**: The content area can include text, inputs, or interactive content such as a table or visualization.
- **Footer (optional)**: The footer contains the popover buttons.
- **Submit and Cancel buttons (optional)**: If buttons are not used, a popover should close when the user clicks outside of the popover.

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

Use these guidelines when you construct a popover.

Refer to the [shadow system]({{site.baseurl}}/style/shadows.html) for guidelines on constructing shadows.

{% include note.html content="Do not create a popover larger than 500px x 500px. If you require more space, solve the design challenge with a different Helix pattern."%}

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

See [inputs and controls]({{site.baseurl}}/components/inputs-and-controls.html) for specifications that describe adding form fields and body text within a popover.

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

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Pointer size and placement

Use the following guidelines when you construct a popover pointer:

- The base of the popover pointer is 16px wide.
- The pointer apex is 8px from the side of the rectangle.
- The pointer should start 12px from the corner.
- The side on which the pointer is located depends on the location of the trigger on the screen.
- Always open the popover towards the center of the screen.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Pointer size and placement variations"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-size-and-spacing.png" width="401px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Loading state

Use a simple loading circle to load a popover. Refer to the [loading indicator]({{site.baseurl}}/components/loading-indicators.html) pattern for more detailed specifications.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A popover in loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-loading-state.png" width="356px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Create and edit popovers

You can use popovers for small create or edit workflows that must remain in context.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A popover with a small create workflow"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-small-create-edit-popover.png" width="356px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Hidden content popovers

Use a popover to reveal hidden content so that it is accessible but doesn’t clutter the background screen.

If the content is dynamic or interactive, a popover is preferable to a [tooltip]({{site.baseurl}}/components/tooltip.html). For example, use a popover when you present the user with a table or visualization that contains clickable areas.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"An interactive informational popover"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/popovers/popovers-hidden-content-popover.png" width="505px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
