---
title: Date and time
layout: docs
parent: Text
category: style
usage: |
  Rackspace is a global company, so it is critical to ensure that we represent time as clearly and consistently as possible to our customers.
resource: true
status: complete
last-modified: 2018-06-04
---

{% include toc.html %}


{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Date

Always use human-readable, international-friendly formatting when displaying date and time.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date format examples"] [class:"image bg-light border"] %}
| Format | Examples |
| --- | --- |
| {month (mixed case 3 letter abbr)} {numerical day}, {year (4 digit)} | Nov 28, 2016<br/>Apr 2, 2016 |
| Use an en dash (&ndash;) to separate the dates in date ranges. | Nov 28, 2016&ndash;Nov 30, 2016 |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Time

Consider the following best practices when formatting time:

- Timezone control flow: Always convert to local time based on user preference. If unavailable, use assumed time based on browser. Only use UTC when no timezone preference can be determined or standardization across timezones is necessary.
- Always convert to local time based on user preference. If unavailable, use assumed time based on browser. Only use UTC when no timezone preference can be determined or standardization across timezones is necessary.
- Always offer users the ability to convert to UTC.
- Add UTC offset to timezone only when that specificity is important (for example, "CST (UTC-6)").

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Time format examples"] [class:"image bg-light border"] %}
| Format | Examples |
| --- | --- |
| {time (12 hour clock)} {AM/PM (capitalized)} | 7:58 PM CST |
| {time (12 hour clock)} {timezone (capitalized 3 letter abbreviation)} | 12:59:16 AM CDT (UTC-5) |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Timestamp

Add seconds or milliseconds to the time only when that level specificity is important.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Timestamp format examples"] [class:"image bg-light border"] %}
| Format | Examples |
| --- | --- |
| {month (mixed case 3 letter abbr)} {numerical day}<br>{year (4 digit)} {time (12-hr)} {AM/PM (caps)} {timezone (caps 3 letter abbr)} | Nov 28, 2016 7:58 PM CST<br/>Apr 2, 2016 12:59:16 AM CDT (UTC-5) |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-8" %}

## Timeago

Timeago is a measure of the length of time that has elapsed since an event (for
example, a monitoring alarm or ticket update). Timeago helps users understand the
timeline of events.

Consider the following best practices when determining the display order:

- Under 1 minute: "just now"
- After first minute: "1 min"
- After second minute: "\<#\> mins"
- After first hour: "1 hr"
- After second hour: "\<#\> hrs"
- After 24 hours: "1 day"
- After 48 hours: "\<month (mixed case 3 letter abbreviation)\> \<numerical day\>" (for example, "Nov 3")
- Hover tooltip with "\<timestamp\>"

{% endcolumn %}

</div>

</section>
