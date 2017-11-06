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
---

{% include toc.html %}

## Introductions

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- A toast notification provides information for action outside of the user’s current context. User understand that clicking on any links within the toast notification will take them out of the current context. 
- This pattern should NOT be used for action in context to the page/ region. In that case, consider an alert bar. 
- A toast notification is **not** used for promotional or marketing material; such as the announcement of new features on the current page.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"The toast notification component"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/notifications/toasts/toast-hero.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
### Best Practices

- Keep messages short and succinct, but also helpful. In the case of an error, if there is an action the user can take (correct the errors on the form or submit the form again), use a call to action (CTA) if possible. 
- Use complete sentences. If only 1 sentence is used, do not include a period. However, if there are 2+ sentences, use periods.
- Try not to exceed more than 4 lines of your message (excluding the CTA).
- Only use one CTA per toast. Never include “Dismiss” or “Close” as a CTA. 
- Clicking on the “X” closes the toast notification. Hovering over it keeps it open until the cursor moves off of it, in which case it disappears 3 seconds after the cursor is removed.
{% endcolumn %}

</div>

## Specifications

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default specifications

There are three types of toast notifications: Success or Confirmation, Error, and Informational.

Clicking on the “X” closes the toast, but it will go away after approx. 10 seconds if no action is taken. (See “Placement, Animation, and Stacking” section below for details and more info.) 

The standard/ minimum height of the toast notification is 62px if no CTA; 89px WITH a CTA. If more lines are needed, the height can increase, but try to keep notification messages short and succinct. We recommended trying to keep your message to 4 lines max. Use complete sentences as it leaves less room for ambiguity. Icons are always centered vertically.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Default toast notifications specs"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/notifications/toasts/toast-specifications.svg)
{% endfigure %}
{% endcolumn %}

</div>

## Variations

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Without a CTA (call to action)

Clicking on the “X” dismisses the toast notification. There are no other actions that can be taken on this type of toast notification.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Toast notifications without CTA (call to action)"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/notifications/toasts/toast-wo-cta.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### With a CTA

There should only be one CTA per toast.

In the Informational toast notification example here, the height of the toast increases to 96px to maintain the 8px spacing between the text and the CTA, and the 12px spacing between the CTA and the bottom of the toast. (The width always stays consistent at 350p

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Toast notifications with CTA (call to action)"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/notifications/toasts/toast-w-cta.svg)
{% endfigure %}
{% endcolumn %}

</div>

## Behaviors
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Placement, animations, and stacking

Toasts appear in the top right corner, 24px underneath the navigation bar. If more than one toast notifications are triggered at one time, they can stack (24px apart from each other), with newer toasts coming in at the top.

The toast fades into place over 400ms, sits in place for 8 seconds, and fades out over 400ms. If the user happens to hover over the toast while it is fading out, it immediately fades back to full transparency. Likewise, if the user is hovering over the toast at any point, it persists. When the mouse is removed from the expired toast, it fades after 3 seconds. 

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Placement, animation, and stacking of toast notifications in context"] [class:"image bg-light border"] %}
![]({{site.baseurl}}/assets/images/components/notifications/toasts/toast-behaviors.png)
{% endfigure %}
{% endcolumn %}

</div>

