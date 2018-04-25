---
title: Vertical Stepper
parent: Content Areas
layout: component
category: Components
usage: >
  Vertical steppers progressively disclose form inputs through a set of sequentially numbered steps. The design of the vertical stepper pattern lend it for use during complex or difficult workflows.
preview-image: preview-images/vertical-stepper.svg
resource: true
status: in-progress
last-modified: 2018-01-30
---

{% include toc.html %}

<section class="static-section" markdown="1">

## Introduction

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### When to use

- The stepper pattern is used for complex workflows that require multiple inputs from a user to complete. The complex workflow is segmented or chunked into thematic steps and then progressively revealed to the user using the stepper pattern. Vertical steppers fulfill the same need as a horizontal stepper; however, their vertical orientation yields itself to work within all screen sizes.

### Best practices

- Ensure a stepper has at minimum 3 steps and at maximum 5 steps.
- Name each step thematically based on the inputs contained within a step. For example, a step dealing with inputs **Username**, **First name**, **Address**, etc. could be labeled **Account Info** or **User Details**. This ensures users are primed for the type of information that will be presented in a step when first skimming a stepper form.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The vertical stepper component"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-hero.png" width="1440"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Overview

The vertical stepper component is comprised of the following pieces:

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
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-composition.png" width="900"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

## Pattern specifications

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### Spacing

{% figure [caption:"Spacing specifications for the vertical stepper pattern"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-spacing.png" width="903"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### Specifications

{% figure [caption:"Spacing specifications for the vertical stepper pattern"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-specs.png" width="903"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Stepper counter

The stepper counter displays the sequential number of a step as well as the status of the step.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Stepper counter states and specifications"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-counter.png" width="580"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Clickable area

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Stepper expand / collapse clickable areas"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-clickable.png" width="903"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### Loading state

{% figure [caption:"Stepper loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-loading.png" width="903"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

## Variances

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Submission controls

As the stepper pattern isolates each sequential step within a multistep process, a variance in the buttons displayed within each step will become apparent to the user. Dependent on which sequential step is displayed, the following buttons may be displayed.

**First step:** Displays a primary button to move to the next step and tertiary button to cancel the form.

**Intermediate step(s):** Displays primary and secondary buttons to move between steps and a tertiary button to cancel the form.

**Final step:** Mimics the intermediate step, however the primary button is now used to complete the form and labeled according; For example, ‘Submit’ or ‘Confirm’.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button displays based on currently displayed step."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-buttons.png" width="580"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error states

Error states for the stepper will generally occur inline within the scope of the input and controls component used within the content area (see below).

However it may be possible that a completed step may encounter an error state in certain edge cases. For example, when a user paths back and forth between sections, one section may become invalidated by a modified value in a pervious section. In these cases the error icon and associated message will be applied to the selected value in that row (see right).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error state applied to a sequential step within a vertical stepper"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-error-1.png" width="580"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>


<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Inline errors

For errors within an input and controls component error messages will take on the error message styling defined for that particular component. See [Inputs and controls]({{site.baseurl}}/components/inputs-and-controls.html) for more information

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error state applied to an input field within the content area"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-error-2.png" width="903"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
