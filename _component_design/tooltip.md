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

### When to Use
{: .hxSubSectionTitle}
- To provide in-context help information, ( e.g. when describing what will happen if you initiate a workflow)
- To reveal hidden information ( e.g. truncated text, visualization data, or non-human-friendly data like unique ID alphanumerics)
- Provide extra information to users, so that the screen isn’t overly full of unnecessary text.
- An item on a page benefits from a supplemental description or further information.
- Rarely used features or features that can be interpreted differently.
- An item on a page does not have have a text label.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Meet the tooltip pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-composition.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
### When not to use
{: .hxSubSectionTitle}
- If users must repeatedly refer to a tool tip to understand an option or to complete a workflow, then the information may need to be displayed on the page rather than hidden in a tooltip.
- When users need to interact with the tip’s content.
- When users work on the site on a mobile device. Tooltips do not appear on hover on a mobile device.

### Best Practice
{: .hxSubSectionTitle}
- Do not make the content obvious or just repeat what is already on the screen.
- The tooltip is activated when hovered over  or on click.
- Keep the tooltip text concise. Tooltips are perfect for short sentences and sentence fragments.
- A tooltip disappears when mouse hovers away, or when clicked in the icon. 
- Tooltip should be used on icon images, text, and table rows.
- Tooltips should be placed near the object that is being hovered over. 
- Tooltips should never be placed in a way that interferes with what the user is doing, or obscure the object of interest.
- The maximum width for the tooltip is 400px.
- Do not put interactive controls inside the tooltip.
- Don't put images that look like they are interactive inside the tooltip.


### Problems Being Solved
{: .hxSubSectionTitle}
Tips are a powerful way to simplify a user interface. They provide information users need when they need it, with minimal effort on their part. Tips can help you use screen space more effectively and reduce screen clutter.

{% endcolumn %}

</div>

## Default Composition 
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Tooltips are composed of two primary portions, the tooltip container and the trigger:

The trigger is the element that displays the tooltip component when interacted with from a user. (see trigger types section)

The container houses the border, pointer, and text/content. 

The the tooltip will stand off from the back ground by: a lighter background color than the interface background, a slight rule (line) around the tooltip box, and a slight shadow around the tooltip so it seems “higher” or “raised up” from the items below it. 

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip composition."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-composition.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

## Tooltip Specs 
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Spacing
{: .hxSubSectionTitle}
The tooltip component has varied widths based on the amount of content contained within its bounds but always relies on the following consistent spacing specifications:

- 8px between vertical elements
- 12px between not related elements 
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

### Text
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

### Pointer and Placement
{: .hxSubSectionTitle}

- The pointer is 16 px wide at the base.
- The apex is 8 px from the side of the rectangle. 
- The pointer should start 12 px from the corner.
- The side from which the pointer protrudes depends on the location of the trigger on the screen.

	- Always have the tooltip protrude toward the center of the screen
	- Be sure not to hide important information with the tootip
	- The popover or tooltip content should be repositioned so that it doesn’t bleed off the screen.

- The depth/width of the remaining side of the tooltip is dynamic based on how large the box needs to be with a max-width of 400px. 

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

### Trigger Types
{: .hxSubSectionTitle}

- **Icon:** Use this trigger variation when a recognizable icon on the application informs a user that additional information is available for consumption if needed. (e.g. A ‘?’ for help or ‘$’ for pricing) 
- **Table text:** This variation is used to reveal additional information within a table. By hiding information behind tooltips in a table we keep the tables easily consumable and only display additional information when a user requires. Do not hide important information behind a tooltip. Note: May apply to both plain text cells and link text cells.
- **Data visualization:** Use this trigger variation to present robust data sets aggregated into a data visualization.


{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Examples of tooltips generated from various trigger types."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-triggers.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

## Text Conventions
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

## Tooltip Variations
{: .hxSectionTitle}
<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Help Text with a Link
{: .hxSubSectionTitle}

This variation is used when a tooltip need to provide access to a singular external webpage.

- This link should always be an external link and should open in a new tab. 
- Be sure you always include an external link icon
- If you need additional inputs or interactions on a tool tip, e.g. a dropdown or selector, use the larger popover pattern.

See <a>Links page</a> for link specifications.


{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Spacing for Tooltip with an associated link"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-text-with-link.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Large Tooltips
{: .hxSubSectionTitle}

Occassionally a tooltip needs to display a robust set of data that falls outside the bounds of traditional text conventions. The larger tooltips still follow the text conventions and max-width: 400px guidelines assosiated with tooltips and should be used sparingly. While the occasional outlier is ok, if you are consistently using the large tooltip pattern it may be an indication of less than optimal design decisions.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Some tooltips contain larger amounts of information, like definitions and pricing structure. Such tooltips **SHOULD BE USED SPARINGLY**."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-large-tooltips.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>

## Loading State
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


## Interaction Behaviors
{: .hxSectionTitle}

Tooltips can be activated via either a hover or a click on the trigger element.

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Hover Interaction
{: .hxSubSectionTitle}


Hover tooltips are best used on large breakpoints and desktop designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints. Hover enabled Tooltips go through the following interaction lifecycle:
 
- **Hidden:** The base state of a tooltip is to be hidden until the trigger is engaged by the pointed
- **Displayed:** Tooltips enter the display state once the pointer has hovered the trigger element for 500ms.
- **Persist:**  While a pointer is hovered inside a tooltip it will persist indefintely to allow for user consumption.
- **Removal:** After the pointer leaves either the trigger or the tooltip the tooltip is ready for removal. After 1600ms the tip is removed.



{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip hover lifecycle."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-hover.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Click Interaction
{: .hxSubSectionTitle}

Click enabled tooltips are best used for smaller breakpoint and mobile designs. Tooltips can have both hover and click interactions on the same tooltip across breakpoints. Click enabled tooltips go through the following interaction lifecycle 

- **Hidden:** The base state of a tooltip is to be hidden until the trigger is clicked by the pointer
- **Displayed:** Tooltips enter the displayed state once the pointer has clicked the trigger element.
- **Persist:**  Clickable tooltips persist until manually removed by a user.
 - **Removal:** Tooltips reenter the hidden state once the pointer has either: 

	- reclicked the trigger element.
	- clicked anywhere outside the tooltip.

{% endcolumn %}
{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Tooltip click lifecycle."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/help/tooltips/tooltip-click.svg){:width="100%"}

{% endfigure %}
{% endcolumn %}
</div>



