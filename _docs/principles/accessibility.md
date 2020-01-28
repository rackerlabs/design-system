---
title: Accessibility
layout: docs
category: Principles
usage: >
  Accessibility standards promote the design of user interfaces (UIs) so that people with the widest range of abilities within the widest range of situations can use them.
status: stable
resource: true
last-modified: 2019-05-24
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Understanding accessibility

An accessible UI can be *accessed* and used by people who experience a permanent or a temporary impairment. An impairment can be visual, auditory, physical, or cognitive.

Accessibility is more than just good design. It's about the empathy for and inclusion of all people. The United Nations estimates that over 1 billion people in the world live with a disability.

For example, a user who suffers from a concussion might experience difficulty processing information, so ensure that you write succinct, on-page instructions and labels. A user who experiences hand tremors as a side effect of medication has difficulty operating a mouse, so design pointer targets so they are large enough.

Designing for accessibility is a best practice when using Helix because your designs will be usable by everyone regardless of whether they have any impairments.

The purpose of this document is to articulate guidelines that you can use when you design a control panel page. The list of guidelines is not exhaustive. Refer to [Web Content Accessibility Guidelines 2.1 (WCAG)](https://www.w3.org/TR/WCAG21/) for a complete list of guidelines.

### Why accessibility is important

Not designing to support users with an impairment means that those users might not be able to complete their tasks and can't do their job. For Helix, accessibility is not considered an edge case, it is considered table stakes.

Not only can inaccessible design reflect poorly on our brand, it also has the potential for legal ramifications. In 2018, at least 2258 lawsuits were filed in federal court under Title III of the Americans with Disabilities Act (ADA), an increase of 177% of such lawsuits filed in 2017.

### How Helix supports accessibility

The Helix team has taken the following steps to help you design accessible UIs:

- To increase the probability that a screen reader interprets a UI correctly, we have developed components that include the appropriate `aria-*` and `role` attributes, where necessary, and use semantic markup as much as possible. These efforts alone do not guarantee accessibility, because strategies to enable accessibility are highly dependent on the UI being developed.
- We strive to design for the best accessibility in all of our design specifications.

While the Helix team has worked to provide you with code and specifications that support accessibility, it is ultimately the responsibility of individual designers and developers to ensure that UIs are accessible. If you have questions about accessibility, [contact the Helix team]({{site.baseurl}}/contact-us/index.html).

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

Because it affects 4.5% of the world's population, color blindness is a common issue faced by users. The most common form of color blindness is known as red-green color deficiency, and those affected have trouble distinguishing certain hues of red and green. For example, an individual with red-green color deficiency can confuse blue and purple because they might not be able to distinguish the red element of purple.

While color can be useful to convey information, it should not be the *only* way to convey information. When you use color to differentiate elements, you should also provide additional identification that does not rely on color perception.

{% endcolumn %}

</div>

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Alert bars are a great example of how you can use multiple indicators to convey information. When you use the color red to indicate an error, you should also include a status icon and alert description so that a color blind user can quickly understand alert severity.

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

The contrast between text and its background impacts the readability of a document. If the color contrast is too low, users with low vision or contrast sensitivity have difficulty reading the text.

To ensure that text is readable, Helix adheres to the [WCAG 2.1 accessibility standards](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=143#contrast-minimum) for color contrast. These standards are based on contrast ratios calculated from text size, text color, and background color.

- Small text should have a contrast ratio of at least 4.5:1 against its background color.
- Large text, which is considered 14px bold or 18px regular (at minimum), should have a contrast ratio of at least 3:1.

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

### Invalid user input

When you indicate an invalid input, in addition to the error message, change the text field's border to red and double the thickness from 1px to 2px. These additional visual cues help communicate that there is an error.

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

Use focus state to provide clear visual feedback that the focused element can receive keyboard input from the user.

Refer to [Focus States]({{site.baseurl}}/style/focus-states.html) for more information on constructing focus states.

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

Screen readers use page headings as an outline that defines the structure of a page. Incorrect heading levels create an inconsistency in the page structure and can cause confusion for screen reader users. For example, don't skip from a Heading 1 to a Heading 3, and then back to a Heading 2. The structure of a page hierarchy should be logical.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Use headings and spacing to group related content

The use of space in visual design provides for designs that are both clear and pleasing to the eyes. Space creates relationships, defines hierarchies, and emphasizes content. Always keep these in mind when considering how to reduce visual noise and create visual flow in your design.

Some people with cognitive disabilities have difficulty reading text when lines are too close to one another. Providing extra space between lines and paragraphs allows the user to better track the next line and to recognize when they have reached the end of a paragraph. [WCAG 2.1 Text Spacing](https://www.w3.org/WAI/WCAG21/quickref/#text-spacing) prescribes that line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Helix minimum spacing standards require the following specifications: 

- By default, Helix line spacing is 1.5 which means that Roboto 16px has a line height of 24px, unless the text can never wrap.
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

Do not use tables to format content or for anything other than presenting tabular data. Screen readers use row and column headings to describe the content within each cell. If column or row headings aren't present, a screen reader may announce "Row one, Column Two..." which can be confusing to the user.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Interactivity guidelines

Consider the following page layout guidelines when you construct an accessible UI.

### Ensure that pointer targets are large enough

Pointer targets that are activated by touch, mouse, trackball, or stylus should be at least 44px x 44px. Large pointer targets can be helpful to users who have difficulty with fine motor skills.

### Avoid revealing content on hover

Users that rely on screen readers or a keyboard to navigate the control panel cannot interact with elements that can only be revealed by using a mouse.

### Write meaningful alternative text for images

Screen readers read the text you enter in the `alt` attribute that you associate with an image. If an image provides important contextual information, then use the `alt` attribute to describe what is happening in the picture. If you do not use the `alt` attribute, some screen readers read the name of the image file, which introduces unnecessary confusion and results in a poor user experience.

If an image is purely decorative, use `aria-hidden="true"`. Do not use an empty `alt` attribute.

The `aria-hidden="true"` also applies to inline SVG images such as icons. Inline SVGs require that you to add other elements, for example `<title>` and `<description>`, to make them accessible. For more information about SVGs, see [Accessible SVGs](https://css-tricks.com/accessible-svgs/).

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

### Identify required inputs

Use the HTML5 `required` attribute to distinguish between required and optional inputs. Screen readers cannot interpret an asterisk (``*``), which is the convention used to visually identify required inputs.

### Link text should convey what happens when clicked

Sentences that include links should include a text description before the link and then a unique name for the link. Do not use **Click Here** as a link naming convention. For example, use 'Visit the [Professional Services]() page to learn more about how we can help transform your IT infrastructure'. Do not use 'Click [here]() to learn more about how we can help transform your IT infrastructure'.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Resources

These accessibility guidelines are not exhaustive, and they might not apply to every situation. However, they do cover the major areas of concern when you incorporate accessibility into your design. Improving accessibility benefits all users by providing greater ease of use to everyone.

Consult the following resources as necessary:

- [How to Meet WCAG 2 (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/): A quick reference guide that contains accessibility requirements success criteria and techniques.
- [WebAIM's color contrast checker](https://webaim.org/resources/contrastchecker/): Insert foreground and background colors to know if they pass accessibility guidelines.
- [Toggle Grayscale](https://goo.gl/aFn2h4): A Google Chrome extension built by the Helix development team that allows you to quickly view web content in grayscale.
- [I want to see like the color blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia): A Google Chrome extension built to apply filters specific to color deficiencies.
- [How to convert a whole design to grayscale](http://www.sketchtips.info/articles/how-to-convert-a-whole-design-to-grayscale): A guide to quickly apply grayscale to designs from within Sketch.

{% endcolumn %}

</div>

</section>
