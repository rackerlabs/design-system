---
title: Iconography
layout: docs
category: Style
usage: |
  Helix icons are easily identifiable simple shapes that visually
  represent abstract subject matter.
preview-image: style/preview-icons.svg
resource: true
---

{% include toc.html %}

## Download Current Release
The latest version of the icon font can be downloaded for use within your
project at
[this CDN link]({{site.cdn_url}}/fonts/DS_icon_font.zip)

### New Requests
If you need an additional icon, please submit your request to the
<a href="mailto:helix.designsystem@rackspace.com?subject=Icon Request">Helix Team</a>.

## Utility Icons
Utility icons are used in place of text to perform an action. They are based on
commonly used, established metaphors. Utility icons share the color style of
links or match the color of body text dependent on the background color.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "utility" %}
        <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3 hxCol-lg-2">
          <div class="hxRow">
            <div class="hxCol">
              <hx-icon type="{{icon.type}}"></hx-icon>
            </div>
          </div>
          <div class="hxRow">
            <div class="hxCol">
              <span class="ws-icon-chip-text">{{icon.type}}</span>
            </div>
          </div>
        </div>
    {% endif %}
  {% endfor %}
</div>

## Object Icons

Object icons should be used sparingly and consistently across Rackspace
products. Their purpose is to provide a visual differentiator between items in
a list or symbolize types of content.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "object" %}
      <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3 hxCol-lg-2">
        <div class="hxRow">
          <div class="hxCol">
            <hx-icon type="{{icon.type}}"></hx-icon>
          </div>
        </div>
        <div class="hxRow">
          <div class="hxCol">
            <span class="ws-icon-chip-text">{{icon.type}}</span>
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Validation Icons
Validation icons can be used to provide checks, errors, and warnings in forms.
They also can be used to draw users' attention to statuses or messages. Use the
colors blow to draw the users' attention. Otherwise use the icons in black,
gray, or white, corresponding to the color of the body text of the background.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "validation" %}
      <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3 hxCol-lg-2">
        <div class="hxRow">
          <div class="hxCol">
            <hx-icon type="{{icon.type}}"></hx-icon>
          </div>
        </div>
        <div class="hxRow">
          <div class="hxCol">
            <span class="ws-icon-chip-text">{{icon.type}}</span>
          </div>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
