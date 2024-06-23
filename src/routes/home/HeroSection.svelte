<script lang="ts">
  import DownloadButton from '$components/buttons/DownloadButton.svelte';
  import GithubIcon from '$components/icons/GithubIcon.svelte';
  import InstagramIcon from '$components/icons/InstagramIcon.svelte';
  import LinkedinIcon from '$components/icons/LinkedinIcon.svelte';
  import { _ } from 'svelte-i18n';

  export let className: string = '';

  async function downloadResume(): Promise<void> {
    const res = await fetch('static/resume.pdf');
    console.log('res  ', res);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vitor_schirmer.pdf';
    a.click();
  }
</script>

<div class="sm:flex items {className}">
  <div class="w-32 h-32 mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 mx-auto">
    <img src="imgs/pfp.jpg" alt={$_('images_alt.profile')} class="w-full h-full rounded-full" />
  </div>

  <div class="flex flex-col items-center sm:items-start">
    <h4 class="text-lg font-bold">Vitor Schirmer</h4>
    <p class="mt-1">
      {$_('role')}
    </p>

    <div class="mt-2 flex flex-col items-center sm:items-start text-center sm:text-left">
      <p>
        {$_('hero_section.description')}
      </p>

      <DownloadButton className="mt-2" onClick={downloadResume}>
        <span>
          {$_('hero_section.download_cv')}
        </span>
      </DownloadButton>

      <div class="py-4 flex space-x-2">
        <a href="https://github.com/vittxr" target="_blank">
          <GithubIcon className="w-6 h-6" />
        </a>

        <a href="https://www.linkedin.com/in/vitor-roberto-8b68a9223/" target="_blank">
          <LinkedinIcon className="w-6 h-6" />
        </a>

        <a href="https://instagram.com/vitxr.me" target="_blank">
          <InstagramIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</div>
