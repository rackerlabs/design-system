---
title: Modals
parent: Content Areas
layout: component
category: Components
usage: >
  A modal is an element that disables the main window of an application until the  user interacts with it. After a user interacts with a modal, the user returns to the main window and can continue working.
resource: true
status: stable
preview-image: preview-images/modal.svg
last-modified: 2018-05-03
helix-ui-css: false
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use
Use modals when you want to **focus the attention of the user** by obstructing the view of all items not related to the action. Modals are useful when:

- The user **action is irreversible**, such as deleting a server or resetting an API key
- You want the user to **enter required information** before continuing to work in an application

Modals come in many forms, including alerts, login forms, and contact forms. A confirmation modal is a commonly used modal.

## Best practices

Consider the following best practices when you construct a modal:

- **Use modals sparingly** and only when the user must confirm an action before continuing, or when the cost of an error is very high.
- Trigger a modal from a button, link, or other clickable item on the page.
- Avoid constructing modals to open unexpectedly.
- Allow a user to close or cancel a modal by clicking outside of it.
- The confirmation button **must always** reflect the action being confirmed, and follow the **Verb Noun** labeling convention. For example, if the modal title is **Permanently delete this server?**, label the confirmation button **Delete Server**.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications
Use the following specifications when you construct modals.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
A modal contains the following:

- Header
- Dot slide (optional)
- Icon (optional)
- Subheader (optional)
- Detail
- Action

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-composition.png" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use the following specifications when you construct a modal.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-specifications.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use the following spacing guidelines when you construct a modal.

- Center-align modals vertically and horizontally
- Minimum width: 400px
- Minimum height: 200px

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal spacing and layout"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-spacing.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Confirmation modals

A confirmation modal interrupts a user and requires a decision before the user can continue working. The modal is triggered when the user initiates a process or submits information that can have a significant or destructive impact.

**Confirmation scenarios include actions that result in:**

- Deleting or overwriting data
- Loss of unsaved data
- Changes that impact billing

**Confirmation modals include:**

- A heading that identifies the destructive process or the action required to proceed
- A message that clearly describes the impact of proceeding with the action
- **Confirm** and **Cancel** buttons so the user can proceed or cancel the action

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Confirmation modal"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-use-case-confirmations.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Acknowledgment modals

xxxxx.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Confirmation modal"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-use-case-confirmations.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Educational modals

Use the following specifications when you construct educational modals.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
xxxxx

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-composition.png" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style
xxxxx

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Confirmation modal"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-use-case-confirmations.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing
xxxxx

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Confirmation modal"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-use-case-confirmations.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Loading state

When depicting data loading in a popover, use a simple loading spinner. Center-align the loading spinner horizontally and vertically within the popover component.

Refer to the [Loading pattern]({{site.url}}/components/loading-indicators.html) for detailed specifications.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Loading indicator for the modal"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modal-loading.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
