<script lang="ts">
  export let initialIcon: any;
  export let className: Partial<{
    thread: string;
    itemBox: string;
  }> = {};
</script>

<div class="py-2 flex flex-col justify-center">
  <div class="w-full px-2 sm:px-0">
    <div class="relative antialiased text-sm font-semibold">
      {#if initialIcon}
        <div
          class="rounded-full bg-gray-800 text-white w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center z-10"
        >
          <svelte:component this={initialIcon} />
        </div>
      {/if}

      <div
        class="hidden sm:block w-1 bg-gray-800 absolute h-full left-1/2 transform -translate-x-1/2 {className?.thread}"
      ></div>

      <slot />
    </div>
  </div>
</div>
