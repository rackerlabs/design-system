---
title: Checkboxes
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
last-modified: 2017-08-17
---

{% include toc.html %}

# Checkboxes

Checkboxes are used to change settings or bulk item selection. Checkboxes
allow the user to select zero, one, or several items.

{% figure [caption:"Default image"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/checkboxes/checkbox-hero-image.svg){:width="80%"}
 {% endfigure %}

## When to use checkboxes

* Using a checkable input to allows the user to select any number of options;
  including zero, one, or several.
* Use when selecting multiple items from a set, it is important for the
  user to view all options at once. If viewing items side-by-side is not
  important, consider a drop-down as it uses less space.
* A stand-alone checkbox is used for a single option that the user can
  turn on or off.
* If there are multiple choices and only one option can be selected, a
  radio button or drop-down list should be used.

## Best practices for checkboxes

* Each input is independent of all other input in the list and checking one
  box does not uncheck the others.
* A singular input may be used to enable or disable a feature, or it
  may be used in place of two yes and no radio buttons.
* Use checkboxes and radio buttons only to change settings, not as action
  buttons that trigger another process or workflow.
* In most cases, checkboxes default to having none of the options
  selected. However, if Rackspace has a recommended choice, that may be
  used as the default.

### Labeling checkboxes

* Use positive and active wording for checkbox labels. Avoid negations such
  as, "Don't send me more email". This would mean that the user would have
  to check the box in order for something not to happen.
* Write checkbox labels so that users know both what will happen if they
  check a particular box, and what will happen if they leave it unchecked.
  If you are unable to do this, we recommend using two radio buttons: one
  for having the feature on, and one for having it off. Ensure you write
  clear labels for each of the two cases.

### Presentation for checkboxes

* If possible, use checkboxes rather than multi-select drop-down menus.
  Checkboxes have lower cognitive load because they make all options
  permanently visible so that users can easily compare them. Checkboxes
  are also easier to operate for users who have difficulty making precise
  mouse movements. Limited space might sometimes force you to violate this
  guideline, but do try to keep choices visible whenever possible.

### Interaction with checkboxes

* Let users select an option by clicking on either the button or box itself, or
  its label; a bigger target is faster to click.

## Problems solved by checkboxes

* When a user needs to make a selection in a form:
  * A checkbox list enables them to select one or more items while being
    able to visually compare them all at once.
  * A singular checkbox enables them to enable or disable a feature.
* When a user needs to manage a group of items:
  * Checkboxes may be added to a list to allow for bulk actions.

# Specifications

## Default layout

A checkbox group consists of a Section Label, followed pairs of checkboxes and checkbox labels.

{% figure [caption:"Checkbox group composition and specifications"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/checkboxes/checkbox-default.svg){:width="80%"}
 {% endfigure %}

## Checkbox group specifications

* Visually present groups of choices as groups, and clearly separates the
  choices from other groups on the same page.
* Use sub-heads to break up a long list of checkboxes into logical groups.
  This makes the choices faster to scan and easier to understand. The risk
  is that users might view each sub-group as a separate set of options, but
  this is not necessarily fatal for checkboxes, each box is an independent
  choice anyway.
* Lay out your lists vertically, with one choice per line. If you must use a
  horizontal layout, consider using a checkbox button group instead.

{% figure [caption:"Checkbox group spacing"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/checkboxes/checkbox-group-image.svg){:width="80%"}
 {% endfigure %}

## States

Checkbox states include the following:

* Selected
* De-selected
* Indeterminate

{% figure [caption:"Checkbox states"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/checkboxes/checkbox-states-image.svg){:width="80%"}
 {% endfigure %}

## Required group

A red asterisk may be used to designate that a selection is required for a
group of checkboxes.
The label should remain in its natural vertical alignment. The asterisk
position floats to the left not in the vertical alignment with the text.
Asterisk floats in the margin.

{% figure [caption:"Designating a requied checkbox field"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/checkboxes/checkbox-required-group-image.svg){:width="80%"}
 {% endfigure %}

## Group with an error

In the case of an error, always include an error message below the checkbox
group. Only highlight the input that must be changed. For example, don’t
highlight all checkboxes in an error group.

{% figure [caption:"Error states"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/checkboxes/checkbox-group-with-error-image.svg){:width="80%"}
 {% endfigure %}

## Indeterminate

The indeterminate state is only used with bulk selections to indicate that one
or more, but not all options, have been selected. Refer to the tables page
for more information.

{% figure [caption:"When selecting multiple items from a table, an indeterminate
 checkbox may be used to show that several, but not all are selected."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/checkboxes/checkbox-indeterminate-image.svg){:width="80%"}
 {% endfigure %}
 