---
category: Contribute
title: 'Submit Code'
layout: website/default
---
<p>This article will walk you through understanding how the Helix site is managed and deployed, best practices for committing your work, getting approval, and getting your work pushed to the production site. It is for designers, developers, and anyone else interested in contributing to the <a href="http://design.rax.io/design-system/" target="_blank">Helix website</a>.</p>
<p>This article only describes the process for submitting code changes for the Helix website.  This is not about getting design patterns researched, tested or approved for inclusion in Helix.</p>
<p>When contributing to the Helix site, it's going to be uber important to understand, and follow, good contribution process so we have proper checks in place and aren't stepping on each other's toes.</p>
<h2>This is what we're going to go over:</h2>
<ol class="demo-list">
    <li><a href="#section-1">Helix deployments and why it's important for your work</a></li>
    <li><a href="#section-2">How to start your work each time you have something to do</a></li>
    <li><a href="#section-3">Saving (committing) your work on your computer</a></li>
    <li><a href="#section-4">Publishing your work to GitHub</a></li>
    <li><a href="#section-5">Requesting review of your work and making changes if needed</a></li>
    <li><a href="#section-6">Reviewing other people's work on your computer</a></li>
    <li><a href="#section-7">How the Helix team deploys to production</a></li>
</ol>
<hr>
<h2>A few quick notes:</h2>
<ul class="demo-list">
    <li>If you haven't already set up the Helix repo on your computer, please read <a href="http://design.rax.io/?p=2643">How to set up the Helix site on your computer so you can contribute</a></li>
    <li>This article assumes you're using the <a href="https://desktop.github.com/" target="_blank">free GitHub app</a> for managing your Git repos.</li>
</ul>
<hr>
</section>
<section id="section-1">
<h1>1) Helix deployments and why it's important for your work</h1>
<p>The Helix website is published in two locations &mdash; "staging" and "production".</p>
<ul class="demo-list">
    <li><strong>staging</strong> is located at <a href="http://staging.design.rax.io/design-system/" target="_blank">staging.design.rax.io/design-system</a>
        <p>Staging allows everyone involved to easily see what's ready to be pushed to production.</p>
    </li>
    <li><strong>production</strong> is located at <a href="http://design.rax.io/design-system/" target="_blank">design.rax.io/design-system</a>
        <p>Once staging looks good, the Helix team will push the site to production.</p>
    </li>
</ul>
<p>Coincidentally, the <a href="https://github.com/rackerlabs/design-system/branches" target="_blank">Helix GitHub repo</a> has two corresponding branches, "staging" and "master".</p>
<ul class="demo-list">
    <li><strong>The staging branch:</strong> Anytime another branch is merged into staging a build process will compile the site and automatically upload it to the staging server.</li>
    <li><strong>The master branch:</strong> It's the boss of all the branches and must remain pristine and un-broken. Merging work into master kicks off a deployment to production.</li>
</ul>
<h2>Why is this important for my work?</h2>
<p>Because you never want to work directly on the staging branch or the master branch. <strong>Always</strong> create your own branch from staging and work on it.</p>
<p>For some visual clarity, here's a chart intended to help us understand how this works:</p>
<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/helix-cicd.png" rel="attachment wp-att-2812"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/helix-cicd-550x290.png" alt="helix-cicd" width="550" height="290" class="aligncenter size-wcstandard wp-image-2812" /></a>
</section>
<section id="section-2">
<h1>2) How to start your work each time you have something to do</h1>
<p class="demo-section-description">For this tutorial, let's pretend you need to add the documentation for a Cards interaction pattern. So open up the GitHub app, select the "design-system" repo and let's prepare to start working.</p>
<ol class="demo-list">
    <li><strong>Switch to the staging branch</strong> using the dropdown at the top of the app.
        <a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/switch-to-staging.png" rel="attachment wp-att-2825"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/switch-to-staging-550x373.png" alt="switch-to-staging" width="550" height="373" class="aligncenter size-wcstandard wp-image-2825" /></a>
    </li>
    <li><strong><span style="color: red;">(!)</span> Sync the staging branch.</strong> This step is critical for ensuring that your branch has the most up-to-date code. Skip this step and you're likely to get out of sync with others' work.
        <a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/sync-staging.png" rel="attachment wp-att-2833"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/sync-staging-550x373.png" alt="sync-staging" width="550" height="373" class="aligncenter size-wcstandard wp-image-2833" /></a>
    </li>
    <li style="margin-bottom: 20px;"><strong>Create a new branch from staging.</strong> The branch name should be descriptive of the work you intend to do.
        <a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/create-branch.png" rel="attachment wp-att-2835"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/create-branch-550x373.png" alt="create-branch" width="550" height="373" class="aligncenter size-wcstandard wp-image-2835" /></a>
        <p style="width: 550px; margin: 0 auto;"><strong style="color: #0a0"><em>Pro-Tip:</em></strong>&nbsp; Try to keep the amount of changes in your branch to as few as possible. The more changes you make in a branch, the harder it will be for others to review, and the more likely you are to break stuff.</p></li>
    <li><strong>Now you're ready to code.</strong> At this point you can use SublimeText or any other text editor to work on the files located in the design-system repo.</li>
</ol>
</section>
<section id="section-3">
<h1>3) Saving (committing) your work on your computer</h1>
<p class="demo-section-description">Ok, so you created the <em>add-card-pattern-docs</em> branch and you added or changed several files using your text editor. Now you need to commit those changes to your branch (this is basically like checking a file into source control).</p>
<ol class="demo-list">
    <li style="margin-bottom: 30px;"><strong>Click the uncommitted changes button</strong> at the top of the app to see the changes you've made.
        <a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/uncommitted-changes.png" rel="attachment wp-att-2843"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/uncommitted-changes-550x373.png" alt="uncommitted-changes" width="550" height="373" class="aligncenter size-wcstandard wp-image-2843" /></a>
    </li>
    <li><strong>Deslect all rows</strong> to avoid overloading your commit.
        <a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/deselect-all-rows.png" rel="attachment wp-att-2856"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/deselect-all-rows-550x373.png" alt="deselect-all-rows" width="550" height="373" class="aligncenter size-wcstandard wp-image-2856" /></a>
        <p style="width: 550px; margin: 0 auto;"><strong>General Principle:</strong> it's easier for others to review changes when one or two files are included in each commit.</p>
        <p style="width: 550px; margin: 0 auto 30px auto;"><strong>The Exception:</strong> when you have a bunch of the same type of file, such as adding a bunch of icon files. In that case, feel free to bundle them all in one commit.</p>
    </li>
    <li><strong>Select the item(s) you want to commit</strong>, add a Summary (Description is optional), and then click "commit". This only checks your changes into the branch on your computer. It doesn't affect the repo up on GitHub.com.
        <a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/commit-details-2.png" rel="attachment wp-att-2869"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/commit-details-550x373.png" alt="commit-details" width="550" height="373" class="aligncenter size-wcstandard wp-image-2869" /></a>
        <p style="width: 550px; margin: 0 auto 30px auto;"><strong><em style="color: #0a0">Pro-Tip:</em></strong>&nbsp; The Summary field is what shows up in the repo's history. To make that history easily scannable and searchable, brevity and scoping are key. Check out some of the <a href="https://github.com/rackerlabs/canon/commits/master?after=Y3Vyc29yOuTyPFpY2%2BXVIgHaeCF8MJ3cP%2FXGKzM0" target="_blank">commit messages on Canon</a> to see what I mean. This format is based on the <a href="https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format" target="_blank">AngularJS method of commit messaging</a> which really helps keep things tidy.</strong>
        </p>
    </li>
    <li><strong>If you need to keep working on what you're doing</strong>, just make your changes and commit them to the branch.</li>
    <li><strong>Once you're done making changes</strong>, and everything is committed to your branch, your next step is to publish it.</li>
</ol>
</section>
<section id="section-4">
<h1>4) Publishing your work to GitHub</h1>
<p class="demo-section-description">When you publish your branch, the GitHub app copies the files from your computer up to the GitHub servers, making your branch visible to collaborators. Let's do that now.</p>
<ol class="demo-list">
    <li><strong>Publish your branch</strong> by clicking the "Publish" button in the top right of the GitHub app.  Notice that there are no "Uncommitted Changes".  The GitHub app will barf if you try to publish when you've got uncommitted changes.
        <a href="http://design.rax.io/wp-content/uploads/2017/0 class="demo-icon overlay-source"2/ready-to-publish.png" rel="attachment wp-att-2909"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/ready-to-publish-550x373.png" alt="ready-to-publish" width="550" height="373" class="aligncenter size-wcstandard wp-image-2909" /></a>
    </li>
    <li><strong>Booyah!</strong>  Your branch is now <a href="https://github.com/rackerlabs/design-system/branches" target="_blank">visible on GitHub</a>. It will appear in the "Branches" list as shown here.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/published-branch.png" rel="attachment wp-att-2915"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/published-branch-550x544.png" alt="published-branch" width="550" height="544" class="aligncenter size-wcstandard wp-image-2915" /></a></li>
</ol>
</section>
<section id="section-5">
<h1>5) Requesting review of your work and making changes if needed</h1>
<p>Once your branch is up on GitHub, you want to make it easily viewable by Helix leaders.</p>
<p>The best way to do that is to merge your branch into "staging", so the team can see your work on <a href="http://staging.design.rax.io/design-system/" target="_blank">the staging site</a> .</p>
<p><strong>BUT</strong>, we don't want to step on each others' toes by directly merging to the staging branch &mdash; We need approval first.</p>
<p class="demo-section-description">Let's ask someone else to review our work by submitting a "Pull Request".  This is essentially a request for approval to "pull" (merge) our branch into staging.</p>
<ol class="demo-list">
    <li><strong>Click the "New Pull Request" button</strong> for your particular branch.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/create-new-pull-request.png" rel="attachment wp-att-2947"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/create-new-pull-request-550x317.png" alt="create-new-pull-request" width="550" height="317" class="aligncenter size-wcstandard wp-image-2947" style="margin-bottom:40px;" /></a></li>
    <li><strong><span style="color: red;">(!)</span> Choose staging in the "base" dropdown</strong>, and then click the "Create pull request" button. <br>Choosing staging is important as to avoid accidentally merging your work to master.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/create-pull-request-page.png" rel="attachment wp-att-2938"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/create-pull-request-page-550x290.png" alt="create-pull-request-page" width="550" height="290" class="aligncenter size-wcstandard wp-image-2938" style="margin-bottom:40px;" /></a></li>
    <li><strong>The Helix team will review your request.</strong> Please ping the <a href="https://rackspace.slack.com/messages/helix_design_system/" target="_blank">#helix_design_system</a> channel in Slack and ask someone for a review.  Collaborators on the repo will automatically get an email notification of your request, but it's easy to not see those emails.</li>
    <li><strong>If changes are required,</strong> a Helix member will leave comments on your <a href="https://github.com/rackerlabs/design-system/pulls" target="_blank">Pull Request in GitHub</a> telling you what needs to be changed.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/pull-request-comment.png" rel="attachment wp-att-2944"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/pull-request-comment-550x164.png" alt="pull-request-comment" width="550" height="164" class="aligncenter size-wcstandard wp-image-2944" style="margin-bottom:40px;" /></a></li>
    <li><strong>To make your changes</strong>, just do the work in the same branch on your computer, commit the changes using the GitHub App, and then click the "Sync" button.  That wil push your changes up to your Pull Request.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/sync-new-changes-to-pull-request.png" rel="attachment wp-att-2945"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/sync-new-changes-to-pull-request-550x373.png" alt="sync-new-changes-to-pull-request" width="550" height="373" class="aligncenter size-wcstandard wp-image-2945" /></a></li>
    <li><strong>Once you get the thumbs up from the team</strong>, it'll be your job to click the "Merge Pull Request" button.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/booyah-dun-merge-pr.png" rel="attachment wp-att-2948"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/booyah-dun-merge-pr-550x291.png" alt="booyah-dun-merge-pr" width="550" height="291" class="aligncenter size-wcstandard wp-image-2948" style="margin-bottom:40px;" /></a></li>
    <li><strong>After that</strong>, just wait a minute for TravisCI to deploy the site.  Then, you'll be able to <a href="http://staging.design.rax.io/design-system/" target="_blank">view your work on staging</a>.</li>
</ol>
</section>
<section id="section-6">
<h1>6) Reviewing other people's work on your computer</h1>
<p class="demo-section-description">Depending on how involved you are with Helix, you might find yourself called on to review the work of other people.This section will walk you through the steps for checking out other branches, and running them on your computer so you can inspect the site even when it's not on staging yet.</p>
<ol class="demo-list">
    <li><strong>Using the GitHub app</strong>, click the branch menu at the top and choose the branch you want to view.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/select-branch-to-view.png" rel="attachment wp-att-2952"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/select-branch-to-view-550x373.png" alt="select-branch-to-view" width="550" height="373" class="aligncenter size-wcstandard wp-image-2952" /></a></li>
    <li><strong>Press the "View Branch" button.</strong>  This will set the selected branch as the one you're going to work on.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/view-branch-and-sync.png" rel="attachment wp-att-2953"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/view-branch-and-sync-550x373.png" alt="view-branch-and-sync" width="550" height="373" class="aligncenter size-wcstandard wp-image-2953" /></a></li>
    <li><strong>If you don't already have Jekyll running</strong>, switch open a Mac Terminal window.</li>
    <li><strong>Change directory to the design-system folder</strong><code>cd ~/github/design-system</code></li>
    <li><strong>Run Jekyll</strong><code>bundle exec jekyll serve --watch</code></li>
    <li><strong><a href="http://localhost:4000/" target="_blank">View the website locally</a></strong></li>
</ol>
<p>At this point you're not really going to make changes, unless the requestor asks you to.  Making changes to someone else's Pull Request without them asking is a tad rude.</p>
<p>Just take note on anything you that needs to change, and post comments in the Pull Request for their branch.</p>
</section>
<section id="section-7">
<h1>7) How the Helix team deploys the site</h1>
<p>Let's say that you got your site merged into staging, and the right people have said it's good to go to production now.</p>
<p>This is when a Helix team member will need to take the reigns and merge staging into master, which then deploys the production website.</p>
<p class="demo-section-description">Helix team, this bud's for you!</p>
<ol class="demo-list">
    <li><strong>Go to the <a href="https://github.com/rackerlabs/design-system/branches" target="_blank">Branches page on GitHub</a></strong>, and click the "New Pull Request" button for the staging branch.<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/pull-request-for-staging.png" rel="attachment wp-att-2954"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/pull-request-for-staging-550x510.png" alt="pull-request-for-staging" width="550" height="510" class="aligncenter size-wcstandard wp-image-2954" /></a></li>
    <li><strong>If you'd like</strong>, enter in a summary of what's going public with this update and then click "Create pull request".<a class="demo-icon overlay-source" href="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/release-notes.png" rel="attachment wp-att-2955"><img src="http://c1ee333499ed5f44e56a-fa12562cfe810d69bedcc36a0ac289ef.r55.cf1.rackcdn.com/img/contribute/release-notes-550x297.png" alt="release-notes" width="550" height="297" class="aligncenter size-wcstandard wp-image-2955" /></a></li>
    <li><strong>Click the "Merge Pull Request" button</strong>.  Wait a minute or so, and then check the <a href="http://design.rax.io/design-system/" target="_blank">production website</a> to make sure everything is good.</li>
    <li><h2>Booyah, Dun!</h2></li>
</ol>

</section>