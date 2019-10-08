---
title: Progress Bar
parent: Processing
layout: component
category: Components
usage: >
  The minimal progress bar is used in conjunction with form elements to visually convey the progress of a process within a Rackspace system.
preview-image: preview-images/progress-bar.svg
resource: true
status: stable
last-modified: 2018-04-26
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/loader/#progress-bar
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Minimal progress bar

The minimal progress bar provides the user with a simple visual to ascertain the status of a process. As a process moves forward, the fill of the progress bar grows to indicate progress to a user.

### When to use

Use anytime you want to simply convey the progress of a process.

### Best practice

- A progress bar shines best in small spaces and **should not** have a max-width over `400px` wide.
- **Do not** overclutter a progress bar with information around it as excess information reduces the simplicity and effectiveness of the pattern.
- **Do not** make the progress bar taller as the _y_-axis of the progress bar conveys no visual information on progress.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/processing/progress-bar/progress-overview.png" width="570px" />
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A progress bar is composed of a containing shape (empty fill) and a progress indicator (loading fill).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/processing/progress-bar/progress-composition.png" width="570px" />
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

A minimal progress bar should have `8px` of `padding` around its container to allow for visual distinction. It typically anchors left, in which case the `padding-left` is optional.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/processing/progress-bar/progress-spacing.png" width="570px" />
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Specifications

The minimal progress bar is `8px` tall with a `cyan 500` loading fill and a `gray 400` empty fill. There is no minimum or maximum length for progress bars, however, we advise the boundariesare no smaller than `240px` and no larger than `400px`. These boundaries are for aesthetic purposes and for ease of user consumption. These dimensions allow a user to see the entire progress bar in a single glance, rather than have to track across the screen to understand the progress being made.  

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/processing/progress-bar/progress-specs.png" width="570px" />
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behavior and context

The minimal progress bar does not have state changes itself. When it appears, it appears with 100% empty fill and loads with the loading fill corresponding to its progress. When it is done loading, the loading bar disappears and the interface designers can replace this content with more useful content.

- **Contextual changes:** While processing, subdue the opacity of the surrounding elements to 60%, such as icons and text, so the user understands processing elements are in a transient state. Any buttons or controls that cannot be acted on should be hidden (if hiding is not an option, subdue them) until they can be acted on. Buttons or controls that **can** be acted on should remain at full opacity.

- **Error states:** If an item has trouble loading, the progress bar itself does not convert to error state, but the pattern that the progress bar is a part of does. That pattern should follow our [text input error state guidelines]({{site.baseurl}}/components/text-input.html#error), which include presenting an error message with an error icon. From that error message, the user may choose to retry or eliminate the item processing.

- **Focus state:** As there is no action that can be taken directly on the progress bar, there is no focus state. Controls for actions on the progress bar, including but not limited to pausing or removal, should be indicated in that specific pattern outside the scope of the progress bar itself.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/processing/progress-bar/progress-behavior.png" width="570px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
