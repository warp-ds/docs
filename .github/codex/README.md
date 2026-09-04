# WARP docs review

The `docs-review.yml` workflow runs two reviews for non-draft pull requests that change component documentation under `docs/components/` or component assets under `docs/public/components/`:

1. `scripts/review-docs.mjs` checks deterministic structure, asset, markup, and PNG transparency rules.
2. OpenAI Codex uses `gpt-5.6-sol` in a read-only sandbox to review the diff against the WARP Elements, React, Vue, iOS, and Android source repositories.

The WARP-specific review policy lives in `prompts/docs-review.md`, so it applies only to this CI reviewer and is not inherited by other agents working in the repository.

## Repository setup

Add an Actions repository secret named `OPENAI_API_KEY` containing an OpenAI project API key with access to `gpt-5.6-sol`.

The workflow deliberately does not expose that key to pull requests from forks. The deterministic checklist still runs for forked pull requests, but the Codex review is skipped. If reviews are required for untrusted fork contributions, enable Codex automatic reviews for the repository instead of exposing an API key through `pull_request_target`.

After each push, the workflow updates one summary comment and creates a GitHub review with findings attached to changed lines. It creates at most one inline review for each head commit, so rerunning a workflow does not duplicate comments. A finding with an invalid or outdated line is kept in the summary instead of failing the review job.

## Run the checklist locally

Compare the current checkout with `main`:

```sh
pnpm review:docs --base origin/main
```

Run its tests:

```sh
pnpm test:review-docs
```
