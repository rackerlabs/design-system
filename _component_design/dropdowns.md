---
title: Dropdowns
parent: Inputs and Controls
layout: component
category: Components
usage: |
  Helix controls allow users to select options in a variety of ways including
  radio buttons, checkboxes, switches and more.
preview-image: components/preview-selectors.svg
resource: true
need: selectors
---

{% include inprogress.html %}

{% include todo.html content="Update style and add additional examples" %}

Use the simple selector when choosing from a limited number of options. Use the
complex selectorif more than 10-12 options need to displayed.
Always use the complex selector for devices. Be mindful of the length
of each option. Additional context can't be given on an option-by-option basis.
If you require further context, consider radio buttons or checkboxes with subtext.
Alphabetize options unless there is a strong use case for an alternative
organization.

## Enabled

<div class="UI form">
  <div class="field">
    <label>Contact</label>
    <select class="UI dropdown">
      <option value="">Make a selection</option>
      <option value="Bart">Bart Renner</option>
      <option value="Carmen">Carmen Broomes</option>
      <option value="Elizabeth">Elizabeth Grotheus</option>
      <option value="Eric">Eric Weidner</option>
      <option value="Lane">Lane Fielder</option>
      <option value="Mikey">Mikey Hougland</option>
      <option value="Tommy">Tommy Shook</option>
      <option value="Ty">Ty Taylor</option>
    </select>
  </div>
</div>

## Disabled
<div class="UI form">
  <div class="field">
    <label>Contact</label>
    <select class="UI dropdown disabled" disabled>
      <option value="">Make a selection</option>
      <option value="Bart">Bart Renner</option>
      <option value="Carmen">Carmen Broomes</option>
      <option value="Elizabeth">Elizabeth Grotheus</option>
      <option value="Eric">Eric Weidner</option>
      <option value="Lane">Lane Fielder</option>
      <option value="Mikey">Mikey Hougland</option>
      <option value="Tommy">Tommy Shook</option>
      <option value="Ty">Ty Taylor</option>
    </select>
  </div>
</div>

## Error

<div class="UI form error">
  <div class="field error">
    <label>Contact</label>
    <select class="UI dropdown">
      <option value="">Make a selection</option>
      <option value="Bart">Bart Renner</option>
      <option value="Carmen">Carmen Broomes</option>
      <option value="Elizabeth">Elizabeth Grotheus</option>
      <option value="Eric">Eric Weidner</option>
      <option value="Lane">Lane Fielder</option>
      <option value="Mikey">Mikey Hougland</option>
      <option value="Tommy">Tommy Shook</option>
      <option value="Ty">Ty Taylor</option>
    </select>
    <div class="UI error message">
      There is an error with the response to this question.
    </div>
  </div>
</div>

## Multiple select

<div class="UI form">
  <div class="field">
    <label>Contact</label>
    <select multiple="" class="UI dropdown">
      <option value="">Make a selection</option>
      <option value="Bart">Bart Renner</option>
      <option value="Carmen">Carmen Broomes</option>
      <option value="Elizabeth">Elizabeth Grotheus</option>
      <option value="Eric">Eric Weidner</option>
      <option value="Lane">Lane Fielder</option>
      <option value="Mikey">Mikey Hougland</option>
      <option value="Tommy">Tommy Shook</option>
      <option value="Ty">Ty Taylor</option>
    </select>
  </div>
</div>

## Type ahead select

<div class="UI form">
  <div class="field">
    <div class="UI fluid search selection dropdown">
      <input type="hidden" name="state">
      <i class="dropdown icon"></i>
      <div class="default text">State</div>
      <div class="menu">
        <div class="item" data-value="">State</div>
        <div class="item" data-value="AL">Alabama</div>
        <div class="item" data-value="AK">Alaska</div>
        <div class="item" data-value="AZ">Arizona</div>
        <div class="item" data-value="AR">Arkansas</div>
        <div class="item" data-value="CA">California</div>
        <!-- Saving your scroll sanity !-->
        <div class="item" data-value="OH">Ohio</div>
        <div class="item" data-value="OK">Oklahoma</div>
        <div class="item" data-value="OR">Oregon</div>
        <div class="item" data-value="PA">Pennsylvania</div>
        <div class="item" data-value="RI">Rhode Island</div>
        <div class="item" data-value="SC">South Carolina</div>
        <div class="item" data-value="SD">South Dakota</div>
        <div class="item" data-value="TN">Tennessee</div>
        <div class="item" data-value="TX">Texas</div>
        <div class="item" data-value="UT">Utah</div>
        <div class="item" data-value="VT">Vermont</div>
        <div class="item" data-value="VA">Virginia</div>
        <div class="item" data-value="WA">Washington</div>
        <div class="item" data-value="WV">West Virginia</div>
        <div class="item" data-value="WI">Wisconsin</div>
        <div class="item" data-value="WY">Wyoming</div>
      </div>
    </div>
  </div>
</div>

## Type ahead multiple select

<div class="UI form">
  <div class="field">
    <select class="UI fluid search dropdown" multiple="">
      <option value="">State(s)</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <!-- Saving your scroll sanity !-->
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
  </div>
</div>
