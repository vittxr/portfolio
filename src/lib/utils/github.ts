const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com';

export interface GitHubReadmeOptions {
  owner: string;
  repo: string;
  branch?: string;
  path?: string;
}

export async function fetchGitHubReadme(options: GitHubReadmeOptions): Promise<string> {
  const { owner, repo, branch = 'main', path = 'README.md' } = options;
  const url = `${GITHUB_RAW_BASE_URL}/${owner}/${repo}/${branch}/${path}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch README: ${response.status} ${response.statusText}`);
  }

  return response.text();
}
