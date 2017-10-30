---
title: Visual accessibility guidelines
layout: component
category: Overview
usage: >
  Tables present data on nearly every page in Helix control panels. Tables are highly valuable, but always run the risk of putting too high a cognitive load on users. Our goal with tables should always be to decrease cognitive load so users can get the data they need quickly and easily.
status: Stable
resource: true
last-modified: 2017-10-24
---


## Accessibility for Visual Design

<div class="hxRow">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

Rackspace products must be made accessible for everyone – regardless of a person’s abilities. We can assume from the statistics that many of our users have some form of visual impairment. Colour blind Awareness estimates that: 

- 4.5% of the global population experience color blindness (1 in 12 men and 1 in 200 women)
- 4% suffer from low vision (1 in 30 people)
- 0.6% are blind (1 in 188 people)
 
It is easy to forget that we are also designing for this group of users since most designers do not experience these issues. By using the following best practices, you can help ensure your design is accessible for the visually impaired.

### Do not rely on color alone to convey meaning

One of the most common accessibility problems a designer can face is color blindness. The most common form of color blindness is known as red/green color blindness and most color-blind people suffer from either Protanopia (less sensitivity to red light) or Deuteranopia (less sensitivity to green light). Red/green color blindness means that sufferers can mix up certain hues of red and green and mix up all colors which have some red or green as part of the whole color. For example, a red/green color-blind person may confuse a blue and certain values of purple because they cannot see the red element of the color purple.


{% endcolumn %}

{% column right:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}
{% figure [caption:"Helix colors as seen in normal vision _(left)_; Protanopia - reduced sensitivity to red _(center)_; Deuteranopia - reduced sensitivity to green _(right)_."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-hero.svg)
{% endfigure %}

While color can be useful to convey information, color should not be the only way information is conveyed. When using color to differentiate elements, also provide additional identification that does not rely on color perception. There should always be a backup visual indicator for people with color blindness. 

{% endcolumn %}

</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Alerts

Alert bars are a great example of how multiple indicators can be used. If you are indicating an error alert (for example, making it red) always include a status icon and alert description so that someone who is color blind can still see the problem.

Other optional indicators to consider are:

- **Alert type:** An optional alert title descriptor
- **Alert action link:** Provides a user with the next step of a process.
- **Close action:** Closes the alert

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/overview/accessibility/accessibility-alerts.svg)
{% endfigure %}

{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Color and contrast

Readability requires sufficient contrast between text and its background. Low contrast is especially problematic for users with low vision, who also often have contrast sensitivity. To ensure text is readable, Helix adheres to accessibility standards defined by Web Content Accessibility Guidelines (WCAG). These standards are based on contrast ratios calculated from text size, text color, and background color.  

Helix minimum contrast standards require: 

- Small text should have a contrast ratio of at least 4.5:1 against its background color
- Large text (at 14px bold/18px regular and up) should have a contrast ratio of at least 3:1. 
- Icons or other critical elements should also use the recommended contrast ratios.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption: "Helix typography styles with their corresponding contrast ratios. All ratios were calculated using #fafafa (gray 25) background color."] [class:"image bg-light border"] %}
![]({{site.urll}}/assets/images/overview/accessibility/accessibility-typography.svg)
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Use headings and spacing to group related content

When it comes to designing with space, remember that space as an aesthetic quality takes a backseat to space as a design tool. Space creates relationships, defines hierarchies, and emphasizes content. Always keep these in mind when considering how to reduce visual noise and create visual flow in your design. Some people with cognitive disabilities find it difficult to read text when the lines are close together. Providing extra space between lines and paragraphs allows them to better track the next line and to recognize when they have reached the end of a paragraph. WCAG prescribes that line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Helix minimum spacing standards require: 

- Line spacing for Roboto Regular 16px is 24px.
- Paragraph spacing is at least 36px. 
- Use whitespace and proximity to make relationships between content more apparent.
- Style headings to group content, reduce clutter, and make it easier to scan and understand.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption: "Little spacing and unclear relationships"] [class:"image bg-light border"] %}
![]({{site.urll}}/assets/images/overview/accessibility/accessibility-space-1.svg)
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [caption: "More spacing and clear relationships"] [class:"image bg-light border"] %}
![]({{site.urll}}/assets/images/overview/accessibility/accessibility-space-2.svg)
{% endfigure %}

{% endcolumn %}

</div>


<div class="hxRow">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Provide easily identifiable feedback

Provide feedback for interactions, such as confirming form submission, alerting the user when something goes wrong, or notifying the user of changes on the page. Instructions should be easy to identify and suggestions to help fix issues whenever errors are returned must be provided. Important feedback that requires a user action should be presented in a prominent style.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Failed text inputs

There are many acceptable ways to make text inputs visually accessible. If you’re indicating a failed text input, make sure to include multiple visual indicators. For example, in addition to the ‘error message’, the border color turns red and doubles in thickness from 1px to 2px for better accessibility.

It is important to reserve the prominent border at 2px for failed text input as an additional visual indicator for error state.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [class:"image bg-light border"] %}
![caption:"Default state"]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-1.svg)
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [class:"image bg-light border"] %}
![caption:"Error state"]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-2.svg)
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

#### Focus for Input Field

In this example, we provide a clear visual feedback that the focus has moved to the input field by changing the border color and adding a highlight to give the user clear indication of where they’re currently taking action.

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [class:"image bg-light border"] %}
![caption:"Default state"]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-3.svg)
{% endfigure %}

{% endcolumn %}

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

{% figure [class:"image bg-light border"] %}
![caption:"Error state"]({{site.url}}/assets/images/overview/accessibility/accessibility-inputs-4.svg)
{% endfigure %}

{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

### Tools

These best practices are not exhaustive, and they are not necessarily applicable to every situation. However, they do cover the major areas for concern when designing for visual accessibility. It is more important to take away the principles, so that you can integrate them into your design processes. Ultimately, improving accessibility benefits all users by providing greater ease of use to everyone because well-designed products are both more usable and more accessible.

There are many tools that can help you with accessibility. Check them out to learn more:

[WebAim’s color contrast checker](https://webaim.org/resources/contrastchecker/): Insert foreground and background colors to know if they pass accessibility guidelines.

[Toggle Grayscale](https://goo.gl/aFn2h4): Plugin built by the Helix development to quickly view prototypes published to th web in grayscale within the Chrome browser.

[I want to see like the color blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia?hl=en-GB): Plugin built to apply color blindness filters to your web page right within Chrome.

[How to convert a whole design To grayscale](http://www.sketchtips.info/articles/how-to-convert-a-whole-design-to-grayscale): Guide to quickly apply grayscale to designs from within Sketch.

{% endcolumn %}

</div>