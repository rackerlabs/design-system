---
title: Accessibility
layout: docs
category: Principles
usage: >
  Accessibility standards promote the design of user interfaces (UI) so they can be used by people with the widest range of abilities within the widest range of situations.
status: stable
resource: true
last-modified: 2019-05-06
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Understanding accessibility

An accessible UI is designed so that it can be *accessed* and used by people who experience a permanent or a temporary impairment. An impairment can be visual, auditory, physical, or cognitive.

For example, a user who suffers from a concussion may experience difficulty processing information, so ensure that you write succinct on-page instructions and labels. A user who experiences hand tremors as a side effect to medication has difficulty operating a mouse, so design pointer targets so they are large enough.

Designing for accessibility is a best practice when using Helix because your designs will be usable by everyone regardless of whether they have any impairments.

The purpose of this document is to articulate guidelines that you can use when you design control panel page. The list of guidelines is not exhaustive. Refer to [Web Content Accessibility Guidelines 2.1 (WCAG)](https://www.w3.org/TR/WCAG21/) for a complete list of guidelines.

### Why accessibility is important

Accessibility is more than just good design. It's about the empathy for and inclusion of all people. Consider sight. [Colour Blind Awareness](http://www.colourblindawareness.org/) estimates that:

- 4.5% of the global population experience color blindness (1 in 12 men and 1 in 200 women)
- 4% suffer from low vision (1 in 30 people)
- 0.6% are blind (1 in 188 people)

With a global population of just over 7.5 billion people, 9.1% of the world's population equates to over one-half billion visually-impaired users that cannot use an inaccessible product. Inaccessible products can have a negative impact on a large percent of users.

Not only can inaccessible design reflect poorly on our brand, it has the potential for legal ramifications. In 2018, there were at least 2258 lawsuits filed in federal court under Title III of the Americans with Disabilities Act (ADA), an increase of 177% of such lawsuits filed in 2017.

### How Helix supports accessibility

The core Helix team has taken the following steps to help ensure that your UIs are accessible:

- To increase the probability that a screen reader interprets a UI correctly, we have developed components that include the appropriate `aria-*` and `role` attributes, where necessary, and use semantic markup as much as possible. These efforts alone do not guarantee screen reader accessibility, as accessibility is mostly dependent on the UI being developed.
- To the greatest extent possible, we follow the guidelines set forth by the [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/) to ensure keyboard accessibility.
- Accessibility is built into the Helix color palette and hex codes. If you adhere to the color palette, you will be in compliance.
- We have designed the spacing system, focus states, and typography to conform to accessibility standards.
- All design specifications we have written support accessibility.

While the core Helix Team has worked to provide you with code and specifications that support accessibility, it is ultimately the responsibility of individual designers and developers to ensure that UIs are accessible.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Color guidelines

Consider the following color guidelines when you construct an accessible UI.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### Do not rely on color alone to convey meaning

Color deficiency is a common issue that is faced in the design process. The most common form of color blindness is known as red and green color deficiency, and most color deficient people suffer from either Protanopia (less sensitivity to red light) or Deuteranopia (less sensitivity to green light). Red and green color deficiency can mean that those affected have trouble distinguishing certain hues of red and green. For example, an individual with red or green color deficiency can confuse blue and purple because they might not be able to distinguish the red element of purple.

While color can be useful to convey information, it should not be the only way to convey information. When you use color to differentiate elements, you should also provide additional identification that does not rely on color perception.

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Alert bars are a great example of how you can use multiple indicators to convey information. When you use the color red to indicate an error, you should also include a status icon and alert description so that a color blind user can understand the severity of the problem.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Do not use color alone to convey meaning"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-alerts.png" width="598"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Ensure that there is sufficient contrast between text and its background

The readability of a document is impacted by the contrast between text and its background. Low contrast between text and the background is difficult to read for users with low vision or contrast sensitivity.

To ensure that text is readable, Helix adheres to the accessibility standards defined by [WCAG](https://www.w3.org/TR/WCAG21/). These standards are based on contrast ratios calculated from text size, text color, and background color.

- Small text should have a contrast ratio of at least 4.5:1 against its background color.
- Large text, which is considered 14px bold text or 18px regular text and higher, should have a contrast ratio of at least 3:1.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption: "Helix typography styles and contrast ratios"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-typography.png" width="598"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Visual feedback guidelines

Provide feedback for interactions, such as confirming form submission, alerting the user when something goes wrong, or notifying the user of changes on the page. Ensure instructions are easy to identify and provide suggestions to help fix issues whenever errors are returned. Prominently present any important feedback that requires user action.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Failed text inputs

When you indicate that a text input has failed, in addition to the error message, change the text field's border to red and double the thickness from 1px to 2px. These additional visual cues help communicate that there is an error.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption:"Default state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-inputs-1.svg"/>
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption:"Error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-inputs-2.svg"/>
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Use focus state

Use focus state to provide clear visual feedback that the user's cursor has moved to an input field or control and that the user can take action.

Refer to [Focus States]({{site.baseURL}}/style/focus-states.html) for more information on constructing focus states.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption:"Default state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-inputs-3.svg"/>
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption:"Focused state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-inputs-4.svg"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Page layout guidelines

Consider the following page layout guidelines when you construct an accessible UI.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Be consistent with headings

Some screen readers allow users to listen to all of the headings on a page and then choose which content area they want to explore. Because screen readers read header tags in the order they appear, it is important that you not skip header levels. The structure of a page hierarchy should be logical. For example, don't skip from a Header 1 to a Header 3, and then back to a Header 2.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Use headings and spacing to group related content

The use of space in visual design provides for designs that are both clear and pleasing to the eyes. Space creates relationships, defines hierarchies, and emphasizes content. Always keep these in mind when considering how to reduce visual noise and create visual flow in your design.

Some people with cognitive disabilities have difficultly reading text when the lines are close together. Providing extra space between lines and paragraphs allows them to better track the next line and to recognize when they have reached the end of a paragraph. The [WCAG](https://www.w3.org/TR/WCAG21/) prescribes that line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Helix minimum spacing standards require: 

- Line spacing for Roboto Regular 16px is 24px.
- Spacing below paragraphs is 16px.
- Use whitespace and proximity to make relationships between content more apparent.
- Style headings group content, reduce clutter, and make it easier to scan and understand.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption: "Little spacing and unclear relationships"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-space-1.png" width="305"/>
{% endfigure %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

{% figure [caption: "More spacing and clear relationships"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/overview/accessibility/accessibility-space-2.png" width="305"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Don't use tables for layout

Do not use tables to format content or for anything other than presenting tabular data. A screen reader reads every row and column of a table which makes tables with nested rows difficult for the user to interpret.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Interactivity guidelines

Consider the following page layout guidelines when you construct an accessible UI.

### Ensure that pointer targets are large enough

Pointer targets that are activated by a mouse, trackball, or stylus should be at least 44px x 44px. Large pointer targets can be helpful to users who have difficulty with fine motor skills.

### Don't make users hover to find hidden controls

Users that use screen readers or the keyboard to navigate to and select components rely on those components to be visible. Don't hide components as a way to reduce visual clutter. If a control cannot be seen, it cannot be verbally selected.

### Write meaningful alternative text for images

Screen readers read the text you enter in the `<alt>` tag that you associate with an image. If an image provides important contextual information, then use the `<alt>` tag to describe what is happening in the picture. If the image is decorative and does not provide important information, then add an empty `<alt>` tag. If you do not add an `<alt>` tag, some screen readers read the name of the image file, which introduces unnecessary confusion and results in a poor user experience.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Text guidelines

Consider the following text guidelines when you construct an accessible UI.

### Be succinct

Write short labels and be concise when writing helper text. Listening to lengthy field names and links can be cumbersome for users that use screen readers. The shorter the label, the more quickly a screen reader can work through the content.

### Identify required fields

Use the HTML5 `required` attribute to distinguish between required and optional fields. Screen readers cannot interpret an asterisk (``*``), which is the convention used to visually identify required fields.

### Link text should convey what happens when clicked

Sentences that include links should include a text description before the link and then a unique name for the link. Do not use **Click Here** as a link naming convention. For example, use 'Visit the [Professional Services](http:www) page to learn more about how we can help transform your IT infrastructure'. Do not use 'Click [here](http:www) to learn more about how we can help transform your IT infrastructure'.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Resources

These accessibility guidelines are not exhaustive, and they might not be applicable to every situation. However, they do cover the major areas of concern when you incorporate accessibility into your design. Improving accessibility benefits all users by providing greater ease of use to everyone.

Consult the following resources as necessary:

- [WebAim’s color contrast checker](https://webaim.org/resources/contrastchecker/): Insert foreground and background colors to know if they pass accessibility guidelines.
- [Toggle Grayscale](https://goo.gl/aFn2h4): Plug-in built by the Helix development team so you can quickly view prototypes published to the web in grayscale within the Chrome browser.
- [I want to see like the color blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia?hl=en-GB): Chrome plug-in built to apply filters specific to color deficiencies.
- [How to convert a whole design to grayscale](http://www.sketchtips.info/articles/how-to-convert-a-whole-design-to-grayscale): Guide to quickly apply grayscale to designs from within Sketch.

{% endcolumn %}

</div>

</section>
