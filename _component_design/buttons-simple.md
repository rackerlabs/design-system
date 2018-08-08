---
title: Buttons (Simple)
parent: Inputs and Controls
layout: component
category: Components
usage: >
  A button enables a user to perform an action or initiate a process on a Control Panel page. A button directs the user's attention to important actions. The weight of a button (primary, secondary, or tertiary) highlights the relative importance of the action.
preview-image: preview-images/buttons.svg
status: stable
resource: true
last-modified: 2018-08-08
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a button when you want the user to launch a process or initiate an action.

Do not use buttons for navigation. When the user needs to navigate from one page to another, use a [text link]({{site.baseURL}}/style/typography.html#link).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a button:

- Use title case when you label a button. Capitalize the first letter of each word in a button label.
- Use a **verb noun** combination when you label a button. Do not include articles. For example, use **Create Server**. Do not use **Create a Server**.
- Write button labels in as few words as possible while still communicating the action that the button triggers.
- Consider the context when you size a button. For most desktop use cases, use a **standard button** size. To accommodate the ideal touch target size in mobile devices, use a **large button**. Use a **compact button** when you have severe space constraints, such as a button in a table or in a dashboard widget.
- The primary button should always represent a next step, such as **Create Server**, **Add Selected**, **Confirm Deletion**, **Submit**, or **Next**.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Simple button types

Simple buttons types include *primary*, *secondary*, and *tertiary* buttons.

{% figure [caption:"Simple button types"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-hero.png" width="569"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a simple button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Button labels

Use consistent labels across an action for a UI. Refer to this table when you write button labels.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button action labels"] [class:"image bg-light border"] %}
| Action label | Typical usage  |
| --- | --- |
| Create | Creates a new object. |
| Delete | Deletes an existing object. The label can include the object being deleted, such as **Delete Image**. |
| Download | Transfers a file to a user's local system. |
| Edit | Allows the user to modify data or values. Edit does not imply that the object is automatically updated. In most cases, you still must update in order for the change to occur. |
| Filter | Changes view to include only objects that match the filter criteria. |
| Import | Includes objects from an external source. |
| Manage | Modifies existing object settings or options. |
| Save | Saves data entered when the user creates an object. |
| Update | Automatically changes the data of an existing object. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A simple button contains the following elements:

- **Container (required)**: The container holds the call-to-action text.
- **Call-to-action (required)**: The call-to-action text describes the act that is initiated when the user clicks the button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Simple button composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-composition.png" width="280"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a simple button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Simple button style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-style.png" width="247"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct a simple button.

**Note**: Do not add internal padding to a tertiary button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Simple button spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-spacing.png" width="207"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Primary button

A primary button indicates the primary action a user can take and is designed to command the attention of users more than any other content on a page.

Do not use multiple primary buttons in the same view. Multiple primary buttons can cause visual confusion and increase cognitive load while decreasing the efficacy of the button to direct user attention to a single action.

For example, do not use primary buttons in a dashboard widget because it attracts too much attention and the user cannot settle and focus on a single widget.

A primary button can exist in one of the following states: default, hover, pressed, or disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Primary button"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-variations-primary.png" width="411"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Secondary button

You can use a secondary button alone or with a primary button, a tertiary button, or both. Use a secondary button when there are multiple buttons on a page.

A secondary button can exist in one of the following states: default, hover, pressed, or disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Secondary button"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-variations-secondary.png" width="414"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Tertiary button

You can use a tertiary button alone or with other button types.

- Use a tertiary button alone when you want to de-emphasize an action or when you have a list of actions.
- Use a tertiary button with a primary button or secondary button when there are two options and you want to de-emphasize one of them. For example, in a confirmation modal with two options, use **Submit** (primary) and **Cancel** (tertiary).

A tertiary button has a transparent background and can exist in one of the following states: default, hover, pressed, or disabled.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tertiary button"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-variations-tertiary.png" width="350"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

This section describes the simple button loading state and focus state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

When a button loads, a spinner icon appears 8px to the right of the loading text. Size the spinner icon so that it is the same size as the button label text. For example, if the button label text size is 16px, then the spinner icon is 16px tall and 16px wide.

For more information about the loading spinner, see [loading indicator]({{site.baseurl}}/components/loading-indicators.html).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Simple button loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-states-loading.png" width="296"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focus

When in focus, a button takes on the focus properties as outlined in [focus states]({{site.baseurl}}/style/focus-states.html).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Simple button focus state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-states-focus.png" width="168"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Button sets

A button set enables the user to select one object from a group of objects.

Consider the following best practices when you construct a button set:

- Button sets are most often used to group **Submit**, **Back** or **Next**, and **Cancel** buttons in popovers, modals, and create and edit forms.
- Align buttons in a button set in order of primary, secondary, and tertiary buttons.
- Do not add more than one primary button to a button set.
- Do not use split buttons in a button set. Split buttons can complicate what should be a simple decision for the user.
- The cancel action must always be an `hxBtn.hxLink`.
- When the user submits a form, disable all buttons and change the primary button to loading state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button sets"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/simple-buttons/buttons-simple-variations-buttonsets.png" width="317"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
