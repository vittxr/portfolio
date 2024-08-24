<script lang="ts">
  import Header from '$routes/_fragments/Header/index.svelte';
  import { onMount } from 'svelte';
  import Footer from './Footer.svelte';
  export let className: string = '';

  onMount(() => {
    const { hash } = document.location;
    const scrollTo = document.getElementById(hash.slice(1));
    if (scrollTo) scrollTo.scrollIntoView();
  });
</script>

<div
  class="px-10 pt-10 pb-16 sm:pb-10 min-h-screen flex flex-col dark:bg-gray-950 text-black dark:text-white {className}"
>
  <Header />

  <main class="flex-grow flex flex-col items-center justify-center">
    <slot />
  </main>

  <Footer />
</div>
