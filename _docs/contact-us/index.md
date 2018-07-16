---
title: Contact Us
layout: family
resource: true
category: Contact-Us
last-modified: 2018-07-11
---

<section class="static-section" markdown="1" style="margin-bottom:4rem;">
{% include toc.html %}
</section>





## When to contact us

Use the following scenarios as a guide for when you should contact the Helix team.

{% for illoSection in site.data.contact-helix-illos %}
{% assign sectionTitle = illoSection[0] %}
{% assign illustrations = illoSection[1]%}

<section class="static-section" markdown="1">

### {{sectionTitle}}

<div class="hxRow" markdown="1" style="margin-bottom:4rem;">

{% for illoHash in illustrations.items %}
{% assign illo = illoHash[1]%}

{% column left:"hxCol hxSpan-4" %}

<div class="thumbnail {{illustrations.color}}">
  <img src="{{site.url}}/assets/images/contact-us/{{illo.image}}.png" class="thumbnail-image">
  <div class="thumbnail-caption">{{illo.caption}}</div>
</div>

{% endcolumn %}

{% endfor %}

</div>

</section>

{% endfor %}

## How to contact us



<section class="static-section" markdown="1" style="margin-bottom:8rem;">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-3" %}

#### <a href="https://rackspace.slack.com/messages/C1ZPBPYKZ" target="_blank">Start a conversation in Slack <hx-icon type="external-link"></hx-icon></a>

The #helix channel is all about discussing Helix and starting conversations for design or development needs.

{% endcolumn %}

{% column left:"hxCol hxSpan-3" %}

#### <a href="https://github.com/rackerlabs/helix-ui/issues/new?template=bug-report.md&labels=Bug:+Unconfirmed" target="_blank">Report code issues <hx-icon type="external-link"></hx-icon></a>

Create a GitHub issue on the Helix-UI repository.  We will triage the work and get back to you.

{% endcolumn %}

{% column left:"hxCol hxSpan-3" %}

#### <a href="https://github.com/rackerlabs/design-system/issues/new?title=Issue%20Regarding%20-%20[Component Name Here]" target="_blank">Report problems with a design <hx-icon type="external-link"></hx-icon></a>
Create an issue on the Helix website repo, and outline the problem.  We'll triage it and let you know next steps.

{% endcolumn %}

{% column left:"hxCol hxSpan-3" %}

#### <a href="https://github.com/rackerlabs/design-system/issues/new?title=New%20Design%20Pattern%20Request%20-%20[Request Name Here]" target="_blank">Request a new design <hx-icon type="external-link"></hx-icon></a>
Submit a request through GitHub and we'll get back to you asap with next steps and objectives.

{% endcolumn %}

</div>

</section>

## About the team

<section class="static-section" markdown="1" style="margin-bottom:4rem;">


<div class="hxRow" markdown="1">

{% for subTeam in site.data.helix-team %}
{% assign sub = subTeam[1] %}

{% column left:"hxCol hxSpan-4" %}

### {{subTeam[0]}}

<div class="avatar-list">
{% for member in sub %}
<div class="avatar-item">
  <img class="avatar-item-image" src="{{site.url}}/assets/images/contact-us/{{ member[1] | downcase | replace: ' ','-' }}.png">
  <div class="avatar-item-description">
    <h5 class="hxHeading-5">{{ member[0] }}</h5>
    {{ member[1] }}
  </div>
</div>
{% endfor %}
</div>

{% endcolumn %}

{% endfor %}

</div>

</section>

