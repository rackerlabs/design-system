---
title: Actions Menu
parent: Inputs and Controls
secondary: Editing
layout: component
category: Components
usage: >
  The actions menu is used anytime a group of actions can be performed on a specific object on the current page. By grouping these actions within the actions menu, it allows users to have a single location to trigger multiple types of actions.
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

- Use actions menus to consolidate multiple related actions into a single pop-over menu.

### When not to use

- If a table object has only a limited number of associated actions (such as create and delete), use table controls at the top of the table. For more information, see [tables]({{site.baseurl}}/components/tables.html) documentation.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Example actions menus from various triggers"] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-hero.svg)
{% endfigure %}
{% endcolumn %}

</div>

<div class="hxRow">

{% column left:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

### Best practices

- Links inside an actions-menu must always initiate an action related to the current page and must never be used simply for navigation. Actions can include the following: 

	- Immediate actions on the current page. 
	- Actions in [modals]({{site.baseurl}}/components/modals.html)
	- Actions on a different page, or the start of a related workflow.

- An actions-menu can be triggered by different elements including split buttons, buttons labeled 'actions', and cogs.

- There are two different types of actions menus:

  - Simple: Contains a list of links with no labels.
  - Advanced: Contains list of links separated and organized through the use of labels.
  
- When using labels within an actionsmenu consider the following:
	- Use labels to segment actions presented into logical groups. 
	- Consider using a single label if more than three actions are present and its inclusion provides additional clarity.
	- Do **not** use a label when fewer than three actions are present.
	- Use multiple labels on lists of more than seven action links to break apart the list and make it more easy to understand. 

{% endcolumn %}

</div>

## Specifications
<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Actions menu - simple

The most common uses of the actions menu are: actions button, split button, and cog.

Add a title in the action menu if it adds clarity. If there are more than seven actions in the list, the title is required.

Buttons used to trigger an actionsmenu adhere to [buttons]({{site.baseurl}}/componenets/buttons.html) design. When clicked, a [popover]({{site.baseurl}}/components/popover.html) menu appears above the canvas.

The menu should span the length of the button. If an action name is longer than the length of the button the menu can extend beyond the right side of the button. Add 12px of padding between the end of the action name and the edge of the flyout. If an action name is too long consider truncating the name, and showing the full name on hover.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"An action menu can be triggered by a variety of elements including an actions menu button, a split button, or a cog."] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-simple.svg)
{% endfigure %}
{% endcolumn %}
  
</div>

<div class="hxRow">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
### Actions menu - advanced

The advanced actionsmenu is a longer list of actions separated by labels. The use of labels on long lists adds clarity and breaks apart the list into segments which are easier to parse.

Use 8px of spacing between each section.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"The advanced actions menu has actions separated into groups with titles. "] [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/components/inputs-and-controls/actions-menu/actions-menu-advanced.svg)
{% endfigure %}
{% endcolumn %}
  
</div>
