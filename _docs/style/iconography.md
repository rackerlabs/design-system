---
title: Iconography
layout: docs
category: Style
usage: |
  Helix icons are easily identifiable, simple shapes that visually
  represent abstract subject matter.
preview-image: style/preview-icons.svg
resource: true
code-element: true
status: stable
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}
<section class="static-section"  markdown="1">

### New requests
If you need an additional icon, submit your request to the
<a href="mailto:helix.designsystem@rackspace.com?subject=Icon Request">Helix Team</a>.
</section>

<section class="static-section"  markdown="1">

### Utility icons

Utility icons are used in place of text to perform an action. They are based on
commonly used, established metaphors. Utility icons share the color style of
links or match the color of body text dependent on the background color.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "utility" %}
      <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3 hxCol-lg-2">
        <div class="icon-chip">
          <hx-icon type="{{icon.type}}"></hx-icon>
        </div>
        <span class="icon-chip-text">{{icon.type}}</span>
      </div>
    {% endif %}
  {% endfor %}
</div>
</section>

<section class="static-section"  markdown="1">

### Object icons

Object icons should be used sparingly and consistently across Rackspace
products. Their purpose is to provide a visual differentiator between items in
a list or symbolize types of content.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "object" %}
    <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3 hxCol-lg-2">
      <div class="icon-chip">
        <hx-icon type="{{icon.type}}"></hx-icon>
      </div>
      <span class="icon-chip-text">{{icon.type}}</span>
    </div>
    {% endif %}
  {% endfor %}
</div>
</section>

<section class="static-section"  markdown="1">
### Validation icons

Validation icons can be used to provide checks, errors, and warnings in forms.
They also can be used to draw users' attention to statuses or messages. Use the
colors below to draw the users' attention. Otherwise, use the icons in black,
gray, or white, corresponding to the color of the body text of the background.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "validation" %}
    <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3 hxCol-lg-2">
      <div class="icon-chip">
        <hx-icon type="{{icon.type}}"></hx-icon>
      </div>
      <span class="icon-chip-text">{{icon.type}}</span>
    </div>
    {% endif %}
  {% endfor %}
</div>
</section>

