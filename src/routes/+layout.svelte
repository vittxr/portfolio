<script>
  import '../app.css';
  import { browser } from '$app/environment';
  import '$lib/i18n';
  import { locale, waitLocale, isLoading } from 'svelte-i18n';
  import Base from './_fragments/Base.svelte';

  export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language);
    }
    await waitLocale();
  };
</script>

{#if $isLoading}
  Please wait...
{:else}
  <Base>
    <slot />
  </Base>
{/if}
