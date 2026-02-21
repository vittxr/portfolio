<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
  import Card from '$components/Card.svelte';
  import MarkdownContent from './fragments/MarkdownContent.svelte';
  import Title from './fragments/Title.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>vschirmer / {$isLoading ? 'loading' : $_('tools_page.title')}</title>
</svelte:head>

<div class="pt-10 space-y-10 mb-10">
  <Card>
    <Title />
    <MarkdownContent markdown={data.markdown} />
  </Card>
</div>
