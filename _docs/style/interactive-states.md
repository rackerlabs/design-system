---
title: Interactive States
layout: docs
category: Style
usage: >
  The system of interactive states ensures consistent styles for the states of controls in Helix. This system accounts for multiple types of controls, with various interactive patterns, and defines commonalities and standards across all of them.

  All controls that live in the application body strictly adhere to subsets of the specifications in this document, unless otherwise noted in their individual design docs.
resource: true
status: complete
last-modified: 2019-05-29
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

xxxxx.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct an interactive UI element.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

In this document, a circle within a square represents a state style.

An interactive state is comprised of the following elements:

- **Control**: The control is the container of the UI component to which you apply the interactive state.
- **Emphasis color**: Apply the emphasis color to a primary child element within a control.

The following list is some of the elements receive emphasis color:

- Checks in checkboxes
- Circles in radios
- Icons in option tiles
- Labels in selector strips

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-composition.png" width="380"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Unless otherwise specified, all inputs and controls have a border radius of 2px.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-style.png" width="195"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Unselected styles

In most cases, you apply unselected styles to controls that can selected, such as option tiles, checkboxes, and radios. In some cases you apply unselected styles to general controls such as text input and drop-down selectors.

You are not required to apply all unselected styles to an input or control. For example, in the default state, a text input receives only the Unselected Idle style. Do not apply any of the other three unselected styles to a text input.

Only multi-select controls, like checkboxes, use the Unselected Focused state. Single- select controls, such as radio buttons, do not have an Unselected Focused state, because they are automatically selected when focused.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-unselected-styles.png" width="539"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Selected styles

Selected styles are most often used for selectable controls, like Checkboxes. However, some selected styles can also be used for other controls like text inputs or dropdowns.

Not all state styles have to be applied. For example, text inputs use the Selected Focused style for their focused state, but they do not use any of the other three styles..

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-selected-styles.png" width="538"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Selected with fill

Use selected fills for elements which benefit from a more apparent selected state. This includes elements such as checkboxes, radios, switches, toggles, and so on.

Use the settings to the right when applying a fill color to selected control states.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-selected-with-fill.png" width="519"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Errored styles

Use the styles to the right when constructing error states for inputs and controls.

Generally, only selectable controls use the hovered states. For example, checkboxes and radios have a hover state, but text inputs do not.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-errored-styles.png" width="536"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Errored and selected with fill

For the most part, it should be nearly impossible to have a selectable control that is selected and errored. However, some severe edge cases do exist.

These styles primarily apply to controls with unique interactive patterns such as selector strips, toggles, and switches.

Note that in the example the container still receives the standard red stroke and the selected option gets the fill. This is common for controls that use this style for indicating errors.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-errored-selected-with-fill.png" width="543"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled styles

Use the specifications in the figure to the right when constructing disabled styles for inputs and controls.

Disabled controls generally cannot receive focus. However, the disabled focused style does occur in edge cases where an input gets disabled on click. In that scenario, the control technically has focus even though it’s disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-disabled-styles.png" width="535"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Disabled and selected with fill

Disabled and selected is an edge case state that occurs when a selectable control is selected and disabled by default, or due to a previous choice that requires this input to be selected and disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-disabled-selected-with-fill.png" width="223"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focus glow styles

The focus glow helps users to see which interactive element has focus.

Use the specifications to the right when building focus glow styles.

Use the Child Focus Border for focusable child elements, such as the clear button on a search input.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/interactive-states/interactive-states-focus-glow-styles.png" width="264"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>
