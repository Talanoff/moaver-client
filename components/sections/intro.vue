<template>
    <section class="container">
        <div class="relative">
            <figure
                    class="sm:h-screen h-[120vw] max-h-[65vh] -mb-24 rounded-lg overflow-hidden bg-center bg-cover"
                    style="background-image: url('/images/topBg.png')"
            />

            <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h1 class="px-5 md:px-10 text-center text-white font-bold text-3xl sm:text-[5rem] leading-normal mb-4">
                    {{ $t('home_hero_banner.title') }}
                </h1>
                <p class="sm:text-left text-center text-white sm:text-2xl text-xl">
                    {{ $t('home_hero_banner.description') }}
                </p>
            </div>
        </div>

        <div class="max-w-[90%] xl:max-w-[64rem] bg-white shadow-2xl p-5 lg:p-8 rounded-md mx-auto relative z-1">
            <card-wrapper/>
        </div>
    </section>
</template>

<script setup>
import CardWrapper from "~/components/ui/cards/card-wrapper.vue";
</script>
