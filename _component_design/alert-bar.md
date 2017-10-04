---
title: Alert Bar
parent: Notifications
layout: component
category: Components
usage: >
  A notification bar extends fully across the top of an content container within a Helix interface in order to provide the user with feedback relating to the status of the item. It can be scoped across the entirity of the content area (page level scoping) or scoped to extend across a singular section of the content area (element level scoping).
preview-image: components/preview-help.svg
status: deprecated, in-progress
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

# Notification bars

A notification bar extends fully across the top of an item within a
Helix interface in order to provide the user with feedback relating
to the status of the item. It can be scoped across the entirety of
the content area (page level scoping) or scoped to extend across a
singular section of the content area (element level scoping).

{% figure [caption:"Alert bar hero"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/alerts/alert-bar-hero.svg){:width="80%"}
{% endfigure %}

## When to use alerts

Notification bars are used to provide status information about a page or
element to a user.

* Notification bars are best used for information that will remain static,
  barring user intervention. For example, an informative message surrounding a new
  feature being made available to a user. For information that is more
  ephemeral and fleeting, we recommend using another notification
  type.

## Best practices for alerts

We recommend following these best practices:

* Ensure a notification bar is placed across the entirety of the
  referenced element.
* Ensure notification bars have implicit priority based on the alert type from most
  to least severity level:
  * Error > Warning > Success > Informational
* Ensure notification bars are used sparingly and limited to one per page.
  * In the event a higher priority alert bar needs to be shown on a page that
    already contains a  notification bar. The higher level alert is placed
    *above* the lower priority bar.

# Specifications

## Default layout

Alert bars rest at the top of the content section of a page layout in most
situations, extending across the entire section.

* Matches the margin of the content area to which it relates.

{% figure [caption:"Alert bar default."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/alerts/alert-bar-default.svg){:width="80%"}
{% endfigure %}

## Alert bar composition

The alert bar pattern is comprised of six parts. Three required, three
optional:

* Alert bar containing element (required) — Holds all other elements and
  displays the status color.
* Status icon (required) — Acts as supporting information to the status color.
* Alert description (required) — Describes to the user why the alert bar exists.
* Alert type (optional) — An optional alert title descriptor.
* Alert action link (optional) — Provides a user with the next step of a process.
* Close action (optional) — Closes the alert.

{% figure [caption:"Alert bar composition"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/alerts/alert-bar-composition.svg){:width="80%"}
{% endfigure %}

## Alert bar specifications

Your component has initialized, but it is empty, no data or items. Now may be a
good time to get the user to perform an action, or to reward them.
Ensure you include redlines for the specific changes in this state.

{% figure [caption:"Alert bar specifications."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/alerts/alert-bar-specs.svg){:width="80%"}
{% endfigure %}

## Status types

The alert bar pattern seeks to provide a user with at a glance status of a
given content section. The basic pattern can display four types of status:

{% figure [caption:"Alert bar status types."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/alerts/alert-bar-status-types.svg){:width="80%"}
{% endfigure %}

## Variations

Each status corrolates to a specific color in the Helix color palette.

{% figure [caption:"Alert bar variations"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/alerts/alert-bar-variations.svg){:width="80%"}
{% endfigure %}

## Multi-line alerts

Alert messages should be as concise and clear as possible. We recommend keeping to
a limit of 140-160 characters. Following this rule will keep an alert message as a
single-line comment (at Desktop and Wall breakpoints). However, in instances where a
wrap is required, alert bars will following the wrapping behavior displayed.

{% figure [caption:"Multiline alert wrapping behavior"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/alerts/alert-bar-multiline-alerts.svg){:width="80%"}
{% endfigure %}
