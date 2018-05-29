---
title: Labels
layout: docs
parent: Text
category: style
usage: |
  A label is a graphical control element that displays text on control panel page. Use a label to identify a text input control, navigation menu item, and tables rows and columns. A label can be interactive, as is the case with a button control, or static, like the name of a checkbox or radio button.
resource: true
status: complete
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Action labels

Use consistent labels across an action for a UI.

Refer to the following table when writing action labels:

{% figure [caption:"Action labels"] [class:"image bg-light border"] %}
| Action label | Typical usage  |
| --- | --- |
| Create | Creates a new object. |
| Delete | Destroys an existing object. The label can include the object being deleted, such as Delete Image. |
| Download | Transfers a file to a user's local system. |
| Edit | Allows data or values to be modified. Edit does not imply the object is automatically updated. In most cases, you still must update in order for the change to occur. |
| Filter | Changes view to only include objects that match the filter criteria. |
| Import | Includes objects from an external source. |
| Manage | Modifies existing object settings or options. |
| Save | Saves data entered when you create an object. |
| Update | Automatically changes the data of an existing object. |
{: class="ui very basic collapsing celled table"}

{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Style
Use this style for form input labels and as titles for radio groups or sets of checkboxes. Note that checkbox and radio button labels intentionally do not match this style.

*Do not use labels on backgrounds darker than Gray 25 (#fafafa) or it will not pass accessibility standards.*

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% include type-styles.html htmlexample='<label class="hxLabel">Label</label>' typeface="Roboto" weight="Medium (500)" fontsize="14px / 0.875rem" csscode="Gray 750" hex="#6b6b6b" linespace="1.5"  %}
{% endcolumn %}
</div>
</section>
