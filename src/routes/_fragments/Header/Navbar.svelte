<script lang="ts">
  import Link from '$components/Link.svelte';

  let isMobileNavbarOpen = false;
  async function setIsMobileNavbarOpen(open: boolean) {
    isMobileNavbarOpen = open;
  }
</script>

<!-- Mobile navbar -->
<nav class="block sm:hidden">
  <div class=" inset-y-0 left-0 flex items-center sm:hidden">
    <!-- Mobile menu button-->
    <button
      type="button"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
      on:click={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
    >
      <span class="sr-only">Open main menu</span>
      <!--
        Icon when menu is closed.

        Heroicon name: outline/menu

        Menu open: "hidden", Menu closed: "block"
      -->
      <svg
        class="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <!--
        Icon when menu is open.

        Heroicon name: outline/x

        Menu open: "block", Menu closed: "hidden"
      --> 
      <svg
        class="hidden h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
  <div class="w-full absolute bg-slate-400 flex-1 flex sm:items-stretch sm:justify-start mt-2">
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
