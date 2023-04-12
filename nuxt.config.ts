// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        '@pinia/nuxt',
        'nuxt-sanctum-auth', // https://github.com/dystcz/nuxt-sanctum-auth
        'nuxt-icons', // https://nuxt.com/modules/icons+
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n',
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
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ],
            title: 'Moaver',
        },
    },

    nuxtSanctumAuth: {
        baseUrl: process.env.API_URL,
        endpoints: {
            csrf: '/sanctum/csrf-cookie',
            login: '/login',
            logout: '/logout',
            user: '/user'
        },
        redirects: {
            home: '/',
            login: '/auth/login',
            logout: '/'
        }
    },

    i18n: {
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
    }
});
