---
title: Toast
parent: Notifications
layout: component
category: Components
usage: >
   A toast is a notification component that contains a short message about the status of a user action. A toast appears on the screen for 10 seconds and then disappears.
preview-image: preview-images/toast.svg
status: stable
resource: true
last-modified: 2019-04-23
helix-ui-css: true
helix-ui-javascript: true
pagelink: https://rackerlabs.github.io/helix-ui/components/toasts/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a toast when you want to notify the user that a system operation has occurred. For example, use a toast when you want to:

- Notify the user that an operation was successful.
- Notify the user that an operation resulted in an error.
- Provide information to the user about an operation.

Do not use a toast to notify the user of promotional or marketing material, such as the announcement of a new feature.

Do not use a toast for actions that are in context to the page or region. For those cases, use an [alert bar]({{site.baseurl}}/components/alert-bar.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-8-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct toast:

- A toast can include an optional call-to-action (CTA) that navigates the user out of the current page, or that triggers an action.
- Only use one CTA for a toast. Do not include a **Dismiss** or **Close** CTA.
- If there is an error and the user can take an action to correct, include a CTA.
- Use human-friendly, complete sentences when you write the notification message. For more information about writing notification message, see [Alert and Message Guidelines]({{site.baseurl}}/style/alert-messages.html).
- The notification message should not exceed more than four lines, excluding the CTA.
- The user can click close **X** to close the toast.
- A toast remains open when the user hovers over it and closes when the cursor moves off of it. Refer to [Behaviors]({{page.url}}#behaviors) for more information about toast timing.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Refer to the following specifications when you construct a toast.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A toast is comprised of the following elements:

- **Container (required)**: The container holds all elements of the toast notification.
- **Notification message (required)**: The notification message explains the result of the action taken by the user.
- **Accent border (required)**: The color of the accent border corresponds to the notification type.
- **Notification type indicator (required)**: The notification icon corresponds to the notification type.
- **Close X (required)**: The user can click Close X to close the notification. The notification automatically disappears after 10 seconds.
- **Footer (optional)**: The footer can contain a link or a button call-to-action (CTA).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toast composition"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-composition.png" width="556"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

The three types of toast notifications are Success/Confirmation, Informational, and Error.

Use these specifications when you construct a toast.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Toast style"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-style.png" width="587"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

While the height of a toast is dependent on the length of the notification message, without including a footer, 56px is the minimum height. If you include a footer, the height of the toast notification can increase.

Refer to these spacing specifications when you construct a toast.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Default toast notifications specifications"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-spacing.png" width="506"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behaviors

Ensure that a toast supports the following behaviors:

 - **Placement and stacking**: Place toasts in the top-right corner of the page, 32px beneath the eyebrow. If more than one toast notification is triggered simultaneously, vertically stack them 32px apart, with newer toasts placed on top. Refer to [Eyebrow]({{site.baseurl}}/components/eyebrow.html) for information about constructing an eyebrow.
 - **Animation and timing**: The toast fades in over `400ms`, remains for 10 seconds, and then fades out over `400ms`. If the user hovers over the toast while it is fading out, it immediately gains full opacity. A toast persists indefinitely on cursor hover. When the cursor moves off the toast, the toast persists for three more seconds, and then fades out over `400 ms`.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Placement, animation, and stacking of toast notifications in context"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-behaviors.png" width="498"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Variation

You can use the footer to include a [hyperlink]({{site.baseurl}}/style/text-conventions.html) or a [tertiary button]({{site.baseurl}}/components/buttons.html#tertiary-button-weight) CTA.

If you include a footer, use these spacing guidelines.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Placement, animation, and stacking of toast notifications in context"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/notifications/toasts/toast-variationwithfooter.png" width="511"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
