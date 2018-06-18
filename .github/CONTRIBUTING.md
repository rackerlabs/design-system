# Thanks for considering contributing

:tada: We love having you here. :tada:

First, if you're new to this repo, we encourage you to go look at our main
[contribution document](../contribute.md). A lot of our information on
documentation (syntax, style, editors), custom implementations for markdown
and Jekyll, and design submission information can be found there.

## Labels for issues and pull requests

We use labels to indicate many things in this repo. Here is a general list of
labels and when to use them on issues or pull requests (PR).

| -- | -- |
| Label | Use |
| `browser-*` | (_Bugs only_) The named browser is affected by this bug. |
| `prio-*` | This issue or PR should be prioritized specifically as noted. We generally only use these on issues that have not been groomed for sprints. |
| `status-approved` | (_PRs only_) The PR is approved for merge. Use this label if you created the PR and need someone else to merge it as we do not do self-merges on this project. |
| `status-blocked` | The issue or PR cannot be completed due to another issue or PR or due to an outside problem. |
| `status-carryover` | The issue or PR has been carried over from a previous sprint. In practice, we never really use this label as we track this information in a private JIRA. |
| `status-doing` | This issue or PR is in progress by someone on the team. While this label might seem the same as `WIP`, this label can be applied to an issue that does not have a corresponding visible PR while `WIP` is used exclusively on PRs. |
| `status-dont-merge` | (_PRs only_) This PR should not be merged yet. It is not necessarily blocked; an example might be a PR that needs to be published at a specific date. You should apply this to a PR that is blocked but has been approved already (e.g., a PR that was approved but a later conversation blocked it before it could be merged). |
| `status-duplicate` | This issue or PR may be a duplicate of another issue or PR. Ensure you comment with the potential duplicated issue or PR so others can weigh in before the group decides to close it. |
| `status-html-review` | (_PRs only_) This PR is just a fix to HTML and only needs a technical review. Typically, these PRs are small fixes that can be merged fairly quickly with one +1. |
| `status-invalid` | This issue or PR is likely old or outdated. This label means the group needs to review the issue or PR and decide whether it should move forward or be closed. |
| `status-needs-final-signoff` | (_PRs only_) This PR needs a final LGTM before merging. |
| `status-needs-help` | The person who is assigned the issue or PR needs help with figuring out where to go next. |
| `status-needs-information` | The team member who took the issue or the author of the PR needs more information from a reviewer, issue submitter, or other party to proceed. That party should be tagged in a clear, concise comment detailing the issue to be resolved. |
| `status-needs-response` | This issue or PR needs a response from a party that was tagged in a comment OR a newly submitted issue needs a response from a team member. Assign this tag when you've finished a review that requires modifications or answers to questions, when you see a new issue come in that requires a response that you can't provide or further follow up from a more qualified team member. |
| `status-needs-review` | (_PRs only_) This PR has open reviews that need to be completed by tagged reviewers. Others are welcome to provide a review if they notice something. |
| `status-sprint-interrupt` | This issue or PR has come in and been picked up during an ongoing sprint. In practice, we never really use this label as we track this information in a private JIRA. |
| `status-wontfix` | This issue or PR is something that might not need to be fixed. Apply this label to indicate the team needs to discuss whether this issue or PR is something to fix or something beyond the mission of this team. |
| `type-bug` | (_Generally issues only_) This issue is a bug found in the code of the site or found in the appearance of the site itself. |
| `type-documentation` | (_Generally issues only_) This issue is a request to fix or enhance the documentation (the text in the markdown generated to the site). |
| `type-enhancement` | (_Generally issues only_) This issue is a request for an enhancement to some aspect of the design system. |
| `type-library` | (_Generally issues only_) This issue is related to the Helix Sketch Library. |
| `type-spec` | (_Generally issues only_) This issue is a request to fix or enhance one of the redline specs (images on the site itself).
| `type-website` | (_Generally issues only_) This issue is a request to fix or enhance the site itself (i.e., anything having to do with the code.). |
| `WIP` | (_PRs only_) This PR is in progress by someone on the team. While this label might seem the same as `status-doing`, this label is exclusively for PRs and should be used in conjunction with bracket tags on the PR title (e.g., `[WIP] Navigation restructure`). |

## Review process

When opening a PR, use labels to indicate where the PR is in the process. Add yourself as the assigned owner of the PR, and add reviewers when your PR is ready for review. Use bracket tags (i.e., `[WIP]` or `[DNM]` for work-in-progress or do not merge, respectively) in your titles, and remove those bracket tags when those statuses no longer apply.
