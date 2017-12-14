---
title: Status Labels
parent: Notifications
layout: component
category: Components
usage: >
    Status labels are wide tags that include short, brief, and helpful text communication regarding the progress of our users' accounts.
status: stable
resource: true
preview-image: preview-images/status-labels.svg
last-modified: 2017-12-01
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

## Introduction

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use
Use status labels to communicate the current state of an object or process, such as the status of a support ticket or the current health of a device.

### Best Practices

- To reduce visual noise when using in a table or list, label width should be fixed at the width that best accomodates the longest label with a minimum padding of 8px. 
- Adhere to a recommended max character limit of 20 characters.
- Use color and stroke versus fill to control how much attention a given status label commands.
- Do not use other colors from the Helix color palette.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Status label within the CTUI project"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-hero.png){:width="1440px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>


## Specifications

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default layout

Status labels are wide tags that include short, brief, and helpful text communication regarding the progress of our users' business.

Status labels use a 100% rounded border radius and a neutral or alert color strategy, which differs from default buttons and links.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A default status label specification"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-default.png){:width="499px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Emphasis

The status label is used to communicate the status of an object or process. You can emphasize or de-emphasize that status data within a UI by modifying the stroke and fill or color property on a status label.

#### Stroke versus fill

- Applying stroke only to a status label de-emphasizes the content while using fill emphasizes the content. 
- Use all-stroke only status labels when the information contained within is not the most important information on the screen.
- Conversely, use an all-filled status label variation when the information is of high importance on the screen.
- If you are using an all-stroke system, you may use fill for a status if you want to draw attention to that status in particular.

#### Color

- Using subdued gray de-emphasizes a status while using emphasis gray or emphasis purple emphasizes a status. 
- Only use emphasis gray to highlight important, but not critical, statuses.
- Only use emphasis purple for a status that is critical for a user to notice.
- Do not use any other color for your status labels unless you are communicating system or device health, in which case use a health status label.
- On dark backgrounds, lighter or subdued colors will draw more attention than darker colors.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Emphasize and de-emphasize statuses within your system using stroke versus fill and color."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-variations.png){:width="499px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<!-- Section is commented out as the following designs are not finalized

## Variations

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Health status labels

Use Health Status Labels when describing the health of a system or device or when communicating a discrete severity level.
not meet the following criteria, do not use Health Status Labels.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example: Monitoring Status Labels could be used within Encore for 3rd party cloud"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-variations.png){:width="499px"}
{% endfigure %}
{% endcolumn %}
</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Alternate status labels

Alternatively, use Status Labels that include dot monitoring indicators with legacy and dark interfaces where this might be more appropriate.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example: Monitoring Status Labels could be used within Encore for 3rd party cloud"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-variations.png){:width="499px"}
{% endfigure %}
{% endcolumn %}
</div>

</section> -->