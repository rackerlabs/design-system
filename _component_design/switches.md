---
title: Switch
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A switch allows a user to commit a binary decision and is used exclusively or yes or no, and on or off decisions.
  They are especially useful when building mobile based designs.
preview-image: preview-images/switches.svg
resource: true
need: selectors
status: in-progress
last-modified: 2017-10-23
---

{% include toc.html %}

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

Use a switch if the user is turning something on or off, or saying yes or no to a question; there is no neutral option. Enabling preferences or settings is a prime use case for this component, explicitly stating the current status with text.

### Best practice

- Switches are only used for on or off, yes or no, and are usually only used for account and user settings, billing, and notifications. If your use case is outside of these three areas, consider a radio button or check-box.
- Save any changes to the state of the switch immediately. Use a check-box or radio button if the user has to perform extra steps for changes to be effective (for example, if the user must click a "submit" or "next" button to apply changes). Use check-boxes when the user can select multiple items that are related to a single setting or feature.
- One click anywhere on the switch changes the state. The user should not have to click and drag the button to the opposite side. However, there should be an animation showing the button sliding from one side to another.
- A switch should never be in an error state.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the switch component"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-hero.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Default layout

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The default switch does not contain text.

If text is used, it should be aligned vertically and horizontally within the space beside the white circle; no closer than 4px to the knob and 8px from the opposite edge.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Switch sizing specs"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-default-layout.svg)
{% endfigure %}
{% endcolumn %}
</div>

## States

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Enabled (default), hover, disabled, and error states. If you are not using any text, be sure to change the length to 56px.

The switch component responds to both mouse and tap click interactions. Upon clicking or tapping an enabled switch, the component transitions to the opposite state. Disabled switches do not respond to these interactions.

Best practice form design does not allow a switch to exist in an error state, so avoid it at all costs.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Detailed specifications for on and off states of a switch"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states.svg)
{% endfigure %}
{% endcolumn %}

</div>

## Context

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- Use the switch 12px to the left of the prompt and centered horizontally.
- When using more than one switch in a form, align the switches vertically to the right. Ensure they are at least 12px from the end of the prompt.
- Error text should appear 12px below the last line of the prompt.
- If the switch is disabled, ensure the prompt text is disabled also.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Contextual placement of switches"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-context.svg)
{% endfigure %}
{% endcolumn %}
</div>
