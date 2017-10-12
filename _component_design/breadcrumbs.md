---
title: Breadcrumbs
parent: Navigation
layout: component
category: Components
usage: >
  Breadcrumbs are an inline visual representation of page relationships and hierarchy. They provide a user with visual reinforcement of the current location within the application hierarchy, and allow for quick movement up the hierarchy.
preview-image: preview-images/breadcrumbs.svg
status: deprecated
resource: true
---

Use breadcrumbs on Rackspace sub-pages to let the user know where they are in the page heirarchy. Do not use breadcrumbs on the first layer of any multi-layered module, only use breadcrumbs on the second-level of nesting and deeper within a module.

{% include toc.html %}

# Breadcrumbs {% include complete.html %}

## When to use

When using breadcrumbs, keep the following in mind:

* Keep the breadcrumbs brief and as minimal as possible.
* Ensure the breadcrumbs go on the top of the page, above the header, and only show up on the second level of your app and deeper.

## Problems being solved

Breadcrumbs offer a way to articulate the platform architecture in a way the user can understand. Breadcrumbs also aims to improve wayfinding and navigation.

* __Where am I? Wayfinding:__ Breadcrumbs explain where a user is in the heirarchy of an application.
* __How can I go upstream? Navigation:__ Breadcrumbs show the architecture of the application so that a user can escape out of their current view easily. 

<div class="row">
{% column left:"col-md-4" %}
## Standard breadcrumbs

* __Placement:__ Keep breadcrumbs above the major heading of the page, 8px from the eyebrow. The container for breadcrumbs will always live on the top left corner of the page when it is present. Make sure the breadcrumb container is 16px above the content on the top of the page. 

* __Container & Spacing:__ The breadcrumbs container is 28px tall and full-page wide if it needs to be. We recommend shortening measures below. Breadcrumbs are in all caps with this arrow-icons in Grey 600 in-between. 

* __Alignment:__ Breadcrumbs should be left aligned to the left-most content on the page as noted in Layout.

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Detailed specifications for Breadcrumbs."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/bread/standard-bc.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="row">
{% column left:"col-md-4" %}
## Naming and Abbreviations

* Ensure the items in the breadcrumbs have the same name as the page it navigates to. If the page title is longer than necessary, use shortened variations of the title. For example, instead of `Billing overview`, use `Overview`.

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"As depicted, please limit your breadcrumb item name"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/bread/name-abbrev.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="row">
{% column left:"col-md-4" %}
## To many items

* __What to Keep:__ Keep the first item in the architecture so it is easy to navigate, re-orientate, and return to home. Keep the last three items in the architecture, including the current page. The ellipses are not clickable or expandable.

* __Still too long?:__ We recommend only including the last two items in the architecture, inclusive of the current page.

{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Jumping The Crumb. We put the ellipses here instead of an arrow, same spacing guidelines."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/bread/to-many.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
