<script>
    import Sun from '$components/icons/Sun.svelte';
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


<button on:click={toggleTheme} >
    <Sun className="text-black dark:text-white"/>
</button>

