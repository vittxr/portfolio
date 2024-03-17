<script>
  import '../app.css'
  import { browser } from '$app/environment'
  import '$lib/i18n' 
  import { locale, waitLocale } from 'svelte-i18n'
  // import { dev } from '$app/environment';

  // vercel analytics config
  // import { inject } from '@vercel/analytics';
  // inject({ mode: dev ? 'development' : 'production' });

  export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language)
    }
    await waitLocale()
  }

</script>

<slot />
