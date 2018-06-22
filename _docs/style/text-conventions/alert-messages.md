---
title: Alert and message guidelines
layout: docs
parent: Text Conventions
category: Style
usage: |
  Alerts and messages inform users about progress that they make or problems that they encounter in the UI. They must be clearly written, be free from grammar and punctuation problems, and follow the style and terminology for guidelines in this section. Users gain understanding from the content of the messages (text, icons, color) as well as the context (where on the screen and when in the user flow the messages appear). So users can recover quickly, alerts and messages should provide essential information to help them understand and address issues.
resource: false
status: complete
last-modified: 2018-06-21
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

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

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Message guidelines and examples

Use these guidelines when you write messages in a control panel.

{% figure [caption:"Message guidelines and examples"] [class:"image bg-light border"] %}
| Guideline | Example  | Comments |
| --- | --- | ---|
| Use complete sentences, when possible. | Use: The authentication <br/>token isn't valid. <br/> <br/>Avoid: Invalid authentication <br/>token | Include articles (a, an, the) to make the sentence complete. If possible, use active voice. <br/> <br/>**Note**: Message text that serves as a heading or label (such as Elapsed:hh:mm:ss, which indicates elapsed time) is acceptable as a fragment. |
| Use more than one sentence if required for clarity. | You must provide a name for each domain. null isn't a valid domain name. | Write brief and simple sentences that clearly state the problem. Separate the sentences with a period (or question mark, if applicable), not with a semicolon. |
| Avoid using only uppercase letters. | Use: The requested image $UUID has automatic disk resizing disabled. <br/> <br/>Avoid: THE REQUESTED IMAGE $UUID HAS AUTOMATIC DISK RESIZING DISABLED. | Lines with excessive capitalization are hard to read. Use all uppercase letters only for words that require it, such as a keyword, a data type, or a specific table name that's displayed in all uppercase letters to a database user. |
| When possible, include a recommendation, either a potential fix or a reference to a document for more information. | The system is out of virtual IP addresses. Contact Support so they can allocate more virtual IP addresses. <br/> <br/>The value -1.0 can't be accepted. Specify a positive integer value for the volume size. | Messages should provide specific information about how the user should continue. |
| Be specific. | Use: The live migration of instance 89a5e582-d3f3-4665-ate2-03c2114f0bib to host compute2 failed.<br/> <br/>Avoid: Live migration failed. | Messages should provide as much detailed information as possible. |
| Use n to represent an unspecified or generic number. Use x to represent an unknown version number. | The rate limit has been reached (n requests in 24 hours). Please try again later. <br/> <br/>This option is available only for Ubuntu 12.x. | Using **n** and **x** consistently reduces the confusion users might experience with these conventions. |
| Avoid blaming the user. | Use: The request couldn't be understood by the server because of malformed syntax. <br/> <br/>Avoid: You entered bad request syntax. | Rewrite messages that imply fault on the part of the user. Use passive voice when necessary. |
| When possible, use positive statements. | Use: The given limit must be less than 50. <br/> <br/>Avoid: The given limit can't be greater than 50. | Positive statements are easier to understand than negative statements. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Message types

The following types of messages are the most common:

- **Error**: Use error messages to inform users that a problem in the system or application occurred. Users or systems cannot continue their tasks until the problem is resolved.
  - Example: `The file could not be found.`
- **Warning**: Use warning messages to alert users about a condition that might cause problems in the future. The user can generally continue with their tasks, but those tasks might not be completed in a way that is expected.
  - Example: `The service could not open all documents. Some documents were skipped.`
- **Information**: Use information messages to provide information about normal conditions and operations.
  - Example: `Updates are being processed.`
- **Confirmation**: Use confirmation messages to ask users to verify an action that the users or sometimes the system initiated. Also, use confirmation prompts to ask users for additional information to complete a step or to ask whether to save information for future use.
  - Example: `Do you want to close this document without saving your changes?`
- **Success**: Use success messages to tell users that an action successfully completed.
  - Example: `Server successfully deleted.`

{% endcolumn %}

</div>

</section>
