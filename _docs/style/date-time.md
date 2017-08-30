---
title: Date & Time
layout: docs
category: Style
usage: Teaser Text
preview-image:
resource: true
---

{% include toc.html %}

Always use human-friendly formatting when displaying date and/or time.

# Date

| Format | Examples |
| --- | --- |
| {month (mixed case 3 letter abbr)} {numerical day}, {year (4 digit)} | Nov 28, 2016<br>Apr 2, 2016 |
| Use an en dash (&ndash) to separate the dates in date ranges. | Nov 28, 2016–Nov 30, 2016 |
{: class="ui very basic collapsing celled table"}

# Time

## Best Practices

-   Timezone control flow: Always convert to local time based user preference.
    If unavailable, use assumed time based on browser. Only use UTC when no
    timezone preference can be determined or standardization across timezones
    is necessary.

-   Always convert to local time based user preference. If unavailable, use
    assumed time based on browser. Only use UTC when no timezone preference can
    be determined or standardization across timezones is necessary.

-   Always offer users the ability to convert to UTC

-   Add UTC offset to timezone only when that specificity is important (for
    example, "CST (UTC-6)").

-   Add seconds or milliseconds to the time only when that level specificity is
    important

| Format | Examples |
| --- | --- |
| {time (12 hour clock)} {AM/PM (capitalized)} | 7:58 PM CST |
| {time (12 hour clock)} {timezone (capitalized 3 letter abbreviation)} | 12:59:16 AM CDT (UTC-5) |
{: class="ui very basic collapsing celled table"}

# Timestamp

| Format | Examples |
| --- | --- |
| {month (mixed case 3 letter abbr)} {numerical day}<br>{year (4 digit)} {time (12-hr)} {AM/PM (caps)} {timezone (caps 3 letter abbr)} | Nov 28, 2016 7:58 PM CST<br>Apr 2, 2016 12:59:16 AM CDT (UTC-5) |
{: class="ui very basic collapsing celled table"}

# Timeago

Timeago details length of time that has elapsed since an event (for example, a
monitoring alarm or ticket update). This is helpful for orienting users to the
timeline of events.

## Best Practices

-   Display order:
    -   Under 1 minute: "just now"
    -   After first minute: "1 min"
    -   After second minute: "<#> mins"
    -   After first hour: "1 hr"
    -   After second hour: "<#> hrs"
    -   After 24 hours: "1 day"
    -   After 48 hours: "<month (mixed case 3 letter abbreviation)> <numerical day>" e.g "Nov 3"
-   Hover tooltip with "<timestamp>"
