---
title: Time Picker
parent: Inputs and Controls
layout: component
category: Components
usage: The time picker enables the user to select a time from a list of values. The time picker is often accompanied by a date picker that a user can use to select a date.
preview-image: preview-images/time-picker.svg
resource: true
status: stable
last-modified: 2018-10-08
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use the time picker when you want to enable a user to select any time from a 24-hour clock.

If you want the user to select a time from a list of predetermined times, consider using [radios]({{site.baseurl}}\components\radios.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a time picker:

- Depending on the use case, provide 10-minute, 15-minute, or 30-minute increments in a time picker.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Consider the following specifications when you construct a time picker.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

- Tabbing to a time picker will set focus on the time picker but not trigger the menu.
- Keyboard input or clicking anywhere on the element triggers the drop-down menu.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-default-state.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a time picker.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-default-state.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct a time picker.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-default-state.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A time picker can exist in a *default*, *focused and expanded*, *invalid*, and *idle and disabled* states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Default

Default time shown

- The default times shown in the drop-down menu start at 12:00 p.m.
- If specific times are available, the earliest one would show first, chronologically followed by later times.

Default number of visible items

- The number of items visible in the menu is four, unless the use case requires otherwise

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-default-state.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focused and expanded

Predictive behavior

- When the user enters a number on the keypad, the menu will jump to that number.
- For example, if the user types “7”, 7:00 p.m. will be scrolled to the top of the menu.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-default-state.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Invalid

- If an invalid entry occurs, stack the error icon and message underneath the help text.
- When the user replaces the invalid entry with a valid one, hide the error message and icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-invalid-states.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Idle and disabled

- After the user has selected the time and shifted focus away, the time picker adopts its default state.
- When disabled, the contents of the picker cannot be modified or triggered. Consider adding help text describing why the picker is disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-idle-and-disabled-states.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Time zones

Rackspace is a global company with users around the world. Consider the following guidelines when you include a time zone indicator when you construct a time picker:

- When you add a time zone indicator, expand the width of the input box and drop-down.
- Use helper text below the picker to note the user's timezone offset.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-time-zones.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
