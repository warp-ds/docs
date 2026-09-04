import assert from 'node:assert/strict';
import test from 'node:test';

import publisher from '../.github/codex/scripts/post-review.cjs';

const { addedLines, formatInlineComment, isAddedRange, parseReview, postReview, suggestionBlock } = publisher;

test('finds added lines in a pull request patch', () => {
  const lines = addedLines('@@ -4,2 +4,3 @@\n same\n-old\n+new\n+another');
  assert.deepEqual([...lines], [5, 6]);
});

test('accepts only ranges made entirely from added lines', () => {
  const changedLines = new Map([['docs/example.md', new Set([8, 9])]]);
  assert.equal(isAddedRange({ path: 'docs/example.md', start_line: 8, line: 9 }, changedLines), true);
  assert.equal(isAddedRange({ path: 'docs/example.md', start_line: 7, line: 9 }, changedLines), false);
});

test('formats a native GitHub suggestion without priority labels', () => {
  const comment = formatInlineComment({
    path: 'docs/example.md',
    start_line: 8,
    line: 9,
    body: 'Use the public prop name so this example works.',
    replacement: 'first line\nsecond line',
  });
  assert.deepEqual(comment, {
    path: 'docs/example.md',
    start_line: 8,
    start_side: 'RIGHT',
    line: 9,
    side: 'RIGHT',
    body: 'Use the public prop name so this example works.\n\n```suggestion\nfirst line\nsecond line\n```',
  });
  assert.doesNotMatch(comment.body, /\bP[123]\b/);
});

test('omits a suggestion block when no exact replacement is available', () => {
  assert.equal(suggestionBlock(''), '');
  assert.equal(suggestionBlock('contains ``` a fence'), '');
});

test('rejects malformed structured review output', () => {
  assert.throws(() => parseReview('{'), /invalid JSON/);
  assert.throws(() => parseReview('{"summary":"Ready"}'), /comments array/);
});

test('publishes one concise review with inline suggestions and a closing summary', async () => {
  const listReviews = () => {};
  const listFiles = () => {};
  const created = [];
  const github = {
    paginate: async (method) => {
      if (method === listReviews) return [];
      if (method === listFiles) {
        return [{ filename: 'docs/example.md', patch: '@@ -7,1 +7,1 @@\n-old\n+new' }];
      }
      throw new Error('Unexpected pagination call');
    },
    rest: {
      pulls: {
        listReviews,
        listFiles,
        createReview: async (review) => created.push(review),
      },
    },
  };
  const context = {
    repo: { owner: 'warp-ds', repo: 'docs' },
    payload: { pull_request: { number: 12, head: { sha: 'abc123' } } },
  };

  await postReview({
    github,
    context,
    reviewJson: JSON.stringify({
      summary: 'One API name needs correcting; otherwise the guidance is clear.',
      comments: [
        {
          path: 'docs/example.md',
          start_line: 7,
          line: 7,
          body: 'Use the exported API name so readers can run this example.',
          replacement: 'correctName',
        },
      ],
    }),
  });

  assert.equal(created.length, 1);
  assert.equal(created[0].event, 'COMMENT');
  assert.match(created[0].body, /warp-docs-codex-review:abc123/);
  assert.match(created[0].body, /otherwise the guidance is clear/);
  assert.equal(created[0].comments.length, 1);
  assert.match(created[0].comments[0].body, /```suggestion\ncorrectName\n```/);
});
