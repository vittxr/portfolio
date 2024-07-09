<script lang="ts">
  import DownloadButton from '$components/buttons/DownloadButton.svelte';
  import ArrowUpRight from '$components/icons/ArrowUpRight.svelte';
  import GithubIcon from '$components/icons/GithubIcon.svelte';
  import InstagramIcon from '$components/icons/InstagramIcon.svelte';
  import LinkedinIcon from '$components/icons/LinkedinIcon.svelte';
  import Link from '$components/Link.svelte';
  import { _ } from 'svelte-i18n';

  export let className: string = '';

  // TODO: download should be a util-function, where we pass the statis file path as parameter.
  async function downloadResume(): Promise<void> {
    const res = await fetch('static/resume_pt_br.pdf');
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vitor_schirmer.pdf';
    a.click();
  }
</script>

<div class="h-full sm:flex items-center {className}">
  <!-- <div class="w-32 h-32 mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 mx-auto">
    <img
      src="imgs/pfp2.jpg"
      alt={$_('images_alt.profile')}
      class="w-full h-full rounded-full object-cover"
    />
  </div> -->

  <div class="h-full flex flex-col items-center sm:items-start justify-center">
    <h1 class="text-7xl font-bold">Vitor Schirmer</h1>
    <h2 class="mt-1 text-4xl">
      {$_('role')}
    </h2>

    <div class="mt-2 flex flex-col items-center sm:items-start text-center sm:text-left">
      <h3 class="text-2xl">
        {$_('hero_section.description')}
      </h3>

      <Link
        href="/about"
        classname="mt-2 flex items-center text-lg font-medium"
        animation={{ hover: 'underline-right-to-left' }}
      >
        {$_('hero_section.read_more_about_me')}
        <ArrowUpRight className="ml-2" />
      </Link>

      <!-- <DownloadButton className="mt-2" onClick={downloadResume}>
        <span>
          {$_('hero_section.download_cv')}
        </span>
      </DownloadButton> -->

      <!-- <div class="py-4 flex space-x-2">
        <a href="https://github.com/vschirmer" target="_blank">
          <GithubIcon className="w-6 h-6" />
        </a>

        <a href="https://www.linkedin.com/in/vschirmer/" target="_blank">
          <LinkedinIcon className="w-6 h-6" />
        </a>

        <a href="https://instagram.com/vitxr.me" target="_blank">
          <InstagramIcon className="w-6 h-6" />
        </a>
      </div> -->
    </div>
  </div>
</div>
