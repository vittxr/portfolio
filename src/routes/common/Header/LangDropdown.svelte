<script lang="ts">
  import Select from '$components/Select.svelte';
  import { _ } from 'svelte-i18n';
  import { locale } from 'svelte-i18n';

  console.log('locale', $locale);
  const changeLang = (value: string) => {
    locale.set(value);
  };
</script>

<div>
  <Select
    options={[
      {
        label: $_('lang_options.en'),
        value: 'en',
        icon: null,
      },
      {
        label: $_('lang_options.pt'),
        value: 'pt',
        icon: null,
      },
    ]}
    selectedOption={$locale || 'pt'}
    onChange={changeLang}
  />
</div>
