---
title: Install the Helix Sketch Library
layout: docs
status: stable
resource: true
category: Resources
last-modified: 2018-04-05
usage: >
   The Helix team provides a rich set of preconfigured user interface (UI) components that you can use in Sketch design toolkit to design Rackspace Control Panels. These come in both high-fidelity (library) and low-fidelity variations (stickersheet).
---

<section class="static-section" markdown="1">
<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

There are two options for installing the Helix Sketch library:

1.  **Use Google Drive sync on your computer.**

    The primary benefit of this approach is that you automatically receive updates made to the library.

1.  **Download directly from GitHub.**

    This approach involves downloading a copy of the library from Github, saving it to your local machine, and then loading the library into Sketch. The primary benefit of this approach is that it is easier to set up, but you do not automatically receive updates and must download the library each time there is an update.

**By the way,** we send an email any time the Helix library is updated. If you are not on the distribution list, you can request access in the <a href="https://rackspace.slack.com/messages/C1ZPBPYKZ/" target="_blank">#helix slack channel <hx-icon type="external-link"></hx-icon></a>.

{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

### 1. Use Google Drive sync on your computer
Complete the following tasks to install the Sketch Library from your Google
Drive.

Before you begin:

- Ensure that you have a Google Drive account. If you have a Gmail account, you
have access to a Google Drive. For more information, see [Google Drive](https://www.google.com/drive/)

- Install a licensed copy of [Sketch](http://www.sketchapp.com). If you do not have a copy of Sketch, email [helix@rackspace.com](mailto:helix@rackspace.com) to request a license.

{% endcolumn %}

</div>

</section>

#### Task 1: Move the shared Sketch Library to your Google Drive account

<section class="static-section" markdown="1">

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

After you sign up for a Google Drive account, if the library has not already
been made available to you, send an email to the Helix Team requesting access
to the Helix Sketch Library. The Helix Team will provide a copy of the library
to your **Shared with me** folder.

Complete the following task to move the shared library to My Drive.

1. Log in to Google Drive, and click **Shared with me**.
1. Right-click the Helix Library and select **Add to My Drive**.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/shared-drive.png"/>
   {% endfigure %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/add-to-my-drive.png"/>
   {% endfigure %}

{% endcolumn %}

</div>
</section>

#### Task 2: Install Google Backup and Sync

<section class="static-section" markdown="1">
<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Google Backup and Sync is a free product that you use to synchronize changes
made to the shared Helix library files and the Helix library stored on your
My Drive.

You only need to use the synchronization feature included in Google Backup and
Sync. You can configure Google Backup and Sync to back up your files, but it is
not required.

1. Go to [Download Backup and Sync](https://www.google.com/drive/download/backup-and-sync/)

1. Download and install Google Backup and Sync.

1. On the **Would you like to copy...** dialog box, click **Copy**.

1. Start Google Backup and Sync, and on the **Welcome** dialog box, click **Get Started**.

1. On the first wizard panel, sign in to your Google account.

1. On the **My Laptop** panel, choose folders that you want to back up.

    {% include note.html content="You do not need to use the back up feature to work with the Sketch library. You can clear all checkboxes on the **My Laptop** panel, and click **Next**." %}


1. Click **Sync only these folders**.

1. From the list of folders, select the **Helix Library** folder, and click **Start**.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/backup-my-laptop.png"/>
   {% endfigure %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/sync-helix-folder.png"/>
   {% endfigure %}

{% endcolumn %}

</div>
</section>

#### Task 3: Import the Helix Sketch Library into Sketch

<section class="static-section" markdown="1">
<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Complete the following steps to add the Helix Sketch Library into Sketch.

1. Open Sketch and click **Sketch > Preferences**.

1. On the **Preferences** dialog box, click **Libraries**, and then click **Add Library**.

1. Click **Google Drive > sketch_libraries > helix-ui-components.sketch**.

1. Click **Open**.


{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/Add-library-1.png"/>
   {% endfigure %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/Add-library-2.png"/>
   {% endfigure %}

   {% figure [caption:"Sketch adds the Helix library to the list of libraries."] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/Add-library-3.png"/>
   {% endfigure %}


{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">

### Option 2: Download directly from GitHub

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-12-md hxSpan-12-lg" %}

If you do not want to use the Google Drive approach to installing the Sketch Library, you can download the library to your local machine and then import it into Sketch.

{% include note.html content="When you import the Sketch library from your local machine, you do not receive automatic updates." %}

{% endcolumn %}

</div>
</section>

<section class="static-section" markdown="1">
#### Task 1: Download the Sketch Library from Github

<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

1. Go to the [hxSketchLibrary repository](https://github.com/technabors/hxSketchLibrary).

1. Select the **helix-ui-components.sketch** file from the repo.

1. Download Sketch Library to your local machine.

    {% include note.html content="The repo currently houses a separate library for creating redlines and the team plans to add more libraries to this repo in the future. Feel free to **star**, **watch**, and contribute!" %}

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/download-from-github.png"/>
   {% endfigure %}

{% endcolumn %}

</div>
</section>

#### Task 2: Import the Helix Sketch Library into Sketch

<section class="static-section" markdown="1">
<div class="hxRow" markdown="1">

{% column left:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-4-md hxSpan-4-lg" %}

Complete the following steps to bring the Helix Sketch Library into Sketch.

1. Open Sketch and click **Sketch > Preferences**.

1. On the **Preferences** dialog box, click **Libraries**, and then click **Add Library**.

1. Locate the library on your local machine, and click **helix-ui-components.sketch**.

1. Click **Open**.

{% endcolumn %}

{% column right:"hxCol hxSpan-12-xs hxSpan-12-sm hxSpan-8-md hxSpan-8-lg" %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/Add-library-1.png"/>
   {% endfigure %}

   {% figure [caption:""] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/Add-library-4.png"/>
   {% endfigure %}

   {% figure [caption:"Sketch adds the Helix library to the list of libraries."] [class:"image bg-light border"] %}
   <embed src="{{site.url}}/assets/images/install-sketch-library/Add-library-3.png"/>
   {% endfigure %}

{% endcolumn %}

</div>
</section>
