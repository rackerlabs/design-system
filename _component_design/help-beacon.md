---
title: Help Beacon
parent: Help, Notifications
layout: component
category: Components
usage: |
  These tooltips provide users with additional information while completing
  tasks and alert them to new features.
preview-image: components/preview-help.svg
status: deprecated, in-progress
resource: true
---

{% include toc.html %}

The beacon can be used to identify the location of new functionality or
important features for first-time user.

-   Place the beacon to the right or left of navigation items, labels or
    section headers.

-   Use one beacon at a time.

-   Remove the beacon once it has been viewed.

-   Avoid using the beacon for warnings or alerts.

-   Don't obsure text with a beacon.

<div class="ws-beacons">
  <div class="ws-beacon-con">
    <p>Grey:</p>
    <div class="ds-beacon-con"><span class="ds-beacon ds-tooltip-source temp-beacon" title="<h3 class='ds-tooltip-h3'>New Feature Title</h3><p class='ds-tooltip-p'>A very short explanation of the new feature and something about what it does.</p><div class='ds-btn-group-tooltip'><button class='ds-btn-sm ds-tooltip-btn' onclick='removeTooltips()' type='button'>Learn More</button><button class='ds-btn-sm-sec ds-tooltip-btn' onclick='removeTooltips()' type='button'>Cancel</button></div>"></span></div>
  </div>
  <div class="ws-beacon-con">
    <p>Theme match:</p>
    <div class="ds-beacon-con"><span class="ds-beacon-cyan ds-tooltip-source temp-beacon" title="<h3 class='ds-tooltip-h3'>New Feature Title</h3><p class='ds-tooltip-p'>A very short explanation of the new feature and something about what it does.</p><div class='ds-btn-group-tooltip'><button class='ds-btn-sm ds-tooltip-btn' onclick='removeTooltips()' type='button'>Learn More</button><button class='ds-btn-sm-sec ds-tooltip-btn' onclick='removeTooltips()' type='button'>Cancel</button></div>"></div>
  </div>
  <div class="ws-beacon-con">
    <p>Theme complement:</p>
    <div class="ds-beacon-con"><span class="ds-beacon-orange ds-tooltip-source temp-beacon" title="<h3 class='ds-tooltip-h3'>New Feature Title</h3><p class='ds-tooltip-p'>A very short explanation of the new feature and something about what it does.</p><div class='ds-btn-group-tooltip'><button class='ds-btn-sm ds-tooltip-btn' onclick='removeTooltips()' type='button'>Learn More</button><button class='ds-btn-sm-sec ds-tooltip-btn' onclick='removeTooltips()' type='button'>Cancel</button></div>"></div>
  </div>
</div>
