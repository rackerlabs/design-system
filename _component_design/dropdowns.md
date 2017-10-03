---
title: Drop-downs
parent: Inputs and Controls
layout: component
category: Components
usage: Drop-downs are a core input mechanism for forms and are used to offer selection from multiple options or actions.
preview-image: components/content-areas/dropdowns/dropdowns-hero.svg
resource: true
status: in-progress
need: selectors
last-modified: 2017-09-21
---

{% include toc.html %}

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### When to use

Use dropdowns for selecting a single option from a known list of options. Selecting one region on the Cloud Server create form is one example.

#### Best practices

* Applying the disabled state to any options that are not currently available to
  the user.
* Keeping the drop-down pattern to a set of items that are easily parsable by a
  user. While there is not a hard rule here for an upperbounds limit of items
  to include a drop-down, once a drop-down data set exceeds 10 items it should
  be looked at to determine if it could be streamlined.
* Keeping the drop-down label viewable through all states of the dropdown. This
  ensures users remember what label prompted the data set they are viewing.
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Drop-downs hero"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-hero.svg){:width="80%"}
 {% endfigure %}
{% endcolumn %}
</div>


### Specifications

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Default layout

Drop-downs
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Default layout"] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-default-layout.svg){:width="80%"}
 {% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Drop-down states

Drop-downs can be in the following states:

* Default
* Focused
* Disabled
* Error
* Error with Focus
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Drop-downs states."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-states.svg){:width="80%"}
 {% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Option label

Clicking a drop-down menu displays the options contained within the dropdown.
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Drop-downs option label."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-option-label.svg){:width="80%"}
 {% endfigure %}
{% endcolumn %}
</div>

<div class="hxRow">
{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}
#### Drop-down data states

Once a drop-down menu is expanded, the options contained within have four
states:

* Default
* Hovered
* Selected
* Selected and hovered
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}
{% figure [caption:"Drop-down data states."] [class:"image bg-light border"] %}
 ![]({{site.url}}/assets/images/components/content-areas/dropdowns/dropdowns-data-states.svg){:width="80%"}
 {% endfigure %}
{% endcolumn %}
</div>