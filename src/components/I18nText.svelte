<script lang="ts">
  import { isLoading } from 'svelte-i18n';

  export let className: string = '';
</script>

<!-- fill the component with characters and set the text color to transparent so that the <span /> has the same height as its parent element -->
{#if $isLoading}
  <span
    class="w-20 bg-gray-200 text-transparent rounded-md dark:bg-gray-700 max-w-[360px] animate-pulse {className}"
  >
    aaaaaaaaaaaaaaaaaaaaaaaaaaa
  </span>
{:else}
  <slot />
{/if}
