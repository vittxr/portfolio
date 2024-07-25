<script lang="ts">
  import { Timeline, TimelineItem } from '$components/Timeline';
  import type { TimelineItemType } from '$lib/types/i18n';
  import CalendarIcon from '$components/icons/CalendarIcon.svelte';
  import { _ } from 'svelte-i18n';

  const timelineItems: TimelineItemType[] = $_(
    'about_page.timeline.items',
  ) as unknown as TimelineItemType[];
</script>

<div class="mt-10 w-full">
  <h3 class="text-2xl font-bold">
    {$_('about_page.timeline.title')}
  </h3>
  <Timeline initialIcon={CalendarIcon}>
    {#each timelineItems as { year, items }}
      <TimelineItem idx={year} icon={CalendarIcon}>
        <div class="flex items-center justify-between text-2xl">
          <h5>{year}</h5>
        </div>

        <ul class="mt-2 pl-4 list-disc">
          {#each items as item}
            <li>{@html item}</li>
          {/each}
        </ul>
      </TimelineItem>
    {/each}
  </Timeline>
</div>
