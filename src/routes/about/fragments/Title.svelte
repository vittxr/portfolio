<script>
  import LinkIcon from '$components/icons/LinkIcon.svelte';

  export let ancorKey;
</script>

<a href="#{ancorKey}">
  <div class="inline-flex items-center space-x-4">
    <LinkIcon className="w-5 h-5" />
    <h3 class=" text-rose-500 text-3xl font-bold uppercase underline underline-offset-4 font-mono">
      <slot />
    </h3>
  </div>
</a>
