<script setup>
import Booking from "~/components/modals/booking/booking.vue";
import Categories from "~/components/forms/categories.vue";
import HeroBanner from "~/components/layout/hero-banner.vue";

const {$i18n} = useNuxtApp();

useHead({
  meta: [
    {
      name: 'keywords',
      content: $i18n.t('shippers.seo.keywords')
    }
  ]
})

useSeoMeta({
  title: $i18n.t('shippers.title'),
  ogTitle: $i18n.t('shippers.title'),
  description: $i18n.t('shippers.seo.description'),
  ogDescription: $i18n.t('shippers.seo.description'),
})
</script>

<template>
  <section class="container">
    <hero-banner
        :title="$t('shippers.title')"
        :description="$t('shippers.description')"
    >
      <template #picture>
        <img
            srcset="/images/hero/shippers-hero-400w.avif 400w, /images/hero/shippers-hero-600w.avif 600w, /images/hero/shippers-hero-800w.avif 800w, /images/hero/shippers-hero-1000w.avif 1000w, /images/hero/shippers-hero-1200w.avif 1200w, /images/hero/shippers-hero-1600w.avif 1600w, /images/hero/shippers-hero-2000w.avif 2000w"
            sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
            src="/images/hero/shippers-hero.jpg"
            class="relative z-0 object-cover min-h-full min-w-full"
            alt=""
        />
      </template>

      <categories/>
    </hero-banner>
  </section>

  <section class="py-10 lg:py-20">
    <div class="container max-w-4xl">
      <div class="flex items-end space-x-5">
        <div class="w-10 flex-none relative">
          <h3 class="absolute left-2.5 -top-3 inline-flex -rotate-90 origin-[0_0] whitespace-nowrap text-xl leading-none font-bold text-slate-300 translate-y-1/2">
            {{ $t('shippers.blockA.title') }}
          </h3>
        </div>
        <div class="text-lg">
          {{ $t('shippers.blockA.lineA') }}
        </div>
      </div>

      <div class="my-10">
        <svg viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto w-20 h-20">
          <path
              d="M63.8247 16.4597L60.3878 18.4815L38.3151 31.2859L17.9228 19.4549L38.3151 8.22294L43.0504 10.9186L39.3844 11.8921L41.1411 18.4066L55.958 14.6626L52.1392 0.0610352L45.4945 1.70839L46.411 5.07799L40.0718 1.40887H36.6349L9.36871 16.4597L9.29234 22.3004L34.8782 37.1266V53.9746V60.0398L14.4859 48.2088V42.8923L17.0827 45.3634L21.8943 40.5711L11.049 29.9381L0.203613 40.5711L5.09167 45.3634L7.61207 42.8923V50.1557L9.29234 53.0011L36.5585 68.8757L41.7521 65.9553V53.9746V37.1266L46.1055 34.5807L62.1444 25.2956V48.2088L57.4091 50.9794L58.2492 47.46L51.6045 45.8126L47.8621 60.4142L62.7554 64.0833L64.4357 57.4939L60.9988 56.6702L67.338 53.0011L69.0182 50.1557V19.38L63.8247 16.4597Z"
              fill="url(#paint0_linear_5_2208)"/>
          <defs>
            <linearGradient id="paint0_linear_5_2208" x1="65.5054" y1="0.0610398" x2="15.5629" y2="70.0013"
                            gradientUnits="userSpaceOnUse">
              <stop stop-color="#32EE9E"/>
              <stop offset="1" stop-color="#2266FB"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="flex items-end space-x-5">
        <div class="text-lg">
          {{ $t('shippers.blockB.lineA') }}
        </div>
        <div class="w-10 flex-none relative">
          <h3 class="absolute left-2.5 -top-3 inline-flex -rotate-90 origin-[0_0] whitespace-nowrap text-xl leading-none font-bold text-slate-300 translate-y-1/2">
            {{ $t('shippers.blockB.title') }}
          </h3>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20 bg-slate-50/50">
    <div class="container">
      <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
        {{ $t('shippers.blockC.title') }}
      </h2>

      <div class="prose text-slate-800 max-w-5xl mx-auto space-y-10">
        <div class="pl-5 py-5 md:pl-10 border-l-4 border-blue-600">
          {{ $t('shippers.blockC.lineA') }}
        </div>
        <div class="pr-5 py-5 md:pr-10 border-r-4 border-blue-600">
          {{ $t('shippers.blockC.lineB') }}
        </div>
        <div class="pl-5 py-5 md:pl-10 border-l-4 border-blue-600">
          {{ $t('shippers.blockC.lineC') }}
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20 bg-slate-50/20">
    <div class="container">
      <div class="prose xl:prose-lg content max-w-5xl mx-auto">
        <h2 class="text-center text-3xl lg:text-4xl font-bold mb-10 relative">
          <div class="absolute text-center inset-x-0 text-[30vh] leading-none text-slate-50 -top-20">
            5
          </div>

          <div class="relative z-10 text-blue-950">
            {{ $t('shippers.blockD.title') }}
          </div>
        </h2>

        <div class="relative z-10 leading-relaxed">
          <p class="text-lg lg:text-xl !leading-relaxed pl-5 md:pl-10 py-2.5 border-l-4 border-slate-200">
            {{ $t('shippers.blockD.lineA') }}
          </p>

          <div class="flex flex-col md:flex-row items-center gap-0 md:gap-10 mt-10 md:mt-0">
            <div class="flex-none">
              <div class="w-44 h-44 rounded-full bg-slate-100 p-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor"><g><g><g><g><path d="M50,94.52C50,94.52,50,94.52,50,94.52c-11.9,0-23.08-4.63-31.49-13.04C10.11,73.07,5.48,61.89,5.48,50      c0-11.89,4.63-23.07,13.04-31.48C26.92,10.11,38.11,5.48,50,5.48c11.89,0,23.07,4.63,31.48,13.04      C89.89,26.93,94.52,38.11,94.52,50c0,11.89-4.63,23.07-13.04,31.48C73.07,89.89,61.89,94.52,50,94.52z M50,90.52      C50,90.52,50,90.52,50,90.52c10.83,0,21-4.21,28.65-11.87C86.31,71,90.52,60.83,90.52,50c0-10.82-4.21-21-11.87-28.65      C71,13.69,60.83,9.48,50,9.48c-10.83,0-21,4.21-28.66,11.87S9.48,39.18,9.48,50c0,10.82,4.21,21,11.87,28.65      C29,86.31,39.17,90.52,50,90.52C50,90.52,50,90.52,50,90.52z"/></g></g></g><g><g><g><g><path d="M62.34,63.81c-0.26,0-0.51-0.1-0.71-0.29L49.29,51.17C49.11,50.98,49,50.73,49,50.46V23.03c0-0.55,0.45-1,1-1       s1,0.45,1,1v27.02L63.05,62.1c0.39,0.39,0.39,1.02,0,1.41C62.86,63.71,62.6,63.81,62.34,63.81z"/></g></g></g><g><g><g><path d="M17.08,51.46h-5.49c-0.55,0-1-0.45-1-1s0.45-1,1-1h5.49c0.55,0,1,0.45,1,1S17.63,51.46,17.08,51.46z"/></g></g></g><g><g><g><path d="M88.41,51.46h-5.49c-0.55,0-1-0.45-1-1s0.45-1,1-1h5.49c0.55,0,1,0.45,1,1S88.96,51.46,88.41,51.46z"/></g></g></g><g><g><g><path d="M50,89.87c-0.55,0-1-0.45-1-1v-5.49c0-0.55,0.45-1,1-1s1,0.45,1,1v5.49C51,89.42,50.55,89.87,50,89.87z"/></g></g></g><g><g><g><path d="M50,18.54c-0.55,0-1-0.45-1-1v-5.49c0-0.55,0.45-1,1-1s1,0.45,1,1v5.49C51,18.1,50.55,18.54,50,18.54z"/></g></g></g></g></g></svg>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-blue-950 italic">{{ $t('shippers.blockD.lineB') }}</h3>
              <p>{{ $t('shippers.blockD.lineC') }}</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-0 md:gap-10 mt-10 md:mt-0">
            <div class="order-2 md:order-1">
              <h3 class="font-semibold text-blue-950 italic">{{ $t('shippers.blockD.lineD') }}</h3>
              <p>{{ $t('shippers.blockD.lineE') }}</p>
            </div>
            <div class="flex-none order-1 md:order-2">
              <div class="w-44 h-44 rounded-full bg-slate-100 p-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor"><g><g><g><g><g><path d="M78.49,92.43H21.51c-2.87,0-5.21-2.34-5.21-5.21V18.34c0-2.87,2.34-5.21,5.21-5.21h14.05c1.1,0,2,0.9,2,2s-0.9,2-2,2       H21.51c-0.67,0-1.21,0.54-1.21,1.21v68.88c0,0.67,0.54,1.21,1.21,1.21h56.99c0.67,0,1.21-0.54,1.21-1.21V18.34       c0-0.67-0.54-1.21-1.21-1.21H64.45c-1.1,0-2-0.9-2-2s0.9-2,2-2h14.05c2.87,0,5.21,2.34,5.21,5.21v68.88       C83.7,90.09,81.37,92.43,78.49,92.43z"/></g></g></g></g><g><g><g><g><path d="M62.07,22.81H37.93c-2.41,0-4.37-1.96-4.37-4.37v-6.49c0-2.41,1.96-4.37,4.37-4.37h24.15c2.41,0,4.37,1.96,4.37,4.37       v6.49C66.45,20.84,64.49,22.81,62.07,22.81z M37.93,11.57c-0.21,0-0.37,0.17-0.37,0.37v6.49c0,0.21,0.17,0.37,0.37,0.37h24.15       c0.21,0,0.37-0.17,0.37-0.37v-6.49c0-0.21-0.17-0.37-0.37-0.37H37.93z"/></g></g></g></g><g><g><g><g><g><path d="M66.57,41.57H33.43c-0.55,0-1-0.45-1-1s0.45-1,1-1h33.13c0.55,0,1,0.45,1,1S67.12,41.57,66.57,41.57z"/></g></g></g></g><g><g><g><g><path d="M66.57,53.78H33.43c-0.55,0-1-0.45-1-1s0.45-1,1-1h33.13c0.55,0,1,0.45,1,1S67.12,53.78,66.57,53.78z"/></g></g></g></g><g><g><g><g><path d="M66.57,65.99H33.43c-0.55,0-1-0.45-1-1s0.45-1,1-1h33.13c0.55,0,1,0.45,1,1S67.12,65.99,66.57,65.99z"/></g></g></g></g></g></g></svg>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-0 md:gap-10 mt-10 md:mt-0">
            <div class="flex-none">
              <div class="w-44 h-44 rounded-full bg-slate-100 p-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor"><path d="M55.59,70.64H29.5c-1.1,0-2-0.9-2-2s0.9-2,2-2h24.1V27.63c0-0.95-0.78-1.73-1.73-1.73H10.86 c-0.95,0-1.73,0.78-1.73,1.73v37.76c0,0.69,0.56,1.25,1.25,1.25h4.21c1.1,0,2,0.9,2,2s-0.9,2-2,2h-4.21 c-2.89,0-5.25-2.35-5.25-5.25V27.63c0-3.16,2.57-5.73,5.73-5.73h41.01c3.16,0,5.73,2.57,5.73,5.73v41.01 C57.59,69.74,56.7,70.64,55.59,70.64z"/><path d="M77.96,52c-0.82,0-1.58-0.5-1.88-1.31c-1.62-4.41-5.48-11.95-8.96-13.42c-0.28-0.12-0.65-0.18-1.12-0.18H55.59 c-1.1,0-2-0.9-2-2s0.9-2,2-2H66c1.02,0,1.9,0.16,2.68,0.49c6.22,2.62,10.67,14.4,11.16,15.73c0.38,1.04-0.15,2.19-1.19,2.56 C78.42,51.96,78.19,52,77.96,52z"/><path d="M70.5,70.64H55.59c-1.1,0-2-0.9-2-2s0.9-2,2-2H70.5c1.1,0,2,0.9,2,2S71.61,70.64,70.5,70.64z"/><path d="M89.63,70.64h-4.21c-1.1,0-2-0.9-2-2s0.9-2,2-2h4.21c0.69,0,1.25-0.56,1.25-1.25v-7.94c0-3.01-2.45-5.46-5.46-5.46 H56.59c-1.1,0-2-0.9-2-2s0.9-2,2-2h28.82c5.21,0,9.46,4.24,9.46,9.46v7.94C94.87,68.29,92.52,70.64,89.63,70.64z"/><path d="M77.96,78.1c-5.21,0-9.46-4.24-9.46-9.46s4.24-9.46,9.46-9.46s9.46,4.24,9.46,9.46S83.17,78.1,77.96,78.1z  M77.96,63.18c-3.01,0-5.46,2.45-5.46,5.46s2.45,5.46,5.46,5.46s5.46-2.45,5.46-5.46S80.97,63.18,77.96,63.18z"/><path d="M22.04,78.1c-5.21,0-9.46-4.24-9.46-9.46s4.24-9.46,9.46-9.46s9.46,4.24,9.46,9.46S27.25,78.1,22.04,78.1z  M22.04,63.18c-3.01,0-5.46,2.45-5.46,5.46s2.45,5.46,5.46,5.46s5.46-2.45,5.46-5.46S25.05,63.18,22.04,63.18z"/><path d="M45.54,43.54H17.41c-1.53,0-2.77-1.24-2.77-2.77v-7.63c0-1.53,1.24-2.77,2.77-2.77h28.13c1.53,0,2.77,1.24,2.77,2.77v7.63C48.31,42.3,47.07,43.54,45.54,43.54z M17.41,32.38c-0.42,0-0.77,0.35-0.77,0.77v7.63c0,0.42,0.35,0.77,0.77,0.77h28.13c0.42,0,0.77-0.35,0.77-0.77v-7.63c0-0.42-0.34-0.77-0.77-0.77H17.41z"/><path d="M45.54,55.29H17.41c-1.53,0-2.77-1.24-2.77-2.77v-2.71c0-1.53,1.24-2.77,2.77-2.77h28.13c1.53,0,2.77,1.24,2.77,2.77v2.71C48.31,54.05,47.07,55.29,45.54,55.29z M17.41,49.04c-0.42,0-0.77,0.35-0.77,0.77v2.71c0,0.42,0.35,0.77,0.77,0.77h28.13c0.42,0,0.77-0.35,0.77-0.77v-2.71c0-0.42-0.34-0.77-0.77-0.77H17.41z"/><path d="M72.31,52c-0.37,0-0.72-0.2-0.89-0.55l-3.17-6.29c-0.44-0.87-0.99-1.62-1.65-2.22c-0.86-0.79-1.69-1.29-2.32-1.43c-1.54-0.32-6.75-0.15-8.63-0.06c-0.55,0-1.02-0.4-1.05-0.95s0.4-1.02,0.95-1.05c0.72-0.03,7.07-0.33,9.14,0.1c1.01,0.21,2.1,0.85,3.26,1.91c0.84,0.77,1.54,1.71,2.09,2.79l3.17,6.29c0.25,0.49,0.05,1.09-0.44,1.34C72.62,51.97,72.46,52,72.31,52z"/></svg>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-blue-950 italic">{{ $t('shippers.blockD.lineF') }}</h3>
              <p>{{ $t('shippers.blockD.lineJ') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 lg:py-20">
    <div class="container">
      <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
        {{ $t('shippers.blockE.title') }}
      </h2>

      <div class="prose lg:prose-lg content max-w-5xl mx-auto">
        <ul>
          <li v-for="(_,index) in 10">
            <h4 class="font-semibold !mb-1.5">{{ $t(`shippers.blockE.items.${index}.title`) }}</h4>
            <div v-html="$t(`shippers.blockE.items.${index}.description`)"></div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <booking/>
</template>
