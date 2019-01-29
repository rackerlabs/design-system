---
title: Spacing
layout: docs
category: Style
usage: >
    The Helix spacing system provides a set of values that you can use to consistently space user interface (UI) components. By applying these spacing values consistently, you adhere to Helix accessibility guidelines and can improve the readability of control panel pages.
status: stable
resource: true
last-modified: 2019-01-29
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

The Helix spacing system applies to three areas of a user interface (UI): container, content, and component.

{% figure [caption: "Spacing system"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-hero.png" width="866"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Best practices

Consider the following best practices when you apply the Helix spacing system:

- In most cases, use medium spacing (20px) as the default.
- When choosing spacing values for a new design, consider the user's needs and use case. Use small spacing when users prefer greater data density. Use large spacing to increase whitespace, which can help enhance user comprehension.
- Avoid uneven spacing (padding) on containers. In the majority of cases, containers must use square inset spacing, which means that the top, right, bottom, and left spacing values are equal inside the container.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Container spacing

Pages, cards, modals, panels, and option tiles are examples of containers that frame content within a UI. By default, apply a square inset of 20px to the top, right, bottom, and left side of the container. The 20px value is the medium spacing value, and you can use smaller or larger spacing, if required.

{% figure [caption: "Helix containers"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-container-types.png" width="464"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Container spacing variants

In some cases, you might be required to use smaller or larger spacing than the 20px default value. Keep in mind that large spacing can result in too much whitespace and small spacing can lead to a data dense UI, which can be difficult for a user to process.

- **Small (SM) = 12px**
- **Medium (MD) = 20px**
- **Large (LG) = 32px**

In addition, some elements, such as a dashboard panel, require no inset spacing when displaying edge-to-edge body content.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Container spacing sizes"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-container-sizes.png" width="604"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12" %}

## Content spacing

Content is any information displayed inside a container. When you vertically stack content components, ensure that you conform to line height and bottom margin spacing values. Bottom margins contain extra spacing that improves visually perceptible intervals, which is helpful for conveying hierarchy.

There are two types of content:

- **Headers**: Headers are the highest level of the content hierarchy and are used for page titles, section titles, subsection titles, and  container titles.
- **Body elements**: Body elements are located just below the header and consist of list items, drop-down selectors, and paragraphs.

Apply a *stack* value to the space below a [header](#headers) (8px) and [body elements](#body-elements) (4, 8, or 16px according to the content type).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

**Baseline value**: The Helix spacing system uses 4 as the baseline number on which all other spatial values are calculated. For example, the font size value for all headings are multiples of 4. The baseline value helps you build consistency into your layout.

**1.5 line-height ratio**: The Helix spacing system line-height ratio is taken from the WCAG SC 1.4.8 guidelines that state line spacing should be at least 1.5 times the size of the font. This amount of spacing enables people of different abilities to more easily track and comprehend information.

**Line height**: Apply the line-height ratio to all font sizes to create proportional spacing between content areas. Use this chart to determine the appropriate line height for each font size.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption: "Rounded to the nearest multiple of four"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-content-calculations.png" width="548"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Headers

Applying line-height values to vertically stacked content can result in overly dense layout. Helix user testing revealed that participants preferred adding an extra 8px between stacked elements.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Header spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-content-headings.png" width="427"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12" %}

### Body elements

Body elements can include list items, drop-down selectors, and paragraphs. There is no single spacing value that can be used across all body element content.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### List items

Use 4px spacing between list items. Refer to [lists]({{site.url}}/components/lists.html) to see additional information about lists.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "List item spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-content-lists.png" width="240"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Drop-down selectors

Add 4px of space between the container and the first drop-down selector option. Add 4px of space between all drop-down selector options.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Drop-down selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-content-lists-dropdown.png" width="239"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Paragraphs

Use a 24px line height in paragraphs that contain 16px font text. Add 16px spacing below a paragraph. These values were determined through visual explorations and input from the WCAG SC 1.4.8 guidelines.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Paragraph spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-content-paragraphs.png" width="550"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12" %}

## Component spacing

Components such as buttons, text inputs, and date pickers are often placed beside each other on a control panel page. The Helix spacing system uses multiples of 4px as the baseline spacing value.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing inside components

Within a component, use 12px spacing for the left and right padding.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Spacing between and inside components"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-component-inside.png" width="200"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing between components

In most cases, use 8px spacing between adjacent components.

Use 4px spacing when you want to show a tighter association between related components. For example, to more tightly associate a text input with related help documentation, place the **Help** icon 4px from the input. You should also use 4px spacing between highly related inputs. For example, if the UI requires the user to enter time in **Hours:Minutes:Seconds** (three separate, but related inputs), add 4px space between each input.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Spacing between and inside components"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-component-between.png" width="280"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Form elements

Ensure form element spacing conforms to the following guidelines:

- Add 4px of space between a label and the input.
- Add 8px of space between vertically or horizontally stacked inputs that are consecutive  on a form.
- Add 16px of space between form element groups.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Form element spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-component-forms.png" width="288"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Table cells

Tables are designed to show a lot of data in a small space. When you space table data too closely, the user can have a difficult time reading a row and can become distracted by adjacent row data.

To make tables more readable, add 8px between the table text and the table row border.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Table cell spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/spacing/spacing-component-tables.png" width="529"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
