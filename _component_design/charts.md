---
title: Data Visualization
parent: Data Visualizations
layout: component
category: Components
usage: Teaser Text
preview-image:
resource: true
need: charts
---

# Chart Basics {% include inprogress.html %}

{% include todo.html content="Correctly format numbers at or above 1,000 in tooltips and on axes by including commas. [VIEW JIRA](https://jira.rax.io/browse/RED-582)" %}

{% include todo.html content="Make legends look clickable when they are. It is not discoverable that data can be filtered by clicking on a legend label. [VIEW JIRA](https://jira.rax.io/browse/RED-583)" %}

{% include todo.html content="Add a [tooltip stroke](https://github.com/chartjs/Chart.js/pull/3221). [VIEW JIRA](https://jira.rax.io/browse/RED-585)" %}

When considering a data visualization for your project, always value
**substance over flash**. The most important thing is making sure users can
easily interpret data and glean insights. Charts can present accessibility
challenges designers must address. Remember to keep in mind colorblind users,
keyboard accessibility, and users with screen readers. **Best practices
include:**

-   **Title** charts and **label** axes. The only exception is when the x-axis
  shows time. Don't make the user guess what data means.

-   Always use a **legend** when color is used to convey meaning in a chart.

-   Display a **threshold or average line** when the information is available.
  This gives the user quick context as to whether the data point requires
  special attention and additional investigation.

-   Verify the information in the charts is also available to someone using a
  **screen reader**.

-   Never fully rely on hover tooltips to convey information.

## Use of Color

Color should be used intentionally to differentiate between data in charts.
When using different colors in a chart, always show a legend. When selecting
colors:

-   Avoid using more than seven colors in a single chart. It will become too
  difficult for users to distinguish between them.

-   Avoid using alert colors outside of their intended meanings unless other
  color options have been exhausted.

-   Verify colors can be distinguished by colorblind users.

-   Choose lighter and darker colors, not just different hues, to increase
  contrast and make visual distinction easier.

Many of our users are affected by color blindness, meaning they have reduced or
no sensitivity to certain colors of light. Red-green color blindness affects 8
percent of men and 0.5 percent of women with Northern European ancestry.
Deuteranomaly, a type of red-green color blindness, is the most common type of
color blindness, affecting about 5 percent of males. People with Deuteranomaly
have abnormalities in the cells that detect green light. Blue and violet can be
easily confused, and yellow and green look reddish.

Blue-yellow color blindness and complete color blindness are very rare.
Complete color blindness affects between
[1 in 30,000 and 1 in 50,000](http://www.color-blindness.com/2007/07/20/monochromacy-complete-color-blindness/)
people. Use [this tool](http://www.color-blindness.com/coblis-color-blindness-simulator/)
to simulate how mockups would appear to users with different types of color
blindness.

Photoshop and Illustator have filters to simulate what designs look like to
individuals with Protanopia (no working cells to detect red light) and
Deuteranopia (no working cells to detect green light). Both affect about 1
percent of the population each. Below, you can see how some Helix colors would
appear to someone with Deuteranopia.

Source: ["Facts About Color Blindness" by the National Eye Institute](https://nei.nih.gov/health/color_blindness/facts_about)

### Deuteranopia Color Simulation

<div class="row no-gutters">
<div class="col-md-2">
<div class="ws-chart-color-chip" style="background-color:#424242"></div>
Grey 900
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" style="background-color:#757575"></div>
Grey 700
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" style="background-color:#BDBDBD"></div>
Grey 500
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-cyan700"></div>
Cyan 700
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-cyan500" ></div>
Cyan 500
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-cyan100"></div>
Cyan 100
</div>
</div>
<div class="row no-gutters">
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-purple900"></div>
Purple 900
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-purple500"></div>
Purple 500
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-purple100"></div>
Purple 100
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-orange900"></div>
Orange 100
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-orange500"></div>
Orange 500
</div>
<div class="col-md-2">
<div class="ws-chart-color-chip" id="ws-chart-yellow700"></div>
Yellow 700
</div>
</div>

## Chart Typography
Some font sizes for chart labels and titles can be adjusted based on the size
of the chart container and page context. Only use font sizes listed in the
[typography]() section and never use a size less than 12px.

- **Chart Title:** H2 (Roboto Regular 20px) or H3 (Roboto Medium 16px)
- **Axes Labels:** Roboto Regular 14px or 12px Grey 950
- **Tick Labels:** Roboto Regular 12px Grey 700
- **Legend Labels:** Roboto Regular 14px or 12px Grey 950
- **Tooltip Title:** Roboto Medium 14px Grey 950
- **Tooltip Content:** Roboto Regular 14px Grey 950

# Statistics {% include inprogress.html %}

**Before considering any data visualization**, consider showing a simple
statistic. If you can tell the user what they want to know without forcing
chart interpretation, that is preferred.

{% include todo.html content="Create additional breakpoints for statistics to prevent weird word wrapping. [VIEW JIRA](https://jira.rax.io/browse/RED-577)" %}

**Medina Lake as of Sept. 15, 2016**
<div class="row">
  <div class="col-md-3">
    <div class="statistic">
        <div class="value">97.7%</div>
        <div class="label">Capacity</div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="statistic">
        <div class="value">1,063 ft</div>
        <div class="label">Mean Water Level</div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="statistic">
        <div class="value">5,994 acres</div>
        <div class="label">Surface Area</div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="statistic">
        <div class="value">-1.0 ft</div>
        <div class="label">Height Above Conservation Pool</div>
    </div>
  </div>
</div>

## Label Orientation Variations

Labels may appear above or below the statistic value. Be consistent.
<div class="row">
  <div class="col-md-3">
    <div class="statistic">
      <div class="value">32.91 in</div>
      <div class="label">San Antonio Avg. Annual Rainfall</div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="statistic">
      <div class="label top">San Antonio Avg. Annual Rainfall</div>
      <div class="value">32.91 in</div>
    </div>
  </div>
</div>

## Size Variations

Statistics can be displayed in small, medium, or large sizes.
<div class="row">
  <div class="col-md-3">
    <div class="large statistic">
      <div class="value">4.5 em</div>
      <div class="label">Large Value Size</div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="statistic">
      <div class="value">3 em</div>
      <div class="label">Medium Value Size</div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="small statistic">
      <div class="value">2 em</div>
      <div class="label">Small Value Size</div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="mini statistic">
      <div class="value">1 em</div>
      <div class="label">Mini Value Size</div>
    </div>
  </div>
</div>

## Vertical Statistic Group

Statistics can be clustered into a vertical group.

<div class="row">
  <div class="col-md-12">
    <b>Average Annual Rainfall</b>
    <div class="ui horizontal statistics">
      <div class="ui small statistic">
        <div class="value">49.7 in</div>
        <div class="label">Atlanta, Georgia</div>
      </div>
      <div class="ui small statistic">
        <div class="value">61.9 in</div>
        <div class="label">Miami, Florida</div>
      </div>
      <div class="ui small statistic">
        <div class="value">8.2 in</div>
        <div class="label">Phoenix, Arizona</div>
      </div>
      <div class="ui small statistic">
        <div class="value">32.9 in</div>
        <div class="label">San Antonio, Texas</div>
      </div>
      <div class="ui small statistic">
        <div class="value">37.7 in</div>
        <div class="label">Seattle, Washington</div>
      </div>
    </div>
  </div>
</div>

# Impressions {% include inprogress.html %}

Impressions are small, scannable data visualizations used in conjunction with
statistics to help users decide if they want to learn more. Enough context must
be provided around the impression to make it's meaning clear at a glance.

## Sparklines and Bar Impressions

The below impressions of line and bar charts are placed in cards and tables.
The hover states for the cards and table rows signal the user can drill in and
get more information. In most circumstances, drilling in should lead to a
larger version of the chart with appropriately labeled axes.
<div class="row">
{% column left:"col-md-3" %}
<div class="ui link card">
  <div class="content">
    <div class="statistic left">
      <div class="value">32.91 in</div>
      <div class="label">San Antonio Avg. Precipitation</div>
      <canvas id="demoBarImpression2" width="6" height="2"></canvas>
    </div>
  </div>
</div>
{% endcolumn %}
{% column right:"col-md-3" %}
<div class="ui link card">
  <div class="content">
    <div class="statistic left">
      <div class="value">34.1 in</div>
      <div class="label">Seattle Avg. Precipitation</div>
      <canvas id="demoSparkline2" width="6" height="1"></canvas>
    </div>
  </div>
</div>
{% endcolumn %}
</div>

**Annual City Weather**

| City | Avg. Temperature | Days with Sunshine | Avg. Precipitation | Monthly Avg. Rainfall |
| :---: | :---: | :---: | :---: | :--- |
| <a>San Antonio</a> | 68.7&#8457; | 300 | 32.91 in | {::nomarkdown}<canvas id="demoSparkline" width="200" height="16"></canvas>{:/} |
| <a>Seattle</a> | 52.0&#8457; | 152 | 34.1 in | {::nomarkdown}<canvas id="demoSparkline3" width="200" height="16"></canvas>{:/} |
{:class="ui table"}

**Annual City Weather**

| City | Avg. Temperature | Days with Sunshine | Avg. Precipitation | Monthly Avg. Rainfall |
| :---: | :---: | :---: | :---: | :--- |
| <a>San Antonio</a> | 68.7&#8457; | 300 | 32.91 in | {::nomarkdown}<canvas id="demoBarImpression" width="200" height="16"></canvas>{:/} |
| <a>Seattle</a> | 52.0&#8457; | 152 | 34.1 in | {::nomarkdown}<canvas id="demoBarImpression3" width="200" height="16"></canvas>{:/} |
{:class="ui table"}

## Percent Bars
Statistics can be combined with a vertical or horizontal percent bars. Always
ensure there is enough context for the bar to be accurately interpreted.

{% include todo.html content="Animate Percent Complete Impression Bars. [VIEW JIRA](https://jira.rax.io/browse/RED-576)" %}

**Medina Lake Percent Full**
<div class="ws-chart-ex-con">
  <div class="row ws-chart-row">
    <div class="col-md-3">
      <div class="ds-per-imp-con" style="height: 68px;">
        <div class="ds-per-imp-inner" style="height:97%"></div>
      </div>
      <div class="statistic left" id="ds-stat-con0">
          <div class="value">97%</div>
          <div class="label">Today</div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="ds-per-imp-con" style="height: 68px;">
        <div class="ds-per-imp-inner" style="height:100%"></div>
      </div>
      <div class="statistic left">
          <div class="value">100%</div>
          <div class="label">June 19, 2016</div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="ds-per-imp-con" style="height: 68px;">
        <div class="ds-per-imp-inner" style="height:63%"></div>
      </div>
      <div class="statistic left">
          <div class="value">63%</div>
          <div class="label">March 19, 2016</div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="ds-per-imp-con" style="height: 68px;">
        <div class="ds-per-imp-inner" style="height:68%"></div>
      </div>
      <div class="statistic left">
          <div class="value">68%</div>
          <div class="label">September 19, 2016</div>
      </div>
    </div>
  </div>

  <div class="row ws-chart-row">
    <div class="col-md-3">
      <div class="statistic left">
        <div class="label">Medina Lake</div>
          <div class="value">68%</div>
          <div class="label">full on September 19, 2016</div>
      </div>
      <div class="ds-per-imp-con-h">
        <div class="ds-per-imp-inner-h" style="width:68%"></div>
      </div>
    </div>
  </div>
</div>

## Radar Impressions

Radar charts can be abstracted. Unlike sparklines or bar impressions, these
abstractions cannot be enlarged into a full version of the chart. More emphasis
is put on the area than the individual data points. Value comes when these
radars are displayed next to each other and differences in the area shapes
provide a quick visual differentiator between the data sets.

Axes are not required to be to have the same scale in the abstractions unlike
the full sized radar. But the axes and scale should be the same across the
compared charts.

On the cloud server creation page, these impressions have tested vary well.
“This helps so that I can accurately depict which system to utilize,” said one
customer. “This middle image tells me which sever is better for my I/O”

**Server Flavors**
<div class="row">
  <div class="col-md-3">
    <div class="ui link card">
      <div class="content"><iframe class="chartjs-hidden-iframe" style="width: 100%; display: block; border: 0px none; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
        <canvas id="abstractRadar1" width="444" height="444" class="ws-card-top" style="display: block; width: 222px; height: 222px;"></canvas>
        <p>General Purpose</p>
        <ul class="body2 ws-demo-radar-details">
          <li><span>CPU</span>1</li>
          <li><span>RAM</span>1 GB</li>
          <li><span>Disk I/O</span>Better</li>
          <li><span>Network</span>200 Mb/S</li>
          <li><span>System Disk</span>20GB</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="ui link card">
      <div class="content"><iframe class="chartjs-hidden-iframe" style="width: 100%; display: block; border: 0px none; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
        <canvas id="abstractRadar2" width="444" height="444" class="ws-card-top" style="display: block; width: 222px; height: 222px;"></canvas>
        <p>Compute</p>
        <ul class="body2 ws-demo-radar-details">
          <li><span>CPU</span>2</li>
          <li><span>RAM</span>3.75 GB</li>
          <li><span>Disk I/O</span>Better</li>
          <li><span>Network</span>312 Mb/S</li>
          <li><span>System Disk</span>50GB</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="ui link card">
      <div class="content"><iframe class="chartjs-hidden-iframe" style="width: 100%; display: block; border: 0px none; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
      <canvas id="abstractRadar3" width="444" height="444" class="ws-card-top" style="display: block; width: 222px; height: 222px;"></canvas>
        <p>Memory</p>
        <ul class="body2 ws-demo-radar-details">
          <li><span>CPU</span>2</li>
          <li><span>RAM</span>15 GB</li>
          <li><span>Disk I/O</span>Good</li>
          <li><span>Network</span>625 Mb/S</li>
          <li><span>System Disk</span>50GB</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="ui link card ds-card">
      <div class="content"><iframe class="chartjs-hidden-iframe" style="width: 100%; display: block; border: 0px none; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
        <canvas id="abstractRadar4" width="444" height="444" class="ws-card-top" style="display: block; width: 222px; height: 222px;"></canvas>
        <p>Storage</p>
        <ul class="body2 ws-demo-radar-details">
          <li><span>CPU</span>4</li>
          <li><span>RAM</span>15 GB</li>
          <li><span>Disk I/O</span>Better</li>
          <li><span>Network</span>1.3 Gb/S</li>
          <li><span>System Disk</span>40GB</li>
        </ul>
      </div>
    </div>
  </div>
  </div>

# Bar Chart {% include inprogress.html %}

**Use to compare items against each other or throughout time and identify
outliers.**

{% include todo.html content="Improve implementation of a threshold line. Make sure the threshold/average line extends the entire width of the x axis. Show a tooltip with the threshold/average when any part of the line is hovered over. [VIEW JIRA](https://jira.rax.io/browse/RED-578)" %}

Bar charts showing a single data set should use a single color, and there is no
need to show a legend. When comparing throughout time, bar charts and line
charts can sometimes be used interchangeably. **Use a line chart if:**

-   The bar chart showing one data set has more than 12 bars or the
  multi-column bar chart has more than 24 bars.

-   Small or barely distinguishable differences are expected between bar
  heights. Small differences will be easier to identify in a line chart.


**Length of World's Largest Rivers Defined by Discharge**

<canvas id="demoBarChart" width="12" height="5"></canvas>

**Nile River Yearly Discharge**

<canvas id="demoLineBarChart" width="12" height="5"></canvas>

## Multiple Data Sets

Bar charts can also compare up to four data sets against each other over time.
Distinguish between data sets with color and show a legend. Assure the same
y-axis unit applies to each data set. Datasets should also have similar orders
of magnitude. For example, changes in the annual discharge of a local creek
will be unnoticeable if displayed on the same chart as the Nile River's annual
discharge.

**Monthly Rainfall**
<canvas id="demoBarChartb" width="12" height="5"></canvas>

## Horizontal Bar Charts

Long labels are easier to read on a horizontal bar chart.

{% include todo.html content="Fix how descending letters are cut off in X-axis labels. [VIEW JIRA](https://jira.rax.io/browse/RED-579)" %}

**Length of World's Largest Rivers Defined by Discharge**
<canvas id="demoBarChartd" width="12" height="5"></canvas>


<!--REMOVING: There's no immediate need for this. High effort customization to
the legend needed to make the chart understandable.

# Bubble Chart {% include inprogress.html %}
**TODO:** Fix legend. Indicate what bubble radius represents. Show continent
groups instead of individual rivers.

**TODO:** Change the display of the data in the tooltip.

**Use to show relationship between variables or show more than two variables at
once.**

A bubble chart displays up to four variables of data at a time. It can show the
correlation between the x- and y-axis variables. A third variable determines
the radius of the bubble. And bubbles can be color coded into categories
depicting a fourth variable. A legend should be displayed to depict the meaning
of bubble radiuses and color categories.

Be conscientious of the number of bubbles and the size of the chart. Too many
bubbles on too small of a chart can create a useless or confusing
visualization.

## The World's Largest Rivers

<canvas id="demoBubbleChart" width="12" height="5"></canvas>

-->

# Doughnut Charts {% include inprogress.html %}

**Use to show composition.**

{% include todo.html content="Make custom right legends clickable like default legends. [VIEW JIRA](https://jira.rax.io/browse/RED-588)" %}

{% include todo.html content="Center and resize statistic in doughnut carts with media queries. [VIEW JIRA](https://jira.rax.io/browse/RED-589)" %}

Doughnut charts are the only Helix charts that show an item's share of the
total. Limit the number of slices to seven or less. If there are more
categories than seven, group all but the largest six into an "other" category.
Always show legends with a doughnut chart.

Doughnut charts can be combined with a statistic shown in the center
whitespace.

**Large Rivers per Continent**

<div class="ds-per-doughnut-con col-md-4" id="get-my-width-lg">
  <canvas id="demoDoughnutChart" width="1" height="1"></canvas>
  <div class="ui statistic ds-per-doughnut-center-lg" id="get-my-height-lg">
    <div class="label">Africa</div>
    <div class="value">13 Rivers</div>
  </div>
</div>
<div class="ds-custom-legend-con col-md-3">
  <div id="demoDoughnutChartLegend" class="ds-right-legend"></div>
</div>

## Small Display with Percent
Small doughnuts can be used to show percent complete or full for multiple
items. A legend is not needed.

**Sunny Daytime Hours**
<div class="ds-per-doughnut-con col-md-2" id="get-my-width-sm">
  <canvas id="perDough1" width="1" height="1"></canvas>
  <div class="ui small statistic ds-per-doughnut-center" id="get-my-height-sm">
    <div class="label">Tucson</div>
    <div class="value">85%</div>
  </div>
</div>

<div class="ds-per-doughnut-con col-md-2">
  <canvas id="perDough2" width="1" height="1"></canvas>
  <div class="ui small statistic ds-per-doughnut-center">
    <div class="label">Syracuse</div>
      <div class="value">46%</div>
    </div>
</div>

<div class="ds-per-doughnut-con col-md-2">
  <canvas id="perDough3" width="1" height="1"></canvas>
  <div class="ui small statistic ds-per-doughnut-center">
    <div class="label">Dallas</div>
      <div class="value">61%</div>
    </div>
</div>

<div class="ds-per-doughnut-con col-md-2">
  <canvas id="perDough4" width="1" height="1"></canvas>
  <div class="ui small statistic ds-per-doughnut-center">
    <div class="label">Seattle</div>
      <div class="value">47%</div>
    </div>
</div>

# Line Charts {% include inprogress.html %}

**Use to show trends over time.**

{% include todo.html content="Find a way to [skip labels and ticks](https://github.com/chartjs/Chart.js/issues/12) on x axis to make line charts less cluttered when needed. [VIEW JIRA](https://jira.rax.io/browse/RED-580)" %}

{% include todo.html content="Show line chart legend items as a line instead of a rectangle. [VIEW JIRA](https://jira.rax.io/browse/RED-586)" %}

Line charts with a single line do not need a legend. However, a line chart can
be used to show up to six lines. With multiple lines, a legend must be used.
The same y-axis unit must apply to all lines on the chart.

Lines must be thoroughly differentiated with color or pattern. Patterns are
recommend with multiple lines since the thinness of the line can make it more
different to differentiate color especially to colorblind users. Up to two
different line patterns may be used in addition to solid lines. When selecting
colors, choose lighter and darker colors, not just different hues, to make
visual distinction easier.

**Average Monthly Rainfall**
<canvas id="demoLineChartb" width="12" height="5"></canvas>

**Nile River Yearly Discharge**
<canvas id="demoLineChartd" width="12" height="5"></canvas>

## Small Display

{% include todo.html content="Change point radius and line width based on chart size. [VIEW JIRA](https://jira.rax.io/browse/RED-581)" %}

The line width and point radius can be halved when the chart doesn't span all
12 columns. Do not introduce other line widths to preserve consistency. Be
cautious when using the smaller point size because the smaller tooltip target
may make it more difficult for some users to hover over the appropriate
location and reveal tooltips.

**Nile River Yearly Discharge**
<div class="row">
  <div class="col-md-6"><iframe class="chartjs-hidden-iframe" style="width: 100%; display: block; border: 0px none; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
    <canvas id="demoLineChartf" width="1024" height="614" style="display: block; width: 512px; height: 307px;"></canvas>
  </div>
</div>

## Further Customization

Chart.js allows for customization. The tension on the lines can be changed to
make them smoother. This is recommended when the data is estimated or the trend
is more important than the individual data points. Points can also be
deemphasized in these scenarios. However, they should never be completely
removed.

The area beneath the line can also be filled. This affect should only be used
if there is one line on the chart to avoid visual clutter.

**Nile River Yearly Discharge**

<canvas id="demoLineChartC" width="12" height="5"></canvas>

<!--REMOVING DUE TO USABILITY PROBLEMS: Polar area chart is basically a bar
chart arranged in a circle. Because of that, you loose the ability to have
labels on the x-axis and must show a legend. Polar area charts work best for
cyclical data (if not - use a bar chart). If each slice has a different color,
common cylces such as 12 months or 24 hours would violate the 7 colors per
chart guideline.

# Polar Area Chart {% include inprogress.html %}

**Use to identify outliers and display cyclical data.**

Polar area charts have similarities to both bar and pie charts. Unlike pie
charts, they do not show an item's share of the total. Instead each wedge has
an equal angle. The wedges extend from the center to show deviations in the
data the way bars extend from the x-axis in the above bar chart examples. Polar
area charts are best at showing cyclical data.

Since polar area charts are less common compared to bar and pie charts,
gleaning insights from them can increase
[cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/).
Depending on your data, consider showing a bar chart or pie chart instead.

## San Antonio's Average Monthly Rainfall
<div class="ds-custom-chart-con ">
  <div class="ds-custom-chart col-md-8">
    <canvas id="demoPolarAreaChart" width="1" height="1"></canvas>
  </div>
  <div class="ds-custom-legend-con col-md-4">
    <div id="demoPolarAreaLegend" class="ds-right-legend many"></div>
  </div>
</div>
-->

# Radar Chart {% include inprogress.html %}

**Use to identify outliers and compare two data sets.**

Before using a radar chart, consider using a line chart or multi-column bar
chart. Both options can compare multiple data sets and are more familiar to
users. However, the shapes created on a radar chart can provide a visual
shortcut to aid in differentiating datasets. For example, the below chart
reveals San Antonio gets most of it's rain in the late spring; whereas, more
rain falls in Seattle during the winter.

A radar chart can have no more than 12 axes. The same units must apply to all
axes. Only two data sets can be shown at a time.

**Monthly Average Rainfall (inches)**
<div class="row">
{% column left:"col-md-4" %}
<canvas id="demoRadarChart" width="1" height="1"></canvas>
{% endcolumn %}
</div>

<style type = "text/css" scoped>
.ws-fixed-impression-height{
  height: 24px;
}
.ws-fixed-impression-height > div{
  max-width: 100%;
    max-height: 100%;
}
.ws-stat-doc-con{
  background-color: #fafafa;
  padding: 32px;
}
.ws-demo-radar-details{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.ws-demo-radar-details li{
  padding-bottom: .25em;
}
.ws-demo-radar-details li:last-of-type{
  padding-bottom: 0px;
}
.ws-demo-radar-details span{
  display: inline-block;
  width: 92px;
  color:#757575;
}
.ws-card-top{
}
</style>
