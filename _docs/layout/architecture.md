---
title: Application Layers
layout: docs
category: Layout
usage: |
  The Helix design language uses the concept of application layers to identify
  where a product or service is located within the Helix UI application.
preview-image:
resource: false
---

{% include toc.html %}

# Helix-UI Architecture

The Helix design language utilizes the concept of application layers to
designate where a product or service is located within the Helix-UI
Application.

<div class="hxRow"  markdown="1">
{% column left:"hxCol" %}
{% figure [caption:"Application layer framework within the Helix-UI application"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/layout-thesis_v5.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Global Layer

The global layer wraps around the entire Helix-UI and at least some portion of
it is always visible, regardless of what the user is currently viewing. The
global layer is best thought about as a collection of offscreen elements that
will remain hidden until some action is taken by the user. Once an action is
taken the global layer services up contextually sensitive info and workflows
for managing platform(global) services. View the
[global layer](/layout/global-layer) page for more in-depth explanation of the
global layer.

<div class="hxRow"  markdown="1">
{% column left:"hxCol" %}
{% figure [caption:"Conceptual model for flexibility of the Global layer"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/layout-platform-layer.svg)
{% endfigure %}
{% endcolumn %}
</div>

### Examples

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}

-   Selecting the global dashboard toggle will trigger the global dashboard to
    extend from the left, covering the current product layer (Fig 1a).

{% endcolumn %}

{% column right:"hxCol-md-8" %}
{% figure [caption:"Fig 1a - Global dashboard contains varied content types always accessible from within the Helix-UI"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/globaldash.png)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}

-   Selecting a platform service, such as ticketing, will trigger the ticketing
    panel to extend from the right over the canvas (Fig 1b).

{% endcolumn %}

{% column right:"hxCol-md-8" %}
{% figure [caption:"Fig 1b - Ticketing panel containing ticketing information, extended from offcanvas right"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/global-ticketing.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}

-   Interacting with an extended panel can cause the behavior of the panel to
    change as additional content is loaded (Fig 1c).

{% endcolumn %}

{% column right:"hxCol-md-8" %}
{% figure [caption:"Fig 1c - Ticketing panel after selecting a ticket, loads ticket information dynamically into the global ticketing panel."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/global-ticketing-extended.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Product Layer

The product layer resides below the Global layer and provides the content and
navigation for the currently selected product line. It is easiest to understand
the product layer as the view into the currently selected product line; think
FAzure, FAWS, Managed, or Rackspace Cloud. Navigation and content will differ
based on which product line the user is currently viewing.

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}

-   Within the product layer the side navigation will update to display the
    navigation unique to this product line. This is because the products within
    each product line are unique and hence the navigation is as well.

{% endcolumn %}

{% column right:"hxCol-md-8" %}
{% figure [caption:"Conceptual model for location of product layer, below global layer"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/layout-product-layer.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-md-4" %}

-   The currently selected product line is viewable within the eyebrow.

{% endcolumn %}

{% column right:"hxCol-md-8" %}
{% figure [caption:"FAWS product layer with side navigation shown"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/product-faws.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Workflow Layer

The workflow layer sits beneath the Product layer and is best thought of as the
collection of screens a customer views while completing a task (which is
referred to as a workflow in UX). An arbitrary example would be a customer
creating a Rackspace Cloud Server. To accomplish this workflow the customer
selects the Rackspace Cloud Product layer, select the account to which they
need to add the server, selects Cloud Servers from the navigation, and
completes the server creation form. Each of these screens are contained within
the Rackspace Cloud Product layer and can be viewed independently, however by
going through the above process, the user has performed a complete workflow.

<div class="hxRow"  markdown="1">
{% column left:"hxCol" %}
{% figure [caption:"Explanation of layers in the Helix-UI application"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/architecture/layout-workflow-layer.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Further Reading

Now that you have a familiarity with the layers concept utilized within
Helix-UI, you are ready to dig into how each layer interacts.

- [Global Layer](/layout/global-layer)
- [Application Layer](/layout/app-layer)
- [Flexbox Grid](/layout/grid)
- [Content Layouts](/layout/content-layouts)
