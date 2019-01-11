---
title: Focus States
layout: docs
category: Style
usage: |
  Focus visually indicates that the user has clicked on or navigated to a user interface (UI) element. When a UI element is in focus, it is ready to receive input from the user. Focus applies to all interactive elements.
resource: true
status: complete
last-modified: 2019-01-11
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Apply focus to all interactive elements in a UI.

Do not focus UI components that do not provide interaction feedback, including:

- [Popovers]({{site.baseurl}}/components/popovers.html)
- [Modals]({{site.baseurl}}/components/modal.html)
- [Pills]({{site.baseurl}}/components/pills.html)
- [Key-value pairs]({{site.baseurl}}/components/key-value-pairs.html)
- [Cards]({{site.baseurl}}/components/cards.html)

Interactive elements contained within these components can be focused.

Do not focus disabled elements.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a UI element that is in focus.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Focus consists of the following elements:

- **Glow (required)**: The glow is the ring that appears around the focused element.
- **Border (optional)**: Apply a border only to elements that already have a border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-composition.png" width="137"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focused element with light fill or border

For elements without a border, if the element's fill color is 500 or lighter, use #0E94A6 (Cyan 700) for the glow color.

For elements with a border, if the element's border color is 500 or lighter, use #0E94A6 (Cyan 700) for both the glow and the border color.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/focus-states/focus-states-standard-focus.png" width="400"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focused element with dark fill or border

For elements without a border, if the focused element's fill color is darker than 500, use that color for the glow.

For elements with a border, if the focused element's border color is darker than 500, use that color for the glow and border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-adopted-focus-color.png" width="295"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focused element is on a dark background

If the focused element is on a background color that is 500 or darker, change the glow and border to #FFFFFF (Gray 0).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-reversed-focus-color.png" width="249"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focused element is an irregular shape

If the focused element is an irregular shape, use #0E94A6 (Cyan 700) for the glow color and add a 2px corner radius to elements that do not have a visible box shape, including:

- [Tertiary buttons]({{site.baseurl}}\components\buttons.html)
- Hyperlinks
- [Icon buttons]({{site.baseurl}}\components\button-iconography.html)

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-irregular-shapes.png" width="283"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Examples

This section describes how to style focused UI elements.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Hyperlinks and text

Hyperlinks and focusable text are styled using the standard glow, with a 2px corner radius. The height of the glow is determined by the line height of the text.

If the text breaks across multiple lines, indicate continuation by using 0px corners at the end of the preceding line and the start of the subsequent line.

See [links]({{site.baseurl}}/style/typography.html#link) and [breadcrumbs]({{site.baseurl}}/components/breadcrumbs.html) for additional guidance.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-hyperlinks-and-text.png" width="455"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Buttons

Use these guidelines when you add focus to [primary buttons]({{site.baseurl}}/components/buttons.html#primary-button-weight), [secondary buttons]({{site.baseurl}}/components/buttons.html#secondary-button-weight), [tertiary buttons]({{site.baseurl}}/components/buttons.html#tertiary-button-weight), [radios]({{site.baseurl}}/components/radio-buttons.html), [checkboxes]({{site.baseurl}}/components/checkboxes.html), and [cogs]({{site.baseurl}}/components/button-iconography.html#cog).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-buttons.png" width="449"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Drop-down button menu items

Drop-down button menu items do not use normal button padding, so they are focused like block-level hyperlinks.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-actions-menu-items.png" width="427"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Date picker

Use the following guidelines when you apply focus to dates in a date picker:

- For borderless dates, for example ``13``, apply the standard focus glow.
- For dates with a fill color darker than 500, for example ``8``, the focus glow adopts the darker color.
- For dates with a fill color lighter than 500, for example ``10``, apply the standard Cyan 700 glow.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-date-picker.png" width="258"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Alert bar actions link

Apply a white glow and stroke to an alert bar actions link. Cyan 700 is not discernible against the Red 900 background.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-alert-bar.png" width="472"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Selector strips

Apply the [hyperlink and text](#hyperlinks-and-text) focus guidelines to [selector strip]({{site.baseurl}}/components/selector-strip.html) options.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-selector-strips.png" width="335"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Switches

The position of a switch changes when a user clicks it. Place the focus on the entire switch, rather than just the circle or the fill space.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-switches.png" width="208"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Search filter

Apply focus to search criteria that appear in the search menu. For focused search criteria, use the guidelines listed in [buttons](#buttons).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-search-filter.png" width="548"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Tabs

When the user navigates to a tab with their keyboard, the first tab receives focus. The user can then navigate between tabs using the arrow keys.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-tabs.png" width="536"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Beacon

When a beacon receives focus, its existing glow changes to Cyan 700.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-beacon.png" width="226"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focusable containers

Some elements, such as [choice tiles]({{site.baseurl}}/components/choice-tiles.html), feature a clickable container. Apply the focus to the entire container according to standard focus guidelines.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-focusable-containers.png" width="460"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focusable child elements

There are cases in which the user can focus on a child element and the parent does not lose focus.

For example, with the search filter, the clear button (child) takes on a dotted, 2px rounded border with the standard Cyan 700 focus color.

The focus color of the child element is independent of the focus color of its parent.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-focusable-child-elements.png" width="504"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>
