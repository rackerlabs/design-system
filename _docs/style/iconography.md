---
title: Iconography
layout: docs
category: Style
usage: |
  Helix icons are easily identifiable, simple shapes that visually
  represent abstract subject matter.
resource: true
code-element: true
status: stable
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-8-lg" %}

### Best practices

These guidelines are not exhaustive, and they are not necessarily applicable to every situation. However, they do cover the major areas for concern when using icons in your design:

- Consider whether adding an icon to your interface increases usability and clarity.
- Use them to communicate status or to help differentiate objects in a list.
- Properly used icons make it easier to intuit an experience.
- Do not use icons as aesthetic decoration, but rather for communication.
- Avoid obscure metaphors, opting for text labels or annotations instead.
- The more icons you use, the less attention they draw.

{% endcolumn %}

</div>

</section>

## Icons

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
{:style="padding-bottom:14px"}

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "utility" %}
      <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md hxSpan-2-lg">
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
{:style="padding-bottom:14px"}

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "object" %}
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md hxSpan-2-lg">
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

### Status icons

Status icons can be used to provide checks, errors, and warnings in forms. They also can be used to draw users’ attention to statuses or messages. Use the appropriate alert colors to draw the users’ attention. Otherwise use the icons in black, gray, or white, corresponding to the color of the body text of the background.
{:style="padding-bottom:14px"}

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "status" %}
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md hxSpan-2-lg">
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

### Platform icons

Only use these icons to indicate the platform service for which it stands.
{:style="padding-bottom:14px"}

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "platform" %}
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md hxSpan-2-lg">
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

### Keyboard interactions icons

The following icons should only be used for indicating keyboard commands. Avoid using keyboard icons in the interface (except for in tooltips where appropriate). Use in help documentation
{:style="padding-bottom:14px"}

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "keyboard" %}
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md hxSpan-2-lg">
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

### Logos

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

In addition to the icons provided by Helix, designers may also require access to Rackspace brand assets while creating an interface. These assets cannot be stored within a public github repository for legal reasons. These assets instead will need to be sourced from their official CDN link.

Rackspace US, Inc. retains copyright and/or applicable rights to all text and graphic images supplied on the Rackspace websites. For additional information see [Copyrights & Trademarks](https://www.rackspace.com/information/legal/copyrights_trademarks)

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}
<!-- Do not use the embed tag on this image when we refactor SVGs -->
{% figure [caption: "<a target='_blank' href='http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/fanatiguy-black.svg'>Fanatiguy - Black</a>"][class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/fanatiguy-black.svg){:width="100px"}
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}
<!-- Do not use the embed tag on this image when we refactor SVGs -->
{% figure [caption: "<a target='_blank' href='http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/fanatiguy-color.svg'>Fanatiguy - Color</a>"][class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/fanatiguy-color.svg){:width="100px"}
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}
<!-- Do not use the embed tag on this image when we refactor SVGs -->
{% figure [caption: "<a target='_blank' href='http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/fanatiguy-white.svg'>Fanatiguy - White</a>"][class:"image bg-dark border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/fanatiguy-white.svg){:width="100px"}
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}
<!-- Do not use the embed tag on this image when we refactor SVGs -->
{% figure [caption:"<a target='_blank' href='http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/corporate-logo-black.svg'>Rackspace logo - Black</a>"][class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/corporate-logo-black.svg){:width="286px"}
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}
<!-- Do not use the embed tag on this image when we refactor SVGs -->
{% figure [caption:"<a target='_blank' href='http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/corporate-logo-color.svg'>Rackspace logo - Color</a>"][class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/corporate-logo-color.svg){:width="286px"}
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}
<!-- Do not use the embed tag on this image when we refactor SVGs -->
{% figure [caption:"<a target='_blank' href='http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/corporate-logo-white.svg'>Rackspace logo - White</a>"][class:"image bg-dark border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/corporate-logo-white.svg){:width="286px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

## Specifications

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Size

The Helix icon sets natural size is 16x16px. This is referred to as a base size. All icons are made with this base size in mind to ensure the icon still accurately communicates its intent naturally at small sizes.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Scaling icons should be done proportionally in multiples of 8."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/icons/icon-sizing.png" width="540"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Color

Helix icon colors are determined by the background color and in most cases correspond with text color (except for status icons). Refer tot he values in the table to maintain a 4.51 minimum contrast ratio.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/icons/icon-color.png" width="660"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Status icon colors

Status icons can be used to provide checks, errors, and warnings in forms. They also can be used to draw users' attention to statuses or alert messages.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/icons/icon-alert-colors.png" width="540"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

## Icon construction

<section class="static-section"  markdown="1">

### Icon grid

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Helix icons are constructed on a 16x16 pixel grid. The icon grid is used to facilitate consistency and establish a clear set of rules for the positioning of graphic elements.

Keep icon shape weighted towards the middle area of the grid, reserving the outer 1px margin for visual weighting and maintaining relative aspect ratios. This standardization results in a flexible but coherent system.  

Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain a consistent visual proportion across all icons.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Differences in padding ensure that icons will look similar in size regardless of their shape."][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/icons/icon-grid.png" width="598"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

### Shape

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

- When lines principally shape your icon, use a 2px stroke for the foundation and a 1px line for extra details.
- Use rounded end caps and rounded corners to keep the icon smooth and friendly.
- Use square exterior corner when indicating direction.
- Interior corners should be square. Do not round the corners of interior shapes.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/icons/icon-shape.png" width="598"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

### Silhouette

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

- A 1px corner radius is used on the silhouette form of the icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/icons/icon-silhouette.png" width="598"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

### Weight

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Icons of the same size should have the same visual weight.

- Use a balance of positive and negative space to create the icon shape.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/icons/icon-weight.png" width="598"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
