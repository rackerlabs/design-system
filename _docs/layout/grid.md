---
title: Grid
layout: docs
category: Layout
usage: The Helix 12-column grid provides structure for website content.
preview-image: components/preview-grid.svg
resource: true
---

{% include toc.html %}

# Responsive 12 Column Grid

The Helix grid is a customized Bootstrap-v3 responsive grid. It’s based on a
12-column layout and has multiple tiers, one for each media query range. The
major difference from the Bootstrap grid is the Helix gutter width is 20px.

## Usage
The grid is intended to be applied to the content area of the page, excluding
site navigation.

<div class="hxRow">
{% column left:"hxCol-md-6" %}
{% figure [caption:"Application with left navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/side-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol-md-6" %}
{% figure [caption:"Application with top navigation"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/top-nav.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

## Specs

| | Extra small<br><small>&lt;576px</small> | Small<br><small>≥576px</small> | Medium<br><small>≥768px</small> | Large<br><small>≥992px</small> | Extra large<br><small>≥1200px</small> |
|--|--|--|--|--|--|
| Max container width | None (auto) | 540px | 720px | 960px | 1140px |
| Class prefix | `.col-xs-` | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-` |
| # of columns{::nomarkdown}</td><td colspan="5" style="text-align: center;">12</td></tr><tr><td>Gutter width</td><td colspan="5"style="text-align: center;">20px (10px on each side of a column)</td></tr></table>{:/nomarkdown}
{:class="ui striped table" style="margin-bottom:3em;"}

## Demo

Resize your browser to see how columns scale and stack on smaller devices.

<div id="device">

  <h4>Single Column</h4>
  <div class="hxRow">
    <div class="hxCol-xs-12 hxCol-xs-12 hxCol-md-12">
      <div class="grid-bg">1/1</div>
    </div>
  </div>

  <h4>Two Columns</h4>
  <div class="hxRow">
    <div class="hxCol-md-6">
      <div class="grid-bg">1/2</div>
    </div>
    <div class="hxCol-md-6">
      <div class="grid-bg">1/2</div>
    </div>
  </div>

  <h4>Three Columns</h4>
  <div class="hxRow">
    <div class="hxCol-xs-12 hxCol-md-4">
      <div class="grid-bg">1/3</div>
    </div>
    <div class="hxCol-xs-12 hxCol-md-4">
      <div class="grid-bg">1/3</div>
    </div>
    <div class="hxCol-xs-12 hxCol-md-4">
      <div class="grid-bg">1/3</div>
    </div>
  </div>

  <h4>Four Columns</h4>
  <div class="hxRow">
    <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3">
      <div class="grid-bg">1/4</div>
    </div>
    <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3">
      <div class="grid-bg">1/4</div>
    </div>
    <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3">
      <div class="grid-bg">1/4</div>
    </div>
    <div class="hxCol-xs-12 hxCol-sm-6 hxCol-md-3">
      <div class="grid-bg">1/4</div>
    </div>
  </div>

  <h4>Mixed Columns</h4>
  <div class="hxRow">
    <div class="hxCol-xs-12 hxCol-md-8">
      <div class="grid-bg">2/3</div>
    </div>
    <div class="hxCol-xs-12 hxCol-md-4">
      <div class="grid-bg">1/3</div>
    </div>
  </div>
</div>
