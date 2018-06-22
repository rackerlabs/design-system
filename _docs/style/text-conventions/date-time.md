---
title: Date and Time
layout: docs
parent: Text Conventions
category: Style
usage: |
  Rackspace is a global company, so it is critical to ensure that we represent date and time as clearly and consistently as possible to our customers.
resource: false
status: complete
last-modified: 2018-06-21
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Date

Dates are displayed differently in different countries, so you must use a date format that's explicit and consistent and that global users can't misinterpret.

Unless space is limited, always show dates in the following format: month day, year. Always spell out the month.

For example, use the following convention for date:

- November 12, 2018

**Do not** use the following conventions for date:

- 11/12/2018
- 11/12/18
- 12/11/18
- 11-12-18

{% include note.html content="Don't use ordinal numbers for dates. For example, don't use **January 1st**; use **January 1** instead." %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### Dates in sentences

When the month, day, and year are embedded in a sentence, use a comma before and after the year. When only the month and year are embedded in a sentence, omit the commas unless the syntax would ordinarily require a comma following the year.

Consider the following examples for sentences that contain a date:

- Any sites that are using MySQL 4 after November 1, 2011, will be automatically migrated to MySQL 5.
- The Alert Logic Security Research Team used 12 months of security event data captured from July 2010 through June 2011.
- As of September 2018, a subset of customer accounts weren't being billed for actual usage in comparison to their preselected SQL Server storage allocations.

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

- If the Control Panel that you're documenting shows or uses the 12-hour clock, then be consistent with the interface and use the 12-hour clock.
- The 24-hour clock is the preferred format for international audiences and the format used in most computer systems, so use the 24-hour clock when possible.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### 12-hour clock

When you use the 12-hour clock to show time, use the following guidelines:

- Use a colon to separate the hours and minutes. If the minutes are 00, you don't need to show them unless you're showing a span of time that includes a time with minutes.
- Use lowercase letters for abbreviations of ante meridiem (a.m.) and post meridiem (p.m.). Separate these abbreviations from the time with a space. Use periods in the abbreviations.
- When specifying time zones, show both the spelled-out name and the abbreviation. Show the name in lowercase letters; use uppercase letters and no periods for the abbreviation.
- Avoid references to standard and daylight saving time because the appropriate designation changes frequently. However, if you need to include such a reference, insert *S* (for standard) or *D* (for daylight) as the second character in the abbreviation.
- When referring to 12 a.m., use **12 midnight** or just **midnight**. When referring to 12 p.m., use **12 noon** or just **noon**.

Consider the following examples for 12-hour clock time:

- 10:29 a.m.
- 6 p.m.
- 6:00 p.m. to 8:30 p.m.
- 10:30 a.m. central time (CT)
- 1:30 p.m. central standard time (CST)
- midnight

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### 24-hour clock

When you use the 24-hour clock to show time, use the following guidelines:

- Use a colon to separate the hours, minutes, and seconds.
- Show the hours, minutes, and seconds with two digits each, even if the leading digit is 0.
- When possible, display the local time as specified in user preferences. If time preferences have not been set, use the assumed time based on the browser. Only use UTC when no timezone preference can be determined or standardization across timezones is necessary.
- If you need to show a time zone, use Coordinated Universal Time (UTC), and indicate the time-zone offset from UTC.

Consider the following examples for 24-hour clock time:

- 08:29:37
- 18:30:59
- 18:00:00 to 20:30:00
- 10:30:00 (UTC -6) (refers to CT)
- 12:00:00 (noon)
- 00:00:00 (midnight)

{% endcolumn %}

</div>

</section>

<section class="static-section">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Timestamp

Add seconds or milliseconds to the time only when that level specificity is important.

For example, use the following convention for timestamp:

- Apr 2, 2016 12:59:16 AM CDT (UTC-5).

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

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
- Hover tooltip with **\<timestamp\>**

{% endcolumn %}

</div>

</section>
