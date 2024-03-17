<script lang="ts">
    import { _ } from 'svelte-i18n'
    import { locale } from 'svelte-i18n'
   
    const changeLang = (e: { currentTarget: HTMLSelectElement}) => {
        locale.set(e.currentTarget.value)
    }
</script>

<div>
    <select id="lang" name="lang" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" on:change={changeLang}>
      <option value="en">{$_('lang_options.en')}</option>
      <option value="pt">{$_('lang_options.pt')}</option>
    </select>
</div>
