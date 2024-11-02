<script lang="ts">
  import DownloadButton from '$components/buttons/DownloadButton.svelte';
  import { _ } from 'svelte-i18n';
  import Picture from './fragments/Picture.svelte';
  import I18nText from '$components/I18nText.svelte';
  import download from '$lib/utils/download';
  import EmailIcon from '$components/icons/EmailIcon.svelte';
  import Badge from '$components/Badge.svelte';
  import WppIcon from '$components/icons/WppIcon.svelte';
  import { isLoading } from 'svelte-i18n';
</script>

<div
  class="flex flex-col-reverse sm:flex-row justify-between items-center text-center sm:text-left"
>
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

<div class="mt-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
  <Badge className="flex items-center space-x-1">
    <WppIcon className="text-black dark:text-white" />
    {#if $isLoading}
      <a href="https://wa.me/5541997758225" target="_blank "> +55 (41) 9997758225 </a>
    {:else}
      <a
        href="https://wa.me/5541997758225?text={encodeURIComponent(
          $_('about_page.contact_placeholder_text'),
        )}"
        target="_blank "
      >
        +55 (41) 997758225
      </a>
    {/if}
  </Badge>
  <Badge className="flex items-center space-x-1">
    <EmailIcon />

    {#if $isLoading}
      <a href="https://wa.me/55419997758225" target="_blank "> +55 (41) 9997758225 </a>
    {:else}
      <a
        href="mailto:vitor.roberto3022@gmail.com?subject={encodeURIComponent(
          $_('about_page.contact_placeholder_text'),
        )}"
        target="_blank "
      >
        vitor.roberto3022@gmail.com
      </a>
    {/if}
  </Badge>
</div>

<p class="my-8 text-center sm:text-left">
  <I18nText>{$_('about_page.description')}</I18nText>
</p>
