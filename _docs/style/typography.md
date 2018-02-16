---
title: Typography
layout: docs
category: Style
usage: |
  Roboto is visually geometric and has a modern feel with a breadth of weights.
  It is an easily readable, accessible, and open-source font from Google Fonts. Included in the
  family are six weights that should be used for all headers, sub-headers, and
  body text. Hierarchy can be established using size and negative space.
resource: true
status: in-progress
code-element: true
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}
{% comment %}
  <div class="tempRobotoIntro">
    <div class="tempRobotoXL">
      Roboto <br> <span class="tempLarger">Aa</span>
    </div>
    <div class="tempRobotoList">
      ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>
      abcdefghijklmnopqrstuvwxyz<br>
      1234567890(,.;:?!$&amp;\*)
    </div>
  </div>
{% endcomment %}


## Header styles

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Page title

Page titles are the highest level of hierarchy. There should only be one on any page.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h1 class="hxPageTitle">Page Title</h1>' typeface="Roboto" weight="Thin (100)" fontsize="48px / 3.0rem" csscode="Gray 900" hex="#424242" linespace="1" bottomspace="32px / 2rem" %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Section title

Use section titles for titles of page sections. For example, if your page title is **Billing**, and the page has **Overview**, **Trends**, and **Payment methods** section headings, each section heading uses section titles.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h2 class="hxSectionTitle">Section title</h2>' typeface="Roboto" weight="Light (300)" fontsize="30px / 1.875rem" csscode="Gray 900" hex="#424242" linespace="1" bottomspace="28px / 1.75rem" %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Sub-section title
Sub-section titles are pretty versatile. Consider using them to title things like fieldsets, tables, Key-Value lists, and so on.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h3 class="hxSubSectionTitle">Sub-section title</h3>' typeface="Roboto" weight="Regular (400)" fontsize="24px / 1.5rem" csscode="Gray 900" hex="#424242" linespace="1" bottomspace="24px / 1.5rem" %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Container title
Container titles are good for titling within elements like cards, modals, and so on.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h4 class="hxContainerTitle">Container title</h4>' typeface="Roboto" weight="Medium (500)" fontsize="16px / 1rem" csscode="Gray 900" hex="#424242" linespace="1" bottomspace="24px / 1.5rem" %}
{% endcolumn %}
</div>
</section>


## Body styles

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Body text
Body text is the default style and should be used across the interface for most information.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p>Body Text</p>' typeface="Roboto" weight="Regular (400)" fontsize="16px / 1rem" csscode="Gray 900" hex="#424242" bottomspace="24px / 1rem" linespace="1.5" %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Subdued style

You can use the subdued style with any text 14px and taller. It is used to let more important text stand out. The subdued style is not the same as an inactive link or button.

*Do not subdue text on backgrounds darker than Gray 25 (#fafafa) or it will not pass accessibility standards.*

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p class="hxSubdued">Subdued Style</p>' typeface="Roboto" csscode="Gray 900" hex="#424242" %}
{% endcolumn %}

</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Sub-body text

Use sub-body text sparingly because it is the least readable size. You can use it when smaller text is appropriate, such as for icon labels.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p class="hxSubBody">Sub-Body Text</p>' typeface="Roboto" weight="Regular (400)" fontsize="12px / 0.75rem" csscode="Gray 900" hex="#424242" linespace="1.5" %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Caption

Captions apply to images and visualizations. They should be used to clarify images and not to introduce new, pertinent information.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p class="hxCaption">Caption</p>' typeface="Roboto" weight="Light (300)" fontsize="14px / 0.875rem" csscode="Gray 800" hex="#616161" linespace="1.5" %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Link
Links support styles for hover, active, and disabled states, and inherit size and spacing styles from the text to which they are applied. Helix does not support the visited state.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<a href="javascript:void(0);">Default</a><br><a class="hover" href="javascript:void(0);">Hover / Pressed</a><br><a class="disabled" disabled="disabled" href="javascript:void(0);">Disabled</a>' typeface="Roboto" default="Blue 700, #0d74d1" hover="Blue 500, #3391ff" disabled="Gray 800, #616161" %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Label
Use this style for form input labels and as titles for radio groups or sets of checkboxes. Note that checkbox and radio button labels intentionally do not match this style.

*Do not use labels on backgrounds darker than Gray 25 (#fafafa) or it will not pass accessibility standards.*

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<label class="hxLabel">Label</label>' typeface="Roboto" weight="Medium (500)" fontsize="14px / 0.875rem" csscode="Gray 750" hex="#6b6b6b" linespace="1.5"  %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">

## Readability

<div class="hxRow"  markdown="1">
{% column left:"hxCol-8" %}

The W3C recommends the following contrast ratios for body text and image text:

>Small text less than **14px** should have a contrast ratio of at least **4.5:1** against its background. Large text greater than **18px** or **14px bold** should have a contrast ratio of at least **3:1** against its background.

- Use a higher contrast ratio to show importance and hierarchy.
- [Use the WebAIM contrast checker](http://webaim.org/resources/contrastchecker/){:target="\_blank"} to check contrast ratios.
- The examples below illustrate the minimum contrast ratio.

{% endcolumn %}
</div>

<div class="hxRow">
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#FFFFFF" color="#757575" csscode="Gray 700 on Gray 0" hex="#757575 on #FFFFFF" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#FAFAFA" color="#616161" csscode="Gray 800 on Gray 25" hex="#616161 on #FAFAFA" ratio="5.9 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#f5f5f5" color="#616161" csscode="Gray 800 on Gray 50" hex="#616161 on #F5F5F5" ratio="5.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#EEEEEE" color="#616161" csscode="Gray 800 on Gray 100" hex="#616161 on #EEEEEE" ratio="5.3 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#e7e7e7" color="#616161" csscode="Gray 800 on Gray 200" hex="#616161 on #E7E7E7" ratio="5.0 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#e0e0e0" color="#616161" csscode="Gray 800 on Gray 300" hex="#616161 on #E0E0E0" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#d8d8d8" color="#424242" csscode="Gray 900 on Gray 400" hex="#424242 on #D8D8D8" ratio="7.1 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#BDBDBD" color="#424242" csscode="Gray 900 on Gray 500" hex="#424242 on #BDBDBD" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#9E9E9E" color="#333333" csscode="Gray 950 on Gray 600" hex="#333333 on #9E9E9E" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#757575" color="#000000" csscode="Gray 1000 on Gray 700" hex="#000000 on #757575" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#616161" color="#e0e0e0" csscode="Gray 300 on Gray 800" hex="#E0E0E0 on #616161" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#424242" color="#bdbdbd" csscode="Gray 500 on Gray 900" hex="#BDBDBD on #424242" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#333333" color="#9e9e9e" csscode="Gray 600 on Gray 950" hex="#9E9E9E on #333333" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#212121" color="#9e9e9e" csscode="Gray 600 on Gray 975" hex="#9E9E9E on #212121" ratio="6.0 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#000000" color="#757575" csscode="Gray 700 on Gray 1000" hex="#757575 on #000000" ratio="4.6 : 1" %}
</div>
