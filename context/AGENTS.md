# AGENTS.md

**Status:** Not yet in use. Arrives in Module 6 (team version), Module 11 (yours).

## Preview
CLAUDE.md tells an agent how to behave everywhere. AGENTS.md tells a *specific kind* of agent
what its job is: what a review agent checks before approving, what a planning agent must
produce before code, what a test agent refuses to skip. Copilot and VS Code read the nearest
AGENTS.md in the directory tree, so different folders can carry different rules.

In the group project, your team will write one. The interesting question is what a review
agent should refuse to approve. Start noticing what you would refuse.
