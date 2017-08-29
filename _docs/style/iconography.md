---
title: Iconography
layout: default
category: Style
usage: |
  Helix icons are easily identifiable simple shapes that visually
  represent abstract subject matter.
preview-image: style/preview-icons.svg
resource: true
---

{% include toc.html %}

# Download Current Release
The latest version of the icon font can be downloaded for use within your
project at
[this CDN link]({{site.cdn_url}}/fonts/DS_icon_font.zip)

## New Requests
If you need an additional icon, please submit your request to the
<a href="mailto:helix.designsystem@rackspace.com?subject=Icon Request">Helix Team</a>.

# Utility Icons {% include inprogress.html %}
Utility icons are used in place of text to perform an action. They are based on
commonly used, established metaphors. Utility icons share the color style of
links or match the color of body text dependent on the background color.

<div class="hxRow ws-icon-row" style="margin-top:64px;">
  {% assign iconCount = 1 %}
  {%for icon_hash in site.data.icons%}
    {%assign icon=icon_hash[1]%}
    {% if icon.group == "utility" %}
        <div class="ws-icon-chip hxCol-xs-12 hxCol-sm-6 hxCol-md-3 hxCol-lg-2">
            <span class="ws-icon-chip-icon"><i class="{{icon.class}}"></i></span>
            <span class="ws-icon-chip-text">{{icon.class}}</span>
            <span class="ws-icon-chip-text">{{icon.id}}</span>
        </div>
        {% assign iconCount = iconCount | plus: 1%}
    {% endif %}
  {%endfor%}
  {%if closeDiv == false%}
  {% endif %}
</div>
</article>

# Object Icons {% include inprogress.html %}

Object icons should be used sparingly and consistently across Rackspace
products. Their purpose is to provide a visual differentiator between items in
a list or symbolize types of content.

<div style="margin-top:64px;">
  {% assign iconCount = 1 %}
  {%for icon_hash in site.data.icons%}
    {%assign icon=icon_hash[1]%}
    {% if icon.group == "object" %}
      {% if iconCount == 1 %}
      <div class="hxRow ws-icon-row">
      {% endif %}
        <div class="ws-icon-chip hxCol-md-2">
            <span class="ws-icon-chip-icon"><i class="{{icon.class}}"></i></span>
            <span class="ws-icon-chip-text">{{icon.class}}</span>
            <span class="ws-icon-chip-text">{{icon.id}}</span>
        </div>
        {% assign iconCount = iconCount | plus: 1 %}
        {% if iconCount == 7 %}
          </div>
          {%assign closeDiv = true%}
          {% assign iconCount = 1 %}
        {% else %}
          {%assign closeDiv = false%}
        {% endif %}
    {% endif %}
  {%endfor%}
  {%if closeDiv == false%}
      </div>
  {% endif %}
</div>

# Validation Icons {% include inprogress.html %}
Validation icons can be used to provide checks, errors, and warnings in forms.
They also can be used to draw users' attention to statuses or messages. Use the
colors blow to draw the users' attention. Otherwise use the icons in black,
gray, or white, corresponding to the color of the body text of the background.

<div style="margin-top:64px;">
  {% assign iconCount = 1 %}
  {%for icon_hash in site.data.icons%}
    {%assign icon=icon_hash[1]%}
    {% if icon.group == "validation" %}
      {% if iconCount == 1 %}
      <div class="hxRow ws-icon-row">
      {% endif %}
        <div class="ws-icon-chip hxCol-md-2">
            <span class="ws-icon-chip-icon" style="color:{{icon.color}}"><i class="{{icon.class}}"></i></span>
            <span class="ws-icon-chip-text">{{icon.class}}</span>
            <span class="ws-icon-chip-text">{{icon.id}}</span>
        </div>
        {% assign iconCount = iconCount | plus: 1%}
        {% if iconCount == 7 %}
      </div>
          {%assign closeDiv = true%}
          {% assign iconCount = 1 %}
        {% else %}
          {%assign closeDiv = false%}
        {% endif %}
    {% endif %}
  {%endfor%}
  {%if closeDiv == false%}
      </div>
  {% endif %}
</div>
