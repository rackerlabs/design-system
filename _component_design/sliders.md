---
title: Sliders
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

<!--Sliders let users select from a range of values by moving the slider thumb.

Sliders are ideal components for adjusting settings that reflect intensity
levels, such as volume, brightness, or color saturation.

Sliders may have icons on both ends of the bar that reflect the value
intensity. Place the smallest value for the slider range on the left and the
largest value on the right.

Continuous sliders

Continuous sliders allow users to select a value along a subjective range. They
do not require a specific value to make adjustments, although they may, in some
instances, offer an editable numeric value.

Discrete sliders

Discrete sliders allow users to select a specific value from a range.-->

<div class="row">
{% column left:"col-md-4" %}
{% figure [caption:"Default"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column left:"col-md-4" %}
{% figure [caption:"Deactivated"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-deactivated.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-4" %}
{% figure [caption:"Discreet"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-discrete.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
<div class="row">
{% column left:"col-md-4" %}
{% figure [caption:"Hover"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-hover.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column left:"col-md-4" %}
{% figure [caption:"Markers"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-markers.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-4" %}
{% figure [caption:"Labels"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-label.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
</div>
<div class="row">
{% column left:"col-md-4" %}
{% figure [caption:"Ranged"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-ranged.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column left:"col-md-4" %}
{% figure [caption:"Ranged with Label"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-ranged-label.svg){:width="100%"}
{% endfigure %}
{% endcolumn %}
{% column right:"col-md-4" %}
{% figure [caption:"Vertical"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/slider-vertical.svg){:height="100%"}
{% endfigure %}
{% endcolumn %}
</div>
