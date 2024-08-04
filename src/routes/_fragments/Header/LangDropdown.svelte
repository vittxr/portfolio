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

<Select
  id="lang-dropdown"
  options={[
    {
      value: 'en-US',
      icon: UsFlagIcon,
    },
    {
      value: 'pt-BR',
      icon: BrazilFlagIcon,
    },
  ]}
  selectedOption={$locale || 'pt-BR'}
  onChange={changeLang}
/>
