---
title: Badges
parent: Notifications
layout: component
category: Components
usage: >
  Use notification badges to alert the user that there is new activity they have not acknowledged yet. Use them to encourage the user to go to that section to see the details of the activity.
preview-image: preview-images/badges.svg
resource: true
status: stable
last-modified: 2018-12-04
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow" markdown="1">
{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

Use notification badges in navigation menus, tabs, or the page body to signal a new notification, alert, message, chat, comment, or other type of change to an area of the site. Depending on the use case, there may or may not be a number of notifications written within the badge.

Studies of social apps report that notification badges can trigger dopamine releases due to social rewards, but overuse can make the user numb to them. So use badges wisely.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}
{% figure [caption:"The notification badge pattern"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/notifications/badges/badges-hero.png" width="1440"/>
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Best Practices
- Clicking on the badge takes the user into the section to which the badge is applied. Once the badge is clicked, remove the badge.
- Never deviate from the color (`red 900`) of notifications used on the spec sheet, and try to avoid this color outside of badges and errors. Applying colors used on the spec sheet will help reserve the attention-grabbing red color for the highest priority items.
- Keep the badge empty or use a number. If the number is higher than two digits (for example, 99), use a plus (+) sign to indicate more than that number shown. Neither words nor icons are used.
- Set a max number lower than 99 to avoid overwhelming the user. For example, rather than saying the user has 28 unread messages, set the badge to say 9+ instead to increase chances that the user will click into the message list.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Implementations

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
