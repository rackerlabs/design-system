---
title: Navigation
parent: null
layout: family
category: Components
usage: null
preview-image: null
status: in-progress
resource: false
---

{% for page in site.component_design %}
  {% if page.parent contains "Navigation" and page.resource == true %}
  <div class="component-element">
    <div class="hxRow">
      <div class="hxCol-8">
        <div class="hxRow">
          <div class="hxCol">
            <div class="component-title">{{page.title}}</div>
          </div>
        </div>
        <div class="hxRow">
          <div class="hxCol">
            <div class="component-blurb">{{page.usage}}</div>
            <div class="component-status">Last modified: {{page.modified_time}} | Component status: {{page.status}}</div>
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
