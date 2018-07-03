---
title: Selector
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A selector is one of the core input mechanisms for selecting options on a form. Drop-downs are used to provide a user with options or actions that effect the output of the form as a whole.
preview-image: preview-images/drop-downs.svg
resource: true
status: stable
need: selectors
last-modified: 2018-07-03
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use drop-downs for selecting a single option from a known list of options. Selecting one region on the Cloud Server create form is one example.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

- Applying the disabled state to any options that are not currently available to the user.
- Keeping the drop-down pattern to a set of items that are easily parsable by a user. While there is not a hard rule here for an upper-bounds limit of items to include a drop-down, once a drop-down data set exceeds 10 items it should be looked at to determine if it could be streamlined.
- Keeping the drop-down label viewable through all states of the dropdown. This ensures users remember what label prompted the data set they are viewing.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use these specifications when you construct a selector.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default layout"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-default-layout.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default layout"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-default-layout.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default layout"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-default-layout.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

Drop-downs can be in the following states:

- Default
- Focused
- Disabled
- Error
- Error with Focus

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Drop-downs states."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-states.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
