---
title: Date Selector
parent: Inputs and Controls
layout: component
category: Components
usage: >
  The date selector input enables users to select a date from a calendar.
preview-image: preview-images/date-selector.svg
status: stable
resource: true
last-modified: 2019-03-13
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a date selector in the following scenarios:

- When the date is close to the present time, for example, within a year. A date that is too far in the past or the future requires the user to scroll through many months or years to get to the correct value.
- When the user knows the day of the week, but does not know the date.
- When you want to reduce date-related data entry errors.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a date selector:

- Pair the date selector pattern with data sets that extend across a time period to allow users to select the currently viewed data.
- When the user triggers the date selector, it should default to the current month and year, and the current date should be highlighted.
- Use the ISO 8601 `yyyy-mm-dd` format to display the date. For example, display **November 10, 2019** as **2019-11-10**.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a date selector.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The month selector contains the following elements:

- **Month navigator (required)**: The user can click the month navigator to pick the next or previous month.
- **Dialog header (required)**: The dialog header includes the name of the month currently in view and the month navigator.
- **Days (required)**: Days represent the seven days of the week.
- **Date (required)**: The user clicks a date to select it.
- **Dialog body (required)**: The dialog body includes the days of the week and numbered dates.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-composition.png" width="472px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Style

Use the following header and body specifications when you construct a date selector.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Header

Use these header specifications when you construct a date selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector header specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-style-header.png" width="497"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Body

Use these body specifications when you construct a date selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector body specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-style-body.png" width="532"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

The date selector element appears below the corresponding text input that controls it. Center text and icons vertically and horizontally.

Use these spacing guidelines when you construct a date selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-spacing.png" width="418"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Behaviors

Ensure that the date selector supports the following user interaction behaviors.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Default

In the default state, the date selector is closed.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default date selector"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-interactions-pre.png" width="281"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Calendar open and hover

The date selector opens when the user clicks the date input field.

Use the hover state when the user hovers over a date or a month navigation arrow. Hovering over the arrows indicates that they user can go back in time or ahead in time. Each date in the selector has a hover state, but only one date can be selected.

Subdue dates shown that belong to the previous or next months. The calendar switches to the next or previous month when the user clicks a subdued date, however, the date is not selected. The month must be active in order for the user to select it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector calendar spawn and hover"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-interactions-revealed-with-hover.png" width="283"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Selection made

The user can manually enter a date in the date text field, or select a date from the date selector. When the user selects a date, the date populates the date text field and the date selector closes.

If the calendar includes an **End Date** field, populate the **End Date** with the **Start Date**. This action creates a mandatory minimum date.

If the user selects an **End Date** that is prior to the **Start Date**, the **End Date** shows an error.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector selection"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-interactions-selection-made.png" width="283"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Edit selection

To edit the date, the user can manually change the date in the date text field or select another date from the date selector. When the user clicks in the date text field, the date selector opens.

The date selector closes when the user exits the date text field or selects a date from the date selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector edit selection"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-interactions-edit-selection.png" width="283"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

Dates can exist in an **unselected**, **current date**, **hover**, and **selected** state.

Month navigation arrows can exist in an **unselected**, **hover**, and **pressed** state.

Refer to [Focus States]({{site.baseurl}}/style/focus-states.html) for focus state construction guidelines.

{% endcolumn %}

{% column right:"hxCol hxSpan-6-xs hxSpan-6-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Date selector states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/date-selector/date-selector-states.png" width="321"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
