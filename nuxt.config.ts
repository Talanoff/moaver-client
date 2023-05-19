// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss',
        ['@nuxtjs/i18n', {
            legacy: false,
            locale: 'en',
            strategy: 'no_prefix',
            defaultLocale: 'en',
            lazy: true,
            langDir: 'translations',
            locales: [
                { code: 'en', file: 'en.json' },
                { code: 'nl', file: 'nl.json' },
            ],
            vueI18n: {
                fallbackLocale: 'en',
            },
            detectBrowserLanguage: {
                useCookie: true,
                cookieKey: 'i18n_redirected',
                redirectOn: 'root',
            }
        }],
        '@pinia/nuxt',
        'nuxt-icons', // https://nuxt.com/modules/icons+
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n',
    ],

    // @ts-ignore
    css: [
        '@/assets/css/app.css',
        'vue-toast-notification/dist/theme-default.css'
    ],

    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL
        }
    },

    googleFonts: {
        display: 'swap',
        families: {
            Montserrat: [400, 500, 600, 700],
        }
    },

    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            title: 'Moaver',
        },
    }
});
