<script lang="ts">
    import Select from '$components/Select.svelte';
    import { _ } from 'svelte-i18n'
    import { locale } from 'svelte-i18n'
   
    console.log('locale', $locale)
    const changeLang = (value: string) => {
        locale.set(value)
    }
</script>

<div>
    <!-- <select id="lang" name="lang" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" on:change={changeLang}>
      <option value="en">{$_('lang_options.en')}</option>
      <option value="pt">{$_('lang_options.pt')}</option>
    </select> -->

    <Select options={[{
        label: $_('lang_options.en'),
        value: 'en',
        icon: null
    }, {
        label: $_('lang_options.pt'),
        value: 'pt',
        icon: null
    }]} 
    selectedOption={$locale || 'pt'}
    onChange={changeLang}
    />
</div>
