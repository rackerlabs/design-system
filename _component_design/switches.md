---
title: Switches
parent: null
layout: component
category: Components
usage: |
  Helix controls allow users to select options in a variety of ways including
  radio buttons, checkboxes, switches and more.
preview-image: components/preview-selectors.svg
resource: true
need: selectors
status: in-progress
last-modified: 2017-08-17
---

{% include toc.html %}

<!--{% include todo.html content="Update focus states, expand on inline validation, and improve
keyboard accessibility." %}-->

The switch should only be used in **mobile** designs. Enabling preferences or
settings is a prime use case for this component. The switch can be used with or
without text, depending on the context provided in the switch label. If more
complex text is needed in the switch than yes/no or on/off, use a **toggle**.

## Default

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/selectors-switch.png){:width="30%"}
{% endfigure %}

<!--<div class="ui segments">
  <div class="ui segment">
    <div class="ui form">
      ### Enabled
      <div class="inline field">
        <div class="ui toggle checkbox">
          <input type="checkbox" name="public">
          <label>Without text</label>
        </div>
      </div>
      <div class="inline field">
        <div class="ui toggle checkbox">
          <input type="checkbox" name="public">
          <label>With text (on/off)</label>
        </div>
      </div>
      <div class="inline field">
        <div class="ui toggle checkbox">
          <input type="checkbox" name="public">
          <label>With text (yes/no)</label>
        </div>
      </div>
    </div>
  </div>
  <div class="ui segment">
    ### Disabled
    <div class="inline field">
      <div class="ui toggle checkbox">
        <input type="checkbox" name="public" disabled="disabled">
        <label>With text (on/off)</label>
      </div>
    </div>
  </div>
  <div class="ui segment">
    ### Error
    <div class="inline field">
      <div class="ui toggle checkbox">
        <input type="checkbox" name="public" disabled="disabled">
        <label>With text (on/off)</label>
      </div>
    </div>
  </div>
</div>-->



<!--
  <a class="anchor" name="cascade-selector"></a>
  #Cascade Selector
  <p class="update">
    <a href="https://jira.rax.io/browse/RED-768">JIRA</a><br>
    EAG: This isn't used broadly enough to make a pattern yet.

  <p class="update">Do we want to use <a href="https://jira.rax.io/secure/attachment/70337/Cascade%20Selector%20-%20Complete.pdf">this doc</a>? I can't find the original to break it out into images and text.
-->
