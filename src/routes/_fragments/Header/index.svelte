<script>
  import Navbar from './Navbar/index.svelte';
  import ThemeButton from '$routes/_fragments/Header/ThemeButton.svelte';
  import LangDropdown from '$routes/_fragments/Header/LangDropdown.svelte';
</script>

<header class="flex justify-between">
  <div class="flex items-center">
    <Navbar />
  </div>
  <div class="w-full flex justify-between sm:justify-end items-center space-x-4">
    <LangDropdown />
    <ThemeButton />
  </div>
</header>
