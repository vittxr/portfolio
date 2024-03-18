<script>
    import LogoIcon from '$components/icons/LogoIcon.svelte';
    import ThemeButton from '$routes/common/Header/ThemeButton.svelte';
    import LangDropdown from '$routes/common/Header/LangDropdown.svelte';
</script>

<header class="flex justify-between">
  <div>
    <a href="/">
      <LogoIcon className="text-black dark:text-white"/>
    </a>
  </div>
  <div class="flex items-center space-x-4">
    <LangDropdown />
    <ThemeButton />
  </div>
</header>
