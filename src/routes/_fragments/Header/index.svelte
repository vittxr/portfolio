<script>
  import LogoIcon from '$components/icons/LogoIcon.svelte';
  import ThemeButton from '$routes/_fragments/Header/ThemeButton.svelte';
  import LangDropdown from '$routes/_fragments/Header/LangDropdown.svelte';
</script>

<header class="flex justify-between">
  <div>
    <a href="/">
      <LogoIcon />
    </a>
  </div>
  <div class="flex items-center space-x-4">
    <LangDropdown />
    <ThemeButton />
  </div>
</header>
