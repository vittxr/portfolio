<script lang="ts">
  import { page } from '$app/stores';
  import DocumentIcon from '$components/icons/DocumentIcon.svelte';
  import HomeIcon from '$components/icons/HomeIcon.svelte';
  import Tools from '$components/icons/ToolsIcon.svelte';
  import Link from '$components/Link.svelte';
  import { _ } from 'svelte-i18n';

  export let animation:
    | 'underline-inside-out'
    | 'underline-right-to-left'
    | 'underline-left-to-right'
    | undefined = undefined;
  export let activeClassname = '';
  // const activeClassname = 'underline decoration-rose-500 decoration-[3px] before:hidden';

  const links = [
    { href: '/home', label: $_('utils.nav.home'), icon: HomeIcon },
    { href: '/about', label: $_('utils.nav.about'), icon: DocumentIcon },
    { href: '/projects', label: $_('utils.nav.projects'), icon: Tools },
  ];
</script>

{#each links as { href, label, icon }}
  <Link
    {href}
    animation={{ hover: animation }}
    classname={`inline-flex items-center  ${$page.url.pathname === href && activeClassname}`}
  >
    <svelte:component this={icon} className="w-4 h-4 mr-2" />
    {label}
  </Link>
{/each}
