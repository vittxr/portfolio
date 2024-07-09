<script>
  import { _ } from 'svelte-i18n';
  import HeroSection from '$routes/home/fragments/HeroSection.svelte';
  import Base from '$routes/_fragments/Base.svelte';
</script>

<svelte:head>
  <title>vschirmer / home</title>
</svelte:head>

<Base>
  <HeroSection className="h-full mt-20" />
</Base>
