<script lang="ts">
  import { Timeline, TimelineItem } from '$components/Timeline';
  import type { TimelineItemType } from '$lib/types/i18n';
  import CalendarIcon from '$components/icons/CalendarIcon.svelte';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';
  import { _ } from 'svelte-i18n';

  const timelineItems: TimelineItemType[] = $_(
    'about.timeline.items',
  ) as unknown as TimelineItemType[];
</script>

<div class="mt-10 w-full">
  <h3 class="text-2xl font-bold">
    {$_('about.timeline.title')}
  </h3>
  <Timeline initialIcon={CalendarIcon}>
    {#each timelineItems as { year, items }}
      <TimelineItem idx={year} icon={SuitcaseIcon}>
        <div class="flex items-center justify-between text-2xl">
          <h5>{year}</h5>
          <CalendarIcon className="h-8 w-8 text-gray-500 inline-block mr-1" />
        </div>

        <ul class="mt-2">
          {#each items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </TimelineItem>
    {/each}
  </Timeline>
</div>
