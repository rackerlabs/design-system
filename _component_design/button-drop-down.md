---
title: Drop-Down Buttons
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Text here on what a drop-down button is...
preview-image: preview-images/buttons.svg
status: stable
resource: true
last-modified: 2018-05-16
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

To include when to use drop-down vs. split drop-down vs. download/export..

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practice

- Button Text style should always be Title Case where the first letter of each word is capitalized.
- Buttons should always use the labeling convention of "Noun Verb", with no articles. For example, use "Create Server", not “Create a Server”.
- Keep your text labels as short as possible while also fully communicating what action the button will trigger.
- When choosing which button size to use, consider the context. In most cases, use a standard button.
- There should only be one primary button in a form.
- The primary button should always represent an inherently apparent next step such as **Create Server**, **Add Selected**, **Confirm Deletion**, **Submit**, or **Next**.
- If you have multiple buttons on a page, there can only be one primary button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Drop-down buttons

A drop-down button is preferred when multiple actions are available, with no designated primary action. All actions are accessed through the drop-down menu.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The drop-down button variation"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/drop-buttons-hero.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Specifications

- Drop-down buttons have the same size specifications as simple buttons.
- The secondary button can be used in conjunction with the primary button or when there are multiple buttons on the same screen.
- The same sizing rules apply to both secondary and primary buttons.
- Drop-down buttons and split drop-down buttons feature the same state changes as simple buttons. Refer to [simple button]({{page.url}}#simple-buttons) for specifications.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Drop-down button specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/drop-buttons-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Split drop-down buttons

Split drop-down buttons are preferred when more than one action is associated with a button. The primary action is visible and available on the button itself, while the secondary actions are accessed through the drop-down menu. See the [actions menu]({{site.baseurl}}/components/actions-menu.html) for drop-down design specifications.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The split drop-down button variation"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/split-drop-buttons-hero.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Specifications

- Split drop-down buttons have the same size specifications as simple buttons.
- The secondary button can be used in conjunction with the primary button or when there are multiple buttons on the same screen.
- The same sizing rules apply to both secondary and primary buttons.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Split drop-down button specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/split-drop-buttons-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Download or export buttons

- Download links are **always** formatted as: Download [noun] as [format].
- Use the word **Download** because there is no ambiguity about the destination (the user's platform). The word focuses on the user's benefit because the downloaded object becomes the user's.
- Download links come in 4 layouts. The preferred layouts are the 1- and 2+- Download options
- Use a condensed button variation in situations where space is too limited to use one of the preferred options.
- The icon-only variation should be limited to use in a toolbar.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Download button layouts"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/download-buttons-overview.png" width="571"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Specifications

The specs are the same as those used in simple buttons and dropdown buttons, except a Download icon is placed before the button label.

In most situations, download buttons should be secondary, but when downloading is the primary action on a page, a primary button may be used.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Specifications for download links"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/download-buttons-specs.png" width="571"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
