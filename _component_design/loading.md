---
title: Loading
parent: Processing
layout: component
category: Components
usage: Teaser Text
preview-image:
resource: true
status: unknown
last-modified: 2017-08-17
---

{% include toc.html %}

Loading patterns should be used to set user expectations.

## Problems being addressed

-   Customers need more details about an item, but not necessarily need them
  every time they view a list.

-   Additional information may aid a customer in choosing between items in a
  list.

-   Additional information set is relatively small, more than would fit in a
  single row, but not enough to use a whole page.

## How the pattern solves these problems

Allows user to scan a list of options and dig into items of interest

## Known shortcomings

While this design has been tested, a risk of using the expandable row is that
users may now realize the functionality exists and may miss valuable
information.

## Load search results

Upon submit, any previous search results should be removed from the screen and
replaced with a loading spinner.

## Section loading

Any section that has more advanced interactions than just textual (includes
drop-downs, etc.).

# Loading Circle

## Indeterminate

Request that the user wait while something finishes when it’s not necessary to
indicate how long it will take

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-circle-indeterminate.svg){:width="60%"}
{% endfigure %}

## Determinate

Indicate how long an operation will take when the percentage complete is
detectable

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-circle-determinate.svg){:width="60%"}
{% endfigure %}

# Skeleton Screen

- Use skeleton screens for initial page load.
- Pages should load linearly to present the most immediate information first.
- Progressive loading to increase performance.
- When loading repeating item types, only show skeletons for the first three.

<p data-height="265" data-theme-id="0" data-slug-hash="ZpqxoP" data-default-tab="result" data-user="grothues" data-embed-version="2" data-pen-title="Loading Glisten" class="codepen">See the Pen <a href="https://codepen.io/grothues/pen/ZpqxoP/">Loading Glisten</a> by Elizabeth Grothues (<a href="http://codepen.io/grothues">@grothues</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

# Progress Bars {% include inprogress.html %}

Linear indicators can be as minimal as [e.1] to simply show loading progress or
they can contain specific context relevant to the relative region or placed in
proximity of a targeted item to give the user feedback on progress of the loading state (percentage value [e.2], continuous status messages [e.3], or items of a query[e.4]).</p>

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-linear.svg){:width="60%"}
{% endfigure %}

## Indeterminate

-   Indeterminate indicators should be using the primary color (@blue-500) of
  the system palette to style the actual indicator.

-   The background bar should always be using @grey-200 value.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-linear-indeterminate.svg){:width="60%"}
{% endfigure %}

## Determinate

-   Default determinate indicators should be using the primary color
  (@blue-500) in combination with the next darkest value (@blue-700) of the
  system palette to style the actual indicator.

-   The background bar should always be using @grey-200 value.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-linear-determinate.svg){:width="60%"}
{% endfigure %}

## Query-based
-   Query based determinate indicators should be using the primary color
  (@blue-500) in combination with the next darkest value (@blue-700) of the
  system palette to style the piece which is currently processing.

-   Completed parts should become solid and only use the primary color.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-linear-determinate.svg){:width="60%"}
{% endfigure %}

## Error

Default determinate indicators should be replaced by the error message
entirely. The error message should always provide the user with adequate
context as to why the error occurred.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-linear-error.svg){:width="60%"}
{% endfigure %}

## Error Query

Errors in query-based determinate indicators should indicate which part of the
query failed with @red-700 along with the error message replacing the text
below.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/loading-linear-error-query.svg){:width="60%"}
{% endfigure %}
