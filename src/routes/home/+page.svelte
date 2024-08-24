<script lang="ts">
  import '$lib/i18n';
  import { _, isLoading } from 'svelte-i18n';
  import HeroSection from '$routes/home/fragments/HeroSection.svelte';
  import Cursor from '$components/Cursor.svelte';
</script>

<svelte:head>
  <title>vschirmer / {$isLoading ? 'loading' : $_('utils.nav.home')}</title>
</svelte:head>

<Cursor />
<HeroSection className="h-full" />
