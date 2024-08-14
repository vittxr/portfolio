<script lang="ts">
  import Links from './links.svelte';
</script>

<!-- Mobile navbar -->
<div
  class="w-fit mx-auto shadow-md rounded-full fixed inset-x-0 bottom-2 z-40 bg-gray-800 border-t border-gray-700 sm:hidden"
>
  <nav class="flex justify-around px-2 py-1 space-x-2">
    <Links
      activeClassName="bg-white text-black rounded-full px-3 py-1 animate-grow"
      textInactiveClassName="hidden"
    />
  </nav>
</div>

<!-- Desktop navbar -->
<nav class="hidden sm:block">
  <div class="flex space-x-6">
    <Links
      activeClassName="border-b-4 border-rose-500 before:hidden"
      animation="underline-inside-out"
    />
  </div>
</nav>
