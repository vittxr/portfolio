<script lang="ts">
  export let initialIcon: any;
  // export let items: Array<{ title?: string; content: string; icon: any }>;
  export let className: Partial<{
    thread: string;
    itemBox: string;
  }> = {};
</script>

<div class="py-2 flex flex-col justify-center sm:py-4">
  <div class="py-3 w-full px-2 sm:px-0">
    <div class="relative text-gray-700 antialiased text-sm font-semibold">
      {#if initialIcon}
        <div
          class="rounded-full bg-indigo-500 border-indigo-500 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center z-10"
        >
          <svelte:component this={initialIcon} className="text-white" />
        </div>
      {/if}

      <div
        class="hidden sm:block w-1 bg-indigo-700 absolute h-full left-1/2 transform -translate-x-1/2 {className?.thread}"
      ></div>

      <slot />
      <!-- {#each items as item, idx}
        <div class="mt-6 sm:mt-0 sm:mb-12 {className?.itemBox}">
          <div class="flex flex-col sm:flex-row items-center">
            <div
              class="flex {idx % 2 === 0
                ? 'justify-start'
                : 'justify-end'} w-full mx-auto items-center"
            >
              <div class="w-full sm:w-1/2 {idx % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}">
                <div class="p-4 bg-white rounded shadow break-words">

                  <p class="text-gray-600 mt-2">{item.content}</p>
                </div>
              </div>
            </div>
            <div
              class="rounded-full bg-indigo-500 border-indigo-500 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center z-10"
            >
              <svelte:component this={item.icon} className="text-white" />
            </div>
          </div>
        </div>
      {/each} -->
    </div>
  </div>
</div>
