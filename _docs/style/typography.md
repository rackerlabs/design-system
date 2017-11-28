---
title: Typography
layout: docs
category: Style
usage: |
  Roboto is visually geometric and has a modern feel with a breadth of weights.
  It is an easily readable, accessible, and open-source font from Google Fonts. Included in the
  family are six weights that should be used for all headers, sub-headers, and
  body text. Hierarchy can be established using size and negative space.
preview-image: style/preview-typography.svg
resource: true
status: in-progress
code-element: true
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

## Header styles

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Page title

Page titles are the highest level of hierarchy. Only use **one** page title per page.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-page-title.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Section title

Use section titles for titles of page sections. For example, if your page title is **Billing**, and the page has **Overview**, **Trends**, and **Payment methods** section headings, each section heading would use section titles.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-section-title.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Container title

Use container titles to identify content that exists inside a distinct visual container. For example, use a container title in the following contexts:

- Title for tab content
- Cards, [modals]({{site.baseurl}}/components/modal.html), or [sets of text fields]({{site.baseurl}}/components/text-fields.html)
- Sidebars and other distinct containers

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-container-title.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Container sub-title

The container sub-title is a flexible style used for grouping information within a titled container. For example, use this typography style for the following contexts:

- The labeling of sub-sections within tab content
- Labeling other tertiary content within a page, such as a small [popover]({{site.baseurl}}/components/popovers.html)

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-container-sub.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Context title

Use this typographic element to provide additional contextual labeling. For example, use this typography style for the following:   

- Adding a contextual title of “Cloud Server” above the server name on a device detail page
- Adding clarity to a report by adding a “Report Date” context title above the date field
- Labeling a price point with a plan name on an ordering form

Parameters for use:

- **Do not** use the context title on backgrounds darker than the standard Gray 25 (#fafafa) or it will not pass accessibiity standards.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-context-title.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

## Body styles

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Body text

Body text is the default style. Use this style across the interface for most information.

Paragraphs inherit body text style by default and have 20px bottom margin.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-body.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Link

Links support styles for hover, active, and disabled states and inherit size and spacing styles from the text to which they are applied. Helix does not support the visited state.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-link.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Caption

Use the caption style to clarify images, and do **not** introduce new, pertinent information with a caption.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-caption.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Sub-body text

Use sub-body text sparingly since it is the least readable size. For example, use this typography style for the following contexts:

- Labeling iconography
- Labeling the legend on visualizations
- Providing tertiary details or cards and tiles

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-sub-body.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Subdued style

Use the subdued style to allow more important information to stand out. For example, use the subdued style for keys in a key-value list to provide more visual prominence to the value or for non-critical information in lists, such as abbreviated dates or as a second line of text in a cell. 

Note the following parameters for the use of subdued text:

- This style only applies `gray750` color to the selected text and does not affect font size or weight.
- This style is not the same as inactive style for links or buttons.
- Use this style with text 14px or taller.
- Do **not** subdue text on backgrounds darker than `gray25` (`#fafafa`), or the text will not pass accessibility standards.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-subdued.png){:width="635px"}
{% endfigure %}
{% endcolumn %}

</div>

## Lists

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Ordered lists

Reserve ordered lists for instances in which the items must occur in a specific order, such as steps in a procedure, or when keeping count is important, such as a top 10 list.

If the order or the final count of the list items does not matter, don’t number them. Doing so creates confusion.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-ordered-list.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow" markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Unordered lists

Lists help break up large blocks of text, make complex articles and blog posts easier to grasp, and make key information stand out.

Lists work best when they include related items. The items should share a similar level of importance. When possible, write bullet items to be approximately the same length, so that one doesn’t overpower another. Keeping a uniform shape is eye pleasing and makes the list appear less busy.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/typography/type-unordered-list.png){:width="635px"}
{% endfigure %}
{% endcolumn %}
</div>



## Readability

<div class="hxRow"  markdown="1">
{% column left:"hxCol-8" %}

The W3C recommends the following contrast ratios for body text and image text:

>Small text less than **14px** should have a contrast ratio of at least **4.5:1** against its background. Large text greater than **18px** or **14px bold** should have a contrast ratio of at least **3:1** against its background.

- Use a higher contrast ratio to show importance and hierarchy.
- [Use the WebAIM contrast checker](http://webaim.org/resources/contrastchecker/){:target="\_blank"} to check contrast ratios.
- The examples below illustrate the minimum contrast ratio.

{% endcolumn %}
</div>

<div class="hxRow">
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#FFFFFF" color="#757575" csscode="Gray 700 on Gray 0" hex="#757575 on #FFFFFF" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#FAFAFA" color="#616161" csscode="Gray 800 on Gray 25" hex="#616161 on #FAFAFA" ratio="5.9 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#f5f5f5" color="#616161" csscode="Gray 800 on Gray 50" hex="#616161 on #F5F5F5" ratio="5.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#EEEEEE" color="#616161" csscode="Gray 800 on Gray 100" hex="#616161 on #EEEEEE" ratio="5.3 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#e7e7e7" color="#616161" csscode="Gray 800 on Gray 200" hex="#616161 on #E7E7E7" ratio="5.0 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#e0e0e0" color="#616161" csscode="Gray 800 on Gray 300" hex="#616161 on #E0E0E0" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#d8d8d8" color="#424242" csscode="Gray 900 on Gray 400" hex="#424242 on #D8D8D8" ratio="7.1 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#BDBDBD" color="#424242" csscode="Gray 900 on Gray 500" hex="#424242 on #BDBDBD" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#9E9E9E" color="#333333" csscode="Gray 950 on Gray 600" hex="#333333 on #9E9E9E" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#757575" color="#000000" csscode="Gray 1000 on Gray 700" hex="#000000 on #757575" ratio="4.6 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#616161" color="#e0e0e0" csscode="Gray 300 on Gray 800" hex="#E0E0E0 on #616161" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#424242" color="#bdbdbd" csscode="Gray 500 on Gray 900" hex="#BDBDBD on #424242" ratio="5.4 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#333333" color="#9e9e9e" csscode="Gray 600 on Gray 950" hex="#9E9E9E on #333333" ratio="4.7 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#212121" color="#9e9e9e" csscode="Gray 600 on Gray 975" hex="#9E9E9E on #212121" ratio="6.0 : 1" %}
  {% include chips.html class="hxCol-xs-12 hxCol-md-4 color-chip" bg-color="#000000" color="#757575" csscode="Gray 700 on Gray 1000" hex="#757575 on #000000" ratio="4.6 : 1" %}
</div>
