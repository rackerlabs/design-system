---
title: Beacon
parent: Notifications
layout: component
category: Components
usage: >
  A beacon is an animation that attracts a user's attention to a new feature or advanced functionality in a control panel. A help beacon disappears after a user clicks it.
preview-image: preview-images/help-beacon.svg
status: stable
resource: true
last-modified: 2018-05-15
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a beacon when you want to:

- Call attention to new products or features that improve existing functionality
- Help new users get started by showing them the location of commonly-used features

Do not:

- Use multiple beacons simultaneously
- Use a beacon to notify users of warnings or alerts

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

- Place the beacon to the right or left of navigation items of interest.
- Place the beacon next to labels or section headers of interest.
- Use the beacon in conjunction with the directional [popover]({{site.baseurl}}/components/popovers.html).
- Do **not** use the beacon in lieu of user experience affordance best practices.
- Do **not** use other forms of notification to deliver the context, such as automatic [tooltips]({{site.baseurl}}/components/tooltip.html) or directional [popovers]({{site.baseurl}}/components/popovers.html).
- Do **not** obscure the labeled item with the beacon.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Specifications

This example shows the multiple states for the beacon. The beacon animates on a loop to catch the user's eye. Once the user clicks the beacon, it disappears.

To create a tour experience for more advanced features, string together beacons. In this scenario, beacons appear one at a time. Ensure you prioritize demonstrating the most important or impactful feature first. Provide an opt-out option on each [popover]({{site.baseurl}}/components/popovers.html) at every step in the tour.

Ideally, track the clicks and drop-offs throughout the tour to improve usefulness for the end user.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"For full CSS specifications, view the developer documentation."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/beacon/beacon-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"For full CSS specifications, view the developer documentation."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/beacon/beacon-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"For full CSS specifications, view the developer documentation."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/beacon/beacon-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Spacing

Text here of why no spacing graphic...

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behavior

Text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"For full CSS specifications, view the developer documentation."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/beacon/beacon-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
