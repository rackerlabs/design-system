---
title: Tables
parent: null
layout: family
category: Components
usage: null
preview-image: null
last-modified: 2017-08-17
---

{% for page in site.component_design %}
  {% if page.parent contains "Tables" and page.resource == true %}
  <div class="component-element">
    <div class="hxRow">
      <div class="hxCol-8">
        <div class="hxRow">
          <div class="hxCol">
            <div class="component-title"><a href="{{site.url}}{{page.url}}.html">{{page.title}}</a></div>
          </div>
        </div>
        <div class="hxRow">
          <div class="hxCol">
            <div class="component-blurb">{{page.usage}}</div>
            <div class="component-status">Last modified: {{page.last-modified | date:"%d %B %Y"}} | Component status: {{page.status}}</div>
          </div>
        </div>
      </div>
      <div class="hxCol-4">
        <div class="hero-image"><img src="{{site.cdn_url}}/img/{{page.preview-image}}"/></div>
      </div>
    </div>
  </div>
  {% endif %}
{% endfor %}
