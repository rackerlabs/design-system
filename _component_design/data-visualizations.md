---
title: Data Visualizations
parent: null
layout: family
category: Components
usage: null
preview-image: null
last-modified: 2017-11-07
---

{% for page in site.component_design %}
{% if page.resource == true %}
  {% if page.parent contains "Data Visualizations" or page.secondary contains "Data Visualizations" %}
{% include component-row.html %}
  {% endif %}
{% endif %}
{% endfor %}
