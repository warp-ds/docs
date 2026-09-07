const { readFile, writeFile } = require('node:fs/promises');

const COMMAND = '/warp-bot';
const REVIEWER_LOGIN = 'warp-docs-reviewer[bot]';
const FOLLOWUP_MARKER_PREFIX = '<!-- warp-docs-review-followup:';
const TRUSTED_ASSOCIATIONS = new Set(['OWNER', 'MEMBER', 'COLLABORATOR']);

function parseCommand(body) {
  if (typeof body !== 'string') return null;
  const match = body.trim().match(/^\/warp-bot(?:\s+([\s\S]*))?$/i);
  if (!match) return null;
  return (match[1] || '').trim();
}

function isTrustedAssociation(association) {
  return TRUSTED_ASSOCIATIONS.has(association);
}

function isComponentDocsPath(path) {
  return (
    typeof path === 'string' && (path.startsWith('docs/components/') || path.startsWith('docs/public/components/'))
  );
}

function numberFromApiUrl(value, segment) {
  if (typeof value !== 'string') return null;
  try {
    const parts = new URL(value).pathname.split('/').filter(Boolean);
    const index = parts.lastIndexOf(segment);
    const number = Number(parts[index + 1]);
    return index >= 0 && Number.isInteger(number) && number > 0 ? number : null;
  } catch {
    return null;
  }
}

function text(value, limit = 8000) {
  if (typeof value !== 'string') return '';
  return value.length <= limit ? value : `${value.slice(0, limit)}\n[truncated]`;
}

function compactComment(comment) {
  return {
    id: comment.id,
    author: comment.user?.login || '',
    body: text(comment.body),
    createdAt: comment.created_at || '',
  };
}

function reviewAnchor(comment, headSha) {
  const startLine = comment.start_line || comment.line;
  const canSuggest =
    typeof comment.path === 'string' &&
    Number.isInteger(startLine) &&
    Number.isInteger(comment.line) &&
    comment.side === 'RIGHT' &&
    comment.commit_id === headSha;

  return {
    path: comment.path || '',
    startLine: Number.isInteger(startLine) ? startLine : 0,
    line: Number.isInteger(comment.line) ? comment.line : 0,
    side: comment.side || '',
    diffHunk: text(comment.diff_hunk, 12000),
    commitId: comment.commit_id || '',
    canSuggest,
  };
}

function skipped(reason) {
  return { shouldRun: false, reason };
}

async function getScopedPullRequest(github, repo, pullNumber) {
  const { data: pullRequest } = await github.rest.pulls.get({
    ...repo,
    pull_number: pullNumber,
  });
  if (pullRequest.state !== 'open') return { reason: 'pull request is not open' };

  const files = await github.paginate(github.rest.pulls.listFiles, {
    ...repo,
    pull_number: pullNumber,
    per_page: 100,
  });
  const changedFiles = files.map((file) => file.filename).filter(isComponentDocsPath);
  if (changedFiles.length === 0) return { reason: 'pull request has no component documentation changes' };
  return { pullRequest, changedFiles };
}

async function prepareIssueComment({ github, repo, commentId }) {
  const { data: comment } = await github.rest.issues.getComment({ ...repo, comment_id: commentId });
  if (comment.user?.type === 'Bot' || comment.user?.login === REVIEWER_LOGIN)
    return skipped('bot comments are ignored');
  if (!isTrustedAssociation(comment.author_association))
    return skipped('commenter is not a trusted repository contributor');

  const request = parseCommand(comment.body);
  if (request === null) return skipped(`pull request comments must start with ${COMMAND}`);

  const pullNumber = numberFromApiUrl(comment.issue_url, 'issues');
  if (!pullNumber) return skipped('could not resolve the pull request number');

  let scoped;
  try {
    scoped = await getScopedPullRequest(github, repo, pullNumber);
  } catch (error) {
    if (error.status === 404) return skipped('comment does not belong to a pull request');
    throw error;
  }
  if (!scoped.pullRequest) return skipped(scoped.reason);

  const timeline = await github.paginate(github.rest.issues.listComments, {
    ...repo,
    issue_number: pullNumber,
    per_page: 100,
  });

  const requestText =
    request || 'Review the current component documentation changes and report only overlooked, actionable issues.';
  return {
    shouldRun: true,
    target: {
      kind: 'issue_comment',
      triggerCommentId: comment.id,
      pullNumber,
      canSuggest: false,
    },
    reviewContext: {
      version: 1,
      mode: 'command',
      pullRequest: compactPullRequest(scoped.pullRequest, scoped.changedFiles),
      request: { ...compactComment(comment), body: requestText, invokedWith: COMMAND },
      conversation: timeline.slice(-20).map(compactComment),
      anchor: null,
    },
  };
}

async function prepareReviewComment({ github, repo, commentId }) {
  const { data: comment } = await github.rest.pulls.getReviewComment({ ...repo, comment_id: commentId });
  if (comment.user?.type === 'Bot' || comment.user?.login === REVIEWER_LOGIN)
    return skipped('bot comments are ignored');
  if (!isTrustedAssociation(comment.author_association))
    return skipped('commenter is not a trusted repository contributor');

  const rootId = comment.in_reply_to_id || comment.id;
  const root =
    rootId === comment.id ? comment : (await github.rest.pulls.getReviewComment({ ...repo, comment_id: rootId })).data;
  const isReviewerThread = root.user?.login === REVIEWER_LOGIN;
  const commandRequest = parseCommand(comment.body);
  if (!isReviewerThread && commandRequest === null) {
    return skipped(`only replies in ${REVIEWER_LOGIN} threads run automatically`);
  }

  const pullNumber = numberFromApiUrl(comment.pull_request_url, 'pulls');
  if (!pullNumber) return skipped('could not resolve the pull request number');
  const scoped = await getScopedPullRequest(github, repo, pullNumber);
  if (!scoped.pullRequest) return skipped(scoped.reason);

  const allReviewComments = await github.paginate(github.rest.pulls.listReviewComments, {
    ...repo,
    pull_number: pullNumber,
    per_page: 100,
  });
  const thread = allReviewComments
    .filter((item) => item.id === rootId || item.in_reply_to_id === rootId)
    .sort((left, right) => left.id - right.id)
    .map(compactComment);
  const anchor = reviewAnchor(root, scoped.pullRequest.head.sha);
  const requestText =
    commandRequest === null
      ? text(comment.body)
      : commandRequest || 'Revisit this thread and answer with the most useful next step.';

  return {
    shouldRun: true,
    target: {
      kind: 'review_comment',
      triggerCommentId: comment.id,
      rootCommentId: rootId,
      pullNumber,
      canSuggest: anchor.canSuggest,
    },
    reviewContext: {
      version: 1,
      mode: isReviewerThread ? 'reviewer_thread_reply' : 'command',
      pullRequest: compactPullRequest(scoped.pullRequest, scoped.changedFiles),
      request: {
        ...compactComment(comment),
        body: requestText,
        invokedWith: commandRequest === null ? null : COMMAND,
      },
      conversation: thread,
      anchor,
    },
  };
}

function compactPullRequest(pullRequest, changedFiles) {
  return {
    number: pullRequest.number,
    title: text(pullRequest.title, 1000),
    body: text(pullRequest.body, 12000),
    htmlUrl: pullRequest.html_url,
    baseSha: pullRequest.base.sha,
    headSha: pullRequest.head.sha,
    changedComponentDocsFiles: changedFiles,
  };
}

async function prepareFollowup({ github, repo, event }) {
  const commentId = Number(event?.payload?.comment?.id);
  if (event?.payload?.action !== 'created' || !Number.isInteger(commentId) || commentId < 1) {
    return skipped('event is not a valid newly created comment');
  }

  if (event.eventName === 'issue_comment') {
    return prepareIssueComment({ github, repo, commentId });
  }
  if (event.eventName === 'pull_request_review_comment') {
    return prepareReviewComment({ github, repo, commentId });
  }
  return skipped('unsupported event');
}

async function prepareFollowupFromFile({ github, context, eventPath, contextPath }) {
  const raw = await readFile(eventPath, 'utf8');
  if (Buffer.byteLength(raw) > 5_000_000) throw new Error('Follow-up event artifact is too large.');

  let event;
  try {
    event = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Follow-up event artifact is invalid JSON: ${error.message}`);
  }

  const result = await prepareFollowup({ github, repo: context.repo, event });
  if (result.shouldRun) {
    await writeFile(contextPath, `${JSON.stringify(result.reviewContext, null, 2)}\n`, { mode: 0o600 });
  }
  return result;
}

function parseFollowup(responseJson) {
  let response;
  try {
    response = JSON.parse(responseJson || '');
  } catch (error) {
    throw new Error(`Codex returned invalid follow-up JSON: ${error.message}`);
  }
  if (typeof response.reply !== 'string' || response.reply.trim().length === 0) {
    throw new Error('Codex follow-up must contain a non-empty reply.');
  }
  if (typeof response.replacement !== 'string') {
    throw new Error('Codex follow-up must contain a replacement string.');
  }
  return response;
}

function suggestionBlock(replacement) {
  if (typeof replacement !== 'string' || replacement.length === 0 || replacement.includes('```')) return '';
  const normalized = replacement.replace(/\r\n?/g, '\n').replace(/\n$/, '');
  return `\n\n\`\`\`suggestion\n${normalized}\n\`\`\``;
}

async function alreadyPosted({ github, repo, target, marker }) {
  if (target.kind === 'review_comment') {
    const comments = await github.paginate(github.rest.pulls.listReviewComments, {
      ...repo,
      pull_number: target.pullNumber,
      per_page: 100,
    });
    return comments.some((comment) => comment.body?.includes(marker));
  }

  const comments = await github.paginate(github.rest.issues.listComments, {
    ...repo,
    issue_number: target.pullNumber,
    per_page: 100,
  });
  return comments.some((comment) => comment.body?.includes(marker));
}

async function postFollowup({ github, context, responseJson, targetJson }) {
  const response = parseFollowup(responseJson);
  const target = typeof targetJson === 'string' ? JSON.parse(targetJson) : targetJson;
  if (!target || !Number.isInteger(target.triggerCommentId) || !Number.isInteger(target.pullNumber)) {
    throw new Error('Follow-up target is invalid.');
  }

  const marker = `${FOLLOWUP_MARKER_PREFIX}${target.triggerCommentId} -->`;
  if (await alreadyPosted({ github, repo: context.repo, target, marker })) return;

  const suggestion = target.canSuggest ? suggestionBlock(response.replacement) : '';
  const body = `${marker}\n${response.reply.trim()}${suggestion}`;
  if (target.kind === 'review_comment' && Number.isInteger(target.rootCommentId)) {
    await github.request('POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies', {
      ...context.repo,
      pull_number: target.pullNumber,
      comment_id: target.rootCommentId,
      body,
    });
    return;
  }
  if (target.kind === 'issue_comment') {
    await github.rest.issues.createComment({
      ...context.repo,
      issue_number: target.pullNumber,
      body,
    });
    return;
  }
  throw new Error('Follow-up target kind is invalid.');
}

module.exports = {
  COMMAND,
  REVIEWER_LOGIN,
  isComponentDocsPath,
  isTrustedAssociation,
  numberFromApiUrl,
  parseCommand,
  parseFollowup,
  postFollowup,
  prepareFollowup,
  prepareFollowupFromFile,
  reviewAnchor,
  suggestionBlock,
};
