<script lang="ts">
  export let className = '';
</script>

<span
  class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 {className}"
>
  <slot />
</span>
