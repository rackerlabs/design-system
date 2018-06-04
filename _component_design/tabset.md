---
title: Tabs
parent: Content Areas
layout: component
category: Components
usage: >
  A tab is a hidden section of content on a page. Tabs enable users to easily switch between multiple sections of a page without losing context. Tabs help organize content at a high level, such as switching between views, data sets, or the functional aspects of an application.
preview-image: preview-images/tabs.svg
resource: true
status: stable
last-modified: 2018-05-08
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use tabs in the following situations:

- Users need to alternate between different views, while the context remains constant.
- You want the content of a page to be scannable and easy to navigate. Tabs help users quickly find what they need.
- You do not need to create a single, unified experience for the user. Tabs eliminate the need for the user to scroll through long pages to find the right section.

Do not use tabs for the following situations:

- Tabs are not suited for use as primary navigation for an entire page.
- Tabs are not viable when users need to view content from multiple tabs simultaneously.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct tabs:

- Only one active tab per page is allowed.
- The default view must display the left-most tab.
- Present tabs as a single row.
- Do not construct nested tabs that include another set of tabbed content within a tab.
- Highlight the tab corresponding to the visible content.
- Provide all relevant contextual information and interface items so a user can perform a single task within a tab.
- Clearly name tabs to differentiate them. Names should be short, scannable, and preferably one word.
- Tab names must follow title case capitalization.
- Avoid using lengthy tab names. Do not allow text to wrap or truncate.
- Do not use tab sets in multiple areas of the same page.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct tabs.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A tab consists of the following elements:

- **Tab shape (required)**: The tab shape contains the tab name.
- **Tab name (required)**: Capitalize the first letter of each word in a tab name. If necessary, wrap tab names to a second line. Truncate tab names that exceed two lines.
- **Tab content area (required)**: Any content relevant to the title of the tab, including text and graphics, is included in the tab content area.
- **Tab bottom line (required)**: Extend top and bottom lines to the edge of the content area.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tab menu structure"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/tabs/tabs_composition.png" width="539px"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Construct tabs so that the left-most tab is selected by default. In this example, **Notes** is the default tab.

Place tabs on a transparent canvas so that the tab and the tab content area are the same color as the content behind it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tab content area structure"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/tabs/tabs-style.png" width="545px"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Pad the top and bottom of the tab content area by 24px. Pad the sides of the tab content area by 20px.

Pad the top of the tab name by 12px. Pad the bottom of the tab name by 8px. Pad the sides of the tab name by 12px.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tab content area structure"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/tabs/tabs-spacing.png" width="539px"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

Tabs can exist in hover, pressed, or zero states.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Hover state

When the user moves the cursor over any part of an unselected tab, change the tab to the hover state. When the user moves the cursor off the tab, the text should change back to the default color.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tab hover state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/tabs/tabs-state-hover.png" width="559px"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Pressed state

To visually confirm to a user that a tab is selected, change the color of the tab text by a few shades.

To visually reinforce tab selection, change the color of the tab text to the pressed state for the duration of the click. Change the tab text to the selected state after the user clicks the tab.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tab pressed state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/tabs/tabs-state-pressed.png" width="552px"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Zero state

Center the zero state messaging horizontally and vertically.

Use a minimum height of 220px for the container.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Tab zero state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/tabs/tabs-state-zero.png" width="537px"/>

{% endfigure %}

{% endcolumn %}

</div>

</section>
