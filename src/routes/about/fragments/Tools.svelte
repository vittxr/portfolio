<script lang="ts">
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import { _, isLoading } from 'svelte-i18n';
  import I18nText from '$components/I18nText.svelte';

  let content = '';
  let loading = true;
  let error = false;

  onMount(async () => {
    console.log('aaaaaaaaaaaaaaaaaaa');
    try {
      const res = await fetch('https://raw.githubusercontent.com/vittxr/mytools/main/README.md');
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

{#if loading}
  loading
{:else if error}
  <p>Failed to load content.</p>
{:else}
  <div class="prose prose-sm max-w-none dark:prose-invert">
    {@html content}
  </div>
{/if}
