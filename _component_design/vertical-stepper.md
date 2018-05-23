---
title: Vertical Stepper
parent: Content Areas
layout: component
category: Components
usage: >
  A vertical stepper progressively discloses form inputs to a user through a set of numbered steps.
preview-image: preview-images/vertical-stepper.svg
resource: true
status: in-progress
last-modified: 2018-05-09
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

- Ensure a stepper has a minimum of three of three steps and a maximum of five steps.
- Name each step thematically based on the inputs contained within a step. For example, a step  with inputs such as **Username**, **First name**, and **Address** can be labeled **User Details**. Labeling steps thematically primes users for the type of information required to complete the step.

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

- Steps
- Step content area (this can be comprised of any components from the inputs and controls section)
- Step counter
- Step dividers
- Step revealer
- Step selection
- Step title

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

As the stepper pattern isolates each sequential step within a multistep process, a variance in the buttons displayed within each step will become apparent to the user. Dependent on which sequential step is displayed, the following buttons may be displayed.

**First step:** Displays a primary button to move to the next step and tertiary button to cancel the form.

**Intermediate step(s):** Displays primary and secondary buttons to move between steps and a tertiary button to cancel the form.

**Final step:** Mimics the intermediate step, however the primary button is now used to complete the form and labeled according; For example, ‘Submit’ or ‘Confirm’.

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
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-style-clickablearea.png" width="566"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Stepper counter

The stepper counter displays the sequential number of a step and the status of the step.

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

Words here about the clickable area...

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

Text here on spacing...

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

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Behavior

Need to get with Drew about this text...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"xxx"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-spacing.png" width="490"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

Text here on states...

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

Here is some text on loading state...

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

Error states for the stepper will generally occur inline within the scope of the input and controls component used within the content area (see below). For errors within an input and controls component error messages will take on the error message styling defined for that particular component. See [Inputs and controls]({{site.baseurl}}/components/inputs-and-controls.html) for more information.

However it may be possible that a completed step may encounter an error state in certain edge cases. For example, when a user paths back and forth between sections, one section may become invalidated by a modified value in a pervious section. In these cases the error icon and associated message will be applied to the selected value in that row (see right).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error state applied to a sequential step within a vertical stepper"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vstepper-states-error.png" width="489"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>
