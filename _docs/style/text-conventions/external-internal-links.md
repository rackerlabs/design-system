---
title: External and Internal Link Guidelines
layout: docs
parent: Text Conventions
category: Style
usage: |
  Use these guidelines when you construct links to external or internal content.
resource: false
status: complete
last-modified: 2019-03-15
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-6-md hxSpan-6-lg" %}

## General guidelines

When you add links from a control page to internal or external content, consider the user's context and information needs when deciding whether to open the contents of a link in the current tab, or in another tab.

We recommend that you not open a tab unless it is warranted. User experience is compromised when a new tab opens unnecessarily.

- If a link provides supplemental information that is useful to the user in completing the current workflow, and the user expects to return to the current tab, consider opening the content in another tab. For example, open help documentation in another tab.
- If the user wants to change contexts, then open the content in the current tab. For example, when the user wants to navigate to a different area of the application, open the link in the current tab.

When a link opens a tab:

- Use the external link icon to visually indicate to the user that a new tab opens.
- Navigate the user to the new tab. Users should also be able to left-click a link and open a tab without directly navigating to that tab.

See [Typography]({{site.baseurl}}/style/typography.html#link) for information about styling links.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-6-md hxSpan-6-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark" class="good-idea"></hx-icon> External link icon | <hx-icon type="checkmark" class="good-idea"></hx-icon>Code |
| --- | --- |
| <hx-icon type="external-link"></hx-icon> | `<hx-icon type="external-link"></hx-icon>` |
{: .hxTable .docTable}
{% endfigure %}

{% endcolumn %}

</div>

</section>
