---
title: Alert Bar
parent: Notifications
layout: component
category: Components
usage: |
  These tooltips provide users with additional information while completing
  tasks and alert them to new features.
preview-image: components/preview-help.svg
status: deprecated, in-progress
resource: true
---

{% include toc.html %}

# Usage

Provides info for action in context to the PAGE/REGION. Is communicated in
proximity to the page, panel, or other main containing element of information.
User understands this is in relation to the context they’re currently working
on holistically.

Ideally alert bars are used to communicate things like “unread messages”, “page
errors”, or confirmations for an action that happened off canvas or in a
previous screen like a modal or form.

Alert bars can also provide some basic quick instruction for a page to better
assist the user with understanding the task or feature they can/need to
perform.

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
The alert bar consists of 3 major parts ALWAYS:

- Bar: enclosing shape to frame and present the alert
- Icon: which provides context to the classification of the alert type
- Message: provides details and/or instructions to give the user context

The alert bar has other parts which are OPTIONAL based on the intended
use-case, these consist of:

-   Emphasized Text: calls out the specific object/person/thing that relates to
    the alert. This is the same size/color as the message but is bold.

-   Manual Dismiss: allows user to manually dismiss/close the alert.

-   Relational Action: provides user with a tailored action they can take in
    response to the alert.

{% endcolumn %}
{% column right:"hxCol-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/alert-bar-anatomy.svg)
{% endfigure %}
{% endcolumn %}
</div>

# Implementation Levels

## Inline

Provides info for action in context to the OBJECT they are ACTIVELY doing. User
understands this is in relation to the context they're actively doing and
provides the most specificity.

## Alert Bar

Provides info for action in context to the PAGE/REGION. User understands this
is in relation to the context they're currently working on holistically.

## Toast

Provides info for action outside of the users current context. User understands
this will take them out of current context.
