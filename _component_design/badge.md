---
title: Badges
parent: Notifications
layout: component
category: Components
usage: >
  Notification badges are used to let the user know that there is new activity that hasn’t yet been acknowledged. It is used to encourage them to click into that section to see the details of the activity. 
preview-image: preview-images/badges.svg
resource: true
status: stable
last-modified: 2017-11-01
---

{% include toc.html %}

## Introduction

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### When to use

Notification badges can be used in navigation menus, in tabs, or in the body of a page. They are used to signal a new notification, alert, message, chat, comment, or other type of change to an area of the site. Depending on the use case, there may or may not be a number of notifications written in the badge itself. Studies of social apps report that notification badges can trigger dopamine releases due to social rewards, but overuse can make the user numb to them, so use wisely.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"The notification badge pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/badges/badges-hero.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
### Best Practices
- Clicking on the badge takes the user into the section to which the badge is applied and the badge is removed.
- Never deviate from the color (Red 900) of notifications used on the spec sheet, and try to avoid this color outside of badges and errors. This will help reserve the attention-grabbing red color for the highest priority items.
- Keep the badge empty or use a number. If the number is higher than 2 digits (for example, 99), use a plus (+) sign to indicate more than that number shown. Words nor icons are never used in notification badges.
- It might make sense to set a max number that is lower than 99 to avoid overwhelming the user. For example, let’s say a user has 28 unread messages. The thought of checking that many messages might seem too time consuming, so the user may ignore it. However, if the badge says “9+”, chances are good that they’ll click in and take a look at the messages, thus clearing the badge and resetting the unacknowledged messages back to 0.
{% endcolumn %}

</div>

## Implementations

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### With an icon
Notification badges without a number, with a single digit number, a double digit number, and over the limit. The badge should overlap an icon by around 2px, but be sure you can still see what the icon represents. Notification badges should never have a “0” inside. In the event there are no notifications, a badge is not displayed. There is a character limit of 3 inside the badge; 2 numbers max and a plus (+) sign.

Number should be centered within circle. Allow a 2px border around the number to the edge of the circle.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Notification badges with icon"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/badges/badges-icon.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### In tabs
Notification badges may be used in tabs to bring attention to new items in unselected tabs. There should never be a notification badge used on the selected tab, because any new items in a table should have their own styling to mark themselves unread/ new (such as bolded text).

The [tabs component]({{site.baseulr}}/components/tabset.html) states that there should be 24px in between tabs. In the case of a tab with a notification badge, those 24px should start after the badge (as demonstrated in the “With Spacing Guidelines” image to the right).
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Notification badges in tabs"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/badges/badges-tabs.svg)
{% endfigure %}
{% endcolumn %}