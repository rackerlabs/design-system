---
title: Time Selector
parent: Inputs and Controls
layout: component
category: Components
usage: The time selector enables the user to select a time from a list of values. The time selector is often accompanied by a date selector that a user can use to select a date.
preview-image: preview-images/time-selector.svg
resource: true
status: stable
last-modified: 2018-11-20
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use the time selector to enable a user to choose a specific hour in the 24-hour range. The time selected includes an hour value and a minute value.

If you want the user to select a time from a limited list of predetermined times, consider using [radios]({{site.baseurl}}/components/radio-buttons.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a time selector:

 - The hour value can include 12-hour clock values, or 24-hour clock values. If you are using a 12-hour clock, add **AM** and **PM** in the drop-down selector. **AM** and **PM** are not required for a 24-hour clock. See [Date and Time]({{site.baseurl}}/style/date-time.html) for more information on formatting date and time values.
 - Minutes are grouped into 10-minute, 15-minute, or 30-minute intervals. For example, a user can select a time of **1:00 PM**, **1:10 PM**, **1:15 PM**, or **1:30 PM**, but cannot select any other minute values.
- Construct the time selector so that the user can tab to it, which focuses the time selector without triggering the drop-down selector.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Consider the following specifications when you construct a time selector.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A time selector is comprised of the following elements:

- **Drop-down selector (required)**: Selectable minute and hour combinations appear on a drop-down list that the user accesses by clicking the drop-down selector. The drop-down selector can be activated by keyboard input or when the user clicks anywhere on the time selector. See [drop-down selector]({{site.baseurl}}/components/drop-down-selector.html) for construction guidelines.
- **Clock icon (required)**: Use the clock icon as a visual aid to remind the user that they are using a time selector. See the [Helix Toolkit](https://rackerlabs.github.io/helix-ui/components/icons/) for more information about icons.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Time selector composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/time-selector/timeselect-composition.png" width="270"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a time selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Time selector style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/time-selector/timeselect-style.png" width="299"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct a time selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Time selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/time-selector/timeselect-spacing.png" width="141"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Time zones

Rackspace is a global company with users around the world.

If you need to show a time zone, use Coordinated Universal Time (UTC), and indicate the time-zone offset from UTC. For example, use **10:30 (UTC -6)** (refers to U.S. Central Time). See [Date and Time]({{site.baseurl}}/style/date-time.html) for more information on formatting time zones.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Time selector time zones"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/time-selector/timeselect-variations-timezone.png" width="241"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
