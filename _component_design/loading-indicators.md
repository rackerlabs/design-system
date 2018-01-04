---
title: Loading Indicators
parent: Processing
layout: component
category: Components
usage: >
  Loading indicators tell the user when their system is actively retrieving data.
preview-image: preview-images/loading.svg
resource: true
status: stable
last-modified: 2017-10-24
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Use loading indicators when you need to provide further visual feedback, such as when a system is making large calls or complex operations in the background.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/loading-hero.png){:width="1440px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

### Best practice

- Make sure loading indicators are visible and clearly show the user that information is being retrieved.
- Vertically and horizontally center a loading spinner.
- If loading text is used, always use an ellipses after the word "Loading".

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Types of indicators

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Loading indicators can be displayed in the following ways:

### Spinner icon

The spinner icon is a simple circle with a 1px stroke.

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

</div>

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

A variety of spinner icon sizes are available.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Spinner icons come in a variety of sizes from small, medium, large, and x-large."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-size.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading spinner with text

When text is contained inside a spinner icon, the spinner matches the size of the text. Therefore, spinner size is measured in *em*.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Loading spinner and text used in a primary button. Note that the loading text does not use an ellipses."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading text

In certain instances, such as key-value pairs or other list style patterns, you can use a text label without a spinner.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Loading text shown in a key-value pair list. Note that loading text can occur in multiple instances simultaneously."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text-only.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Always use an ellipses when using loading text alone. By default, the text uses a type-size of 16px."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text-font.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Animation

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Animation can be used in loading indicators to visually indicate that back-end systems are performing load operations. The following are best practice for animating spinner icons:

- Use a simple animation.
- Rotate icons 360 degrees in 0.8 seconds.
- Always rotate icons clockwise.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Spinner icons rotate 360 degrees in 0.8s."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-360.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Spinner icons must always rotate clockwise."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-rotate-clockwise.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Layout

<div class="hxRow"  markdown="1">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

We recommend centering the loading indicators within the component. The following are examples of loading indicators inside various components of the UI:

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Loading spinner in dashboard tiles."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-tiles.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Loading spinner in cards."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-cards.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Loading spinner in modals."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-modals.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
