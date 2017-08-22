---
title: Page Layouts
layout: default
category: Layout
usage: Teaser Text
preview-image: layout/preview-images/page-layout.svg
resource: true
---

The layout for all Rackspace control panels consists of 4 parts: the Account
Navigation Bar, the Main Navigation, the content area, and the footer.

{% include toc.html %}

# Base Layouts

<div class="row">
{% column left:"col-md-4" %}
-   The Account Navigation Bar is used to navigate between applications and to
  manage roles and preferences on both the user and the account level

-   The Main Navigation used to navigate between the main sections of the
  application the user is currently in. Make sure your application consistently
  uses either a Top Navigation or a Side Navigation, but never both. You may
  use dropdown for subcategories, but be sure to only use one sub-level.

-   The Content Area is used for your application's main data and interactions.
  Make sure you always use Breadcrumbs to help users orient themselves and
  navigate within your application.

-   The footer is used for legal information, application news, and feedback
  links.

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Choosing Top Navigation provides more horizontal real estate for
your content area, but can limit the number of navigation items."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-navigation-top.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Choosing Left Navigation offers more flexibility for larger and
more expansive menus, but constricts the horizontal real estate for your
content area."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-navigation-side.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

# Content Areas

Regardless of whether you use a top or side navigation, the content area should
be built using a 12 Column Grid. See [grid](/layout/grid) for more details.

## Full Width Content Area

<div class="row">
{% column left:"col-md-4" %}
- Navigation is not a part of the 12 Column Grid.
- Content Area background color: Gray 25, #FAFAFA
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Full Width with Top Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-content-full-top-nav.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Full Width with Side Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-content-full-side-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Content Area with Right Side Rail

### Main Content Area

- 9 columns
- Background color: Gray 25, #FAFAFA

### Right Side Rail

<div class="row">
{% column left:"col-md-4" %}
- 3 columns
- Background color: Gray 100, #EEEEEE
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Right Side Rail with Top Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-right-side-rail-top-nav.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Right Side Rail with Side Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-right-side-rail-side-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Content Area with Left Side Rail

### Main Content Area

- 9 columns
- Background color: Gray 25, #FAFAFA

### Left Side Rail

<div class="row">
{% column left:"col-md-4" %}
- 3 columns
- Background color: Gray 100, #EEEEEE
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Left Side Rail with Top Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-left-side-rail-top-nav.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Left Side Rail with Side Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-left-side-rail-side-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Dashboard Content Area

### Module Content Area

<div class="row">
{% column left:"col-md-4" %}
- 4 columns each
- Canvas Height: variable
- Background color: Gray 25, #FAFAFA
- Canvas color: Gray 300, #E0E0E0
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Dashboard Layout with Top Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-dashboard-top-nav.svg){:width="100%"}
{% endfigure %}
<!--
{% figure [caption:"Dashboard layout with Side Navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-dashboard-side.svg){:width="100%"}
{% endfigure %}
-->
{% endcolumn %}
</div>
