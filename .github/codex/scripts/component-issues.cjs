const { createHash } = require('node:crypto');
const { isComponentRepository, readComponentRepository } = require('./component-context.cjs');
const { isReviewer } = require('./review-context.cjs');

const ISSUE_MARKER = '<!-- warp-docs-component-issue:';
const LINKS_MARKER = '<!-- warp-docs-component-links:';
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const sourcePath = (value) =>
  typeof value === 'string' &&
  value.length > 0 &&
  !value.startsWith('/') &&
  !/[\\\0?#]/.test(value) &&
  value.split('/').every((part) => part && part !== '.' && part !== '..');

function evidenceUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return false;
    if (
      ['www.w3.org', 'w3.org', 'developer.apple.com', 'developer.android.com', 'www.figma.com', 'figma.com'].includes(
        url.hostname,
      )
    )
      return true;
    if (url.hostname !== 'github.com' || url.search) return false;
    const [, owner, repo, kind, ref] = url.pathname.split('/');
    return (
      owner === 'warp-ds' &&
      (repo === 'docs' || isComponentRepository(owner + '/' + repo)) &&
      kind === 'blob' &&
      /^[a-f0-9]{40}$/.test(ref || '')
    );
  } catch {
    return false;
  }
}

function validateComponentFindings(findings) {
  if (!Array.isArray(findings) || findings.length > 3) throw new Error('Return at most three component issues.');
  const keys = new Set();
  for (const finding of findings) {
    if (!finding || !isComponentRepository(finding.repository)) throw new Error('Unknown component issue repository.');
    if (
      typeof finding.component !== 'string' ||
      typeof finding.failure_key !== 'string' ||
      !slug.test(finding.component || '') ||
      !slug.test(finding.failure_key || '') ||
      finding.failure_key.length > 100
    ) {
      throw new Error('Component issues need a stable component and failure key.');
    }
    for (const key of [
      'title',
      'expected_behavior',
      'expectation_source',
      'actual_behavior',
      'impact',
      'affected_versions',
      'upstream_evidence',
    ]) {
      if (typeof finding[key] !== 'string' || !finding[key].trim() || finding[key].length > 2000) {
        throw new Error('Component issues need evidence in ' + key + '.');
      }
    }
    if (finding.title.length > 160 || /[\r\n]/.test(finding.title) || !evidenceUrl(finding.expectation_source)) {
      throw new Error('Component issues need a concise title and a primary expectation source.');
    }
    if (!sourcePath(finding.docs_path) || !Number.isInteger(finding.docs_line) || finding.docs_line < 1) {
      throw new Error('Component issues need a changed documentation location.');
    }
    if (
      !finding.docs_path.startsWith('docs/components/' + finding.component + '/') &&
      !finding.docs_path.startsWith('docs/public/components/' + finding.component + '/')
    ) {
      throw new Error('The component must match the affected documentation.');
    }
    const reproduction = finding.reproduction;
    if (
      !reproduction ||
      !['reproduced', 'not_reproduced'].includes(reproduction.status) ||
      ['procedure', 'observed_result'].some(
        (key) => typeof reproduction[key] !== 'string' || reproduction[key].length > 6000,
      )
    ) {
      throw new Error('Component issues need reproduction evidence.');
    }
    if (!['present', 'fixed', 'unverified'].includes(finding.upstream_status)) {
      throw new Error('Component issues need an upstream status.');
    }
    const source = finding.source;
    if (
      !source ||
      !/^[a-f0-9]{40}$/.test(source.commit_sha || '') ||
      !sourcePath(source.path) ||
      !Number.isInteger(source.line) ||
      !Number.isInteger(source.end_line) ||
      source.line < 1 ||
      source.end_line < source.line ||
      source.end_line - source.line > 80 ||
      typeof source.excerpt !== 'string' ||
      !source.excerpt.trim() ||
      source.excerpt.length > 12000
    ) {
      throw new Error('Component issues need a precise source excerpt and commit.');
    }
    for (const key of ['existing_issue_number', 'existing_fix_number']) {
      if (!Number.isInteger(finding[key]) || finding[key] < 0)
        throw new Error('Invalid existing issue or fix reference.');
    }
    const key = issueFingerprint(finding);
    if (keys.has(key)) throw new Error('Do not repeat the same component issue in one review.');
    keys.add(key);
  }
}

function issueFingerprint(finding) {
  return createHash('sha256')
    .update([finding.repository, finding.component, finding.failure_key].join('\n'))
    .digest('hex');
}

function permalink(repository, source) {
  const path = source.path.split('/').map(encodeURIComponent).join('/');
  return `https://github.com/${repository}/blob/${source.commit_sha}/${path}#L${source.line}-L${source.end_line}`;
}

function issueUrl(repository, number) {
  return 'https://github.com/' + repository + '/issues/' + number;
}

function unchangedIssues(previous, current) {
  const before = new Map(previous.map((issue) => [issue.number, issue.updated_at]));
  return before.size === current.length && current.every((issue) => before.get(issue.number) === issue.updated_at);
}

async function verifySource(github, finding, snapshot) {
  if (finding.source.commit_sha !== snapshot.source_sha)
    throw new Error('Source evidence does not match the reviewed checkout.');
  const { data } = await github.rest.repos.getContent({
    owner: 'warp-ds',
    repo: finding.repository.split('/')[1],
    path: finding.source.path,
    ref: snapshot.source_sha,
  });
  if (data.type !== 'file' || data.encoding !== 'base64')
    throw new Error('Cannot verify the component source excerpt.');
  const lines = Buffer.from(data.content, 'base64').toString('utf8').replace(/\r\n/g, '\n').split('\n');
  const actual = lines.slice(finding.source.line - 1, finding.source.end_line).join('\n');
  if (
    finding.source.end_line > lines.length ||
    actual.trim() !== finding.source.excerpt.replace(/\r\n/g, '\n').trim()
  ) {
    throw new Error('Component source excerpt does not match the cited lines.');
  }
}

async function planComponentIssues({ github, context, findings, componentContext, changedLines }) {
  if (!findings.length) return [];
  if (!github || !componentContext?.enabled || componentContext.head_sha !== context.payload.pull_request.head.sha) {
    throw new Error('Component issue publication requires a configured app and the reviewed component snapshot.');
  }
  const snapshots = new Map(componentContext.repositories.map((repo) => [repo.repository, repo]));
  const live = new Map();
  const plans = [];
  for (const finding of findings) {
    if (!changedLines.get(finding.docs_path)?.has(finding.docs_line))
      throw new Error('Component finding is outside the changed documentation.');
    const snapshot = snapshots.get(finding.repository);
    if (!snapshot) throw new Error('Missing component repository snapshot.');
    if (!live.has(finding.repository))
      live.set(finding.repository, await readComponentRepository(github, finding.repository));
    const current = live.get(finding.repository);
    const marker = ISSUE_MARKER + issueFingerprint(finding) + ' -->';
    const named = finding.existing_issue_number;
    if (named && !snapshot.issues.some((issue) => issue.number === named))
      throw new Error('Unknown existing component issue.');
    const normalize = (title) => title.trim().toLowerCase().replace(/\s+/g, ' ');
    const existing = named
      ? current.issues.find((issue) => issue.number === named)
      : current.issues.find((issue) => isReviewer(issue.author) && issue.body.startsWith(marker)) ||
        current.issues.find((issue) => normalize(issue.title) === normalize(finding.title));
    if (named && !existing) throw new Error('The referenced component issue is no longer available.');
    if (existing && finding.upstream_status !== 'fixed') {
      plans.push({ kind: 'linked', finding, issue: existing });
      continue;
    }
    if (
      finding.upstream_status === 'unverified' ||
      (finding.upstream_status !== 'fixed' &&
        (finding.reproduction.status !== 'reproduced' ||
          !finding.reproduction.procedure.trim() ||
          !finding.reproduction.observed_result.trim()))
    ) {
      plans.push({ kind: 'deferred', finding, reason: 'Needs verification; no issue filed.' });
      continue;
    }
    if (snapshot.source_sha !== current.default_branch_sha) {
      plans.push({
        kind: 'deferred',
        finding,
        issue: existing,
        reason: 'The implementation changed during this review; no issue filed.',
      });
      continue;
    }
    await verifySource(github, finding, snapshot);
    if (finding.upstream_status === 'fixed') {
      let url = permalink(finding.repository, finding.source);
      if (finding.existing_fix_number) {
        const fix = current.pull_requests.find(
          (pull) => pull.number === finding.existing_fix_number && pull.state === 'MERGED',
        );
        if (!fix || !snapshot.pull_requests.some((pull) => pull.number === fix.number))
          throw new Error('Unknown merged component fix.');
        url = 'https://github.com/' + finding.repository + '/pull/' + fix.number;
      }
      plans.push({ kind: 'fixed', finding, issue: existing, url });
      continue;
    }
    if (finding.existing_fix_number) throw new Error('A current component bug cannot also claim a merged fix.');
    if (!snapshot.issues_complete || !current.issues_complete || !unchangedIssues(snapshot.issues, current.issues)) {
      plans.push({
        kind: 'deferred',
        finding,
        reason: 'Existing issues need another duplicate check; no issue filed.',
      });
      continue;
    }
    plans.push({ kind: 'create', finding, branch: current.default_branch });
  }
  return plans;
}

function renderIssue(finding, context) {
  const docUrl = 'https://github.com/' + context.repo.owner + '/' + context.repo.repo;
  const head = context.payload.pull_request.head.sha;
  const docsPath = finding.docs_path.split('/').map(encodeURIComponent).join('/');
  const pull = context.payload.pull_request.number;
  const codeFence = '`'.repeat(
    Math.max(3, ...(finding.reproduction.procedure.match(/`+/g) || []).map((value) => value.length + 1)),
  );
  return [
    `${ISSUE_MARKER}${issueFingerprint(finding)} -->\n` +
      `<!-- warp-docs-component-key:${finding.component}/${finding.failure_key} -->`,
    finding.impact.trim(),
    `### Expected behavior\n\n${finding.expected_behavior.trim()}`,
    `Expected behavior is based on [this requirement](${finding.expectation_source}).`,
    `### Actual behavior\n\n${finding.actual_behavior.trim()}`,
    `**Affected versions:** ${finding.affected_versions.trim()}`,
    `### Reproduction\n\n${codeFence}text\n${finding.reproduction.procedure.trim()}\n${codeFence}`,
    finding.reproduction.observed_result.trim(),
    `### Current implementation\n\n${finding.upstream_evidence.trim()}`,
    `[Source at the reviewed commit](${permalink(finding.repository, finding.source)}).`,
    `Found while reviewing [docs PR #${pull}](${docUrl}/pull/${pull}) ` +
      `at [${head.slice(0, 7)}](${docUrl}/commit/${head}). ` +
      `[Relevant documentation](${docUrl}/blob/${head}/${docsPath}#L${finding.docs_line}).`,
    '',
  ].join('\n\n');
}

async function publishComponentIssues({ github, context, plans, isCurrent }) {
  const results = [];
  for (const plan of plans) {
    if (!(await isCurrent())) throw new Error('Pull request changed before component issue publication.');
    if (plan.kind === 'create') {
      const { data: branch } = await github.rest.repos.getBranch({
        owner: 'warp-ds',
        repo: plan.finding.repository.split('/')[1],
        branch: plan.branch,
      });
      if (branch.commit.sha !== plan.finding.source.commit_sha) {
        results.push({
          ...plan,
          kind: 'deferred',
          reason: 'The implementation changed during this review; no issue filed.',
        });
        continue;
      }
      const { data } = await github.rest.issues.create({
        owner: 'warp-ds',
        repo: plan.finding.repository.split('/')[1],
        title: plan.finding.title.trim(),
        body: renderIssue(plan.finding, context),
      });
      results.push({ ...plan, kind: 'created', issue: data });
    } else {
      results.push(plan);
    }
  }
  return results;
}

function renderComponentLinks(results, previousBody = '') {
  const links = new Map();
  try {
    const encoded = previousBody.match(/<!-- warp-docs-component-links:([A-Za-z0-9+/=]+) -->/)?.[1];
    for (const link of encoded ? JSON.parse(Buffer.from(encoded, 'base64').toString('utf8')) : []) {
      if (
        isComponentRepository(link.repository) &&
        Number.isInteger(link.number) &&
        link.number > 0 &&
        typeof link.title === 'string'
      ) {
        links.set(issueUrl(link.repository, link.number), link);
      }
    }
  } catch {
    /* Ignore a malformed older summary; it cannot authorize an issue action. */
  }
  const notes = [];
  for (const result of results) {
    if (result.issue) {
      const link = { repository: result.finding.repository, number: result.issue.number, title: result.issue.title };
      links.set(issueUrl(link.repository, link.number), link);
    }
    if (result.kind === 'fixed') {
      notes.push('- ' + result.finding.title + ': [fixed upstream](' + result.url + '); check release availability.');
    } else if (result.kind === 'deferred') {
      notes.push('- ' + result.finding.title + ': ' + result.reason);
    }
  }
  if (!links.size && !notes.length) return '';
  const list = [...links.values()];
  const marker = list.length ? '\n' + LINKS_MARKER + Buffer.from(JSON.stringify(list)).toString('base64') + ' -->' : '';
  const lines = list.map(
    (link) =>
      '- [' + link.repository + '#' + link.number + '](' + issueUrl(link.repository, link.number) + ') — ' + link.title,
  );
  return marker + '\n\n**Component follow-ups**\n\n' + [...lines, ...notes].join('\n');
}

module.exports = {
  issueFingerprint,
  planComponentIssues,
  publishComponentIssues,
  renderComponentLinks,
  validateComponentFindings,
};
