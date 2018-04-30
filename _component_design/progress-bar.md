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
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Minimal progress bar

The Minimal Progress Bar offers a simple, no-nonsense way to indicate progress on a process visually. It only tells you what you need to know - based on fill, how far along am I?

As is articulated below, it can and should be used with additional information when possible to provide the most value.

### When to use

- Use anytime you want to simply convey the progress of a process. They shine best in small spaces.

### Best practice

- A progress bar should have a `max-width` over 400px wide
- Do not overclutter with information around it, as it reduces the simplicity and effectiveness of this pattern
- Do not make the progress bar taller, it is useful in its leanness. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/progress-bar/progress-overview.png){: width="570px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

The Minimal Progress Bar offers a small, extensible, flexible, non-nonsense way to indicate progress on a process visually. As is articulated below, it can and should be used with additional information when possible to provide the most value. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/progress-bar/progress-composition.png){: width="570px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing

In general, the minimal progress bar should have 8px of external padding around it at all times. It typically anchors left, in which case the left padding is optional.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/progress-bar/progress-spacing.png){: width="570px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Specifications

The Minimal Progress Bar is 8px tall with a cyan 500 loading fill and a gray 400 empty fill. It should never be more than 8px tall. There is no minimum or maximum length, though we advise not creating progress bars wider than 400px, both for aesthetic purposes and so the user may see the entire progress bar in a single glance, rather than have to track across the screen to understand the progress being made.  

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/progress-bar/progress-specs.png){: width="570px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Behavior and context

The Minimal Progress Bar does not have state changes itself. When it appears, it appears with 100% empty fill and loads with the loading fill corresponding to its progress. When it is done loading, the loading bar disappears and the interface designers can replace this content with more useful content. Shown is

- **Contextual changes:** We advise, while the minimal progress bar is processing, to subdue the opacity of the surrounding elements to 60%, such as icons and text, so the user understands those elements are not fully “there” yet. Any buttons or controls that cannot be acted on should be hidden (if hiding is not an option, subdue them) until they can be acted on. Buttons or controls that *can* be acted on should remain at full opacity.

- **Error states:** If an item has trouble loading, the progress bar itself does not convert to error state, but the pattern that the progress bar is a part of does. That pattern should follow our general error state guidelines, which include presenting an error message with an error icon. From that error message, the user may choose to retry or eliminate the item processing.

- **Focus state:** As there is no action that can be taken directly on the progress bar, there is no focus state. Controls for actions on the progress bar, including but not limited to pausing or removal, should be indicated in that specific pattern outside the scope of the progress bar itself.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/progress-bar/progress-behavior.png){: width="570px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
