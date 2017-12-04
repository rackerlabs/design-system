---
title: Date Picker
parent: Inputs and Controls
layout: component
category: Components
usage: Enable users to filter a list of events, or a report, by date ranges, or choose a single date for an event as they fill out a form.
preview-image: preview-images/date-picker.svg
status: stable
resource: true
last-modified: 2017-10-22
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

You can use the date picker to apply date range filters to lists of events, logs, or for filtering monitoring reports. You can also use it for advanced filtering in ticketing and billing by specifying dates or date ranges in the process of submitting a form.

### Best practice

- Provide the range selection variation when a user needs to select both a start and an end date.
- Pair the date picker pattern with data sets that extend across a time period to allow users to select the currently viewed data.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-hero-image.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Specifications

### Default layout

The date picker component is composed of multiple buttons with four primary functions:

- Move the element to the next month.
- Move the element to the previous month.
- Select a specific date.
- Move between the month selector the date selector.

When the date picker is first triggered, it should default to the current month and year.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-specifications.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Button states

Center text and icons vertically and horizontally.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Date picker button states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-button-states-1.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Month picker button states"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-button-states-2.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Date picker spacing

The date picker element appears below the corresponding text input that controls it.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-spacing.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Date selection interactions

### Single date selection

- Keyboard tabbing onto the input field or clicking it automatically opens the date picker.
- The date can be filled in by hand, according to the format expressed in the placeholder.
- When the user must pick one date, the picker should have one field showing the expected date format in the placeholder.
- Each date in the picker has a hover state, but only one date can be selected.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-single-date.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Date ranges using two fields

The traditional method for date range selection is to use two separate fields, with a picker for each field.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-date-ranges-using-two-fields.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Picking the start date

When the start date receives focus, the picker is triggered and placed below the field.

Selecting a start date fills the start date field value and shifts focus to the end date input, which automatically triggers the end date picker.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-start-date-picker.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Picking the end date

Selecting an end date fills the end date field value and automatically hides the picker.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-end-date-picker.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Date range selection complete

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-date-range-selection-complete.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Date ranges using one field

This is a slick, modern design and can be valuable if you want to streamline date range selection. It’s complex to implement, but it is a very clean, intuitive approach.

In this design, the field width is extended to match the width of the picker, and it contains both the start and end date. The picker itself allows a range to be selected, filling in the field as the user makes choices.

**Selection logic is as follows:**
- The user's first click on a date sets the start date value
- The user's second click sets the end-date value, unless it is before the start date; then it just sets a new start date
- Dates in between are highlighted as shown

**Selections made after the start or end have been chosen follow this logic:**
- A selection *after* the end date just extends the range, setting the end date to the new value.
- A selection *before* the start date is like starting over, clearing the entire selection and filling in a new start date.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

<div class="hxRow"  markdown="1">

{% column right:"hxCol-12" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-date-ranges-using-a-single-field-1.svg)
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column right:"hxCol-6" %}

{% figure [caption:"Start date selected, with hover showing range"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-date-ranges-using-a-single-field-2.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-6" %}

{% figure [caption:"End date selected, range is complete"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-date-ranges-using-a-single-field-3.svg)
{% endfigure %}

{% endcolumn %}

</div>

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Ranges spanning months or years

If the user selects a start date in one month or year, and an end date in another month or year, all dates in between highlight as expected.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Start date selected in October"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-ranges-spanning-months-or-years-1.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-6 hxCol-sm-6 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"End date selected in December"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-ranges-spanning-months-or-years-2.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## Month picker

The month picker enables users to select a different month from the entire year so that they don’t have to use the back and next arrows to traverse months.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"User hovers over header button"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-1.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"On click, the month picker slides down"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-2.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"User chooses a month, and the picker slides up"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-3.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Month picker specifications

The month picker state maintains the same spacing considerations from the date selector state, with slight modifications of color values.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-specifications.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Month picker button specifications

The button text in the month picker is always horizontally and vertically centered and all uppercase.

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Month picker header button"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-button-specifications-1.svg)
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption:"Month picker month buttons"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-button-specifications-2.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Month picker animation

When the user clicks the month button in the center of the header, the month selector menu should slide down, covering the date selector.

The month shown in the header should be selected by default in the picker.

When the user makes a selection, or clicks on the header button again, the month picker slides back up using the same animation.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Slide down to show selector, and back up when selection is made."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-animation.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
