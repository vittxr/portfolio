<script lang="ts">
  import LinkIcon from '$components/icons/LinkIcon.svelte';
  import Button from './Button.svelte';

  export let className: string = '';
  export let href: string;
</script>

<a href={href} target="_blank">
  <Button
    {className}
    animation={{
      hover: 'bg-transparent',
    }}
  >
    <slot />
    <LinkIcon className="w-4 h-4 ml-2" />
  </Button>
</a>
