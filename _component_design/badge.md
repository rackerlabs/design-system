---
title: Badge
parent: Notifications
layout: component
category: Components
usage: >
  A badge is a small status descriptor that notifies a user that there is new activity that the user has yet to acknowledge. A badge draws the attention of the user to explore the details of the activity.
preview-image: preview-images/badges.svg
resource: true
status: stable
last-modified: 2019-04-04
helix-ui-css: true
helix-ui-javascript: na
pageLink: components/badge/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a badge when you want to signal to the user that a new notification, alert, message, chat, comment, or other type of change has taken place. A badge can appear in a navigation menu, tab, or the body of a control panel page.

Use badges sparingly as overuse can lead to *notification fatigue* where the user fails to react to the badge.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best Practices

Consider the following best practices when you construct badges:

- When the user clicks the badge, the user moves to the section to which the badge is applied.
- Remove the badge after the user clicks it.
- Reserve `red 900` for badges and errors. Do not use `red 900` with any other user interface (UI) component.
- A badge can be empty or can contain a number.
- A badge can contain a maximum of three characters. If there are more than 99 notifications (for example, 101 unread email messages), add a plus sign (+) after `99` to indicate there are more than 99 unread messages.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct badges.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A badge contains the following elements:

- **Number (required)**: The number represents how many new items are available for the user to acknowledge.
- **Icon (optional)**: Use an icon when you want to indicate visually the type of activity the badge represents. For example, use a bell icon to represent alerts.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-composition.png" width="203"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

In most cases, use a standard size badge. Use a small badge in a highly compact context.

Use these specifications when you construct badges.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-style.png" width="277"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct a badge.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-spacing.png" width="238"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Variations

Considering the following guidelines when using icons and placing a badge on a tab:

**With an icon**: Overlap the badge on the icon by 2px and ensure that the icon is still seen clearly. A notification badge should not contain a **0**. If there are no notifications, do not display a badge.

- Limit the number of characters in a badge to three, including two numbers and a plus (+) sign. Use a 2px border on all sides between the number and the edge of the circle.

**On a tab**: Add a badge to a tab to bring attention to new items in unselected tabs. Do not use a badge on the selected tab because new items in a tab have their own styling, such as bold text, to indicate **Unread** or **New** status.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge variations"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-variations.png" width="443"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
