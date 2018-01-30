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

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- The stepper pattern is used for complex workflows that require multiple inputs from a user to complete. The complex workflow is segmented or chunked into thematic steps and then progressively revealed to the user via the stepper pattern. Vertical steppers fulfill the same need as a horizontal stepper, however the orientation yields itself to work within all screen sizes.

### Best practices

- Ensure a stepper has at minimum 3 steps and at maximum 5 steps.
- Name each step thematically based on the inputs contained within a step. For example, a step dealing with inputs Username, First name, Address, etc. could be labeled Account Info or User Details. This ensures users are primed for the type of information that will be presented in a step when first skimming a stepper form.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"The vertical stepper component"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-hero.png){: width="1440px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

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

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Vertical stepper composition (NOT TO SCALE)"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-composition.png){: width="900px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

## Pattern specifications

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Spacing

{% figure [caption:"Spacing specifications for the vertical stepper pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-spacing.png){: width="903px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Specifications

{% figure [caption:"Spacing specifications for the vertical stepper pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-specs.png){: width="903px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Stepper counter

The stepper counter displays the sequential number of a step as well as the status of the step. 


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Stepper counter states and specifications"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-counter.png){: width="580px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Clickable area

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Stepper expand / collapse clickable areas"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-clickable.png){: width="903px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Loading state

{% figure [caption:"Stepper loading state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-loading.png){: width="903px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

## Variances

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Submission controls

As the stepper pattern isolates each sequential step within a multistep process a variance in the buttons displayed within each step will become apparent to the user. Dependent on which sequential step is displayed the following button(s) may be displayed.

**First step:** Displays a primary button to move to the next step and tertiary button to cancel the form. Intermediate step(s): Displays primary and secondary buttons to move between steps and a tertiary button to cancel the form.

**Final step:** Mimics the intermediate step, however the primary button is now used to complete the form and labeled according; For example, ‘Submit’ or ‘Confirm’.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Button displays based on currently displayed step."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-buttons.png){: width="580px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Error states

Error states for the stepper will generally occur within the limited scope of the input and controls component used within the content area (see below). 

However it may be possible that a completed step may encounter an error state in certain edge cases. For example, when a user paths back and forth between sections, one section may become invalidated by a modified value in a pervious section. In these cases the error icon and associated message will be applied to the selected value in that row (see right). 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Error state applied to a sequential step within a vertical stepper"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-error-1.png){: width="580px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>


<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Loading state

{% figure [caption:"Error state applied to an input field within the content area"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/content-areas/vert-stepper/vert-stepper-error-2.png){: width="903px"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
