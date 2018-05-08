---
title: Tooltip
parent: Content Areas
layout: component
category: Components
usage: >
  A tooltip is a message that appears when a user places a cursor over an image, icon, hyperlink or other user interface element.

  Use the tooltip when you want to convey brief snippets of information, to explain an element a bit more, or to display truncated text.
preview-image: preview-images/tooltip.svg
status: stable
resource: true
last-modified: 2018-05-08
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

Tooltips are composed of two primary elements, the tooltip container and the trigger:

- The trigger is the element that displays the tooltip component when interacted with from a user. (See the [trigger types]({{page.url}}#trigger-types) section.)
- The container houses the border, pointer, and content.

The tooltip stands out from the background by using a lighter background color than the interface background, a rule or line around the tooltip box, and a shadow around the tooltip so it appears raised from the items below.

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

Tooltips have varying widths based on the amount of content; however, a tooltip relies on the following consistent spacing specifications:

- 8px between vertical elements
- 12px between unrelated elements
- 400px for max width

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

- The pointer is 16px wide at the base.
- The apex is 8px from the side of the rectangle.
- The pointer should start 12px from the corner.
- The side from which the pointer extends depends on the location of the trigger on the screen.

#### Pointer placement

Best practice pointer placement relies on the following:

- Always have the tooltip protrude toward the center of the screen.
- Ensure the tooltip does not hide important information.
- The tooltip content should be repositioned so that it doesn't extend off the boundaries of the current screen.
- The depth and width of the remaining side of the tooltip is dynamic based on how large the box needs to be with a max width of 400 px.

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

## Behaviors

A tooltip is activated by hovering over or clicking the trigger element.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Hover interaction

Hover tooltips are best used on large breakpoints and desktop designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints.

Hover-enabled tooltips progress ]through the following interaction lifecycle:

- **Hidden:** The base state of a tooltip is hidden until the trigger is engaged by the pointer.
- **Displayed:** Tooltips enter the display state after the pointer has hovered over the trigger element for 500 milliseconds.
- **Persist:** While a pointer is hovered inside a tooltip, the tooltip persists until the pointer moves off of the trigger or the tooltip.
- **Removal:** The tooltip is removed 1600 milliseconds after the pointer moves off of the trigger or the tooltip.

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

### Click interaction

Use click-enabled tooltips for smaller breakpoints and mobile designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints.

Click-enabled tooltips progress through the following interaction lifecycle:

- **Hidden:** The base state of a tooltip is hidden until the trigger is clicked by the pointer.
- **Displayed:** Tooltips enter the displayed state after the pointer has clicked the trigger element.
- **Persist:** Clickable tooltips persist until manually removed by a user.
 - **Removal:** Tooltips re-enter the hidden state after the pointer has clicked the trigger element or clicked outside the tooltip.

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

Tooltips will only appear after be activated by a trigger. Triggers come in a variety of types.

- **Icon:** Use this trigger variation if a recognizable icon on the application informs a user that additional information is available for consumption if needed (for example, a **?** for help or a **$** for pricing).
- **Table text:** This variation is used to reveal additional information within a table. By hiding information in tooltips in a table, the tables are easily consumable and only display additional information if required.
    - **Note:** Can apply to both plain text cells and link text cells.
- **Data visualization:** Use this trigger variation to present robust data sets aggregated into a data visualization.

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

Use this variation when a tooltip provides access to a singular external webpage.

- This link should always be an external link and should open in a new tab.
- Ensure you always include an external link icon.
- If you need additional inputs or interactions on a tooltip, for example, a [drop-down]({{site.baseurl}}/components/dropdowns.html) or selector, use the larger popover pattern.

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

Occasionally a tooltip needs to display a robust set of data that falls outside the bounds of traditional text conventions. The larger tooltips follow the same text conventions and sizing guidelines.

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

Loading states are rarely found when using the tooltip pattern. The loading state is applied exclusively when using data visualizations.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/help/tooltips/tooltip-loading.svg" width="500px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
