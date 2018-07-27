---
title: Switch
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A switch enables a user to make a binary decision that are characteristic of yes or no, and on or off decisions.
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

- When you want to enable to user to make a binary decision, such as when turning a setting on or off. A switch does not contain a neutral option. Modifying preferences and settings is a prime use case for this component.
- Use a switch when the user needs to modify settings or enable billing and notification preferences. If your use case is outside of these three areas, consider a radio or checkbox.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a switch:

- Save any changes to the state of the switch immediately. Use a check-box or radio if the user has to perform extra steps for changes to be effective (for example, if the user must click a "submit" or "next" button to apply changes). Use check-boxes when the user can select multiple items that are related to a single setting or feature.
- The switch changes state when the user clicks it. Do not construct a switch that changes state when the user clicks and drags the button. You can include an animation that shows the user the switch behavior.
- The text status is only one word no more than xx characters. Use words that clearly indicate the status of the option.
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

You can add an option status and description to a switch. The default switch does not contain status or descriptive text.

A switch contains the following elements:

- **Switch container**: The switch container hold the switch knob.
- **Switch knob**: When the user clicks the switch knob it moves from side to side within the switch container.
- **Option status**: The option status indicates the state of the setting or preference.
- **Description**: The description is the setting or preferences option the user is modifying.


If text is used, it should be aligned vertically and horizontally within the space beside the white circle; no closer than 4px to the knob and 8px from the opposite edge.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-default-layout.svg"/>
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
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-default-layout.svg"/>
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
- Error text should appear 12px below the last line of the prompt.
- If the switch is disabled, ensure the prompt text is disabled also.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-context.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A switch can be in an *enabled*, *disabled*, and an *error* state.

Enabled (default), hover, disabled, and error states. If you are not using any text, be sure to change the length to 56px.

The switch component responds to both mouse and tap click interactions. Upon clicking or tapping an enabled switch, the component transitions to the opposite state. Disabled switches do not respond to these interactions.

Best practice form design does not allow a switch to exist in an error state, so avoid it at all costs.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Enabled

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch enabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Disabled

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch disabled state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

Intro text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Switch error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
