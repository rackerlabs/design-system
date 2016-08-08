---
title: Template
author: Author Name
usage: Summarize the pattern here.  Include a title/thumbnail image if possible.
category: components
---



## Design Considerations

#### Problems Being Addressed

1. List any user, system, business problems or goals this pattern is attempting to solve.
2. If possible, try to organize problems in order of priority

#### How the Pattern Solves these Problems
1. List how the pattern actually solves the items above.
2. If possible, try to match the solutions to the corresponding problems above

#### Known Shortcomings
* List any known problems or shortcomings in this pattern


<button>Press Me</button>

## Design Specifications
This is where you can show the specifications for all possible states of the  design.  All states will not apply to all designs, but use this as a way to build your design for any condition.   When the component doesn’t have a particular state, document why not.  Better to document that a state is not needed than to leave it empty and have someone fill it in later without knowing the why it’s empty.

#### General Layout
Note any colors, fonts, borders, margins, padding, animation timing, etc..  Here’s an example of general layout specs for a popover:

## Base Interactions
For things like nav items, buttons, table rows, links etc, define the base interaction states:

#### Hover
The mouse moves over the element.

#### Active
The mouse button is in its down state during click.

#### Disabled
The element is disabled for some reason.

#### Selected
The user has selected the element.

## Default State / First Time Experience
What happens before your component does anything? Maybe it’s the first time a user sees it. Maybe it’s not activated yet. Consider the first-time-experience -- does it need to be different than a “No Items” state?

#### Loading / Processing
Anytime data is retrieved from or sent to a backend or API, there is opportunity for a “loading” or “Processing” state.  There are plenty of ways to keep your loading state subtle and unobtrusive. Facebook and slack do a pretty good job of showing loading state.

#### No Items
Your component has talked to the systems it connects to, but it’s empty. No data. No Items. Now may be a good time to get the user to act (“Do this thing!”), or to reward them (“Good job, everything is taken care of”).

#### One Item
You have some data. On an input, this may be after the first keystroke. In a list, it might be when you have one item (or one left).  For containers of items, does the container shrink or grow based on the number of items?  Does it have a fixed height option?

#### Some Items
This is usually what you think of first. This is the ideal state for this component. Your data is loaded, you have input, and the user is relatively familiar with it.  It’s behaving normally.

#### Tons of Items
Woah there! The user has overdone it in some way. Too many results and so on.  How does the component perform and behave?  If it’s a list, does it have pagination controls or infinite scrolling?  If there are too many characters in a cell, does the text truncate -- and how?

#### Error State
Something is not right about the component.  An error has occurred.  Conditions to consider are when invalid data exists in an input, when the component fails to connect to backend while sending or retrieving  data, etc.  What happens when a call to a backend system takes too long?  Can the user cancel out?

#### Corrected State
Good to go! This item has had its needs satisfied.  Maybe the user has corrected an errant input.  When is it critical to indicate something has been corrected and when does it not matter?

#### Completed State
The user’s correct input has been received by the application. They don’t have to worry about it anymore.  What kind of notification happens if any?  Does an updated list item heartbeat green, or a toast style notification appear, or does nothing need to happen? 

## Other States & Existing Variations on Design
If you are documenting a pattern that already has several existing implementations in production, and those implementations differ one to another --  consider how your definition could, should, or should not facilitate the variations.  Do the variations need to exist?  Can any of them be discarded, and why?  Can your definition provide alternatives that are better?  Provide guidelines for good decision making in light of existing variations.


## Implementation

#### Guidelines for Use
* Do This, Don’t Do That
* Best Practices
* Why, when and how to use

## Live Examples
Show screenshots and/or provide links to control panels showing where the pattern exists.

## Create Server Page
Team: Reach
https://mycloud.rackspace.com/cloud/413742/servers#new

## Create Load Balancer Page
Team: Reach
https://mycloud.rackspace.com/cloud/413742/load_balancers


Live Examples of Variations
List any variations on this pattern, both good and bad -- ideally noting why for either case.  Example:


Accessibility
This area is optional, though ideally we will have accessibility guidelines, including colors, HTML layout etc. for all components and patterns.
