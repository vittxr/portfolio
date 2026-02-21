import { fetchGitHubReadme } from '$lib/utils/github';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const markdown = await fetchGitHubReadme({
    owner: 'vittxr',
    repo: 'mytools',
    branch: 'main',
  });

  return {
    markdown,
  };
};
