---
title: Modals
parent: Content Areas
layout: component
category: Components
usage: >
  Modals are a content area that pops up in the middle of the users display with the page content behind it obscured. Modals are commonly used to command user attention or to force a user decision. Modals are best used when important or potentially destructive operations are occurring.
preview-image: preview-images/modal.svg
resource: true
status: unknown
last-modified: 2017-08-17
---

{% include toc.html %}

Forced action modals are used when an action could have a potentially harmful
result for a customer. They are used to command the users attention by
obstructing view of all items not related to the action

-   Centered vertically and horizontally

-   Should be used very sparingly for non-routine tasks. Ex: Deleting an
    Account, Changing a Credit Card, or Updating Billing Information.

-   Available as a whiteout or blackout pattern.

<div class="hxRow">
{% column left:"hxCol" %}
{% figure [caption:"Forced Action Modal (whiteout)"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/Editing/editing-forcedaction-white.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column left:"hxCol" %}
{% figure [caption:"Forced Action Modal (blackout)"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/Editing/editing-forcedaction-black.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
