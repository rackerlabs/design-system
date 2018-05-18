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
last-modified: 2018-05-17
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
- You can string multiple beacons together to create a tour experience. In this scenario, beacons appear one at a time. Ensure that you prioritize the most important or impactful features first. Provide an opt-out option on each [popover]({{site.baseurl}}/components/popovers.html) at each step in the tour.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a beacon.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A beacon consists of the following elements:

- **Beacon (required)**: The beacon is the light source that you place next to the user interface element to which you want to attract the user's attention.
- **Pulse (required)**: The pulse is the animation that attracts the user's attention. The pulse flashes on and off in one-second intervals.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Beacon composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/beacon/beacon-composition.png" widtht="164"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a beacon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Beacon style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/beacon/beacon-style.png" width="397"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Spacing

Because a beacon overlays all user interface elements, there are no specific spacing guidelines.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behavior

A beacon attracts the user's attention with a two-second, looped animation. The beacon pulses for one second, and then remains still for one second. This pattern repeats.

The beacon disappears after the user clicks it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Beacon behavior"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/beacon/beacon-behavior.png" width="474"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
