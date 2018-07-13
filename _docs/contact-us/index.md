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

<section class="static-section" markdown="1">

### Feedback &amp; review

<div class="hxRow" markdown="1" style="margin-bottom:4rem;">

{% column left:"hxCol hxSpan-4" %}

![When I want to know if I’m using Helix correctly]({{site.url}}/assets/images/resources/engaging-helix/feedback-and-review-using-helix-correctly.png){: width="100%"}

**When I want to know if I’m using Helix correctly**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

{% column left:"hxCol hxSpan-4" %}

![When I’m tweaking a Helix design]({{site.url}}/assets/images/resources/engaging-helix/feedback-and-review-tweaking-helix.png){: width="100%"}

**When I’m tweaking a Helix design**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

{% column left:"hxCol hxSpan-4" %}

![When Helix looks ugly in my designs]({{site.url}}/assets/images/resources/engaging-helix/feedback-and-review-helix-looks-ugly.png){: width="100%"}

**When Helix looks ugly in my designs**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1" style="margin-bottom:4rem;">

### Identified a gap

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4" %}

![When I’m creating a new component, layout, or interaction model]({{site.url}}/assets/images/resources/engaging-helix/identified-a-gap-creating-something-new.png){: width="100%"}

**When I’m creating a new component, layout, or interaction model**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

{% column left:"hxCol hxSpan-4" %}

![When my content doesn’t fit into existing Helix specifications]({{site.url}}/assets/images/resources/engaging-helix/identified-a-gap-content-does-not-fit.png){: width="100%"}

**When my content doesn’t fit into existing Helix specifications**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

{% column left:"hxCol hxSpan-4" %}

![When I find a bug in Helix components, documentation, or design assets]({{site.url}}/assets/images/resources/engaging-helix/identified-a-gap-found-a-bug.png){: width="100%"}

**When I find a bug in Helix components, documentation, or design assets**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1" style="margin-bottom:8rem;">

### Awareness

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-4" %}

![When I’m ready to convert user flow diagrams into screen flows]({{site.url}}/assets/images/resources/engaging-helix/awareness-ready-to-design.png){: width="100%"}

**When I’m ready to convert user flow diagrams into screen flows**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

{% column left:"hxCol hxSpan-4" %}

![When I want a member of Helix included in a meeting, project, or decision]({{site.url}}/assets/images/resources/engaging-helix/awareness-include-helix-member.png){: width="100%"}

**When I want a member of Helix included in a meeting, project, or decision**{: style="display:block; text-align: center; font-size:16px;"}

{% endcolumn %}

</div>

</section>

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
  <img class="avatar-item-image" src="{{site.url}}/assets/images/resources/engaging-helix/{{ member[1] | downcase | replace: ' ','-' }}.png">
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

