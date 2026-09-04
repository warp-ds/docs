const REVIEW_MARKER_PREFIX = '<!-- warp-docs-codex-review:';

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
  if (typeof result.summary !== 'string' || !Array.isArray(result.comments)) {
    throw new Error('Codex review must contain a summary and comments array.');
  }
  return result;
}

async function postReview({ github, context, reviewJson }) {
  const result = parseReview(reviewJson);
  const headSha = context.payload.pull_request.head.sha;
  const reviewMarker = `${REVIEW_MARKER_PREFIX}${headSha} -->`;

  const reviews = await github.paginate(github.rest.pulls.listReviews, {
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.pull_request.number,
    per_page: 100,
  });
  if (reviews.some((review) => review.body?.includes(reviewMarker))) return;

  const files = await github.paginate(github.rest.pulls.listFiles, {
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.pull_request.number,
    per_page: 100,
  });
  const changedLines = new Map(files.map((file) => [file.filename, addedLines(file.patch)]));
  const comments = result.comments.filter((comment) => isAddedRange(comment, changedLines)).map(formatInlineComment);

  await github.rest.pulls.createReview({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.pull_request.number,
    commit_id: headSha,
    event: 'COMMENT',
    body: `${reviewMarker}\n${result.summary.trim()}`,
    comments,
  });
}

module.exports = {
  addedLines,
  formatInlineComment,
  isAddedRange,
  parseReview,
  postReview,
  suggestionBlock,
};
