---
title: Page layouts
layout: docs
category: Layout
usage: |
  The layout for all Rackspace control panels consists of 4 parts: the account
  navigation bar, the main navigation, the content area, and the footer.
preview-image: layout/preview-images/page-layout.svg
resource: true
---

{% include toc.html %}

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Base layouts
- Use the utility navigation (nav) to navigate between applications, manage roles, and manage preferences on both the user and the account level.

- Use the main navigation to navigate between the main sections of the application. Make sure your application consistently uses either a top navigation or a left navigation, but never both. You can use dropdown for subcategories, but be sure to only use one sub-level.

- Use the content area for the application's main data and interactions. Make sure to always use breadcrumbs to help users orient themselves and navigate the application.

- Use the footer for legal information, application news, and feedback links.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Using top navigation provides more horizontal real estate for
your content area. However, this can limit the number of navigation items."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-navigation-top.png)
{% endfigure %}

{% figure [caption:"Using left navigation offers more flexibility for larger and
more expansive menus. However, this constricts the horizontal real estate for your
content area."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-navigation-side.png){:width="800px"}
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Content areas

Build the content area using a 12 Column Grid. See [grid](/layout/grid) for more details.

#### Full width content area
- Navigation is not a part of the 12 Column Grid.
- Content area background color: Gray 25, `#FAFAFA`

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Full width with top navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-content-full-top-nav.png){:width="800px"}
{% endfigure %}

{% figure [caption:"Full width with left navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-content-full-side-nav.png){:width="800px"}
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Content area with right side rail

#### Main content area

- 9 columns
- Background color: Gray 25, `#FAFAFA`

#### Right side rail

- 3 columns
- Background color: Gray 100, `#EEEEEE`

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Right side rail with top navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-right-side-rail-top-nav.png){:width="800px"}
{% endfigure %}

{% figure [caption:"Right side rail with left navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-right-side-rail-side-nav.png){:width="800px"}
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Content area with left side rail

#### Main content area

- 9 columns
- Background color: Gray 25, `#FAFAFA`

#### Left side rail
- 3 columns
- Background color: Gray 100, `#EEEEEE`

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Left side rail with top navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-left-side-rail-top-nav.png){:width="800px"}
{% endfigure %}

{% figure [caption:"Left side rail with left navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-left-side-rail-side-nav.png){:width="800px"}
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Dual panel content area

- Dual layout enables two variable width panels, entitled primary and secondary, to operate adjacent to one another. User selections or interactions with the primary panel facilate information displayed on secondary panels. Although data is correlated between each panel, panels can scroll independently. Panel widths are defined through application implementation and cannot be adjusted manually by the user.
  - Panels are separated by a 1px solid line. Be sure to use our default canvass color `#fafafa`as your base.
  - Use the following suggested column breakdowns for dual panel implementation. These columns can be adjusted based on the density of information displaying so each panel is optimized for readability. For additional information see the [helix-ui source code](https://rackerlabs.github.io/helix-ui/components/layouts/horizontal-layout-template.html)

#### Primary panel

- 7 columns
- Background color: Gray 25, `#FAFAFA`

#### Secondary panel
- 5 columns
- Background color: Gray 25, `#FAFAFA`
- Border left: 1px solid `#e0e0e0`

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Dual panel with top navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/dual-panel-topnav.png){:width="800px"}
{% endfigure %}

{% figure [caption:"Dual panel with left navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/dual-panel-sidenav.png){:width="800px"}
{% endfigure %}
{% endcolumn %}
</div>
</section>


<section class="static-section"  markdown="1">


<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Dashboard content area

#### Module content area
- 4 columns each
- Canvas Height: variable
- Background color: Gray 25, `#FAFAFA`
- Canvas color: Gray 300, `#E0E0E0`

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Dashboard layout with top navigation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/layout/page-layouts/layout-dashboard-top-nav.png){:width="800px"}
{% endfigure %}
<!--
{% figure [caption:"Dashboard layout with side navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/layout-dashboard-side.png)
{% endfigure %}
-->
{% endcolumn %}
</div>
</section>