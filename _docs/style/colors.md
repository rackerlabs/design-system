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

The Helix color palette consists of deep modern hues juxtaposed with simple monochromatic environments. Our color palette has been selected to enhance usability while adhering to accessibility criteria. Guidelines for color usage are outlined for individual components.

{% figure [caption:"Helix Color Palette"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/color-palette/color-palette.png" width="1900"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Guidelines

Consider the following guidelines when you choose colors from the color palette:

- xxxxx.
- xxxxx.
- xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you choose colors from the color palette:

- xxxxx.
- xxxxx.
- xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Accessibility

The colors you select when you construct a user interface (UI) have a large impact on the accessibility of the UI for color blind and low vision users. When choosing colors, ensure that you consider the guidelines described in [Accessibility]({{site.baseurl}}/principles/accessibility.html).

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Helix color families

Helix provides color families for specific user interface (UI) design use cases. Make every attempt to choose colors appropriate for your situation.

Helix provides color families that you can use to:

- [Communicate health status](#health-status)
- [Communicate object status](#object-status)
- [Construct interactive states](#interactive-states)
- [Construct the application frame](#application-frame)

{% figure [caption:"Helix Color Palette"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/color-palette/color-palette.png" width="1900"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Health status

The health status family communicates the well-being of an infrastructure object,
for example, a load balancer or a server, or an entity, for example, an account
or a user.

The health status color family has strict usage guidelines.

- Use the 500 hue as the default health status colors (red, yellow, green).
- Use the 700 hue for hover state (red, yellow, green).

Refer to [Iconography]({{site.baseurl}}/style/iconography) for guidelines about constructing default and hover state health status icons.

- Use the 100 hue (red, yellow, green) for background colors that you can apply to components such as the table heartbeat and an [Message Banner]({{site.baseurl}}/components/alert-bar.html).

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
</div>
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Object status

Sometimes it is important to communicate the status of an entity, without also communicating urgency or criticality. For example, use orange 500 for a [Badge]({{site.baseurl}}/components/badge.html) or the New! tag to indicate that new items are available for review.

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
</div>
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

You can also use status labels as a way to communicate the status of an object, for example, a support ticket. Unlike health status that prescribes that you use specific icons and colors to convey meaning, the object status family offers more freedom. You can choose from among the colors to attract the right amount of attention to the status of an object.

Review your system of statuses to determine which label to use.

- Use gray 400 for a subdued status label.
- Use gray 650 as the default status label.
- Use gray 800 to communicate emphasis.
- Use indigo 800 to communicate extra emphasis.

Refer to Status Labels for more detailed usage and construction guidelines.

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
</div>
{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Interactive states

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

</div>

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Application frame

Use the steel and gray bands to construct the application frame.

In general:

- Use the steel band for the application header and menus.
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

</div>

  {% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Helix contrast tool

Use the [Helix Contrast Tool](https://palette-contrast.citguy.com/) to ensure that the contrast ratios for text on a background color meet the double-A (AA) minimum guidelines set forth in [WCAG 2.1](https://www.w3.org/TR/WCAG21/)

{% endcolumn %}

</div>

</section>
