# Deploy

Sources:

- https://kit.svelte.dev/docs/adapter-netlify

I host the website on Netlify. The deployment process is straightforward: when the GitHub repository updates, Netlify automatically deploys the new version of the repository.

Since I use SSR, I need to set up the Svelte-Netlify adapter. By default, Svelte uses the Svelte-Auto adapter, but we need to change it to the Netlify adapter to make it work on their server. The following are the required steps to set up this adapter:

1. Add the `"@sveltejs/adapter-netlify": "^4.1.0",` dependency in `package.json`.
2. Update the adapter in the `svelte.config.js` file:

```js
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      edge: false,
      split: false,
    }),
  },
};

export default config;
```
