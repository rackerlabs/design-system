---
title: Cards
parent: Content Areas
layout: component
category: Components
usage: >
A card is a user interface element that contains summary information and provides users the option to navigate to more detailed information. A card can contain content comprised of different elements, such as text, pictures, and UI controls.

In contrast to the Lists pattern, cards allow the user to visually distinguish between sets of information.
preview-image: preview-images/cards.svg
status: in-progress
resource: true
last-modified: 2018-04-02
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## When to use

Use cards to present a small amount of high-level information to users, and allow them a way access more detail information.

Do not use cards in place of robust data tables, or with a large quantity of data entries.

## Best practices

Use the following best practices when constructing cards:

- Construct cards so they are uniform in size.
- There is no limit to the number of cards that can be used, however, ensure the page use case justifies the data. For example, dashboards are meant to provide users with quick insights and clear paths forward to more robust data. Overusing cards data objects might have the opposite effect and leave users with too much to parse.
- Do not include too much information on a card. A card is not a Dashboard Card, which is a pattern that will be developed in the future.
- Include only high-level information on a card, and link to more detailed information.
- If the information is better presented in a list or table pattern, do not use cards. If you believe Card Grids appeal to some users, present both view options.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/cards-hero.png){:width="600px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

## Specifications
Use the following specifications when constructing cards.

### Composition

The card pattern is composed of the following three elements:

- **Header (optional):** The header establishes the context for a card component and contains icons (such as a cog) that allow the user to take action.
- **Body (required):** The body contains the primary content associated with the card. The body section details the underlying object represented by the card.
- **Footer (optional):** The footer provides calls to action that a user can take.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-default.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Style

Cards are applied to the helix-grid and have a variable width and height based on content, current view-port, and use case.  

- Default cards are styled with a #FFFFFF background and should only go on darker backgrounds.
- For more information see [the Helix-ui Grid](https://rackerlabs.github.io/helix-ui/components/grid/)

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-grid.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

For aesthetic purposes and in instances where only few cards are present, you can offset the location of the first card in a row. For more information see the [helix-ui grid](https://rackerlabs.github.io/helix-ui/components/grid/)

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
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-use.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

### Spacing

Each section of a card uses medium container spacing, 20px, by default.

Small and large spacing values can be used for card variations, but should not be mixed and matched within a layout or card.

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

## States

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading

If an individual card or set of cards is loading, use the Spinner Loading Indicator centered vertically and horizontally within the card body element.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-loading.png){:width="469px"}
{% endfigure %}
{% endcolumn %}
</div>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Empty card

The empty card provides a space for a user to add a new card.

The empty card button is based on the [chip] (https://rackerlabs.github.io/helix-ui/components/chips/) component and is created by removing the fill of a chip, adding a dotted stroke to the containing shape, and overlaying a helix plus icon.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-add.png){:width="469px"}
{% endfigure %}
{% endcolumn %}
</div>


## Sample: Segemented card

A segmented card makes use of all three underlying elements. In the following samples:

- the **header** contains text that provides the context for the card and a cog that enables a user to take action.

- the **body** contains a combination of text, images, icons, graphics or visualizations that detail the underlying object the card represents.

- the **footer** contains button and link calls to action.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-segmented.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>
