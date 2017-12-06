---
title: Accessibility
layout: docs
category: Principles
usage: >
  Visual accessibility standards enable users with varied levels of color impairment to successfully navigate and use a Helix-based UI.
status: stable
resource: true
last-modified: 2017-10-24
---

{% include toc.html %}



<section class="static-section" markdown="1">

## Accessibility for visual design
<div class="hxRow"  markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

Rackspace products must be made accessible for everyone&mdash;regardless of a person’s abilities. We can assume from the statistics that many of our users have some form of visual impairment. [Colour Blind Awareness](http://www.colourblindawareness.org/) estimates that:

- 4.5% of the global population experience color blindness (1 in 12 men and 1 in 200 women)
- 4% suffer from low vision (1 in 30 people)
- 0.6% are blind (1 in 188 people)

By using the following best practices, you can help ensure your design is accessible for the visually impaired.

{% endcolumn %}
</div>
</section>

<section class="static-section" markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Do not rely on color alone to convey meaning

Color deficiency is a common issue faced in the design process. The most common form of color blindness is known as red and green color deficiency and most color deficient people suffer from either Protanopia (less sensitivity to red light) or Deuteranopia (less sensitivity to green light). Red and green color deficiency can mean that those affected have troubles distinguishing certain hues of red and green. For example, an individual with red or green color deficiency can confuse blue and purple as they may not be able to distinguish the red element of purple.

{% endcolumn %}
</div>
<div class="hxRow"  markdown="1">
{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Helix colors as seen in normal vision"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-hero-1.svg)
{% endfigure %}
{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Protanopia - reduced sensitivity to red"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-hero-2.svg)
{% endfigure %}
{% endcolumn %}

{% column right:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Deuteranopia - reduced sensitivity to green"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-hero-3.svg)
{% endfigure %}
{% endcolumn %}
</div>


<div class="hxRow"  markdown="1">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

While color can be useful to convey information, color should not be the only way information is conveyed. When using color to differentiate elements, also provide additional identification that does not rely on color perception. There should always be a backup visual indicator for people with color blindness.

{% endcolumn %}
</div>
</section>


<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Alerts

Alert bars are a great example of how multiple indicators can be used. If you are indicating an error alert (for example, making it red), always include a status icon and alert description so that someone who is color blind can still see the problem.

Other optional indicators to consider are the following elements:

- **Alert type:** An optional alert title descriptor.
- **Alert action link:** Provides a user with the next step of a process.
- **Close action:** Closes the alert.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-alerts.svg)
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Color and contrast

Readability requires sufficient contrast between the text and its background. Low contrast is especially problematic for users with low vision who also often have contrast sensitivity.

To ensure text is readable, Helix adheres to accessibility standards defined by [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/). These standards are based on contrast ratios calculated from text size, text color, and background color.  

Helix minimum contrast standards require the following elements:

- Small text should have a contrast ratio of at least 4.5:1 against its background color.
- Large text (at 14px bold or 18px regular and up) should have a contrast ratio of at least 3:1.
- We recommend using the contrast ratios for icons or other critical elements.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption: "Helix typography styles with their corresponding contrast ratios. All ratios were calculated using a `#fafafa` (`gray 25`) background color."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-typography.svg)
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Use headings and spacing to group related content

The use of space in visual design provides for designs that are both clear and pleasing to the eyes. Space creates relationships, defines hierarchies, and emphasizes content. Always keep these in mind when considering how to reduce visual noise and create visual flow in your design.

Some people with cognitive disabilities find it difficult to read text when the lines are close together. Providing extra space between lines and paragraphs allows them to better track the next line and to recognize when they have reached the end of a paragraph. The [WCAG](https://www.w3.org/TR/WCAG20/) prescribes that line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Helix minimum spacing standards require: 

- Line spacing for Roboto Regular 16px is 24px.
- Paragraph spacing is at least 36px.
- Use whitespace and proximity to make relationships between content more apparent.
- Style headings group content, reduce clutter, and make it easier to scan and understand.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption: "Little spacing and unclear relationships"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-space-1.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption: "More spacing and clear relationships"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-space-2.svg)
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Provide easily identifiable feedback

Provide feedback for interactions, such as confirming form submission, alerting the user when something goes wrong, or notifying the user of changes on the page. Ensure instructions are easy to identify, and provide suggestions to help fix issues whenever errors are returned. Prominently present any important feedback that requires user action.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Failed text inputs

There are many acceptable ways to make text inputs visually accessible. If you're indicating a failed text input, make sure to include multiple visual indicators. For example, in addition to the error message, the border color turns red to draw the eye and doubles in thickness from 1px to 2px to provide another distinguishable visual cue not reliant on color.

It is important to reserve the prominent border at 2px for failed text input as an additional visual indicator for error an state.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Default state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-1.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Error state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-2.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Focus for Input Field

In this example, we provide a clear visual feedback that the focus has moved to the input field by changing the border color and adding a highlight to give the user clear indication of where they’re currently taking action.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Default state"][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-3.svg)
{% endfigure %}
{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
{% figure [caption:"Focused state"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-4.svg)
{% endfigure %}
{% endcolumn %}
</div>
</section>

<section class="static-section"  markdown="1">
<div class="hxRow"  markdown="1">
{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Tools

These best practices are not exhaustive, and they are not necessarily applicable to every situation. However, they do cover the major areas for concern when designing for visual accessibility. It is more important to understand the principles so that you can integrate them into your design processes. Ultimately, improving accessibility benefits all users by providing greater ease of use to everyone.

There are many tools that can help you with accessibility. Check them out to learn more:

- [WebAim’s color contrast checker](https://webaim.org/resources/contrastchecker/): Insert foreground and background colors to know if they pass accessibility guidelines.
- [Toggle Grayscale](https://goo.gl/aFn2h4): Plug-in built by the Helix development team to quickly view prototypes published to the web in grayscale within the Chrome browser.
- [I want to see like the color blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia?hl=en-GB): Plug-in built to apply filters specific to color deficiencies. Usable only for Chrome.
- [How to convert a whole design To grayscale](http://www.sketchtips.info/articles/how-to-convert-a-whole-design-to-grayscale): Guide to quickly apply grayscale to designs from within Sketch.

{% endcolumn %}
</div>
</section>
