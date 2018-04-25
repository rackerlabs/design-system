---
title: Cards
parent: Content Areas
layout: component
category: Components
usage: >
  A card is a user interface element that contains summary information and provides users the option to navigate to more detailed information. In contrast to the tables pattern, cards allow the user to visually distinguish between sets of information. Cards substitute for a single row of tabular data.
preview-image: preview-images/cards.svg
status: in-progress
resource: true
last-modified: 2018-04-24
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## When to use

Use cards when you want to a visually distinct arrangement of tabular data, especially when an informational summary of different data objects is helpful for the user.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## Best practices

Use the following best practices when you construct cards:

- Construct cards so they are uniform in size.
- Do not use cards in place of robust data tables or with a large quantity of data entries.
- There is no limit to the number of cards that can be used; however, ensure the page use case justifies the data.
- Do not overuse cards in an application. Too many pages with cards can be confusing to users because they cannot intuitively determine the page they are on.
- Do not include too much information on a card. Include only high-level information on a card, and link to more detailed information.
- If the information is better presented in a list or table pattern, do not use cards. If you believe card grids might appeal to some users, you can present both layout options.
- If you use a card grid as an alternate view to a table view (or a list view), ensure you allow the user to switch to their preferred view.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## Specifications
Use the following specifications when you construct cards.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Composition

The card pattern is composed of the following three elements:

- **Header (optional):** The header establishes the context for a card and contains icons (such as a cog) that allow the user to take action.
- **Body (required):** The body contains the primary content associated with the card. The body section details the underlying object represented by the card.
- **Footer (optional):** The footer provides calls to action that a user can take.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/cards_composition.png){:width="477px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Style
Use these redline specifications when you construct cards.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/cards_style.png){:width="524px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing

Each section of a card uses medium container spacing, 20px, by default.

Small and large spacing values can be used for card variations, but should not
be mixed and matched within a single card grid layout or individual card.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-spacing.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Layout

Cards are applied to the [Helix grid](https://rackerlabs.github.io/helix-ui/components/grid/) and have a variable width and height based on content, current viewport, and use case.  

- Default cards are styled with an `#FFFFFF` background and should only go on darker backgrounds.
- For more information see the [Helix grid](https://rackerlabs.github.io/helix-ui/components/grid/).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-grid.png){:width="624px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

For aesthetic purposes and in instances where only a few cards are present, you can offset the location of the first card in a row. For more information see the [Helix grid](https://rackerlabs.github.io/helix-ui/components/grid/).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-grid-offset.png){:width="624px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

## States

Cards can exist in a loading and empty state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading

If an individual card or set of cards is loading, use the [spinner loading indicator](http://helix.rax.io/components/loading-indicators.html) centered vertically and horizontally within the card body element.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-loading.png){:width="469px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Empty card

The empty card provides a space for a user to add a new card.

The empty card button is based on the [chip](http://helix.rax.io/components/chips.html) component and is created by removing the fill of a chip, adding a dotted stroke to the containing shape, and overlaying a Helix plus icon (+).

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-add.png){:width="469px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>
