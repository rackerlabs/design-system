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
Use status labels to communicate the current state of an object or process. For example, when expressing the status of a support ticket.

### Best Practices

- To reduce visual noise in tables or lists, use a fixed width that accommodates the longest status text.
- Adhere to a recommended max character limit of 20 characters.
- Use lighter colors and outline styles for most statuses, and use darker colors and fills for highly urgent or important statuses.
- Do not use other colors from the Helix color palette.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Status label used to displayed a ticket status"] [class:"image bg-light border"] %}
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

You can emphasize or de-emphasize status data by modifying color and choosing stroke or fill on status labels.

#### Stroke versus fill

- Use outlined style to de-emphasizes the content and use fill to emphasize it.
- Use outlined style when the information contained within is not the most important information on the screen.
- Use filled style status labels when the information is of high importance.


#### Color

- Only use emphasis gray to highlight important, but not critical, statuses.
- Only use emphasis purple for a status that is critical for a user to notice.
- Do not use any other color for your status labels unless you are communicating system or device health, in which case use a health status label.=
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