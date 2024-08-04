<script lang="ts">
  import ArrowRightIcon from '$components/icons/ArrowRightIcon.svelte';
  import Link from '$components/Link.svelte';
  import I18nText from '$components/I18nText.svelte';
  import { _ } from 'svelte-i18n';

  export let className: string = '';
</script>

<div class="w-full h-full sm:flex items-center {className}">
  <div
    class="w-full h-full space-y-2 pb-10 flex flex-col items-center sm:items-start text-center sm:text-left"
  >
    <h1 class="text-7xl font-bold">Vitor Schirmer</h1>
    <h2 class="text-4xl">
      <I18nText>{$_('home_page.hero_section.description')}</I18nText>
    </h2>

    <div class="w-full mt-2 flex flex-col items-center sm:items-start">
      <Link
        href="/about"
        classname="group mt-2 flex items-center text-lg font-medium"
        animation={{ hover: 'underline-left-to-right' }}
      >
        <I18nText className="w-40">{$_('home_page.hero_section.read_more_about_me')}</I18nText>
        <ArrowRightIcon className="group-hover:w-5 ml-1" />
      </Link>
    </div>
  </div>
</div>
