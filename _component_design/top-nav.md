---
title: Top Navigation
parent: Navigation
layout: component
category: Components
usage: >
  Top navigation is a variation of navigation that is used in lieu of left navigation. It establishes a user's location within an application and shows the path forward to accomplish a goal. Consistent navigation patterns increase user confidence and efficiency.
preview-image: preview-images/top-nav.svg
status: stable
resource: true
helix-ui-css: true
helix-ui-javascript: true
last-modified: 2017-12-11
---

{% include toc.html %}


<section class="static-section" markdown="1">

## Top navigation

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

For additional flexibility, you can use top navigation elements. However, applications that use top navigation do not strictly comply with the Helix design language. The preferred implementation is [left navigation](#left-navigation).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

### Top navigation color and typeface

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Font: Roboto Bold 16px / 1em
- Color: Gray 200 #e7e7e7
- Letter spacing: 0.05em
- Text transform: uppercase

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-color-type.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

### Top navigation spacing

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

-   Horizontal spacing includes 20px of left margin.

-   Each menu item button has 20px of left and right padding.

    {% include note.html content="The left padding of a drop-down element begins at the left border of the parent primary navigation item and the right padding begins after the longest text element in the drop-down element." %}

-   Limit drop-downs menus to between 3 and 7 elements for ease of consumption and comprehension.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Vertical padding for primary navigation items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-spacing-vertical.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- The navigation bar extends across 100% of the view width.
- Navigation wraps inside the navigation bar with 20px (1.25 em) padding on either side.
- Padding is applied to each primary navigation item with no space in between.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Horizontal padding specs for primary navigation items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-spacing-horizontal.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

### Top navigation drop-down menu color and typeface

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Drop-down menus display secondary navigation elements below their primary navigation element.

-   Limit drop-down menus to between 3 and 7 elements for ease of consumption and comprehension.

    {% include note.html content="This is not a hard rule to be followed without exception. Drop-down menus that contains more than 6 elements should prompt you to determine if you can rearrange elements into two separate primary groups." %}

-   Font: Roboto Bold 16px

-   Font color: Gray 200 #e7e7e7

-   Text transform: title case

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Drop-down font specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-dropdown-color-type.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Top navigation drop-down element spacing

<div class="hxRow"  markdown="1">
{% column left:"hxCol" %}

-   Make drop-down menus at least the same width as the parent menu item, even if that leaves extra space to the right.

    {% include note.html content="Drop-down menus with secondary items that have large character counts can be wider than the parent menu item." %}

-   The left padding of a drop-down element begins at the left border of the parent primary navigation item and the right padding begins after the longest text element in the drop-down element.


{% endcolumn %}

{% column right:"hxCol" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-dropdown-spacing-vertical.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-dropdown-spacing-horizontal.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>