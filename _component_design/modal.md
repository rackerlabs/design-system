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

{% figure [caption:"Meet the Modal"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-hero-image.svg)
{% endfigure %}

{% endcolumn %}
</div>

## Specifications

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing
 * Minimum width is 400px.
 * Minimum height is 200px.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Modal spacing and layout"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-spacing.svg)
{% endfigure %}

{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Style
The modal should appear vertically and horizontally centered in the browser window.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Modal Style"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-specifications.svg)
{% endfigure %}

{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Loading
A simple loading circle should be used to load a popover. The loading circle should be horizontally and vertically centered.

Refer to the [Loading pattern]({{site.url}}/components/loading.html) for more detailed specifications.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Loading indicator for the modal"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-loading.svg)
{% endfigure %}

{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Use Case: Confirmation
Confirmation modals interrupt the user before they complete a given workflow and should only require a single decision of the user.

The modal is triggered by the user submiting information or initiating a process that will have significant or destructive impact.

**Confirmation scenarios:**

 * Deleting or overwriting data
 * Loss of unsaved data
 * Changes that will impact billing 

**All confirmation modals include the following:**

 * A heading that identies the destructive process or the action required to proceed
 * Messaging that clearly describes the impact of proceeding with the workflow
 * Confirm and cancel buttons so the user can proceed or cancel the action

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Confirmation modal"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-use-case-confirmations.svg)
{% endfigure %}

{% endcolumn %}
</div>