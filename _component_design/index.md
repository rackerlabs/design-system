---
title: Components
parent: null
layout: family
category: Components
last-modified: 2017-08-17
---

Components are reusable elements that can be combined to form Pages or Page
Templates. If you are using these for the first time, please read through the
component details carefully. If you need new components/patterns for your app
or if would like to participate in creating additional ones, please let us
know.

<div class="index-toc">
  <ul>
    {% for famItem in site.data.families %}
      {% assign currentFam = famItem.parent | slugify %}
      <li><a href="{{site.url}}/components/{{currentFam}}.html">{{famItem.display}}</a></li>
    {% endfor %}
  </ul>
</div>
