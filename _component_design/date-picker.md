---
title: Date Picker (or Calendar picker?)
parent: Inputs and Controls
layout: component
category: Components
usage: The date picker input enables users to select a date from a calendar.
preview-image: preview-images/date-picker.svg
status: stable
resource: true
last-modified: 2019-01-21
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a date picker in the following scenarios:

- When the date is close to the present time, for example, within a year. A date that is too far in the past or the future requires the user to scroll through many months or years to get to the correct value.
- When the user knows the day of the week, but does not know the date.
- When you want to reduce date-related data entry errors.
- When the application is used by an international audience and you want to standardize the date format. For example, 06/01/2018 is a valid date, but can be interpreted as either June 1, 2018 or January 6, 2018.  

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a date picker:

- Pair the date picker pattern with data sets that extend across a time period to allow users to select the currently viewed data.
- When the user triggers the date picker, it should default to the current month and year, and the current date should be highlighted.
- After the user has selected a date, spell out the name of the month in the date field. For example, use 03-Jan-2019 and not 03/01/2019.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Month picker specifications

Use the following specifications when you construct a month picker.

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

Use these specifications when you construct a month picker.

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

Use the following spacing guidelines when you construct a month picker.

**OLD TEXT**

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

Ensure that the month picker supports the following user interaction behaviors:

- When the user clicks the header button, the month selector menu slides down and covers the date selector.
- The month shown in the header should be selected by default in the picker. **(Not sure what this means)**
- When the user makes a selection, or clicks the header button again, the month picker slides back up.

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

The month selector can exist in a **default**, **hover**, and **pressed** state.

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

Use the following specifications when you construct a date selector.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The date selector is composed of the following elements:

- **Month picker (required)**: The user can click the month picker to select a different month.
- **Next and previous (required)**: The next and previous buttons move the date picker to the next or previous month.
- **Day selector (required)**: The user clicks a date to select it.

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

Use these specifications when you construct a date selector.

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

Use the following spacing guidelines when you construct a date selector.

**OLD TEXT**

The date picker element appears below the corresponding text input that controls it.

Center text and icons vertically and horizontally.

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

Ensure that the date selector supports the following user interaction behaviors:

When the user selects a single date on the date picker:

- The date picker opens when the user tabs onto or clicks the date input field.
- The user can manually enter the date according to the placeholder format.
- Each date in the picker has a hover state, but only one date can be selected.
- To close the date picker the user clicks off of the date picker???

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

Date selector dates can exist in a **default**, **muted**, **hover**, and **selected** state.

{% endcolumn %}

{% column right:"hxCol hxSpan-6-xs hxSpan-6-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption:"Date picker button states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-picker/date-picker-button-states-1.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
