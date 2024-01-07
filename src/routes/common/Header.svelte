<script>
    import Logo from '../../components/icons/Logo.svelte';
import Sun from './../../components/icons/Sun.svelte';
    import { onMount } from 'svelte';


    let isDarkTheme = false;

    // Function to toggle between dark and light themes
    const toggleTheme = () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark', isDarkTheme);
    };

    // Set the initial theme based on user preference
    onMount(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDarkTheme = prefersDark;
        document.body.classList.toggle('dark', isDarkTheme);
    });
</script>

<header class="flex justify-between">
  <div>
    <a>
      <Logo className="text-black dark:text-white"/>
    </a>
  </div>
  <div>
    <button on:click={toggleTheme} >
        <Sun className="text-black dark:text-white"/>
    </button>
  </div>
</header>
