<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
  import I18nText from '$components/I18nText.svelte';
  import Projects from './fragments/Projects.svelte';
</script>

<svelte:head>
  <title>vschirmer / {$isLoading ? 'loading' : $_('utils.nav.projects')}</title>
</svelte:head>

<div class="pt-10">
  <h1 class="text-4xl font-bold">
    <I18nText>{$_('projects_page.title')}</I18nText>
  </h1>
  <h2>
    <I18nText>{$_('projects_page.description')}</I18nText>
  </h2>

  <Projects />
</div>
