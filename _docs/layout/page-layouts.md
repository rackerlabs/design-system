---
title: Page layouts
layout: default
category: Layout
usage: Teaser Text
preview-image: layout/preview-images/page-layout.svg
resource: true
---

The layout for all Rackspace control panels consists of 4 parts: the account
navigation bar, the main navigation, the content area, and the footer.

{% include toc.html %}

# Base layouts

<div class="row">
{% column left:"col-md-4" %}
- Use the account navigation bar to navigate between applications,
  manage roles, and manage preferences on both the user and the account
  level.

- Use the main navigation to navigate between the main sections of the
  application. Make sure your application consistently
  uses either a top navigation or a side navigation, but never both. You can
  use dropdown for subcategories, but be sure to only use one sub-level.

- Use the content area for the application's main data and interactions.
  Make sure you always use breadcrumbs to help users orient themselves and
  navigate the application.

- Use the footer for legal information, application news, and feedback
  links.

{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Using top navigation provides more horizontal real estate for
your content area. However, this can limit the number of navigation items."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-navigation-top.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Using left navigation offers more flexibility for larger and
more expansive menus. However, this constricts the horizontal real estate for your
content area."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-navigation-side.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

# Content areas

Build the content area using a 12 Column Grid. See [grid](/layout/grid) for more details.

## Full Width Content Area

<div class="row">
{% column left:"col-md-4" %}
- Navigation is not a part of the 12 Column Grid.
- Content area background color: Gray 25, #FAFAFA
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Full width with top navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-content-full-top-nav.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Full width with side navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-content-full-side-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Content area with right side rail

### Main content area

- 9 columns
- Background color: Gray 25, #FAFAFA

### Right side rail

<div class="row">
{% column left:"col-md-4" %}
- 3 columns
- Background color: Gray 100, #EEEEEE
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Right side rail with top navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-right-side-rail-top-nav.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Right side rail with side navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-right-side-rail-side-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Content area with left side rail

### Main content area

- 9 columns
- Background color: Gray 25, #FAFAFA

### Left side rail

<div class="row">
{% column left:"col-md-4" %}
- 3 columns
- Background color: Gray 100, #EEEEEE
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Left side rail with top navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-left-side-rail-top-nav.svg){:width="100%"}
{% endfigure %}

{% figure [caption:"Left side rail with side navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-left-side-rail-side-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Dashboard content area

### Module content area

<div class="row">
{% column left:"col-md-4" %}
- 4 columns each
- Canvas Height: variable
- Background color: Gray 25, #FAFAFA
- Canvas color: Gray 300, #E0E0E0
{% endcolumn %}
{% column right:"col-md-8" %}
{% figure [caption:"Dashboard layout with top navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-dashboard-top-nav.svg){:width="100%"}
{% endfigure %}
<!--
{% figure [caption:"Dashboard layout with side navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-dashboard-side.svg){:width="100%"}
{% endfigure %}
-->
{% endcolumn %}
</div>
