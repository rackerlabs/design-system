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

## Shadow types
<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Helix currently features Focusing Shadows and Layering Shadows.

Focusing Shadows apply to objects that overlay the application and are not in close proximity to the element that triggered their appearance.

Layering Shadows apply to objects that overlay content and remain in close proximity to the element that triggered their appearance.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/shadows/shadows-elevation.png" width="522px"/>
{% endfigure %}

{% endcolumn %}


{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

The type of shadow is not determined by the z-index of the element.  Instead, the shadow is determined by the component's relation to the content that triggered it and to the application canvas.

The illustration to the right demonstrates that the Tooltip, which has the highest z-index, does not cast the biggest shadow.  Rather, it casts a Layering shadow because it was triggered by content on the modal.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/shadows/elevation-graphic.png" width="705px"/>
{% endfigure %}

{% endcolumn %}



</div>
</section>

<section class="static-section" markdown="1">

## Layering shadow

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Use layering shadows to show one object on top of another object within context. Use this type of shadow when the element is associated with specific content.

Layering shadow values are used for:

- [Navigation drop-downs]({{site.baseurl}}/components/eyebrow.html)
- [Popovers]({{site.baseurl}}/components/popovers.html)
- [Tooltips]({{site.baseurl}}/components/tooltip.html)


{% endcolumn %}


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption="Popovers use layering shadow values to show close association with content."][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/shadows/shadows-layers.png" width="624px"/>
{% endfigure %}

{% endcolumn %}


</div>
</section>

<section class="static-section" markdown="1">

## Focusing shadow

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Focusing shadows are used when an element overlays most of the UI and does not need to be closely associated with the element that triggered its appearance.

Focusing shadows are used for the following components:

- [Modals]({{site.baseurl}}/components/modal.html)
- [Toast notifications]({{site.baseurl}}/components/toast.html)

{% endcolumn %}


{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption="Forced action modals use focusing shadow values with semi-translucent screen over entire content."][class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/style/shadows/shadows-focus.png" width="638px"/>
{% endfigure %}

{% endcolumn %}


</div>
</section>
