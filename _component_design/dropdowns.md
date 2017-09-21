---
title: Drop-downs
parent: Inputs and Controls
layout: component
category: Components
usage: |
  Helix controls allow users to select options in a variety of ways including
  radio buttons, checkboxes, switches and more.
preview-image: components/preview-selectors.svg
resource: true
status: in-progress
need: selectors
last-modified: 2017-09-21
---

{% include toc.html %}

# Drop-down fields

Drop-downs are a core input mechanism for form and are used to imply and offer
options or actions.

{% figure [caption:"A generic tab"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-hero.svg){:width="80%"}
 {% endfigure %}

### When to use

Drop-downs are used when a user is required to select a single option from
a known list of options. For example, selecting a region on the
Rackspace Cloud server create form will provide the following options:

* Chicago
* Dallas
* Hong Kong
* London
* Virginia

### Best practice

* Applying the disabled state to any options that are not currently available to
  the user.
* Keeping the drop-down pattern to a set of items that are easily parsable by a
  user. While there is not a hard rule here for an upperbounds limit of items
  to include a drop-down, once a drop-down data set exceeds 10 items it should
  be looked at to determine if it could be streamlined.
* Keeping the drop-down label viewable through all states of the dropdown. This
  ensures users remember what label prompted the data set they are viewing.

### Basic information

.. REQUIRES IMAGE

### Sub-patterns

... REQUIRES IMAGE
