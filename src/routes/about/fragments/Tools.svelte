<script lang="ts">
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import { _, isLoading } from 'svelte-i18n';
  import I18nText from '$components/I18nText.svelte';
  import Link from '$components/Link.svelte';
  import Title from './fragments/Title.svelte';

  const ghRepo = 'https://raw.githubusercontent.com/vittxr/mytools/main/README.md';

  let content = '';
  let loading = true;
  let error = false;

  onMount(async () => {
    try {
      const res = await fetch(ghRepo);
      if (!res.ok) throw new Error();
      const md = await res.text();
      content = await marked(md);
      console.log('content', content);
    } catch {
      error = true;
    } finally {
      loading = false;
    }
  });
  onMount(() => {
    listbox = document.getElementById(`${id}-listbox`);
  });
</script>

<section class="w-full">
  <Title ancorKey="tools">
    <I18nText>{$_('about_page.tools.title')}</I18nText>
  </Title>
  <h2><I18nText>{$_('about_page.tools.description')}</I18nText></h2>

  {#if loading}
    loading
  {:else if error}
    <p>Failed to load content.</p>
  {:else}
    <Link classname="text-xs underline" href={ghRepo}>{ghRepo}</Link>
    <div class="prose prose-sm max-w-none dark:prose-invert">
      {@html content}
    </div>
  {/if}
</section>
