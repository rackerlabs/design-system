---
title: Radio Buttons
parent: Inputs and Controls
layout: component
category: Components
usage: >
  Radio buttons are used when the user is only allowed to select one option from a list. A minimum of one choice is required, and one is preselected by default.
preview-image: preview-images/radio-buttons.svg
resource: true
status: in-progress
need: selectors
last-modified: 2017-08-17
---

{% include toc.html %}

<!--{% include todo.html content="Update focus states, expand on inline validation,
and improve keyboard accessibility." %}-->

# Radio Buttons

Use when selecting a **single item** from a set it's important for the user to
see all options at once. If viewing items side-by-side isn't important,
consider a selector, which uses less space.

<div class="hxRow">
{% column left:"hxCol" %}
## Enabled

<div class="ui form">
  <div class="grouped fields">
    <label>Select an option</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="radio1" checked="checked">
        <label>Option 1</label>
        <div class="ui message subtext">
          This is some subtext.
        </div>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="radio1">
        <label>Option 2</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="radio1">
        <label>Option 3</label>
      </div>
    </div>
  </div>
</div>

{% endcolumn %}
{% column left:"hxCol" %}

## Disabled

<div class="ui form">
  <div class="grouped fields">
    <label>Select an option</label>
    <div class="field disabled">
      <div class="ui radio checkbox">
        <input type="radio" name="radio2" checked="checked" disabled="disabled">
        <label>Option 1</label>
      </div>
    </div>
    <div class="field disabled">
      <div class="ui radio checkbox">
        <input type="radio" name="radio2" disabled="disabled">
        <label>Option 2</label>
      </div>
    </div>
    <div class="field disabled">
      <div class="ui radio checkbox">
        <input type="radio" name="radio2" disabled="disabled">
        <label>Option 3</label>
      </div>
    </div>
  </div>
</div>

{% endcolumn %}
{% column right:"hxCol" %}

## Error

<div class="ui form error">
  <div class="grouped fields required">
    <label>Select an option</label>
    <div class="field error checked">
      <div class="ui radio checkbox">
        <input type="radio" name="radio3" check="checked">
        <label>Option 1</label>
      </div>
    </div>
    <div class="field error">
      <div class="ui radio checkbox">
        <input type="radio" name="radio3">
        <label>Option 2</label>
      </div>
    </div>
    <div class="field error">
      <div class="ui radio checkbox">
        <input type="radio" name="radio3">
        <label>Option 3</label>
      </div>
    </div>
  </div>
  <div class="ui error message">
    There is an error with the response to this question.
  </div>
</div>
{% endcolumn %}
</div>

# Radio Button Group

Use when selecting a **single item** from a set if it's important for the user
to see all options at once. This alternate can be used instead of regular radio
buttons if the options are **simple**, limited in number and individual length.

## Enabled

<div class="ui form">
  <div class="field">
    <label>Select potential maintenance days</label>
    <div class="ui buttons single">
      <button class="ui button ds-btn-med-sec active">Mon</button><button class="ui button ds-btn-med-sec">Tues</button><button class="ui button ds-btn-med-sec">Wed</button><button class="ui button ds-btn-med-sec">Thurs</button><button class="ui button ds-btn-med-sec">Fri</button><button class="ui button ds-btn-med-sec">Sat</button><button class="ui button ds-btn-med-sec">Sun</button>
    </div>
    <div class="ui message subtext">
      Here is some additional help text to explain these choices.
    </div>
  </div>
</div>

## Disabled

<div class="ui form">
  <div class="field">
    <label>Select payment type</label>
    <div class="ui buttons single">
      <button class="ui button ds-btn-med-sec disabled active">Credit / Debit</button><button class="ui button ds-btn-med-sec disabled">Cash</button><button class="ui button ds-btn-med-sec disabled">Check</button>
    </div>
  </div>
</div>

## Error

<div class="ui form error">
  <div class="field error">
    <label class="required">Select potential maintenance windows</label>
    <div class="ui buttons single">
      <button class="ui button ds-btn-med-sec">12<span class="smCaps"> AM</span> &ndash; 4<span class="smCaps"> AM</span></button><button class="ui button ds-btn-med-sec error active">4<span class="smCaps"> AM</span> &ndash; 8<span class="smCaps"> AM</span></button><button class="ui button ds-btn-med-sec">8<span class="smCaps"> AM</span> &ndash; 12<span class="smCaps"> PM</span></button><button class="ui button ds-btn-med-sec">12<span class="smCaps"> PM</span> &ndash; 4<span class="smCaps"> PM</span></button><button class="ui button ds-btn-med-sec">4<span class="smCaps"> PM</span> &ndash; 8<span class="smCaps"> PM</span></button><button class="ui button ds-btn-med-sec">8<span class="smCaps"> PM</span> &ndash; 12<span class="smCaps"> AM</span></button>
    </div>
    <div class="ui error message">
      There is an error with the response to this question.
    </div>
  </div>
</div>
