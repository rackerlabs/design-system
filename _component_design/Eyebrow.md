---
title: Eyebrow
parent: Navigation
layout: component
category: Components
usage: >
  Application navigation establishes a user's location within an application and shows the path forward to accomplish a goal. Consistent navigation patterns increase user confidence and efficiency.
preview-image: preview-images/eyebrow.svg
status: stable
resource: true
helix-ui-css: true
helix-ui-javascript: true
last-modified: 2017-08-30
---

{% include toc.html %}

## Introduction


<section class="static-section" markdown="1">

The eyebrow is the top menu bar across all breakpoints within the application frame of a Helix interface. The eyebrow provides access to platform-level services and aggregate information across a user's accounts at Rackspace. The eyebrow pattern is often referred to internally as *pilot nav* or *utility nav*.

### Breakpoints

The eyebrow expands and retracts based on the current user view port.

<div class="hxRow"  markdown="1">
{% column left:"hxCol" %}
{% figure [caption:"Eyebrow breakpoints"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eyebrow-states.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Eyebrow (left side)

The left side of the eyebrow contains the platform dashboard button and the product switcher drop-down menus. The item displayed in the content area and navigation section changes based on the selected state beneath it.

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Clicking the Rackspace® Fanatiguy logo icon opens the global dashboard.
- The product name to the left of the logo shows the currently selected product.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Eyebrow (left side) construction specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/eyebrow-left.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

### Eyebrow (left side) drop-down elements

A drop-down menu appears when the user switches product lines.

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- A user can switch product lines by clicking the product button, then clicking a drop-down element.
- Drop-down elements on the left side provide links to product lines and never include a secondary call to action.
- Drop-down elements on the left side do not have a defined disabled state. The user only sees menu items to which they have access.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Eyebrow (left side) drop-down element specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-left-drop.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Eyebrow (right side)

The right side of the eyebrow menu shows the user name section and platform level services button groups.

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Platform level services are any services that exist across multiple product lines, such as account settings, notifications, and ticketing.
- A section divider separates the user name section and each service button group.
- Service groups
    - User settings
    - Account management
        - Account
        - Billing
    - Support management
        - Messages / notification
        - Tickets
        - Support

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Eyebrow (right side) construction specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/eyebrow-right.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

### Eyebrow (right side) drop-down elements

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Items within the right side of the eyebrow show either a drop-down menu or an off-canvas panel when clicked.
- Drop-downs elements are applied when off-canvas elements are not required or are unimplemented.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Eyebrow (right side) drop-down element specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-right-drop.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>
