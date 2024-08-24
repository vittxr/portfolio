<script lang="ts">
  import { page } from '$app/stores';
  import I18nText from '$components/I18nText.svelte';
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
  export let activeClassName = '';
  export let inactiveClassName = '';
  export let textActiveClassName = '';
  export let textInactiveClassName = '';
  export let iconActiveClassName = '';
  export let iconInactiveClassName = '';

  const links = [
    { href: '/home', label: 'utils.nav.home', icon: HomeIcon },
    { href: '/about', label: 'utils.nav.about', icon: DocumentIcon },
    { href: '/projects', label: 'utils.nav.projects', icon: Tools },
  ];
</script>

{#each links as { href, label, icon }}
  <Link
    {href}
    animation={{ hover: animation }}
    classname={`inline-flex items-center ${$page.url.pathname === href ? `${activeClassName}` : inactiveClassName}`}
  >
    <svelte:component
      this={icon}
      className={`w-4 h-4 mr-2 ${$page.url.pathname === href ? `${iconActiveClassName}` : `${iconInactiveClassName}`}`}
    />

    <I18nText>
      <span class={`${$page.url.pathname === href ? textActiveClassName : textInactiveClassName}`}
        >{$_(label)}
      </span>
    </I18nText>
  </Link>
{/each}
