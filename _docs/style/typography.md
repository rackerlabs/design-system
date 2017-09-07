---
title: Typography
layout: docs
category: Style
usage: |
  Roboto is the preferred font when designing with the Helix design system.
preview-image: style/preview-typography.svg
resource: true
---

{% include toc.html %}

# Roboto Arigato

Roboto is visually geometric and has a modern feel with a breadth of weights.
It is an easily readable, accessible, and open-source font from
[Google Fonts](https://www.google.com/fonts/specimen/Roboto). Included in the
family are six weights that should be used for all headers, sub-headers, and
body text. Hierarchy can be established using size and
[negative space](http://www.fastcodesign.com/3046656/why-white-space-is-crucial-to-ux-design).

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

## Styles
<div class="hxRow">
{% include type-styles.html htmlexample='<span class="display-font" style="color: #424242">Display</span>' name="Display" typeface="Roboto" weight="Thin (100)" size="48px / 3.0em" csscode="Grey 900" hex="#424242" bottomspace="32px / 2em" %}
{% include type-styles.html htmlexample='<h1 class="headerDisplayList">Main Heading</h1>' name="H1" typeface="Roboto" weight="Regular (400)" size="24px / 1.5em" csscode="Grey 900" hex="#424242" bottomspace="24px / 1.5em" %}
</div>

<div class="hxRow">
{% include type-styles.html htmlexample='<h1 class="headerDisplayList header-alt">Light Heading</h1>' name="H1 Light" typeface="Roboto" weight="Thin (100)" size="24px / 1.5em" csscode="Grey 900" hex="#424242" bottomspace="24px / 1.5em" %}
{% include type-styles.html htmlexample='<h2 class="headerDisplayList">Subheading</h2>' name="H2" typeface="Roboto" weight="Regular (400)" size="20px / 1.25em" csscode="Grey 900" hex="#424242" bottomspace="12px / 0.75em" %}
</div>

<div class="hxRow">
{% include type-styles.html htmlexample='<h3 class="headerDisplayList">Subheading</h3>' name="H3" typeface="Roboto" weight="Medium (500)" size="16px / 1.25em" csscode="Grey 900" hex="#424242" bottomspace="12px / 0.75em" %}
{% include type-styles.html htmlexample='<span class="body1 headerDisplayList">Body 1</span>' name="Body" typeface="Roboto" weight="Regular (400)" size="16px / 1em" csscode="Grey 900" hex="#424242" linespace="24px / 1.5em" bottomspace="24px/1.5em" %}
</div>

<div class="hxRow">
{% include type-styles.html htmlexample='<a>Link</a>' name="Link" typeface="Roboto" weight="Regular (400)" size="16px / 1em" csscode="Cyan 900" hex="#OC7C84" linespace="24px / 1.5em" %}
{% include type-styles.html htmlexample='<span class="body2 headerDisplayList">Body 2</span>' name="Body 2" typeface="Roboto" weight="Regular (400)" size="14px / .875em" csscode="Grey 900" hex="#424242" %}
</div>

<div class="hxRow">
{% include type-styles.html htmlexample='<span class="subtext headerDisplayList">Sub-Body</span>' name="Sub-Body" typeface="Roboto" weight="Regular (400)" size="13px / .813em" csscode="Grey 900" hex="#424242" %}
{% include type-styles.html htmlexample='<span class="statusTag headerDisplayList">Status Tag</span>' name="Tag" typeface="Roboto" weight="Regular (400)" size="12px / .75em" csscode="Grey 900" hex="#424242" %}
</div>

# Readability

The W3C recommends the following contrast ratios for body text and image text:

>Small text less than **14px** should have a contrast ratio of at least
>**4.5:1** against its background. Large text greater than **18px** or
>**14px bold** should have a contrast ratio of at least **3:1** against its
>background.

The examples below illustrate the minimum contrast ratio. Use a higher contrast
ratio to show importance and hierarchy.
[This tool](http://webaim.org/resources/contrastchecker/) can be used to check
contrast ratios.

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
