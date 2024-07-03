<script lang="ts">
  import Link from '$components/Link.svelte';
  import ThreeBarsIcon from '$components/icons/ThreeBarsIcon.svelte';
  import XIcon from '$components/icons/XIcon.svelte';
  import { onMount } from 'svelte';
  let mobileNavbarContainer: HTMLElement | null;

  onMount(() => {
    mobileNavbarContainer = document.getElementById('mobile-navbar-container');
  });

  let isMobileNavbarOpen = false;
  async function setIsMobileNavbarOpen(open: boolean) {
    console.log('open', open);
    isMobileNavbarOpen = open;
  }
</script>

<!-- Mobile navbar -->
<div class="inset-y-0 left-0 flex items-center sm:hidden">
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-controls="mobile-menu"
    aria-expanded="false"
    on:click={(e) => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
  >
    <span class="sr-only">Open main menu</span>

    <svelte:component this={isMobileNavbarOpen ? XIcon : ThreeBarsIcon} />
  </button>
</div>

<div
  class="fixed inset-0 flex z-40 md:hidden {isMobileNavbarOpen ? 'block' : 'hidden'}"
  role="dialog"
  aria-modal="true"
>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
  <div class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
    <div class="absolute top-0 right-0 -mr-12 pt-2">
      <button
        type="button"
        class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        on:click={(e) => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
      >
        <span class="sr-only">Close sidebar</span>
        <XIcon />
      </button>
    </div>

    <div class="mt-5 flex-1 h-0 overflow-y-auto ml-4">
      <nav class="px-2 space-y-4 flex flex-col">
        <Link href="/" animation={{ hover: 'underline-right-to-left' }}>Home</Link>
        <Link href="/about" animation={{ hover: 'underline-right-to-left' }}>About</Link>
        <Link href="/projects" animation={{ hover: 'underline-right-to-left' }}>Projects</Link>
        <Link href="/jobs" animation={{ hover: 'underline-right-to-left' }}>Jobs</Link>
      </nav>
    </div>
  </div>

  <div class="flex-shrink-0 w-14" aria-hidden="true">
    <!-- Dummy element to force sidebar to shrink to fit close icon -->
  </div>
</div>

<!-- Desktop navbar -->
<nav class="hidden sm:block">
  <div class="flex space-x-6">
    <Link href="/" animation={{ hover: 'underline-right-to-left' }}>Home</Link>
    <Link href="/about" animation={{ hover: 'underline-right-to-left' }}>About</Link>
    <Link href="/projects" animation={{ hover: 'underline-right-to-left' }}>Projects</Link>
  </div>
</nav>
