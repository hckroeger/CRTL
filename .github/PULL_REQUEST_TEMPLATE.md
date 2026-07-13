<!--
Thanks for contributing to CRTL! Please keep PRs focused - one change per PR.
See .github/CONTRIBUTING.md for the ground rules. PRs target `develop`.
-->

## What & why

<!-- What does this change do, and why? Link any related issue, e.g. "Closes #12". -->

## Type of change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation only
- [ ] Refactor / cleanup (no behavior change)

## Checklist

- [ ] One focused change, with a short description of the why (above).
- [ ] Targets the `develop` branch (or `main` for an urgent fix).
- [ ] Type-check is clean: `npm run typecheck`.
- [ ] Tests pass: `npm test` (new behavior covered by a test where practical).
- [ ] `npm run build` succeeds and the built `dist/CRTL.html` works in the browser.
- [ ] If I touched `src/icon-list.js`, `src/icons.bundled.js` is regenerated (`npm run gen-icons`) and committed.
- [ ] Added a note under `## [Unreleased]` in `CHANGELOG.md`.
- [ ] If behavior changed, kept the docs in sync: `README.md`, `docs/ARCHITECTURE.md`, and any in-app help.
- [ ] No secrets, no telemetry, and data still stays local to the browser.

## Testing

<!-- How did you verify this? e.g. exercised the affected interaction in the dev server or the built file over file://, screenshots. -->
