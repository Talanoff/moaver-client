<script setup>
import HeroBanner from "~/components/layout/hero-banner.vue";

const { $i18n } = useNuxtApp();
import { useConfig } from "~/store/config";
import Transporters from "~/components/modals/transporters/transporters.vue";
import { useTransporters } from "~/store/transporters";

const configStore = useConfig();

configStore.getCountries();
configStore.getServices();

const transporterStore = useTransporters();

$i18n.onLanguageSwitched = () => {
    configStore.getCountries();
    configStore.getServices();
}

useHead({
    title: $i18n.t('partnersBanner.description')
})
</script>

<template>
    <section class="container mb-12">
        <hero-banner
            :title="$t('partnersBanner.title')"
            :description="$t('partnersBanner.description')"
        >
            <template #picture>
                <img
                    srcset="/images/hero/transporters-hero-400w.avif 400w, /images/hero/transporters-hero-600w.avif 600w, /images/hero/transporters-hero-800w.avif 800w, /images/hero/transporters-hero-1000w.avif 1000w, /images/hero/transporters-hero-1200w.avif 1200w, /images/hero/transporters-hero-1600w.avif 1600w, /images/hero/transporters-hero-2000w.avif 2000w"
                    sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                    src="/images/hero/transporters-hero.png"
                    class="relative z-0 object-cover min-h-full min-w-full"
                    loading="lazy"
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
                    {{ $t('partnersBanner.button') }}
                </div>
            </button>
        </hero-banner>
    </section>

    <transporters v-if="transporterStore.showModal"/>
</template>
