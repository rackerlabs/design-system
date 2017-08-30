---
title: Text Inputs
parent: Inputs and Controls
layout: component
category: Components
usage: |
  Helix provides a variety of text inputs to allow users to enter information
  into a page.
preview-image: components/preview-fields.svg
resource: true
status: unknown
---

{% include toc.html %}

# Text Field

Text fields are generally found in forms. The type of text field determines
which characters are allowed within it. For example, a user shouldn't be able
to enter a letter into a phone number field. When the user is entering a name
or proper noun, the first letter should automatically be capitalized when
typed.

If the content is longer than the width of the text field, automatically scroll
the content left as the user continues to type. Consider using a text area if
this is expected to happen frequently in a specific text field.

## Enabled

<div class="ui form">
  <div class="field required">
    <label>Required field</label>
    <input type="text" placeholder="This is placeholder text">
  </div>
  <div class="field">
    <label>Field with subtext</label>
    <input type="text" placeholder="This is placeholder text">
    <div class="ui message subtext">
    <p>This is some subtext.</p>
    </div>
  </div>
  <div class="field">
    <label>Prefix or suffix</label>
    <div class="ui right labeled input">
      <div class="ui label">$</div>
      <input type="text" placeholder="Amount">
      <div class="ui basic label">.00</div>
    </div>
  </div>
  <div class="field">
    <label>With icon left</label>
    <div class="ui left icon input">
      <input type="text" placeholder="Search">
      <i class="search icon"></i>
    </div>
  </div>
  <div class="field required">
    <label>Password</label>
    <input type="password" value="password">
  </div>
</div>

<!-- Submitting Type Ahead as a separate story
        <div class="formGroup">
          <div class="formLabel">Type Ahead</div>
          <div class="formComponant">
            <div class="ui-widget">
              <input id="tags" type="text">
            </div>
          </div>
        </div>

        <div class="formGroup">
          <div class="formLabel">Type Ahead Multiple Values</div>
          <div class="formComponant">
            <div class="ui-widget">
              <input id="tags-multi" type="text">
            </div>
          </div>
        </div>
-->

## Disabled

<div class="ui form">
  <div class="disabled field">
    <label>Disabled with value</label>
    <input type="text" value="Value text" disabled>
  </div>
  <div class="disabled field">
    <label>Disabled with placeholder text</label>
    <input type="text" placeholder="Placeholder text" disabled="disabled">
  </div>
</div>

## Completed
<div class="ui form success">
  <div class="field">
    <label>Complete form field</label>
    <input type="text" value="Value text">
    <div class="ui success message icon">
      <i class="check circle icon"></i>
    </div>
  </div>
</div>

## Error

<div class="ui form error">
  <div class="field error">
    <label>Error with value</label>
    <input type="text" value="Value text">
    <div class="ui error message">
      <p>There is an error with the response to this question.</p>
    </div>
  </div>
  <div class="field required error">
    <label>Error with placeholder text</label>
    <input type="text" placeholder="Required">
    <div class="ui error message">
      <p>There is an error with the response to this question.</p>
    </div>
    <div class="ui error message icon">
      <i class="warning circle icon"></i>
    </div>
  </div>
  <div class="field error">
    <label>Error with icon</label>
    <input type="text" value="Value text">
    <div class="ui error message">
      <p>There is an error with the response to this question.</p>
    </div>
  </div>
</div>

# Textarea

## Enabled

<div class="ui form">
  <div class="field">
    <label>Textarea with placeholder text</label>
    <textarea placeholder="This is placeholder text"></textarea>
  </div>
  <div class="field">
    <label>The final countdown</label>
    <textarea maxlength="50" id="textarea"></textarea>
    <div class="ui message subtext right">
      <p id="textarea_feedback">50 characters remaining</p>
    </div>
  </div>
</div>

## Disabled

<div class="ui form">
  <div class="disabled field">
    <label>Textarea with placeholder text</label>
    <textarea placeholder="This is placeholder text">When I see birches bend to left and right across the lines of straighter darker trees, I like to think some boy's been swinging them. But swinging doesn't bend them down to stay as ice-storms do.</textarea>
  </div>
</div>

## Error

<div class="ui form error">
  <div class="field error">
    <label>Textarea with placeholder text</label>
    <textarea placeholder="This is placeholder text">Often you must have seen them loaded with ice a sunny winter morning after a rain. They click upon themselves as the breeze rises, and turn many-colored as the stir cracks and crazes their enamel.</textarea>
    <div class="ui error message">
      <p>There is an error with the response to this question.</p>
    </div>
  </div>
</div>

<!-- Eliminating until we have a more detailed form layout


# Fieldset
  <div class="ui segments">
    <div class="ui segment">
      <div class="ui form">
        <div class="field">
          <label>Field One</label>
          <input type="text">
        </div>
        <div class="field">
          <label>Field Two</label>
          <input type="text">
        </div>
        <div class="field">
          <label>Field Three</label>
          <input type="text">
        </div>
      </div>
    </div>
  </div>
 -->
