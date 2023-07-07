<script setup>
import HeroBanner from "~/components/layout/hero-banner.vue";
import { useConfig } from "~/store/config";
import Transporters from "~/components/modals/transporters/transporters.vue";
import { useTransporters } from "~/store/transporters";

const { $i18n } = useNuxtApp();
const configStore = useConfig();

configStore.getCountries();
configStore.getServices();

const transporterStore = useTransporters();

$i18n.onLanguageSwitched = () => {
    configStore.getCountries();
    configStore.getServices();
}

useHead({
    meta: [
        {
            name: 'keywords',
            content: $i18n.t('transporters.seo.keywords')
        }
    ]
})

useSeoMeta({
    title: $i18n.t('transporters.title'),
    ogTitle: $i18n.t('transporters.title'),
    description: $i18n.t('transporters.seo.description'),
    ogDescription: $i18n.t('transporters.seo.description'),
})
</script>

<template>
    <section class="container">
        <hero-banner
            :title="$t('transporters.cta.title')"
            :description="$t('transporters.cta.description')"
        >
            <template #picture>
                <img
                    srcset="/images/hero/transporters-hero-400w.avif 400w, /images/hero/transporters-hero-600w.avif 600w, /images/hero/transporters-hero-800w.avif 800w, /images/hero/transporters-hero-1000w.avif 1000w, /images/hero/transporters-hero-1200w.avif 1200w, /images/hero/transporters-hero-1600w.avif 1600w, /images/hero/transporters-hero-2000w.avif 2000w"
                    sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                    src="/images/hero/transporters-hero.png"
                    class="relative z-0 object-cover min-h-full min-w-full"
                    alt=""
                />
            </template>

            <button
                type="button"
                class="block w-full group text-center"
            >
                <div
                    @click="transporterStore.toggleModal()"
                    class="flex justify-center items-center p-5 lg:p-8 border-4 border-slate-200 text-2xl font-bold rounded-md group-hover:border-blue-600 group-hover:bg-slate-100 transition-colors duration-300"
                >
                    {{ $t('transporters.cta.button') }}
                </div>
            </button>
        </hero-banner>
    </section>

    <section class="py-10 lg:py-20 bg-slate-50/50">
        <div class="container">
            <div class="prose xl:prose-lg content max-w-5xl mx-auto">
                <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
                    {{ $t('transporters.blockA.title') }}
                </h2>

                <div class="relative z-10 leading-relaxed">
                    <p class="text-lg lg:text-xl !leading-relaxed pl-5 md:pl-10 py-2.5 border-l-4 border-slate-200">
                        {{ $t('transporters.blockA.lineA') }}
                    </p>

                    <div class="flex flex-col md:flex-row items-center gap-0 md:gap-10">
                        <div class="flex-none">
                            <div class="w-44 h-44 rounded-full bg-slate-100 p-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" fill="currentColor">
                                    <g><g><g><g><g><path d="M50,58.57c-0.69,0-1.37-0.18-1.98-0.53c0,0,0,0,0,0L7.59,34.69c-1.24-0.72-1.98-2-1.98-3.44       c0-1.43,0.74-2.72,1.98-3.44L48.02,4.48c1.22-0.71,2.74-0.71,3.97,0l40.42,23.34c1.24,0.72,1.98,2,1.98,3.44       c0,1.43-0.74,2.72-1.98,3.44L51.98,58.04C51.37,58.39,50.69,58.57,50,58.57z M49.98,7.94L9.59,31.29L50,54.57l40.41-23.34       L49.98,7.94z"/></g></g></g></g><g><g><g><g><path d="M50,77.31c-0.69,0-1.37-0.18-1.98-0.53L7.59,53.44c-1.24-0.72-1.98-2-1.98-3.44s0.74-2.72,1.98-3.44l13.28-7.67       c0.96-0.55,2.18-0.22,2.73,0.73s0.23,2.18-0.73,2.73L9.59,50.03l40.42,23.29l40.39-23.35l-13.28-7.61       c-0.96-0.55-1.28-1.78-0.73-2.73c0.55-0.96,1.78-1.29,2.73-0.73l13.28,7.67c1.24,0.72,1.98,2,1.98,3.44s-0.74,2.72-1.98,3.44       L51.98,76.78C51.37,77.13,50.69,77.31,50,77.31z"/></g></g></g></g><g><g><g><g><path d="M50,96.05c-0.69,0-1.37-0.18-1.98-0.53L7.59,72.18c-1.24-0.72-1.98-2-1.98-3.44c0-1.43,0.74-2.72,1.98-3.44l13.28-7.67       c0.96-0.56,2.18-0.22,2.73,0.73c0.55,0.96,0.23,2.18-0.73,2.73L9.59,68.77l40.42,23.29l40.39-23.34l-12.79-7.33       c-0.96-0.55-1.28-1.78-0.73-2.73c0.55-0.96,1.78-1.29,2.73-0.73l12.79,7.39c1.24,0.72,1.98,2,1.98,3.44       c0,1.43-0.74,2.72-1.98,3.44L51.98,95.52C51.37,95.87,50.69,96.05,50,96.05z"/></g></g></g></g></g>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-semibold text-blue-950 italic">{{ $t('transporters.blockA.lineB') }}</h3>
                            <p>{{ $t('transporters.blockA.lineC') }}</p>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row items-center gap-0 md:gap-10 mt-10 md:mt-0">
                        <div class="order-2 md:order-1">
                            <h3 class="font-semibold text-blue-950 italic">{{ $t('transporters.blockA.lineD') }}</h3>
                            <p>{{ $t('transporters.blockA.lineE') }}</p>
                        </div>
                        <div class="flex-none order-1 md:order-2">
                            <div class="w-44 h-44 rounded-full bg-slate-100 p-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" fill="currentColor">
                                    <g><g><g><g><g><path d="M36.95,65.11c-5.21,0-9.46-4.24-9.46-9.46s4.24-9.46,9.46-9.46s9.46,4.24,9.46,9.46S42.17,65.11,36.95,65.11z        M36.95,50.2c-3.01,0-5.46,2.45-5.46,5.46s2.45,5.46,5.46,5.46c3.01,0,5.46-2.45,5.46-5.46S39.96,50.2,36.95,50.2z"/></g></g></g><g><g><g><path d="M66.78,80.02c-5.21,0-9.46-4.24-9.46-9.46s4.24-9.46,9.46-9.46s9.46,4.24,9.46,9.46S71.99,80.02,66.78,80.02z        M66.78,65.11c-3.01,0-5.46,2.45-5.46,5.46s2.45,5.46,5.46,5.46s5.46-2.45,5.46-5.46S69.78,65.11,66.78,65.11z"/></g></g></g><g><g><g><path d="M70.35,66.01c-0.39,0-0.79-0.12-1.14-0.36c-0.91-0.63-1.13-1.88-0.5-2.78l18-25.86c0.63-0.91,1.88-1.13,2.78-0.5       c0.91,0.63,1.13,1.88,0.5,2.78L72,65.15C71.61,65.71,70.99,66.01,70.35,66.01z"/></g></g></g><g><g><g><path d="M60.1,69.25c-0.3,0-0.61-0.07-0.9-0.21l-16.48-8.28c-0.99-0.5-1.39-1.7-0.89-2.68c0.5-0.99,1.7-1.39,2.68-0.89       L61,65.46c0.99,0.5,1.39,1.7,0.89,2.68C61.54,68.85,60.83,69.25,60.1,69.25z"/></g></g></g><g><g><g><path d="M8.24,93.54C7.8,93.54,7.36,93.4,7,93.1c-0.86-0.69-1-1.95-0.31-2.81l24.05-30.07c0.69-0.86,1.95-1,2.81-0.31       c0.86,0.69,1,1.95,0.31,2.81L9.81,92.79C9.41,93.28,8.83,93.54,8.24,93.54z"/></g></g></g><g><g><g><path d="M11.17,94.81c-1.58,0-3.07-0.6-4.21-1.71c-1.19-1.15-1.84-2.69-1.84-4.34V7.19c0-1.1,0.9-2,2-2s2,0.9,2,2v81.56       c0,0.56,0.22,1.08,0.62,1.47s0.93,0.59,1.49,0.58l81.57-2.54c1.13-0.03,2.03,0.83,2.06,1.94c0.03,1.1-0.83,2.03-1.94,2.06       L11.37,94.8C11.3,94.81,11.24,94.81,11.17,94.81z"/></g></g></g><g><g><g><path d="M92.87,53.93c-0.9,0-1.71-0.61-1.94-1.52l-2.92-11.69c-0.08-0.34-0.3-0.63-0.6-0.81c-0.3-0.18-0.66-0.23-1-0.15       l-11.69,2.92c-1.07,0.27-2.16-0.38-2.43-1.46c-0.27-1.07,0.38-2.16,1.46-2.43l11.69-2.92c1.38-0.34,2.81-0.13,4.03,0.6       c1.22,0.73,2.08,1.89,2.42,3.27l2.92,11.69c0.27,1.07-0.38,2.16-1.46,2.43C93.19,53.91,93.03,53.93,92.87,53.93z"/></g></g></g></g></g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-10 lg:py-20">
        <div class="container">
            <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
                {{ $t('transporters.blockB.title') }}
            </h2>

            <div class="prose text-slate-800 max-w-5xl mx-auto space-y-10">
                <p class="text-lg lg:text-xl !leading-relaxed pl-5 md:pl-10 py-2.5 border-l-4 border-slate-200">
                    {{ $t('transporters.blockB.lineA') }}
                </p>

                <div class="flex flex-wrap lg:flex-nowrap gap-10">
                    <div class="w-full lg:w-1/3 relative" v-for="(number,index) in 3">
                        <figure class="absolute left-0 top-0 text-9xl font-bold !m-0 text-slate-50">
                            {{ number }}
                        </figure>

                        <div class="relative z-10">
                            <h3 class="text-blue-950">{{ $t(`transporters.blockB.items.${index}.title`) }}</h3>
                            <p>{{ $t(`transporters.blockB.items.${index}.description`) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-10 lg:py-20 bg-slate-50/50">
        <div class="container">
            <h2 class="text-center text-blue-950 text-4xl lg:text-6xl font-bold mb-10">
                {{ $t('shippers.blockE.title') }}
            </h2>

            <div class="prose lg:prose-lg content max-w-5xl mx-auto">
                <ul>
                    <li v-for="(_,index) in 9">
                        <h4 class="font-semibold !mb-1.5">{{ $t(`shippers.blockE.items.${index}.title`) }}</h4>
                        <div v-html="$t(`shippers.blockE.items.${index}.description`)"></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <transporters v-if="transporterStore.showModal"/>
</template>
