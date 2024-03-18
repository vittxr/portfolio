<script lang="ts">
    import { _ } from 'svelte-i18n'
    export let onSwitch: Function;
    export let srOnly: string;
    export let icons: {enabled: any, disabled: any};
    export let defaultValue: 'enabled' | 'disabled' = 'disabled';

    let enabled = defaultValue === 'enabled';

    const classNames = {
        wrapperEnabled: 'translate-x-5',
        wrapperNotEnabled: 'translate-x-0',
        firstOptionEnabled: 'opacity-0 ease-out duration-100',
        firstOptionNotEnabled: 'opacity-100 ease-in duration-200',
        secondOptionEnabled: 'opacity-100 ease-in duration-200',
        secondOptionNotEnabled: 'opacity-0 ease-out duration-100'
    }
    
    function onClick(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
        enabled = !enabled;

        onSwitch();
    }
</script>

<button type="button" class="bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" on:click={(e) => onClick(e)}>
    <span class="sr-only">
        {srOnly}
    </span>
    <span class="{enabled ? classNames.wrapperEnabled : classNames.wrapperNotEnabled} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
        <span class="{enabled ? classNames.firstOptionEnabled : classNames.firstOptionNotEnabled} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
            <svelte:component this={icons.enabled} class="w-5 h-5"/>
        </span>

        <span class="{enabled ? classNames.secondOptionEnabled : classNames.secondOptionNotEnabled} opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true">
            <svelte:component this={icons.disabled} class="w-6 h-6"/>
        </span>
    </span>
</button>