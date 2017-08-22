---
title: Navigation
layout: default
category: Layout
usage: Teaser Text
preview-image: layout/preview-images/navigation.svg
resource: true
---

Navigation establishes where the user is in an application and provides a path
to complete tasks. Consistent navigation patterns allow the user to complete
tasks more efficiently and confidently. Rackspace applications may utilize a
combination of eyebrow navigation, either a top or side navigation, and
breadcrumbs.

{% include toc.html %}

# Primary Navigation {% include complete.html %}

The primary navigation is used for the main sections of the application or for
dropdown categories that organize sections into higher level groups.

## Left Navigation

<div class="row">
{% column left:"col-md-4" %}
The Left Navigation component is used on all web applications that desire to
implement a highly compliant version of the Helix Design Language.

-   Can extend to fit any navigation IA via scrolling when the list of
    navigational items exceeds the screen view-height.

-   Preferred implementation includes only primary and secondary navigational
    links.

{% include note.html content="A less preferred implementation that includes [tertiary navigational](#tertiary-left-navigation) elements is also provided."%}

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Left Navigation Color and Typeface

<div class="row">
{% column left:"col-md-4" %}
- Font: Roboto Regular 16px / 1em
- Color: Gray 400 #D8D8D8
- Text Transform: Uppercase

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-color-type.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Left Navigation Spacing
<div class="row">
{% column left:"col-md-4" %}
- First primary navigational element begins 60px from top of containing div.

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Containing div spacing specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-spacing-horizontal.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
<div class="row">
{% column left:"col-md-4" %}
- 16px / 1em top and bottom padding for navigational elements

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Vertical spacing between navigational items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-left-spacing-vertical.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

### Tertiary Left Navigation

<div class="row">
{% column left:"col-md-4" %}
This variation is used when a UI requires tertiary navigational element due to
the size of the IA for the site. In **most cases** it is preferable to compress
or sort the IA so that only primary and secondary links appear in the left
navigation element.
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

## Top Navigation

<div class="row">
{% column left:"col-md-4" %}
Top navigation is used on all web applications that desire to implement the
Helix Design Language but without strict compliance. This navigation variation
exists to allow for flexible implementations, however the preferred navigation
for highly compliant Helix applications is the [left navigation](#side-nav).
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Top Navigation Color and Typeface

<div class="row">
{% column left:"col-md-4" %}
- font: Roboto Bold 16px / 1em
- font-color: Gray 200 #e7e7e7
- letter-spacing: 0.05em
- text-transform: Uppercase

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-color-type.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Top Navigation Spacing

<div class="row">
{% column left:"col-md-4" %}
-   Horizontal spacing includes 20px left margin

-   Each menu item button has 20px left and right padding

    {% include note.html content="Dropdown padding left begins at the left
    border of the parent primary navigational item and padding right begins
    after the longest textual element in the dropdown element." %}

-   Dropdowns should strive to be limited to between 3 — 7 elements for ease of
    consumption and parsability by our users.

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Vertical padding for primary navigational items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-spacing-vertical.svg)
{% endfigure %}
{% endcolumn %}
</div>
<div class="row">
{% column left:"col-md-4" %}
-   Navigational bar extends across 100% of view width

-   Navigation is wrapped inside navigational bar with 20px / 1.25em padding on
    either side

-   Padding is applied to each Primary nav item with no space between

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1" %}
{% figure [caption:"Horizontal padding specs for primary navigational items"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-top-spacing-horizontal.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Top Navigation Drop-down Menu Color and Typeface

<div class="row">
{% column left:"col-md-4" %}
Drop-down menus display secondary navigational elements below their primary
navigational element.

-   Dropdowns should strive to be between 3 — 7 elements for ease of
    consumption and parsability.

    {% include note.html content="This is not a hard rule to be followed
    without exception. However, drop-downs that contains more than 6 elements
    should be closely looked at from an IA lens to see if the elements could be
    rearranged into two separate primary groups." %}

-   font: Roboto Bold 16px

-   font-color: Gray 200 #e7e7e7

-   text-transform: Title Case

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Drop-down font specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/navigation-dropdown-color-type.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Top Navigation Drop-down Spacing

<div class="row">
{% column left:"col-md-4" %}
-   Drop down menus should be **at least** the same width as the parent menu
    item. Even if that leaves extra space to the right.

    {% include note.html content="Drop-down menus whose secondary items have
    large character counts can be wider than the parent menu item. This is
    ok." %}

-   Drop-down padding left begins at the left border of the parent primary
    navigational item and padding right begins after the longest textual
    element in the dropdown element.

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

The eyebrow sits as the top most menu bar across all breakpoints within the
Application Frame of a Helix interface. It provides access to platform level
services as well as aggregate information across a users accounts at Rackspace.
The eyebrow pattern is often referred to internally by the project name "Pilot
Nav" or by the function it serves "Utility Nav".

## Breakpoints

The eyebrow is the top most menu bar within a Helix UI. Visual functionality
expands and retracts based on the current user viewport.
<div class="row">
{% column left:"col-md-12" %}
{% figure [caption:"Eyebrow Breakpoints"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eyebrow-states.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Eyebrow (left side)
The left side of the eyebrow is comprised of the platform dashboard button and
product switcher drop-downs. The item currently displayed in the content area
and navigation section is reflected via the selected state beneath it.

<div class="row">
{% column left:"col-md-4" %}
-   The Rackspace® logo serves as a button to trigger the global dashboard.

-   Product name to the left of the logo serves as wayfinding to show the
    currently selected product.

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (leftside) construction specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/eyebrow-left.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Eyebrow (left side) Dropdowns

A dropdown is presented when the user switches product lines.
<div class="row">
{% column left:"col-md-4" %}
-   Switching product lines is triggered via clicking the Product Button and
    displays a dropdown element for selection

-   Leftside dropdowns provide links to product lines and NEVER include a
    secondary CTA

-   Leftside dropdowns do not have a defined disabled state. Only menu items
    to which the currently logged in user has access will appear

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (leftside) dropdown specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-left-drop.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Eyebrow (right side)

The right side of the eyebrow menu is comprised of the user name section and
platform level services button groups.
<div class="row">
{% column left:"col-md-4" %}

-   Platform level services are any services that exist across multiple product
    lines. Ex: Account Settings, Notifications, Ticketing, etc.

-   The user name section and each service button group is separated by a
    section divider

-   Service groups

    -   User Settings

    -   Account Management

        - Account
        - Billing

    -   Support Management

        - Messages / Notification
        - Tickets
        - Support

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (rightside) construction specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/global-layer/eyebrow-right.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Eyebrow (right side) Dropdowns

<div class="row">
{% column left:"col-md-4" %}

-   Items within the right-side of the eyebrow produce either a dropdown or
    display an off-canvas panel onClick

-   Dropdowns are applied where off-canvas elements are not required or have
    not yet been implemented

{% endcolumn %}
{% column right:"col-md-offset-1 col-md-7" %}
{% figure [caption:"Eyebrow (rightside) dropdown specs"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/eye-right-drop.svg)
{% endfigure %}
{% endcolumn %}
</div>

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
