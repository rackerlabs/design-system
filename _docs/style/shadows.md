---
title: Shadows
layout: docs
category: Style
usage: >
  The visual design of Helix is quite flat and thus has minimal use of shadow. Shadows are only used to imply elevation so users understand when an object is layered on top of others. Helix shadow system is comprised of layering and focusing shadows. Additional shadow levels will be assessed as needed.
status: stable
resource: true
last-modified: 2018-03-28
---

{% include toc.html %}



<section class="static-section" markdown="1">

## Elevation
<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Shadows work in tandem with elevation. Layering and focusing shadow types live on a different imagined plane of the UI giving each its own distinct elevation. Elevation is the depth, or distance, between two surfaces. The affect of the elevation on a layer is defined by the intensity and depth of the shadow it casts.

{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/shadows/shadows-elevation.png){: width="638px"}
{% endfigure %}

{% endcolumn %}


{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

The type of elevation used is determined by the components absolute or relative position to the application canvas and components currently called on the view.
 
{% endcolumn %}

{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/shadows/elevation-graphic.png){: width="966px"}
{% endfigure %}

{% endcolumn %}



</div>
</section>

<section class="static-section" markdown="1">

## Layering shadow

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Layering shadows are used to show one object on top of another object within context. Use this type of shadow when the element is associated with specific content.
Layering shadow depths are above their given source/parent object.

Layering shadow values are used for:

- [Popovers]({{site.baseurl}}/components/popovers.html)
- [Tooltips]({{site.baseurl}}/components/tooltip.html)
- [Action menus]({{site.baseurl}}/components/actions-menu.html)



{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption="Popovers use layering shadow values to show close association with content."][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/shadows/shadows-layers.png){: width="638px"}
{% endfigure %}

{% endcolumn %}


</div>
</section>

<section class="static-section" markdown="1">

## Focusing shadow

<div class="hxRow" markdown="1">

{% column left:"hxCol-4 hxCol-xs-12 hxCol-sm-12 hxCol-md-4 hxCol-lg-4" %}

Focusing shadow depths are measured from the canvas. This shadow helps indicate hierarchy and is used when an element overlays all other UI elements.

Focusing shadow values are used for:
 
- [Pilot dropdowns]({{site.baseurl}}/components/eyebrow.html)
- [Modals]({{site.baseurl}}/components/modal.html)
- [Toast-notifications]({{site.baseurl}}/components/toast.html)

{% endcolumn %}


{% column right:"hxCol-8 hxCol-xs-12 hxCol-sm-12 hxCol-md-8 hxCol-lg-8" %}

{% figure [caption="Forced action modals use focusing shadow values with semi-translucent screen over entire content."][class:"image bg-light border"] %}
![]({{site.url}}/assets/images/style/shadows/shadows-focus.png){: width="638px"}
{% endfigure %}

{% endcolumn %}


</div>
</section>
