---
title: Choice Tiles
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Choice tiles are an alternative selector pattern to radio buttons and checkboxes that provide a means of both displaying choices more visually and of providing a more detailed description of a choice.
preview-image: preview-images/choice-tiles.svg
status: stable
resource: true
last-modified: 2017-11-12
---

{% include toc.html %}

## Introduction

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### When to use

- Use choices tiles when presenting a set of choices that are easily recognized by iconography.
- Only use choice tiles when two or more selections are available.

### Best practices

- It may be best to list out your best-practice notes as a bulleted list.
- keep each one pretty short, and remember, most people will read half of what you write.
- If you need visuals in this section, use the symbol in Symbols>documentation>section>description + image.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"The choice tile pattern"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-hero.png)
{% endfigure %}
{% endcolumn %}
</div>

## Default choice tile
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Cards contain the tile container, an icon, a heading, and an optional description. We strongly encourage the use of iconography to aid in selection.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Standard layout for a choice tile."] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-default.png)
{% endfigure %}
{% endcolumn %}
</div>

### Layout options
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Choice tiles should be used as part of a form.
- Small, medium or large tiles may be used, but only 1 size tile should be used per selector.
- Try not to exceed 9 tiles in a selector
- Small tiles should not span more than 6 columns across (6 tiles)
- Medium tiles should not span more than 8 columns across (4 tiles)
- Large tiles should not span more than 9 columns across (3 tiles)


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Choice tiles on a full-width grid with no right sidebar"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-layout.png)
{% endfigure %}
{% endcolumn %}
</div>

### Responsive design specifications
<div class="hxRow">
{% column left:"hxCol-10 hxCol-xs-12 hxCol-sm-12 hxCol-md-10 hxCol-lg-10" %}

Below are the column widths for the small, medium, and large choice tiles. Below each, you’ll see a “rowmax” value. This is to indicate our guidance on how many tiles should go in any given row on the corresponding screen size. We limit the amount of tiles in a row to reduce the complexity of the interface for the user, and give them chunks of information they can understand and work with. For pages with a left nav and/or a right sidebar, the 12 column grid spans the container between the sidebar.

{% endcolumn %}

{% column right:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
{% figure [caption:"Choice tiles responsive options"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-responsive.png)
{% endfigure %}
{% endcolumn %}
</div>

## Choice tile specifications
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Avoid using a description in the small tile
- A description in the medium and large tiles is optional
- When a description is not used, collapse the padding down to the bottom most padding
- A specific icon is not defined, choose based on use case


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Small, medium and large sized choice tiles"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-specs.png)
{% endfigure %}
{% endcolumn %}
</div>

### Basic states
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Choice Tiles take on most of the same styling as we use for components like radios and checkboxes, with the addition of the checkmark to indicate a selected tile. The user can click on any part of the tile to select it.

For selected states, the iconography changes color to match the given state. In the event that we cannot adjust the color of an icon, be consistent with your color decision throughout your entire choice tile set, rather than have some icons change colors and others not. The strong recommendation is to change the icon color with the selected states unless otherwise impossible.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Choice tile states"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-states.png)
{% endfigure %}
{% endcolumn %}
</div>

## Interactions

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Single-select interaction

**Default Interaction**: Like with multi-select, when the user first views the choice tile selector, all tiles are presented in the default state unless a preferred choice is preselected.

**After Selection**: To illustrate that only one selection can be made at a time, the remaining tiles change to the subdued state after a selection is made.

**Change selection**: If a user wants to change their selection, the subdued state changes to the hover state on hover.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Group states for Single select interactions"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-single-select.png)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Multi-select interaction

**Default interaction**: When the user first views the choice tile selector, all tiles are presented in the default state unless a preferred choice is preselected.

**After selection**: After a selection is made, the selected tile changes to the selected state and the other tiles remain in the default state.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Group states for multi select interactions"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-multi-select.png)
{% endfigure %}
{% endcolumn %}
</div>


## Handling errors

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Single-select error

If there is an error on a selection, change that item to errored state and display an error message below it.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A selection produced an error"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-single-error.png)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Group-select error

If there is an error on the entire group, the message should be placed above the group rather than changing the state of each item.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A selection needs to be made within the group"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-group-error.png)
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Required

If a selection is required, add an asterisk 4px to the left of the title, bleeding into the gutter. The asterisk takes on the size of the type style to which it is attached.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A selection is required on a group"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-required.png)
{% endfigure %}
{% endcolumn %}
</div>


