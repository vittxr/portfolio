<script lang="ts">
  import '../app.css';
  import '$lib/i18n';
  import Base from './_fragments/Base.svelte';
  import { gsap } from 'gsap';
  import { browser } from '$app/environment';
  import { locale, waitLocale, isLoading } from 'svelte-i18n';
  import { onMount, beforeUpdate, afterUpdate } from 'svelte';

  let cursor: HTMLDivElement | null = null;
  let cursorScale = [];
  let mouseX = 0;
  let mouseY = 0;

  export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language);
    }
    await waitLocale();
  };

  onMount(() => {
    // Initial setup if needed
  });

  beforeUpdate(() => {
    // Any setup before the DOM update
  });

  afterUpdate(() => {
    cursorScale = Array.from(document.querySelectorAll('.cursor-scale'));

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    cursor?.classList.remove('grow');
    cursor?.classList.remove('grow-small');

    cursorScale.forEach((item) => {
      console.log('cursor: ', cursor);
      item.addEventListener('mousemove', () => {
        cursor?.classList.add('grow');
        if (item.classList.contains('cursor-scale')) {
          cursor?.classList.remove('grow');
          cursor?.classList.add('grow-small');
        }
      });

      item.addEventListener('mouseleave', () => {
        cursor?.classList.remove('grow');
        cursor?.classList.remove('grow-small');
      });
    });
  });
</script>

<div bind:this={cursor} class="cursor"></div>

{#if $isLoading}
  Please wait...
{:else}
  <Base>
    <slot />
  </Base>
{/if}
