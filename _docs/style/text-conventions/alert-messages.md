---
title: Alert and Message Guidelines
layout: docs
parent: Text Conventions
category: Style
usage: |
  Alerts and messages inform users about progress that they make or problems that they encounter in the UI. They must be clearly written, be free from grammar and punctuation problems, and follow the style and terminology guidelines in this section. Users gain understanding from the content of the messages (text, icons, color) as well as the context (where on the screen and when in the user flow the messages appear). So users can recover quickly, alerts and messages should provide essential information to help them understand and address issues.
resource: false
status: complete
last-modified: 2018-06-25
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## General guidelines

When writing alerts and messages, consider the following guidelines:

- Be courteous and do not blame the user.
- Use present tense to describe conditions that currently exist, or use past tense to describe a specific event that occurred in the past.
- Where possible, guide users with the imperative voice (Enter a valid email.) or the active voice (The Control Panel is not responding.).
- Alerts and messages must be short, accurate, complete, and helpful.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

## Message guidelines and examples

Use these guidelines when you write messages in a control panel.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Use complete sentences, when possible. Include articles (a, an, the) to make the sentence complete. If possible, use active voice.

**Note**: Message text that serves as a heading or label (such as Elapsed:hh:mm:ss, which indicates elapsed time) is acceptable as a sentence fragment.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="times"></hx-icon> Don't Use |
| --- | --- |
| The authentication token isn't valid. | Invalid authentication token |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Use more than one sentence if required for clarity.

Write brief and simple sentences that clearly state the problem. Separate the sentences with a period (or question mark, if applicable), not with a semicolon.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="times"></hx-icon> Don't Use |
| --- | --- |
| You must provide a name for each domain. null isn't a valid domain name. | You must provide a name for each domain and null isn't a valid name. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Avoid using only uppercase letters.

Lines with excessive capitalization are hard to read. Use all uppercase letters only for words that require it, such as a keyword, a data type, or a specific table name that's displayed in all uppercase letters to a database user. See [Capitalization]({{site.baseURL}}/style/capitalization.html) for more information.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="times"></hx-icon> Don't Use |
| --- | --- |
| The requested image $UUID has automatic disk resizing disabled. | THE REQUESTED IMAGE $UUID HAS AUTOMATIC DISK RESIZING DISABLED. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

When possible, include a recommendation, either a potential fix or a reference to a document for more information.

Messages should provide specific information about how the user should continue.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="times"></hx-icon> Don't Use |
| --- | --- |
| The system is out of virtual IP addresses. Contact Support so they can allocate more virtual IP addresses. <br/> <br/>The value -1.0 can't be accepted. Specify a positive integer value for the volume size. <br/> <br/> | The system is out of virtual IP addresses. <br/> <br/>The value -1.0 can't be accepted. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Be specific.

Messages should provide as much detailed information as possible.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="times"></hx-icon> Don't Use |
| --- | --- |
| The live migration of instance 89a5e582-d3f3-4665-ate2-03c2114f0bib to host compute2 failed. | Live migration failed. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Use n to represent an unspecified or generic number. Use x to represent an unknown version number.

Using **n** and **x** consistently reduces the confusion users might experience with these conventions.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="checkmark"></hx-icon> Use |
| --- | --- |
| The rate limit has been reached (n requests in 24 hours). Please try again later. | This option is available only for Ubuntu 12.x. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Avoid blaming the user.

Rewrite messages that imply fault on the part of the user. Use passive voice when necessary.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="times"></hx-icon> Don't Use |
| --- | --- |
| The request couldn't be understood by the server because of malformed syntax. | You entered bad request syntax. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

When possible, use positive statements.

Positive statements are easier to understand than negative statements.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [class:"image bg-light border"] %}
| <hx-icon type="checkmark"></hx-icon> Use | <hx-icon type="times"></hx-icon> Don't Use |
| --- | --- |
| The given limit must be less than 50. | The given limit can't be greater than 50. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Message types

The following list includes the most common types of error messages:

{% figure [class:"image bg-light border"] %}
| Type | Guidelines | Example |
| --- | --- | --- |
| Error | Use error messages to inform the user that a problem in the system or application occurred. The user or system cannot continue the task until the problem is resolved. | The file could not be found. |
| Warning | Use warning messages to alert users about a condition that might cause problems in the future. The user can generally continue with their tasks, but those tasks might not be completed in a way that is expected. | The service could not open all documents. Some documents were skipped. |
| Information | Use information messages to provide information about normal conditions and operations. | Updates are being processed. |
| Confirmation | Use confirmation messages to ask the user to verify an action that the user or the system initiated. Use a confirmation prompt to ask the user for additional information to complete a step or to ask whether to save information for future use. | Do you want to close this document without saving your changes? |
| Success | Use success messages to tell the user that an action successfully completed. | Server successfully deleted. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>
