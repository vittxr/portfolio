<script>
  import { page } from '$app/stores';
  import Link from '$components/Link.svelte';
  const activeClassname = 'underline decoration-rose-500 decoration-[3px]';

  console.log('page', $page.url.pathname);
</script>

<Link
  href="/home"
  animation={{ hover: 'underline-left-to-right' }}
  classname={$page.url.pathname === '/home' ? 'underline decoration-rose-500 decoration-[3px]' : ''}
  >Home</Link
>
<Link href="/about" animation={{ hover: 'underline-left-to-right' }}>About</Link>
<Link href="/projects" animation={{ hover: 'underline-left-to-right' }}>Projects</Link>
