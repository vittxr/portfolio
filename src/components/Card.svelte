<script lang="ts">
  export let id = '';
  export let className = '';
</script>

<div {id} class="rounded-md p-5 shadow-md bg-gray-50 dark:bg-gray-900 {className}">
  <slot />
</div>
