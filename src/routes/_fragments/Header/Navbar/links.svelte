<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$components/Link.svelte';
  import { _ } from 'svelte-i18n';

  const activeClassname = 'underline decoration-rose-500 decoration-[3px] before:hidden';

  const links = [
    { href: '/home', label: $_('utils.nav.home') },
    { href: '/about', label: $_('utils.nav.about') },
    { href: '/projects', label: $_('utils.nav.projects') },
  ];
</script>

{#each links as { href, label }}
  <Link
    {href}
    animation={{ hover: 'underline-left-to-right' }}
    classname={$page.url.pathname === href ? activeClassname : ''}>{label}</Link
  >
{/each}
