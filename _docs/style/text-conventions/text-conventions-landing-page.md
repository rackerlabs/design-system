---
title: Text conventions
layout: docs
category: Style
usage: >
  Use these user interface (UI) text conventions if you are a designer, developer, or contributor of content in Rackspace UIs. These UI text guidelines ensure that a Rackspace UI is usable, consistent, and concise.
status: stable
resource: true
last-modified: 2018-05-21
---

{% for page in site.docs %}
{% if page.resource == true %}
  {% if page.parent contains "Text" or page.secondary contains "Text" %}
{% include text-row.html %}
  {% endif %}
{% endif %}
{% endfor %}
