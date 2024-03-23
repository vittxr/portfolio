<script lang="ts">
  import ChevronUpDownIcon from '$components/icons/ChevronUpDownIcon.svelte';
  import CheckIcon from '$components/icons/CheckIcon.svelte';

  type SelectOption = {
    label: string;
    value: string;
    icon: any;
  };

  export let options: SelectOption[];
  export let selectedOption: string;
  export let onChange: (value: string) => void;
  export let className: string;

  let isHidden: boolean = true;
  async function toggleSelectDisplay() {
    isHidden = !isHidden;
  }
</script>

<div>
  <div
    class="mt-1 relative border-0 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 {className}"
  >
    <button
      type="button"
      class="relative w-full text-inherit bg-inherit border-inherit rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      on:click={toggleSelectDisplay}
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label"
    >
      {#each options as option}
        {#if option.value === selectedOption}
          <div class="flex items-center">
            <svelte:component this={option.icon} />
            <span class="font-normal ml-3 block truncate">{option.label}</span>
          </div>
        {/if}
      {/each}
      <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
      </span>
    </button>

    <ul
      class="absolute z-10 mt-1 w-full text-inherit bg-inherit border-inherit shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm {isHidden
        ? 'hidden'
        : 'block'}"
      tabindex="-1"
      role="listbox"
      aria-labelledby="listbox-label"
      aria-activedescendant="listbox-option-3"
    >
      {#each options as option}
        <li
          class="text-inherit cursor-default select-none relative hover:bg-indigo-400 hover:text-white"
          id="listbox-option-0"
          role="option"
          aria-selected={option.value === selectedOption}
        >
          <button on:click={() => onChange(option.value)} class="w-full py-2 px-1">
            <div class="flex items-center">
              <svelte:component this={option.icon} />
              <span class="font-normal ml-3 block truncate">{option.label}</span>
            </div>

            {#if option.value === selectedOption}
              <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                <CheckIcon className="h-5 w-5" />
              </span>
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>
