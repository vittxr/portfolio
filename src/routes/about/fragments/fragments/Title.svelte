<script>
  export let ancorKey;
</script>

<a href="#{ancorKey}">
  <div class="w-full inline-flex justify-center sm:justify-start items-center space-x-4">
    <h3 class="text-3xl font-bold uppercase underline-offset-4 font-mono">
      <slot />
    </h3>
  </div>
</a>
