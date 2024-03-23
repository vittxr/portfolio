<script>
  import '../app.css';
  import { browser } from '$app/environment';
  import '$lib/i18n';
  import { locale, waitLocale, isLoading } from 'svelte-i18n';

  export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language);
    }
    await waitLocale();
  };
  console.log('isLoading', $isLoading);
</script>

{#if $isLoading}
  Please wait...
{:else}
  <slot />
{/if}
