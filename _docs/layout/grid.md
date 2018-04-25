---
title: Grid
layout: docs
category: Layout
usage: The Helix 12-column grid provides structure for website content.
resource: true
status: stable
code-element: true
helix-ui-css: true
helix-ui-javascript: false
helix-ui-name: grid
---

{% include toc.html %}

<section class="static-section"  markdown="1">
### Responsive 12 Column Grid

The Helix grid is a customized Bootstrap-v3 responsive grid. It’s based on a
12-column layout and has multiple tiers, one for each media query range. The
major difference from the Bootstrap grid is the Helix gutter width is 20px.
</section>

<section class="static-section"  markdown="1">
### Usage
The grid is intended to be applied to the content area of the page, excluding
site navigation.

<div class="hxRow">
{% column left:"hxCol hxSpan-6-md" %}
{% figure [caption:"Application with left navigation"] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/side-nav.svg"/>
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol hxSpan-6-md" %}
{% figure [caption:"Application with top navigation"] [class:"image bg-light border"] %}
<embed src="{{site.cdn_url}}/img/layout/top-nav.svg"/>
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
### Specifications

| | Extra small<br><small>&lt;576px</small> | Small<br><small>≥576px</small> | Medium<br><small>≥768px</small> | Large<br><small>≥992px</small> | Extra large<br><small>≥1200px</small> |
|--|--|--|--|--|--|
| Max container width | None (auto) | 540px | 720px | 960px | 1140px |
| # of columns{::nomarkdown}</td><td colspan="5" style="text-align: center;">12</td></tr><tr><td>Gutter width</td><td colspan="5"style="text-align: center;">20px (10px on each side of a column)</td></tr></table>{:/nomarkdown}
{:class="hxTable" }
</section>


### Demo

Resize your browser to see how columns scale and stack on smaller devices.

<section class="static-section"  markdown="1">
  <h4 class="hxHeading-4">Single Column</h4>
  <div class="hxRow">
    <div class="hxCol hxSpan-12-xs hxSpan-12-xs hxSpan-12-md">
      <div class="grid-bg">1/1</div>
    </div>
  </div>
</section>

<section class="static-section"  markdown="1">
  <h4 class="hxHeading-4">Two Columns</h4>
  <div class="hxRow">
    <div class="hxCol hxSpan-6-md">
      <div class="grid-bg">1/2</div>
    </div>
    <div class="hxCol hxSpan-6-md">
      <div class="grid-bg">1/2</div>
    </div>
  </div>
</section>

<section class="static-section"  markdown="1">
  <h4 class="hxHeading-4">Three Columns</h4>
  <div class="hxRow">
    <div class="hxCol hxSpan-12-xs hxSpan-4-md">
      <div class="grid-bg">1/3</div>
    </div>
    <div class="hxCol hxSpan-12-xs hxSpan-4-md">
      <div class="grid-bg">1/3</div>
    </div>
    <div class="hxCol hxSpan-12-xs hxSpan-4-md">
      <div class="grid-bg">1/3</div>
    </div>
  </div>
</section>

<section class="static-section"  markdown="1">
  <h4 class="hxHeading-4">Four Columns</h4>
  <div class="hxRow">
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md">
      <div class="grid-bg">1/4</div>
    </div>
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md">
      <div class="grid-bg">1/4</div>
    </div>
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md">
      <div class="grid-bg">1/4</div>
    </div>
    <div class="hxCol hxSpan-12-xs hxSpan-6-sm hxSpan-3-md">
      <div class="grid-bg">1/4</div>
    </div>
  </div>
</section>

<section class="static-section"  markdown="1">
  <h4 class="hxHeading-4">Mixed Columns</h4>
  <div class="hxRow">
    <div class="hxCol hxSpan-12-xs hxSpan-8-md">
      <div class="grid-bg">2/3</div>
    </div>
    <div class="hxCol hxSpan-12-xs hxSpan-4-md">
      <div class="grid-bg">1/3</div>
    </div>
  </div>
  </section>
