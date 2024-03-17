import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$stores: './src/stores',
			$utils: './src/utils',
			$routes: './src/routes',
		},
	}, 
};

export default config;
