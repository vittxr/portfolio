<script>
  import Timeline from '$components/Timeline.svelte';
  import SuitcaseIcon from '$components/icons/SuitcaseIcon.svelte';
  import Header from '$routes/common/Header/index.svelte';
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>VS - Vitor Schirmer</title>
</svelte:head>

<div class="w-screen h-screen overflow-auto dark:bg-gray-950">
  <div class="w-5/6 mx-auto py-10">
    <Header />
    <main class="flex flex-col justify-center items-center">
      <h1 class="text-black dark:text-white text-7xl font-bold">Vitor Schirmer</h1>
      <h2 class="text-black dark:text-white text-3xl font-bold">
        {$_('role')}
      </h2>

      <div class="mt-10 w-full">
        <h3 class="text-black dark:text-white text-2xl font-bold">
          {$_('work_section.title')}
        </h3>
        <Timeline
          items={[
            {
              title: $_('work_section.jobs.0.company'),
              content: $_('work_section.jobs.0.description'),
              date: $_('work_section.jobs.0.date'),
              icon: SuitcaseIcon,
            },
            {
              title: $_('work_section.jobs.1.company'),
              content: $_('work_section.jobs.1.description'),
              date: $_('work_section.jobs.1.date'),
              icon: SuitcaseIcon,
            },
          ]}
        />
      </div>
    </main>
  </div>
</div>
