<script>
  import Link from '$components/Link.svelte';
</script>

<nav>
  <ul class="flex space-x-2">
    <li>
      <Link href="/" animation={{ hover: 'underline-right-to-left' }}>Home</Link>
    </li>
    <li>
      <Link href="/about" animation={{ hover: 'underline-right-to-left' }}>About</Link>
    </li>
    <li>
      <Link href="/projects" animation={{ hover: 'underline-right-to-left' }}>Projects</Link>
    </li>
    <li>
      <Link href="/jobs" animation={{ hover: 'underline-right-to-left' }}>Jobs</Link>
    </li>
  </ul>
</nav>
