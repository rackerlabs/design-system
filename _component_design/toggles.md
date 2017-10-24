---
title: Toggles
parent: Inputs and Controls
layout: component
category: Components
usage: |
  Helix controls allow users to select options in a variety of ways including
  radio buttons, checkboxes, switches and more.
preview-image: preview-images/toggles.svg
resource: false
need: selectors
status: in-progress
last-modified: 2017-10-23
---

{% include toc.html %}

Toggles should be used instead of switches for desktop design. If you need to
toggle between more than two options, see the **radio button button-group
alternate** design. Toggles should also be used on mobile devices instead of a
switch if specific labels are needed on the selector.

## Enabled

<div class="ui form">
  <div class="field">
    <div class="ui buttons single">
      <button class="ui button ds-btn-med-sec">Cloud</button>
      <button class="ui button ds-btn-med-sec active">Dedicated</button>
    </div>
  </div>
</div>

## Disabled

<div class="ui form">
  <div class="field">
    <div class="ui buttons single">
      <button class="ui button ds-btn-med-sec active disabled">Cloud</button>
      <button class="ui button ds-btn-med-sec disabled">Dedicated</button>
    </div>
  </div>
</div>

## Error
<div class="ui form error">
  <div class="field error">
    <div class="ui buttons single">
      <button class="ui button ds-btn-med-sec">Cloud</button>
      <button class="ui button ds-btn-med-sec error active">Dedicated</button>
    </div>
    <div class="ui error message">
      There is an error with the response to this question.
    </div>
  </div>
</div>
