import { defineI18nConfig } from "#i18n";
// @ts-ignore
import en from './translations/en.json';
// @ts-ignore
import nl from './translations/nl.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    lazy: true,
    // langDir: 'translations',
    // locales: [
    //     { code: 'en', file: 'en.json' },
    //     { code: 'nl', file: 'nl.json' },
    // ],
    vueI18n: {
        fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
    },
    messages: {
        en, nl
    }
}))
