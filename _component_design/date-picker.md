---
title: Date Picker
parent: Inputs and Controls
layout: component
category: Components
usage: The date picker input enables users to select a date from a calendar.
preview-image: preview-images/date-picker.svg
status: stable
resource: true
last-modified: 2019-01-18
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a date picker in the following scenarios:

- When the user wants to browse for and select a date based on its day of the week. For example, use a date picker when the user wants to filter a list of events, logs, or a report to include last quarter's data, and the user does not know what the beginning and end dates are.
- When you want to reduce date-related data entry errors.
- When the application is used by an international audience and you want to standardize the date format. For example, 06/01/2018 is a valid date, but can be interpreted as either June 1, 2018 or January 6, 2018.  

Do not use a date picker when a single date is known, for example, date of birth. In this scenario a date picker requires the user to scroll through many months or years to get to the correct value.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a date picker:

- Provide the date range selection variation when a user needs to select both a start and an end date.
- Pair the date picker pattern with data sets that extend across a time period to allow users to select the currently viewed data.
- When the user triggers the date picker, it should default to the current month and year.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Month picker specifications

Use these specifications when you construct a month picker.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The month picker contains the following elements:

- **Header button (required)**: When the user clicks the header button, the month picker slides down.
- **Months (required)**: The month picker enables the user to select a month, which is easier than clicking the back and next arrows to locate a month. When the user clicks a month, the month picker slides up.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"User chooses a month, and the picker slides up"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-3.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Month picker header button"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-button-specifications-1.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

The button text in the month picker is always horizontally and vertically centered and all uppercase.

The month picker state maintains the same spacing considerations from the date selector state, with slight modifications of color values.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Month picker header button"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-button-specifications-1.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behaviors

When the user clicks the month button in the center of the header, the month selector menu should slide down, covering the date selector.

The month shown in the header should be selected by default in the picker.

When the user makes a selection, or clicks on the header button again, the month picker slides back up using the same animation.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Slide down to show selector, and back up when selection is made."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-month-picker-animation.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Month selector states

text here for states.

{% endcolumn %}

{% column right:"hxCol hxSpan-6-xs hxSpan-6-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Month picker button states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-button-states-2.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Date selector specifications

Intro text here...

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The date picker is composed of the following elements:

- **xxxxx (required)**: xxxxx
- **xxxxx (required)**: xxxxx
- **xxxxx (required)**: xxxxx


- Move the element to the next month.
- Move the element to the previous month.
- Select a specific date.
- Move between the month selector the date selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-specifications.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a date picker.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-specifications.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

The date picker element appears below the corresponding text input that controls it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-spacing.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behaviors

Ensure that the date picker supports the following behaviors.

When the user selects a single date on the date picker:

- Keyboard tabbing onto the input field or clicking it automatically opens the date picker.
- The date can be filled in by hand, according to the format expressed in the placeholder.
- When the user must pick one date, the picker should have one field showing the expected date format in the placeholder.
- Each date in the picker has a hover state, but only one date can be selected.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-single-date.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Date selector states

Center text and icons vertically and horizontally.

{% endcolumn %}

{% column right:"hxCol hxSpan-6-xs hxSpan-6-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption:"Date picker button states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-button-states-1.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
