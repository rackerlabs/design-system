---
title: Vertical Stepper
parent: Content Areas
layout: component
category: Components
usage: >
  A vertical stepper progressively discloses form inputs to a user through a set of numbered steps.
preview-image: preview-images/vertical-stepper.svg
resource: true
status: Stable
last-modified: 2018-06-14
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a vertical stepper to help a user complete complex workflows that require multiple inputs. Divide the workflow into thematic steps and then use the stepper pattern to progressively reveal workflow steps to the user.

A vertical stepper fulfills the same need as a horizontal stepper. Unlike a horizontal stepper, a vertical stepper can work with all screen sizes.


{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a vertical stepper.

- Ensure a stepper has a minimum of three steps and a maximum of five steps.
- Name each step thematically based on the inputs contained within a step. For example, a step  with inputs such as **Username**, **First name**, and **Address** can be labeled **User Details**. Labeling steps thematically primes users for the type of information required to complete the step.
- Present a confirmation modal when the user enters data that invalidates data entered in another step.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Refer to the following specifications when you construct a vertical stepper.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A vertical stepper is comprised of the following elements:

- **Workflow title (required)**: Use a Heading 1 to label the vertical stepper. Label the vertical stepper so that it reflects the workflow.
- **Step counter (required)**: The step counter displays the sequential number of a step and the status of the step.
- **Title (required)**: The title is the name of the step.
- **Selection (required)**: After the user enters data and moves to the next step, the selection area displays the entered data. The user can refer to the selection area to understand the context in which they are making decisions in the following steps.
- **Content area (required)**: The user enters data or completes an action in the content area. The content area can be comprised of any [inputs and controls]({{site.url}}/components/inputs-and-controls.html).
- **Revealer (required)**: The user can click the revealer to expand and contract a step.
- **Button set (required)**: The user clicks buttons to navigates to the next step, back to a previous step, or to complete the vertical stepper.
- **Divider line (required)**: The upper and lower divider line separates steps.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical stepper composition (NOT TO SCALE)"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-composition.png" width="577"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Button logic

The buttons displayed in the button set vary based on the step the user is completing.

**First step**: The first step displays a primary button that the user clicks to move to the next step and a tertiary button to cancel the form.

**Intermediate step(s)**: Each intermediate step displays a primary and secondary button to move between steps and a tertiary button to cancel the form.

**Final step**: The final step is similar to the intermediate step, except that the primary button is used to complete the form. For example, **Submit** and **Confirm** are common final step button names.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button displays based on currently displayed step."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-composition-buttonlogic.png" width="416"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Refer to these specifications when you construct a vertical stepper.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Spacing specifications for the vertical stepper pattern"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-style-generic.png" width="596"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Step counters

The step counters display the sequential number of a step and the status of the step.

The step counters exist in the following states:

- Default
- Pressed
- Hover
- Incomplete

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Stepper counter states and specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-style-counter.png" width="546"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Clickable area

The clickable area includes the row header bound by the upper and lower divider.

When the user clicks in the clickable area of a collapsed step, the step expands. When the user clicks in the clickable area of an expanded step, the step collapses.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Stepper expand / collapse clickable areas"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-style-clickablearea.png" width="566"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use these spacing guidelines when you construct a vertical stepper.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Vertical stepper spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-spacing.png" width="490"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A vertical stepper can exist in a loading state and an error state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

The vertical stepper uses the [spinner loading indicator]({{base.url}}/components/loading-indicators.html).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Stepper loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-state-loading.png" width="510"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

Error states occur inline within the scope of the input and controls component used within the content area. Error messages take on the error message styling defined for that particular component. See [Inputs and controls]({{site.baseurl}}/components/inputs-and-controls.html) for more information.

A completed step can also encounter an error when a user invalidates previously-entered data. In these cases use a confirmation modal to warn a user that previously-entered data will be deleted.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error state applied to a sequential step within a vertical stepper"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-states-error.png" width="489"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>
