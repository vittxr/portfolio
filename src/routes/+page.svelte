<script>
    import Header from './common/Header.svelte';
    import { _ } from 'svelte-i18n'
</script>

<svelte:head>
  <title>VS - Vitor Schirmer</title>
</svelte:head>

<div class="w-screen h-screen dark:bg-black">
    <div class="w-5/6 mx-auto py-10">
        <Header />
        <main class="flex flex-col justify-center items-center">
            <h1 class="text-black dark:text-white text-7xl font-bold">
                Vitor Schirmer
            </h1>
            <h2 class="text-black dark:text-white text-3xl font-bold">
                {$_('role')}
            </h2>
        </main>
    </div>
</div>