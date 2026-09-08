const REVIEW_MARKER_PREFIX = '<!-- warp-docs-codex-review:';
const SUMMARY_MARKER = '<!-- warp-docs-review-summary -->';

function reviewHead(body) {
  return body?.match(/^<!-- warp-docs-codex-review:([a-f0-9]+) -->$/m)?.[1] || null;
}

function isReviewer(author) {
  const login = author?.login?.replace(/\[bot\]$/, '');
  return (author?.type || author?.__typename) === 'Bot' && ['warp-docs-reviewer', 'github-actions'].includes(login);
}

const COMMENT_FIELDS = `
  id body updatedAt
  author { login __typename }
  pullRequestReview { body commit { oid } }
`;

async function readThreads(github, { owner, repo, pull_number }) {
  const threads = [];
  let cursor = null;
  do {
    const data = await github.graphql(
      `
      query($owner: String!, $repo: String!, $number: Int!, $cursor: String) {
        repository(owner: $owner, name: $repo) {
          pullRequest(number: $number) {
            reviewThreads(first: 100, after: $cursor) {
              nodes {
                id path line startLine originalLine isOutdated isResolved
                comments(first: 100) {
                  nodes { ${COMMENT_FIELDS} }
                  pageInfo { hasNextPage endCursor }
                }
              }
              pageInfo { hasNextPage endCursor }
            }
          }
        }
      }
    `,
      { owner, repo, number: pull_number, cursor },
    );
    const page = data.repository.pullRequest.reviewThreads;
    for (const thread of page.nodes) {
      const root = thread.comments.nodes[0];
      const reviewedHead = reviewHead(root?.pullRequestReview?.body);
      if (!isReviewer(root?.author) || !reviewedHead || reviewedHead !== root.pullRequestReview.commit?.oid) continue;

      let commentsPage = thread.comments;
      const comments = [...commentsPage.nodes];
      while (commentsPage.pageInfo.hasNextPage) {
        const more = await github.graphql(
          `
          query($threadId: ID!, $cursor: String!) {
            node(id: $threadId) {
              ... on PullRequestReviewThread {
                comments(first: 100, after: $cursor) {
                  nodes { ${COMMENT_FIELDS} }
                  pageInfo { hasNextPage endCursor }
                }
              }
            }
          }
        `,
          { threadId: thread.id, cursor: commentsPage.pageInfo.endCursor },
        );
        commentsPage = more.node.comments;
        comments.push(...commentsPage.nodes);
      }
      threads.push({
        id: thread.id,
        path: thread.path,
        line: thread.line,
        start_line: thread.startLine ?? thread.line,
        original_line: thread.originalLine,
        is_outdated: thread.isOutdated,
        is_resolved: thread.isResolved,
        comments: comments.map((comment) => ({
          id: comment.id,
          body: comment.body,
          updated_at: comment.updatedAt,
          author: comment.author?.login || null,
        })),
      });
    }
    cursor = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (cursor);
  return threads;
}

async function readReviewState(github, params) {
  const [allReviews, issueComments, threads] = await Promise.all([
    github.paginate(github.rest.pulls.listReviews, { ...params, per_page: 100 }),
    github.paginate(github.rest.issues.listComments, {
      owner: params.owner,
      repo: params.repo,
      issue_number: params.pull_number,
      per_page: 100,
    }),
    readThreads(github, params),
  ]);
  const reviews = allReviews.filter(
    (review) => isReviewer(review.user) && reviewHead(review.body) && reviewHead(review.body) === review.commit_id,
  );
  const summary = issueComments.findLast(
    (comment) => isReviewer(comment.user) && comment.body?.startsWith(SUMMARY_MARKER) && reviewHead(comment.body),
  );
  const previous = summary || reviews.at(-1);
  return {
    reviews,
    summary,
    threads,
    previous_review: previous ? { head_sha: reviewHead(previous.body), body: previous.body } : null,
  };
}

async function prepareReviewContext({ github, context, headSha, baseSha }) {
  const params = { ...context.repo, pull_number: context.payload.pull_request.number };
  const { data: pull } = await github.rest.pulls.get(params);
  const state = await readReviewState(github, params);
  return {
    head_sha: headSha,
    base_sha: baseSha,
    should_review:
      pull.state === 'open' &&
      !pull.draft &&
      pull.head.sha === headSha &&
      headSha === context.payload.pull_request.head.sha &&
      reviewHead(state.summary?.body) !== headSha,
    previous_review: state.previous_review,
    threads: state.threads,
  };
}

module.exports = {
  REVIEW_MARKER_PREFIX,
  SUMMARY_MARKER,
  isReviewer,
  prepareReviewContext,
  readReviewState,
  reviewHead,
};
