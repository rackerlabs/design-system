---
title: Help Beacon
parent: Help
secondary: Notifications
layout: component
category: Components
usage: >
  The beacon can be used to identify the location of products or features in the control panel. It can also be used to indicate advanced functionality to existing features
preview-image: preview-images/help-beacon.svg
status: stable
resource: true
last-modified: 2017-11-04
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

Use a beacon in the following scenarios:

- Showing a user new products or features that improve existing functionality.
- Showing new users the location of commonly used features to aid them in getting started.

There are some cases where beacons should not be used:

- Do **not** use multiple beacons at one time.
- Do **not** use the beacon to alert users of warnings or alerts.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Beacons continually follow this lifecycle, giving the impression of a pulse to draw user attention."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/beacon/beacon-hero.svg)
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Best practice

- Place the beacon to the right or left of navigation items to show location and label.
- Place the beacon next to labels or section headers.
- Use the beacon in conjunction with the directional [popover]({{site.baseurl}}/components/popovers.html).
- Do **not** use the beacon in lieu of user experience best practices about affordance.
- Do **not** use other forms of notification to deliver the context, such as automatic [tooltips]({{site.baseurl}}/components/tooltip.html) or directional [popovers]({{site.baseurl}}/components/popovers.html).
- Do **not** obscure the labeled item with the beacon.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Default layout

This example shows the multiple states for the beacon. The beacon animates on a loop to catch the user's eye. Once the user clicks the beacon, it disappears.

To create a tour experience for more advanced features, string together beacons. In this scenario, beacons appear one at a time. Ensure you prioritize demonstrating the most important or impactful feature first. Provide an opt-out option on each [popover]({{site.baseurl}}/components/popovers.html) at every step in the tour.

Ideally, track the clicks and drop-offs throughout the tour to improve usefulness for the end user.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"For full CSS specifications, view the developer documentation."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/beacon/beacon-specs.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
