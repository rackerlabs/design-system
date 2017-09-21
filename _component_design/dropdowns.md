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

## When to use drop-downs

Drop-downs are used when a user is required to select a single option from
a known list of options. For example, selecting a region on the
Rackspace Cloud server create form will provide the following options:

* Chicago
* Dallas
* Hong Kong
* London
* Virginia

## Best practice for drop-downs

* Applying the disabled state to any options that are not currently available to
  the user.
* Keeping the drop-down pattern to a set of items that are easily parsable by a
  user. While there is not a hard rule here for an upperbounds limit of items
  to include a drop-down, once a drop-down data set exceeds 10 items it should
  be looked at to determine if it could be streamlined.
* Keeping the drop-down label viewable through all states of the dropdown. This
  ensures users remember what label prompted the data set they are viewing.

# Specifications

## Default layout

Drop-downs

{% figure [caption:"Default layout"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-default-layout.svg){:width="80%"}
 {% endfigure %}

## Drop-down states

Drop-downs can be in the following states:

* Default
* Disabled
* Focus
* Error

{% figure [caption:"When you need to describe an image in greater detail, use this block
 of text so that you can keep the left area clutter-free. 3 lines or less."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-states.svg){:width="80%"}
 {% endfigure %}

## Option label

Clicking a drop-down menu displays the options contained within the dropdown.

{% figure [caption:"When you need to describe an image in greater detail, use this
 block of text so that you can keep the left area clutter-free. 3 lines or less."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-option-label.svg){:width="80%"}
 {% endfigure %}

## Drop-down data states

Once a drop-down menu is expanded, the options contained within have four
states:

* Default
* Hovered
* Selected
* Selected and hovered

{% figure [caption:"When you need to describe an image in greater detail, use this
 block of text so that you can keep the left area clutter-free. 3 lines or less."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-data-states.svg){:width="80%"}
 {% endfigure %}
