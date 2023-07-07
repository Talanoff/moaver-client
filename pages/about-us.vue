<script setup lang="ts">
import HeroBanner from "~/components/layout/hero-banner.vue";
import {Splide, SplideSlide} from "@splidejs/vue-splide";

const {$i18n} = useNuxtApp();

definePageMeta({
    layout: 'no-footer-about'
})

useHead({
    meta: [
        {
            name: 'keywords',
            content: $i18n.t('aboutUs.seo.keywords')
        }
    ]
})

useSeoMeta({
    title: $i18n.t('aboutUs.title'),
    ogTitle: $i18n.t('aboutUs.title'),
    description: $i18n.t('aboutUs.seo.description'),
    ogDescription: $i18n.t('aboutUs.seo.description'),
})
</script>

<template>
    <section class="container">
        <hero-banner
                :title="$t('aboutUs.title')"
        >
            <template #picture>
                <img
                        srcset="/images/hero/about-hero-400w.avif 400w, /images/hero/about-hero-600w.avif 600w, /images/hero/about-hero-800w.avif 800w, /images/hero/about-hero-1000w.avif 1000w, /images/hero/about-hero-1200w.avif 1200w, /images/hero/about-hero-1600w.avif 1600w, /images/hero/about-hero-2000w.avif 2000w"
                        sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                        src="/images/hero/about-hero.jpg"
                        class="relative z-0 object-cover min-h-full min-w-full"
                        alt=""
                />
            </template>
        </hero-banner>
    </section>

    <section class="relative z-10 rounded-lg py-10 lg:py-20 container max-w-5xl bg-white -mt-20">
        <div class="text-center mb-10">
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
        </div>

        <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
            {{ $t('aboutUs.blockA.title') }}
        </h2>

        <div class="max-w-2xl mx-auto">
            <splide class="about-us__carousel" :options="{type: 'loop', autoplay: true, rewind: true, arrows: false}">
                <splide-slide v-for="(_,index) in 5">
                    <div class="px-5 lg:px-10">
                        <h3 class="text-3xl lg:text-5xl font-bold italic mb-2.5 text-blue-500">{{ $t(`aboutUs.blockA.items.${index}.title`) }}</h3>
                        <p class="text-xl leading-relaxed max-w-xl text-slate-600 pl-5 lg:pl-10">{{ $t(`aboutUs.blockA.items.${index}.description`) }}</p>
                    </div>
                </splide-slide>
            </splide>
        </div>
    </section>

    <section class="py-10 lg:py-20 bg-slate-50/50">
        <div class="container max-w-5xl">
            <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
                {{ $t('aboutUs.blockB.title') }}
            </h2>

            <div class="prose text-slate-800 max-w-5xl mx-auto space-y-10">
                <div class="pl-5 py-5 md:pl-10 border-l-4 border-blue-600">
                    {{ $t('aboutUs.blockB.lineA') }}
                </div>
                <div class="pr-5 py-5 md:pr-10 border-r-4 border-blue-600">
                    {{ $t('aboutUs.blockB.lineB') }}
                </div>
                <div class="pl-5 py-5 md:pl-10 border-l-4 border-blue-600">
                    {{ $t('aboutUs.blockB.lineC') }}
                </div>
            </div>
        </div>
    </section>

    <section class="py-10 lg:py-20">
        <div class="container max-w-5xl text-center">
            <h2 class="text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
                {{ $t('aboutUs.blockE.title') }}
            </h2>

            <p class="text-lg lg:text-xl !leading-relaxed py-2.5 text-slate-700">
                {{ $t('aboutUs.blockE.description') }}
            </p>
        </div>
    </section>

    <section class="py-10 lg:py-20 bg-gradient-to-t from-slate-50/50">
        <div class="container prose xl:prose-xl content">
            <h2 class="text-center text-blue-950 text-3xl lg:text-5xl font-bold mb-10">
                {{ $t('aboutUs.blockC.title') }}
            </h2>

            <div class=" mx-auto">
                <ol>
                    <li v-for="(_,index) in 7">
                        {{ $t(`aboutUs.blockC.items.${index}`) }}
                    </li>
                </ol>
            </div>
        </div>

        <div class="container text-center">
            <div class="my-10">
                <div class="w-px h-10 bg-slate-300 mx-auto"></div>
            </div>

            <div>
                <nuxt-link
                        to="/transporters"
                        class="inline-flex px-10 py-5 rounded-md font-medium text-xl bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                    {{ $t('aboutUs.blockC.button') }}
                </nuxt-link>
            </div>
        </div>
    </section>

    <section class="bg-slate-50/50">
        <div class="w-px h-40 bg-slate-300 mx-auto"></div>
    </section>

    <section class="py-10 lg:py-20 text-center bg-gradient-to-b from-slate-50/50">
        <div class="container prose xl:prose-xl content">
            <h2 class="text-center text-blue-950 text-3xl lg:text-5xl font-bold mb-10">
                {{ $t('aboutUs.blockD.title') }}
            </h2>

            <div class=" mx-auto">
                <ol>
                    <li v-for="(_,index) in 5">
                        {{ $t(`aboutUs.blockD.items.${index}`) }}
                    </li>
                </ol>
            </div>
        </div>

        <div class="container text-center">
            <div class="my-10">
                <div class="w-px h-10 bg-slate-300 mx-auto"></div>
            </div>

            <div>
                <nuxt-link
                        to="/shippers"
                        class="inline-flex px-10 py-5 rounded-md font-medium text-xl bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
                >
                    {{ $t('aboutUs.blockD.button') }}
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.about-us__carousel.splide {
    .splide__pagination {
        bottom: unset;
        @apply top-full mt-5;

        .splide__pagination__page{
            border-radius: 8px;
        }

        .splide__pagination__page.is-active {
            width: 16px;
            transform: scale(1);
            @apply bg-blue-500 opacity-100 transition duration-300;
        }
    }
}
</style>
