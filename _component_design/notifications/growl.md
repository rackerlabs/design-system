---
title: Growl
parent: Notifications
layout: component
category: Components
usage: These tooltips provide users with additional information while completing tasks and alert them to new features.
preview-image: components/preview-help.svg
status: deprecated
resource: false
---

# Growl {% include inprogress.html %}

Growls should be used to communicate a completed action to a user.

## Design Considerations

### Problems Being Addressed

- The user needs to be notified about the results of a certain task she explicitly asked the system to perform
- The user needs to be notified about an unprovoked event that is important enough to steal the user’s attention

### How the Pattern Solves these Problems

- Growls catch the user’s attention through vibrant color and animation

### Known Shortcomings

- Growls are ephemeral and may be missed by the user entirely

## Design Specifications

### General Layout

- Growls should always appear in the bottom right corner
- Growl animation ease-in .5s
- Growls should not contain links, as they are ephemeral and the user may miss the link
- A close icon should be included in the top right corner. While the growl should disappear on its own, the user should also have the ability to close it.

<div class="ui segments">
  <div class="ui segment">
    <img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/growl-specs.svg">
  </div>
  <div class="ui segment">
    <img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/components/growl-placement.svg">
  </div>
</div>

## Base Interactions

### Hover

Growls do not have a hover state, as you can not take action on it.

### Active

Growls do not have a hover state, as you can not take action on it.

### Disabled

A growl should never be disabled. If it can’t be read it shouldn’t be displayed.

### Selected

The growl does not have a selected state, as you can not take action on it.

## Default State / First Time Experience

This is essentially the only state of a growl. There isn’t a FTX for a growl.

## One Item

One item is a perfect use case for a growl.

## Some Items

If multiple growls are being used at one time they should be stacked on top of each other.

## States that don’t apply to this pattern

- Loading / Processing:  Growls don’t have a loading pattern. If it’s still loading it should not exist on the page.
- No Items:  Growls should not be used without content.
- Tons of Items:  Notifications should not be used with tons of items. They should be brief and
limited to one item per page.
- Error State:  In case of an error, the Growl should be hidden.
- Corrected State:  Growls should not be used for user input.
- Completed State:  Growls should not be used for user input.

## Implementation

### Guidelines for Use

Use for:

- Feedback messages
- Unprovoked events
- Changes in system status

Do not use for:

- Product or feature announcements (consider the Beacon pattern)
- Alerts that may need to be read more than once
