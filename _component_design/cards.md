---
title: Cards
parent: Content Areas
layout: component
category: Components
usage: >
  Cards are good metaphors for cards in the real world. They are versatile, there can be many, and they allow us to see important information before digging in. As a content area, they can contain any kind of information.
preview-image: preview-images/cards.svg
status: in-progress
resource: true
last-modified: 2018-02-28
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Cards allow the user to more visually distinguish between sets of information than the Lists pattern. By providing the user with a familiar metaphor – ie: we use cards in the real world – it comes with sets of expectations that make them easy to use. Use cards to present minimal high level information that allows the user to dig deeper. Do not use cards in place of hyper-robust data tables, also be wary of using cards with a large quantity of data entries.

### Best practice

Cards should be uniform in size. Don’t overcrowd your card. It is not a Dashboard Card, which is a pattern that will be developed in the future. It is not meant to hold a wealth of information, but high level views to dig deeper into. Cards are not always the right solution to displaying information. If the information would be better presented in a list or table, do so, or if we have reason to believe Card Grids will appeal to some users, present both view options.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/cards-hero.png){:width="600px"}
{% endfigure %}
{% endcolumn %}

</div>

</section>

## Overview

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default layout


The card pattern is composed of the following three elements:

- **Header (optional):** The header sets the context for a card component and allows action on the card through the application of icons to it.
- **Body (required):** The body contains the primary content associated with the card. The body section details the underlying object, of which the card is representing to the user.
- **Footer (optional):** The footer serves to provide users with the calls to action that a user need take upon a card when applicable.


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

### Spacing

Each section of a card uses medium container spacing, 20px, by default.

Small and large spacing values can be used for card variations but should not be mixed and matched within a layout or card.


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

### Spacing

Each section of a card uses medium container spacing, 20px, by default.

Small and large spacing values can be used for card variations but should not be mixed and matched within a layout or card.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-spacing.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

## Layout

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Grid

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

### Offset

- In instances where only few cards are present, a designer may choose to offset the location of the first card in a row for aesthetic purposes. For more information see the [helix-ui grid](https://rackerlabs.github.io/helix-ui/components/grid/)

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

### Card use

- There is no limit to the number of cards that can be used, however, ensure the page use case justifies the data. For example, dashboards are meant to provide users with quick insights and clear paths forward to more robust data. Overusing cards data objects may have the opposite effect and leave users with to much to parse.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-use.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

## Variations

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Segemented card

Cards the use all three of the underlying elements are referred to as a segmented card.

- **The header:** may contain icons for card properties,card selection, duplication, deletion etc.

- **The body:** contains the meat of the card content. It contains some combination of text, images, icons, graphics or visualizations that detail the underlying object it represents.

- **The footer:** houses calls for a user to act on a card through the use of buttons or links.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-segmented.png){:width="611px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>


<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Open card

Cards that opt to remove the header and footer elements and rely solely on the body element are referred to as open cards.

Open cards have less containing shapes than segmented cards and are therefore better for representing more focused or less complex objects.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-open.png){:width="469px"}
{% endfigure %}
{% endcolumn %}
</div>

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

When the card grid is customizable by the user the Empty Card is where the user can add a new card.

The empty card button is based on the [chip] component and is created by removing the fill of a chip, adding a dotted stroke to the containing shape, and overlaying a helix plus icon


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/cards/card-add.png){:width="469px"}
{% endfigure %}
{% endcolumn %}
</div>
