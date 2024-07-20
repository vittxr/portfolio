<script>
  import { gsap } from 'gsap';
  import { _ } from 'svelte-i18n';
  import HeroSection from '$routes/home/fragments/HeroSection.svelte';
  import { onMount } from 'svelte';

  let cursor = null;
  let cursorScale = [];
  let mouseX = 0;
  let mouseY = 0;

  onMount(() => {
    // Bind cursor and cursorScale here
    // cursorScale = Array.from(document.querySelectorAll('.cursor-scale'));

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

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

    // cursorScale.forEach((link) => {
    //   link.addEventListener('mousemove', () => {
    //     cursor.classList.add('grow');
    //     if (link.classList.contains('small')) {
    //       cursor.classList.remove('grow');
    //       cursor.classList.add('grow-small');
    //     }
    //   });

    //   link.addEventListener('mouseleave', () => {
    //     cursor.classList.remove('grow');
    //     cursor.classList.remove('grow-small');
    //   });
    // });
  });
</script>

<svelte:head>
  <title>vschirmer / home</title>
</svelte:head>

<div bind:this={cursor} class="cursor"></div>

<HeroSection className="h-full" />
