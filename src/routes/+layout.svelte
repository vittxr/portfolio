<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import Base from './_fragments/Base.svelte';
  import { isLoading } from 'svelte-i18n';
  import LoadingBar from '$components/LoadingBar.svelte';
</script>

<LoadingBar isLoading={$isLoading} />
<Base>
  <slot />
</Base>
