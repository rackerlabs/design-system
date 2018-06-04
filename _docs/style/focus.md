---
title: Focus States
layout: docs
category: Style
usage: |
  Focus states allow the user to see what element is the current element-of-interest in the ingterface by drawing attention to it. In this way, the user cna shift focus between one element and another. Only elments that can be interacted with via mouse can be focused. Additionally, focus states allow someone operating with only a keyboard to access the funtionality of a page.
resource: true
status: complete
last-modified: 2018-05-10
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

Focus is received by interactive components when the user clicks on them.  Focus is also applied to clickable elements when the user presses the tab key to traverse the UI using the keyboard.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Composition

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Two visual features make up the focus indicator:

1. **The Glow** is applied to any focused element.
2. **The Border** is applied, in addition to the glow, to elements that have a border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-standard@2x.png" width="304"/>
{% endfigure %}
{% endcolumn %}

</div>

## Style

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Standard focus

Standard focus color is **#0e94a6 (Cyan 700)**

#### For borderless elements:
If the element's fill color is lighter than 500, apply the glow using the standard focus color.

#### For elements with a border:
If the element's border color lighter than 500, apply the standard glow and change the border to standard focus color.

{% endcolumn %}


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-adaptive@2x.png" width="304"/>
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Adopted focus color

Adopt the element color when its fill or border color is 500 or darker.

#### For borderless elements:
If the focused element's fill color is 500 or darker, use the element's fill color for the glow.

#### For elements with a border:
If the focused element's border color is 500 or darker, use the existing border color for the glow and border.

{% endcolumn %}


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-adaptive@2x.png" width="304"/>
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Reversed focus color

If the focused element is contained in a background color that is 500 or darker, change the glow and border to #ffffff (Gray 0).

{% endcolumn %}


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-adaptive@2x.png" width="304"/>
{% endfigure %}
{% endcolumn %}
</div>


</section>

<section class="static-section" markdown="1">

## Focusable elements

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Text

Text links and actions are focused in a standard glow container. The boundaries of the focus container directly map to the line height of the text. In thiscase, as the type size is 15, the focus container is 20px, as per our line-height rules in our [spacing system]({{site.baseurl}}/style/spacing.html).

#### Multi-line text focus
The focus container has a rounded corner of 2px and top left and bottom left where the container ultimately end. If the focus container goes to a second or third line, we indicate continuation by making a 0px rounded border at the end of of the given line as well as the start of the new line.

#### Coverage
Items covered in link focus: 

- [Links]({{site.baseurl}}/style/typography.html#link)
- [Navigation text]({{site.baseurl}}/components/navigation.html)
- [Breadcrumbs]({{site.baseurl}}/components/breadcrumbs.html)

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-textual@2x.png" width="501"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Buttons

This is perhaps the most common and most widely applied focus principle. Buttons prompt an action of some kind, and a cyan glow is applied.

If the buton has a colored stroke (no-gray, as in error states) the glow takes on the colors of the stroke. If there is not color to the stroke, the default hover state takes on Cyan 500. Either way, the glow "shadow" values aside from color are preserved.

The following are some of the patterns treated as buttons: Radio Buttons, Checkboxes, the "close" icon in [iconography]({{site.baseurl}}/style/iconography.html), [pills]({{site.baseurl}}/components/pills.html), and [modals]({{site.baseurl}}/components/modal.html).

#### Actions menu
The tertiary button in the actions menu does not have a bounding box like a normal tertiary button, so the treatment is more akin to a textual link.

#### Date picker
IN this instance, there are several different elements that are being focused, but they are all focused in a button style. Note the "10". In this examples, it uses a color of Cyan that would be to faint for the user to see, so we use the reversion technicaque for it to take on Cyan 700.

#### Alert bar actions link
Cyan 700 is not discernible against the Red 900 background, so the inversion technique is used.

#### Rounded nothingness
Where a shape has no clear bounding shape and does not otherwise impeded the consistency of design, we apply a 2px radius to its bounding container to improve approachability. Examples of this are all links, and solo icons such as the cog.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-buttons.png" width="501"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Containers

#### Full container focus

In this instance, focus is not put on a single element as in button focus, but on an entire container that is clickable. The most common instantiation of this is the choice tile, as it does not have selectable items contained within its boundaries. When using a container that has selectable items within it, use...

#### In-container focus behavior

IN most instances a container has selectable sub-components container within it. For example, Tables, contain checkboxes, links, cogs, and arrows. These eklements within the container are individually focused, and focus states apply instead to these sub-components, rather than the parent table object.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-container.png" width="501"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">


<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Controls

Control focus are non-standard focuses that apply to the following patterns:

#### Selector strips

As each item in selector strips (both multi-select and single-select as shown) act as select buttons, we treat the text, rather than the shape of the buttons, as the action driving element.

#### Switches

Clicking a switch anywhere changes its position. Therefore, we place the focus on the entire switch, rather than the circle or the fill space.

#### Search filter

For search filters whcere the user can select certain search criteria, we treat the whole row as a selecction button

#### Tabs

When tabbing through the interface, the user will tab to the active tab, creating a focu around it. They can then arrow between tabs to acti vcate different tabs, but an inactive tab cannot be focused. This is worth emphasizing &mdash; **inactive items cannot be focused.**

#### Beacon

Beacon comes with shadows and glow already baken in, so when it it focused, those properties adopt our Cyan 700 standard glow. 


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-control.png" width="631"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>


<section class="static-section" markdown="1">


<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Child elements

There are some instnaces in which a user can focus on a smaller ememnt ("child") within a larger element ("parent") without that larger element losing the ability to be focused. For example, the search input component.

In these instances, the child takes on a dotted, `2px` rounded container with the base Cyan 700 focus. This container will follow the defined rules for inversion and reversion. The cyan child element focus color is independent of the color of its parent elment.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [class:"image bg-light border"] %}
<img src="{{site.url}}/assets/images/style/focus/focus-child.png" width="631"/>
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

Actionable elements contained within these patterns are still able to be focused.

{% endcolumn %}

</div>
</section>


