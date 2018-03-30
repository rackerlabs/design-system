---
title: Modal
parent: Content Areas
layout: component
category: Components
usage: Use modals to command the user's attention by obstructing the view of all items not related to the action. Confirmation modals are the most common form and are used when an action could have a destructive result, such as deleting a server or resetting an API key.
resource: true
status: stable
preview-image: preview-images/modal.svg
last-modified: 2017-11-08
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Best practices

- Use modals sparingly and only in situations where the user must confirm before continuing, or when the cost of an error is very high.
- It's best to trigger a modal from a button, link, or other clickable item on the page.
- Avoid opening modals unexpectedly.
- Allow a user to close or cancel a modal by clicking outside of it.
- The confirmation button **must always** reflect the action being confirmed, and follow the **Verb Noun** labeling convention. For example, if the modal title is **Permanently delete this server?**, label the confirmation button as **Delete Server**.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Meet the modal"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-hero-image.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Specifications

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

- Minimum width is 400px.
- Minimum height is 200px.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal spacing and layout"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-spacing.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Center modals vertically and horizontally in the browser window.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal style"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-specifications.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

Use a simple loading spinner when loading data in a popover. Center the loading spinner horizontally and vertically within the popover component.

Refer to the [Loading pattern]({{site.url}}/components/loading-indicators.html) for detailed specifications.

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Loading indicator for the modal"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-loading.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-4 hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Use Case: Confirmation

Confirmation modals interrupt the user before they complete a given workflow and require a single decision from the user.

The modal is triggered by the user submitting information or initiating a process that will have significant or destructive impact.

**Confirmation scenarios include the following actions:**

- Action that triggers deletion or overwriting of data
- Loss of unsaved data
- Changes that will impact billing

**All confirmation modals include the following elements:**

- A heading that identifies the destructive process or the action required to proceed
- Messaging that clearly describes the impact of proceeding with the workflow
- Confirm and cancel buttons so the user can proceed or cancel the action

{% endcolumn %}

{% column right:"hxCol hxSpan-8 hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Confirmation modal"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/modal/modal-use-case-confirmations.svg)
{% endfigure %}

{% endcolumn %}

</div>

</section>
