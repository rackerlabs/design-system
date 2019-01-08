---
title: Spacing
layout: docs
category: Style
usage: >
  The Helix spacing system provides a set of values you can use when you determine the amount of space between user interface (UI) components. By applying these spacing values consistently you adhere to accessibility guidelines and improve the readability of control panel pages.
status: stable
resource: true
last-modified: 2019-01-08
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

The document provides guidelines you should use when deciding on spacing values between and among user interface components. Specific values are provided, with justification for we recommend certain spacing values.

The Helix spacing system applies to three areas of a user interface (UI): container, content, and component.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Best practices

Consider the following best practices when you apply the Helix spacing system:

- In most cases, use medium as the default size
- If you intend to use a different spacing value, keep in mind that large spacing can result in too much whitespace, and small spacing can be too data dense and difficult for the user to parse.
- Don't mix spacing sizes within the same component.

% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Container

Pages, cards, modals, panes, and choice tiles are containers that frame content within a UI. By default, a square inset of 20px is applied to the top, right, bottom, and left side of any container. The 20px spacing is medium, but you can use smaller or larger spacing, if required.

{% figure [caption: "Container spacing of twenty pixels (square-inset)."][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-rule-for-containers.png" width="893"/>
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Container spacing variants

In some cases, a smaller or larger spacing value is required. Use the following spacing values to apply extra small through extra-extra-large spacing.

- **Extra-small (XS) = 8px**
- **Small (SM) = 12px**
- **Medium (MD) = 20px**
- **Large (LG) = 32px**
- **Extra-large (XL) = 48px**
- **Extra-extra-large (XXL) = 72px**

In addition, some elements, such as a dashboard panel, requires no inset spacing when displaying edge-to-edge, body content.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Container spacing sizes."][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-container-spacing-variants.png" width="451"/>
{% endfigure %}

{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12" %}

<!-- BUG: a[href="content"] apparently is a specifically styled thing in HelixUI... -->

## Content

Content is displayed inside the container and can be stacked vertically using line-heights and bottom margins (depending on type of content). Bottom margins add extra spacing that improves visually perceptible intervals, which is helpful for conveying hierarchy. Content contains:

- **Headers**: Headers are the highest level of hierarchy for content and are used for page titles, section titles, sub-section titles, and  container titles.
- **Leaf node**: A leaf node is located just below the header and consists of paragraphs, lists, forms, and tables.

Apply a *stack* value to the space below a [header](#headers) (8px) and [leaf-nodes](#leaf-nodes) (4, 8, or 16px according to the content type).

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

**Baseline value**: The Helix spacing system uses four as the baseline number on which all other spatial values are determined. For example, the font size for all headings is a multiple of four. A baseline value helps you build consistency into your layout.

**Line-height ratio is 1.5**: The line-height ratio is taken from the WCAG SC 1.4.8 guideline which states that line spacing should be at least 1.5x the size of the font. This amount of spacing enables people of different abilities to more easily track and comprehend information.

**Line height**: Apply the line-height ratio to all font sizes to create proportional spacing between content areas. Use this chart to determine the appropriate line height for each font size.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption: "\* Rounded to nearest multiple of four."][class:"image bg-light border"] %}
<table class="hxTable hxTable--condensed" style="margin: 0;">
  <thead>
    <tr>
      <th>Font Style</th>
      <th class="hxRight">Size</th>
      <th></th>
      <th class="hxCenter">Ratio</th>
      <th></th>
      <th>line-height</th>
    </tr>
  </thead>
  <tbody>
    {% for style in site.data.typography-styles %}<tr>
      <td>{{style.fontStyle}}</td>
      <td class="hxRight">{{style.fontSize}}</td>
      <td class="hxCenter">&times;</td>
      <td class="hxCenter">1.5</td>
      <td>=</td>
      <td>{{style.lineHeight}}</td>
    </tr>{% endfor %}
  </tbody>
</table>
{% endfigure %}
{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Headers

Applying line height values to vertically stacked content can still result in overly dense layout. Helix user testing revealed that participants preferred adding an extra 8px between stacked elements.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Header margin (magenta) is stacked below content box (blue)."][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-header-margins.png" width="492"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12" %}

### Leaf nodes

A leaf node includes any content that is not a header, including paragraphs, form elements, list items, and table cells. There is no single spacing value that can be used across all leaf node content. Based on Helix user testing, we have determined the following spacing for leaf node content:

- [Table cells](#table-cells): 8px
- [List items](#list-items): 4px
- [Form elements](#form-elements): 4, 8, or 16px, depending on the element
- [Paragraphs](#paragraphs): 16px

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Table cells

Tables are designed to show a lot of data in a small amount of space. When table data is spaced too closely, the user can have a difficult time reading a row and can become distracted by adjacent row data.

To make tables more readable, add 8px between the table text and the table row border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Table leaf-node spacing"][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-leaf-node-margins.png" width="566"/>
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### List items

Use 4px spacing between list items.

[Read more about Lists.]({{site.url}}/components/lists.html)

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption: "List leaf-node spacing"][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-lists.png" width="531"/>
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Drop-down Selector options (formerly Full-width items in a bound container)

Place 4px of space between drop-down selector options.

**OLD TEXT. IS ANY OF THIS RELEVANT?**

A modification is made for list items that extend to the left and right edge of a visually bound container. The example is items in a drop-down menu.

In cases like this the container does not receive a square inset. To move the first item away from the top edge of the container, the first item gets a top space of four pixels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption: "Full-width items in a bound container"][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-full-width-items-in-a-bound-container.png" width="536"/>
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Form elements

We found that eight pixels of vertical space between consecutive, stacked inputs works best.  Eight pixels of space also applies to consecutive, horizontally inline inputs.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption: "Form element leaf-node spacing"][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-forms.png" width="462"/>
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Paragraphs

Paragraph line-height of twenty-four pixels was derived from visual explorations and validated using WCAG SC 1.4.8 guidelines, which recommends a line-height of at least 1.5 within paragraphs. Spacing below paragraphs is sixteen pixels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption: "Paragraph leaf-node spacing"][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-paragraphs.png" width="512"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">
<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12" %}

## Component

Components are buttons, input fields, icons, and so on. Components are often placed next to each other horizontally (inline). All components sizing and spacing is defined in multiples of four.


“Inline” spacing values are applied to the space between components.  This rule uses 8px in most cases, and 4px for close proximity association.

{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Spacing inside components

For consistency, eight pixels was defined for left and right padding inside components.

#### Spacing between components

We used a simple rule of eight pixels of space between any two adjacent components for the majority of applications. However, we decided to allow the use of four pixels to show a tighter association between components.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption: "Spacing inside components is shown in orange and external shown in green."][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-system-rule-for-components.png" width="505"/>
{% endfigure %}
{% endcolumn %}

</div>
</section>
