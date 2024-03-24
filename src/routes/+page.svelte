<script>
  import Header from '$routes/_fragments/Header/index.svelte';
  import { _ } from 'svelte-i18n';
  import JobsExperience from '$routes/home/JobsExperience.svelte';
</script>

<svelte:head>
  <title>VS - Vitxr</title>
</svelte:head>

<div class="w-screen h-screen overflow-auto dark:bg-gray-950">
  <div class="w-5/6 mx-auto py-10">
    <Header />

    <main class="flex flex-col justify-center items-center">
      <h1 class="text-black dark:text-white text-7xl font-bold">Vitor Schirmer</h1>
      <h2 class="text-black dark:text-white text-3xl font-bold">
        {$_('role')}
      </h2>

      <!-- About me section -->

      <!-- Projects section -->

      <!-- Work experience section -->
      <JobsExperience />
    </main>
  </div>
</div>
