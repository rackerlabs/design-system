---
title: Typography
layout: docs
category: Style
usage: |
  Roboto is visually geometric and has a modern feel with a breadth of weights.
  It is an easily readable, accessible, and open-source font from Google Fonts. Included in the
  family are six weights that should be used for all headers, sub-headers, and
  body text. Hierarchy can be established using size and negative space.
preview-image: style/preview-typography.svg
resource: true
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

### Header Styles
{: .hxSubSectionTitle }

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Page Title
{: .hxContainerTitle }
Page Titles are the highest level of heirarchy. There should only ever be one on any page.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h1 class="hxPageTitle">Page Title</h1>' typeface="Roboto" weight="Thin (100)" size="48px / 3.0em" csscode="Grey 900" hex="#424242" bottomspace="32px / 2em" %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Section Title
{: .hxContainerTitle }
Use for titles of page sections. If your Page Title is “Billing” and the page has “Overview”, “Trends”, and “Payment Methods” sections, they would each be Section Titles.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h2 class="hxSectionTitle">Section Title</h2>' typeface="Roboto" weight="Regular (400)" size="24px / 1.5em" csscode="Grey 900" hex="#424242" bottomspace="24px / 1.5em" %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Sub-Section Title
{: .hxContainerTitle }
Sub-Section Titles are pretty versatile. Consider using them to title things like fieldsets, tables, Key-Value lists etc.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h3 class="hxSubSectionTitle">Sub-Section Title</h3>' typeface="Roboto" weight="Thin (100)" size="48px / 3.0em" csscode="Grey 900" hex="#424242" bottomspace="32px / 2em" %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Container Title
{: .hxContainerTitle }
Container Titles are good for titling within elements like cards, modals, etc.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<h4 class="hxContainerTitle">Container Title</h4>' typeface="Roboto" weight="Regular (400)" size="24px / 1.5em" csscode="Grey 900" hex="#424242" bottomspace="24px / 1.5em" %}
{% endcolumn %}
</div>

### Body Styles
{: .hxSubSectionTitle }

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Body Text
{: .hxContainerTitle }
Body text is the default style and should be used across the interface for most information.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p>Body Text</p>' typeface="Roboto" weight="Thin (100)" size="48px / 3.0em" csscode="Grey 900" hex="#424242" bottomspace="32px / 2em" %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Subdued Text
{: .hxContainerTitle }
Subdued style can be applied to any text 14px and taller, and is used to let more important text stand out. It is not the same as an inactive link or button.

Do not use subdued text on backgrounds darker than Gray 25 (#fafafa) or it will not pass accessibiity standards.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p class="hxSubdued">Subdued Text</p>' typeface="Roboto" weight="Regular (400)" size="24px / 1.5em" csscode="Grey 900" hex="#424242" bottomspace="24px / 1.5em" %}
{% endcolumn %}
</div>


<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Sub-Body Text
{: .hxContainerTitle }
Sub-body text should be used sparingly as it is the least readable size. We make it available for use cases when smaller text is appropriate, such as icon labels.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p class="hxSubBody">Sub-Body Text</p>' typeface="Roboto" weight="Regular (400)" size="24px / 1.5em" csscode="Grey 900" hex="#424242" bottomspace="24px / 1.5em" %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Caption
{: .hxContainerTitle }
Captions apply to images and visualizations. They should be used to clarify images and not introduce new, pertinent information.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<p class="hxCaption">Caption</p>' typeface="Roboto" weight="Thin (100)" size="48px / 3.0em" csscode="Grey 900" hex="#424242" bottomspace="32px / 2em" %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Link
{: .hxContainerTitle }
Adheres to text styling.  Does not support “visited” state.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<a href="javascript:void(0);">Link</a>' typeface="Roboto" weight="Regular (400)" size="24px / 1.5em" csscode="Grey 900" hex="#424242" bottomspace="24px / 1.5em" %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Label
{: .hxContainerTitle }
Use this style for form input labels and as titles for radio groups or sets of checkboxes. 

Note that checkbox and radio button labels are styled differently.

Do not use labels on backgrounds darker than Gray 25 (#fafafa) or it will not pass accessibiity standards.
{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<label class="hxLabel">Label</label>' typeface="Roboto" weight="Thin (100)" size="48px / 3.0em" csscode="Grey 900" hex="#424242" bottomspace="32px / 2em" %}
{% endcolumn %}
</div>


### Readability
{: .hxSubSectionTitle }

The W3C recommends the following contrast ratios for body text and image text:

>Small text less than **14px** should have a contrast ratio of at least
>**4.5:1** against its background. Large text greater than **18px** or
>**14px bold** should have a contrast ratio of at least **3:1** against its
>background.

The examples below illustrate the minimum contrast ratio. Use a higher contrast ratio to show importance and hierarchy. [This tool](http://webaim.org/resources/contrastchecker/) can be used to check contrast ratios.

<div class="hxRow">
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#FFFFFF" color="#757575" csscode="Grey 700 on Grey 0" hex="#757575 on #FFFFFF" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#FAFAFA" color="#616161" csscode="Grey 800 on Grey 25" hex="#616161 on #FAFAFA" ratio="5.9 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#f5f5f5" color="#616161" csscode="Grey 800 on Grey 50" hex="#616161 on #F5F5F5" ratio="5.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#EEEEEE" color="#616161" csscode="Grey 800 on Grey 100" hex="#616161 on #EEEEEE" ratio="5.3 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#e7e7e7" color="#616161" csscode="Grey 800 on Grey 200" hex="#616161 on #E7E7E7" ratio="5.0 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#e0e0e0" color="#616161" csscode="Grey 800 on Grey 300" hex="#616161 on #E0E0E0" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#d8d8d8" color="#424242" csscode="Grey 900 on Grey 400" hex="#424242 on #D8D8D8" ratio="7.1 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#BDBDBD" color="#424242" csscode="Grey 900 on Grey 500" hex="#424242 on #BDBDBD" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#9E9E9E" color="#333333" csscode="Grey 950 on Grey 600" hex="#333333 on #9E9E9E" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#757575" color="#000000" csscode="Grey 1000 on Grey 700" hex="#000000 on #757575" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#616161" color="#e0e0e0" csscode="Grey 300 on Grey 800" hex="#E0E0E0 on #616161" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#424242" color="#bdbdbd" csscode="Grey 500 on Grey 900" hex="#BDBDBD on #424242" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#333333" color="#9e9e9e" csscode="Grey 600 on Grey 950" hex="#9E9E9E on #333333" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#212121" color="#9e9e9e" csscode="Grey 600 on Grey 975" hex="#9E9E9E on #212121" ratio="6.0 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#000000" color="#757575" csscode="Grey 700 on Grey 1000" hex="#757575 on #000000" ratio="4.6 : 1" %}
</div>
