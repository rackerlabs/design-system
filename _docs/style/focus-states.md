---
title: Focus States
layout: docs
category: Style
usage: |
  Focused state allows the user to see what interactive element has been clicked on or navigated to using the keyboard. Only elements that can be interacted with can receive focus.
resource: true
status: complete
last-modified: 2018-05-10
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Focus is received by interactive components when the user clicks on them.  Focus is also applied to clickable elements when the user presses the tab key to traverse the UI using the keyboard.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-introduction.png" width="475"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Composition

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Two visual features make up the focus indicator:

1. **The Glow** is always applied to the focused element.
2. **The Border** is only applied to elements that already have a border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-composition.png" width="137"/>
{% endfigure %}
{% endcolumn %}

</div>

## Style

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Standard focus color

Standard focus color is **#0e94a6 (Cyan 700)**

#### For borderless elements:
If the element's fill color is 500 or lighter, apply the glow using the standard focus color.

#### For elements with a border:
If the element's border color is 500 or lighter, apply the standard glow and change the border to standard focus color.

{% endcolumn %}


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-standard-focus.png" width="400"/>
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Darker focus colors

If the element's fill or border color are darker than 500, apply that color to the glow and border instead of the standard focus color.

#### For borderless elements:
If the focused element's fill color is darker than 500, use that color for the glow.

#### For elements with a border:
If the focused element's border color is darker than 500, use that color for the glow and border.


{% endcolumn %}


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-adopted-focus-color.png" width="295"/>
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Inside dark backgrounds

If the focused element is contained in a background color that is 500 or darker, change the glow and border to **#ffffff (Gray 0)**.

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

### Irregular shapes
Apply the standard glow and a 2px corner radius to elements that do not have a visible box shape.

Examples of this are tertiary buttons, hyperlinks, and button icons such as the cog or close button on alerts, toasts, and modals.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-irregular-shapes.png" width="283"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

## Focusable elements

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Hyperlinks and text

Hyperlinks and focusable text are styled using the standard glow, with a 2px corner radius. The height of the glow is determined by the line height of the text.

#### Multi-line text focus
If the text breaks across multiple lines, indicate continuation by using 0px corners at the end of the preceding line and the start of the subsequent line.

#### Elements:

- [Links]({{site.baseurl}}/style/typography.html#link)
- [Breadcrumbs]({{site.baseurl}}/components/breadcrumbs.html)

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

In addition to primary, secondary and tertiary buttons, the following are a few elements that are also treated as buttons:

* [Radio Buttons]({{site.baseurl}}/components/radio-buttons.html)
* [Checkboxes]({{site.baseurl}}/components/checkboxes.html)
* [Actions Cog]({{site.baseurl}}/components/tables-controls.html#actions-cog)

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

### Actions menu items
Buttons inside the actions menu do not use normal button padding, so they are focused like block-level hyperlinks.

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
Several elements are shown in focused state in the example to the right.

The "13" button is borderless and receives the standard focus glow.

The "8" button is darker than 500, so the focus glow adopts the darker color.

The "10" button uses a fill color lighter than 500, so the standard Cyan 700 glow is applied.


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
Cyan 700 is not discernible against the Red 900 background, so the white glow and stroke are applied.

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

For items in a selector strip, the text is the action driving element and is focused according to the rule for [Hyperlinks and Text](#hyperlinks-and-text).

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

Clicking a switch anywhere changes its position. Therefore, we place the focus on the entire switch, rather than the circle or the fill space.

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

The user can select criteria from the search menu, so we treat the whole row as a button.

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

When the user traverses to a tabset via their keyboard, the first tab receives focus. The user can then navigate between tabs using the arrow keys.

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

The beacon comes with a glow baked in, so when it receives focus, the existing glow changes to the standard Cyan 700 color.

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

Some elements, such as [Option Tiles]() feature a clickable container. In these cases, focus is applied to the entire container, according to normal focus rules.

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

There are some instances in which a user can set focus on the child element of a focusable parent element and that parent does not lose focus.

Using the search input as an example, the clear button (child) takes on a dotted, 2px rounded border with the standard Cyan 700 focus color.

The focus color of the child element is independent of the focus color of its parent.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-states-focusable-child-elements.png" width="504"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">
## Non-focusable elements

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-8-xs hxSpan-8-sm hxSpan-8-md hxSpan-8-lg" %}



Items that do not have feedback when interacted with via mouse are not focused. As a result, focus is unavailable on the following patterns:

- [Popovers]({{site.baseurl}}/components/popovers.html)
- [Modals]({{site.baseurl}}/components/modal.html)
- [Status pills]({{site.baseurl}}/components/pills.html)
- [Key value pairs]({{site.baseurl}}/components/key-value-pairs.html)
- [Cards]({{site.baseurl}}/components/cards.html)

Interactive elements contained within these patterns are still able to be focused.

{% endcolumn %}

</div>
</section>
