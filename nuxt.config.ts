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
        // '@nuxtjs/toast'
    ],

    // @ts-ignore
    css: [
        '@/assets/css/app.css',
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

    toast: {
        position: 'top-right',
    }
});
