# WARP docs review

The `docs-review.yml` workflow runs two reviews for non-draft pull requests that change component documentation under `docs/components/` or component assets under `docs/public/components/`:

1. `scripts/review-docs.mjs` checks deterministic structure, asset, markup, and PNG transparency rules.
2. OpenAI Codex uses `gpt-6-astra` with `high` reasoning effort in a read-only sandbox to review the diff against the WARP Elements, React, Vue, iOS, and Android source repositories.

The WARP-specific review policy lives in `prompts/docs-review.md`, so it applies only to this CI reviewer and is not inherited by other agents working in the repository. The review job reads its policy, schema, and context collector from the protected default branch.

## Reviews across commits

Every push reviews the full PR diff against the base branch. The reviewer also reads the last review and its existing discussion threads, including replies and resolved or outdated threads. When the previous reviewed commit is still available, it inspects the changes since that commit to focus on new work and verify fixes. A force-push falls back to the full diff and discussion history.

The bot maintains one summary comment, updating it after each completed review. It submits an inline review only when it has new findings, with at most six comments and native GitHub suggestions where an exact replacement is safe. Existing findings stay in their original threads even if their wording or line numbers change. A matching thread ID suppresses a repeated finding; identical comments are also filtered by the publisher.

The reviewer re-checks unresolved findings and proposes resolution only with evidence that the current docs or implementation address them. The publisher resolves only threads started by this reviewer and preserves their comments and replies. It does not delete comments, resolve human-owned threads, or treat GitHub's **Outdated** label as proof of a fix. Omitted findings stay open. Resolved discussions remain part of the context so the bot can respect earlier decisions.

Before publishing, the workflow checks the live PR head and the discussion snapshot. If a new commit or reply arrived during the review, it skips the stale result. A completed summary records the reviewed commit, preventing duplicate publication on a rerun. If posting inline comments succeeded but updating the summary failed, a retry can finish the summary without repeating the comments.

Reviews use a friendly, specific tone: acknowledge observed progress, explain what matters to readers, and distinguish new findings from existing questions. They do not give a "ready/not ready" verdict. The writing policy draws on [Humanizer](https://github.com/blader/humanizer) and [Writing Clearly and Concisely](https://github.com/obra/the-elements-of-style/tree/main/skills/writing-clearly-and-concisely): concrete language, useful detail, natural phrasing, and no formulaic praise. Their guidance is adapted into the trusted prompt; the workflow does not download skills at runtime.

## Repository setup

Add an Actions repository secret named `OPENAI_API_KEY` containing an OpenAI project API key with access to `gpt-6-astra`.

The workflow deliberately does not expose that key to pull requests from forks. The deterministic checklist still runs for forked pull requests, but the Codex review is skipped. If reviews are required for untrusted fork contributions, enable Codex automatic reviews for the repository instead of exposing an API key through `pull_request_target`.

### Optional reviewer name and avatar

By default, GitHub attributes submitted reviews to `github-actions[bot]`. To give the reviewer its own identity, create a GitHub App (for example, **WARP Docs Reviewer**), set its avatar, give it read-only **Contents** and read/write **Pull requests** repository permissions, and install it only on this repository. Then configure:

- Actions variable `WARP_DOCS_REVIEW_APP_CLIENT_ID` with the app's client ID.
- Actions secret `WARP_DOCS_REVIEW_APP_PRIVATE_KEY` with the complete generated private key.

The publishing job will then create a repository-scoped installation token and submit reviews as the app. It falls back to `github-actions[bot]` while the client ID variable is absent; once the variable is added, the private-key secret is required.

GitHub converts the app's name into a lowercase handle with hyphens for its activity: **WARP Docs Reviewer** appears beside comments as `warp-docs-reviewer[bot]`. This is [GitHub's display behavior](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app#registering-a-github-app), and does not mean the app name is misconfigured. The maintained summary uses **WARP Docs Reviewer** as its visible title. The context collector recognizes this app and the `github-actions[bot]` fallback, and only manages threads attached to reviews with the reviewer's marker.

## Run the checklist locally

Compare the current checkout with `main`:

```sh
pnpm review:docs --base origin/main
```

Run its tests:

```sh
pnpm test:review-docs
```
