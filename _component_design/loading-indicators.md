---
title: Loading indicators
parent: Processing
layout: component
category: Components
usage: >
  Loading indicators tell the user that their system is actively retrieving data.
preview-image: preview-images/loading.svg
resource: true
status: unknown
last-modified: 2017-10-24
---

{% include toc.html %}

## Introduction
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use
{: .hxSubSectionTitle}

Use loading indicators when you need to give the user visual feedback that the system is retrieving the content to be displayed.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-use.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

### Best practice
{: .hxSubSectionTitle}

- Make sure loading indicators are visible and clearly show the user that information is being retrieved.

- Center loading spinners both vertically and horizontally.

- If loading text is used, always use an ellipses are the word "Loading".

### Problems being solved
{: .hxSubSectionTitle}
Loading indicators provide further visual feedback in cases where a system is making large calls or complex operations in the background.

{% endcolumn %}

</div>

## Types of indicators
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Loading indicators can be displayed in the following ways:


### Spinner icon
{: .hxSubSectionTitle}

The spinner icon is a simple stroked circle. It is most commonly used horizontally and vertically centered.

For color, the spinner icon inherits the text color of the element or component in which it is contained.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-icon.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

A variety of spinner icon sizes are available to best suit the use case.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-size.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading spinner with text
{: .hxSubSectionTitle}

When text is contained inside a spinner icon, the spinner matches the size of the text. Therefore, spinner size is measured in *em*.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text.svg)

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading text

In certain instances, such as key-value pairs, or other list style patterns - a text label can be used without a spinner.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-text-only.svg)

{% endfigure %}
{% endcolumn %}

</div>

## Animation
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Animation can be used in loading indicators to reinforce that back-end systems are performing load operations. The following are best practice for spinner icon animations:

- Use a simple animation.
- Rotate icons 360 degrees in 0.8 seconds.
- Always rotate icons clockwise.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-animation.svg)

{% endfigure %}
{% endcolumn %}

</div>

## Layout
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Loading indicators are generally centered within their given component. The following are examples of how loading indicators inside various components of the UI:

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/processing/loading-indicator/spinner-layout.svg)

{% endfigure %}
{% endcolumn %}

</div>
