<script setup lang="ts">
import HeroBanner from "~/components/layout/hero-banner.vue";
import ArrowLink from "~/components/ui/arrow-link.vue";

const {$i18n} = useNuxtApp();

definePageMeta({
    layout: 'no-footer-about'
})

useHead({
    meta: [
        {
            name: 'keywords',
            content: $i18n.t('home.seo.keywords')
        }
    ]
})

useSeoMeta({
    title: $i18n.t('home.title'),
    ogTitle: $i18n.t('home.title'),
    description: $i18n.t('home.seo.description'),
    ogDescription: $i18n.t('home.seo.description'),
})
</script>

<style>
.advantages-item-0 {
    @apply -left-8 -top-8;
}

.advantages-item-1 {
    @apply -right-8 -bottom-8 md:-left-8 md:right-auto;
}

.advantages-item-2 {
    @apply -left-8 -bottom-8 md:-right-8 md:left-auto md:-top-8 md:bottom-auto;
}

.advantages-item-3 {
    @apply -right-8 -top-8 md:-bottom-8 md:top-auto;
}
</style>

<template>
    <section class="container">
        <hero-banner :title="$i18n.t('home.title')">
            <template #picture>
                <img
                        srcset="/images/hero/main-hero-400w.avif 400w, /images/hero/main-hero-600w.avif 600w, /images/hero/main-hero-800w.avif 800w, /images/hero/main-hero-1000w.avif 1000w, /images/hero/main-hero-1200w.avif 1200w, /images/hero/main-hero-1600w.avif 1600w, /images/hero/main-hero-2000w.avif 2000w"
                        sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                        src="/images/hero/main-hero.png"
                        class="relative z-0 object-cover min-h-full min-w-full"
                        loading="lazy"
                        alt=""
                />
            </template>
        </hero-banner>
    </section>

    <section class="py-10 lg:py-20 overflow-hidden container px-8 max-w-6xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div v-for="(_,index) in 4" :key="index" class="relative h-24">
                <figure
                        class="absolute w-28 h-28 bg-slate-100 -z-10"
                        :class="`advantages-item-${index}`"
                />
                {{ $t(`home.description.${index}`) }}
            </div>
        </div>
    </section>

    <section class="py-10 lg:py-20">
        <div class="container max-w-6xl">
            <div class="flex flex-col md:flex-row gap-10">
                <div class="md:w-1/3 md:text-right">
                    <h2 class="text-3xl lg:text-4xl text-blue-950 font-bold">
                        {{ $t('home.blockA.title') }}
                    </h2>
                </div>
                <div class="md:w-2/3 prose xl:prose-lg content">
                    <p>{{ $t('home.blockA.lineA') }}</p>
                    <p>{{ $t('home.blockA.lineB') }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-10 lg:py-20 bg-slate-50/50">
        <div class="container max-w-6xl">
            <div class="flex flex-col md:flex-row gap-10">
                <div class="md:w-2/3 prose xl:prose-lg content order-2 md:order-1">
                    <p>{{ $t('home.blockB.lineA') }}</p>
                    <p>{{ $t('home.blockB.lineB') }}</p>
                    <p class="mt-10">
                        <arrow-link to="/about-us">
                            {{ $t('home.blockB.lineC') }}
                        </arrow-link>
                    </p>
                </div>
                <div class="md:w-1/3 order-1 md:order-2">
                    <h2 class="text-3xl lg:text-4xl text-blue-950 font-bold">
                        {{ $t('home.blockB.title') }}
                    </h2>
                </div>
            </div>
        </div>
    </section>

    <section class="py-10 lg:py-20">
        <div class="container max-w-5xl prose xl:prose-lg content">
            <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold">
                {{ $t('home.blockC.title') }}
            </h2>

            <table class="w-full">
                <thead>
                <tr>
                    <th class="pl-8">{{ $t('home.blockC.table.header.a') }}</th>
                    <th class="pl-8">{{ $t('home.blockC.table.header.b') }}</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td class="w-1/2">
                        <ol>
                            <li v-for="(_, index) in 5">
                                {{ $t('home.blockC.table.body.a.' + index) }}
                            </li>
                        </ol>

                        <div class="mt-10">
                            <arrow-link to="/transporters">
                                {{ $t('home.blockC.table.transporter') }}
                            </arrow-link>
                        </div>
                    </td>
                    <td>
                        <ol>
                            <li v-for="(_, index) in 5">
                                {{ $t('home.blockC.table.body.b.' + index) }}
                            </li>
                        </ol>

                        <div class="mt-10">
                            <arrow-link to="/shippers">
                                {{ $t('home.blockC.table.shipper') }}
                            </arrow-link>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="py-10 lg:py-20 text-center bg-gradient-to-t from-slate-50/50">
        <div class="container">
            <h2 class="text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
                {{ $t('home.blockD.title') }}
            </h2>

            <div class="prose xl:prose-xl content max-w-5xl mx-auto">
                <p>{{ $t('home.blockD.lineA') }}</p>
                <p>{{ $t('home.blockD.lineB') }}</p>
            </div>

            <div class="my-10">
                <div class="w-px h-20 bg-slate-300 mx-auto"></div>
            </div>

            <div>
                <nuxt-link
                        to="/transporters"
                        class="inline-flex px-10 py-5 rounded-md font-medium text-xl bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                    {{ $t('home.blockD.button') }}
                </nuxt-link>
            </div>
        </div>
    </section>

    <section class="bg-slate-50/50">
        <svg viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="mx-auto w-28 h-28 lg:w-52 lg:h-52">
            <path d="M63.8247 16.4597L60.3878 18.4815L38.3151 31.2859L17.9228 19.4549L38.3151 8.22294L43.0504 10.9186L39.3844 11.8921L41.1411 18.4066L55.958 14.6626L52.1392 0.0610352L45.4945 1.70839L46.411 5.07799L40.0718 1.40887H36.6349L9.36871 16.4597L9.29234 22.3004L34.8782 37.1266V53.9746V60.0398L14.4859 48.2088V42.8923L17.0827 45.3634L21.8943 40.5711L11.049 29.9381L0.203613 40.5711L5.09167 45.3634L7.61207 42.8923V50.1557L9.29234 53.0011L36.5585 68.8756L41.7521 65.9553V53.9746V37.1266L46.1055 34.5807L62.1444 25.2956V48.2088L57.4091 50.9794L58.2492 47.46L51.6045 45.8126L47.8621 60.4142L62.7554 64.0833L64.4357 57.4939L60.9988 56.6702L67.338 53.0011L69.0182 50.1557V19.38L63.8247 16.4597Z"
                  fill="url(#paint0_linear_5_2208)"/>
            <defs>
                <linearGradient id="paint0_linear_5_2208" x1="65.5054" y1="0.0610398" x2="15.5629" y2="70.0013"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#32EE9E"/>
                    <stop offset="1" stop-color="#2266FB"/>
                </linearGradient>
            </defs>
        </svg>
    </section>

    <section class="py-10 lg:py-20 text-center bg-gradient-to-b from-slate-50/50">
        <div class="container">
            <h2 class="text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
                {{ $t('home.blockE.title') }}
            </h2>

            <div class="prose xl:prose-xl content max-w-5xl mx-auto">
                <p>{{ $t('home.blockE.lineA') }}</p>
                <p>{{ $t('home.blockE.lineB') }}</p>
            </div>

            <div class="my-10">
                <div class="w-px h-20 bg-slate-300 mx-auto"></div>
            </div>

            <div>
                <nuxt-link
                        to="/transporters"
                        class="inline-flex px-10 py-5 rounded-md font-medium text-xl bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                    {{ $t('home.blockE.button') }}
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
