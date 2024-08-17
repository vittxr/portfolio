<script lang="ts">
  import DownloadButton from '$components/buttons/DownloadButton.svelte';
  import { _ } from 'svelte-i18n';
  import Picture from './fragments/Picture.svelte';
  import Timeline from './fragments/Timeline.svelte';
  import Experience from './fragments/Experience.svelte';
  import I18nText from '$components/I18nText.svelte';
  import download from '$lib/utils/download';
  import Card from '$components/Card.svelte';
</script>

<div class="pt-10 space-y-10 mb-10">
  <Card>
    <div class="flex flex-col-reverse sm:flex-row justify-between items-center">
      <div class="flex flex-col items-center sm:items-start">
        <h1 class="text-4xl font-bold">Vitor Schirmer</h1>
        <h2 class="text-md">
          <I18nText>{$_('about_page.software_developer_at')}</I18nText>
          <b>FARMPRO</b>
        </h2>

        <DownloadButton
          className="flex items-center space-x-1 w-fit uppercase mt-1"
          onClick={() => {
            download($_('about_page.resume_path'), $_('about_page.resume'));
          }}
        >
          <span><I18nText>{$_('about_page.resume')}</I18nText></span>
        </DownloadButton>
      </div>

      <Picture />
    </div>

    <p class="my-8 text-center sm:text-left">
      <I18nText>{$_('about_page.description')}</I18nText>
    </p>
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
