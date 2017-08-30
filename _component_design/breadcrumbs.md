---
title: Breadcrumbs
parent: Navigations
layout: component
category: Components
usage: |
  Use breadcrumbs on Rackspace subpages to let the user know where they are in the heirarchy, and to allow them to jump up the heirarchy if they need to.
preview-image: components/placeholder.svg
status: deprecated
resource: true
---

Use breadcrumbs on Rackspace subpages to let the user know where they are in the heirarchy, and to allow them to jump up the heirarchy if they need to. Do not use breadcrumbs on the first layer of any multilayered module – which is to say, only use breadcrumbs on the second-level of nesting and deeper within a module.

{% include toc.html %}


# Breadcrumbs {% include complete.html %}

## When to use

There are a few quick things to keep in mind with breadcrumbs.

* Keep them brief and as minimal as possible – got deep breadcrumbs? Ask yourself why and reconsider your architecture.
* The breadcrumb name should be the same as the page it goes to – if the page name is long, follow abbreviation instructions in specs.
* Breadcrumbs always go on the top of the page above the header and only show up on the second level of your app and deeper.

## Problems being solved

Sometimes we can get so deep in an interface we lose track of where we are. While this also acts as a moment to evaluate our platform architecture, breadcrumbs offer a way to articulate our platform architecture in a way the user can understand so they know where they are (wayfinding) and how to navigate upward (navigation).

* __Where am I? Wayfinding:__ breadcrumbs explain where a user is in the heirarchy of an application.
* __How can I go upstream? Navigation:__ Breadcrumbs show architecture of the application so that a user can drill out of their current view easily. 

<div class="row">
{% column left:"col-md-4" %}
## Standard breadcrumbs

* __Placement:__ Keep breadcrumbs above the major heading of the page, 8px from the Eyebrow. Nesting it any further down will confused the user’s understanding of heirarchy.  The container for Breadcrumbs will always live on the top left corner of the page when it is present. Got a page title description above “Billing” here. Totally cool. Whatever is on the top of your page, make sure the breadcrumb container is 16px above it. 

* __Container & Spacing:__ Its container is 28px tall and full-page wide if it needs to be, though we will strongly recommend shortening measures below. Breadcrumbs are in all caps with this arrow-icons in Grey 600 inbetween. 

* __Alignment:__ It should be left aligned to the left-most content on the page as noted in Layout.

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

* The items in the breadcrumbs should have the same name as the page to which they point, another reason why page names should be short and descriptive.

* However, sometimes we have really long page titles. Don’t let that weigh you down. The advantage of breadcrumbs is that we can use pages higher in the heirarchy, ie: “Billing” to avoid having to say “Billing Overview” in a more deeply nested page. So instead of repeating “Billing” in “Billing Overview”, just call it “Overview”. Keep it tight!

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

* __Jump The Crumb:__ Maybe we’ve really overdone it on the architecture. It happens (does it have to though?). Whattaya do? If you can’t abbreviate adequately, we have to jump the breadcrumbs. What’s that mean?

* __What to Keep:__ Keep the first item in the architecture so people can get back to the top level to get to homebase and re-orient, then keep the last three items in your architecture, including the page you are currently on. The ellipses, as of now, is not clickable / expandable.

* __Still Too Long?:__ If you need to, and use your judgment here, only include the last two items in the architecture, inclusive of the page you are on. __DO NOTE__ only keep the first item and the last item. Doesn’t do the user much good.
{% endcolumn %}
{% column right:"col-md-7 col-md-offset-1"%}
{% figure [caption:"Jumping The Crumb. We put the ellipses here instead of an arrow, same spacing guidelines."] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/bread/to-many.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>