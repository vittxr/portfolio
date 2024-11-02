<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import Base from './_fragments/Base.svelte';
  import { isLoading } from 'svelte-i18n';
  import LoadingBar from '$components/LoadingBar.svelte';
  import { onMount } from 'svelte';

  const preloadedImages = ['imgs/pfp2.jpg'];
  onMount(() => {
    for (const img of preloadedImages) {
      const image = new Image();
      image.src = img;
    }
  });
</script>

<LoadingBar isLoading={$isLoading} />
<Base>
  <slot />
</Base>
