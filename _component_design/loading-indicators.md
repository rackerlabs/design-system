---
title: Loading indicators
parent: Processing
layout: component
category: Components
usage: >
  Loading indicators tell the user that their system is actively retrieving data.
preview-image: preview-images/loading.svg
resource: true
status: Stable
last-modified: 2017-10-24
---

{% include toc.html %}

## Introduction

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Use loading indicators when you need provide further visual feedback in cases where a system is making large calls or complex operations in the background.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-use.svg)
{% endfigure %}
{% endcolumn %}

</div>

### Best practice
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Make sure loading indicators are visible and clearly show the user that information is being retrieved.
- Center a loading spinner both vertically and horizontally.
- If loading text is used, always use an ellipses are the word "Loading".

{% endcolumn %}

</div>

## Types of indicators

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Loading indicators can be displayed in the following ways:

### Spinner icon

The spinner icon is a simple circle with a 1 px stroke. It is most commonly used horizontally and vertically centered.

The spinner icon inherits the text color of the element or component in which it is contained.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Spinner icons are centered"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-icon-centered.svg)

{% endfigure %}
{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"The spinner icon uses a 1px stroke width."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-icon-stroke.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

A variety of spinner icon sizes are available.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Spinner icons come in a variety of sizes from small, medium, large, and x-large."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-size.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading spinner with text

When text is contained inside a spinner icon, the spinner matches the size of the text. Therefore, spinner size is measured in *em*.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Loading spinner and text used in a primary button. Note that the loading text does not use an ellipses."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading text

In certain instances, such as key-value pairs, or other list style patterns - a text label can be used without a spinner.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Loading text shown in a key-value pair list.
Note that loading text can occur in multiple instances simultaneously."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text-only.svg)

{% endfigure %}
{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Loading text, when used alone, should always use ellipses. By default, the text uses a type-size of 16px."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text-font.svg)

{% endfigure %}
{% endcolumn %}

</div>

## Animation

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Animation can be used in loading indicators to visually indicate that back-end systems are performing load operations. The following are best practice for animating spinner icons:

- Use a simple animation.
- Rotate icons 360 degrees in 0.8 seconds.
- Always rotate icons clockwise.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Spinner icons rotate 360 degrees in 0.8sec."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-360.svg)

{% endfigure %}
{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Spinner icons must always rotate clockwise."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-rotate-clockwise.svg)

{% endfigure %}
{% endcolumn %}

</div>

## Layout

<div class="hxRow">

Loading indicators are generally centered within their given component. The following are examples of loading indicators inside various components of the UI:

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Loading spinner in dashboard tiles.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-tiles.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Loading spinner in cards.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-cards.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Loading spinner in modals.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-modals.svg)

{% endfigure %}
{% endcolumn %}

</div>
