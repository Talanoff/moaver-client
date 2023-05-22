<template>
    <section class="container mb-12">
        <div class="relative">
            <figure
                    class="sm:h-screen h-[120vw] max-h-[65vh] -mb-24 rounded-lg overflow-hidden bg-center bg-cover"
                    style="background-image: url('/images/topBg.png')"
            />

            <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h1 class="px-5 md:px-10 text-center text-white font-bold text-3xl sm:text-[5rem] leading-normal mb-4">
                    {{ $t('partners_hero_banner.title') }}</h1>
                <p class="sm:text-left text-center text-white sm:text-2xl text-xl">
                    {{ $t('partners_hero_banner.description') }}</p>
            </div>
        </div>

        <div class="max-w-[90%] xl:max-w-[64rem] bg-white shadow-2xl p-5 lg:p-8 rounded-md mx-auto relative z-1">
            <button
                    type="button"
                    class="block w-full group text-center"
            >
                <div
                        @click="transporterStore.toggleModal()"
                        class="flex justify-center items-center p-5 lg:p-8 border-4 border-slate-200 text-2xl font-bold rounded-md group-hover:border-blue-600 group-hover:bg-slate-100 transition-colors duration-300"
                >
                    {{ $t('partners_hero_banner.button') }}
                </div>
            </button>
        </div>
    </section>

    <transporters v-if="transporterStore.showModal"/>
</template>

<script setup>
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
</script>
