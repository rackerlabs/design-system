---
title: Footer
parent: Navigation
layout: component
category: Components
usage: |
  The footer lives at the bottom of every page to help visitors find globally applicable, non-critical information or navigation such as copyright info and links to legal terms.
preview-image: preview-images/footer-thumbnail.svg
resource: true
status: stable
last-modified: 2017-10-24
helix-ui-css: na
helix-ui-javascript: na
helix-ui-note: Implemented by Pilot
pageLink: none
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Best practices for footers

- Footer items often get overlooked in customer-facing contexts, so avoid placing critical or dynamic content there.
- For customer-facing applications the footer contains the following:
    - Rackspace copyright and year
    - A link to [Website Terms](https://www.rackspace.com/information/legal/websiteterms) and conditions
    - A link to the [Privacy Policy](https://www.rackspace.com/information/legal/privacystatement)

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Place the footer at the bottom of every page."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/footer/footer-scope.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Footer specifications

- The footer must span the width of the page.
- All footer content starts after the gutter at 20px.
- The footer container is 40px tall with text centered vertically.
- Footer items are spaced 32px apart.
- Links are colored `cyan 500` on dark backgrounds, but otherwise behave as described in the [Links documentation]({{site.url}}/style/typography.html#link).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/footer/footer-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
