---
title: Toggle
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A toggle controls the presentation format for information on a control panel page.
preview-image: preview-images/toggles.svg
status: stable
resource: true
last-modified: 2019-03-14
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a toggle when you want to provide the user control over how information is presented on a control panel page.

For example, the user can use a toggle to switch the display of information from a card view that displays each entry as a tile on a grid, to a list view that displays each entry as an item in a list.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a toggle:

- A toggle set must include a minimum of two view options.
- Do not provide more than five view options in a toggle set.
- The user can select only one view option at a time.
- One view option must always be selected.
- You can configure any of the view options as the default option.
- Because a toggle does not pair the text with the icon, use tooltips to reveal what each option does.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a toggle.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A toggle is composed of the following elements:

- **Control container (required)**: The control container holds the option container and the option icon.
- **Option container (required)**: The option container holds the option icon.
- **Option icon (required)**: The option icon corresponds to how information displays on a control panel page. For example, the card view icon displays information on a set of tiles. The list view icon formats the information in a list.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toggle composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/toggle/toggle_composition.png" width="262px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Construct an option container so that is 32px by 32px. The control container holds all option containers and is 32px in height. Calculate the width of a control container by multiplying 32px by the number of options. For example, if there are two options, then the control container is 64px.

Construct the option icon so that it is 16px by 16px.

The images in this documentation include the card view icon and the list view icon. You are not limited to these icons. If you need to create a new icon, follow the guidelines available in [Iconography]({{site.baseurl}}/style/iconography.html#icon-construction).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toggle style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/toggle/toggle_style.png" width="340px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Ensure there is 8px of space on all sides of the option icon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toggle spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/toggle/toggle_spacing.png" width="64px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

Construct toggle options so that they conform to the following states:

- In the *selected state* the icon appears with a full color background.
- In the *unselected state* the icon is active and colored cyan, with a white background.
- In the *hover state* the icon takes on a lighter shade of cyan. Only unselected icons include a hover state.
- The *focus state* applies to the entire toggle component and treats the icon as a focusable child element. See [Focus States]({{site.baseurl}}/style/focus-states.html#focusable-child-elements) for more information.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toggle states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/toggle/toggle_states.png" width="308px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
