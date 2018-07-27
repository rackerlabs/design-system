---
title: Switch
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A switch enables the user to make a binary decision (such as yes or no, and on and off) when configuring a setting or preference.
preview-image: preview-images/switches.svg
resource: true
need: selectors
status: stable
last-modified: 2018-07-27
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a switch in the following situations:

- When you want to enable to user to make a binary decision, such as turning a setting on or off. A switch does not contain a neutral option. Modifying preferences and settings is a prime use case for this component.
- Use a switch when the user needs to modify settings or enable billing and notification preferences. If your use case is outside of these three areas, consider a [radio]({{site.baseurl}}/components/radio-buttons.html) or [checkbox]({{site.baseurl}}/components/checkboxes.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a switch:

- After a change, save the state of the switch immediately. Use a checkbox or radio if the user performs additional steps for changes to be effective. For example, use a radio or checkbox if the user must click a **Submit** or **Next** button to apply changes.
- A switch changes state when the user clicks it. Do not construct a switch that changes state when the user *clicks and drags* the knob.
- For clarity, consider including animation that shows the user the switch behavior.
- The option label is only one word and no more than 10 characters. Use words that clearly indicate the status of the option.
- When there is a long list of settings, consider adding switches to a table. This approach provides clarity and enhances the user experience.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a switch.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A switch contains the following elements:

- **Switch container**: The switch container holds the switch knob.
- **Knob**: The knob moves from side to side within the container when the user clicks it.
- **Option label (Optional)**: The option label indicates the state of the setting or preference. The default switch does not contain an option label.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-composition.png" width="274"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a switch.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-style.png" width="425"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

- Use the switch 12px to the left of the prompt and centered horizontally.
- When using more than one switch in a form, align the switches vertically to the right. Ensure they are at least 12px from the end of the prompt.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-spacing.png" width="206"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A switch can be in an *enabled*, *disabled*, and an *error* state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

A user can click a switch in the enabled state.

See [Focus States]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused switches in an enabled state.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch enabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states-enabled.png" width="330"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

A user can't select a switch in the disabled state. In the disabled state, the switch is locked and cannot be changed.
{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch disabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states-disabled.png" width="322"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

An error state can apply to switches when the user clicks a switch.

Refer to [Focus States]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused switches in an error state.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states-error.png" width="384"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Switch in a form

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-example-inaform.png" width="264"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Switch in a table

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-example-inatable.png" width="605"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
