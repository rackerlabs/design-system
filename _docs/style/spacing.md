---
title: Spacing
layout: docs
category: Style
usage: >
  Helix spacing system provides a logical set of values and limited application rules to better enable design and developent teams to use spacing deliberately for improved readability and consistency in product. 
status: stable
resource: true
last-modified: 2018-02-16
---

{% include toc.html %}



<section class="static-section" markdown="1">

## Introduction
<div class="hxRow"  markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

The Helix spacing system was influenced by [Priyanka Godbole’s article](https://blog.prototypr.io/a-framework-for-creating-a-predictable-and-harmonious-spacing-system-8eee8aaf773c) in which she outlines steps for defining a system based on the **rule of three C’s**.

- [**Containers**](#containers): A “square” inset of twenty pixels is applied to the top, right, bottom, and left sides of any container.
- [**Content**](#content): A “stack” value is applied to the space below [headers](#headers) (eight pixels) and [leaf-nodes](#leaf-nodes) (four, eight, or sixteen pixels according to content type)
- [**Components**](#components): “Inline” spacing values are appled to the space between components.  This rule uses eight pixels in most cases, and four pixels for close proximity association.

This framework enabled us to define the spacing system using a limited set of values and rules that facilitate information hierarchy and adhere to accessibility guidelines.
For additional information on spacing vocabulary such as insets, stacks and inline, refer to Nathan Curtis’s article, [Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62).

{% endcolumn %}
</div>
</section>


<section class="static-section" markdown="1">

## Containers
<div class="hxRow"  markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

Pages, cards, modals, panes, etc. are containers  that frame content within a UI. Containers relate directly to the  canvas / grid to create the layout of any page. For this reason, we defined a twenty pixel square inset inside all containers to be harmonious with our column gutters.

{% figure [caption: "Container spacing of twenty pixels (square-inset)."][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-rule-for-containers.png){: width="893px"}
{% endfigure %}

{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Container Spacing Variants

Some cases may require different spacing to accommodate very small or large containers (see [choice-tiles]({{site.url}}/components/choice-tiles.html)). Therefore we have included  Small, Medium, and Large container spacing sizes to facilitate your content.  

* **Small = 12px** 
* **Medium = 20px**
* **Large = 28px**

Exceptions are made for some elements such as dashboard panels and [cards]({{site.url}}/components/cards.html) which require no inset spacing when featuring edge-to-edge, body content.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption: "Small, Medium and Large container spacing sizes."][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-container-spacing-variants.png){: width="466px"}
{% endfigure %}

{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-12" %}

## Content

Content lives inside the container. Content is stacked vertically using line-heights and bottom margins (depending on type of content). Bottom margins add extra spacing that improves visually perceptible intervals, which is helpful for conveying hierarchy. Content contains:

* Headers are at the highest level of hierarchy for content (page title, section title, sub-section title, container title)
* Just below the header hierarchy is the data interspersed in the form of paragraphs, lists, forms, and tables that we will refer to as leaf-nodes.

{% endcolumn %}

</div>


<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

**Baseline grid is multiples of four.**
Just like using columns as guides in your design, the baseline grid is a way to help you make decisions and build consistency into your layout based on multiples of four.

**Line-height ratio is 1.5.**
This ratio is taken from WCAG SC 1.4.8 guideline which states line-spacing is at least space-and-a-half (1.5) to enable people of different abilities to track and comprehend information more easily.

**Line-heights.**
Line-heights across all font-sizes must be proportional to each other to create a good vertical rhythm. To accomplish this  we use the same base line-height / base font-size ratio for deriving all other line-heights (font-size X 1.5 line-height ratio = line-height). Use the following calculated line-height values. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "\* Rounded to nearest multiple of four."][class:"image bg-light border"] %}
<table class="hxTable hxTable--condensed" style="margin: 0;">
  <thead>
    <tr>
      <th>Font Style</th>
      <th class="align-right">Size</th>
      <th></th>
      <th class="align-center">Ratio</th>
      <th></th>
      <th>line-height</th>
    </tr>
  </thead>
  <tbody>
    {% for style in site.data.typography-styles %}<tr>
      <td>{{style.fontStyle}}</td>
      <td class="align-right">{{style.fontSize}}</td>
      <td class="align-center">&times;</td>
      <td class="align-center">1.5</td>
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
### Headers 

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}


All content is stacked vertically, yet using line-height values alone does not convey enough visual hierarchy and can result in overly dense layouts. 

Priyanka’s framework provides a solution for this using header and leaf-node margins. Following her example, we experimented with different spacing values, in several layouts, and found that a single spacing value of eight pixels worked best for all header margins. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "Header margin (magenta) is stacked below content box (blue)."][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-header-margins.png){: width="492px"}
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol-12" %}

### Leaf-nodes 

Next we defined spacing values for leaf-node content. Unlike header margins, it is impossible to use a single spacing value across all types of leaf-node content. For each type of leaf-node content, the spacing is as follows:

* [Table cells](#table-cells): 8 pixels
* [List items](#list-items): 4 pixels 
* [Form elements](#form-elements): 4, 8, or 16 pixels, depending on the element
* [Paragraphs](#paragraphs): 16 pixels

{% endcolumn %}

</div>


<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Table cells

Tables are used when data is much more dense and has many attributes. Therefore, if the table’s data is spaced too close, it can be difficult to read through an entire row, without getting distracted by adjacent row data. 

By prescribing eight pixels between table text and table row borders, we get a total of sixteen pixels of space between text across two rows. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "Table leaf-node spacing"][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-leaf-node-margins.png){: width="566px"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### List items

Lists contain multiple items of homogenous data. It is important that the list items are not spaced apart like paragraphs, which typically hold heterogenous ideas.

To improve legibility, list items still need to be spaced apart. Many spacing values were considered before landing on four pixels.

[Read more about Lists.]({{site.url}}/components/lists.html)

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "List leaf-node spacing"][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-lists.png){: width="531px"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Full-width items in a bound container

A modification is made for list items that extend to the left and right edge of a visually bound container. The example is items in a drop-down menu. 

In cases like this the container does not receive a square inset.  To move the first item away from the top edge of the container, the first item gets a top space of four pixels.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "Full-width items in a bound container"][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-full-width-items-in-a-bound-container.png){: width="536px"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Form elements

We found that eight pixels of vertical space between consecutive, stacked inputs works best.  Eight pixels of space also applies to consecutive, horizontally inline inputs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "Form element leaf-node spacing"][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-forms.png){: width="462px"}
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Paragraphs

Paragraph line-height of twenty-four pixels was derived from visual explorations and validated using WCAG SC 1.4.8 guidelines, which recommends a line-height of at least 1.5 within paragraphs. Spacing below paragraphs is sixteen pixels.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "Paragraph leaf-node spacing"][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-paragraphs.png){: width="512px"}
{% endfigure %}
{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">
<div class="hxRow"  markdown="1">

{% column left:"hxCol-12" %}

## Components

Components are buttons, input fields, icons, and so on. Components are often placed next to each other horizontally (inline). All components sizing and spacing is defined in multiples of four.

{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Spacing inside components

For consistency, eight pixels was defined for left and right padding inside components. 

#### Spacing between components

We used a simple rule of eight pixels of space between any two adjacent components for the majority of applications. However, we decided to allow the use of four pixels to show a tighter association between components.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "Spacing inside components is shown in orange and external shown in green."][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/spacing/spacing-system-rule-for-components.png){: width="505px"}
{% endfigure %}
{% endcolumn %}

</div>
</section>