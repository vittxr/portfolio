<script lang="ts">
  import { _ } from 'svelte-i18n';
  import I18nText from '$components/I18nText.svelte';
  import ToolsIcon from '$components/icons/ToolsIcon.svelte';
</script>

<div class="flex items-center gap-3 mb-6">
  <ToolsIcon className="w-8 h-8" />
  <h1 class="text-3xl font-bold">
    <I18nText>{$_('tools_page.title')}</I18nText>
  </h1>
</div>

<p class="text-neutral-600 dark:text-neutral-400 mb-8">
  <I18nText>{$_('tools_page.description')}</I18nText>
</p>
