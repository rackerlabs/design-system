---
title: Buttons
parent: Editing
secondary: Inputs and Controls
layout: component
category: Components
usage: >
  Buttons direct user attention to important actions that can be performed from the current page. Varies types of buttons are used based on the importance of each action.
preview-image: preview-images/buttons.svg
status: pending
resource: true
last-modified: 2017-08-17
---

{% include toc.html %}

Buttons provide the mechanism for users to perform actions within a
Helix-themed UI. Each button has a weight (Primary, Secondary, and Tertiary),
a size (Regular, Large, Compact), as well as a type (Simple, Dropdown).

{% figure [caption:"The three types of buttons defined in the Helix design language"] [class:"image bg-light border col-md-12"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-types.svg)
{% endfigure %}

# Primary Buttons

<div class="hxRow">
{% column left:"hxCol" %}
-   Use the primary action button to prompt the user to take action.

-   In most instances, use the standard size button. Use the compact buttons
    with space constraints such as within a table.

-   Large buttons should be used in mobile designs to accommodate the ideal
    touch target size.

-   Use one primary button per page.

{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Primary button sizes"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-primary-sizes.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Primary button states"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-primary-actions.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

# Secondary Buttons

<div class="hxRow">
{% column left:"hxCol" %}
-   The secondary button can be used in conjunction with the primary button or
    when there are multiple buttons on the same screen.

-   The same sizing rules apply to both secondary and primary buttons.

{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Secondary button sizes"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-secondary-sizes.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Secondary button states"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-secondary-actions.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

# Tertiary Buttons

<div class="hxRow">
{% column left:"hxCol" %}
-   Tertiary buttons can be used in conjunction with the primary button or with
    a primary and secondary button.

-   Tertiary buttons should be used to deemphasize the action in comparison
    with the actions of primary or secondary buttons.

-   For example, use a tertiary button for "cancel" and a primary button to
    emphasize "submit".

{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Tertiary button sizes"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-tertiary-sizes.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Tertiary button states"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-tertiary-actions.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>

# Dropdowns

Dropdowns inject additional actions into a primary, secondary, or tertiary
button.

<div class="hxRow">
{% column left:"hxCol" %}
-   Inherits and extends any of the three button weights

-   Follows the same styles and states as the button weight which it extends

-   Attempt to limit to a maximum of 8 items. If more than 8 items are needed,
    consider splitting a subset of actions into another location on the page.

{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Dropdown buttons"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-dropdowns-actions.svg)
{% endfigure %}
{% endcolumn %}
</div>

# Processing state (Loading)
When any button that submits an asynchronous api call is pressed the
"processing" class/state is applied to the button. This state triggers the
loading animation to be applied to the button.

<div class="hxRow">
{% column left:"hxCol" %}
- Details on loading animation specifics can be found on the <a href="{{site.baseurl}}/components/loading.html">loading page</a>.
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Processing state across button weights"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-loading.svg)
{% endfigure %}
{% endcolumn %}
</div>

# Button Specs

List of associated css values used across the three button sizes.

## Standard Button Specs

<div class="hxRow">
{% column left:"hxCol" %}
- `font-family:roboto-medium`
- `font-size:14px`
- `text-transform:uppercase`
- `border-radius:2px`
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Regular button redlines"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-specs-regular.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Large Button Specs

<div class="hxRow">
{% column left:"hxCol" %}
- `font-family:roboto-medium`
- `font-size:16px`
- `text-transform:uppercase`
- `border-radius:2px`
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Large button redlines"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-specs-large.svg)
{% endfigure %}
{% endcolumn %}
</div>

## Compact Button Specs

<div class="hxRow">
{% column left:"hxCol" %}
- `font-family:roboto-medium`
- `font-size:10px`
- `text-transform:uppercase`
- `border-radius:2px`
{% endcolumn %}
{% column right:"hxCol" %}
{% figure [caption:"Compact button redlines"] %}
![]({{site.cdn_url}}/img/components/Buttons/buttons-specs-compact.svg)
{% endfigure %}
{% endcolumn %}
</div>

# Guidance

-   Generally, use primary buttons for actions that go to the next step and use
    secondary buttons for actions that happen on the current page.

-   Style the button most users should click in a way that distinguishes from
    other buttons on the page. Try using the "large button" or the most
    visually distinct fill color.

-   Make sure buttons should look clickable—use color variations to distinguish
    static, hover and active states.

-   Avoid using too many buttons on a page.

-   Avoid using too many buttons on a page.

-   Use sentence case for button labels.

-   Button labels should be as short as possible with "trigger words" that your
    users will recognize to clearly explain what will happen when the button is
    clicked (for example, "download," "view" or "sign up").

-   Make the first word of the button’s label a verb. For example, instead of
    "Complaint Filing" label the button "File a complaint."

-   Only use icons inside buttons when absolutely necessary. If your icon
    requires a text description then it may not be a good icon.
