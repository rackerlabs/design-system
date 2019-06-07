---
title: Left Navigation
parent: Navigation
layout: component
category: Components
usage: >
  The left navigation provides a menu of navigation items that a user clicks to move to another page or location within the application they are using. Because it is easier for user to scan, left navigation is preferred over top navigation. Consistent navigation patterns increase user confidence and efficiency.
preview-image: preview-images/side-nav.svg
status: stable
resource: true
helix-ui-css: true
helix-ui-javascript: true
last-modified: 2018-11-07
pagelink: https://rackerlabs.github.io/helix-ui/components/navigation/
---

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Unless a firm implementation constraint requires top navigation, use the left navigation component for web applications.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct the left navigation:

- Implement only primary and secondary navigation items.
- If you have a very large information architecture, you can use tertiary navigation items. However, in most cases we recommend that you refactor the information architecture so that only two levels (primary and secondary) are needed.
- Use title case when you write the navigation item. With title case, the first letter of each word is capitalized, except for articles (*a*, *an*, *the*) and short prepositions (*to*, *by*, *with*).

{% endcolumn %}

</div>

</section>

<!--- End of Usage section --->

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use these specifications when you construct the left navigation.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The left navigation contains the following elements:

- **Container (required):** The container holds the navigation items.
- **Primary navigation item (required):** When the user clicks the primary navigation item, they are directed to a page. A primary navigation item can contain secondary navigation items.
- **Vertical expand icon (optional):** The vertical expand icon reveals the secondary or tertiary navigation items.
- **Secondary navigation item (optional):** A secondary navigation item is a child page of the primary navigation item.
- **Tertiary navigation item (discouraged):** A tertiary navigation item is a child page of a secondary navigation item. Using tertiary navigation items is discouraged.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Left navigation composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/navigation/left-nav/left-navigation-composition.png" width="399px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct the left navigation.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Left navigation style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/navigation/left-nav/left-navigation-style.png" width="476px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct the left navigation.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Left navigation spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/navigation/left-nav/left-navigation-spacing.png" width="240px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

A left navigation item can exist in a *hover*, *selected*, *disabled*, or *disabled hover* state.

For the disabled hover state, add a [tooltip]({{site.baseurl}}/components/tooltip.html) that explains why the navigation item is not available and, if appropriate, a description of how to get access to the navigation item.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Left navigation states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/navigation/left-nav/left-navigation-states.png" width="491px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
