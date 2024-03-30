<script lang="ts">
  import DownloadIcon from '$components/icons/DownloadIcon.svelte';
  import Button from './Button.svelte';

  export let className: string = '';
</script>

<Button
  animation={{
    hover: 'invert-colors',
  }}
>
  <slot />
  <DownloadIcon className="w-5 h-5 ml-2" />
</Button>
