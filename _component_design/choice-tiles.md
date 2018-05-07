---
title: Choice Tiles
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Choice tiles are an alternative selector pattern to radio buttons and checkboxes that provide a means of both displaying choices more visually and of providing a more detailed description of a choice.
preview-image: preview-images/choice-tile.svg
status: stable
resource: true
last-modified: 2017-11-12
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

- Use choices tiles when presenting a set of choices that are easily recognized by iconography.
- Only use choice tiles when two or more selections are available.

### Best practices

- When using a description within a choice tile keep the text brief.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The choice tile pattern"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-hero.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Cards are composed of the following:

- **Choice tile**: the container that houses the choice tile selection.
- **Icon**: an iconographic representation of the selection contained within a choice tile.
- **Heading**: the title of the selection contained within a choice tile.
- **Description** *(optional)*: A description briefly explains the choice tile selection to a user. Capitalize the first word in sentences.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Standard layout for a choice tile."] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-default.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Layout options

- Choice tiles comes in small, medium, and large sizes. Do not use a mixture of sizes in the same choice tile set.
- Do not offer more than nine options when using choice tiles.
- Small tiles **do not** span more than 6 columns across (max 6 tiles in a row).
- Medium tiles **do not** span more than 8 columns across (max 4 tiles in a row).
- Large tiles **do not** span more than 9 columns across (max 3 tiles in a row).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Choice tiles on a full-width grid with no right sidebar"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-layout.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-10-md hxSpan-10-lg" %}

### Responsive specifications

Use the following column widths for the small, medium, and large choice tiles. Below each width, the rowmax value gives the maximum number of tiles for a corresponding screen size. Limit the amount of tiles in a row to reduce the complexity of the interface for the user, and give them chunks of information they can understand and work with. For pages with a left nav or a right sidebar, the 12 column grid spans the container between the sidebar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

{% figure [caption:"Choice tiles responsive options"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-responsive.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Visual specifications

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

- Small size choice tiles **cannot** have a description due to the smaller dimensions.
- An optional description may be added medium and large size choice tiles. Its inclusion is recommended to inform more complex selections.
- When a description is not used, collapse the padding down to the bottom most padding.
- Choice tiles do not define specific iconography. Stay within brand guidelines and use iconography that supports the selection contained in a choice tile.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Small, medium, and large sized choice tiles"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-specs.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Basic states

Choice tiles use most of the same styling that is used for components like radios and checkboxes, with the addition of the checkmark to indicate a selected tile. The user can click on any part of the tile to select it.

For selected states, the iconography changes color to match the given state. In the event that we cannot adjust the color of an icon, be consistent with your color decision throughout your entire choice tile set, rather than have some icons change colors and others not. The strong recommendation is to change the icon color with the selected states unless otherwise impossible.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Choice tile states"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-states.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Interactions

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Single-select interaction

**Default Interaction**: Like with multi-select, when the user first views the choice tile selector, all tiles are presented in the default state unless a preferred choice is preselected.

**After Selection**: To illustrate that only one selection can be made at a time, the remaining tiles change to the subdued state after a selection is made.

**Change selection**: If a user wants to change their selection, the subdued state changes to the hover state on hover.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Group states for single select interactions"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-single-select.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Multi-select interaction

**Default interaction**: When the user first views the choice tile selector, all tiles are presented in the default state unless a preferred choice is preselected.

**After selection**: After a selection is made, the selected tile changes to the selected state and the other tiles remain in the default state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Group states for multi select interactions"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-multi-select.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Handling errors

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Single-select error

If there is an error on a selection, change that item to errored state and display an error message below it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A selection produced an error"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-single-error.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Group-select error

If there is an error on the entire group, place the message above the group rather than changing the state of each item.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A selection needs to be made within the group"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-group-error.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Required

If a selection is required, add an 4px asterisk to the left of the title, bleeding into the gutter. The asterisk inherits the font-size of the type style to which it is attached.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A selection is required on a group"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-required.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
