<script lang="ts">
  import { _ } from 'svelte-i18n';
  import type { ExperienceItemType } from '$lib/types/i18n';
  import Calendar from '$components/icons/Calendar.svelte';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';

  const experienceItems: ExperienceItemType[] = $_(
    'about_page.experience.items',
  ) as unknown as ExperienceItemType[];
</script>

<h3 class="text-2xl font-bold">Experience</h3>

<div class="pt-2">
  {#each experienceItems as { company, start_date, end_date, description, role, technologies }}
    <div class="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
      <div class="flex space-x-2">
        <SuitcaseIcon />
        <h4 class="text-sm font-medium uppercase">
          {role} - {company}
        </h4>
      </div>
      <div class="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <p>{description}</p>
        <p>technologies: {technologies}</p>
      </div>
    </div>

    <div class="w-fit mt-6 text-sm flex space-x-2">
      <Calendar />

      <div>
        <time datetime={start_date} class="border-gray-200 lg:ml-0 lg:mt-2 lg:pl-0">
          {new Date(start_date).toLocaleDateString()}
        </time>
        -
        <time datetime={end_date} class=" border-gray-200 lg:ml-0 lg:mt-2 lg:pl-0">
          {end_date ? 'Present' : new Date(start_date).toLocaleDateString()}
        </time>
      </div>
    </div>
  {/each}
</div>
