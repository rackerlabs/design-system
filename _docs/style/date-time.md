---
title: Date & Time
layout: docs
category: Style
usage: Rackspace is a global company, so it is critical to ensure that we represent time as clearly and consistently as possible to our customers.
preview-image:
resource: true
---

{% include toc.html %}

<section class="static-section"  markdown="1">
### Date

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Always use human-readable, international-friendly formatting when displaying date and time.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Date format"] [class:"image bg-light border"] %}
| Format | Examples |
| --- | --- |
| {month (mixed case 3 letter abbr)} {numerical day}, {year (4 digit)} | Nov 28, 2016<br/>Apr 2, 2016 |
| Use an en dash (&ndash;) to separate the dates in date ranges. | Nov 28, 2016&ndash;Nov 30, 2016 |
{: class="ui very basic collapsing celled table"}
{% endfigure %}

{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">

### Time

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Best Practices

-   Timezone control flow: Always convert to local time based on user
    preference. If unavailable, use assumed time based on browser. Only use
    UTC when no timezone preference can be determined or standardization
    across timezones is necessary.
-   Always convert to local time based on user preference. If unavailable, use
    assumed time based on browser. Only use UTC when no timezone preference can
    be determined or standardization across timezones is necessary.
-   Always offer users the ability to convert to UTC.
-   Add UTC offset to timezone only when that specificity is important (for
    example, "CST (UTC-6)").

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Time format"] [class:"image bg-light border"] %}
| Format | Examples |
| --- | --- |
| {time (12 hour clock)} {AM/PM (capitalized)} | 7:58 PM CST |
| {time (12 hour clock)} {timezone (capitalized 3 letter abbreviation)} | 12:59:16 AM CDT (UTC-5) |
{: class="ui very basic collapsing celled table"}
{% endfigure %}

{% endcolumn %}
</div>
</section>


<section class="static-section">

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Timestamp
-   Add seconds or milliseconds to the time only when that level specificity is
    important.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Timestamp format"] [class:"image bg-light border"] %}
| Format | Examples |
| --- | --- |
| {month (mixed case 3 letter abbr)} {numerical day}<br>{year (4 digit)} {time (12-hr)} {AM/PM (caps)} {timezone (caps 3 letter abbr)} | Nov 28, 2016 7:58 PM CST<br/>Apr 2, 2016 12:59:16 AM CDT (UTC-5) |
{: class="ui very basic collapsing celled table"}
{% endfigure %}

{% endcolumn %}
</div>
</section>


<section class="static-section"  markdown="1">

### Timeago

<div class="hxRow" markdown="1">
{% column left:"hxCol-8" %}

Timeago details the length of time that has elapsed since an event (for
example, a monitoring alarm or ticket update). This is helpful for orienting
users to the timeline of events.

#### Best Practices

-   Display order:

    -   Under 1 minute: "just now"
    -   After first minute: "1 min"
    -   After second minute: "\<#\> mins"
    -   After first hour: "1 hr"
    -   After second hour: "\<#\> hrs"
    -   After 24 hours: "1 day"
    -   After 48 hours: "\<month (mixed case 3 letter abbreviation)\> \<numerical day\>" (for example, "Nov 3")
-   Hover tooltip with "\<timestamp\>"

{% endcolumn %}

</div>
