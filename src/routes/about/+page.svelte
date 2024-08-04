<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Picture from './fragments/Picture.svelte';
  import Link from '$components/Link.svelte';
  import ArrowTopRightOnSquare from '$components/icons/ArrowTopRightOnSquare.svelte';
  import Timeline from './fragments/Timeline.svelte';
  import Experience from './fragments/Experience.svelte';
  import I18nText from '$components/I18nText.svelte';
</script>

<div class="pt-10">
  <div class="flex flex-col-reverse sm:flex-row justify-between items-center">
    <div class="flex flex-col items-center sm:items-start">
      <h1 class="text-4xl font-bold">Vitor Schirmer</h1>
      <h2 class="text-md">
        Software Developer at
        <b>FARMPRO</b>
      </h2>

      <Link href="/static/resume.pdf" classname="flex items-center space-x-1 w-fit">
        <span><I18nText>{$_('about.resume')}</I18nText></span>
        <ArrowTopRightOnSquare />
      </Link>
    </div>

    <Picture />
  </div>

  <p class="my-8 text-center sm:text-left">
    <I18nText>{$_('about_page.description')}</I18nText>
  </p>

  <div class="divide-y-2 divide-gray-400">
    <div id="experience" class="py-8">
      <Experience />
    </div>
    <div id="timeline" class="py-8">
      <Timeline />
    </div>
  </div>
</div>
