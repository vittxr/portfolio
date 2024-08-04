<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import Base from './_fragments/Base.svelte';
  import { browser } from '$app/environment';
  import { locale, waitLocale, isLoading } from 'svelte-i18n';
  import LoadingBar from '$components/LoadingBar.svelte';

  export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language);
    }
    await waitLocale();
  };
</script>

<LoadingBar isLoading={$isLoading} />
<Base>
  <slot />
</Base>
