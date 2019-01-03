---
title: Breadcrumbs
parent: Navigation
layout: component
category: Components
usage: >
  Breadcrumbs are a linear navigation scheme that shows the users' current location in a website or application. A user can click  breadcrumb elements to navigate up the site hierarchy to previously visited pages.
preview-image: preview-images/breadcrumbs.svg
status: stable
resource: true
last-modified: 2019-01-03
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/breadcrumbs/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use breadcrumbs when you want to improve web application way-finding and navigation. Breadcrumbs help the user understand their location within an application, and provide an easy way for the user to navigate out of their current view.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct breadcrumbs:

- Label the breadcrumb item to match the page title to which it navigates.
- If the page title is too long, use a shortened variation of the page title. For example, instead of `Billing overview`, use `Overview`. Shorter labels conserve horizontal space.
- Place the breadcrumbs at the top of the page, above the header.
- Only use breadcrumbs on the second level and deeper of a multi-layered application. Do use breadcrumbs on the first layer of a multi-layered application.

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
- **Breadcrumb item (required)**: The breadcrumb item is a page within an application to which a user has navigated.

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

**OLD CONTENT - KEEP FOR NOW**

- **Placement:** Keep breadcrumbs above the major heading of the page, 8px from the eyebrow. The container for breadcrumbs will always live on the top left corner of the page when it is present. Make sure the breadcrumb container is 16px above the content on the top of the page.
- **Container & Spacing:** The breadcrumbs container is 28px tall and full-page wide if it needs to be. We recommend shortening measures below. Breadcrumbs are in all caps with arrow icons in `gray 600` in-between.
- **Alignment:** Breadcrumbs should be left aligned to the left-most content on the page as noted in [Layout]({{site.baseurl}}/layout/page-layouts.html).

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

- **What to Keep:** Keep the first item in the architecture so it is easy to navigate, re-orientate, and return to home. Keep the last three items in the architecture, including the current page. The ellipses are not clickable or expandable.
- **Still too long?:** We recommend only including the last two items in the architecture, inclusive of the current page.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Jumping the Crumb. We put the ellipses here instead of an arrow, same spacing guidelines."] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/bread-crumbs/to-many.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
