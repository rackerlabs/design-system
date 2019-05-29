---
title: Color Palette
layout: docs
category: Style
usage: |
  The Helix color palette consists of deep modern hues juxtaposed with simple monochromatic environments. Our color palette has been selected to enhance usability while adhering to accessibility criteria. Guidelines for color usage are outlined for individual components.
resource: true
status: complete
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## The Helix color palette

Intro text here...

  <div class="hxRow">
    {%for color_hash in site.data.colors-all-colors%}
      {%assign color6=color_hash[1]%}
      <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
      <h4>{{color6.name}}</h4>
        {%for value_hash in color6.colors%}
        {%assign value6=value_hash[1]%}
        <div class="lesser-swatch" style="background-color:{{value6.value}}">
          <div class="{{value6.type}}-type">
            {{value6.number}}<br>
            <span class="smaller-color-type">{{value6.value}}</span>
          </div>
        </div>
        {%endfor%}
      </div>
    {%endfor%}
    {% endcolumn %}

</div>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Health status

The health status family communicates the well-being of an infrastructure object,
for example, a load balancer or a server, or an entity, for example, an account
or a user.

- Use red 500, yellow 500, and green 500 as the default health status colors.
- Use red 700, yellow 700, and green 700 for hover state.

Refer to [Iconography]({{site.baseurl}}/style/iconography) for guidelines about constructing default and hover state health status icons.

- Use red 100, yellow 100, and green 100 as background colors that you can
apply to components such as the table heartbeat and an [Alert Banner]({{site.baseurl}}/components/alert-bar.html).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

  <div class="hxRow">
    {%for color_hash in site.data.colors%}
      {%assign color=color_hash[1]%}
      <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
      <h4>{{color.name}}</h4>
        {%for value_hash in color.colors%}
        {%assign value=value_hash[1]%}
        <div class="lesser-swatch" style="background-color:{{value.value}}">
          <div class="{{value.type}}-type">
            {{value.number}}<br>
            <span class="smaller-color-type">{{value.value}}</span>
          </div>
        </div>
        {%endfor%}
      </div>
    {%endfor%}
    {% endcolumn %}

</div>


<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Non-health status

Sometimes it is important to communicate the status of an entity, without also communicating urgency or criticality. For example, use orange 500 for a [Badge]({{site.baseurl}}/components/badge.html) or New! tag to indicate that new items are available for review.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

  <div class="hxRow">
    {%for color_hash in site.data.colors-non-health%}
      {%assign color2=color_hash[1]%}
      <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
      <h4>{{color2.name}}</h4>
        {%for value_hash in color2.colors%}
        {%assign value2=value_hash[1]%}
        <div class="lesser-swatch" style="background-color:{{value2.value}}">
          <div class="{{value2.type}}-type">
            {{value2.number}}<br>
            <span class="smaller-color-type">{{value2.value}}</span>
          </div>
        </div>
        {%endfor%}
      </div>
    {%endfor%}
    {% endcolumn %}

</div>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

You can also use status labels as a way to communicate the status of an object, for example, a support ticket. Unlike health status which is a closed system that prescribes that you use specific icons and colors to convey meaning, status labels are non-use case specific, and you can use them as you see fit. Review your system of statuses to determine which label to use.

- Use gray 400 for a subdued status label.
- Use gray 650 as the default status label.
- Use gray 800 to communicate emphasis.
- Use indigo 800 to communicate extra emphasis.

Refer to Status Labels for construction guidelines.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

<div class="hxRow">
  {%for color_hash in site.data.colors-non-health2%}
    {%assign color3=color_hash[1]%}
    <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
    <h4>{{color3.name}}</h4>
      {%for value_hash in color3.colors%}
      {%assign value3=value_hash[1]%}
      <div class="lesser-swatch" style="background-color:{{value3.value}}">
        <div class="{{value3.type}}-type">
          {{value3.number}}<br>
          <span class="smaller-color-type">{{value3.value}}</span>
        </div>
      </div>
      {%endfor%}
    </div>
  {%endfor%}
  {% endcolumn %}

</div>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Interactive states

Interactive states make use of steel, gray, and red bands.

In general:

- Use the steel band for selected and unselected states.
- Use the gray band for disabled states.
- Use the red band for error states.

Refer to [Interactive States]({{site.baseurl}}/style/interactive-states.html) for detailed guidelines about constructing interactive states.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

<div class="hxRow">
  {%for color_hash in site.data.colors-interactive-states%}
    {%assign color4=color_hash[1]%}
    <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
    <h4>{{color4.name}}</h4>
      {%for value_hash in color4.colors%}
      {%assign value4=value_hash[1]%}
      <div class="lesser-swatch" style="background-color:{{value4.value}}">
        <div class="{{value4.type}}-type">
          {{value4.number}}<br>
          <span class="smaller-color-type">{{value4.value}}</span>
        </div>
      </div>
      {%endfor%}
    </div>
  {%endfor%}
  {% endcolumn %}

</div>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Application frame

The application frame makes use of steel and gray bands.

In general:

- Use the steel band for application header and menus.
- Use gray 25 for body background.
- Use gray 0 for white elements.
- Use gray 300 for disabled text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

<div class="hxRow">
  {%for color_hash in site.data.colors-application-frame%}
    {%assign color5=color_hash[1]%}
    <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
    <h4>{{color5.name}}</h4>
      {%for value_hash in color5.colors%}
      {%assign value5=value_hash[1]%}
      <div class="lesser-swatch" style="background-color:{{value5.value}}">
        <div class="{{value5.type}}-type">
          {{value5.number}}<br>
          <span class="smaller-color-type">{{value5.value}}</span>
        </div>
      </div>
      {%endfor%}
    </div>
  {%endfor%}
  {% endcolumn %}

</div>

<section class="static-section"  markdown="1">

### Grayscale

These colors are used largely for background blocks to define content areas. Be
sure to use enough contrast between adjacent colors.

<div class="hxRow">
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#FFFFFF" color="#757575" csscode="Gray 700 on Gray 0" hex="#757575 on #FFFFFF" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#FAFAFA" color="#616161" csscode="Gray 800 on Gray 25" hex="#616161 on #FAFAFA" ratio="5.9 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#f5f5f5" color="#616161" csscode="Gray 800 on Gray 50" hex="#616161 on #F5F5F5" ratio="5.7 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#EEEEEE" color="#616161" csscode="Gray 800 on Gray 100" hex="#616161 on #EEEEEE" ratio="5.3 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#e7e7e7" color="#616161" csscode="Gray 800 on Gray 200" hex="#616161 on #E7E7E7" ratio="5.0 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#e0e0e0" color="#616161" csscode="Gray 800 on Gray 300" hex="#616161 on #E0E0E0" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#d8d8d8" color="#424242" csscode="Gray 900 on Gray 400" hex="#424242 on #D8D8D8" ratio="7.1 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#BDBDBD" color="#424242" csscode="Gray 900 on Gray 500" hex="#424242 on #BDBDBD" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#9E9E9E" color="#333333" csscode="Gray 950 on Gray 600" hex="#333333 on #9E9E9E" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#757575" color="#000000" csscode="Gray 1000 on Gray 700" hex="#000000 on #757575" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#6B6B6B" color="#EEEEEE" csscode="Gray 100 on Gray 750" hex="#EEEEEE on #6B6B6B" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#616161" color="#e0e0e0" csscode="Gray 300 on Gray 800" hex="#E0E0E0 on #616161" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#424242" color="#bdbdbd" csscode="Gray 500 on Gray 900" hex="#BDBDBD on #424242" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#333333" color="#9e9e9e" csscode="Gray 600 on Gray 950" hex="#9E9E9E on #333333" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#212121" color="#9e9e9e" csscode="Gray 600 on Gray 975" hex="#9E9E9E on #212121" ratio="6.0 : 1" %}
  {% include chips.html class="hxCol hxSpan-12-xs hxSpan-3-md color-chip" bg-color="#000000" color="#757575" csscode="Gray 700 on Gray 1000" hex="#757575 on #000000" ratio="4.6 : 1" %}
</div>
</section>
