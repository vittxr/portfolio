<script lang="ts">
  import Experience from './Experience.svelte';
  import { _, isLoading } from 'svelte-i18n';
  import type { ExperienceItemType } from '$lib/types/i18n';
  import Calendar from '$components/icons/Calendar.svelte';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';
  import ToolsIcon from '$components/icons/ToolsIcon.svelte';
  import DocumentIcon from '$components/icons/DocumentIcon.svelte';
  import Title from './Title.svelte';
  import I18nText from '$components/I18nText.svelte';

  let experienceItems: ExperienceItemType[] = [];
  $: experienceItems = $isLoading
    ? []
    : ($_('about_page.experience.items') as unknown as ExperienceItemType[]);
</script>

<section class="w-full">
  <Title ancorKey="experience">
    <I18nText>{$_('about_page.experience.title')}</I18nText>
  </Title>

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
                <I18nText>{$_('about_page.experience.responsibilities_title')}</I18nText>:
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
              <span class="font-semibold"
                ><I18nText>{$_('about_page.experience.technologies_title')}</I18nText>:</span
              >
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
            {#if end_date}
              {new Date(end_date).toLocaleDateString()}
            {:else}
              <I18nText>{$_('about_page.experience.present_text')}</I18nText>
            {/if}
          </time>
        </div>
      </div>
    {/each}
  </div>
</section>
