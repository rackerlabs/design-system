---
title: Left Navigation
parent: Navigation
layout: component
category: Components
usage: >
  Left navigation establishes a user's location within an application and shows the path forward to accomplish a goal. Consistent navigation patterns increase user confidence and efficiency.
preview-image: preview-images/side-nav.svg
status: stable
resource: true
helix-ui-css: true
helix-ui-javascript: true
last-modified: 2017-12-11
pagelink: https://rackerlabs.github.io/helix-ui/components/navigation/
---

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

Use the left navigation component for web applications, unless there is a firm implementation constraint that requires top navigation.

### Best practices

- The preferred implementation includes only primary and secondary navigation links.
- An alternative, non-preferred implementation includes [tertiary](#tertiary-left-navigation) navigation links.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:""] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/navigation-left.svg"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Specifications

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

- Font: Roboto Regular 16px / 1em
- Color: Gray 400 #D8D8D8
- Text transform: uppercase

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:""] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/navigation-left-color-type.svg"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

- The first primary navigation element begins 60px from the top of the containing `div`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Containing `div` spacing specs"] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/navigation-left-spacing-horizontal.svg"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

- 16px / 1em top and bottom padding for navigation elements

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Vertical spacing between navigation items"] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/navigation-left-spacing-vertical.svg"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Tertiary left navigation

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

If you have a very large information architecture, you can use tertiary navigation elements. However, in most cases we recommend that you compress or sort the information architecture so that only primary and secondary links are needed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Tertiary navigation example"] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/navigation-left-tertiary.svg"/>
{% endfigure %}

{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg hxOffset-4" %}
{% figure [caption:"Tertiary navigation example with specs"] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/navigation-left-tertiary-specs.svg"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>
