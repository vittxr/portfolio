<script>
  import { _, isLoading } from 'svelte-i18n';
</script>

<div class="w-32 h-32 mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 mx-auto">
  <img
    src="imgs/pfp2.jpg"
    alt={$isLoading ? 'loading' : $_('about_page.images_alt.profile')}
    class="w-full h-full rounded-full object-cover"
  />
</div>
