<script lang="ts">
  import Header from '$routes/_fragments/Header/index.svelte';
</script>

<div class="w-screen h-screen overflow-auto dark:bg-gray-950 text-black dark:text-white">
  <div class="w-11/12 mx-auto py-10 relative h-full">
    <Header />

    <main class="flex flex-col h-full relative">
      <slot />
    </main>
  </div>
</div>
