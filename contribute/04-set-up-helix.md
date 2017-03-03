---
category: Contribute
title: 'Set Up Helix Locally'
layout: website/default
---
<p>This article will walk you through setting up the Helix GitHub repo on your computer, and running Jekyll so that you can start writing code for the site. This is for designers, or interested parties, who are not familiar with the technology this website is built on.  </p> 
<h2>This is what we are going to cover:</h2>
<ol class="demo-list">
  <li><a href="#step-1">Get added to the Design System repo on GitHub.</a></li>
  <li><a href="#step-2">New to GitHub?  Use the GitHub desktop app.</a></li>
  <li><a href="#step-3">Use Mac Terminal to check your Ruby setup.</a></li>
  <li><a href="#step-4">Set up RBENV and Ruby on Mac OS.</a></li>
  <li><a href="#step-5">Install Gems and then Run Jekyll to generate the site.</a></li>
</ol>
<section>
<h2>A few quick notes before we start:</h2>
<ul>
  <li>For the purpose of this tutorial, when you see text styled like the following line &mdash; it is meant to be copied and pasted into a Terminal window, and then executed by pressing "Enter". <code>cd ~/github/design-system</code></li>
  <li>We are assuming you're doing this on a Mac. Nothing we're doing here will accidentally screw up your computer or anything terrible like that.  The worst that could happen is that you can't run the site, so don't worry.</li>
  <li>When you're done setting up Helix, check out the article on <a class="demo-icon overlay-source" href="http://design.rax.io/?p=2774">How to contribute work to the Helix website</a></li>
  <li>Please ping me, <a href="mailto:andrew.raiford@rackspace.com">Andrew Raiford</a>, if you run into trouble.  I'll be more than happy to walk you through setup. I also need to know what bumps you run into so I can change this article.</li>
</ul>
</section>
<section id="step-1">
<h1>Step 1: Get added to the Design System repo on GitHub.</h1>
<ol class="demo-list">
  <li><strong><a href="https://github.com/" target="_blank">Sign up for a GitHub account</a></strong> if you don't have one already.</li>
  <li><strong>Ping the <a href="https://rackspace.slack.com/messages/helix_design_system/" target="_blank">#helix\_design\_system</a></strong> Slack channel and request to be added as a Helix contributor.<br>We will need your GitHub username.</li>
</ol>
</li>
</section>
<section id="step-2">
<h1>Step 2: New to GitHub?  Use the GitHub desktop app.</h1>
<p>If you've already got a way of working with Git and GitHub, <a href="#step-3">proceed to step 3</a></p>
<ol class="demo-list">
  <li><strong><a href="https://desktop.github.com/" target="_blank">Download the app</a></strong></li>
  <li><strong>Open the app.</strong> If it prompts you to move the app to the Applications folder, <strong>say no</strong>.</li>
  <li><strong>Close the app</strong> and manually move it from your Downloads folder to the Applications folder in the finder window.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/Move-To-Applications.png" rel="attachment wp-att-2673"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/Move-To-Applications-300x210.png" alt="Move-To-Applications" width="300" height="210" class="align-left size-medium wp-image-2673" /></a></li>
  <li><strong>Reopen the app</strong> and enter your GitHub credentials<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/GitHub-App-Login.png" rel="attachment wp-att-2671"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/GitHub-App-Login-300x250.png" alt="GitHub-App-Login" width="300" height="250" class="align-left size-medium wp-image-2671" /></a></li>
  <li><strong>Close the window</strong> once you see your account is entered.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/GitHub-Logged-In.png" rel="attachment wp-att-2676"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/GitHub-Logged-In-300x200.png" alt="GitHub-Logged-In" width="300" height="200" class="align-left size-medium wp-image-2676" /></a></li>
  <li><strong>Click the + icon</strong> in the top left of the app and choose "Clone"<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/Clone-Design-System.png" rel="attachment wp-att-2779"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/Clone-Design-System-300x209.png" alt="Clone-Design-System" width="300" height="209" class="align-left size-medium wp-image-2779" /></a></li>
  <li><strong>Enter "design-system" in the filter</strong>, select it from the list, and click the "Clone design-system" button in the bottom right of the dialog.</li>
  <li><strong>Whooaaaa Nelly!</strong> The GitHub App wants to store the design-system folder right smack in the middle of your home directory, <em> which is just un-tidy</em>.</li>
  <li><strong>For the sake of cleanliness</strong>, create a new folder in your home directory named "github", and have the app clone the "design-system" there.  <a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/Where-to-Clone.png" rel="attachment wp-att-2782"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/Where-to-Clone-300x209.png" alt="Where-to-Clone" width="300" height="209" class="align-left size-medium wp-image-2782" /></a></li>
  <li><strong>The repo will be copied (cloned) to your computer</strong> and is stored here:  <em>your.homedirectory/github/design-system</em>.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/home-directory.png" rel="attachment wp-att-2789"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/home-directory-300x181.png" alt="home-directory" width="300" height="181" class="align-left size-medium wp-image-2789" /></a></li>
</ol>
</section>
<section id="step-3">
<h1>Step 3: Use Mac Terminal to check your Ruby setup</h1>
<p>If you're already Terminal savvy, <a href="#step-4">skip to step 4</a></p>
<ol class="demo-list">
  <li><strong>Open Mac Terminal</strong>, located at Applications/Utilities/Terminal.app</li>
  <li><strong>Terminal &ndash; AKA Command Line</strong>, lets you navigate and take actions on files and folders by entering "commands".</li>
  <li><strong>When you open Terminal</strong>, by default you are located inside your "home" directory, so my terminal reads like this:<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/mac-terminal.png" rel="attachment wp-att-2701"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/mac-terminal-300x205.png" alt="mac-terminal" width="300" height="205" class="align-left size-medium wp-image-2701" /></a></li>
  <li><strong>Navigate to the design-system</strong> folder using Terminal.<p><code>cd ~/github/design-system</code></p></li>
  <li><strong>Check your Ruby setup</strong> by attempting to install Jekyll and Bundler.<p><code>gem install jekyll bundler</code></p></li>
  <li><strong>If you see an error</strong> saying it was unable to complete due to "permission", then you need to <a href="#step-4">follow step-4</a></li>
  <li><strong>Otherwise...</strong> <a href="#step-5">proceed to step-5</a></li>
</ol>
</section>
<section id="step-4">
<h1>Step 4: Set up RBENV and Ruby on Mac OS</h4>
  <p>So&hellip; this step really bites, mostly due to the hour-long download of Xcode &mdash; but once you get through that, it'll only take a few minutes to enter some commands and be up and running.</p><p><strong>Why do I have to do this?</strong>  With the release of "El Capitan", Apple made it so you as the user cannot make changes to the instance of Ruby that comes by default on Mac.  This means you have to use RBENV (or RVM, but we're using RBENV), to install your own, personal instance of Ruby.  It sounds bad, but it's actually pretty nice.</p>
  <p>Anyway, here we go&hellip;</p>
  <ol class="demo-list">
    <li><strong>Install Xcode via the Mac App Store</strong>.  This will take about an hour.  Xcode provides developer tools which come in handy for all of this, but you never actually use Xcode.<br><a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/x-code.png" rel="attachment wp-att-2735"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/x-code-300x192.png" alt="x-code" width="300" height="192" class="align-left size-medium wp-image-2735" /></a></li>
    <li><strong>Once that's done,</strong> open up Xcode to make sure you don't have to accept any terms and conditions.</li>
    <li><strong>Back to the Terminal window</strong> to install the command-line tools<p><code>xcode-select --install</code></p></li>
    <li><strong>Install Homebrew</strong><p><code>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></p></li>
    <li><strong>Press Enter</strong> to accept the new folders Homebrew wants to create.</li>
    <li><strong>Enter the password</strong> you use to log into your computer each day.</li>
    <li><strong>Check the health of your setup</strong><p><code>brew doctor</code></p></li>
    <li><strong>Install RBENV</strong><p><code>brew install rbenv ruby-build</code></p></li>
    <li><strong>Add rbenv to bash</strong> so that the right instance of Ruby loads when you terminal<p><code>echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile</code></p></li>
    <li><strong>Tell your Mac</strong> to refresh the file you just updated<p><code>source ~/.bash_profile</code></p></li>
    <li><strong>Install Ruby with RBENV</strong>.  This will take a few minutes to complete. <p><code>rbenv install 2.4.0</code></p></li>
    <li><strong>Tell RBENV which Ruby to use</strong> <p><code>rbenv global 2.4.0</code></p></li>
    <li><strong>Install Jekyll and Bundler</strong> <p><code>gem install jekyll bundler</code></p></li>
    <li><strong>If you don't get any errors</strong> you're good to <a href="#step-5">proceed to step-5</a>.</li>
    <li><strong>Otherwise&hellip; </strong> ping Andrew Raiford in Slack.</li>
  </ol>
  </section>
<section id="step-5">
  <h1>Step 5: Install Gems and then Run Jekyll to generate the site</h1>
  <ol class="demo-list">
    <li><strong>Install the Ruby Gems</strong> which are required to run the site.<p><code>bundle install</code></p></li>
    <li><strong>Run Jekyll</strong> to compile the site and start the local web server .<p><code>bundle exec jekyll serve --watch</code></p></li>
    <li><strong>FINALLY!</strong> Open your favorite browser and go to <a href="http://localhost:4000" target="_blank">http://localhost:4000</a></li>
  </ol>
  <p>At this point, you've got a private web server running on your computer.  If you make changes to the code, Jekyll will recompile the page you changed.  That means after you save a file in your text editor, you can go to your browser and refresh to see the change.</p>
  <p><strong>To stop the server</strong> at any time, press ctrl+c on your keyboard while in the Terminal window.</p>
  <p><strong>To start the server again</strong>, make sure you're in the design-system folder in Terminal and enter</p><code>bundle exec jekyll serve --watch</code>
  <h4>So you're all set up with Helix and Jekyll</h4>
  <p>Before you dive in, it might be a good idea to check out the article on <a href="{{site.baseurl}}/contribute/submitting-code.html">How to contribute work to the Helix website</a></p>
  </section>