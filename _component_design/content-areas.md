---
title: Content Areas
parent: null
layout: family
category: Components
usage: null
preview-image: null
last-modified: 2017-11-07
---

{% for page in site.component_design %}
{% if page.resource == true %}
  {% if page.parent contains "Content Areas" or page.secondary contains "Content Areas" %}
{% include component-row.html %}
  {% endif %}
{% endif %}
{% endfor %}
