---
title: Drop-down Selector
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A drop-down selector enables the user to select one value from a list. When the drop-down selector is inactive, it displays a single value. When the drop-down selector is activated by the user, it displays a list of values from which the user can choose.
preview-image: preview-images/drop-downs.svg
resource: true
status: stable
last-modified: 2018-08-21
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a drop-down selector in the following situations:

- When you want to enable users to select one option from a list of options.
- When you want to conserve screen space.
- When you want to prevent users from entering erroneous data. A drop-down selector shows only valid choices.

{% endcolumn %}

</div>

</section>

<!--- End of Usage section --->

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a drop-down selector:

- Limit the number of drop-down selector options to 15 choices. Long lists of options are difficult for the user to scan.
- Consider using a [text input]({{site.baseurl}}/components/text-input.html) with auto-complete for long lists of choices.
- Consider using [radios]({{site.baseurl}}/components/radio-buttons.html) when you provide the user with seven or fewer options. This enables the user to immediately scan the options without clicking to reveal this information.
- To remind the user of the data set they are working with, ensure that the selected option is viewable through all drop-down selector states.
- Add a meaningful label to the drop-down selector that clearly communicates what the user is selecting. For example, use *Select a Region* and don't use *Select an Option*.
- Apply the disabled state to any drop-down selector option that is not available to the user.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a drop-down selector.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A drop-down selector consists of the following elements:

- **Container (required)**: The container holds the trigger and drop-down selector options.
- **Trigger (required)**: When the user clicks the trigger, the list of drop-down selector options appears.
- **Selected option (required)**: To select an option, the user clicks on it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Drop-down selector composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-selector/drop-down-selector-composition.png" width="437"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a drop-down selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Drop-down selector style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-selector/drop-down-selector-style.png" width="580"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Although the width of a drop-down selector should be a multiple of four, the width can vary.

The height of a drop-down selector is a static 32px with 8px above and below the vertically centered text.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Drop-down selector spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-selector/drop-down-selector-spacing.png" width="326"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

A drop-down selector can exist in the *enabled*, *disabled*, *error*, *focused*, and *too long* states.

Refer to [focus states]({{site.baseurl}}/style/focus-states.html) for guidance in constructing a focused state drop-down selector.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Drop-down selector states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-selector/drop-down-selector-states.png" width="527"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

When the selection is too long for the container, the selection trigger overlays the text. This also applies to disabled states where the icon background takes on the disabled color.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Drop-down selector too long state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/drop-down-selector/drop-down-selector-states-toomany.png" width="326"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
