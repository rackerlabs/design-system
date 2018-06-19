---
title: Date and time
layout: docs
parent: Text Conventions
category: Style
usage: |
  Rackspace is a global company, so it is critical to ensure that we represent time as clearly and consistently as possible to our customers.
resource: false
status: complete
last-modified: 2018-06-18
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Date - New

Dates are displayed differently in different countries, so you must use a date format that's explicit and consistent and that global users can't misinterpret.

Unless space is limited, always show dates in the following format: month day, year. Always spell out the month.

{% include note.html content="Don't use ordinal numbers for dates. For example, don't use **January 1st**; use **January 1** instead." %}

{% figure [caption:"Date format examples"] [class:"image bg-light border"] %}
| Use | Avoid |
| --- | --- |
| November 12, 2018 | 12 Nov 2018 |
|  | 11/12/2018 |
|  | 11/12/18 |
|  | 12/11/18 |
|  | 18-11-12 |

{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

When the month, day, and year are embedded in a sentence, use a comma before and after the year. When only the month and year are embedded in a sentence, omit the commas unless the syntax would ordinarily require a comma following the year.

{% figure [caption:"Date format examples"] [class:"image bg-light border"] %}
| Use |
| --- |
| Any sites that are using MySQL 4 after November 1, 2011, will be automatically migrated to MySQL 5. <br><br> |
| The Alert Logic Security Research Team used 12 months of security event data captured from July 2010 through June 2011. <br><br> |
| As of September 2013, a subset of customer accounts weren't being billed for actual usage in comparison to their preselected SQL Server storage allocations. |

{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

Use an all-numeric date only in the following situations:

- Space is limited, as in a table or figure.
- You need to show a literal representation of the date as it's displayed in the software.

Because all-numeric dates are interpreted differently in different countries, explain the format of a numeric date, and use a consistent format throughout the documentation. If possible, use the ISO 8601 format, which is yyyy-mm-dd (for example, 2012-11-10 for November 10, 2012).

{% figure [caption:"Date format examples"] [class:"image bg-light border"] %}
| Use |
| --- |
| The value that's shown for 8/19/10 represents the average number of extents from data collections beginning August 19, 2010. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Time - New

You can show time by using either the 24-hour or 12-hour clock.

- If the interface that you're documenting shows or uses the 12-hour clock, then be consistent with the interface and use the 12-hour clock.
- The 24-hour clock is the preferred format for international audiences and the format used in most computer systems, so use the 24-hour clock when possible.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### 12-hour clock

When you use the 12-hour clock to show time, use the following guidelines:

- Use a colon to separate the hours and minutes. If the minutes are 00, you don't need to show them unless you're showing a span of time that includes a time with minutes.

- Use lowercase letters for abbreviations of ante meridiem (a.m.) and post meridiem (p.m.). Separate these abbreviations from the time with a space. Use periods in the abbreviations.

- When specifying time zones, show both the spelled-out name and the abbreviation. Show the name in lowercase letters; use uppercase letters and no periods for the abbreviation.

- Avoid references to standard and daylight saving time because the appropriate designation changes frequently. However, if you need to include such a reference, insert *S* (for standard) or *D* (for daylight) as the second character in the abbreviation.

- When referring to 12 a.m., use **12 midnight** or just **midnight**. When referring to 12 p.m., use **12 noon** or just **noon**.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date format examples"] [class:"image bg-light border"] %}
| Examples |
| --- |
| 10:29 a.m. |
| 6 p.m. |
| 6:00 p.m. to 8:30 p.m. |
| 10:30 a.m. central time (CT) |
| 1:30 p.m. central standard time (CST) |
| midnight |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### 24-hour clock

When you use the 24-hour clock to show time, use the following guidelines:

- Use a colon to separate the hours, minutes, and seconds.
- Show the hours, minutes, and seconds with two digits each, even if the leading digit is 0.
- If you need to show a time zone, use Coordinated Universal Time (UTC), and indicate the time-zone offset from UTC.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date format examples"] [class:"image bg-light border"] %}
| Examples |
| --- |
| 08:29:37 |
| 18:30:59 |
| 18:00:00 to 20:30:00 |
| 10:30:00 (UTC -6) (refers to CT) |
| 12:00:00 (noon) |
| 00:00:00 (midnight) |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Date - Old

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

## Time - Old

Consider the following best practices when formatting time:

- When possible, display the local time as specified in user preferences. If time preferences have not been set, use the assumed time based on the browser. Only use UTC when no timezone preference can be determined or standardization across timezones is necessary.
- Always offer users the ability to convert to UTC.
- Add a UTC offset to the timezone only when that level of specificity is important (for example, **CST (UTC-6)**).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Time format examples"] [class:"image bg-light border"] %}
| Format | Examples |
| --- | --- |
| {time (12 hour clock)} {AM/PM (capitalized)} {timezone (capitalized 3 letter abbreviation)} | 7:58 PM CST |
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
