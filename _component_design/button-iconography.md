---
title: Button Iconography
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Button iconography refers to the use of icons in buttons.
preview-image: preview-images/button-icon_thumbnail.svg
status: stable
resource: true
last-modified: 2018-10-11
helix-ui-css: true
helix-ui-javascript: false
pagelink: https://rackerlabs.github.io/helix-ui/components/menus/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Add an icon to a button when you want to visually represent an action to the user.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a button that includes an icon:

- Do not add an icon to a button unless it is immediately recognizable to the user. Icons are often culturally defined. For example, mailboxes look very different in various countries whereas envelopes look similar. Therefore, use the image of an envelope to represent an email program.
- Unless an icon is an established standard, pair the icon with text to reinforce its meaning.
- Be consistent in your use of iconography in a [button bar]({{site.baseurl}}/component/buttons-bar.html). Don’t mix text and icon buttons with text-only buttons.
- Except for a drop-down indicator icon, place the icon to the left of the button text.
- If there is an established meaning to an icon, don’t use it to mean something else. For example, don’t use a cog for **Settings**. A cog should only be used for a drop-down menu of actions.
- Don’t deviate from the established button color.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Text and icon button specifications

Use the following specifications when you construct a text and icon button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A text and icon button contains the following elements:

- **Container (required)**: The container holds the icon and the call-to-action text.
- **Icon (required)**: The icon visually represents the act that is initiated when the user clicks the button.
- **Call-to-action (required)**: The call-to-action text describes the act that is initiated when the user clicks the button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text and icon button composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-txtwicon-composition.png" width="278"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a text and icon button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text and icon button style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-txtwicon-style.png" width="331"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct a text and icon button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Text and icon button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-txtwicon-spacing.png" width="171"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Icon-only button specifications

Use the following specifications when you construct an icon-only button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

An icon-only button contains the following elements:

- **Container (required)**: The container holds the icon.
- **Icon (required)**: The icon visually represents the action initiated when the user clicks the button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Icon-only button composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-icononly-composition.png" width="240"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct an icon-only button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Icon-only button style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-icononly-style.png" width="271"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct an icon-only button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Icon-only button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-icononly-spacing.png" width="239"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## States

Icon-only buttons can exist in *default*, *hover*, *disabled*, and *focus* states.

Rather than using `cyan 900` to color the tertiary buttons, use `#424242` to make them more subdued and less overwhelming to the user.

See [focus states]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused state icon buttons.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Icon-only button states"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-icononly-states-modtertiary.png" width="270"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Examples

This section includes examples of common icon buttons that you can use when constructing a control panel page.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Common icon buttons

Choose from a variety of standard icon buttons. See the [Helix Toolkit](https://rackerlabs.github.io/helix-ui/components/icons/) for more information about icons.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Common icon buttons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-icononly-examples-common.png" width="440"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Secondary filter

When you add a filter button to a page, ensure it is a secondary button. Do not use a primary button for a filter.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Secondary filter buttons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-icononly-examples-secondary-filter.png" width="633"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Cog

The cog is a commonly used workflow-based icon. When the user clicks a cog, a drop-down menu of actions appears.  

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Cog buttons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/button-iconography/buttoniconography-icononly-examples-modtert-cog.png" width="633"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
