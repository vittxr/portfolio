<script>
  export let ancorKey;
</script>

<a href="#{ancorKey}">
  <div class="inline-flex items-center space-x-4">
    <h3 class="  text-3xl font-bold uppercase underline-offset-4 font-mono">
      <slot />
    </h3>
  </div>
</a>
