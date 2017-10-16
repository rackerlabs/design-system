---
title: Switches
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A switch allows a user to commit a binary decision and is used exclusively for yes/no or on/off decisions. They are especially useful when building mobile based designs.
preview-image: preview-images/switches.svg
resource: true
need: selectors
status: in-progress
last-modified: 2017-08-17
---

{% include toc.html %}


## Introduction
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use
{: .hxSubSectionTitle}

Use a switch if the user is turning something on or off, or saying yes or no to a question. There is no neutral option; the answer is either set to on or off. Enabling preferences or settings is a prime use case for this component. The switch should always be used with text. 

If more complex text is needed in the switch than yes/no or on/off, use a toggle. A switch should NOT be used for things like user agreements or if there are more than two options available.


### Best Practice
{: .hxSubSectionTitle}
- Switches are only used for on/off and yes/no, and are usually only used for account and user settings, billing, and notifications. If your use case is outside of these three areas, consider a radio button or checkbox. 
- Changing the state of the switch should be saved immediately. Use a checkbox or radio button if the user has to perform extra steps for changes to be effective (for example, if the user must click a "submit" or "next" button to apply changes). Use check boxes when the user can select multiple items that are related to a single setting or feature.
- One click anywhere on the switch changes the state. The user should not have to click and drag the button to the opposite side. However, there should be an animation showing the button sliding from one side to another.
- A switch should never be in an error state, so try to avoid it.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tab menu structure"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-hero.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

## Default Layout
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The default switch does not have text inside of it, but text (either 'On / Off' or 'Yes/ No') can be used to verify the choice being made. 

If text is used, it should be aligned vertically and horizontally within the space beside the white circle; no closer than 4px to the knob and 8px from the opposite edge.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Switch sizing specs"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-default-layout.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}
</div>

## States
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Enabled (default), hover, disabled, and error states. If you are not using any text, be sure to change the length to 56px (down from 68px shown here with text).

The user should be able to click anywhere on the element to change it; in other words, they should NOT have to try to grab the white knob and slide it over. Clicking once anywhere slides the knob in the opposite direction (with the exception of disabled). 

Best practice form design would not allow a switch to ever exist in error state, so try to avoid it at all cost.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Detailed specs for on and off states of a switch"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-states.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}

</div>

## Context
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

- The switch should be used 12px to the left of the prompt, and centered horizontally to it. 
- If more than one switch is used in a form, right align the switches so they align vertically, trying to keep at least one of them 12px from the end of the prompt. 
- Error text should appear 12px below the last line of the prompt.
- If switch is disabled, the prompt text should be disabled as well.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Contextual placement of switches"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/switches/switch-context.svg){:width="80%"}
{% endfigure %}
{% endcolumn %}

</div>
