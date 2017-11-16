---
title: Global Layer
layout: docs
category: Layout
usage: |
  The global layer is the application layer that allows a user to access
  global features of the UI.
preview-image:
resource: false
---

{% include toc.html %}

# Global Layer

The global layer refers to the application layer that enables the user to
access globally available features like Support Tickets, Notifications, and
Billing within any Helix-UI design. These include three core components-Eyebrow
(Utility Nav), the Global dashboard, and Off canvas panels. Each of these
elements are part of the Pilot Navigation header API. To understand the global
layer better, we suggest trying the following
[demo prototype](http://design.rax.io/mockups/designs/Helix/global-layer/prototypes/v-0.5/).

## When to Use

The Global layer should be included on all applications using the Helix-UI
language. This global layer provides the base configuration of a Helix
application. A helix application can consider implementing their own Global
layer (as a meaningful interaction model) or, ideally integrate with
[Pilot](https://one.rackspace.com/pages/viewpage.action?pageId=185744979)
to automatically get platform interactivity and allow for the use of platform
services that extend across multiple product lines such as Ticketing or
Notifications.

## Eyebrow (Utility Nav)

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}
The eyebrow is more commonly referred to as the Pilot API Nav Header within the
application frame because it provides for easy switching between product lines
and platform level services. Platform level services are any services that
exist across multiple product lines. Examples include Account Settings,
Notifications, and Ticketing. For detailed specs, see the
[navigation page](/layout/navigation#eyebrow).

-   Extends across the top of the entire Helix-UI and is always visible

-   Contains links to platform level services, account management,
    product picker, and the [global dashboard](#global).

-   Composed of 5 breakpoints that adapt to the users device and window size

    - Wall: 90em ≤ x
    - Desktop: 75em ≤ x < 90em
    - Laptop: 64em ≤ x < 75em
    - Palm: 40em ≤ x < 64em
    - Wrist: 0em ≤ x < 40em

{% endcolumn %}
{% column right:"hxCol-md-8" %}
{% figure [caption:"Eyebrow zones"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eyebrow.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Eyebrow breakpoints"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eyebrow-states.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

### Eyebrow (left side)
<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}
The left side of the eyebrow is comprised of the platform dashboard button and
product switcher dropdowns. The item currently displayed in the content area +
navigation section is reflected via the selected state beneath it.

-   The Rackspace® logo serves as a button to trigger the
    [global dashboard](#global)

-   Product name to the left of the logo serves as wayfinding to show the
    currently selected product.

{% endcolumn %}
{% column right:"hxCol-md-8" %}
{% figure [caption:"Eyebrow (leftside) zones"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-left.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

### Eyebrow (right side)

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}
The right side of the eyebrow menu is comprised of the user name section and
platform level services button groups.

-   A platform service is any service that extends across multiple product
    lines, such as
    - Billing
    - Notifications
    - Ticketing
    - User Settings

-   When selected a platform service triggers an offcanvas right panel.

{% endcolumn %}
{% column right:"hxCol-md-8" %}
{% figure [caption:"Eyebrow (rightside) zones"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-right.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Off Canvas
<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}
Offcanvas panels are panels that serve from the global layer. Panels can
either be offcanvas left or right dependent upon the type of content being
displayed and are triggered via interacting with the global eyebrow. Each panel
has three states: Hidden, Toggled, and Extended.
{% endcolumn %}
{% column right:"hxCol-md-8" %}
{% figure [caption:"Offcanvas panel right - toggled"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/offcanvas-right-toggled.svg)
{% endfigure %}

{% figure [caption:"Ticketing right panel example"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/offcanvas-right-example.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Global Dashboard

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}
The Global Dashboard is an special offcanvas element that is toggled via the
Global DB button (Rackspace logo), the left most element on the Global eyebrow.
When toggled the dashboard will extend over the product and workflow layers.
{% endcolumn %}
{% column right:"hxCol-md-8" %}
{% figure [caption:"Global Dashboard - Hidden"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/globaldash-base.svg)
{% endfigure %}

{% figure [caption:"Global Dashboard - Toggled"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/globaldash-extended-full.svg)
{% endfigure %}
{% endcolumn %}
</div>
