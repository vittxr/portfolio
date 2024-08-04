<script lang="ts">
  type Animation = {
    hover?: 'underline-inside-out' | 'underline-right-to-left' | 'underline-left-to-right';
  };

  export let href: string;
  export let animation: Animation = {};
  export let classname: string = '';

  const commonAnimationClasses =
    'before:bg-black dark:before:bg-white before:absolute before:h-[3px] before:bottom-0 before:left-0 before:transition-all before:duration-300';
  const animationClasses: { [key: string]: string } = {
    'underline-inside-out': `${commonAnimationClasses} before:w-full before:bottom-0 before:left-0 before:margin-y-[-5px] before:scale-x-0 hover:before:scale-x-100`,
    'underline-left-to-right': `${commonAnimationClasses} before:w-0 before:bottom-0 before:left-0 hover:before:w-full`,
    'underline-right-to-left': `${commonAnimationClasses} before:w-0 before:bottom-0 before:right-0 hover:before:w-full`,
  };
</script>

<a
  {href}
  class="font-medium relative cursor-pointer before:bg-red-500 {animationClasses[
    animation?.hover ?? ''
  ]} {classname}"
>
  <slot />
</a>
