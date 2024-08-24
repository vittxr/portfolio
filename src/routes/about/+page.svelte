<script lang="ts">
  import { _, isLoading } from 'svelte-i18n';
  import Timeline from './fragments/Timeline.svelte';
  import Experience from './fragments/Experience.svelte';
  import Card from '$components/Card.svelte';
  import Profile from './fragments/Profile/index.svelte';
</script>

<svelte:head>
  <title>vschirmer / {$isLoading ? 'loading' : $_('utils.nav.about')}</title>
</svelte:head>

<div class="pt-10 space-y-10 mb-10">
  <Card>
    <Profile />
  </Card>

  <div class="space-y-10">
    <Card id="experience" className="py-8">
      <Experience />
    </Card>
    <Card id="timeline" className="py-8">
      <Timeline />
    </Card>
  </div>
</div>
