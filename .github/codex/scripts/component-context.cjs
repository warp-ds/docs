const COMPONENT_REPOSITORIES = ['elements', 'react', 'vue', 'warp-ios', 'warp-android'];
const MAX_ISSUES = 500;

function isComponentRepository(repository) {
  return COMPONENT_REPOSITORIES.some((name) => repository === 'warp-ds/' + name);
}

async function readComponentRepository(github, repository) {
  if (!isComponentRepository(repository)) throw new Error('Unknown component repository: ' + repository);
  const issues = [];
  let cursor = null;
  let result;
  let complete = false;
  do {
    const data = await github.graphql(
      `query($name: String!, $cursor: String, $includePullRequests: Boolean!) {
        repository(owner: "warp-ds", name: $name) {
          nameWithOwner
          defaultBranchRef { name target { oid } }
          issues(first: 100, after: $cursor, states: [OPEN, CLOSED], orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes { number title body state stateReason url updatedAt author { login __typename } }
            pageInfo { hasNextPage endCursor }
          }
          pullRequests(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) @include(if: $includePullRequests) {
            nodes { number title body state url mergedAt }
          }
        }
      }`,
      { name: repository.split('/')[1], cursor, includePullRequests: cursor === null },
    );
    const page = data.repository;
    if (!page || page.nameWithOwner !== repository || !page.defaultBranchRef?.target?.oid) {
      throw new Error('Cannot read component repository: ' + repository);
    }
    result ??= {
      repository,
      default_branch: page.defaultBranchRef.name,
      default_branch_sha: page.defaultBranchRef.target.oid,
      pull_requests: (page.pullRequests?.nodes || []).map((pull) => ({ ...pull, body: pull.body.slice(0, 6000) })),
    };
    issues.push(
      ...page.issues.nodes.map((issue) => ({
        number: issue.number,
        title: issue.title,
        body: (issue.body || '').slice(0, 12000),
        state: issue.state,
        state_reason: issue.stateReason || null,
        url: issue.url,
        updated_at: issue.updatedAt,
        author: issue.author,
      })),
    );
    complete = !page.issues.pageInfo.hasNextPage;
    cursor = page.issues.pageInfo.endCursor;
  } while (!complete && issues.length < MAX_ISSUES);
  return { ...result, issues, issues_complete: complete };
}

async function prepareComponentContext({ github, headSha, sourceHeads }) {
  const repositories = await Promise.all(
    COMPONENT_REPOSITORIES.map(async (name) => {
      const sourceSha = sourceHeads[name];
      if (!/^[a-f0-9]{40}$/.test(sourceSha || '')) throw new Error('Missing checked-out source SHA for ' + name);
      return { ...(await readComponentRepository(github, 'warp-ds/' + name)), source_sha: sourceSha };
    }),
  );
  return { enabled: true, head_sha: headSha, repositories };
}

module.exports = { COMPONENT_REPOSITORIES, isComponentRepository, prepareComponentContext, readComponentRepository };
