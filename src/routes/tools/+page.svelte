<script lang="ts">
  import Card from '$components/Card.svelte';
  import MarkdownContent from './fragments/MarkdownContent.svelte';
  import Title from './fragments/Title.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>vschirmer / Tools</title>
</svelte:head>

<div class="pt-10 space-y-10 mb-10">
  <Card>
    <Title />
    <MarkdownContent markdown={data.markdown} />
  </Card>
</div>
