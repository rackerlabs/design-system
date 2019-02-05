---
title: Badges
parent: Notifications
layout: component
category: Components
usage: >
  A badge is a small status descriptor that notifies a user that there is new activity that the user has yet to acknowledge. A badge draws the attention of the user to explore the details of the activity.
preview-image: preview-images/badges.svg
resource: true
status: stable
last-modified: 2019-02-05
helix-ui-css: true
helix-ui-javascript: na
pagelink: https://rackerlabs.github.io/helix-ui/components/badges/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a badge when you want to signal to the user that a new notification, alert, message, chat, comment, or other type of change has taken place. A badge can appear in a navigation menu, tab, or the body of a control panel page.

Use tabs sparingly as overuse can lead to *notification fatigue* where the user fails to react to the badge.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best Practices

Consider the following best practices when you construct badges:

- When the user clicks the badge, the user is taken to the section to which the badge is applied.
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

- **Container?? (required)**: xxxxx
- **Number (optional)**: xxxxx
- **Icon (optional)**: xxxxx

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-icon.png" width="533"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Should this visual include **With an icon** and **In tabs** sections?.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-icon.png" width="533"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Should this visual include **With an icon** and **In tabs** sections?.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Badge spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-icon.png" width="533"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### With an icon
The badge should overlap an icon by around 2px, but be sure you can still see what the icon represents. Notification badges should never have a “0” inside. In the event there are no notifications, a badge is not displayed. There is a character limit of 3 inside the badge: two numbers at most and a plus (+) sign.

Use a 2px border on all sides between the number and the edge of the circle.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Notification badges with icon"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-icon.png" width="533"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### In tabs

Notification badges may be used in tabs to bring attention to new items in unselected tabs. Never use a notification badge on the selected tab because any new items in a tab section should have their own styling, such as bolded text, to indicate 'unread' or 'new' statuses.

The [tabs component]({{site.baseurl}}/components/tabset.html) states that there should be 24px in between tabs. In the case of a tab with a notification badge, start measuring the 24px after the badge as demonstrated in the "With Spacing Guidelines" image to the right.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Notification badges in tabs"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-tabs.png" width="463"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
