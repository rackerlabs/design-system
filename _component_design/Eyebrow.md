---
title: Eyebrow
parent: Navigation
layout: component
category: Components
usage: >
  The eyebrow is the top menu bar across all breakpoints within the application frame of a Helix interface. The eyebrow provides access to platform-level services and aggregate information across a user's accounts at Rackspace.
preview-image: preview-images/eyebrow.svg
status: stable
resource: true
helix-ui-css: true
helix-ui-javascript: true
last-modified: 2017-08-30
---

<!-- {% include toc.html %} commented out due to the size of the doc -->


<section class="static-section" markdown="1">

## Introduction


<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- Use the eyebrow nav bar to provide access to globally available features, such as account settings, billing, tickets, user management and so on.
- The eyebrow must not be used for navigating to product features like infrastructure management.

### Best practice

- The <a href="https://one.rackspace.com/display/reach/Pilot+Shared+Navigation">Pilot navigation API</a> is highly recommended for use in UIs which will be presented along side customer facing applications, such as MyRackspace, FAWS, or the Rackspace Cloud Control Panel.
- For UIs which will not be integrated with our customer facing product portfolio, the  guidelines in this article can be used to construct eyebrow navigation.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"The eyebrow component"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/eyebrow-hero.png){:width="1200px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Nav bar

<div class="hxRow"  markdown="1">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Nav bar specifications

{% figure [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/nav-bar.png){:width="936px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">


## Logo

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Logo structure

The logo can only be clickable when the application has a default landing page, such as a dashboard or overview.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Logo states when the logo is clickable for navigation"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/logo-structure.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Logo states

- The logo can only be interacted with and clicked when the application has a default landing page, such as a dashboard or overview.
- If the application has no landing page, then the logo only receives the detault state.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Logo states when the logo is clickable for navigation"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/logo-states.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Icon nav item

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Structure

- Nav items fill the height of the nav bar, and have 16 pixels of left and right padding.
- The icon is 16 pixels, centered inside an 18 pixel space to facilitate better alignment for icons with different width and height ratios.
- Icon nav items can spawn drop-down menus or just navigate the user directly to a new area.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Nav item construction specifications"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/nav-icon-structure.png){:width="620px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### States

#### Hover & open
- Hover state is also used as the “Open” state for nav items that spawn a dropdown.

#### Disabled items

- Disabled items receive the cursor: not-allowed style, to give an additional indicator that the user cannot access the hovered item.
- Tooltips for disabled items are placed below the nav bar and must not go off screen.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Nav item states"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/nav-icon-states.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Drop-down nav

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Structure

- Nav items fill the height of the nav bar, and have 16 pixels of left and right padding.
- The icon is 16 pixels, centered inside an 18 pixel space to facilitate better alignment for icons with different width and height ratios.
- Icon nav items can spawn drop-down menus or just navigate the user directly to a new area.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Username construction           "] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/drop-down-structure.png){:width="620px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### States

#### Hover & open

- Hover state is also used as the “Open” state for nav items that spawn a dropdown.

#### Disabled state

- Disabled state receives the cursor: not-allowed style, to give an additional indicator that the user cannot access the hovered item.
- Tooltips for disabled drop-downs are placed below the nav bar and must not go off screen.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Drop-down states"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/drop-down-states.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Drop-down menu

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- Use when the eyebrow item offers navigation to more than one destination.
- Drop-down menus can be safely used with Icon Nav Items.
- Use drop-down menu items as direct links to any secondary sections of the destination


### Best practices

- Avoid long menu item labels.
- Do not populate menus with dynamically generated text as it may negatively affect label length.
- Try to avoid using more than seven menu items in a drop-down menu.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Username dropdown"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/drop-down-menu.png){:width="620px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Structure

- The drop-down menu has the same background color as the nav bar that spawned it.  In this case, the background is black: `#000000` (Gray 1000).
- Menu’s can be divided into sections to enhance readability.
- The top section has 20 pixels of space on top, with 16 pixels of space on bottom.
- The bottom section has 16 pixels of space on top, and 20 pixels on bottom.
- Any sections between top and bottom have 16 pixels of space on both top and bottom.
- The minimum width of the menu is the width of the parent nav item.
- The max-width is 280 pixels. At 280 pixels, menu item labels should truncate with the ellipses.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Username states"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/drop-down-menu-structure.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Drop-down menu item

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Structure

- To achieve 20 pixels of space around the edge of the entire menu, each menu item has 20 pixels of left and right padding.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Default menu item specifications"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/drop-down-menu-item-structure.png){:width="620px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### States

#### Selected items
- When the user has navigated to a specific section using the dropdown menu, the menu item for that section receives the selected state.
- Selected state and hover share the same specifications, meaning that a selected nav item has no hover state.

#### Disabled items
- Disabled items receive the cursor: not-allowed style, to give an additional indicator that the user cannot access the hovered item.
- Tooltips for disabled items are placed to the left or right of the item and must not go off screen.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Menu item states"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/drop-down-menu-item-states.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

## Drop-down menu section

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Specifications

- Use menu sections when several items have an affinity, or point to sub-sections of a larger feature.
- The section title can be used for additional context about the grouped items

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Menu section specificationsa"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/drop-down-menu-section.png){:width="620px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Key-value menu item

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Specifications

- Use key-value items when there is a need to present important info at a high level, such as account number in the account dropdown, or timezone in the user dropdown.
- Key-value items in the menu are not navigable, meaning that they cannot be clicked on to navigate, and they do not feature interactive states.
- Key value items should be selectable using the cursor, so that the user may copy and paste the info, such as account number.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Key-value item specifications"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/kev-value-menu.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>
<section class="static-section" markdown="1">

## CTA menu item

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Structure

- When a single important action is presented in a drop-down menu, it is always positioned at the bottom of the menu.
- The button is standard height but fills the available width of the container, allowing for 20 pixels of space on the left and right.
- The most common use case for this is the log out button, which exists under the user dropdown in the Pilot navigation API.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Call-to-action specifications"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/cta-menu-structure.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
    
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### States

- The call-to-action button follows the standard button specs, with the exception of colors used for each state.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Call-to-action states"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/navigation/eyebrow/cta-menu-states.png){:width="620px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>
