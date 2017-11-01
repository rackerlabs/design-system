---
title: Modal
parent: Content Areas
layout: component
category: Components
usage: Modals to command the user’s attention by obstructing the view of all items not related to the action. Confirmation modals are the most common form and are used when an action could have a destructive result, such as deleting a server or resetting an API key.
resource: true
status: unknown
preview-image: preview-images/modal.svg
last-modified: 2017-11-01
---

{% include toc.html %}

## Introduction

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Best practices
 * Use modals sparingly, only in situations where the user must confirm before continuing, or when the cost of an error could be very high.
 * It’s best to trigger a modal from a button, link or other clickable item on the page.
 * Avoid opening modals unexpectedly.
 * Allow a user to close/cancel a modal by clicking outside of it.
 * The confirmation button must always reflect the action being confirmed, and adhere to the “Verb Noun” labeling convention.  For example, if the modal title is “Permanently Delete this Server?”, then the confirmation button should be labeled as “Delete Server”.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Default text input style"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/text-inputs/text-inputs-hero-image.svg)
{% endfigure %}

{% endcolumn %}
</div>