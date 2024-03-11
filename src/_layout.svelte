<script>
    import "../app.css";
    import { isLoading } from 'svelte-i18n'
</script>


{#if $isLoading}
    Please wait...
{:else}
    <slot />
{/if}