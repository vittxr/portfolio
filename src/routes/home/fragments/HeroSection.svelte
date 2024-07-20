<script lang="ts">
  import ArrowRightIcon from '$components/icons/ArrowRightIcon.svelte';
  import Link from '$components/Link.svelte';
  import { _ } from 'svelte-i18n';

  export let className: string = '';
</script>

<div class="w-full h-full sm:flex items-center {className}">
  <div
    class="w-full h-full space-y-2 pb-10 flex flex-col items-center sm:items-start text-center sm:text-left"
  >
    <h1 class="text-7xl font-bold cursor-scale">Vitor Schirmer</h1>
    <h2 class="text-4xl cursor-scale">
      {$_('hero_section.description')}
    </h2>

    <div class="w-full mt-2 flex flex-col items-center sm:items-start cursor-scale">
      <Link
        href="/about"
        classname="group mt-2 flex items-center text-lg font-medium"
        animation={{ hover: 'underline-left-to-right' }}
      >
        {$_('hero_section.read_more_about_me')}
        <ArrowRightIcon className="group-hover:w-5 ml-1" />
      </Link>
    </div>
  </div>
</div>
