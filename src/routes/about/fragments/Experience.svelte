<script lang="ts">
  import { _ } from 'svelte-i18n';
  import type { ExperienceItemType } from '$lib/types/i18n';
  import Calendar from '$components/icons/Calendar.svelte';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';
  import ToolsIcon from '$components/icons/ToolsIcon.svelte';
  import DocumentIcon from '$components/icons/DocumentIcon.svelte';

  const experienceItems: ExperienceItemType[] = $_(
    'about_page.experience.items',
  ) as unknown as ExperienceItemType[];
</script>

<section class="w-full">
  <h3 class="text-2xl font-bold">Experience</h3>

  <div class="pt-2">
    {#each experienceItems as { company, start_date, end_date, description, role, technologies, responsibilities }}
      <div class="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
        <div class="flex space-x-2">
          <SuitcaseIcon className="" />
          <h4 class="text-sm font-semibold uppercase">
            {role} - {company}
          </h4>
        </div>

        <div class="mt-3 space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>{description}</p>

          <div>
            <div class="inline-flex items-center space-x-1">
              <DocumentIcon className="text-gray-500 dark:text-gray-400 w-3 h-3" />
              <span class="font-semibold">
                {$_('about_page.experience.responsibilities_title')}:
              </span>
            </div>
            <ul>
              {#each responsibilities as responsibility}
                <li class="list-disc ml-4">{responsibility}</li>
              {/each}
            </ul>
          </div>

          <div class="inline-flex items-center space-x-1">
            <ToolsIcon className="text-gray-500 dark:text-gray-400 w-3 h-3" />

            <div class="space-x-1">
              <span class="font-semibold">{$_('about_page.experience.technologies_title')}:</span>
              <span>{technologies}</span>
            </div>
          </div>
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
            {end_date
              ? new Date(end_date).toLocaleDateString()
              : $_('about_page.experience.present_text')}
          </time>
        </div>
      </div>
    {/each}
  </div>
</section>
