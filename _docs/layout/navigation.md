---
title: Navigation
layout: default
category: Layout
usage: Teaser Text
preview-image: layout/preview-images/navigation.svg
resource: true
---

Navigation establishes a user's location within an application and
shows the path forward to accomplish a goal. Consistent navigation
patterns increase user confidence and efficiency. You can combine
global navigation (using the eyebrow), application navigation (using
side or top navigation), and breadcrumbs.

{% include toc.html %}

# Primary navigation {% include complete.html %}

Use primary navigation for the main sections of an application, or for
drop-down categories that organize sections into higher-level groups.

## Left navigation

<div class="row">
{% column left:"col-md-4" %}

Use the left navigation component for web applications, unless there
is a firm implementation constraint that requires top navigation.

-   This component can extend to fit any navigation information
    architecture (IA) by scrolling when the list of navigation items
    exceeds the screen view height. If there are many options to
    display, the left navigation is scroll-able so that users have
    access to all items.

-   The preferred implementation includes only primary and secondary
    navigation links.

-   An alternative, non-preferred implementation includes
    [tertiary](#tertiary-left-navigation) navigation links.

<!-- {% include note.html content="Helix provides an alternate implementation that -->
<!-- includes [tertiary navigational](#tertiary-left-navigation) elements, -->
<!-- but it is not preferred."%} -->

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Left navigation color and typeface

<div class="row">
{% column left:"col-md-4" %}
- Font: Roboto Regular 16px / 1em
- Color: Gray 400 #D8D8D8
- Text transform: uppercase

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-color-type.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Left navigation spacing
<div class="row">
{% column left:"col-md-4" %}

- The first primary navigation element begins 60px from the top of
  the containing `div`.

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Containing `div` spacing specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-spacing-horizontal.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
<div class="row">
{% column left:"col-md-4" %}
- 16px / 1em top and bottom padding for navigation elements
{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Vertical spacing between navigation items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-spacing-vertical.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

### Tertiary left navigation

<div class="row">
{% column left:"col-md-4" %}

If you have a very large IA, you can use tertiary navigation elements.
However, in most cases we recommend that you compress or sort the IA
so that only primary and secondary links are needed.

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Tertiary navigation example using the MyRack application IA"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-tertiary.svg){:width="100%"}
{% endfigure %}
{% figure [caption:"Tertiary navigation example with specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-tertiary-specs.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Top navigation

<div class="row">
{% column left:"col-md-4" %}

For additional flexibility, you can use top navigation elements.
However, applications that use top navigation do not strictly comply
with the Helix design language. The preferred implementation is [left
navigation](#side-nav).

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Top navigation color and typeface

<div class="row">
{% column left:"col-md-4" %}

- Font: Roboto Bold 16px / 1em
- Color: Gray 200 #e7e7e7
- Letter spacing: 0.05em
- Text transform: uppercase

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-color-type.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Top navigation spacing

<div class="row">
{% column left:"col-md-4" %}

-   Horizontal spacing includes 20px of left margin.

-   Each menu item button has 20px of left and right padding.

    {% include note.html content="The left padding of a drop-down
    element begins at the left border of the parent primary navigation
    item and the right padding begins after the longest text element
    in the drop-down element." %}

-   Limit drop-downs menus to between 3 and 7 elements for ease of
    consumption and comprehension.

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Vertical padding for primary navigation items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-spacing-vertical.svg)
{% endfigure %}
{% endcolumn %}
</div>
<div class="row">
{% column left:"col-md-4" %}

-   The navigation bar extends across 100% of the view width.

-   Navigation wraps inside the navigation bar with 20px / 1.25em
    padding on either side.

-   Padding is applied to each primary navigation item with no space
    in between.

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1" %}
{% figure [caption:"Horizontal padding specs for primary navigation items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-spacing-horizontal.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Top navigation drop-down menu color and typeface

<div class="row">
{% column left:"col-md-4" %}

Drop-down menus display secondary navigation elements below their
primary navigation element.

-   Limit drop-down menus to between 3 and 7 elements for ease of
    consumption and comprehension.

    {% include note.html content="This is not a hard rule to be
    followed without exception. Drop-down menus that contains more
    than 6 elements should prompt you to determine if you can
    rearrange elements into two separate primary groups." %}

-   Font: Roboto Bold 16px

-   Font color: Gray 200 #e7e7e7

-   Text transform: title case

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Drop-down font specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-dropdown-color-type.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Top navigation drop-down element spacing

<div class="row">
{% column left:"col-md-4" %}

-   Make drop-down menus at least the same width as the parent menu
    item, even if that leaves extra space to the right.

    {% include note.html content="Drop-down menus with secondary items
    that have large character counts can be wider than the parent menu
    item." %}

-   The left padding of a drop-down element begins at the left border
    of the parent primary navigation item and the right padding begins
    after the longest text element in the drop-down element.


{% endcolumn %}
{% column right:"col-md-3 col-md-offset-1" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-dropdown-spacing-vertical.svg)
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-3 col-md-offset-1" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-dropdown-spacing-horizontal.svg)
{% endfigure %}
{% endcolumn %}
</div>

# Eyebrow {% include inprogress.html %}

The eyebrow is the top menu bar across all breakpoints within the
application frame of a Helix interface. The eyebrow provides access to
platform-level services and aggregate information across a user's
accounts at Rackspace. The eyebrow pattern is often referred to
internally as *pilot nav* or *utility nav*.

## Breakpoints

The eyebrow expands and retracts based on the current user view port.

<div class="row">
{% column left:"col-md-12" %}
{% figure [caption:"Eyebrow breakpoints"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eyebrow-states.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Eyebrow (left side)

The left side of the eyebrow contains the platform dashboard button
and the product switcher drop-down menus. The item displayed in the
content area and navigation section changes based on the selected
state beneath it.

<div class="row">
{% column left:"col-md-4" %}

-   Clicking the Rackspace® Fanatiguy logo icon opens the global
    dashboard.

-   The product name to the left of the logo shows the currently
    selected product.

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (left side) construction specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/eyebrow-left.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Eyebrow (left side) drop-down elements

A drop-down menu appears when the user switches product lines.

<div class="row">
{% column left:"col-md-4" %}

-   A user can switch product lines by clicking the product button,
    then clicking a drop-down element.

-   Drop-down elements on the left side provide links to product lines
    and never include a secondary call to action.

-   Drop-down elements on the left side do not have a defined disabled
    state. The user only sees menu items to which they have access.

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (left side) drop-down element specs"]
[class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-left-drop.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Eyebrow (right side)

The right side of the eyebrow menu shows the user name section and
platform level services button groups.

<div class="row">
{% column left:"col-md-4" %}

-   Platform level services are any services that exist across
    multiple product lines, such as account settings, notifications,
    and ticketing.

-   A section divider separates the user name section and each service
    button group.

-   Service groups

    -   User settings

    -   Account management

        - Account
        - Billing

    -   Support management

        - Messages / notification
        - Tickets
        - Support

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (right side) construction specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/eyebrow-right.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Eyebrow (right side) drop-down elements

<div class="row">
{% column left:"col-md-4" %}

-   Items within the right side of the eyebrow show either a drop-down
    menu or an off-canvas panel when clicked.

-   Drop-downs elements are applied when off-canvas elements are not
    required or are unimplemented.

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (right side) drop-down element specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-right-drop.svg)
{% endfigure %}
{% endcolumn %}
</div>


<!--
# Breadcrumbs {% include complete.html %}

<div class="row">
{% column left:"col-md-6" %}
{% figure [caption:"Default"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-breadcrumbs.svg)
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-6" %}
{% figure [caption:"Hover"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-breadcrumbs-hover.svg)
{% endfigure %}
{% endcolumn %}
</div>
-->
