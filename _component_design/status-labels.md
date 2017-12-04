---
title: Status Indicators
parent: Notifications
layout: component
category: Components
usage: >
    Status Labels are wide tags that include short, brief, and helpful text communication regarding the progress of our users accounts.
status: stable
resource: true
preview-image: preview-images/status-labels.svg
last-modified: 2017-12-01
helix-ui-css: true
helix-ui-javascript: false
---

{% include toc.html %}

## Introduction

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use
Use status labels to communicate the current state of an object or process. For example, to communicate the status of a support ticket, or current health of a device.

### Best Practices

- To reduce visual noise when using in a table or list, label width should be fixed at the width that best accomodates the longest label with a minimum padding of 8px. 
- Adhere to a recommended max character limit of 20 characters.
- Use color and stroke vs fill to control how much attention a given status label commands.
- Do not use other colors from the Helix color palette.


{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Status label within the CTUI project"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-hero.png){:width="1440px"}
{% endfigure %}
{% endcolumn %}
</div>


## Specifications

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Default layout

Status labels are wide tags that include short, brief, and helpful text communication regarding the progress of our users business.

Status labels differentiate themselves from buttons and links by utilizing 100% rounded border radius, in addition to, neutral or alert color strategy which differs from our default buttons and links.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"A default status label specification"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-default.png){:width="499px"}
{% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow"  markdown="1">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### Variations

Status labels come in the following variations:

- **Subdued**: Use when...
- **Default**: Use when...
- **Emphasis gray**: Use when...
- **Emphasis purple**: Use when...

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Variations of the status label pattern"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/notifications/status-labels/status-labels-variations.png){:width="499px"}
{% endfigure %}
{% endcolumn %}
</div>
