---
title: Email Templates
layout: default
category: Templates
usage: Teaser Text
preview-image:
resource: true
---

These email templates provide a unified way to interact with customers from all
our platforms. The more content we can provide on first contact the better, and
if more information is needed links to control panels are provided.

{% include toc.html %}

**Email Templates involve:**

- Any Rackspace product
- Notifications and Tickets to customers
- All message types and severity levels

### When to Use

These email templates are for external communications to customers related to
control panels when sending out notifications and tickets.

### Quick View Template and Variable Guide

{% figure [caption:"Quick guide for template and variable options"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/EmailTemplate.svg){:width=60%}
{% endfigure %}

### Typography and Image Guides

{% figure [caption:"Quick guide for typography and image specifications"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Email%20Detail%20-%20Spec.svg){:width=60%}
{% endfigure %}

### Email Header

The email header contains some of the most valuable information we convey to
users since it is our first point of contact. The From and Subject fields allow
users to filter Rackspace communications purposefully and gain an understanding
of email contents before opening. It is important that these fields are
informative, concise, and built uniformly across Rackspace products.

### Sender Name and Address

Sender name and email address must be meaningful.

The sender name should include product name followed by a dash and Rackspace
then message type.

- Dedicated Hosting - Rackspace Notifications
- Fanatical Support for AWS - Rackspace Tickets
- Cloud Hosting - Rackspace Tickets

An exact address ensures that the user knows which product is related to the
email.

The address should have the message type immediately after the `@` symbol
followed by `.rackspace.com`.

- `noreply@notifications.rackspace.com`
- `noreply@tickets.rackspace.com`

### Subject Line

Use the subject line to let the user know what the email is about, urgency (if
any) and a brief synopsis of content. Urgency should be the only additional
information included in the subject line. Other than **IP address** or **Ticket
number**, no other numerical information should be included in email subject
lines.

### Email Content {% include inprogress.html %}

#### Alert Status

Alert states are used to gain the users attention when there is action required
on the customers part or when sending important impacting notifications. If
there is no alert status and the severity of the message is normal, an alert
banner should **not** be included.

<div class="row">
{% column left:"col-md-4" %}
- Ticket Status:
    - Emergency – Address in Subject line and with Helix Alert bar
    - Urgent – Address in the Subject line and with simple alert bar
    - Normal – No specification needed in email
- Notification Status:
    - Urgent – Address in Subject line and simple alert bar
    - Normal – No specification needed
- Server Status: (No Banner Needed)
    - Status Code – [View specifications](https://rackerlogin.fedsso.rackspace.com/nidp/app?target=https%3A%2F%2Frackerlogin.fedsso.rackspace.com%2Fnidp%2Fsaml2%2Fidpsend%3Fid%3Donewiki%26%26SAMLRequest%3DlVJdS%252BtAFPwrYR98a9JEQVmblFIRBAWpHw%252B%252BbXZPm73JfrhnU%252F35nqYGgngvvbCQkD0zc2Ymi%252BWn%250A6ZI9BNTOlixP5ywBK53Sdleyl%252Bfb2RVbVgsUpvN81cfGbuC9B4wJ4Szy4aJkfbDcCdTIrTCAPEr%252B%250AtHq450U65z646KTrWLJChBBJaO0s9gbCE4S9lvCyuS9ZE6NHnmXOQhqEbNELCal0JvNdv9MWMwLv%250AO4jZQRPRseSG9tBWxGH1EX%252FAQugcQdItKBr8QWe18gNHkdEbglVLrUqS%252FdCtPhPGX7Pk7oYITV3%252F%250AUaquGzqgW18bLXZOelWDadvG7Kza1rqhacQe7ixGYWPJinl%252BOZvns%252BLiucj5%252BRWd9Dy%252FfGPJ6xgz%250AxcLGUAdwOD1OMYbIqv%252BObJFNNY8bFJ5%252FVwpqKJjKifA5Lbg4ueG1M14EjQeTRlttevNtlE%252B51x25%250A2MB2onGy6X%252BOSS4P1PT5kR4fLqij5V%252FVq%252BPd3wKoxrSmv331BQ%253D%253D%26RelayState%3D%252Fpages%252Fviewpage.action%253Ftitle%253DCloud%252BServers%252BStatus%252BSpecification%2526spaceKey%253Dreach%26TARGET%3D%252Fpages%252Fviewpage.action%253Ftitle%253DCloud%252BServers%252BStatus%252BSpecification%2526spaceKey%253Dreach)
    - Remote Observations

{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:""] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Urgent%20Alert.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

{% figure [caption:"Alert banner typography, color, and spacing"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Alert%20Specs.svg){:width=60%}
{% endfigure %}

#### Header

The header is an overview of where the email is coming from and what kind of
message it is. The header contains three parts:

<div class="row">
{% column left:"col-md-4" %}
-   **Product/Platform name** - Fanatical Support for AWS, Dedicated, Cloud,
  Intelligence, etc.

-   **Message Type** - such as ticket or notification.

-   **Company Logo** - the Rackspace logo will be in all emails to the right of
  the product name and message type.
{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:"Visual example of Sub-Header and spacing"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Header.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

{% figure [caption:"Examples of content options. Replace only product name and switch between Notification or Ticket for message type."] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Header%20Details.svg){:width=60%}
{% endfigure %}

#### Sub-Header

To give the user more context about the message they are about to read the
subheading will let them know what kind of notification or ticket has been
sent. This includes notification types and ticket or notification statuses.

<div class="row">
{% column left:"col-md-4" %}
-   **Notifications** - Notification type: Monitoring Alerts, Billing,
  Maintenance, etc.

-   **Tickets** - Ticket status: New, Update, Closed, Pending Customer, etc.

-   **Maintenance Status** – Maintenance Status: started, scheduled, canceled,
  or completed.

{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:"Visual example of Sub-Header and spacing"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Subheader.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

#### Greetings and Sign-off

-   **Greetings** – Greetings should be used sparingly. This is only
  appropriate when responding to a customer directly via ticket.

    -   There should be **no greeting for notifications**. Notification emails
      are not personal, and the user does not need us to address them by name
      when giving an update on services. It is best to get straight to the
      point, so no salutations for notifications.

-   **Sign off** - The sign off should not include a closing, i.e.: Sincerely,
  Regards, Best, etc. If the email is a ticket, it is ok to include Racker name
  and title.

<!--<figure class="image">
          <img src="{{site.cdn_url}}/img/layout/email-templates/Mobile%20LInks.svg">
      </figure>
-->

#### Call Outs

When there is some action the user needs to take it should be prominently
displayed and stand out from the rest of the email content. Callouts will allow
the user to scan for pertinent information quickly.

<div class="row">
{% column left:"col-md-4" %}
-   **Required Action** - required actions consist of tickets that are waiting
  for a response or when the customer needs to take steps to resolve an issue.
  Required actions could range from copy and pasting code to following a list
  of instructions in a How-To article. These **required actions** do not
  include _pending customer_ tickets. For this use case, see Alerts below for
  use cases and styles.

-   **Recommended Action** - recommended actions, if there is maintenance or
  downtime that will affect customers service, but there are steps the customer
  can take to avoid any service impact. These would also fall under the
  category of **workarounds** and can include things like code, step by step
  instructions, or references to How-To articles.

-   **Comments** - typically these will only be used if a user does not have
  access to their control panel. The comment allows users to view comments from
  Rackers, so there is no issue in communication regarding tickets or services.
  Future vision for these emails is to include all content in email
  communications, so comment section will no longer be necessary. The style is
  the same as **workarounds**.
{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:"Call Out box used for workarounds and comments. Comment includes code block."] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Comment%20with%20CodeBlock.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

<div class="row">
{% column left:"col-md-4" %}
-   **Code Blocks** - show user code in a human readable format. Either as part
  of a workaround or just to display system content.
{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:"Code block visual examples and specifications"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Code%20Block%20.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

#### Buttons

Buttons should only be used as a gateway to control panels to view more
detailed information or respond to a ticket.

<div class="row">
{% column left:"col-md-4" %}
They should never break up the content of an email, and there should never be
more than one button in the email. When adding buttons only use the standard
button styles, and text should be in all caps. Go to the [Buttons page](http://design.rax.io/design-system/components/buttons.html)
for in-depth use cases and standards.
{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:"Button and spacing specifications"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Button.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

{% figure [caption:"Variation of button content. Message should always be clear and concise."] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Buttons.svg){:width=60%}
{% endfigure %}

#### App Link

<div class="row">
{% column left:"col-md-4" %}
Link to the mobile app is added to increase discoverability of our native apps.
The promotional section should be above the footer and below the call to action
button.

In the first line, the word notifications or ticket should change based on the
message type. It should match the content in the header of the email.
{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:"Mobile app promotion and download links"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Mobile%20LInks.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

#### Footer

<div class="row">
{% column left:"col-md-4" %}
Footer provides auxiliary information about how to contact support and edit
notification preferences.

-   **Contact Support** - should include phone number, email, or chat options.

-   **Preferences** - should be a link to modify preferences or the option to
  opt-out if using a blacklist method.
{% endcolumn %}

{% column right:"col-md-8" %}
{% figure [caption:"Footer visual example and spacing specifications"] [class:"image bg-light border"] %}
  ![]({{site.cdn_url}}/img/layout/email-templates/Footer.svg){:width=60%}
{% endfigure %}
{% endcolumn %}
</div>

#### Links

Do not display actual URL. All links should be hyperlinked text and follow
formatting rules of
[Helix typography styles](http://design.rax.io/design-system/style/typography.html)
unless specified on this page. Go to Rackspace documentation guidelines for
more detailed information on how to use
[links and cross references](http://rackerlabs.github.io/docs-rackspace/style-guide/a-l-style-guidelines.html#links-and-cross-references)
within email content.

### Placement of links

-   Determine whether the link should be provided inline or at the end of the
  article or section.

-   Provide links inline only when it is necessary or helpful for the customer
  to follow the link to understand the current topic or complete the task.
  Remember that links disrupt the narrative flow and can be distracting.

-   Provide links to related but not essential information at the end of the
  article or section.

-   Provide links to "next steps" at the end of an article or section.

-   Do not link to information more than once in an article or section.

#### Construction and format of links

-   Ensure that the text of a link sufficiently describes the content to which
  it links (the destination content). When you provide a link at the end of an
  article or section to related information or a next step, use the title of or
  a heading in the destination content as the link text.

-   When links are inline, use about three or four words of existing text as
  the link text. Choose words that best describe the destination content.

-   If the current text cannot sufficiently describe the destination content,
  create a cross-reference sentence for the link. For the link text, use the
  title of or a heading in the destination content, if possible. Avoid
  providing an actual URL, unless you think that having the URL is helpful for
  the customer.

-   Do not provide links from ambiguous phrases such as _Click here_ or
  _More information_.

-   Do not use quotation marks around link text.

### Text Guidelines {% include inprogress.html %}

In general, write in active voice rather than passive voice.

-   Active voice identifies the agent of action as the subject of the
  verb-—usually the user.

-   Passive voice identifies the recipient (not the source) of the action as
  the subject of the verb.

Active voice sentences clarify the performer of an action and are easier to
understand than passive-voice sentences. Passive voice is usually less engaging
and more complicated than active voice. When you use the passive voice, the
actions and responses of the software can be difficult to distinguish from
those of the user. Also, passive voice usually requires more words than active
voice.

**Note:** If you want to write Rackspace content that is clear and consistent
and that helps customers accomplish their goals, use the
[basic writing guidelines](http://rackerlabs.github.io/docs-rackspace/style-guide/basic-writing-guidelines.html).

### Research {% include inprogress.html %}

Previous research has been done for emails about notifications. The major
finding was that email could help customers understand the difference between
notifications and a ticket. Further research is needed to validate all use
cases in email templates.

For now, though, here are a few of the completed studies:

- [Onboarding at Rackspace](http://design.rax.io/?p=2111)
- [Summary of research done on the Notification Project](http://design.rax.io/?p=2380)
- [Improving how Rackspace Communicates with its customers](http://design.rax.io/?p=2387)

### Visual Examples

{% figure [caption:"Example of a billing email using these guidelines"] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/layout/email-templates/Email%20Detail.svg){:width="60%"}
{% endfigure %}
