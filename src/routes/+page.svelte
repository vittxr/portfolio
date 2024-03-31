<script>
  import { _ } from 'svelte-i18n';
  import Header from '$routes/_fragments/Header/index.svelte';
  import JobsExperience from '$routes/home/JobsExperience.svelte';
  import HeroSection from '$routes/home/HeroSection.svelte';
</script>

<svelte:head>
  <title>vitxr</title>
</svelte:head>

<div class="w-screen h-screen overflow-auto dark:bg-gray-950 text-black dark:text-white">
  <div class="w-5/6 mx-auto py-10 relative">
    <Header />

    <main class="flex flex-col">
      <!-- Hero section -->
      <HeroSection />

      <!-- Projects section -->

      <!-- Work experience section -->
      <!-- <JobsExperience /> -->
    </main>
  </div>
</div>
