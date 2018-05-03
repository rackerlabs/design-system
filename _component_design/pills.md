---
title: Pills
parent: Content Areas
secondary: Editing
layout: component
category: Components
usage: >
  A pill is a small, oval-shaped component that indicates selection. Pills are often associated with tags, however, you can also apply pills to keyword search terms, input text search, or the name of a server selected by the user. You can represent any selectable object with a pill.
preview-image: preview-images/pills.svg
resource: true
status: Stable
last-modified: 2018-05-03
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to Use

Use pills when you want to indicate that a user has selected an object.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

When using pills, ensure they are uniform in size, shape, and application.

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

Pills consist of a container, text, and an “x” icon that indicates the user can remove the pill.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg"" %}

{% figure [caption:"Pill composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-composition.png" width="343px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Pills can be larger or smaller than body font. In general, use body font.

Use these redline specifications when you construct pills.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Pill style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-style.png" width="417px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Place 16px of horizontal space and 4px of vertical space between a pill an another component. Use the best top spacing for your particular use case.

Unless you have a reason, justify pills to the left.

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

Pills can exist in active, hover, too many, or too long states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Active
The active state is the default state, and indicates that a user has made a selection.

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
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-states-hover.png" width="463px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Too long
Sometimes selection values can be very long. For these pills, use a truncation pattern where the maximum length including ellipses and quotations (if applicable) is 31 characters – 14 characters on either side, and an ellipses in the middle.

Ensure you follow the truncation guidelines in the Ellipses section of the Text Conventions.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Too long state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/pills/pills-states-toolong.png" width="337px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
