<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
  import Timeline from './fragments/Timeline.svelte';
  import Experience from './fragments/Experience.svelte';
  import Card from '$components/Card.svelte';
  import Profile from './fragments/Profile/index.svelte';
  import flags from '../../../feature-flags';
</script>

<svelte:head>
  <title>vschirmer / {$isLoading ? 'loading' : $_('utils.nav.about')}</title>
</svelte:head>

<div class="pt-10 space-y-10 mb-10">
  <Card>
    <Profile />
  </Card>

  <div class="space-y-10">
    {#if flags.show_experience_component}
      <Card id="experience" className="py-8">
        <Experience />
      </Card> 
    {/if}
    {#if flags.show_timeline_component}
      <Card id="timeline" className="py-8">
        <Timeline />
      </Card>
    {/if}
  </div>
</div>
