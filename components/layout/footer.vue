<template>
    <section class="lg:mt-44 lg:mb-28 mt-28 mb-16">
        <div class="container">
            <div class="flex sm:flex-row flex-col justify-between">
                <h3 class="sm:w-[45%] text-blue-950 lg:text-6xl md:text-3xl text-2xl font-bold sm:leading-relaxed sm:mb-0 mb-4">
                    {{ $t('footer.intro.title') }}
                </h3>
                <div class="sm:w-[45%] w-full flex flex-col justify-between">
                    <p class="text-gray-500 lg:text-xl md:text-base text-sm !leading-relaxed sm:mb-0">
                        {{ $t('footer.intro.description') }}
                    </p>
                    <div class="mt-5">
                        <nuxt-link to="/" class="text-blue-500 lg:text-2xl font-bold">
                            {{ $t('footer.intro.link') }} ›
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="px-2.5 lg:px-5">
        <div class="container">
            <div class="mb-4 text-center text-gray-500 space-x-5">
                <nuxt-link to="/terms-and-conditions" class="hover:text-blue-600 transition duration-300">
                    {{ $t('navigation.footer.terms') }}
                </nuxt-link>
                <span class="text-gray-300">/</span>
                <nuxt-link to="/privacy-policy" class="hover:text-blue-600 transition duration-300">
                    {{ $t('navigation.footer.policy') }}
                </nuxt-link>
            </div>
        </div>
        <img src="/images/footer-bg.png" class="block mx-auto max-h-[144px]" alt="">
    </footer>
</template>
<script setup lang="ts">
</script>
