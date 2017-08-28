---
title: Searches and Filters
parent: null
layout: component
category: Components
usage: Teaser Text
preview-image:
resource: true
status: unknown
---

{% include toc.html %}

<!-- NOTE: Bart said not to worry about splitting this for Phase 1.
     TODO: Split for phase 2. -->

When an app supports large amounts of information, users should be able to
quickly locate content by searching for it.

**Basic search involves**

- Opening a search text field
- Entering and submitting a query
- Displaying a set of search results

However, the search experience can be enhanced by providing:

-   An **Assisted Search**: suggestions of search modifiers to help a user
  narrow the results. Assisted search may act as a replacement for an
  additional static set of facets.

-   **Auto-completed search suggestions (Auto-completion)** matching actual
  results in your application data

OR

-   An additional set of **static facets**

# When to Use

Search should be supported for apps that supports large amounts of information
and users need be able to quickly locate content.

## Data tables may include

-   Basic Search may be sufficient if you have a small number of criteria to
  search on and/or if your users don’t need to perform complex searches.

## Search Options

An Assisted Search may be useful if:

-   Searching and filtering is a top task for the page and warrants a robust
  capability

-   Filtering is needed but space is limited

-   Some types of filtering, like device filtering, normally would require
  using excessive screen real estate if always displayed on the screen

-   Combining multiple content types into one search would normally be
  technically prohibitive – due to performance or other limitations. The
  addition of a search modifier helps limit the query to a more targeted
  dataset.

Auto-completion may be useful if your results set may be hard to recall from
memory.

# Best Practices

- Auto-completion may be used as an option on it’s own.
- However, assisted search is best used in conjunction with auto-completion

# Basic Search

Searches provide an input field for searching through content, allowing users
to locate specific items within the website or app.

## Visual Example

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-basic.svg){:width="60%"}
{% endfigure %}

# Assisted Search/Auto-completion

## States

### Default State

-   Upon clicking the search box the user should be presented with a list of
  keyword that they can use to filter their search.

-   The user can click or type out a keyword to use it as a filter to narrow
  down their search.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-default-state.svg){:width="60%"}
{% endfigure %}

### Loading/Processing

-   If autocomplete is taking time to load, a loading spinner should be used in
  place of results.

-   There is no error state for autocomplete

-   User should still have instructions for how to search without
  auto-completed results (Enter)

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-processing.svg){:width="60%"}
{% endfigure %}

### Results

Search completion results should be divided up by categories if possible.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-results.svg){:width="60%"}
{% endfigure %}

### Hover

-   The user may click or use their arrow keys to select one of the items in
  the dropdown list

-   **Visual:** Hover color should be **Cyan 50**

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-hover.png){:width="60%"}
{% endfigure %}

### Active

-   **Visual:** When a keyword is actively being used but has not yet been
  completed with search criteria it should have a background color of
  **Cyan 100**

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-active.svg){:width="60%"}
{% endfigure %}

### Selected

-   **Visual:** When a filter+search completion item have been selected, it
  should have a background color of **Greyscale 400**

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-selected.svg){:width="60%"}
{% endfigure %}

### Date Selector

-   Date filters (“after”, “before” or “on”) should trigger a date picker

-   The datepicker should appear after typing one of the above keywords + a
  colon

-   The datepicker should also appear if one of the above items is clicked from
  the menu

-   Refer to the datepicker pattern for more information on how to use and
  implement a datepicker.

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-date-selector.svg){:width="60%"}
{% endfigure %}

### Query Strings

-   Multiple queries may be stringed together

-   If the number of queries extends beyond the length of the search box, it
  should function like a normal text box and the overflow should be hidden

-   The user can move through the queries with their arrow keys or click into a
  query to edit it

-   Backspace should delete a single character not the entire query

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-query-strings.svg){:width="60%"}
{% endfigure %}

### Clear

- User make click the X to clear all of the search queries
- The page should be refreshed to its default state

{% figure [caption:""] [class:"image bg-light border"] %}
![]({{site.cdn_url}}/img/components/search-clear.svg){:width="60%"}
{% endfigure %}

# Text Guidelines

Limit filter tags to one word (e.g. Device, On, Before, Type)

# Research

Effective testing of Guided Search was challenging. Invision isn’t robust
enough to make it very believable. Axure would have required a really complex
prototype (possibly not worth the time). In the future, we will either test
with our production or staging sites or an HTML prototype.

For now though, we have a few research studies:

- [Customer Research Days: Notification Center](http://design.rax.io/?customer-research=customer-research-days-notification-center)
- [How Do Customers AND Rackers Choose Devices?](http://design.rax.io/?customer-research=how-do-customers-and-rackers-choose-devices)

<!--
# Facets
-->
