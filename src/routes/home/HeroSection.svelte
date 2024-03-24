<script>
  import GithubIcon from '$components/icons/GithubIcon.svelte';
  import InstagramIcon from '$components/icons/InstagramIcon.svelte';
  import LinkedinIcon from '$components/icons/LinkedinIcon.svelte';
  import { _ } from 'svelte-i18n';
</script>

<div class="sm:flex mt-10">
  <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 rounded-full">
    <img src="a" alt={$_('images_alt.profile')} />
  </div>
  <div>
    <h4 class="text-lg font-bold">Vitor Schirmer</h4>
    <p class="mt-1">
      {$_('role')}
    </p>
  </div>
</div>

<div class="mt-2">
  <p>
    {$_('hero_section.description')}
  </p>

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
