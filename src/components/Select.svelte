<script lang="ts">
  import ChevronUpIcon from './icons/ChevronUpIcon.svelte';
  import ChevronDownIcon from './icons/ChevronDownIcon.svelte';
  import CheckIcon from '$components/icons/CheckIcon.svelte';
  import { onMount } from 'svelte';

  type SelectOption = {
    label?: string;
    value: string;
    icon: any;
  };

  export let id: string;
  export let options: SelectOption[];
  export let selectedOption: string;
  export let onChange: (value: string) => void;
  export let className: string = '';
  let listbox: HTMLElement | null;
  let isHidden: boolean = true;

  onMount(() => {
    listbox = document.getElementById(`${id}-listbox`);
  });

  async function setSelectDisplay(e: FocusEvent | MouseEvent, hidden: boolean) {
    if (listbox && listbox.contains(e.relatedTarget as Node)) return;
    isHidden = hidden;
  }
</script>

<div {id} on:focusout={(e) => setSelectDisplay(e, true)}>
  <div class="mt-1 px-2 relative border-0 bg-white dark:bg-gray-700 border-gray-300 {className}">
    <button
      id="{id}-button"
      type="button"
      class="flex w-full text-inherit bg-inherit border-inherit rounded-md shadow-sm py-2 text-left cursor-default sm:text-sm"
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label"
      on:click={(e) => setSelectDisplay(e, !isHidden)}
    >
      {#each options as option}
        {#if option.value === selectedOption}
          <div class="flex items-center">
            <svelte:component this={option.icon} />
            {#if option.label}
              <span class="ml-2 font-normal truncate hidden sm:inline">{option.label}</span>
            {/if}
          </div>
        {/if}
      {/each}
      <span class="ml-2 inset-y-0 right-0 flex items-center pointer-events-none">
        {#if isHidden}
          <ChevronDownIcon className="h-4 w-4" />
        {:else}
          <ChevronUpIcon className="h-4 w-4" />
        {/if}
      </span>
    </button>

    <ul
      id="{id}-listbox"
      class="absolute right-0 z-10 mt-1 w-full text-inherit bg-inherit border-inherit shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm {isHidden
        ? 'hidden'
        : 'block'}"
      tabindex="-1"
      role="listbox"
    >
      {#each options as option}
        <li
          class="text-inherit cursor-default select-none relative hover:bg-rose-400 hover:text-white"
          id="{id}-option-{option.value}"
          role="option"
          aria-selected={option.value === selectedOption}
        >
          <button
            on:click={() => onChange(option.value)}
            class="w-full flex justify-between py-2 px-1"
          >
            <div class="flex items-center">
              <svelte:component this={option.icon} />
              <span class="font-normal ml-3 truncate hidden sm:inline">{option.label || ''}</span>
            </div>

            {#if option.value === selectedOption}
              <span class=" inset-y-0 right-0 flex items-center">
                <CheckIcon className="h-5 w-5" />
              </span>
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>
