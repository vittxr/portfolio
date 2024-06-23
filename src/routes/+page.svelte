<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  // Redirect to /home when the component is mounted
  onMount(() => {
    goto('/home');
  });
</script>
