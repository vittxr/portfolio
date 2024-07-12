<script>
  import { Timeline, TimelineItem } from '$components/Timeline';
  import CalendarIcon from '$components/icons/CalendarIcon.svelte';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';
  import { _ } from 'svelte-i18n';
</script>

<div class="mt-10 w-full">
  <h3 class="text-2xl font-bold">
    {$_('about.timeline.title')}
  </h3>
  <Timeline initialIcon={CalendarIcon}>
    {#each $_(`about.timeline.items`) as item, i}
      <TimelineItem idx={i} icon={SuitcaseIcon}>
        <div class="flex items-center justify-between text-2xl">
          <h5>{item.year}</h5>
          <CalendarIcon className="h-8 w-8 text-gray-500 inline-block mr-1" />
        </div>

        <ul class="mt-2">
          {#each item.description as item}
            <li>{item}</li>
          {/each}
        </ul>
      </TimelineItem>
    {/each}
  </Timeline>
</div>
