---
title: Toast
parent: Notifications
layout: component
category: Components
usage: >
  Toasts are a specialized notification component used to provide feedback on the status of an actions taking place in the background. Toasts are meant to be ephemeral and capture users attention by having the highest Z-index of all components.
preview-image: preview-images/toast.svg
status: stable
resource: true
last-modified: 2017-11-05
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/toasts/
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introductions

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

- A toast notification provides information that a user can act upon. Toasts incorporate an optional tertiary CTA that navigate the user out of the current page or context.
- Do **not** use this pattern for actions that are in context to the page or region - use an [alert bar]({{site.baseurl}}/components/alert-bar.html).
- Do **not** use a toast notification for promotional or marketing material such as the announcement of new features.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The toast notification component"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-hero.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### Best Practices

- If there's an error and the user can take an action to correct it, use a call to action (CTA).
- Use complete sentences. If only one sentence is used, do not include a period. However, if there are two or more sentences, use periods.
- Try not to exceed more than four lines of your message (excluding the CTA).
- Only use one CTA per toast. Never include “Dismiss” or “Close” as a CTA.
- Clicking on the “X” closes the toast notification. Hovering over it keeps it open until the cursor moves off of it. (See [Timing]({{page.url}}#timing) section for more detail.)

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Default layout

There are three types of toast notifications: Success or Confirmation, Error, and Information.

Clicking on the “X” closes the toast, but it will go away after approximately 10 seconds if no action is taken.

While the height of toasts is dependent on the amount of text, the minimum height is 56px without a CTA. If a CTA or more lines are needed the height can increase to accommodate. Keep notification messages short and succinct, with a maximum of four lines. Use complete sentences since they are less ambiguous.

Icons are always centered vertically.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default toast notifications specifications"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-specifications.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Variations

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Without a CTA

Clicking on the “X” dismisses the toast notification. There are no other actions that can be taken on this type of toast notification.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toast notifications without CTA"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-wo-cta.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### With a CTA

Use only one CTA per toast.

In the informational toast notification example here, the height of the toast increases to 96px to maintain the 8px spacing between the text and the CTA and the 12px spacing between the CTA and the bottom of the toast. The width **always** stays at 350px.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toast notifications with CTA"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-w-cta.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Behaviors

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Placement, animations, and stacking

Toasts display in the top right corner, 24px underneath the navigation bar. If more than one toast notifications are triggered at one time, they can stack 24px apart from each other vertically, with newer toasts coming in at the top.

### Timing

The toast fades into place over `400 ms`, sits in place for 8 s seconds, and fades out over `400 ms`. If the user hovers over the toast while it is fading out, it immediately gains full opacity. Toasts will persist indefinitely on cursor hover. Upon cursor removal the toast persists for three more seconds then fades over the normal `400 ms`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Placement, animation, and stacking of toast notifications in context"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-behaviors.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
