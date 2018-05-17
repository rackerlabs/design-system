---
title: Simple buttons
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Buttons direct user attention to important actions that can be performed from the current page. Base the use of various types of buttons on the importance of each action.
preview-image: preview-images/buttons.svg
status: stable
resource: true
last-modified: 2018-05-17
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

<section class="static-section" markdown="1">

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Buttons provide the mechanism for users to perform actions within a Helix UI. Each button has a weight (primary, secondary, and tertiary), a size (regular, large, compact), as well as a type (simple, drop-down).

Use a button to launch a process or initiate an action. Do not use buttons for navigation.  When the user needs to get from one page to another, use a text link.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}


## Best practices

- Button Text style should always be Title Case where the first letter of each word is capitalized.
- Buttons should always use the labeling convention of "Noun Verb", with no articles. For example, use "Create Server", not “Create a Server”.
- Keep your text labels as short as possible while also fully communicating what action the button will trigger.
- When choosing which button size to use, consider the context. In most cases, use a standard button.
- There should only be one primary button in a form.
- The primary button should always represent an inherently apparent next step such as **Create Server**, **Add Selected**, **Confirm Deletion**, **Submit**, or **Next**.
- If you have multiple buttons on a page, there can only be one primary button.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Specifications

When using a simple button, specify both weight and size.

- Weights:   
    - Primary
    - Secondary
    - Tertiary
- Sizes:
    - Large
    - Standard
    - Compact

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"The three button weights"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-simple.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

For most desktop use cases, you should use a standard button size.  

Large buttons should be used in mobile designs to accommodate the ideal touch target size. 

Compact buttons should be used when you have severe space constraints, such as inside of a table or in a dashboard widget.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button spacing specs"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Spacing text here...

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button spacing specs"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-specs.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Primary buttons

- Use the primary button to prompt the user to take action.
- Use only one primary button per page.
- Simple buttons, drop-down buttons, and split drop-down buttons all share the same properties for state changes.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button spacing specs"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-primary.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Secondary buttons

- The secondary button can be used alone or in conjuction with a primary button or a tertiary button.
- Use secondary buttons when there are multiple buttons on the same screen.
- Simple buttons, drop-down buttons, and split drop-down buttons all share the same properties for state changes.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button spacing specs"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-secondary.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Tertiary buttons

- The tertiary button can be used alone or in conjuction with other buttons.
- Use alone when you want to deemphasize the action or when you have a list of actions.
- Use in conjunction with a primary or secondary button when there are two options, but you want to de-emphasize one of them. For example, in a dialog box with two options, use “Submit” (primary) and “Cancel” (tertiary).
- The primary button sizing rules also apply to tertiary buttons.
- Tertiary buttons have a transparent background.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button spacing specs"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-tertiary.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Loading states

- The loading icon animation should rotate time: 0.8 sec/revolution.
- For further information regarding the loading pattern, see the [loading pattern]({{site.baseurl}}/components/loading-indicators.html).

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button (loading state) spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-loading-1.svg"/>
{% endfigure %}

{% figure [caption:"Button (loading state) specifications for primary, secondary, and tertiary weights."] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-loading-2.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Button sets

- Buttons should be aligned in order of primary, secondary, and tertiary.
- Button sets are most often used in Popovers, Modals or Create/Edit Forms to group the submit, back or next, and cancel buttons.
- A button set should never contain more than one primary button.
- Avoid using split buttons in a button set as it would complicate what should be a simple decision.
- The cancel action must always be an `hxBtn.hxLink` as shown in the example.

When submitting forms:

- Disable all buttons, and change the primary button to loading state.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Button set spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-sets-1.svg"/>
{% endfigure %}

{% figure [caption:"Primary, secondary and tertiary button set"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-sets-2.svg"/>
{% endfigure %}

{% figure [caption:"Primary and tertiary button set"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/inputs-and-controls/buttons/buttons-sets-3.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
