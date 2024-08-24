<script lang="ts">
  import Switch from '$components/Switch.svelte';
  import { _, isLoading } from 'svelte-i18n';
  import SunIcon from '$components/icons/SunIcon.svelte';
  import MoonIcon from '$components/icons/MoonIcon.svelte';
  import { browser } from '$app/environment';
  let isDarkTheme = true;
  const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    document.body.classList.toggle('dark', isDarkTheme);
  };

  if (browser) {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!theme) {
      isDarkTheme = prefersDark;
    } else {
      isDarkTheme = theme === 'dark';
    }
    document.body.classList.toggle('dark', isDarkTheme);
  }
</script>

<Switch
  onSwitch={toggleTheme}
  srOnly={$isLoading ? 'loading' : $_('theme.toggle')}
  icons={{ enabled: SunIcon, disabled: MoonIcon }}
  defaultValue={isDarkTheme ? 'enabled' : 'disabled'}
/>
