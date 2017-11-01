---
title: Help Beacon
parent: Help
secondary: Notifications
layout: component
category: Components
usage: >
  The beacon can be used to identify the location of products or features in the control panel. It can also be used to indicate advanced functionality to existing features
preview-image: preview-images/help-beacon.svg
status: in-progress
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}


## Introduction

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

A beacon is best used in the following scenarios:

- Show when new products/features have been added to the control panel that improve existing functionality.
- Show new users the location of commonly used features to aid them in getting started.
- **Do not** use multiple beacons at one time.
- **Do not** use the beacon to alert users of warnings or alerts.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Beacons will continually follow this life-cycle giving the impression of a pulse to draw user attention."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/beacon/beacon-hero.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Best practice

- Place the beacon next to (left or right) navigation items to show location and label.
- Place the beacon next to labels or section headers.
- Use the beacon in conjuction with the directional pop-over.
- **Do not** use the beacon in leiu of UX best practices with regard to affordance.
- **Do not** use other forms of notification to deliver the context such as automatic tool tips or directional pop-overs
- **Do not** obscure the item of text label with the beacon.

{% endcolumn %}

</div>

### Default layout

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

This example shows the multiple states for the beacon. The beacon will animate on a loop to catch the user’s eye. Once the beacon is clicked, it dissapears. The pop-over could generate another beacon to provide a tour experience for more advanced workflows or features.

You can string beacons together, to create a tour experience. In this instance, only one at a time, and be sure you prioritize most important or impactful feature first. Each pop-over should
provide an opt out at every step in the tour.

Ideally we should track the clicks and drop offs so we can tweak the tour to be more useful and informative.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"For full CSS specifications, view the developer documentation"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/beacon/beacon-specs.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>