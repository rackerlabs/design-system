---
title: Tooltip
parent: Help
layout: component
category: Components
usage: >
  Use the tooltip when you want to convey brief snippets of information, to explain an element a bit more, or to display truncated text.
preview-image: preview-images/tooltip.svg
status: unknown
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

## Introduction
{: .hxSectionTitle}
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use
{: .hxSubSectionTitle}

Use a tool tip when you need to provide in-context help information. For example, when describing what will happen when a workflow is initiated. A tool tip can also be used to reveal hidden information, provide extra or supplemental information to users, when features could be misinterpreted, or an item on a page does not have a text label.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the tooltip pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-hero.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
### When not to use
{: .hxSubSectionTitle}
Do not use a tooltip if users must repeatedly refer to a tooltip to understand an option or to complete a workflow. We recommend you do not use a tooltip when users needs to interact with the tip's content, or when users integrate with the site on a mobile device.

### Best practice
{: .hxSubSectionTitle}
Tooltips are perfect for short sentences and sentence fragments that assist the user in their understanding. The ideal tooltip is not obvious, nor does it repeat content that is already visible on the site. Place a tooltip in a subtle location, and ensure it does not interfere with the user or obscure any objects of interest. Use the tooltip on icon  images, text, and table rows. The maximum width for the tooltip is 400px, ensure there are no interactive controls inside the tooltip.


### Problems being solved
{: .hxSubSectionTitle}
Tooltips are a powerful way to simplify a user interface. They provide information users need when they need it, with minimal effort on their part. Tips can help you use screen space more effectively and reduce screen clutter.

{% endcolumn %}

</div>

## Default composition 
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Tooltips are composed of two primary portions, the tooltip container and the trigger:

- The trigger is the element that displays the tooltip component when interacted with from a user. (see trigger types section)

- The container houses the border, pointer, and content. 

The tooltip will stand out from the background by using a lighter background colour than the interface background, a rule or line around the tooltip box, and a shadow around the tooltip so it appears raised from the items below.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-composition.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

## Tooltip specifications

{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing
{: .hxSubSectionTitle}
Tooltips have varying widths based on the amount of content, however, a tooltip relies on the following consistent spacing specifications:

- 8px between vertical elements
- 12px between unrelated elements 
- max-width of 400px

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Spacing specifications for tooltip component."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-spacing-1.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Text values
{: .hxSubSectionTitle}

- 14px Roboto Medium for headers
- 14px Roboto Regular for body copy


{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Text specifications for tooltip component."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-spacing-2.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Pointer and placement
{: .hxSubSectionTitle}

- The pointer is 16 px wide at the base.
- The apex is 8 px from the side of the rectangle. 
- The pointer should start 12 px from the corner.
- The side from which the pointer extends depends on the location of the trigger on the screen. Best practice pointer placement relies up the following:

	- Always have the tooltip protrude toward the center of the screen.
	- Ensure the tooltip does not hide important information.
	- The tooltip content should be repositioned so that it doesn’t extend off the boundaries of the current screen.

- The depth and width of the remaining side of the tooltip is dynamic based on how large the box needs to be with a max-width of 400px. 

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption:"Variations of tooltip based on pointer placement."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-pointer-placement.svg){:width="100%"}
{% endfigure %}

{% endcolumn %}
</div>

## Triggers
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Tooltips will only appear after be activated by a trigger. Triggers come in a variety of types.

### Trigger types
{: .hxSubSectionTitle}

- **Icon:** Use this trigger variation if a recognizable icon on the application informs a user that additional information is available for consumption if needed. For example, A ‘?’ for help or ‘$’ for pricing.
- **Table text:** This variation is used to reveal additional information within a table. By hiding information in tooltips in a table, the tables are easily consumable and only display additional information if required. 
	- **Note:** May apply to both plain text cells and link text cells.

- **Data visualization:** Use this trigger variation to present robust data sets aggregated into a data visualization.


{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Examples of tooltips generated from various trigger types."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-triggers.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

## Text conventions
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{: .hxSubSectionTitle}

- To keep the tooltip text concise, you should use short sentences and sentence fragments. 
- Try to keep your tooltips under three lines of text including a link if you need one.


{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Most tooltips should be very short and only provide enough information for the user to better understand the context. Tooltips can also be used to reveal information that is truncated or hidden by default."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-text-conventions-1.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

## Tooltip variations
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Help text with a link
{: .hxSubSectionTitle}

Use this variation when a tooltip provides access to a singular external webpage.

- This link should always be an external link and should open in a new tab. 
- Be sure you always include an external link icon.
- If you need additional inputs or interactions on a tooltip, for example, a dropdown or selector, use the larger popover pattern.

See [Help links]({{site.baseurl}}/components/help-link.html) for link specifications.


{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Spacing for tooltip with an associated link"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-text-with-link.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Large tooltips
{: .hxSubSectionTitle}

Occassionally a tooltip needs to display a robust set of data that falls outside the bounds of traditional text conventions. The larger tooltips follow the same text conventions and sizing guidelines.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Some tooltips contain larger amounts of information, like definitions and pricing structure. Such tooltips **should be used sparingly**."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-large-tooltips.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

## Loading state
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Loading states are rarely found when using the tooltip pattern. The loading state is applied exclusively when using data visualizations.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Loading State."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-loading.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>


## Interaction behaviors
{: .hxSectionTitle}

Tooltips can be activated via either a hover or a click on the trigger element.

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Hover interaction
{: .hxSubSectionTitle}


Hover tooltips are best used on large breakpoints and desktop designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints. Hover enabled tooltips go through the following interaction lifecycle:
 
- **Hidden:** The base state of a tooltip is to be hidden until the trigger is engaged by the pointed.
- **Displayed:** Tooltips enter the display state once the pointer has hovered the trigger element for 500ms.
- **Persist:**  While a pointer is hovered inside a tooltip it will persist indefintely to allow for user consumption.
- **Removal:** After the pointer leaves either the trigger or the tooltip is ready for removal. After 1600ms the tooltip is removed.



{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip hover lifecycle."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-hover.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Click interaction
{: .hxSubSectionTitle}

Use click enabled tooltips for smaller breakpoints and mobile designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints. Click enabled tooltips go through the following interaction lifecycle 

- **Hidden:** The base state of a tooltip is to be hidden until the trigger is clicked by the pointer.
- **Displayed:** Tooltips enter the displayed state once the pointer has clicked the trigger element.
- **Persist:**  Clickable tooltips persist until manually removed by a user.
 - **Removal:** Tooltips re-enter the hidden state once the pointer has either: 

	- re-clicked the trigger element.
	- clicked outside the tooltip.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip click lifecycle."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-click.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>



