---
title: Inputs and Controls
parent: null
layout: family
category: Components
usage: null
preview-image: null
last-modified: 2017-08-17
---

{% for page in site.component_design %}
{% if page.resource == true %}
  {% if page.parent contains "Inputs and Controls" or page.secondary contains "Inputs and Controls" %}
{% include component-row.html %}
  {% endif %}
{% endif %}
{% endfor %}
