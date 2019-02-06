---
title: Focus States
layout: docs
category: Style
usage: |
  Focus visually indicates that the user has clicked on or navigated to a user interface (UI) element. When a UI element is in focus, it is ready to receive input from the user. Focus applies to all interactive elements.
resource: true
status: complete
last-modified: 2019-02-06
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Apply focus to all interactive elements in a UI.

Do not focus disabled elements and non-interactive elements, including:

- [Popovers]({{site.baseurl}}/components/popovers.html)
- [Modals]({{site.baseurl}}/components/modal.html)
- [Pills]({{site.baseurl}}/components/pills.html)
- [Key-value pairs]({{site.baseurl}}/components/key-value-pairs.html)
- [Cards]({{site.baseurl}}/components/cards.html)

Interactive elements contained within these components can be focused.

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

- **Glow (required)**: The glow is the hazy ring that appears around the focused element.
- **Border (optional)**: Apply a border only to elements that already have a border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state composition"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/focus-states/focus-composition.png" width="213"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Element with light fill or border

For elements without a border, if the element's fill color is 500 or lighter, use #0E94A6 (Cyan 700) for the glow color.

For elements with a border, if the element's border color is 500 or lighter, use #0E94A6 (Cyan 700) for both the glow and the border color.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with light fill or border"] [class:"image bg-light border"] %}

<img src="{{site.url}}/assets/images/style/focus-states/focus-style-lightfillborder.png" width="402"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Element with dark fill or border

For elements without a border, if the focused element's fill color is darker than 500, use that color for the glow.

For elements with a border, if the focused element's border color is darker than 500, use that color for the glow and border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element with dark fill or border"] [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-style-darkfillborder.png" width="400"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Element is on a dark background

If the focused element is on a background color that is 500 or darker, change the glow and border to #FFFFFF (Gray 0).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element is on a dark background"] [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-style-darkbround.png" width="377"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Element without visible boundaries

If the focused element's boundary is not visible, use #0E94A6 (Cyan 700) for the glow color and add a 2px corner radius to elements that do not have a visible box shape, including:

- [Tertiary buttons]({{site.baseurl}}\components\buttons.html)
- [Hyperlinks]({{site.baseurl}}\style\typography.html#link)
- [Icon buttons]({{site.baseurl}}\components\button-iconography.html)

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Element without visible boundaries"] [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-style-boundless.png" width="563"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focusable child elements

There can be cases when both a parent element and a child element receive focus simultaneously. To visually distinguish between the parent and child focus, the child focus is styled differently.

For example, with the search filter, the clear button (child) takes on a dotted, 2px rounded border with the standard Cyan 700 focus color.

The focus color of the child element is independent and can be different than the focus color of its parent.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Focusable child elements"] [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-style-childelements.png" width="445"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focus error states

If any focusable element experiences an error, apply either the border or borderless error state style.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Focus error states"] [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus-states/focus-style-errorstate.png" width="398"/>
{% endfigure %}
{% endcolumn %}

</div>

</section>
