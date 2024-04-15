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
    isMobileNavbarOpen = open;
  }
</script>

<!-- Mobile navbar -->
<nav id="mobile-navbar" class="block sm:hidden">
  <div class="inset-y-0 left-0 flex items-center sm:hidden">
    <!-- Mobile menu button-->
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
    id="mobile-navbar-container"
    class="w-full absolute z-50 bg-slate-400 flex-1 flex sm:items-stretch sm:justify-start mt-2"
  >
    <div class="{isMobileNavbarOpen ? 'block' : 'hidden'} sm:block sm:ml-6">
      <div class="flex flex-col items-start justify-start space-y-4 px-2">
        <Link href="/" animation={{ hover: 'underline-right-to-left' }}>Home</Link>
        <Link href="/about" animation={{ hover: 'underline-right-to-left' }}>About</Link>
        <Link href="/projects" animation={{ hover: 'underline-right-to-left' }}>Projects</Link>
        <Link href="/jobs" animation={{ hover: 'underline-right-to-left' }}>Jobs</Link>
      </div>
    </div>
  </div>
</nav>

<!-- Desktop navbar -->
<nav class="hidden sm:block">
  <div class="flex space-x-2">
    <Link href="/" animation={{ hover: 'underline-right-to-left' }}>Home</Link>
    <Link href="/about" animation={{ hover: 'underline-right-to-left' }}>About</Link>
    <Link href="/projects" animation={{ hover: 'underline-right-to-left' }}>Projects</Link>
    <Link href="/jobs" animation={{ hover: 'underline-right-to-left' }}>Jobs</Link>
  </div>
</nav>
