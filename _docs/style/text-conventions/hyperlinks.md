---
title: Hyperlinks
layout: docs
parent: Text Conventions
category: Style
usage: |
  Use these guidelines when you construct links to external or internal content.
resource: false
status: complete
last-modified: 2019-03-20
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-6-md hxSpan-6-lg" %}

## General guidelines

Use the [links style]({{site.baseurl}}/style/typography.html#link) for control panel page links. Only use internal links for navigation. Consider the user's context and information needs when you decide whether a link should open in the current tab or a new tab.

We recommend that the link does not open a tab unless it is warranted. Opening a new tab forces a significant context switch which may unnecessarily compromise user experience. The following examples might help you decide when to open a tab:

- If a link provides supplemental information that is useful to the user in completing the current workflow, and the user expects to return to the original tab to keep working, consider opening the content in another tab. For example, open help documentation in another tab.
- If the user wants to change contexts, then open the content in the current tab. For example, when the user wants to navigate to a different area of the application, open the link in the current tab.
- Use an external link icon when the user navigates to a different domain within the same tab.

When a link opens a tab, use the following actions to help the user:

- Use the external link icon to indicate visually to the user that a new tab opens.
- Navigate the user to the new tab. Users should also be able to left-click a link and open a tab without directly navigating to that tab.

**Note**: When the link navigates to a new domain, include an external link icon, regardless of whether the link opens in a new tab.

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
