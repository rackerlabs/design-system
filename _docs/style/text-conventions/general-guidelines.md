---
title: General writing guidelines
layout: docs
parent: Text Conventions
category: Style
usage: |
  These general writing guidelines includes rules for how to write instructions and descriptions that appear in a Control Panel. Consult these guidelines to write text that is clear, helpful, and grammatically correct.
resource: false
status: complete
last-modified: 2018-06-01
---

{% include toc.html %}

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Write with active voice

Active voice makes the performer of the action (usually the user) the subject of the sentence. Passive voice makes the recipient of the action (not the performer) the subject of the sentence.

Active-voice sentences are more engaging, less complicated, less wordy, and easier to understand than passive-voice sentences. With active voice, the actions and responses of the user are easier to distinguish from the actions and responses of the technology.

{% figure [caption:"Active voice examples"] [class:"image bg-light border"] %}
| Use (active) | Avoid (passive) |
| --- | --- |
| After you install the software, start the computer. | After the software has been installed, the computer can be started. |
| Click **OK** to save the configuration. | The configuration is saved when the **OK** button is clicked. |
| Create a server. | A server is created by you. |
| Rackspace products and services solve your business problems. | Your business problems are solved by Rackspace products and services. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Write clearly and objectively

Use the following guidelines to help you write clearly and objectively:

- Choose language that is clear and easy to understand. When possible, use fewer words. Every word should demonstrate value to the user.
- Help users avoid errors and roadblocks. Make sure content helps users recover quickly if those things happen.
- Alert users if they can't undo changes. Explain consequences and alternatives.
- Avoid non sequiturs, obscure references, or non-standard turns of phrase that might confuse or interrupt.
- Do not use humor, jargon, exclamation marks, idioms, metaphors, and other colloquialisms.
- Consider a user’s likely goal, desire, or state of mind. Anticipate confusion or frustration and respond appropriately.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Use second person

Users are more engaged with content when it talks to them directly. You talk to users directly by using second person, addressing the user as you. Second person also promotes a friendly tone.

{% figure [caption:"Second person examples"] [class:"image bg-light border"] %}
| Use | Avoid  |
| --- | --- |
| To create a server, specify a name, flavor, and image. | Creating a server involves specifying a name, flavor, and image. |
| Click **Yes** to accept the license agreement. | The license agreement is accepted when the user clicks **Yes**. |
| We offer you a comprehensive portfolio of hosting options. | Rackspace offers a comprehensive portfolio of hosting options for the enterprise buyer. |
| Cloud Backup uses block-level deduplication, which means that only those parts of a file that have changed are saved. | Cloud Backup uses block-level deduplication, which means we save only those parts of a file that have changed. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Avoid abbreviations

Avoid abbreviations, acronyms, and slang. Use an abbreviation only if it is better known than the word that it stands for or if space savings is critical.

Unless an abbreviation is common, spell out the words of the abbreviation on the first use. Show the abbreviation in parentheses after the spelled-out term; for example, access control list (ACL). On subsequent uses, use the abbreviation. If you introduce an abbreviation, use it; don't alternate between the abbreviation and the spelled-out term.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Maintain parallel construction

Parallel construction means that each part of a sentence uses the same grammatical structure. When writing a series, it is important that each element in the series performs the same function, that of the object of the verb. For example:

{% figure [caption:"Provide context example"] [class:"image bg-light border"] %}
| Use | Avoid  |
| --- | --- |
| This stack includes a Cloud Load Balancer, a Cloud Database, and a Master server (plus optional secondary servers). | This stack includes a Cloud Load Balancer, Cloud Database, and a Master server (plus optional secondary servers). |
{: class="hxTable"}
{% endfigure %}

In the correct example, notice the **a** before Cloud Database.

Parallel structure also applies to options you present to users. Don't ask users to choose from unrelated values. For example, when providing radio button options:

 {% figure [caption:"Provide context example"] [class:"image bg-light border"] %}
 | Use | Avoid  |
 | --- | --- |
 | **Always**, **Only with streaming**, and **Never**. | **Always**, **Only with streaming**, and **Blocked**. |
 {: class="hxTable"}
 {% endfigure %}

In this example, **Always** and **Never** are opposites. **Always** and **Blocked** are not opposites.

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Provide context

Provide meaningful descriptions for key features and state their importance to help users understand the benefits. Don't use Rackspace-created terms as a substitute for clearly explaining options.

{% figure [caption:"Provide context example"] [class:"image bg-light border"] %}
| Use | Avoid  |
| --- | --- |
| Monitoring keeps your applications up and running. You can use monitoring to track and gather information about the applications that you run to prevent downtime. | Use Rackspace Monitoring to prevent downtime. |
{: class="hxTable"}
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section"  markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol-12 hxCol-xs-12 hxCol-sm-12 hxCol-md-12 hxCol-lg-12" %}

## Focus on user goals

Create content that anticipates user needs and explains how a Rackspace feature or option helps the user accomplish a goal. Don't explain the technical details of what a Rackspace service is doing.

For example:

{% figure [caption:"Focus on user goals"] [class:"image bg-light border"] %}
| Use | Avoid  |
| --- | --- |
| Link your existing ObjectRocket account to your Rackspace Cloud account and get easy navigation between control panels. | When you link your existing ObjectRocket account to your Rackspace Cloud account the system provides multiple control panels for a single user ID. |
{: class="hxTable"}
{% endfigure %}

Aligning in-product text with user goals requires that you understand the subtleties of your audience and how a feature supports what the user is trying to do.

{% endcolumn %}

</div>

</section>
