<script lang="ts">
  export let idx: number;
  export let className: string = '';
  export let icon: any = '';
</script>

<div class="mt-6 sm:mt-0 sm:mb-12 {className}">
  <div class="flex flex-col sm:flex-row items-center">
    <div class="flex {idx % 2 === 0 ? 'justify-start' : 'justify-end'} w-full mx-auto items-center">
      <div class="w-full sm:w-1/2 {idx % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}">
        <div class="p-4 rounded dark:bg-gray-950 shadow-md dark:shadow-gray-800 break-words">
          <p class="mt-2">
            <slot />
          </p>
        </div>
      </div>
    </div>
    <div
      class="rounded-full bg-gray-950 text-white w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center z-10"
    >
      <svelte:component this={icon} />
    </div>
  </div>
</div>
