<script>
  import { _ } from 'svelte-i18n';
  import Header from '$routes/_fragments/Header/index.svelte';
  import JobsExperience from '$routes/about/JobsExperience.svelte';
  import HeroSection from '$routes/home/HeroSection.svelte';
</script>

<svelte:head>
  <title>vschirmer</title>
</svelte:head>

<div class="w-screen h-screen overflow-auto dark:bg-gray-950 text-black dark:text-white">
  <div id="root" class="w-5/6 mx-auto py-10 relative h-full">
    <Header />

    <main class="flex flex-col h-full relative">
      <HeroSection className="mt-32" />

      <!--Footer: -->
    </main>
  </div>
</div>
