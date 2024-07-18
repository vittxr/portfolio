<script lang="ts">
  import ArrowUpRight from '$components/icons/ArrowUpRight.svelte';
  import GithubIcon from '$components/icons/GithubIcon.svelte';
  import LinkedinIcon from '$components/icons/LinkedinIcon.svelte';
  import Link from '$components/Link.svelte';
  import { _ } from 'svelte-i18n';

  export let className: string = '';
</script>

<div class="h-full sm:flex items-center {className} ">
  <div
    class="w-full h-full space-y-2 pb-10 flex flex-col items-center sm:items-start justify-center"
  >
    <h1 class="text-7xl font-bold text-center sm:text-left">Vitor Schirmer</h1>
    <h2 class="text-4xl">
      {$_('hero_section.description')}
    </h2>

    <div class="w-full mt-2 flex flex-col items-center sm:items-start text-center sm:text-left">
      <div class="w-full flex justify-between items-center">
        <Link
          href="/about"
          classname="mt-2 flex items-center text-lg font-medium"
          animation={{ hover: 'underline-left-to-right' }}
        >
          {$_('hero_section.read_more_about_me')}
          <ArrowUpRight className="ml-1" />
        </Link>
      </div>
    </div>
  </div>
</div>
