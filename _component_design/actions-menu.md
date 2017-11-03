---
title: Actions Menu
parent: Inputs and Controls
secondary: Editing
layout: component
category: Components
usage: >
  The actions menu is used anytime a group of actions can be performed on a specific object on the current page or the current page. By grouping these actions within the actions menu, it allows users to have a single location to trigger multiple types of actions.
preview-image: preview-images/actions-menu.svg
status: stable
resource: true
last-modified: 2017-11-03
---

{% include toc.html %}

## Introduction

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

### When to use

- Actions Menus are used when to consolidate multiple related action links into a single menu. 

### When not to use

- When a table object has a limited number of actions that can be taken upon them it is best to surface these options by another means. For example if a table object can only be deleted or created it is best to surface these via table controls at the top of the table. For additional guidance see tables documentation.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example actions menus from various triggers"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-hero.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
### Best Practices
- Links inside an Actions Menu must always initiate an action related to the current page & must never be used simply for navigation. 
- Actions can include immediate actions on the same page, actions in modals, actions on a different page, or the start of a related workflow.
- An action menu can be triggered by different elements including Split Buttons, buttons labeled “Actions” and Cogs.
- There are two different types of actions menus: Simple & advanced

  - Simple: a list of links with no labels  
  - Advanced: a list of links separated/sorted/organized by labels
  
- Labels are optional. They are used to organize and provide clarity about the actions that can be taken. They should not be used when there are fewer than 3 action links. Multiple labels should be used on lists of more than 7 action links to break apart the list and make it more easy to understand. A single label can be used if the designer believes it helps provide clarity. 


{% endcolumn %}

</div>

## Specifications
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Actions menu - simple

Actions button, split button and cog are three current uses of the Actions Menu, but do not necessarily make up the entirety of its uses.

The Title within the action menu is optional and should only be used if it adds needed clarity, or if there are more than 7 actions in the list (in which case you should consider it a requirement).

Buttons perform normally (see buttons). When clicked, a flyout menu appears above the canvas with a shadow (see shadows).

The menu should span the length of the button. If an action name is longer than the length of the button the menu can extend beyond the right side of the button. Add 12px of padding between the end of the action name and the edge of the flyout. If an action name is too long consider truncating the name, and showing the full name on hover.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"An action menu can be triggered by a variety of elements including an actions menu button, a split button or a cog."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-simple.svg)
{% endfigure %}
{% endcolumn %}
  
</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Actions menu - advanced

The advanced action menu is a longer list of actions separated by labels for the purpose of adding clarity, and breaking apart a longer list to make it quicker to parse.

There should be 8px of spacing between each section.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"The advanced actions menu has actions separated into groups with titles. "] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-advanced.svg)
{% endfigure %}
{% endcolumn %}
  
</div>
