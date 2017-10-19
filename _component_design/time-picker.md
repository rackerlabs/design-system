---
title: Time Picker
parent: Inputs and Controls
layout: component
category: Components
usage: Enable users to select a specific time or window from a sequential list. The Time Picker is often accompanied by a date picker for the purpose of creating a date range filter.
preview-image: preview-images/time-picker.svg
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

## Introduction

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### When to use
Use the time picker if the list of times are sequential, such as 9am, 10am, 11am, and so on.

Do not use the Time Picker if there are gaps between time options. For example, if 9am, 12pm, and 3pm are the options, use radio buttons. 

### Best practices

* Times in a list should be incremental, usually by every 30 minutes or 1 hour, but 10 or 15 minute increments may be used depending on the use case.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-hero-image.svg)
{% endfigure %}

{% endcolumn %}
</div>

## Specifications

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Default State
* Tabbing to a Time Picker will set focus on the time picker but not trigger the menu
* The dropdown menu is triggered by keyboard input, or by clicking on anywhere on the input

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-default-state.svg)
{% endfigure %}

{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Focused & Expanded States
#### Predictive Behavior 
* Users can press a number on the keypad, and the menu will jump to that number.
* For example, if the user types “7”, the menu will select the nearest matching time, scrolling it to the top of the dropdown

#### Default Time Shown
* The default times shown in the dropdown menu start at 12:00 PM
* If specific times are available, the earliest one would show first, and then later times below in order of earliest to latest

#### Default Number of Visible Items
* The number of items visible in the menu is 4, unless the use case requires otherwise.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-focused-and-expanded-states.svg)
{% endfigure %}

{% endcolumn %}
</div>


<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Invalid States
* If an invalid entry occurs, stack the error icon and message underneath the help text
* When the field becomes valid again, hide the error message and icon

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-invalid-states.svg)
{% endfigure %}

{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Idle & Disabled States
* The time picker adopts its default state after the user has selected the time, and shifted focus away from the picker.
* When disabled, the contents of the picker cannot be modified or triggered.  Consider adding help text describing why the picker is disabled.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-idle-and-disabled-states.svg)
{% endfigure %}

{% endcolumn %}
</div>


<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Time Zones
* If you want to include a time zone, you can expand the width of the box/ dropdown.
* Please be aware that we are a global company and have users around the world. 
* If possible, be specific about the time zone. Consider using instructional help text below the picker.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.cdn_url}}/assets/images/components/inputs-and-controls/time-picker/time-picker-time-zones.svg)
{% endfigure %}

{% endcolumn %}
</div>
