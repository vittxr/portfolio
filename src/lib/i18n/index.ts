// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'pt';

register('en', () => import('./locales/en.json'));
register('pt', () => import('./locales/pt.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? localStorage.getItem('locale') || window.navigator.language : defaultLocale,
});
