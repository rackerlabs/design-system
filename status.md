---
title: Component Status
layout: docs
---

{% include toc.html %}

Listing of components in the language and their current status.

  <table class="hxTable hxTable--condensed status-table">
    <thead>
      <tr>
        <th>Component</th>
        <!-- Removing this line until we have a strategy around versioning as this is a future item<th class="th-1-3">Version Added</th> -->
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {%- for document in site.component_design -%}
        {%- if document.category -%}
          <tr>
            <td><a href="{{site.baseurl}}{{document.url}}.html">{{document.title}}</a></td>
            <!--<td class="compressed">1.0</td> -->
            <td>
              {%- if document.status and document.resource -%}
                {%- if document.status == "in-progress" -%}
                  <hx-icon type="exclamation-triangle" class="progress"></hx-icon>
                {%- elsif document.status == "stable" -%}
                  <hx-icon type="checkmark" class="stable"></hx-icon>
                {%- elsif document.status == "deprecated" -%}
                  <hx-icon type="times-circle" class="deprecated"></hx-icon>
                {%- endif -%}
              {%- else -%}
                <hx-icon type="minus-circle" class="disabled"></hx-icon>
              {%- endif -%}
            </td>
          </tr>
        {%- endif -%}
      {%- endfor -%}
    </tbody>
  </table>


### Icon Descriptions

  <table class="hxTable  status-table">
    <thead>
      <tr>
        <th>Icon</th>
        <th>Status</th>
        <th>Explanation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><hx-icon type="minus-circle" class="disabled"></hx-icon></td>
        <td><p>Unavailable</p></td>
        <td><p>Currently no finalized interaction definitions and design specifications exist for this component. Designs should be treated with low confidence.</p></td>
      </tr>
      <tr>
        <td><hx-icon type="exclamation-triangle" class="progress"></hx-icon></td>
        <td><p>In Progress</p></td>
        <td><p>Specifications are solid for a given component but slight adjustments are expected in the future. Designs should be treated with medium confidence.</p></td>
      </tr>
      <tr>
        <td><hx-icon type="checkmark" class="stable"></hx-icon></td>
        <td><p>Complete</p></td>
        <td><p>Current interaction definitions and design specfication on the site are finalized and signed off by design. Designs should be treated with high confidence.</p></td>
      </tr>
      <tr>
        <td><hx-icon type="times-circle" class="deprecated"></hx-icon></td>
        <td><p>Deprecated</p></td>
        <td><p>Specifications listed on the site are accurate, but apply to a deprecated version of this component. Designs should no longer be implemented.</p></td>
      </tr>
    </tbody>
  </table>
