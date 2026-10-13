import assert from 'node:assert/strict';
import test from 'node:test';

import publisher from '../.github/codex/scripts/post-review.cjs';
import history from '../.github/codex/scripts/review-context.cjs';

const { postReview } = publisher;
const { prepareReviewContext } = history;
const headSha = 'a'.repeat(40);
const previousSha = 'b'.repeat(40);
const summaryMarker = '<!-- warp-docs-review-summary -->';
const marker = (sha) => `<!-- warp-docs-codex-review:${sha} -->`;
const context = {
  repo: { owner: 'warp-ds', repo: 'docs' },
  payload: { pull_request: { number: 245, head: { sha: headSha } } },
};

function thread(id, overrides = {}) {
  return {
    id,
    path: 'docs/components/radio-buttons/accessibility.md',
    line: 1,
    startLine: 1,
    originalLine: 1,
    isOutdated: false,
    isResolved: false,
    comments: {
      nodes: [
        {
          id: `${id}-comment`,
          body: 'Shift+Tab enters or leaves the group; it does not move between options.',
          updatedAt: '2026-09-08T09:12:46Z',
          author: { login: 'warp-docs-reviewer', __typename: 'Bot' },
          pullRequestReview: { body: marker(previousSha), commit: { oid: previousSha } },
        },
      ],
      pageInfo: { hasNextPage: false },
    },
    ...overrides,
  };
}

function snapshot(threads) {
  return {
    head_sha: headSha,
    threads: threads.map((item) => ({
      id: item.id,
      path: item.path,
      line: item.line,
      start_line: item.startLine,
      is_outdated: item.isOutdated,
      is_resolved: item.isResolved,
      comments: item.comments.nodes.map((comment) => ({
        id: comment.id,
        body: comment.body,
        updated_at: comment.updatedAt,
        author: comment.author.login,
      })),
    })),
  };
}

function harness({ threads = [], reviews = [], summaries = [], liveHead = headSha } = {}) {
  const calls = { reviews: [], summaries: [], updates: [], resolved: [] };
  const listReviews = () => {};
  const listFiles = () => {};
  const listComments = () => {};
  const github = {
    paginate: async (method) => {
      if (method === listReviews) return reviews;
      if (method === listComments) return summaries;
      if (method === listFiles) {
        return [
          {
            filename: 'docs/components/radio-buttons/accessibility.md',
            patch: '@@ -0,0 +1,2 @@\n+first line\n+second line',
          },
        ];
      }
      throw new Error('Unexpected pagination call');
    },
    graphql: async (query, variables) => {
      if (query.includes('mutation')) {
        assert.match(query, /resolveReviewThread/);
        calls.resolved.push(variables.threadId);
        return { resolveReviewThread: { thread: { id: variables.threadId, isResolved: true } } };
      }
      return {
        repository: {
          pullRequest: { reviewThreads: { nodes: threads, pageInfo: { hasNextPage: false } } },
        },
      };
    },
    rest: {
      pulls: {
        get: async () => ({ data: { head: { sha: liveHead }, state: 'open', draft: false } }),
        listReviews,
        listFiles,
        createReview: async (review) => calls.reviews.push(review),
      },
      issues: {
        listComments,
        createComment: async (comment) => calls.summaries.push(comment),
        updateComment: async (comment) => calls.updates.push(comment),
      },
    },
  };
  return { github, calls };
}

function review(overrides = {}) {
  return JSON.stringify({
    summary: 'Thanks for the update. The keyboard question is still open in the existing discussion.',
    comments: [],
    thread_updates: [],
    ...overrides,
  });
}

const finding = {
  path: 'docs/components/radio-buttons/accessibility.md',
  start_line: 2,
  line: 2,
  body: 'Could we describe backward entry and exit here? Shift+Tab crosses the group boundary.',
  replacement: '',
  existing_thread_id: '',
};

test('a new commit reuses an existing finding even when its wording and line have changed', async () => {
  const threads = [thread('keyboard')];
  const { github, calls } = harness({ threads });
  await postReview({
    github,
    context,
    reviewContext: snapshot(threads),
    reviewJson: review({ comments: [{ ...finding, existing_thread_id: 'keyboard' }] }),
  });
  assert.equal(calls.reviews.length, 0);
  assert.equal(calls.summaries.length, 1);
  assert.equal(calls.resolved.length, 0);
});

test('resolves verified fixes but keeps merely outdated and human-owned discussions', async () => {
  const fixed = thread('fixed', { isOutdated: true });
  const outdated = thread('outdated', { isOutdated: true });
  const human = thread('human');
  human.comments.nodes[0].author = { login: 'flatoy', __typename: 'User' };
  const threads = [fixed, outdated, human];
  const { github, calls } = harness({ threads });
  await postReview({
    github,
    context,
    reviewContext: snapshot(threads),
    reviewJson: review({
      thread_updates: [
        { thread_id: 'fixed', status: 'fixed', reason: 'The current text now explains backward entry and exit.' },
        { thread_id: 'human', status: 'fixed', reason: 'This is outside the bot’s ownership.' },
      ],
    }),
  });
  assert.deepEqual(calls.resolved, ['fixed']);
});

test('does not publish a review after the pull request has moved to another commit', async () => {
  const { github, calls } = harness({ liveHead: 'c'.repeat(40) });
  await postReview({ github, context, reviewJson: review({ comments: [finding] }) });
  assert.deepEqual(calls, { reviews: [], summaries: [], updates: [], resolved: [] });
});

test('updates one summary across commits without creating an empty review', async () => {
  const summaries = [
    {
      id: 123,
      body: `${summaryMarker}\n${marker(previousSha)}\nEarlier summary`,
      user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' },
    },
  ];
  const { github, calls } = harness({ summaries });
  await postReview({ github, context, reviewJson: review() });
  assert.equal(calls.reviews.length, 0);
  assert.equal(calls.summaries.length, 0);
  assert.equal(calls.updates.length, 1);
  assert.equal(calls.updates[0].comment_id, 123);
  assert.match(calls.updates[0].body, /WARP Docs Reviewer/);
  assert.ok(calls.updates[0].body.includes(marker(headSha)));
});

test('a completed review is not published again for the same commit', async () => {
  const summaries = [
    {
      id: 123,
      body: `${summaryMarker}\n${marker(headSha)}\nCurrent summary`,
      user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' },
    },
  ];
  const { github, calls } = harness({ summaries });
  await postReview({ github, context, reviewJson: review({ comments: [finding] }) });
  assert.deepEqual(calls, { reviews: [], summaries: [], updates: [], resolved: [] });
});

test('retrying a partial publication finishes the summary without repeating inline comments', async () => {
  const reviews = [
    {
      body: marker(headSha),
      commit_id: headSha,
      user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' },
    },
  ];
  const { github, calls } = harness({ reviews });
  await postReview({ github, context, reviewJson: review({ comments: [finding] }) });
  assert.equal(calls.reviews.length, 0);
  assert.equal(calls.summaries.length, 1);
});

test('preserves a discussion when someone replies while the review is running', async () => {
  const original = thread('keyboard');
  const reviewContext = snapshot([original]);
  original.comments.nodes.push({
    id: 'human-reply',
    body: 'This still fails in Safari.',
    updatedAt: '2026-09-08T10:12:00Z',
    author: { login: 'flatoy', __typename: 'User' },
  });
  const { github, calls } = harness({ threads: [original] });
  await postReview({
    github,
    context,
    reviewContext,
    reviewJson: review({
      thread_updates: [{ thread_id: 'keyboard', status: 'fixed', reason: 'The wording has been updated.' }],
    }),
  });
  assert.deepEqual(calls, { reviews: [], summaries: [], updates: [], resolved: [] });
});

test('human comments containing bot markers cannot suppress or replace a bot summary', async () => {
  const summaries = [
    {
      id: 123,
      body: `${summaryMarker}\n${marker(headSha)}`,
      user: { login: 'flatoy', type: 'User' },
    },
  ];
  const { github, calls } = harness({ summaries });
  await postReview({ github, context, reviewJson: review() });
  assert.equal(calls.updates.length, 0);
  assert.equal(calls.summaries.length, 1);
});

test('collects the full discussion history and ignores spoofed review markers', async () => {
  const own = thread('keyboard');
  const human = thread('human');
  human.comments.nodes[0].author = { login: 'flatoy', __typename: 'User' };
  const otherBot = thread('other-bot');
  otherBot.comments.nodes[0].author.login = 'unrelated-app';
  const resolved = thread('resolved', { isResolved: true, isOutdated: true });
  const reviews = [
    { body: marker(previousSha), commit_id: previousSha, user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' } },
    { body: marker(headSha), commit_id: headSha, user: { login: 'flatoy', type: 'User' } },
  ];
  const { github } = harness({ threads: [own, human, otherBot, resolved], reviews });
  const result = await prepareReviewContext({ github, context, headSha, baseSha: 'base' });
  assert.equal(result.should_review, true);
  assert.equal(result.previous_review.head_sha, previousSha);
  assert.deepEqual(
    result.threads.map((item) => item.id),
    ['keyboard', 'resolved'],
  );
  assert.equal(result.threads[1].is_resolved, true);
  assert.equal(result.threads[1].is_outdated, true);
  assert.equal(result.threads[0].comments[0].body, own.comments.nodes[0].body);
});

test('reads later pages of threads and replies before making resolution decisions', async () => {
  const first = thread('first');
  first.comments.pageInfo = { hasNextPage: true, endCursor: 'more-replies' };
  const second = thread('second');
  const { github } = harness();
  const cursors = [];
  github.graphql = async (_query, variables) => {
    cursors.push(variables.cursor);
    if (variables.threadId) {
      assert.equal(variables.threadId, 'first');
      return {
        node: {
          comments: {
            nodes: [
              { id: 'last-reply', body: 'Please check Safari too.', updatedAt: 'later', author: { login: 'flatoy' } },
            ],
            pageInfo: { hasNextPage: false },
          },
        },
      };
    }
    return {
      repository: {
        pullRequest: {
          reviewThreads: {
            nodes: variables.cursor ? [second] : [first],
            pageInfo: variables.cursor ? { hasNextPage: false } : { hasNextPage: true, endCursor: 'more-threads' },
          },
        },
      },
    };
  };
  const result = await prepareReviewContext({ github, context, headSha, baseSha: 'base' });
  assert.deepEqual(cursors, [null, 'more-replies', 'more-threads']);
  assert.equal(result.threads.length, 2);
  assert.equal(result.threads[0].comments[1].body, 'Please check Safari too.');
});

test('the maintained summary is the last review even when a pass found no new issues', async () => {
  const summaries = [
    {
      id: 123,
      body: `${summaryMarker}\n${marker(headSha)}\nNo new findings.`,
      user: { login: 'warp-docs-reviewer[bot]', type: 'Bot' },
    },
  ];
  const { github } = harness({ summaries });
  const result = await prepareReviewContext({ github, context, headSha, baseSha: 'base' });
  assert.equal(result.previous_review.head_sha, headSha);
  assert.equal(result.should_review, false);
});

test('rejects review context captured from a different merge checkout', async () => {
  const { github, calls } = harness();
  const reviewContext = await prepareReviewContext({ github, context, headSha: previousSha, baseSha: 'base' });
  assert.equal(reviewContext.should_review, false);
  await postReview({ github, context, reviewContext, reviewJson: review({ comments: [finding] }) });
  assert.deepEqual(calls, { reviews: [], summaries: [], updates: [], resolved: [] });
});

test('a retry can finish publication after a thread was resolved but the summary failed', async () => {
  const fixed = thread('fixed');
  const reviewContext = snapshot([fixed]);
  const { github, calls } = harness({ threads: [fixed] });
  const graphql = github.graphql;
  github.graphql = async (query, variables) => {
    const result = await graphql(query, variables);
    if (query.includes('mutation')) fixed.isResolved = true;
    return result;
  };
  const createComment = github.rest.issues.createComment;
  let attempts = 0;
  github.rest.issues.createComment = async (comment) => {
    attempts += 1;
    if (attempts === 1) throw new Error('Temporary GitHub error');
    return createComment(comment);
  };
  const args = {
    github,
    context,
    reviewContext,
    reviewJson: review({
      thread_updates: [{ thread_id: 'fixed', status: 'fixed', reason: 'The current text addresses the finding.' }],
    }),
  };
  await assert.rejects(postReview(args), /Temporary GitHub error/);
  await postReview(args);
  assert.deepEqual(calls.resolved, ['fixed']);
  assert.equal(calls.summaries.length, 1);
});

test('keeps a thread open when no review snapshot or fix evidence was supplied', async () => {
  const { github, calls } = harness({ threads: [thread('keyboard')] });
  await postReview({
    github,
    context,
    reviewJson: review({
      thread_updates: [
        { thread_id: 'keyboard', status: 'fixed', reason: 'An unsnapshotted claim cannot resolve a thread.' },
      ],
    }),
  });
  assert.equal(calls.resolved.length, 0);
  assert.throws(
    () => publisher.parseReview(review({ thread_updates: [{ thread_id: 'keyboard', status: 'fixed', reason: '' }] })),
    /supporting evidence/,
  );
});

test('filters exact duplicates without suppressing a newly reported regression from a resolved thread', async () => {
  for (const isResolved of [false, true]) {
    const existing = thread('keyboard', { isResolved });
    existing.comments.nodes[0].body = finding.body;
    const { github, calls } = harness({ threads: [existing] });
    await postReview({ github, context, reviewJson: review({ comments: [finding, finding] }) });
    assert.equal(calls.reviews.length, isResolved ? 1 : 0);
    if (isResolved) assert.equal(calls.reviews[0].comments.length, 1);
  }
});

test('rejects contradictory thread assessments and unknown finding references before publishing', async () => {
  assert.throws(
    () =>
      publisher.parseReview(
        review({
          thread_updates: [
            { thread_id: 'keyboard', status: 'open', reason: 'The issue is still present.' },
            { thread_id: 'keyboard', status: 'fixed', reason: 'The issue is fixed.' },
          ],
        }),
      ),
    /exactly one assessment/,
  );
  const { github, calls } = harness();
  await assert.rejects(
    postReview({
      github,
      context,
      reviewJson: review({ comments: [{ ...finding, existing_thread_id: 'invented-id' }] }),
    }),
    /unknown bot thread/,
  );
  assert.deepEqual(calls, { reviews: [], summaries: [], updates: [], resolved: [] });
});
