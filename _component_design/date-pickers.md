---
title: Date Pickers
parent: Inputs and Controls
layout: component
category: Components
usage: Teaser Text
preview-image:
status: unknown
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

The Date Picker allows the user to make a date or date range using a calendar
view.

<!----The currently selected date is given a blue background.

When present, Special Dates are indicated in orange. On hover, a Tooltip
appears, containing a concise label for the corresponding Special Date. (Please
note that the described hover functionality is not implemented in the example
below.)

Blackout Dates are dates that cannot be selected. They have priority treatment
over Special Dates. For example, if a date is both a Special Date and a
Blackout Date, it will receive the Blackout Date treatment. Like Special Dates,
Blackout Dates may also reveal a Tooltip on hover.---->

<div class="hxRow">
{% column left:"hxCol" %}
{% figure [caption:"Default"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/date-picker.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column left:"hxCol" %}
{% figure [caption:"Hover"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/date-picker-hover.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Selecting a Range"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/date-picker-select-range-2.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
<div class="hxRow">
{% column left:"hxCol-4" %}
{% figure [caption:"Select Month"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/date-picker.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol-4" %}
{% figure [caption:"Month Hover"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/date-picker-month.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
