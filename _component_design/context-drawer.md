---
title: Context Drawer
parent: Content Areas
layout: component
category: Components
usage: >
  The context drawer provides a temporary overlay panel that expedites the completion of tasks related to the user's current context.
preview-image: preview-images/context-drawer.svg
status: stable
resource: true
last-modified: 2019-02-18
helix-ui-css: false
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

Use a context drawer in the following scenarios:

- To create items related to the item the user is viewing. For example, when the user troubleshoots a device, use the drawer to create a support ticket, so that the user can stay in the context of the device.
- To view details of an associated item. For example, when a user is managing a server, use the drawer to see details of a specific ticket for that server, without taking the user out of the context of the server.
- To update child items that belong to the item the user is managing. For example, when the user is managing a firewall, use the drawer for the user to update firewall policies.

Do not use a context drawer in the following scenarios:

- For highly complex workflows. For example, do not use the drawer to create a cloud server, load balancer, Hadoop® cluster, or other
complex objects. These types of objects require a standalone page to help the user feel more comfortable and focused when making configuration choices.
- To create objects from a primary hub or view a list resources. For example, do not use the drawer to create a server from the main list of servers.
- Providing help content. At this time, we strongly recommend not using the drawer for injecting help content into the user interface (UI). Users might need access to help content while completing a form in the drawer, and switching between the help drawer and the form drawer was problematic in testing.
- To display marketing materials.
- For confirmation or acknowledgement prompts. For example, do not use the drawer as a prompt to accept a license agreement or to confirm the deletion of objects.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a context drawer:

- When the drawer is used to complete an action, such as creating a support ticket, match the drawer title with the action the user is taking.
- Avoid using generic button labels, such as **Submit**, or **Save**, for the submit button. The submit button label must always represent the completion of the action.
- When the drawer is used to view details of an object, such as a ticket, the drawer title must reflect the object the user is viewing.
- When truncation is needed, use middle-truncation to preserve the first and last characters of the string because they are often the most important. Use standard end-truncation as a fallback. See [Text Conventions]({{site.baseurl}}/style/punctuation.html#ellipses) for more information about truncation.
- Choose the best drawer size for your content and test your implementation to ensure your content looks good at each breakpoint.
- Be sure to consider the content that the drawer will cover up. If the drawer covers up the most meaningful content, consider using a smaller drawer or a standalone form page.
- Do not over-use the drawer, making it a catch-all, junk drawer. Sometimes, workflows need their own page, especially when they’re significantly complex.
- When the drawer is on-screen, users can scroll page content, but the scrollbar should not be visible. This practice allows the drawer body to scroll if needed, without confusing the user with two visible scroll bars.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Use the following specifications when you construct a context drawer.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A context drawer contains the following elements:

- **Container (required)**: The container establishes the size of the context drawer. See [Sizes]({{page.url}}/#sizes) for details about available drawer widths.
- **Header (required)**: The header includes the title and the close button.
- **Title (required)**: Write the drawer title to help the user understand the purpose of the drawer and the actions the user can take.
- **Close button (required)**: The user can click the **Close** button to dismiss the drawer.
- **Body (required)**: The body contains the primary content associated with the drawer.
- **Footer (optional)**: The footer is optional and usually contains call-to-action (CTA) buttons.
- **Button set (required)**: Buttons belong to a button set that provide the user with one or more actions.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer composition"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-composition.png" width="566"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a context drawer.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer style"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-style.png" width="671"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Spacing

Use the following spacing guidelines when you construct a context drawer.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Container

The context drawer header and footer feature has 12px square inset spacing, and the body has 20px square inset spacing.

As with other containers in Helix, you can set the drawer body square inset spacing to zero when its main content is a table, so that the table rows can fill the width of the drawer.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer container spacing"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-spacing.png" width="464"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Position

The top edge of the drawer must be flush with the bottom edge of the navigation header. If the navigation header scrolls out of view, the top of the drawer must extend to the top of the browser window.

The right edge of the drawer must be flush with the right side of the browser window.

The bottom edge of the drawer can overlay the footer when the footer scrolls into view.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer position"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-position.png" width="675"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Footer behavior

The vertical height of the content determines the height of the drawer body.

If the drawer content pushes the drawer footer to the bottom edge of the screen, then the footer must be fixed there, and the drawer body must scroll.

This alignment allows the submit controls to remain close to the form content for a more intuitive form interaction, while also accounting for shorter viewport heights.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer footer behavior"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-footer-behavior.png" width="676"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Sizes

The context drawer features three available widths. Choose the best drawer size for your content.

The drawer is responsive, and its width adjusts by increments of 2rem per breakpoint. At the smallest breakpoint, the drawer automatically fills 90% of the browser width, regardless of the drawer size.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer sizes"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-sizes.png" width="637"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

### Animation

Use these animation guidelines when you construct a context drawer.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Easing

The side drawer remains off-screen until triggered by an action initiated by the user from the main content area.

When triggered, the drawer immediately starts loading its contents and animates into view.

When the drawer slides into view, it uses ease-out animation, which means that the drawer comes in fast and slows down as it reaches its stopping point.

When the drawer slides out of view, it uses ease-in animation, which means that the drawer starts moving slowly and picks up speed as it moves off screen.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer easing animation"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-animation-easing.png" width="675"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

#### Duration

Duration is the amount of time the drawer takes to animate from off-stage to on-stage, and from on-stage to off-stage.

Each drawer size has a unique animation duration so that the visual weight and movement looks natural.

The drawer slides out twice as fast as it slides in because the closing animation requires less user focus than does the user’s next task.

**Animating into view**

To calculate animation duration for sliding the drawer into view, use the following formula:

*SlideInDuration = (DrawerWidthPX * 0.8)/1000*

For example, at the extra-large breakpoint, the medium width drawer is 512px wide. The slide in duration is calculated as:

*(512 * 0.8)/1000 = 0.4096 seconds*

**Animating out of view**

The animation duration to slide out is calculated as follows:

*SlideOutDuration = SlideInDuration/2*

For example, at the extra-large breakpoint, the medium width drawer is 512px wide. The slide out duration is calculated as:

*((512 * 0.8)/1000)/2 = 0.2048 seconds*

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

<video controls loop autoplay>
  <source src="{{site.url}}/assets/images/components/content-areas/context-drawer/context-drawer-animation-duration.webm" type="video/webm" codecs="vp8, vorbis">
  Your browser does not support HTML5 video.
</video>

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A context drawer can exist in the following states: **loading**, **failure to load**, **form submission**, **validation error**, **application error**, and **success**.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

In scenarios where the content of the drawer must be loaded, the drawer begins the loading process immediately after being triggered by the  user.

Show the loading spinner centered horizontally and vertically within the body of the drawer.

Hide the footer until the contents loads.

When the content has loaded, hide the spinner and show the footer if there is one.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer loading state"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-states-loading.png" width="436"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Failure to load

Show a failure message with an error icon when the drawer content fails to load, or when the call to the back-end system times out.

Place a tertiary button that contains the redo icon under the error message so that the user can retry loading the content.

Vertically and horizontally center the  error message and retry button within the body of the drawer.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer failure to load state"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-states-failure-to-load.png" width="436"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Form submission

Validation must occur when the user clicks the **Submit** button.

When the form is submitted, disable the **Submit** button and show the loading indicator inside of it. The loading indicator indicates to the user that processing is happening.

Do not slide the drawer out of view until validation is successfully completed and the back-end system has communicated receipt of the requested action. Waiting for this communication allows the drawer to present any error messages.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer form submission state"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-states-form-submission.png" width="436"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Validation error

Show the error alert bar in the drawer header, and not in the drawer body, so that the alert message does not scroll out of view.

The alert bar must be flush against the left, right, and bottom edges of the header container, with 8px of vertical space between the drawer title and the alert bar.

Follow standard form error styles for any invalid inputs that exist in the drawer body.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer validation error"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-states-validation-error.png" width="436"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Application error

When an error occurs in the application, show a brief error message in the footer of the drawer, above the submit controls. Use 16px of vertical space between the error message and the top of the button set.

Do not use an alert bar message above the form in this scenario because the error connects to the submit action and not the form content.

Close proximity of the error message to the submit controls increases comprehension and makes the user's next steps clearer.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer application error"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-states-application-error.png" width="436"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Success

After the user has successfully submitted the form and the drawer has animated off screen, complete the feedback loop by showing a toast message indicating that the submit action was successful.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Context drawer success"] [class:"image bg-light border"] %}
<embed src="{{site.baseurl}}/assets/images/components/content-areas/context-drawer/context-drawer-states-success.png" width="677"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
