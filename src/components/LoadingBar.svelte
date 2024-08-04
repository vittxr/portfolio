<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let isLoading: boolean = false;
  export let duration: number = 1000;

  const progress = writable(0);

  onMount(() => {
    let timer: number;
    if (isLoading) {
      timer = setInterval(() => {
        progress.update((n) => (n < 100 ? n + 0.5 : 100));
      }, duration / 200);
    } else {
      progress.set(0);
    }

    return () => clearInterval(timer);
  });

  $: if (!isLoading) {
    setTimeout(() => {
      progress.set(0);
    }, 500);
  }
</script>

{#if isLoading}
  <div
    class="h-1 bg-rose-600 fixed top-0 left-0 transition-all duration-200 ease-out"
    style="width: {$progress}%"
  ></div>
{/if}
