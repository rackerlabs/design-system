---
title: Breadcrumbs
parent: Navigation
layout: component
category: Components
usage: >
  Breadcrumbs are a page navigation component that shows the user's current location within a web application. Breadcrumbs help with way-finding and provide an easy way for the user to navigate to pages located up the application hierarchy.
preview-image: preview-images/breadcrumbs.svg
status: stable
resource: true
last-modified: 2019-01-29
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/breadcrumbs/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use breadcrumbs when you want to improve web application way-finding and navigation on sites that organize content hierarchically. For example, breadcrumbs help user better identify where they are in applications that use top navigation.

Do not use breadcrumbs:

- On single-level web applications that have no logical hierarchy or grouping.
- In dual panel layouts. However, use breadcrumbs if the current page has a hierarchy above it.


{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct breadcrumbs:

- Place the breadcrumbs at the top of the page, above the header.
- Only use breadcrumbs on the second level and deeper of a multi-layered application. Do use breadcrumbs on the first layer of a multi-layered application.
- Label the breadcrumb to match the page title to which it navigates.
- Show a maximum of four breadcrumbs. If the application is more than four layers deep, then [truncate the breadcrumb path](#too-many).
- Show the top hierarchical level as the first breadcrumb. Show the current location as the last breadcrumb. Use a middle breadcrumb to show one level above the current location.
- If the page title is too long, use a shortened or [truncated]({{site.baseurl}}/style/text-conventions/punctuation.html#Ellipses) version of the page title. For example, instead of `Billing overview`, use `Overview`. Shorter labels conserve horizontal space.

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

- **Root (required)**: The breadcrumb that links to the top level of the application.
- **Parent (required, if applicable)**: The breadcrumb that links to the page one level up from the user's current location.
- **Current (required)**: The breadcrumb that shows the user's current location.
- **Delimiter (required)**: The delimiter separates the breadcrumbs.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Breadcrumb composition"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/navigation/breadcrumbs/breadcrumbs-composition.png" width="318"/>

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

{% figure [caption:"Breadcrumb style"] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/breadcrumbs/breadcrumbs-style.png" width="386"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Place breadcrumbs above the page header, 8px from the eyebrow. Add 8px space between a breadcrumb item and the angle-right icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Breadcrumb spacing"] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/breadcrumbs/breadcrumbs-spacing.png" width="641"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

Breadcrumbs can exist in **default**, **hover**, or **current page** states.

In addition, there are cases when you may have **too many** breadcrumbs, or breadcrumbs that are **too long**.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Breadcrumb states"] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/breadcrumbs/breadcrumbs-states.png" width="304"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Too many

If the application is more than four layers deep, complete the following steps to truncate the trail of breadcrumbs:

1. Represent the top level of the application with the root breadcrumb.
2. Place an ellipses between the root breadcrumb and the grandparent breadcrumb. The ellipses are not clickable or expandable.
3. Use the parent breadcrumb to represent one level up from the current location.
4. Use the current breadcrumb to represent the current location.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Too many breadcrumbs"] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/breadcrumbs/breadcrumbs-states-toomany.png" width="323"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Too long

If the trail of breadcrumbs is too long, first try to shorten the breadcrumb label. For example, instead of **Fanatical Support for AWS Overview** use **Overview**.

If you cannot shorten the breadcrumb label due to legal obligations, then truncate it. For example, the truncated version of **Fanatical Support for AWS Overview** is **Fanatical Supp...r AWS Overview**. See [Ellipses]({{site.baseurl}}\style\punctuation.html#ellipses) for more information on truncating text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Too long breadcrumbs"] [class:"image bg-light border"] %}

<embed src="{{site.baseurl}}/assets/images/components/navigation/breadcrumbs/breadcrumbs-states-toolong.png" width="304"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
