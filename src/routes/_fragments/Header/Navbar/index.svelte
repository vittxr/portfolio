<script lang="ts">
  import Links from './links.svelte';
</script>

<!-- Mobile navbar -->
<div
  class="w-fit mx-auto shadow-md rounded-full px-4 fixed inset-x-0 bottom-2 z-40 bg-gray-800 border-t border-gray-700 sm:hidden"
>
  <nav class="flex justify-around py-2 space-x-6">
    <Links activeClassname="bg-white text-black rounded-full px-4" />
  </nav>
</div>

<!-- Desktop navbar -->
<nav class="hidden sm:block">
  <div class="flex space-x-6">
    <Links
      activeClassname="border-b-4 border-rose-500 before:hidden"
      animation="underline-inside-out"
    />
  </div>
</nav>
