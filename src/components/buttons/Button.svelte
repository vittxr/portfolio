<script lang="ts">
  type Animation = {
    hover?: 'invert-colors' | 'bg-transparent';
  };

  export let className: string = '';
  export let animation: Animation;
  export let onClick: () => void;
</script>

{#if animation}
  {#if animation.hover === 'invert-colors'}
    <button
      class="inline-flex items-start px-4 py-2 border-2 border-indigo-600 shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-inherit hover:text-indigo-600 {className}"
      on:click={onClick}
    >
      <slot />
    </button>
  {:else if animation.hover === 'bg-transparent'}
    <button
      class="inline-flex items-start px-4 py-2 border-2 border-indigo-600 shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-transparent hover:text-inherit transform transition-transform duration-300 {className}"
      on:click={onClick}
    >
      <slot />
    </button>
  {/if}
{/if}
