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
---

<section class="static-section" markdown="1">

## Primary navigation

Use primary navigation for the main sections of an application, or for drop-down categories that organize sections into higher-level groups.

</section>

<section class="static-section" markdown="1">

## Left navigation

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Use the left navigation component for web applications, unless there is a firm implementation constraint that requires top navigation.

- This component can extend to fit any navigation information architecture (IA) by scrolling when the list of navigation items exceeds the screen view height. If there are many options to display, the left navigation is scroll-able so that users have access to all items.
- The preferred implementation includes only primary and secondary navigation links.
- An alternative, non-preferred implementation includes [tertiary](#tertiary-left-navigation) navigation links.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Left navigation color and typeface

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Font: Roboto Regular 16px / 1em
- Color: Gray 400 #D8D8D8
- Text transform: uppercase

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-color-type.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Left navigation spacing

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- The first primary navigation element begins 60px from the top of the containing `div`.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Containing `div` spacing specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-spacing-horizontal.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- 16px / 1em top and bottom padding for navigation elements

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Vertical spacing between navigation items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-spacing-vertical.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

### Tertiary left navigation

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

If you have a very large IA, you can use tertiary navigation elements. However, in most cases we recommend that you compress or sort the IA so that only primary and secondary links are needed.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tertiary navigation example using the MyRack application IA"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-tertiary.svg)
{% endfigure %}

{% figure [caption:"Tertiary navigation example with specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-tertiary-specs.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>