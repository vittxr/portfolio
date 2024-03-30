<script lang="ts">
  import Select from '$components/Select.svelte';
  import BrazilFlagIcon from '$components/icons/flags/BrFlagIcon.svelte';
  import UsFlagIcon from '$components/icons/flags/UsFlagIcon.svelte';
  import { _ } from 'svelte-i18n';
  import { locale } from 'svelte-i18n';

  const changeLang = (value: string) => {
    locale.set(value);
  };
</script>

<div>
  <Select
    id="lang-dropdown"
    options={[
      {
        label: $_('lang_options.en'),
        value: 'en-US',
        icon: UsFlagIcon,
      },
      {
        label: $_('lang_options.pt'),
        value: 'pt-BR',
        icon: BrazilFlagIcon,
      },
    ]}
    selectedOption={$locale || 'pt'}
    onChange={changeLang}
  />
</div>
