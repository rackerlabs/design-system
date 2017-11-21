---
title: Footer
parent: Navigation
layout: component
category: Components
usage: |
  The footer lives at the bottom of every page to help visitors find globally applicable, non-critical information or navigation such as copyright info and links to legal terms.
preview-image: preview-images/footer-thumbnail.svg
resource: true
status: in-progress
last-modified: 2017-10-24
---

{% include toc.html %}

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Best practices for footers

- Footer items often get overlooked in customer-facing contexts, so avoid placing critical or dynamic content there.
- For customer-facing applications the footer contains the following:
    - Rackspace copyright and year
    - A link to [Website Terms](https://www.rackspace.com/information/legal/websiteterms) and conditions
    - A link to the [Privacy Policy](https://www.rackspace.com/information/legal/privacystatement)

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Place the footer at the bottom of every page."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/footer/footer-scope.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Footer specifications

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- The footer must span the width of the page.
- All footer content starts after the gutter at 20px.
- The footer container is 40px tall with text centered vertically.
- Footer items are spaced 32px apart.
- Links are colored `cyan 500` on dark backgrounds, but otherwise behave as described in the [Links documentation]({{site.url}}/style/typography.html#link).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/footer/footer-specs.svg)
{% endfigure %}
{% endcolumn %}
</div>
