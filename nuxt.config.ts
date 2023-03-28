// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // '@sidebase/nuxt-auth', // https://sidebase.io/nuxt-auth/getting-started/quick-start
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-sanctum-auth', // https://github.com/dystcz/nuxt-sanctum-auth
    'nuxt-icons', // https://nuxt.com/modules/icons+
  ],

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      title: 'Moaver'
    }
  },

  nuxtSanctumAuth: {
    baseUrl: 'http://localhost:8000',
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
});
