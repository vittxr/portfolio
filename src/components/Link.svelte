<script lang="ts">
  type Animation = {
    hover?: 'underline-inside-out' | 'underline-right-to-left' | 'underline-left-to-right';
  };

  export let href: string;
  export let animation: Animation = {};
  export let classname: string = '';
  const animationClasses: { [key: string]: string } = {
    'underline-inside-out':
      'before:bg-white before:absolute before:h-[3px] before:w-full before:bottom-0 before:left-0 before:margin-y-[-5px] before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-300',
    'underline-left-to-right':
      'before:bg-white before:absolute before:h-[3px] before:w-0 before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300',
    'underline-right-to-left':
      'before:bg-white before:absolute before:h-[3px] before:w-0 before:bottom-0 before:right-0 hover:before:w-full before:transition-all before:duration-300',
  };
</script>

<a
  {href}
  class="font-medium relative cursor-pointer before:bg-red-500 {animationClasses[
    animation?.hover || 'underline-inside-out'
  ]} {classname}"
>
  <slot />
</a>
