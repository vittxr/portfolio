<script lang="ts">
  import Header from '$routes/_fragments/Header/index.svelte';
  import Footer from './Footer.svelte';
  export let className: string = '';
</script>

<div
  class="px-10 py-10 min-h-screen flex flex-col dark:bg-gray-950 text-black dark:text-white {className}"
>
  <Header />

  <main class="flex-grow flex flex-col items-center justify-center">
    <slot />
  </main>

  <Footer />
</div>
