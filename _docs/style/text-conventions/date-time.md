---
title: Date and Time
layout: docs
parent: Text Conventions
category: Style
usage: |
  Rackspace is a global company, so it is critical that we represent date and time as clearly and consistently as possible to our customers.
resource: false
status: complete
last-modified: 2018-06-28
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Date

Dates are displayed differently in different countries, so you must use a date format that's explicit and consistent and that global users can't misinterpret.

Unless space is limited, always show dates in the following format: month day, year. Always spell out the month.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark" class="good-idea"></hx-icon> Use | <hx-icon type="times" class="bad-idea"></hx-icon> Don't Use |
| --- | --- |
| November 12, 2018 | November 12th, 2018<br />11/12/2018<br />11/12/18<br />11-12-18<br />12/11/18 |
{: .hxTable .docTable}
{% endfigure %}

{% endcolumn %}
</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### Dates in sentences

When the month, day, and year are embedded in a sentence, use a comma before and after the year. When only the month and year are embedded in a sentence, omit the commas unless the syntax would ordinarily require a comma following the year.

Consider the following examples for sentences that contain a date:

- Any sites that are using MySQL 4 after November 1, 2018, will be automatically migrated to MySQL 5.
- The Alert Logic Security Research Team used 12 months of security event data captured from July 2017 through June 2018.
- As of September 2018, a subset of customer accounts will not be billed for actual usage in comparison to their preselected SQL Server storage allocations.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### All-numeric dates

Use an all-numeric date only in the following situations:

- Space is limited, as in a table or figure.
- You need to show a literal representation of the date as it's displayed in the software.

Because all-numeric dates are interpreted differently in different countries, explain the format of a numeric date, and use a consistent format throughout the documentation. If possible, use the ISO 8601 format, which is yyyy-mm-dd (for example, 2018-11-10 for November 10, 2018).

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Time

You can show time by using either the 24-hour or 12-hour clock.

- If the control panel that you're documenting shows or uses the 12-hour clock, then be consistent with the interface and use the 12-hour clock.
- The 24-hour clock is the preferred format for international audiences and the format used in most computer systems, so use the 24-hour clock when possible.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### 12-hour clock

When you use the 12-hour clock to show time, use the following guidelines:

- Use a colon to separate the hours and minutes. For example, use **10:29 AM**.
- If the minutes are 00, you don't need to show them unless you're showing a span of time that includes a time with minutes. For example, use **6 PM** and **6:00 PM to 8:30 PM**.
- Use uppercase letters for abbreviations of ante meridiem (AM) and post meridiem (PM). Separate these abbreviations from the time with a space. For example, use **6:00 PM** and **10:21 AM**.
- When specifying time zones, show both the spelled-out name and the abbreviation. Use title-style capitalization to show the name; use uppercase letters and no periods for the abbreviation. For example, use **10:30 AM Central Time (CT)**.
- Avoid references to standard and daylight saving time because the appropriate designation changes frequently. However, if you need to include such a reference, insert *S* (for standard) or *D* (for daylight) as the second character in the abbreviation. For example, use **1:30 PM Central Standard Time (CST)**.
- When referring to 12 AM, use *12 midnight* or just *midnight*. When referring to 12 PM, use *12 noon* or just *noon*.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### 24-hour clock

When you use the 24-hour clock to show time, use the following guidelines:

- Use a colon to separate the hours, minutes, and seconds. For example, use **18:30:59**.
- Show the hours, minutes, and seconds with two digits each, even if the leading digit is 0. For example, use **08:29:37**.
- When possible, display the local time as specified in user preferences. If time preferences have not been set, use the assumed time based on the browser. Only use UTC when no time zone preference can be determined or standardization across time zones is necessary.
- If you need to show a time zone, use Coordinated Universal Time (UTC), and indicate the time-zone offset from UTC. For example, use **10:30:00 (UTC -6) (refers to CT)**.
- When you refer to 12 p.m., add **(noon)** to the time. For example, use **12:00:00 (noon)**.
- When you refer to 12 a.m., add **(midnight)** to the time. For example, use **00:00:00 (midnight)**.

{% endcolumn %}

</div>

</section>

<section class="static-section">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Timestamp

Add seconds or milliseconds to the time only when that level specificity is important.

For example, use **April 2, 2018 12:59:16 AM CDT (UTC-5)**.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Timeago

Timeago is a measure of the length of time that has elapsed since an event has taken place (for
example, a monitoring alarm or ticket update). Timeago helps users understand the timeline of events.

Use the following conventions for elapsed time:

- Under 1 minute: **just now**
- After first minute: **1 min**
- After second minute: **\<#\> mins**
- After first hour: **1 hr**
- After second hour: **\<#\> hrs**
- After 24 hours: **1 day**
- After 48 hours: **\<month (mixed case 3 letter abbreviation)\> \<numerical day\>** (for example, "Nov 3")
- Hover tooltip with **\<timestamp\>**: Construct timeago tooltips to reveal the timestamp of the event. This approach reduces the need for the user to search for the timestamp information.

{% endcolumn %}

</div>

</section>
