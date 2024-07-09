<script>
  import Timeline from '$components/Timeline.svelte';
  import CalendarIcon from '$components/icons/CalendarIcon.svelte';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';
  import { _ } from 'svelte-i18n';
</script>

<div class="mt-10 w-full">
  <h3 class="text-2xl font-bold">
    {$_('about.work_section.title')}
  </h3>
  <Timeline
    initialIcon={CalendarIcon}
    items={[
      {
        title: $_('about.work_section.jobs.0.company'),
        content: $_('about.work_section.jobs.0.description'),
        date: $_('about.work_section.jobs.0.date'),
        icon: SuitcaseIcon,
      },
      {
        title: $_('about.work_section.jobs.1.company'),
        content: $_('about.work_section.jobs.1.description'),
        date: $_('about.work_section.jobs.1.date'),
        icon: SuitcaseIcon,
      },
    ]}
  />
</div>
