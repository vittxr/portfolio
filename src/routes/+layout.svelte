<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import Base from './_fragments/Base.svelte';
  import { browser } from '$app/environment';
  import { locale, waitLocale, isLoading } from 'svelte-i18n';

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
