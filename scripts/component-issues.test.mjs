import assert from 'node:assert/strict';
import test from 'node:test';

import componentContextReader from '../.github/codex/scripts/component-context.cjs';
import componentIssues from '../.github/codex/scripts/component-issues.cjs';
import publisher from '../.github/codex/scripts/post-review.cjs';
import history from '../.github/codex/scripts/review-context.cjs';

const headSha = 'a'.repeat(40);
const sourceSha = 'b'.repeat(40);
const sourceText = 'export function button() {\n  return { loading: true, announced: false };\n}\n';
const context = {
  repo: { owner: 'warp-ds', repo: 'docs' },
  payload: { pull_request: { number: 238, head: { sha: headSha } } },
};
const finding = {
  repository: 'warp-ds/elements',
  component: 'button',
  failure_key: 'loading-announcement-missing',
  title: 'Button loading status is not announced',
  docs_path: 'docs/components/button/accessibility.md',
  docs_line: 2,
  expected_behavior: 'The documented loading status is announced without moving focus.',
  expectation_source: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html',
  actual_behavior: 'Loading changes the visual state without exposing the expected announcement.',
  impact: 'Screen-reader users do not receive the progress message.',
  affected_versions: '@warp-ds/elements 2.11.0',
  reproduction: {
    status: 'reproduced',
    procedure: 'Run node --test button-announcement.test.mjs against the installed package and current source.',
    observed_result: 'Expected announced=true; received announced=false in both runs.',
  },
  upstream_status: 'present',
  upstream_evidence: 'The same reproduction fails against the checked-out current source.',
  source: {
    commit_sha: sourceSha,
    path: 'packages/button.ts',
    line: 2,
    end_line: 2,
    excerpt: '  return { loading: true, announced: false };',
  },
  existing_issue_number: 0,
  existing_fix_number: 0,
};

function repository(issues = [], overrides = {}) {
  return {
    repository: 'warp-ds/elements',
    source_sha: sourceSha,
    default_branch: 'next',
    default_branch_sha: sourceSha,
    issues_complete: true,
    issues,
    pull_requests: [],
    ...overrides,
  };
}

function harness({
  issues = [],
  snapshotIssues = issues,
  sourceHead = sourceSha,
  liveHead = headSha,
  sourceAtPublish = sourceHead,
  pullRequests = [],
  threads = [],
  summaries = [],
} = {}) {
  const calls = { issues: [], summaries: [], updates: [], reviews: [], resolutions: [] };
  const storedIssues = [...issues];
  const storedReviews = [];
  const state = { liveHead, sourceHead, sourceAtPublish, failAfterIssueCreate: false, failSummary: false };
  const listReviews = () => {};
  const listFiles = () => {};
  const listComments = () => {};
  const github = {
    paginate: async (method) => {
      if (method === listReviews) return storedReviews;
      if (method === listComments) return summaries;
      if (method === listFiles) {
        return [{ filename: finding.docs_path, patch: '@@ -0,0 +1,2 @@\n+first\n+second' }];
      }
      throw new Error('Unexpected pagination call');
    },
    graphql: async (query, variables) => {
      if (query.includes('resolveReviewThread')) {
        calls.resolutions.push(variables.threadId);
        threads.find((thread) => thread.id === variables.threadId).isResolved = true;
      }
      return {
        repository: { pullRequest: { reviewThreads: { nodes: threads, pageInfo: { hasNextPage: false } } } },
      };
    },
    rest: {
      pulls: {
        get: async () => ({ data: { state: 'open', draft: false, head: { sha: state.liveHead } } }),
        listReviews,
        listFiles,
        createReview: async (value) => {
          calls.reviews.push(value);
          storedReviews.push({ ...value, user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' } });
        },
      },
      issues: {
        listComments,
        createComment: async (value) => {
          if (state.failSummary) throw new Error('Summary unavailable');
          calls.summaries.push(value);
          summaries.push({ ...value, id: 123, user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' } });
        },
        updateComment: async (value) => {
          calls.updates.push(value);
          summaries.find((summary) => summary.id === value.comment_id).body = value.body;
        },
      },
    },
  };
  const componentGithub = {
    graphql: async () => ({
      repository: {
        nameWithOwner: 'warp-ds/elements',
        defaultBranchRef: { name: 'next', target: { oid: state.sourceHead } },
        issues: {
          nodes: storedIssues.map((issue) => ({
            ...issue,
            stateReason: issue.state_reason,
            updatedAt: issue.updated_at,
            author: issue.author || { login: 'maintainer', __typename: 'User' },
          })),
          pageInfo: { hasNextPage: false, endCursor: null },
        },
        pullRequests: { nodes: pullRequests },
      },
    }),
    rest: {
      repos: {
        getBranch: async () => ({ data: { commit: { sha: state.sourceAtPublish } } }),
        getContent: async () => ({
          data: { type: 'file', encoding: 'base64', content: Buffer.from(sourceText).toString('base64') },
        }),
      },
      issues: {
        create: async (value) => {
          calls.issues.push(value);
          const created = {
            number: 42,
            title: value.title,
            body: value.body,
            state: 'OPEN',
            updated_at: '2026-09-08T12:00:00Z',
            url: 'https://github.com/warp-ds/elements/issues/42',
            author: { login: 'warp-docs-reviewer', __typename: 'Bot' },
          };
          storedIssues.push(created);
          if (state.failAfterIssueCreate) {
            state.failAfterIssueCreate = false;
            throw new Error('Lost issue creation response');
          }
          return { data: { ...created, html_url: created.url } };
        },
      },
    },
  };
  const componentContext = {
    enabled: true,
    head_sha: headSha,
    repositories: [repository(structuredClone(snapshotIssues), { pull_requests: pullRequests })],
  };
  const publish = async (candidate = finding, overrides = {}) => {
    const reviewState = await history.readReviewState(github, { ...context.repo, pull_number: 238 });
    return publisher.postReview({
      github,
      componentGithub,
      context,
      reviewContext: { head_sha: headSha, threads: reviewState.threads },
      componentContext,
      reviewJson: JSON.stringify({
        summary: 'The loading guidance led to a reproducible component issue.',
        comments: [],
        thread_updates: [],
        component_issues: Array.isArray(candidate) ? candidate : [candidate],
      }),
      ...overrides,
    });
  };
  return { calls, publish, componentContext, componentGithub, storedIssues, github, state };
}

test('files a reproduced component bug with evidence and links it from the docs summary', async () => {
  const { calls, publish } = harness();
  await publish();
  assert.equal(calls.issues.length, 1);
  assert.equal(calls.issues[0].owner, 'warp-ds');
  assert.equal(calls.issues[0].repo, 'elements');
  assert.match(calls.issues[0].body, /Expected announced=true/);
  assert.match(calls.issues[0].body, /warp-ds\/docs\/pull\/238/);
  assert.match(calls.issues[0].body, new RegExp(sourceSha));
  assert.match(calls.summaries[0].body, /warp-ds\/elements\/issues\/42/);
  assert.equal(calls.resolutions.length, 0);
});

test('rejects a target outside the component repositories before publishing anything', async () => {
  const { calls, publish } = harness();
  await assert.rejects(publish({ ...finding, repository: 'other-org/private' }), /repository/i);
  assert.equal(calls.issues.length, 0);
  assert.equal(calls.summaries.length, 0);
});

test('accepts a Figma requirement link anchored to a component node', async () => {
  const { calls, publish } = harness();
  await publish({ ...finding, expectation_source: 'https://www.figma.com/design/fixture/Button?node-id=1-2' });
  assert.equal(calls.issues.length, 1);
  assert.match(calls.issues[0].body, /node-id=1-2/);
});

test('does not file uncertain or unreproduced findings', async () => {
  for (const candidate of [
    { ...finding, upstream_status: 'unverified' },
    { ...finding, reproduction: { ...finding.reproduction, status: 'not_reproduced' } },
  ]) {
    const { calls, publish } = harness();
    await publish(candidate);
    assert.equal(calls.issues.length, 0);
    assert.match(calls.summaries[0].body, /not filed|needs verification/i);
  }
});

test('does not file a bug already fixed in current source', async () => {
  const { calls, publish } = harness();
  await publish({ ...finding, upstream_status: 'fixed' });
  assert.equal(calls.issues.length, 0);
  assert.match(calls.summaries[0].body, /fixed upstream/i);
  assert.match(calls.summaries[0].body, new RegExp(sourceSha));
});

function issue(number, overrides = {}) {
  return {
    number,
    title: 'An existing Button bug',
    body: 'Observed behavior and reproduction.',
    state: 'OPEN',
    state_reason: null,
    updated_at: '2026-09-08T10:00:00Z',
    url: `https://github.com/warp-ds/elements/issues/${number}`,
    author: { login: 'maintainer', __typename: 'User' },
    ...overrides,
  };
}

test('reuses a semantically selected issue before considering an identical title', async () => {
  const { calls, publish } = harness({ issues: [issue(7, { title: finding.title }), issue(9)] });
  await publish({ ...finding, existing_issue_number: 9 });
  assert.equal(calls.issues.length, 0);
  assert.match(calls.summaries[0].body, /elements\/issues\/9/);
  assert.doesNotMatch(calls.summaries[0].body, /elements\/issues\/7/);
});

test('links closed and not-planned issues without reopening or replacing them', async () => {
  for (const reason of ['COMPLETED', 'NOT_PLANNED']) {
    const { calls, publish, storedIssues } = harness({
      issues: [issue(9, { state: 'CLOSED', state_reason: reason })],
    });
    await publish({ ...finding, existing_issue_number: 9 });
    assert.equal(calls.issues.length, 0);
    assert.equal(storedIssues[0].state, 'CLOSED');
    assert.equal(storedIssues[0].state_reason, reason);
    assert.match(calls.summaries[0].body, /elements\/issues\/9/);
  }
});

test('recovers when GitHub creates the issue but its response is lost', async () => {
  const { calls, publish, state } = harness();
  state.failAfterIssueCreate = true;
  await assert.rejects(publish(), /Lost issue creation response/);
  assert.equal(calls.summaries.length, 0);
  await publish();
  assert.equal(calls.issues.length, 1);
  assert.equal(calls.summaries.length, 1);
  assert.match(calls.summaries[0].body, /elements\/issues\/42/);
  assert.equal((await publish()).skipped, 'already-published');
});

test('recognizes the same component bug across PRs, commits, and changed wording', async () => {
  const first = harness();
  await first.publish();
  const nextSha = 'c'.repeat(40);
  const second = harness({ issues: first.storedIssues, liveHead: nextSha });
  second.componentContext.head_sha = nextSha;
  await second.publish(
    { ...finding, title: 'Loading state needs a status announcement' },
    {
      context: { ...context, payload: { pull_request: { number: 245, head: { sha: nextSha } } } },
      reviewContext: { head_sha: nextSha, threads: [] },
    },
  );
  assert.equal(second.calls.issues.length, 0);
  assert.match(second.calls.summaries[0].body, /elements\/issues\/42/);
});

test('does not treat a marker pasted by another author as a bot issue', async () => {
  const marker = `<!-- warp-docs-component-issue:${componentIssues.issueFingerprint(finding)} -->`;
  const { calls, publish } = harness({ issues: [issue(9, { body: marker })] });
  await publish();
  assert.equal(calls.issues.length, 1);
  assert.doesNotMatch(calls.summaries[0].body, /elements\/issues\/9/);
});

test('defers filing when the duplicate inventory is incomplete or changed during review', async () => {
  for (const changed of [false, true]) {
    const { calls, publish, componentContext } = harness({
      issues: changed ? [issue(9)] : [],
      snapshotIssues: [],
    });
    if (!changed) componentContext.repositories[0].issues_complete = false;
    await publish();
    assert.equal(calls.issues.length, 0);
    assert.match(calls.summaries[0].body, /another duplicate check/);
  }
});

test('defers filing if the implementation changes before planning or immediately before publication', async () => {
  for (const options of [{ sourceHead: 'c'.repeat(40) }, { sourceAtPublish: 'c'.repeat(40) }]) {
    const { calls, publish } = harness(options);
    await publish();
    assert.equal(calls.issues.length, 0);
    assert.match(calls.summaries[0].body, /implementation changed/);
  }
});

test('rejects unverified source excerpts, commits, references, or docs locations before any writes', async () => {
  for (const candidate of [
    { ...finding, source: { ...finding.source, excerpt: 'an invented implementation' } },
    { ...finding, source: { ...finding.source, commit_sha: 'c'.repeat(40) } },
    { ...finding, source: { ...finding.source, path: '../secret' } },
    { ...finding, docs_line: 100 },
    { ...finding, docs_path: 'docs/components/alert/accessibility.md' },
    { ...finding, expectation_source: 'https://unrelated.example/claim' },
    { ...finding, existing_issue_number: 999 },
  ]) {
    const { calls, publish } = harness();
    await assert.rejects(publish(candidate));
    assert.equal(calls.issues.length, 0);
    assert.equal(calls.summaries.length, 0);
    assert.equal(calls.reviews.length, 0);
  }
});

test('validates every proposed issue before creating the first one', async () => {
  const { calls, publish } = harness();
  await assert.rejects(
    publish([
      finding,
      { ...finding, failure_key: 'different-bug', source: { ...finding.source, excerpt: 'wrong source' } },
    ]),
    /source excerpt/,
  );
  assert.equal(calls.issues.length, 0);
  assert.equal(calls.summaries.length, 0);
});

test('links an existing issue and verified merged fix without filing an unreleased fix again', async () => {
  const { calls, publish } = harness({
    issues: [issue(9, { state: 'CLOSED' })],
    pullRequests: [{ number: 10, title: 'Fix Button announcements', body: 'Fixes #9', state: 'MERGED' }],
  });
  await publish({
    ...finding,
    upstream_status: 'fixed',
    existing_issue_number: 9,
    existing_fix_number: 10,
    reproduction: { status: 'not_reproduced', procedure: '', observed_result: '' },
  });
  assert.equal(calls.issues.length, 0);
  assert.match(calls.summaries[0].body, /elements\/issues\/9/);
  assert.match(calls.summaries[0].body, /elements\/pull\/10/);
  assert.match(calls.summaries[0].body, /check release availability/);
});

test('does not publish component issues for an obsolete docs commit', async () => {
  const { calls, publish } = harness({ liveHead: 'c'.repeat(40) });
  assert.equal((await publish()).skipped, 'stale-head');
  assert.equal(calls.issues.length, 0);
  assert.equal(calls.summaries.length, 0);
});

test('a retry after a summary failure does not repeat inline comments or component issues', async () => {
  const { calls, publish, state } = harness();
  state.failSummary = true;
  const reviewJson = JSON.stringify({
    summary: 'This has a component follow-up.',
    component_issues: [finding],
    thread_updates: [],
    comments: [{ path: finding.docs_path, start_line: 2, line: 2, body: 'Describe the current workaround here.' }],
  });
  await assert.rejects(publish(finding, { reviewJson }), /Summary unavailable/);
  state.failSummary = false;
  await publish(finding, { reviewJson });
  assert.equal(calls.reviews.length, 1);
  assert.equal(calls.issues.length, 1);
  assert.equal(calls.summaries.length, 1);
});

test('preserves component links and leaves the issue open after resolving a docs workaround thread', async () => {
  const first = harness();
  await first.publish();
  const nextSha = 'c'.repeat(40);
  const root = {
    id: 'docs-workaround',
    path: finding.docs_path,
    line: 2,
    startLine: 2,
    originalLine: 2,
    isOutdated: true,
    isResolved: false,
    comments: {
      nodes: [
        {
          id: 'comment-1',
          body: 'Describe a workaround until the component issue is fixed.',
          updatedAt: '2026-09-08T10:00:00Z',
          author: { login: 'warp-docs-reviewer', __typename: 'Bot' },
          pullRequestReview: { body: `<!-- warp-docs-codex-review:${headSha} -->`, commit: { oid: headSha } },
        },
      ],
      pageInfo: { hasNextPage: false },
    },
  };
  const second = harness({
    issues: first.storedIssues,
    liveHead: nextSha,
    threads: [root],
    summaries: [
      { id: 123, body: first.calls.summaries[0].body, user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' } },
    ],
  });
  const reviewed = await history.readReviewState(second.github, { ...context.repo, pull_number: 238 });
  await second.publish([], {
    context: { ...context, payload: { pull_request: { number: 238, head: { sha: nextSha } } } },
    reviewContext: { head_sha: nextSha, threads: reviewed.threads },
    reviewJson: JSON.stringify({
      summary: 'The docs now explain the workaround.',
      comments: [],
      component_issues: [],
      thread_updates: [{ thread_id: root.id, status: 'fixed', reason: 'The changed docs explain the workaround.' }],
    }),
  });
  assert.deepEqual(second.calls.resolutions, [root.id]);
  assert.equal(second.calls.issues.length, 0);
  assert.equal(second.storedIssues[0].state, 'OPEN');
  assert.match(second.calls.updates[0].body, /elements\/issues\/42/);
});

test('keeps documentation reviews working when component publication is disabled', async () => {
  const { calls, publish } = harness();
  await publish([], { componentGithub: undefined, componentContext: { enabled: false } });
  assert.equal(calls.summaries.length, 1);
  assert.equal(calls.issues.length, 0);
  const disabled = harness();
  await assert.rejects(disabled.publish(finding, { componentGithub: undefined }), /configured app/);
  assert.equal(disabled.calls.summaries.length, 0);
});

test('collects later issue pages, including closed reports, separately from pull requests', async () => {
  const calls = [];
  const github = {
    graphql: async (query, variables) => {
      calls.push(variables);
      assert.match(query, /states: \[OPEN, CLOSED\]/);
      const lastPage = variables.cursor === 'more-issues';
      return {
        repository: {
          nameWithOwner: 'warp-ds/elements',
          defaultBranchRef: { name: 'next', target: { oid: sourceSha } },
          issues: {
            nodes: [
              {
                ...issue(lastPage ? 9 : 8, { state: lastPage ? 'CLOSED' : 'OPEN' }),
                updatedAt: '2026-09-08T10:00:00Z',
                stateReason: lastPage ? 'NOT_PLANNED' : null,
              },
            ],
            pageInfo: { hasNextPage: !lastPage, endCursor: lastPage ? null : 'more-issues' },
          },
          ...(lastPage ? {} : { pullRequests: { nodes: [{ number: 10, body: 'Fixes #9', state: 'MERGED' }] } }),
        },
      };
    },
  };
  const result = await componentContextReader.readComponentRepository(github, 'warp-ds/elements');
  assert.deepEqual(
    calls.map(({ cursor, includePullRequests }) => [cursor, includePullRequests]),
    [
      [null, true],
      ['more-issues', false],
    ],
  );
  assert.equal(result.issues_complete, true);
  assert.equal(result.issues[1].state_reason, 'NOT_PLANNED');
  assert.equal(result.pull_requests[0].number, 10);
});

test('marks an issue inventory incomplete when it reaches the pagination limit', async () => {
  let pages = 0;
  const github = {
    graphql: async () => ({
      repository: {
        nameWithOwner: 'warp-ds/elements',
        defaultBranchRef: { name: 'next', target: { oid: sourceSha } },
        issues: {
          nodes: Array.from({ length: 100 }, (_, index) => ({ ...issue(pages * 100 + index), updatedAt: 'today' })),
          pageInfo: { hasNextPage: true, endCursor: `page-${++pages}` },
        },
        pullRequests: { nodes: [] },
      },
    }),
  };
  const result = await componentContextReader.readComponentRepository(github, 'warp-ds/elements');
  assert.equal(pages, 5);
  assert.equal(result.issues.length, 500);
  assert.equal(result.issues_complete, false);
});
