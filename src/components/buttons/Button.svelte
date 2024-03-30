<script lang="ts">
  type Animation = {
    hover?: 'invert-colors' | 'scale';
    click?: string;
  };

  export let className: string = '';
  export let animation: Animation;
</script>

<button
  class="inline-flex items-start px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:animate-invert-colors {className}"
>
  <slot />
</button>
