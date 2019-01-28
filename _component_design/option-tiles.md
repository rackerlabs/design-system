---
title: Option Tiles
parent: Inputs and Controls
layout: component
category: Components
usage: >
  An option tile is a selectable component that graphically represents a choice a user can make on a page.
preview-image: preview-images/option-tile.svg
status: stable
resource: true
last-modified: 2019-01-28
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Like radios and checkboxes, option tiles provide the user a means of selecting from a group of options. Because option tiles increase the selectable space of a choice, you can add an icon and description, which provides context and a richer information experience to the user. Option tiles help decision making by focusing the user's attention.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct option tiles:

- Only use as many option tiles as you need. Too few option tiles (for example, 2) can be visually confusing to the user while larger sets of option tiles increase the user's information processing demands and can lead to *option paralysis*. The number of option tiles is also a function of the option tile size and the user's screen size. We recommend using option tiles when there is more than one and a maximum of nine choices.
- Construct an option tile so that the user can click on any part of the tile to select it.
- When possible, use an existing Helix icon. If you need a new icon, design it to conform to the Helix icon construction guidelines and be consistent with the Rackspace brand. See [icon construction]({{site.baseurl}}/style/iconography.html#icon-construction) for guidelines about designing your own icon.
- If there is an established meaning to an icon, don't use it to mean something else. See [iconography]({{site.baseurl}}/style/iconography.html) for more information about icons.
- For more complex information needs, add a description to medium or large option tiles. Due to space constraints, do not add a description to small option tiles.
- Do not mix small, medium, and large size option tiles in an option tile set.
- Within an option tile set, ensure that option tiles are all uniform in size both vertically and horizontally.
- Limit the description to 80 characters total, which equates to 40 characters per line. A description should not be longer than two lines of text.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use these specifications when you construct option tiles.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

An option tile contains the following elements:

- **Container (required)**: The container holds the icon, heading, and the description.
- **Icon (optional)**: The icon visually represents the option you can select with the option tile.
- **Option label (required)**: The option label is the title of the option the user can select.
- **Description (optional)**: A description briefly explains the option tile selection to a user.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Option tile composition"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-composition.png" width="356"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use the following specifications when you construct option tiles.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Option tile style"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-style.png" width="411"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct option tiles.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Option tile spacing"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-spacing.png" width="604"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Behaviors

Ensure that you construct option tiles so that they conform to the following single- and multi-select behaviors.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Single-select interactions

A single-select interaction is analogous to radios where the user can only select one option tile at a time.

In the default state, the user can click any of the option tiles. You can construct option tiles so that one of the options is selected by default. The user can then make another selection, if necessary. When the user selects an option, the previously selected option tile becomes deselected and all remaining tiles change to the subdued state. The subdued state reinforces that only one option tile can be selected.

All unselected option tiles change to the hover state as the user scrolls over the option tile.

Saved credit card payment information is a common single-select use case.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Single-select option tile interactions"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-behavior-single.png" width="460"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Multi-select interactions

A multi-select interaction is analogous to checkboxes where the user can select multiple option tiles at a time.

In the default state, the user can click any of the option tiles. You can construct option tiles so that one of the options is selected by default. The user can then make another selection, if necessary. When the user selects an option, the unselected option tiles remain in the default state. The default state reinforces that multiple option tiles can be selected.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Multi-select option tile interactions"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-behavior-multi.png" width="460"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

Option tiles can exist in an **enabled**, **disabled**, or **error** state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

Option tiles use most of the same styling that is used for components like radios and checkboxes, with the addition of the checkmark to indicate a selected tile.

When possible, change the icon color with the selected states. If you cannot adjust the color of an icon, be consistent with your color decision throughout the option tile set. Do not have some icons that change color and others that do not change color.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Enabled option tile"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-states-enabled.png" width="419"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

When possible, inform the user about why an option is not available. Consider adding a tooltip to a disabled option tile explaining why it is disabled and how to enable it.

When you cannot control the color of the icon, set the icon opacity to 30%.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Disabled option tile"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-states-disabled.png" width="426"/>
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

{% figure [caption:"Single-select option tile error"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-states-error.png" width="472"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Group-select error

An error state can occur when an option tile selection is required but the user does not make a choice. Use a red asterisk to designate that an option tile selection is required. The asterisk floats to the left of the text in the margin and is vertically aligned with the text.

If an error occurs on a group, locate the message above the group. Do not change the state of each option tile.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Group-select option tile error"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/inputs-and-controls/option-tiles/choicetiles-states-errorgroup.png" width="474"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
