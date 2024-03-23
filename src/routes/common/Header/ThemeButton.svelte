<script>
  import Switch from '$components/Switch.svelte';
  import { _ } from 'svelte-i18n';
  import SunIcon from '$components/icons/SunIcon.svelte';
  import MoonIcon from '$components/icons/MoonIcon.svelte';
  import { onMount } from 'svelte';

  let isDarkTheme = false;
  const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
  };

  onMount(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkTheme = prefersDark;
    document.body.classList.toggle('dark', isDarkTheme);
  });
</script>

<Switch
  onSwitch={toggleTheme}
  srOnly={$_('theme.toggle')}
  icons={{ enabled: SunIcon, disabled: MoonIcon }}
  defaultValue={isDarkTheme ? 'disabled' : 'enabled'}
/>
