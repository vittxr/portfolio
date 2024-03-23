<script lang="ts">
  type SelectOption = {
    label: string;
    value: string;
    icon: any;
  };

  export let options: SelectOption[];
  export let selectedOption: string;
  export let onChange: (value: string) => void;

  const classNames = {};
  let isHidden: boolean = true;

  async function toggleSelectDisplay() {
    isHidden = !isHidden;
  }
</script>

<div>
  <div
    class="mt-1 relative border-0 text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300"
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
        <!-- Heroicon name: solid/selector -->
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
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
          class="text-inherit cursor-default select-none relative py-2 pl-3 pr-9"
          id="listbox-option-0"
          role="option"
        >
          <button on:click={() => onChange(option.value)}>
            <div class="flex items-center">
              <svelte:component this={option.icon} />
              <span class="font-normal ml-3 block truncate">{option.label}</span>
            </div>

            <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </li>
      {/each}
    </ul>
  </div>
</div>
