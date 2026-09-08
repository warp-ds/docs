const { REVIEW_MARKER_PREFIX, SUMMARY_MARKER, readReviewState, reviewHead } = require('./review-context.cjs');

function addedLines(patch) {
  const lines = new Set();
  let current = 0;
  for (const patchLine of (patch || '').split('\n')) {
    const header = patchLine.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/);
    if (header) {
      current = Number(header[1]);
    } else if (patchLine.startsWith('+') && !patchLine.startsWith('+++')) {
      lines.add(current);
      current += 1;
    } else if (!patchLine.startsWith('-') && !patchLine.startsWith('\\')) {
      current += 1;
    }
  }
  return lines;
}

function isAddedRange(comment, changedLines) {
  if (!Number.isInteger(comment.start_line) || !Number.isInteger(comment.line)) return false;
  if (comment.start_line < 1 || comment.start_line > comment.line) return false;

  const lines = changedLines.get(comment.path);
  if (!lines) return false;
  for (let line = comment.start_line; line <= comment.line; line += 1) {
    if (!lines.has(line)) return false;
  }
  return true;
}

function suggestionBlock(replacement) {
  if (typeof replacement !== 'string' || replacement.length === 0) return '';
  if (replacement.includes('```')) return '';
  const normalized = replacement.replace(/\r\n?/g, '\n').replace(/\n$/, '');
  return `\n\n\`\`\`suggestion\n${normalized}\n\`\`\``;
}

function formatInlineComment(comment) {
  const formatted = {
    path: comment.path,
    line: comment.line,
    side: 'RIGHT',
    body: `${comment.body.trim()}${suggestionBlock(comment.replacement)}`,
  };
  if (comment.start_line < comment.line) {
    formatted.start_line = comment.start_line;
    formatted.start_side = 'RIGHT';
  }
  return formatted;
}

function parseReview(reviewJson) {
  let result;
  try {
    result = JSON.parse(reviewJson || '');
  } catch (error) {
    throw new Error(`Codex returned invalid JSON: ${error.message}`);
  }
  if (!result || typeof result.summary !== 'string' || !result.summary.trim() || !Array.isArray(result.comments)) {
    throw new Error('Codex review must contain a summary and comments array.');
  }
  // Accept reviews from a workflow that started before the context schema landed.
  result.thread_updates ??= [];
  if (
    !Array.isArray(result.thread_updates) ||
    result.thread_updates.some(
      (update) =>
        !update ||
        typeof update.thread_id !== 'string' ||
        !['open', 'fixed'].includes(update.status) ||
        typeof update.reason !== 'string' ||
        !update.reason.trim(),
    )
  ) {
    throw new Error('Thread updates must identify a thread, an open/fixed status, and supporting evidence.');
  }
  if (new Set(result.thread_updates.map((update) => update.thread_id)).size !== result.thread_updates.length) {
    throw new Error('Each thread must have exactly one assessment.');
  }
  if (
    result.comments.some(
      (comment) =>
        !comment ||
        typeof comment.body !== 'string' ||
        !comment.body.trim() ||
        (comment.existing_thread_id !== undefined && typeof comment.existing_thread_id !== 'string'),
    )
  ) {
    throw new Error('Inline comments must contain text and a valid existing thread reference.');
  }
  return result;
}

function sameDiscussion(previous, current) {
  return (
    previous.comments.length === current.comments.length &&
    previous.comments.every((comment, index) => {
      const live = current.comments[index];
      return (
        comment.id === live.id &&
        comment.body === live.body &&
        comment.updated_at === live.updated_at &&
        comment.author === live.author
      );
    })
  );
}

async function isCurrentPullRequest(github, params, headSha) {
  const { data: pull } = await github.rest.pulls.get(params);
  return pull.state === 'open' && !pull.draft && pull.head.sha === headSha;
}

async function postReview({ github, context, reviewJson, reviewContext }) {
  const result = parseReview(reviewJson);
  const headSha = context.payload.pull_request.head.sha;
  const params = { ...context.repo, pull_number: context.payload.pull_request.number };
  const reviewMarker = `${REVIEW_MARKER_PREFIX}${headSha} -->`;
  if ((reviewContext && reviewContext.head_sha !== headSha) || !(await isCurrentPullRequest(github, params, headSha))) {
    return { skipped: 'stale-head' };
  }

  const state = await readReviewState(github, params);
  if (reviewHead(state.summary?.body) === headSha) return { skipped: 'already-published' };
  const liveThreads = new Map(state.threads.map((thread) => [thread.id, thread]));
  const reviewedThreads = new Map((reviewContext?.threads || []).map((thread) => [thread.id, thread]));
  const fixedThreads = new Set(
    result.thread_updates.filter((update) => update.status === 'fixed').map((update) => update.thread_id),
  );
  for (const [id, previous] of reviewedThreads) {
    const current = liveThreads.get(id);
    if (!current) continue;
    // A completed resolution may be from an earlier publishing attempt.
    const expectedResolution = !previous.is_resolved && current.is_resolved && fixedThreads.has(id);
    if (!sameDiscussion(previous, current) || (previous.is_resolved !== current.is_resolved && !expectedResolution)) {
      return { skipped: 'discussion-changed' };
    }
  }

  const files = await github.paginate(github.rest.pulls.listFiles, {
    ...params,
    per_page: 100,
  });
  const changedLines = new Map(files.map((file) => [file.filename, addedLines(file.patch)]));
  const commentKey = (path, body) => `${path}\n${body.trim().replace(/\s+/g, ' ')}`;
  const existing = new Set(
    state.threads
      .filter((thread) => !thread.is_resolved)
      .map((thread) => commentKey(thread.path, thread.comments[0].body)),
  );
  const comments = [];
  for (const finding of result.comments.slice(0, 6)) {
    // The model matches the meaning; a thread ID survives wording and line changes.
    if (finding.existing_thread_id) {
      if (!liveThreads.has(finding.existing_thread_id))
        throw new Error('Inline comment references an unknown bot thread.');
      continue;
    }
    if (!isAddedRange(finding, changedLines)) continue;
    const comment = formatInlineComment(finding);
    const key = commentKey(comment.path, comment.body);
    if (existing.has(key)) continue;
    existing.add(key);
    comments.push(comment);
  }

  if (!(await isCurrentPullRequest(github, params, headSha))) return { skipped: 'stale-head' };
  const resolved = new Set();
  for (const update of result.thread_updates) {
    const previous = reviewedThreads.get(update.thread_id);
    const current = liveThreads.get(update.thread_id);
    if (update.status !== 'fixed' || !previous || !current || current.is_resolved || resolved.has(current.id)) continue;
    await github.graphql(
      `
      mutation($threadId: ID!) {
        resolveReviewThread(input: { threadId: $threadId }) { thread { id isResolved } }
      }
    `,
      { threadId: current.id },
    );
    resolved.add(current.id);
  }

  let newComments = 0;
  if (comments.length && !state.reviews.some((review) => reviewHead(review.body) === headSha)) {
    await github.rest.pulls.createReview({
      ...params,
      commit_id: headSha,
      event: 'COMMENT',
      body: reviewMarker,
      comments,
    });
    newComments = comments.length;
  }

  const body =
    `${SUMMARY_MARKER}\n${reviewMarker}\n**WARP Docs Reviewer**\n\n${result.summary.trim()}\n\n` +
    `Reviewed [${headSha.slice(0, 7)}](https://github.com/${params.owner}/${params.repo}/commit/${headSha}).`;
  if (state.summary) {
    await github.rest.issues.updateComment({ ...context.repo, comment_id: state.summary.id, body });
  } else {
    await github.rest.issues.createComment({ ...context.repo, issue_number: params.pull_number, body });
  }
  return { new_comments: newComments, resolved_threads: resolved.size };
}

module.exports = {
  addedLines,
  formatInlineComment,
  isAddedRange,
  parseReview,
  postReview,
  suggestionBlock,
};
