<script>
  import { _ } from 'svelte-i18n';
  import Picture from './fragments/Picture.svelte';
  import Link from '$components/Link.svelte';
  import ArrowTopRightOnSquare from '$components/icons/ArrowTopRightOnSquare.svelte';
  import Timeline from './fragments/Timeline.svelte';
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
        <span>{$_('about.resume')}</span>
        <ArrowTopRightOnSquare />
      </Link>
    </div>

    <Picture />
  </div>

  <p class="mt-5 text-center sm:text-left">
    I'm a software engineer with a passion for web development. I have experience with technologies
    like React, Vue, Svelte, and Node.js. I'm always looking for new challenges and opportunities to
    learn new things.
  </p>

  <Timeline />
</div>
