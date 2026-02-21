<script lang="ts">
  import { marked } from 'marked';

  export let markdown: string;

  $: htmlContent = marked(markdown);
</script>

<article class="prose prose-neutral dark:prose-invert max-w-none">
  {@html htmlContent}
</article>

<style>
  article :global(a) {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  article :global(a:hover) {
    opacity: 0.8;
  }

  article :global(h3) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  article :global(ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  article :global(li) {
    margin-bottom: 0.25rem;
  }

  article :global(strong) {
    font-weight: 600;
  }
</style>
