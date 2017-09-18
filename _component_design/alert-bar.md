---
title: Alert bar
parent: Notifications
layout: component
category: Components
usage: |
  These tooltips provide users with additional information when completing
  tasks, and alerts them to new features.
preview-image: components/preview-help.svg
status: deprecated, in-progress
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

# Usage

The alert bar provides action information in context to the specific page or region.
The bar is communicated in proximity to the page, panel, or other main containing element
of information. The alert bar is designed so that the user understands the alert
is contextual.

Ideally, alert bars are used to communicate. For example, “unread messages”, “page
errors”, or confirmation of an action that happened off canvas or in a
previous screen.

On the specific page, alert bars also provide the user with quick instruction to
better assist the understanding of the task or feature.

<div class="hxRow">
{% column left:"hxCol" %}
{% figure [caption:"Alert bar at a page level"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/alert-bar-page.svg)
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Alert bar at a region level"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/alert-bar-region.svg)
{% endfigure %}
{% endcolumn %}
</div>

# Anatomy

<div class="hxRow">
{% column left:"hxCol-4" %}
The alert bar consists of 3 major parts:

- Bar: The enclosing shape to frame and present the alert.
- Icon: Provides context to the classification of the alert type.
- Message: Provides contextual details or instructions.

The alert bar has other parts which are optional based on the intended
use-case, these consist of:

-   Emphasized Text: Calls out the specific object or person that relates to
    the alert. This is the same size and color as the message and is in bold.

-   Manual Dismiss: Allows user to manually dismiss and close the alert.

-   Relational Action: Provides user with a tailored action they can take in
    response to the alert.

{% endcolumn %}
{% column right:"hxCol-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/alert-bar-anatomy.svg)
{% endfigure %}
{% endcolumn %}
</div>

# Implementation levels

## In-line

Provides information for action in context to the object. This is designed so
the user understands this is specifically contextual.

## Alert bar

Provides information for the action in context to the page and region. This is desinged
so that the user understands this is holistically contextual.

## Toast

Provides information for actions outside of the user's current context. This is designed
so that the user understands this will take them out of current context.
