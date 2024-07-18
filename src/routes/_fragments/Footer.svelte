<script lang="ts">
  import GithubIcon from '$components/icons/GithubIcon.svelte';
  import LinkedinIcon from '$components/icons/LinkedinIcon.svelte';
  import { _ } from 'svelte-i18n';
</script>

<footer class="flex justify-between">
  <span class="text-gray-300 text-sm">© 2024 - Vitor Schirmer</span>

  <div class="flex space-x-2">
    <a href="https://github.com/vittxr" target="_blank">
      <GithubIcon className="w-5 h-5" />
    </a>

    <a href="https://www.linkedin.com/in/vschirmer/" target="_blank">
      <LinkedinIcon className="w-5 h-5" />
    </a>
  </div>
</footer>
