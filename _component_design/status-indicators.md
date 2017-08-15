---
title: Status Indicators
layout: component
category: Components
usage: Teaser Text
preview-image:
resource: false
---

{% include toc.html %}

# Structure {% include inprogress.html %}

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/status-indicators-structure.svg){:width="100%"}
{% endfigure %}

## [S1] Status Indicator Circle

The status indicator circle is to provide additional visual aid in interpreting
the status at a glance, and for visual scan of long results lists. It only uses
the following colors:

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/status-indicators-circle.svg){:width="100%"}
{% endfigure %}

Any other status by default uses the empty circle. Examples include: “Closed,
Terminated, Approval Denied, Transferred, In Process, Pending”.

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/status-indicators-circle-null.svg){:width="100%"}
{% endfigure %}

## [S2] Status Text

Status text is to provide additional context around the status, in a brief,
usually one-word message. Character length is between 3 - 8 characters
(including spaces), anything longer must be truncated with ellipses. The Status
Pill should never stretch or shrink.

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/status-indicators-text.svg){:width="100%"}
{% endfigure %}

## [S3] Status Container

The status container--the pill shape itself--should always be used to contain
the status indicator and text. It uses a border-radius of 6px, only uses a
background fill on a panel/container content view, results will never have a
background fill. As stated in [S2], the container should never be stretched or
shrunk from its given size.

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/status-indicators-container.svg){:width="100%"}
{% endfigure %}

# Results List {% include inprogress.html %}

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/status-indicators-results-list.svg){:width="100%"}
{% endfigure %}

# Content Headers {% include inprogress.html %}

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/status-indicators-content-headers.svg){:width="100%"}
{% endfigure %}
