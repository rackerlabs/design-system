---
title: Tooltip
parent: Content Areas
layout: component
category: Components
usage: >
  A tooltip is a message that appears when a user places a cursor over an image, icon, hyperlink or other user interface element.
preview-image: preview-images/tooltip.svg
status: stable
resource: true
last-modified: 2018-05-09
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a tooltip in the following scenarios.

- You want to provide in-context help information to the user. For example, use a tooltip to describe what happens when a user initiates a workflow.
- To reveal hidden information, or provide extra or supplemental information to users.
- To clarify uses when features could be misinterpreted, or explain an item on a page when it does not have a text label.

Do not use a tooltip in the following scenarios.

- Do not use a tooltip if users must repeatedly refer to a tooltip to understand an option or to complete a workflow.
- Do not use a tooltip when users need to interact with the tooltip content, or when users are working on a mobile device.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct tooltips.

- Use tooltips on icon images, text, and table rows.
- Tooltips are ideal for short sentences and sentence fragments that clarify the meaning of icons, text input fields, or other user interface elements.
- A tooltip should not be obvious or repeat content already visible on the page.
- A tooltip cannot extend beyond the boundaries of the screen.
- Place a tooltip in a subtle location, and ensure it does not interfere with the user or obscure any objects of interest.
- Do not place interactive controls in a tooltip.
- Use large tooltips sparingly.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use these specifications when you construct tooltips.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

Tooltips are composed of the following elements:

- **Tooltip container (required)**: The container houses the tooltip border, pointer, and content.
- **Trigger (required)**: The trigger is the element that displays the tooltip component when interacted with from a user. See [trigger types]({{page.url}}#trigger-types) for more information on tooltip triggers.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tooltip composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-composition.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

A tooltip stands out from the background by using a lighter background color than the interface background, a rule or line around the tooltip box, and a shadow around the tooltip so it appears raised from the items below.

Use these specifications when you construct tooltips.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tooltip style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-spacing-1.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Use the following spacing guidelines when you construct a tooltip.

- Space between vertical elements: **8px**
- Space between unrelated elements: **12px**
- The **width** of a tooltip can vary, but **cannot be greater than 400px**

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tooltip spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-spacing-1.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Pointer size and placement

Use the following guidelines when you construct a popover pointer:

- The base of the popover pointer is 16px wide.
- The pointer apex is 8px from the side of the rectangle.
- The pointer should start 12px from the corner.
- The side on which the pointer is located depends on the location of the trigger on the screen.
- Always open the popover towards the center of the screen.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Variations of tooltip based on pointer placement"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-pointer-placement.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Behaviors

A user activates a tooltip by hovering over or clicking the trigger element.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Hover interaction

Hover tooltips are best used on large breakpoints and desktop designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints.

Hover-enabled tooltips progress through the following interaction lifecycle:

- **Hidden:** A tooltip is hidden until the trigger is engaged by the pointer.
- **Displayed:** After a pointer hovers over the trigger element for 500 milliseconds, the tooltip displays the tooltip content.
- **Persist:** While a pointer is hovered inside a tooltip, the tooltip persists until the pointer moves off of the trigger or the tooltip.
- **Removal:** After the pointer moves off of the trigger or the tooltip for 1600 milliseconds, the tooltip closes.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tooltip hover lifecycle"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-hover.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Click interaction

Use click-enabled tooltips for smaller breakpoints and mobile designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints.

Click-enabled tooltips progress through the following interaction lifecycle:

- **Hidden:** A tooltip is hidden until the the pointer clicks the trigger.
- **Displayed:** After a pointer clicks the trigger, a tooltip displays the tooltip content.
- **Persist:** Clickable tooltips persist until manually removed by a user.
 - **Removal:** After the pointer has clicked the trigger or clicked outside of the tooltip, the tooltip closes.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tooltip click lifecycle"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-click.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Triggers

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Tooltips appear after a user activates a trigger. You can apply a trigger to an icon, table text, or data visualization.

- **Icon:** Use an icon trigger when a recognizable icon on the application informs a user that additional information is available. For example, a **?** for help or a **$** for pricing are common, recognizable icons.
- **Table text:** Use a table text trigger to reveal additional information within a table. Including information in a tooltip reduces clutter and increases user comprehension. You can apply a table text trigger to plain text cells or link text cells.
- **Data visualization:** Use a data visualization trigger to present data sets aggregated into a data visualization.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Examples of tooltips generated from various trigger types"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-triggers.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

## Help text with a link

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Add help text to a link when a tooltip provides access to an external webpage. Use the following guidelines adding help text to a link.

- The link should always be external and open in a new tab.
- Ensure you include an external link icon.
- If you need additional inputs or interactions on a tooltip, for example, a [drop-down]({{site.baseurl}}/components/dropdowns.html) or [selector](({{site.baseurl}}/components/selector-strip.html)), use a large tooltip.

<!--See [Help links]({{site.baseurl}}/components/help-link.html) for link specifications.-->

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Spacing for tooltip with an associated link"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-text-with-link.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Large tooltips

You can create a large tooltip to display more information than is typically included in a tooltip. Follow the same text conventions and sizing guidelines when you construct large tooltips.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Large tooltips"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-large-tooltips.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Loading state

Apply a tooltip loading state exclusively to data visualizations.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-loading.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
