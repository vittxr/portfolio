<script>
  import Navbar from './Navbar.svelte';
  import LogoIcon from '$components/icons/LogoIcon.svelte';
  import ThemeButton from '$routes/_fragments/Header/ThemeButton.svelte';
  import LangDropdown from '$routes/_fragments/Header/LangDropdown.svelte';
</script>

<header class="flex justify-between">
  <div class="flex items-center">
    <a href="/">
      <LogoIcon />
    </a>
    <Navbar />
  </div>
  <div class="flex items-center space-x-4">
    <LangDropdown />
    <ThemeButton />
  </div>
</header>
