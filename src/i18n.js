// import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// register('pt', () => import('../static/i18n/pt.json'));
// register('en', () => import('../static/i18n/en.json'));

// init({
//   fallbackLocale: 'en',
//   initialLocale: getLocaleFromNavigator(),
// });

import { addMessages } from 'svelte-i18n';

import en from '../static/i18n/en.json';
import pt from '../static/i18n/pt.json';

addMessages('en', en);
addMessages('pt', pt);
