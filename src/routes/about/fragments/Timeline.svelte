<script lang="ts">
  import { Timeline, TimelineItem } from '$components/Timeline';
  import type { TimelineItemType } from '$lib/types/i18n';
  import CalendarIcon from '$components/icons/CalendarIcon.svelte';
  import { _, isLoading } from 'svelte-i18n';
  import Title from './fragments/Title.svelte';
  import I18nText from '$components/I18nText.svelte';

  let timelineItems: TimelineItemType[] = [];

  $: timelineItems = $isLoading
    ? []
    : ($_('about_page.timeline.items') as unknown as TimelineItemType[]);
</script>

<section class="w-full">
  <Title ancorKey="timeline">
    <I18nText>{$_('about_page.timeline.title')}</I18nText>
  </Title>
  <Timeline initialIcon={CalendarIcon}>
    {#each timelineItems as { year, items }}
      <TimelineItem idx={year} icon={CalendarIcon}>
        <h5 class="text-2xl text-center sm:text-left">{year}</h5>

        <ul class="mt-2 pl-4 list-disc">
          {#each items as item}
            <li>{@html item}</li>
          {/each}
        </ul>
      </TimelineItem>
    {/each}
  </Timeline>
</section>
