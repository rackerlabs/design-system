---
title: Choice Tiles
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A choice tile visually represents a selection that a user can make on a page. As an alternative to a radio button or checkbox, a choice tile contains an icon that graphically represents the choice and a description that provides more detail about the choice.
preview-image: preview-images/choice-tile.svg
status: stable
resource: true
last-modified: 2018-12-19
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use choice tiles when you want to use iconography to present a set of choices to the user.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct choice tiles:

- Only use choice tiles when there are two or more selections available. Do not provide more than nine choice tiles.
- Choice tiles do not define specific iconography. Stay within brand guidelines and use iconography that supports the selection contained in a choice tile.
- For more complex selections, add an optional description to medium or large choice tiles. Due to space constraints, do not add a description to small choice tiles.
- Do not mix sizes in a set of choice tiles.
- If you do not add a description, collapse the padding to the bottom-most padding.
- Limit the description you include on a choice tile to no more than two lines of text.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use these specifications when you construct choice tiles.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A choice tile contains the following elements:

- **Container (required)**: The container holds the icon, heading, and the description.
- **Icon (required)**: The icon visually represents the choice tile selection.
- **Heading (required)**: The heading is the title of the selection contained in the choice tile.
- **Description (optional)**: A description briefly explains the choice tile selection to a user.

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

### Style

Use the following specifications when you construct choice tiles.

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

### Spacing

Use these spacing guidelines when you construct choice tiles.

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

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Behaviors

Ensure that you construct choice tiles so that they conform to the following single- and multi-select behaviors.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Single-select interactions

A single-select interaction is one where the user .... XXX

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

#### Multi-select interactions

A multi-select interaction is one where the user .... XXX

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

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Layout

Use the following guidelines when you position choice tiles on a page.

- Do not span small choice tiles across more than six columns, for a maximum of six tiles in a row.
- Do not span medium choice tiles across more than eight columns, for a maximum of four tiles in a row.
- Do not span large choice tiles across more than nine columns, for a maximum of three tiles in a row.

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

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Responsive specifications

Use these column widths for small, medium, and large choice tiles. Below each width, the rowmax value provides the maximum number of tiles for each screen size.

To reduce the complexity of the interface, limit the number of tiles in a row. For pages with left navigation or a right sidebar, the 12-column grid spans the container between the sidebar.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Choice tiles responsive options"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-responsive.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

Choice tiles use most of the same styling that is used for components like radios and checkboxes, with the addition of the checkmark to indicate a selected tile. The user can click on any part of the tile to select it.

For selected states, the iconography changes color to match the given state. If the color of an icon cannot be changed, be consistent with the color throughout the set of choice tiles. Do not construct some choice tiles to change colors and others that do not change color.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Choice tile states"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-states.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Required

If a selection is required, add an 4px asterisk to the left of the title an overlap with the gutter. The asterisk inherits the font size of the type style to which it is attached.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A selection is required on a group"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-required.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Single-select error

If there is an error on a selection, change the item to error state and display an error message below it.

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

If there is an error on the entire group, locate the message above the group. Do not change the state of each choice tile.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"A selection needs to be made within the group"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/choice-tiles/choice-tile-group-error.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
