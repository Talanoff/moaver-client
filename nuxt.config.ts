// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss',
        ['@nuxtjs/i18n', {
            legacy: false,
            locale: 'en',
            strategy: 'no_prefix',
            defaultLocale: 'en',
            lazy: false,
            langDir: 'translations',
            locales: [
                {code: 'en', file: 'en.json'},
                {code: 'nl', file: 'nl.json'},
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
        'vue-toast-notification/dist/theme-default.css',
        '@splidejs/vue-splide/css'
    ],

    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL
        }
    },

    googleFonts: {
        display: 'swap',
        families: {
            Poppins: {
                wght: [400, 500, 600, 700],
                ital: [400, 500]
            },
        }
    },

    app: {
        head: {
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'msapplication-TileColor', content: '#da532c'},
                {name: 'theme-color', content: '#ffffff'},
            ],
            link: [
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
                {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
                {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
                {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
            ],
            titleTemplate: '%s | Moaver'
        },
    }
});
