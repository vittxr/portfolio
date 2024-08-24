<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
  import type { ProjectItemType } from '$lib/types/i18n';
  import Button from '$components/buttons/Button.svelte';
  import GithubIcon from '$components/icons/GithubIcon.svelte';
  import LinkIcon from '$components/icons/LinkIcon.svelte';
  import Badge from '$components/Badge.svelte';

  let projectItems: ProjectItemType[] = [];
  $: projectItems = $isLoading ? [] : ($_('projects_page.items') as unknown as ProjectItemType[]);
</script>

<div class="pt-10 grid grid-cols-1 md:grid-cols-2 gap-2">
  {#each projectItems as { name, description, github_repo, live_demo, tools }}
    <div
      class="flex flex-col justify-between bg-white dark:bg-slate-900 shadow-lg rounded-lg p-6 mb-4"
    >
      <div>
        <h2 class="text-2xl font-bold mb-2">{name}</h2>
        <p class="mb-4">{description}</p>

        {#if tools.length > 0}
          <div class="flex flex-wrap mb-4">
            {#each tools as tool}
              <Badge className="mr-1 mt-1">
                {tool}
              </Badge>
            {/each}
          </div>
        {/if}
      </div>

      <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
        {#if github_repo}
          <a href={github_repo} target="_blank" class="text-blue-500 hover:underline">
            <Button
              animation={{
                hover: 'invert-colors',
              }}
            >
              <GithubIcon className="mr-2" />
              GitHub
            </Button>
          </a>
        {/if}

        {#if live_demo}
          <a href={live_demo} target="_blank" class="text-blue-500 hover:underline">
            <Button
              animation={{
                hover: 'invert-colors',
              }}
            >
              <LinkIcon className="mr-2" />
              Live demo
            </Button>
          </a>
        {/if}
      </div>
    </div>
  {/each}
</div>
