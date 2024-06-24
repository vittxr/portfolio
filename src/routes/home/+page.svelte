<script>
  import { _ } from 'svelte-i18n';
  import Header from '$routes/_fragments/Header/index.svelte';
  import JobsExperience from '$routes/about/fragments/JobsExperience.svelte';
  import HeroSection from '$routes/home/fragments/HeroSection.svelte';
  import Base from '$routes/_fragments/Base.svelte';
</script>

<svelte:head>
  <title>vschirmer / home</title>
</svelte:head>

<Base>
  <HeroSection className="mt-32" />
</Base>
