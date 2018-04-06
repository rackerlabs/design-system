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
### Primary Colors

Primary colors should be used sparingly for primary and secondary actions,
alerts, or data visualizations.
  <div class="hxRow">
    {%for color_hash in site.data.colors%}
      {%assign color=color_hash[1]%}
      <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
        {%for value_hash in color.colors%}
        {%assign value=value_hash[1]%}
        <div class="{{value.class}}-swatch" style="background-color:{{value.value}}">
          {%if forloop.first == true%}
          <div class="color-name">{{color.name}}</div>
          {%endif%}
          <div class="{{value.type}}-type">
            {{value.number}}<br>
            <span class="smaller-color-type">{{value.value}}</span>
          </div>
        </div>
        {%endfor%}
      </div>
    {%endfor%}
  </div>
</section>


<section class="static-section"  markdown="1">
### Alert Colors

Secondary colors are used for content-specific needs, such as alerts and
illustrations. They should never overpower the primary colors.
  <div class="hxRow">
    {%for color_hash in site.data.colors-alert%}
      {%assign color2=color_hash[1]%}
      <div class="hxCol hxSpan-12-xs hxSpan-4-sm hxSpan-2-md">
        {%for value_hash in color2.colors%}
        {%assign value2=value_hash[1]%}
        <div class="{{value2.class}}-swatch" style="background-color:{{value2.value}}">
          {%if forloop.first == true%}
          <div class="color-name">{{color2.name}}</div>
          {%endif%}
          <div class="{{value2.type}}-type">
            {{value2.number}}<br>
            <span class="smaller-color-type">{{value2.value}}</span>
          </div>
        </div>
        {%endfor%}
      </div>
    {%endfor%}
  </div>
</section>


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
