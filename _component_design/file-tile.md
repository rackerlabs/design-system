---
title: File Tiles
parent: Content Areas
layout: component
category: Components
usage: >
  A file tile displays the name, type, and size of an uploaded file. An uploaded file can be downloaded by a user.
preview-image: preview-images/checkboxes.svg
resource: true
status: stable
need: selectors
last-modified: 2018-09-07
helix-ui-css: true
helix-ui-javascript: true
---

{% include toc.html %}

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## When to use

A file tile is part of a file handling workflow and is one approach you can use to indicate that a file has been uploaded to a control panel page.

Use a file tile when you want to make the file more visually prominent. A file tile is also easier for a user to interact with.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Best practices

Consider the following best practices when you construct a file tile:

- Include an icon in the file tile to represent the file format. Only use icons available in the [Helix Toolkit](https://rackerlabs.github.io/helix-ui/components/icons/#available-icons).
- Do not use branded icons.
- Consider where you place file tiles in a view. Avoid making the user scroll down a long list of file tiles to see important information.
- Only the user who uploaded the file can remove it. A file tile should be read-only for all other users.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## Specifications

Refer to the following specifications when you construct a file tile.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Composition

A file tile contains the following elements:

- **Container (required)**: The container holds the file icon, file name, file size, and remove X. The file download process starts when the user clicks anywhere in the container *except the Remove X*.
- **File icon (required)**: The file icon represents the file format.
- **File name (required)**: The file name displays the name of the file.
- **File size (required)**: The file size displays the size of the file.
- **Remove X (optional)**: When the user clicks **X**, the file is removed from the page. Only the user who uploaded the file can remove it.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"File tile composition"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-composition.png" width="419"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Style

Use these specifications when you construct a file tile.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"File tile style"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-style.png" width="544"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Spacing

Refer to these spacing guidelines when you construct a file tile.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"File tile spacing"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-spacing.png" width="255"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

## States

A checkbox can exist in a *loading*, *error*, *focus*, *hover*, and *read-only* state.

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Loading

When a file tile loads, use the loading bar to indicate progress.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Loading state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-states-loading.png" width="548"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Error

An error state can apply to a file tile when the file tile loads.

When the user clicks the **Retry** button, the file tile loads again.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Error state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-states-error.png" width="551"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow"  markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Focus

The focus state provides keyboard accessibility and indicates that the user can press **Enter** to download or remove the file.

See [focus states]({{site.baseurl}}/style/focus-states.html) for guidance in constructing focused file tiles.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Focus state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-states-focus.png" width="477"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Hover

The hover state indicates that the user can download the file or remove the file.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Hover state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-states-hover.png" width="575"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

### Read-only

The read-only state indicates that the file can only be downloaded. A user cannot remove a read-only file.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"Read-only state"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-states-readonly.png" width="255"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

## Iconography

Use these icons to represent the file format.

Use a paperclip icon when there is no file extension or the file format is unknown.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

{% figure [caption:"File type icons"] [class:"image bg-light border"] %}
<embed src="{{site.url}}/assets/images/components/content-areas/file-tiles/filetiles-composition-icon.png" width="530"/>
{% endfigure %}

{% endcolumn %}

</div>

</section>
