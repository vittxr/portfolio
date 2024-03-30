/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'invert-colors': {
          '100%': { background: 'currentColor', color: 'black' },
        },
      },
      animation: {
        'invert-colors': 'invert-colors linear 1s forwards',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
