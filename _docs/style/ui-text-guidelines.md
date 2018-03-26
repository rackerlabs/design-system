---
title: UI text guidelines
layout: docs
category: Resources
---

Use these user interface (UI) text guidelines if you are a designer, developer, or contributor of content in Rackspace UIs. These UI text guidelines ensure that a Rackspace UI is usable, consistent, and concise.

## UI action labels

Use consistent labels across an action for a UI.

The following table gives the common action labels:

| Action label | Typical usage |
| --- | --- |
| Create | Creates a new object. |
| Delete | Destroys an existing object. The label can include the object being deleted, such as `Delete Image`. |
| Download | Transfers a file to a user's local system. |
| Edit | Allows data or values to be modified. Edit does not imply the object is automatically updated. In most cases, you still must update in order for the change to occur. |
| Filter | Changes view to only include objects that match the filter criteria. |
| Import | Includes objects from an external source. |
| Manage | Modifies existing object settings or options. |
| Save | Saves data entered when you create an object. |
| Update | Automatically changes the data of an existing object. |

## UI alert and message guidelines

Alerts and messages inform users about progress that they make or problems
that they encounter in the UI. They must be clearly written, be free from
grammar and punctuation problems, and follow the style and terminology for
guidelines in this guide.

Users gain understanding from the content of the messages (text, icons, color)
as well as the context (where on the screen and when in the user flow the
messages appear). So users can recover quickly, alerts and messages should
provide essential information to help them understand and address issues.

### General guidelines

When writing alerts and messages, use the following rules:

- Be courteous and do not blame the user.
- Use present tense to describe conditions that currently exist, or use past
  tense to describe a specific event that occurred in the past.
- Guide users with the imperative voice (``Enter a valid email.``) or the
  active voice (``The Control Panel is not responding.``) where possible.
- Keep sentences short but helpful.
- Alerts and messages must be accurate, complete, and helpful.
- Adhere to the guidelines in the [Messages section of the Rackspace Style Guide](http://rackerlabs.github.io/docs-rackspace/style-guide/style/messages.html?highlight=messages) for writing alerts and messages.

### Message types

The following types are messages are the most common:

- Error
- Warning
- Information
- Confirmation
- Success

### Error

Use error messages to inform users that a problem in the system or application
occurred. Users or systems cannot continue their tasks until the problem is
resolved. An example of an error message is ``The file could not be found.``.

### Warning

Use warning messages to alert users about a condition that might cause
problems in the future. User can generally continue with their tasks, but
those tasks might not be completed in a way that is expected. An example of a
warning message is ``The service could not open all documents. Some documents
were skipped.``.

### Information

Use information messages to provide information about normal conditions and
operations. An example of an information message is ``Updates are being
processed.``.

### Confirmation

Use confirmation messages to ask users to verify an action that the users or
sometimes the system initiated. Also, use confirmation prompts to ask users
for additional information to complete a step or to ask whether to save
information for future use. And example of a confirmation prompt is ``Do you
want to close this document without saving your changes?``.

### Success

Use success messages to tell users that an action successfully completed. An
example of a success prompt is ``Server successfully deleted.``.

### Style

For information about style for error messages, including icons and color, see
the [Helix design guide](http://helix.rax.io) and the [Helix developer guide](https://rackerlabs.github.io/helix-ui/).

### Alert examples

| Type | Example |
| --- | --- |
| Error | ``Unable to create the volume``</br></br>``Unable to retrieve the image.`` |
| Warning | ``Policy check failed``</br></br>``Insufficient privilege level exists to view usr information.`` |
| Information | `Updating volume snapshot snapshot-name`</br></br>`Creating volume volume-name`. |
| Confirmation | `Do you want to close this document without saving your changes?`</br></br>`Do you want to reset your password?`
| Success | `Successfully created key pair key-pair-name.`</br></br>`Image successfully`. |

## UI icon guidelines

Be selective when deciding to use icons instead of text. It is often difficult
for users to understand the intent of an icon. New icons should be thoroughly
reviewed and tested by the user experience project. However, icons can
improve usability in specific instances.

Use an icon under the following circumstances:

- The icon is quickly recognizable.
- The icon enhances design appeal.
- You have limited space.

For a list of icons and more about them, see the [Helix documentation](https://rackerlabs.github.io/helix-ui/components/icons/).

If you decide to use an icon, follow these tips:

- Keep the design simple and consistent.
- Keep the location of individual icons consistent. Users recognize and expect
  patterns that help to establish meaning and function.
- Ensure the icon is quickly recognizable and memorable. For help, work with
  the UX design staff.
- If there is space, consider adding a text label to the icon.

## UI panel format guidelines

Use consistent style and placement for text and icons in panels in the UI.

Use default values for page or window title bars, side navigation, fonts, and
text size. For example, tab titles must be a smaller text size than the
section heading.

Similarly, the node item title must be a smaller font than the page or window
title. If necessary, you might have to shorten the node item title in order to
maintain the default width.

## UI text capitalization

For UI text, we use different capitalization styles for different types of content to improve scannability, organize information, and guide users to key actions.

When building new products, we also align capitalization practices with platform conventions to match user expectations.

For more general information, see [capitalization](http://rackerlabs.github.io/docs-rackspace/style-guide/style/capitalization.html?highlight=capitalization).

### Title-style capitalization

For title-style capitalization, capitalize the first letter of nouns,
adjectives, verbs, adverbs, and pronouns in the text. You also capitalize the
first and last words of the text. However, use lowercase for the following
exceptions:

- Articles (*a*, *an*, *the*) unless they are the first or last
  words of the element.
- Coordinating conjunctions (*and*, *or*).
- Prepositions with fewer than five letters (*to*, *on*, *at*, *by*, *from*)
  unless they are the first or last words of the element.
- Infinitives (*to*, *in*, *an*)
- Capitalize the second word in a hyphenated compound if it would normally be
  capitalized as a single word. For example, you would capitalize both words
  in **Quick-Find Options**, but you would only capitalize *Add* in **Add-on
  Choices**.

### Sentence-style capitalization

For sentence-style capitalization, most words are lowercase, with the following
exceptions.

- Capitalize only the first word of the text element.

- Capitalize any other words that you would normally capitalize, such as
  proper nouns.

### All caps capitalization

In rare cases, all caps might be used to visually distinguish a secondary,
less important text element - for example, **GENERAL** as a menu heading.

### Capitalization style for common UI elements

The following elements are examples of elements that use title-style
capitalization:

- Chart titles
- Dialog box titles
- Icon labels
- Links used for an action or navigation
- Menu items (both menu bar and context menus)
- Menu titles
- Page titles
- Button labels
- Section headings
- Step titles
- Table column headers
- Tab titles
- Table titles
- Toolbar buttons
- Window titles

The following elements are examples of elements that use sentence-style
capitalization:

- Check box labels
- Field labels
- File names
- Group box labels
- Headings for groups of radio buttons or check boxes
- Hover help text
- Input hints
- List box, drop-down list, and combination box entries
- List box labels
- Messages (information, warning, and error)
- Page instructions or descriptions
- Progress bar label
- Radio button labels
- Status bar text

## UI text punctuation guidelines

Using punctuation consistently throughout a UI maintains a user-friendly and
professional look.

For more general information, see [punctuation](http://rackerlabs.github.io/docs-rackspace/style-guide/style/punctuation.html).

### Apostrophes and quotation marks

Use the typographic characters (also called smart quotes) for apostrophes and
quotation marks.

### Commas

Use serial commas (also called Oxford commas).

| Use | Don't use |
| --- | --- |
| The success of the internet as a public resource depends upon interoperability, innovation, and decentralized participation worldwide. | The success of the internet as a public resource depends upon interoperability, innovation and decentralized participation worldwide. |

### Hyphens and dashes

Use the following rules for hyphens and dashes:

- Use hyphens (-) to create a single idea out of two or more words.

  - Don’t add a space before or after the hyphen.

- Use en dashes (–) for ranges, like numbers (such as, 1–9) and
  dates.

  - Don’t add a space before of after the en dash.

- Use em dashes (—), the longest dashes, to set off a long qualifier in the
  middle of a sentence if the use of commas would hinder readability.

  - Don’t add a space before of after the en dash.
  - Don’t capitalize the word following an em dash, unless the word is proper.
  - Don’t use an em dash to separate a long sentence into two parts. Instead,
    create two sentences.

### Ellipses

Use ellipses with Button or Menu components when the action requires
additional user input, usually with a dialog, an alert, or a move
to another window or part of the UI.

Do not use an ellipsis in a link to indicate that more information is
available at the destination.

In general, do not use ellipses in body copy.

### Exclamation points

Avoid using use exclamation points. If you must use them, use them sparingly -
when the text reflects genuine excitement, not as a way to create excitement.

### Periods and other terminal punctuation

Don’t use end punctuation in the following content:

- Headings
- Subheadings
- UI titles
- Button labels
- Checkbox labels
- Radio button labels
- Tooltips
- Text links (unless the link ends a sentence)
- Navigation elements

End all sentences with a period, even if they're only two words. Put one
space, not two, after a period.

### User interface writing tips

When writing content for UIs, use the following list to ensure that you are
writing to your audience:

- Write content that is useful. If a message isn’t relevant, remove it. If it isn’t specific and actionable, rewrite it.

- Choose language that is clear and easy to understand. When possible, use fewer words. Every word should demonstrate value to the user and reflect business and brand goals.

- Avoid non sequiturs, obscure references, or non-standard turns of phrase that might confuse or interrupt.

- Write objectively. Do not use humor, jargon, exclamation marks, idioms, metaphors, and other colloquialisms.

- Keep content scannable. Use content patterns to support scanning and promote familiarity with messaging.

- When possible, use progressive content disclosure to improve clarity and reduce cognitive load.

- Help users avoid errors and roadblocks. Make sure content helps users recover quickly if those things happen.

- Avoid [abbreviations](http://rackerlabs.github.io/docs-rackspace/style-guide/style/abbreviations.html?highlight=abbreviations), acronyms, and slang. Use an abbreviation only if it is better known than the word that it stands for or if space savings is critical.

- Write in [active voice](http://rackerlabs.github.io/docs-rackspace/style-guide/writing/use-active-voice.html?highlight=active%20voice).

- Use inclusive language. Speak directly to users when you know enough about them.

- Consider using imagery to signal reassurance and whimsy. Well-chosen illustrations can be more universal, less open to negative interpretation, and localize more effectively.
