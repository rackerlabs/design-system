---
title: Modal
parent: Content Areas
layout: component
category: Components
usage: >
  A modal is an element that disables the main window of an application until a user interacts with it. After the user interacts with a modal, the user returns to the main window and can continue working.
resource: true
status: stable
preview-image: preview-images/modal.svg
last-modified: 2019-02-11
helix-ui-css: true
helix-ui-javascript: true
pageLink: components/modal/
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use modals when you want to **focus the attention of the user** by obstructing the view of all items not related to the action. Modals are useful in the following scenarios:

- The user **action is irreversible**, such as deleting a server or resetting an API key.
- You want the user to **enter required information** before continuing to work in an application.

Confirmation, acknowledgment, and educational modals are commonly-used modals.

Do not use a modal when you want the user to perform limited create, read, update, and delete (CRUD) operations. For limited CRUD operations, consider using a [popover]({{site.baseurl}}/components/popovers.html).

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a modal:

- **Use modals sparingly** and only when the user must confirm an action before continuing, or when the cost of an error is very high.
- Trigger a modal from a button, link, or other clickable item on the page.
- Avoid constructing modals to open unexpectedly.
- For an acknowledgment modal, allow the user to close or cancel a modal by clicking outside of it.
- The confirmation button **must always** reflect the action being confirmed and follow the **Verb Noun** labeling convention. For example, if the modal title is **Permanently delete this server?**, label the confirmation button **Delete Server**.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a modal.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition
A modal contains the following elements:

- **Container**: The container establishes the size of the modal and holds its contents.
- **Header**: The header includes the title and the close button.
- **Title**: Write the modal title to help the user understand the purpose of the modal and the actions the user can take.
- **Close button**: For some modals, the user can click a **Close** button to cancel the modal.
- **Body**: The body contains the primary content associated with the modal. Body text describes the result of the action associated with the modal.
- **Footer**: The footer contains the calls to action buttons.
- **Buttons**: Buttons belong to a button set that provide the user with one or more actions.
- **Overlay**: A modal fits within an overlay that disables the page beneath the overlay.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-composition.png" width="557px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a modal.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-style.png" width="585px"/>
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
- Use a minimum width of **400px**.
- Use a minimum height of **200px**.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal spacing and layout"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-spacing.png" width="633px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Confirmation modal

A confirmation modal interrupts a user and requires a decision before the user can continue working. The system triggers a confirmation modal when the user initiates a process or submits information that can have a significant, destructive, or irreversible impact.

A user cannot click out of a confirmation modal; the user must make a choice.

**Confirmation scenarios include actions that cause the following results:**

- Deleting or overwriting data
- Losing unsaved data
- Changing billing

**Confirmation modals include the following parts:**

- A heading that identifies the destructive process or the action required to proceed
- A message that clearly describes the impact of proceeding with the action
- **Confirm** and **Cancel** buttons so the user can proceed or cancel the action

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Confirmation modal"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-confirmation-modals.png" width="633px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Acknowledgment modal

Use an acknowledgment modal when a user must confirm that they understand the modal message before continuing. An End User License Agreement (EULA) is a common form of acknowledgment modal.

An acknowledgment modal is similar in construction to the confirmation modal except that it requires the user to provide an input, such as a selecting a checkbox, before the user can click the primary button. Construct the modal so that the primary button is enabled only after the user selects the input checkbox.

Construct an acknowledgment modal so the modal is removed when the user clicks outside of it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Acknowledgment modal"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-acknowledgement-modal.png" width="633px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Educational modal

Use an educational modal to introduce a new feature or guide users through a learning process. Educational modals require a more approachable, less data-dense layout, and include significantly increased spacing of elements.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Best practices

When you have multiple ideas to present, use a carousel to let the user step through the details, rather than including multiple bullet points in the modal. Keep ideas clear and focused. When you just have only one idea to present, include a button at the bottom that removes the modal.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

An education modal is comprised of the following parts:

- **Header (required)**: The header includes the highest-level message that you want to communicate to the user.
- **Carousel indicator (optional)**: If the modal includes multiple steps, include a carousel indicator.
- **Illustrative icon (optional)**: An illustrative icon enhances the messaging of the educational modal.
- **Subheader (optional) and description**: The subheader and description include details that provide tactical direction and explanation to the user.
- **Button set (required)**: If the modal requires action, include a button set at the bottom that describes the action that the user can take. If there is no user action, construct a tertiary **Dismiss** or **Got It** button.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Educational modal composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-educational-modal-composition.png" width="655px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

The educational modal uses existing Helix [typographic styles]({{site.url}}/style/typography.html) and features carousel indicators when you introduce multiple ideas.

When an illustration is helpful to the user, place it within the dimensions indicated. The illustration does not have to be 150x92px in size.

Do not include screenshots of the user interface (UI) because it is difficult to manage screenshot images over time as the UI evolves.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Educational modal style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-educational-modal-style.png" width="667px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

The educational modal uses increased white space to facilitate easier reading of non-data content.

The modal container features extra-large 48px spacing inset on all sides.

Provide 16px of space below a header, and if you include an illustration, provide 32px of space above and below the image.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Educational modal spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-educational-modal-spacing.png" width="638x"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Grid

Increased spacing in an educational modal results in a greater distance between the left and right edges of the modal and its content.

In this example, content is restricted to the four middle columns of a six-column layout. This specific layout will not work in all situations. Depending on the dimensions of your modal and content, you can choose different column settings.

In general, be generous with the space between the left and right edges of the modal and its content.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Educational modal grid"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-educational-modal-grid.png" width="638x"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Loading state

When depicting data loading in a popover, use a simple loading spinner. Center-align the loading spinner horizontally and vertically within the popover component.

Refer to [Loading pattern]({{site.url}}/components/loading-indicators.html) for detailed specifications.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Modal loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/modal/modals-loading.png" width="633px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
