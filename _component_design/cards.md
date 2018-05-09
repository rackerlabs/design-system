---
title: Cards
parent: Content Areas
layout: component
category: Components
usage: >
  A card contains summary information and provides users the option to navigate to more detailed information. In contrast to tables, cards allow the user to visually distinguish between sets of information. A card is a substitute for a single row of tabular data.
preview-image: preview-images/cards.svg
status: in-progress
resource: true
last-modified: 2018-05-07
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use cards when you want a visually distinct arrangement of tabular data, and especially when an informational summary of different data objects is helpful for the user.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Use the following best practices when you construct cards:

- Construct cards so they are uniform in size.
- Do not use cards in place of robust data tables or with a large quantity of data entries.
- The number of cards that you can use is unlimited. However, ensure that the page use case justifies the data.
- Do not overuse cards in an application. Too many pages with cards might confuse users because they cannot intuitively determine the page that they are on.
- Do not include too much information on a card. Include only high-level information on a card, and link to more detailed information.
- If the information is better presented in a list or table, do not use cards. If the option to view a tabular data as a card grid is useful, you can present both layout options.
- If you use a card grid as an alternate view to a table view (or a list view), ensure you allow the user to switch to their preferred view.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications
Use the following specifications when you construct cards.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

The card pattern is composed of the following three elements:

- **Header (optional):** The header establishes the context for a card and contains icons (such as a cog) that allow the user to take action.
- **Body (required):** The body contains the primary content associated with the card. The body section details the underlying object that is represented by the card.
- **Footer (optional):** The footer provides calls to action that a user can take.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Card composition"] [class:"image bg-light border"] %}
 <embed src="{{site.url}}/assets/images/components/content-areas/cards/cards-composition.png" width="471px"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style
Use these specifications when you construct cards.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Card style"] [class:"image bg-light border"] %}
 <embed src="{{site.url}}/assets/images/components/content-areas/cards/cards-style.png" width="528px"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Each section of a card uses medium container spacing, 20px, by default.

Small and large spacing values can be used for card variations, but should not
be mixed and matched within a single card grid layout or individual card.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Card spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/cards/cards-spacing.png"
  width="377px"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Layout

Cards are applied to the [Helix grid](https://rackerlabs.github.io/helix-ui/components/grid/) and have a variable width and height based on content, current viewport, and use case.  

- Default cards are styled with an `#ffffff` background and should only go on darker backgrounds.
- For more information see the [Helix grid](https://rackerlabs.github.io/helix-ui/components/grid/).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Card layout"] [class:"image bg-light border"] %}
 <embed src="{{site.url}}/assets/images/components/content-areas/cards/cards-layout-1.png" width="580px"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

For aesthetic purposes and in instances where only a few cards are present, you can offset the location of the first card in a row. For more information see the [Helix grid](https://rackerlabs.github.io/helix-ui/components/grid/).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Card offset layout"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/cards/cards-layout-2.png" width="580px"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

Cards can exist in a loading and empty state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

If an individual card or set of cards is loading, use the [spinner loading indicator](http://helix.rax.io/components/loading-indicators.html) centered vertically and horizontally within the card body element.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Card loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/cards/cards-states-loading.png" width="463px"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Empty

The empty card provides a space for a user to add a new card.

The empty card button is based on the [chip](http://helix.rax.io/components/chips.html) component and is created by removing the fill of a chip, adding a dotted stroke to the containing shape, and overlaying a Helix plus icon (+).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"Card empty state"] [class:"image bg-light border"] %}
 <embed src="{{site.url}}/assets/images/components/content-areas/cards/cards-states-empty.png" width="506px"/>
{% endfigure %}
{% endcolumn %}
</div>

</section>
