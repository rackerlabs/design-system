---
title: Pills
parent: Content Areas
layout: component
category: Components
usage: >
  A pill is a small, dismissible, oval-shaped component that indicates selection. Use pills to provide feedback for selected keyword search terms, an input text search, or the name of a server selected by the user. You can represent any selectable object with a pill.
preview-image: preview-images/pills.svg
resource: true
status: Stable
last-modified: 2018-08-08
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/pills/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use pills when you want to indicate that a user has selected an object.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Ensure that pills are uniform in size and shape.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications
Use these specifications when you construct pills.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Pills consist of a container, text, and an “x” icon that indicates that the user can remove the pill.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg"" %}

{% figure [caption:"Pill composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-composition.png" width="352px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use body font text when you construct pills. To address space constraints, you can scale pills up to 24px font size and down to 12px font size.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Pill style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-style.png" width="411px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Place 16px of horizontal space and 4px of vertical space between a pill and another component. Use the best top spacing for your particular use case. Left-align pills.

If you group pills together, provide 8px of space below and next to a pill. If you group more than 15 pills together, consider an alternative pattern or contact the Helix team.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Pill spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-spacing.png" width="418px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg"" %}

## States

Pills can exist in *active*, *hover*, *too long*, or *too many* states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Active

The active state is the default state and indicates that a user has made a selection.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Active state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-states-active.png" width="464px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Hover
The hover state indicates that the user can remove the selection.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Hover state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-states-hover.png" width="464px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Too long
Selection values are sometimes very long. For these pills, use a truncation pattern where the maximum length, including ellipses and quotations (if applicable), is 31 characters that are made up of 14 characters on either side and an ellipsis in the middle.

Ensure that you follow the truncation guidelines in the Ellipses section of the text conventions.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Too long state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-too_long.png" width="337px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
