---
title: Choice Tiles
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A choice tile is a selectable component that graphically represents a choice a user can make on a page.
preview-image: preview-images/choice-tile.svg
status: stable
resource: true
last-modified: 2019-01-15
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Like radios and checkboxes, choice tiles provide the user a means of making a decision and selecting from a group of options. Because choice tiles increase the selectable space of a choice, you can add an icon and description, which provides context and a richer information experience to the user. Choice tiles help decision making by to focusing the user's attention.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct choice tiles:

- Only use as many choice tiles as you need. Too few choice tiles (for example, 2) can be visually confusing to the user while larger sets of choice tiles increase the user's information processing demands and can lead to *option paralysis*. The number of choice tiles is also a function of the choice tile size and the user's screen size. We recommend using choice tiles when there is more than one and a maximum of nine choices.
- Construct a choice tile so that the user can click on any part of the tile to select it.
- You can design your own icon as long as it conforms to the Rackspace brand. If there is an established meaning to an icon, don’t use it to mean something else. See [iconography]({{site.baseurl}}/style/iconography.html) for more information about icons.
- For more complex information needs, add a description to medium or large choice tiles. Due to space constraints, do not add a description to small choice tiles.
- Do not mix small, medium, and large size choice tiles in a choice tile set.
- Within a choice tile set, ensure that choice tiles are all uniform in size.
- Limit the description to 80 characters total, which equates to 40 characters per line. A description should not be longer than two lines of text.

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
- **Icon (optional)**: The icon visually represents the choice tile selection.
- **Option label (required)**: The option label is the title of the selection contained in the choice tile.
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

A single-select interaction is analogous to radios where the user can only select one choice tile at a time.

In the default state, the user can click any of the choice tiles. You can construct choices tiles so that one of the options is selected by default. The user can then make another selection, if necessary. When the user selects an option, the previously selected choice tile becomes deselected and all remaining tiles change to the subdued state. The subdued state reinforces that only one choice tile can be selected.

All unselected choice tiles change to the hover state as the user scrolls over the choice tile.

Saved credit card payment information is a common single-select use case.

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

A multi-select interaction is analogous to checkboxes where the user can select multiple choice tiles at a time.

In the default state, the user can click any of the choice tiles. You can construct choices tiles so that one of the options is selected by default. The user can then make another selection, if necessary. When the user selects an option, the unselected choice tiles remain in the default state. The default state reinforces that multiple choice tiles can be selected.

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

## States

Choice tiles use most of the same styling that is used for components like radios and checkboxes, with the addition of the checkmark to indicate a selected tile.

For selected states, the iconography changes color to match the given state.

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

Use a red asterisk to designate that a choice tile selection is required. The asterisk floats to the left of the text in the margin and is vertically aligned with the text.

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
