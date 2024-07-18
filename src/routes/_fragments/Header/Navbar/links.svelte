<script lang="ts">
  import { page } from '$app/stores';
  import Link from '$components/Link.svelte';

  const activeClassname = 'underline decoration-rose-500 decoration-[3px] before:hidden';
  const links = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ];
</script>

{#each links as { href, label }}
  <Link
    {href}
    animation={{ hover: 'underline-left-to-right' }}
    classname={$page.url.pathname === href ? activeClassname : ''}>{label}</Link
  >
{/each}
