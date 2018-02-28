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

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-8" %}

### Best practices

These guidelines are not exhaustive, and they are not necessarily applicable to every situation. However, they do cover the major areas for concern when using icons in your design:

- Consider whether adding an icon to your interface increases usability and clarity. 
- Use them to communicate status or to help differeniate objects in a list.
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

### Status icons

Status icons can be used to provide checks, errors, and warnings in forms. They also can be used to draw users’ attention to statuses or messages. Use the appropriate alert colors to draw the users’ attention. Otherwise use the icons in black, gray, or white, corresponding to the color of the body text of the background.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "status" %}
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

### Platform icons

Only use these icons to indicate the platform service for which it stands.

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "platform" %}
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

### Keyboard interactions icons

The following icons should only be used for indicating keyboard commands. Avoid using keyboard icons in the interface (except for in tooltips where appropriate). Use in help documentation

<div class="hxRow">
  {% for icon in site.data.icons %}
    {% if icon.group == "keyboard" %}
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

## Specifications

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Size

The Helix icon sets natural size is 16x16px. This is referred to as a base size. All icons are made with this base size in mind to ensure the icon still accurately communicates its intent naturally at small sizes.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Scaling icons should be done proportionally in multiples of 8."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/icons/icon-sizing.png){:width="540px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Color

Helix icon colors are determined by the background color and in most cases correspond with text color (except for status icons). Refer tot he values in the table to maintain a 4.51 minimum contrast ratio. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/icons/icon-color.png){:width="660px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Status icon colors

Status icons can be used to provide checks, errors, and warnings in forms. They also can be used to draw users' attention to statuses or alert messages. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/icons/icon-alert-colors.png){:width="540px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

## Icon construction

<section class="static-section"  markdown="1">

### Icon grid

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Helix icons are constructed on a 16x16 pixel grid. The icon grid is used to facilitate consistency and establish a clear set of rules for the positioning of graphic elements.  

Keep icon shape weighted towards the middle area of the grid, reserving the outer 1px margin for visual weighting and maintaining relative aspect ratios. This standardization results in a flexible but coherent system.  

Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain a consistent visual proportion across all icons.    

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Differences in padding ensure that icons will look similar in size regardless of their shape."][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/icons/icon-grid.png){:width="598px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

### Shape

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- When lines principally shape your icon, use a 2px stroke for the foundation and a 1px line for extra details.
- Use rounded end caps and rounded corners to keep the icon smooth and friendly.
- Use square exterior corner when indicating direction.
- Interior corners should be square. Do not round the corners of interior shapes.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/icons/icon-shape.png){:width="598px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">
 
### Silhouette

<div class="hxRow" markdown="1"> 

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- A 1px corner radius is used on the silhouette form of the icon.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/icons/icon-silhouette.png){:width="598px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

### Weight

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Icons of the same size should have the same visual weight. 

- Use a balance of positive and negative space to create the icon shape. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/icons/icon-weight.png){:width="598px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

