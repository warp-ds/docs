# WARP docs review

The `docs-review.yml` workflow runs two reviews for non-draft pull requests that change component documentation under `docs/components/` or component assets under `docs/public/components/`:

1. `scripts/review-docs.mjs` checks deterministic structure, asset, markup, and PNG transparency rules.
2. OpenAI Codex uses `gpt-5.6-sol` in a read-only sandbox to review the diff against the WARP Elements, React, Vue, iOS, and Android source repositories.

The WARP-specific review policy lives in `prompts/docs-review.md`, so it applies only to this CI reviewer and is not inherited by other agents working in the repository.

## Repository setup

Add an Actions repository secret named `OPENAI_API_KEY` containing an OpenAI project API key with access to `gpt-5.6-sol`.

The workflow deliberately does not expose that key to pull requests from forks. The deterministic checklist still runs for forked pull requests, but the Codex review is skipped. If reviews are required for untrusted fork contributions, enable Codex automatic reviews for the repository instead of exposing an API key through `pull_request_target`.

### Optional reviewer name and avatar

By default, GitHub attributes submitted reviews to `github-actions[bot]`. To give the reviewer its own identity, create a GitHub App (for example, **WARP Docs Reviewer**), set its avatar, give it read-only **Contents** and read/write **Pull requests** repository permissions, and install it only on this repository. Then configure:

- Actions variable `WARP_DOCS_REVIEW_APP_CLIENT_ID` with the app's client ID.
- Actions secret `WARP_DOCS_REVIEW_APP_PRIVATE_KEY` with the complete generated private key.

The publishing job will then create a repository-scoped installation token and submit reviews as the app. It falls back to `github-actions[bot]` while the client ID variable is absent; once the variable is added, the private-key secret is required.

After each push, the workflow submits one concise GitHub review. It attaches up to six comments to changed lines, renders exact replacements as one-click suggestions, and ends with a short reflection instead of a repeated findings list or checklist. It creates at most one review for each head commit, so rerunning a workflow does not duplicate comments.

## Continue a review conversation

Organization members and repository collaborators can reply directly in a thread started by `warp-docs-reviewer[bot]`. The reviewer will automatically re-check the pull request and implementation evidence, then answer in the same thread. No command is needed in its own threads.

To ask the reviewer something elsewhere on a component-documentation pull request, start a general pull request comment or another inline thread with `/warp-bot`, followed by the question. For example:

```text
/warp-bot Is this default the same in Elements and React?
```

Follow-ups run only when the pull request changes `docs/components/**` or `docs/public/components/**`, and only for comments from an organization member, repository owner, or collaborator. Bot comments are ignored to prevent loops. The reviewer can explain or correct an earlier finding and can attach a one-click suggestion when the active inline range supports an exact edit. It cannot edit branches, commit, approve, resolve, or merge pull requests.

Comment events first pass through `docs-review-followup-request.yml`, which has no secrets and only captures the event as untrusted data. The `workflow_run`-based `docs-review-followup.yml` then runs from the protected default branch, re-fetches the live comment from GitHub, checks the author and command or thread owner, and only then makes the OpenAI and GitHub App credentials available. This separation prevents pull request changes from replacing the trusted prompt or publisher before secrets are used.

## Run the checklist locally

Compare the current checkout with `main`:

```sh
pnpm review:docs --base origin/main
```

Run its tests:

```sh
pnpm test:review-docs
```
