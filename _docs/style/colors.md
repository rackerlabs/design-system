---
title: Color Palette
layout: docs
category: Style
usage: |
  The Helix color palette consists of deep modern hues juxtaposed with simple monochromatic environments. Our color palette has been selected to enhance usability while adhering to accessibility criteria. Guidelines for color usage are outlined for individual components.
resource: true
status: complete
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## The Helix color span

Introductory text and a visual with hex codes...

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Guidelines

Consider the following guidelines when you construct a user interface (UI) that
includes the Helix color palette:

- xxxx
- xxxx
- xxxxx
- xxxxx

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a (UI) that
includes the Helix color palette:

- xxxx
- xxxx
- xxxxx
- xxxxx

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Accessibility

Consider the following accessibility Guidelines when you construct a (UI) that
includes the Helix color palette:

- xxxx
- xxxx
- xxxxx
- xxxxx

### Color combination Do's and Don'ts

A list of do's and don'ts...

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Application frame colors

Description and visual of application frame colors...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/colors/xxxxx.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Status colors

The Helix color palette includes an array of colors that you can use to communicate the status of an entity, object, or process..

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Criticality of information

Text here

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/colors/xxxxx.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Health status

These colors and labels communicate the well-being of an infrastructure object, for example, a load balancer or a server, or an entity, for example, an account or a user.

Because they tested well with customers, the Helix team encourage you to use the provided labels, although we recognize that certain use cases might deviate from these labels.

- **Critical**: Communicates that an object needs immediate attention.
- **Warning**: Communicates that something has gone wrong, or might go wrong, and that further investigation is required.
- **Ok**: Communicates that the object is working as expected, and that no intervention is required.
- **Disabled**: Communicates that an intentional act by a user has rendered the object unavailable.
- **Offline**: Communicates that a connection to the object cannot be established.
- **Unavailable**: Communicates that the system is unable to determine which of the other statuses apply.

*Bart talks about using grays for disabled (a lighter gray maybe?) and offline (a darker gray maybe?). No mention of a color to use for unavailable.*

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Health status colors"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/health-status-colors.png" width="894"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Health status iconography

In addition to color, include these icons as a means to communicate critical, warning and ok statuses. Do not use these icons for any other purpose. They are reserved solely for health status.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Health status iconography"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/health-status-iconography.png" width="792"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Health status text

You can pair a health status icon with text, but due to accessibility constraints, you cannot rely on text and text color alone to convey health status. You must always pair health status text with a health status icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Health status text"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/health-status-text-usage.png" width="706"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Health status states

In the default state, the critical, warning, and ok statuses map to the 500 band of red, yellow, and green, respectively.

In the hover state, use the 700 band of red, yellow, and green.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Health status states"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/health-status-states.png" width="484"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Non-health status

Sometimes it is important to communicate the status of an entity, without also communicating urgency or criticality. The purpose of a non-health status indicator is to draw the attention of the user so that they can explore further, when desired.

For example, use a badge or New! tag to indicate new items are available for review. These status labels use Orange 500.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge and New! tags"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/non-health-status.png" width="1060"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Status labels

You can also use status labels as a way to communicate the status of an object, for example, a support ticket. Unlike health status which is a closed system that prescribes that you use specific icons and colors to convey meaning, status labels are non-use case specific, and you can use them as you see fit. Review your system of statuses to determine which label to use.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Status labels"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/status-labels.png" width="1008"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Alert banners

Use an alert banner to communicate that a service has been or could be negatively impacted.

Do not construct an alert banner to display the status of a particular object or entity. An alert banner should apply to the larger system. For example, use the red alert banner to communicate that a server is unavailable and use the green alert banner to communicate that the server is back online.

Use the blue alert banner to communicate information.

Use the 100 span of red, yellow, and green to communicate critical, warning, and ok statuses.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Alert banners"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/alert-banners.png" width="1008"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Process status

You can also use the 100 band of red, yellow, and green to provide feedback to the user about system processing status. Helix includes three process statuses: success (green 100), failure (red 100), and in-process (yellow 100). **I'm confused, the heartbeat visual in Abstract shows Critical, Warning, and Ok...**

For example, you can add a heartbeat to a table row to indicate the status of a user being created.

You can also use other methods to communicate process status through tooltips and labels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Process status"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/color-palette/table-heartbeat.png" width="1008"/>

table-heartbeat.png

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Interactive states

Intro text here...

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Buttons

Text here

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/colors/xxxxx.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Inputs and controls

Text here

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/colors/xxxxx.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Primary colors

Intro text here...

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Secondary colors

Text here

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/colors/xxxxx.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Grayscale colors

Text here

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/colors/xxxxx.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Contrast tool

Text here

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/colors/xxxxx.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>
