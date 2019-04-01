---
title: Toast
parent: Notifications
layout: component
category: Components
usage: >
   A toast is a notification component that contains a short message about the status of a user action. Toasts appears on the screen for a few seconds and then disappears on its own.
preview-image: preview-images/toast.svg
status: stable
resource: true
last-modified: 2019-04-01
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/toasts/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use toast when you want to notify the user that a system operation has occurred. For example, use toast when you want to:

- Notify the user that an operation was successful.
- Notify the user that an operation resulted in an error.
- Provide information to the user about an operation.

Do not use toast to notify the user of promotional or marketing material, such as the announcement of a new feature.

Do not use toast for actions that are in context to the page or region. For those cases, use an [alert bar]({{site.baseurl}}/components/alert-bar.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-8-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best Practices

Consider the following best practices when you construct toast:

- A toast can include an optional call-to-action (CTA) that navigates the user out of the current page.
- Only use one CTA for a toast. Do not include a **Dismiss** or **Close** CTA.
- If there is an error and the user can take an action to correct, include a CTA.
- Use complete sentences when you write the notification message.
- If the notification message includes only one sentence, do not use a period. **This runs counter to our text conventions**. If there are two or more sentences, use periods.
- The notification message should not exceed more than four lines, excluding the CTA.
- The user can click close **X** to close the toast.
- The toast remains open when the user hovers over it and closes when the cursor moves off of it. Refer to [Behaviors]({{page.url}}#behaviors) for more information about toast timing.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Refer to the following specifications when you construct toast.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Toast is comprised of the following elements:

- **Container (required)**: xxxx
- **Notification message (required)**: xxxx
- **Close X (required)**: xxxx
- **CTA (optional)**: xxxx

**OLD CONTENT**
There are three types of toast notifications: confirmation, error, and information.

Clicking on the “X” closes the toast, but it will go away after approximately 10 seconds if no action is taken.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default toast notifications specifications"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-specifications.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct toast.

To the Style section, add a 2nd visual that styles out the color and icons for the Success, Error, and Informational toasts.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default toast notifications specifications"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-specifications.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Intro to this visual.

To this Style section, add a 2nd visual that styles out the color and icons for the Success, Error, and Informational toasts.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default toast notifications specifications"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-wo-cta.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>



<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing specifications when you construct toast.

**OLD TEXT**
While the height of toasts is dependent on the amount of text, the minimum height is 56px without a CTA. If a CTA or more lines are needed the height can increase to accommodate.

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

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behaviors

Ensure that toast supports the following behaviors:

 - **Placement and stacking**: Place toasts in the top-right corner of the page, 24px beneath the navigation bar. If more than one toast notifications are triggered simultaneously, vertically stack them 24px apart, with newer toasts placed on top.
 - **Animation and timing**: The toast fades into place over `400 ms`, remains in place for 8 seconds, and fades out over `400 ms`. If the user hovers over the toast while it is fading out, it immediately gains full opacity. Toasts persist indefinitely on cursor hover. When the cursor moves off the toast, the toast persists for three more seconds and then fades over the normal `400 ms`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Placement, animation, and stacking of toast notifications in context"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-behaviors.png"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
