---
title: Date & Time Pickers
layout: component
category: Components
usage: Teaser Text
preview-image:
resource: true
---

{% include toc.html %}

# Date Picker
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

<div class="row">
{% column left:"col-md-4" %}
{% figure [caption:"Default"] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/date-picker.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column left:"col-md-4" %}
{% figure [caption:"Hover"] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/date-picker-hover.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-4" %}
{% figure [caption:"Selecting a Range"] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/date-picker-select-range-2.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
<div class="row">
{% column left:"col-md-4" %}
{% figure [caption:"Select Month"] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/date-picker.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-4" %}
{% figure [caption:"Month Hover"] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/date-picker-month.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

# Time Picker {% include inprogress.html %}

<div class="row">
{% column left:"col-md-6" %}
## Default

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/time-picker.svg){:width="60%"}
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-6" %}
## Selected

{% figure [caption:""] [class:"image bg-light border"] %}
![](http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/time-picker-selected.svg){:width="60%"}
{% endfigure %}
{% endcolumn %}
</div>
