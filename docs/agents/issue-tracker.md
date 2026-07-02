# Issue tracker: GitHub Issues

Issues and PRDs for this repo are tracked as GitHub Issues.

## Conventions

- Each issue represents a feature, bug, or task.
- PRDs are typically captured as the main description of an epic/tracking issue.
- Triage state is managed via GitHub labels (see `triage-labels.md` for the label conventions).
- Comments and conversation history are added natively to the GitHub issue.

## When a skill says "publish to the issue tracker"

Use the GitHub CLI (`gh`) to create a new issue.
Example: `gh issue create --title "Feature X" --body "Description here"`

## When a skill says "fetch the relevant ticket"

Use the GitHub CLI to view the issue. The user will normally pass the issue number directly.
Example: `gh issue view <number>`
