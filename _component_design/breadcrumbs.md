---
title: Breadcrumbs
parent: Navigation
layout: component
category: Components
usage: >
  Breadcrumbs are an inline visual representation of page relationships and hierarchy. They provide a user with visual reinforcement of the current location within the application hierarchy, and allow for quick movement up the hierarchy.
preview-image: preview-images/breadcrumbs.svg
status: stable
resource: true
last-modified: 2018-12-20
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/breadcrumbs/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

When using breadcrumbs, keep the following in mind:

- Keep the breadcrumbs brief and as minimal as possible.
- Ensure the breadcrumbs go on the top of the page, above the header, and only show up on the second level of your app and deeper.

Use breadcrumbs on Rackspace sub-pages to let the user know where they are in the page hierarchy. Do not use breadcrumbs on the first layer of any multi-layered module, only use breadcrumbs on the second level of nesting and deeper within a module.

Breadcrumbs offer a way to articulate the platform architecture in a way the user can understand. Breadcrumbs also aims to improve way-finding and navigation.

- __Where am I? Way-finding:__ Breadcrumbs explain where a user is in the hierarchy of an application.
- __How can I go upstream? Navigation:__ Breadcrumbs show the architecture of the application so that a user can escape out of their current view easily.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct breadcrumbs:

- Ensure the items in the breadcrumbs have the same name as the page it navigates to. If the page title is longer than necessary, use shortened variations of the title. For example, instead of `Billing overview`, use `Overview`.
- xxxx
- xxxx

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct breadcrumbs.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Breadcrumbs contain the following elements:

- **Container (required)**: The container holds the breadcrumb element.
- **Breadcrumb element (required)**: xxxx

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Detailed specifications for breadcrumbs."] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/navigation/bread-crumbs/standard-bc.svg"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct breadcrumbs.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Detailed specifications for breadcrumbs."] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/bread-crumbs/standard-bc.svg"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct breadcrumbs.

**OLD CONTENT**

- __Placement:__ Keep breadcrumbs above the major heading of the page, 8px from the eyebrow. The container for breadcrumbs will always live on the top left corner of the page when it is present. Make sure the breadcrumb container is 16px above the content on the top of the page.
- __Container & Spacing:__ The breadcrumbs container is 28px tall and full-page wide if it needs to be. We recommend shortening measures below. Breadcrumbs are in all caps with arrow icons in `gray 600` in-between.
- __Alignment:__ Breadcrumbs should be left aligned to the left-most content on the page as noted in [Layout]({{site.baseurl}}/layout/page-layouts.html).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Detailed specifications for breadcrumbs."] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/bread-crumbs/standard-bc.svg"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

- __What to Keep:__ Keep the first item in the architecture so it is easy to navigate, re-orientate, and return to home. Keep the last three items in the architecture, including the current page. The ellipses are not clickable or expandable.
- __Still too long?:__ We recommend only including the last two items in the architecture, inclusive of the current page.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Jumping the Crumb. We put the ellipses here instead of an arrow, same spacing guidelines."] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/bread-crumbs/to-many.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
