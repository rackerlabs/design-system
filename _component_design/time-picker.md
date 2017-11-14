---
title: Time Picker
parent: Inputs and Controls
layout: component
category: Components
usage: The time picker enables users to select a specific time or window from a sequential list. The time picker is often accompanied by a date picker for the purpose of creating a date range filter.
preview-image: preview-images/time-picker.svg
resource: true
last-modified: 2017-10-24
---

{% include toc.html %}

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Use the time picker if the list of times are sequential, such as 9 a.m., 10 a.m., 11 a.m., and so on.

Do not use the time picker if there are gaps between time options. For example, if 9 a.m., 12 p.m., and 3 p.m. are the options, use radio buttons.

### Best practices

- Times in a list should be incremental, usually by every 30 minutes or 1 hour, but 10- or 15-minute increments may be used depending on the use case.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-hero-image.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Specifications

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default state

- Tabbing to a time picker will set focus on the time picker but not trigger the menu
- Keyboard input or clicking anywhere on the element triggers the drop-down menu

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-default-state.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Focused and expanded

#### Predictive behavior

- When the user enters a number on the keypad, the menu will jump to that number.
- For example, if the user types “7”, 7:00 p.m. will be scrolled to the top of the menu.

#### Default time shown

- The default times shown in the drop-down menu start at 12:00 p.m.
- If specific times are available, the earliest one would show first, chronologically followed by later times.

#### Default number of visible items

- The number of items visible in the menu is four, unless the use case requires otherwise

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-focused-and-expanded-states.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Invalid states

- If an invalid entry occurs, stack the error icon and message underneath the help text
- When the user replaces the invalid entry with a valid one, hide the error message and icon

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-invalid-states.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Idle and disabled

- After the user has selected the time and shifted focus away, the time picker adopts its default state
- When disabled, the contents of the picker cannot be modified or triggered.  Consider adding help text describing why the picker is disabled

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-idle-and-disabled-states.svg)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Time zones

- It is important to be specific about the time zone because Rackspace is a global company with users around the world
- If you want to include a time zone, you can expand the width of the input box and drop-down
- Consider using instructional help text below the picker to note the user's timezone offset

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-time-zones.svg)
{% endfigure %}
{% endcolumn %}
</div>
