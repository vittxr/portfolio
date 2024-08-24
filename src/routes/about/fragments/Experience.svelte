<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
  import type { ExperienceItemType } from '$lib/types/i18n';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';
  import Title from './fragments/Title.svelte';
  import I18nText from '$components/I18nText.svelte';
  import Card from '$components/Card.svelte';

  let experienceItems: ExperienceItemType[] = [];
  $: experienceItems = $isLoading
    ? []
    : ($_('about_page.experience.items') as unknown as ExperienceItemType[]);
</script>

<section class="w-full">
  <Title ancorKey="experience">
    <I18nText>{$_('about_page.experience.title')}</I18nText>
  </Title>

  <div class="pt-2 space-y-5">
    {#each experienceItems as { company, start_date, end_date, description, role, technologies, responsibilities }}
      <Card className="dark:bg-gray-950">
        <div class="flex space-x-2">
          <SuitcaseIcon className="" />
          <h4 class="text-sm font-semibold uppercase text-center sm:text-left">
            {role} - {company}
          </h4>
        </div>

        <div class="text-sm text-gray-700 dark:text-gray-300">
          <p>{description}</p>

          <div class="space-y-2 mt-3">
            <div>
              <span class="font-semibold">
                <I18nText>{$_('about_page.experience.responsibilities_title')}</I18nText>:
              </span>

              <ul class="ml-2">
                {#each responsibilities as responsibility}
                  <li class="list-disc ml-4">{responsibility}</li>
                {/each}
              </ul>
            </div>

            <div class="space-x-1">
              <span class="font-semibold">
                <I18nText>{$_('about_page.experience.technologies_title')}</I18nText>:
              </span>
              <span>{technologies}</span>
            </div>

            <div class="flex space-x-1">
              <span class="font-semibold">
                <I18nText>{$_('utils.date')}</I18nText>:
              </span>

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
          </div>
        </div>
      </Card>
    {/each}
  </div>
</section>
