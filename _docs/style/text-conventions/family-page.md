---
title: Text conventions
parent: null
layout: family
category: Style
usage: null
preview-image: null
last-modified: 2018-05-18
---

{% for page in site.component_design %}
{% if page.resource == true %}
  {% if page.parent contains "Editing" or page.secondary contains "Editing" %}
{% include component-row.html %}
  {% endif %}
{% endif %}
{% endfor %}
