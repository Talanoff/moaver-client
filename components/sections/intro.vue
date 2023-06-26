<template>
    <section class="container">
        <hero-banner
            :title="$t('home.title')"
            :description="$t('home.description')"
        >
            <template #picture>
                <img
                    srcset="/images/hero/shippers-hero-400w.avif 400w, /images/hero/shippers-hero-600w.avif 600w, /images/hero/shippers-hero-800w.avif 800w, /images/hero/shippers-hero-1000w.avif 1000w, /images/hero/shippers-hero-1200w.avif 1200w, /images/hero/shippers-hero-1600w.avif 1600w, /images/hero/shippers-hero-2000w.avif 2000w"
                    sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
                    src="/images/hero/shippers-hero.png"
                    class="relative z-0 object-cover min-h-full min-w-full"
                    loading="lazy"
                    alt=""
                />
            </template>

            <categories/>
        </hero-banner>
    </section>
</template>

<script setup>
import Categories from "~/components/forms/categories.vue";
import HeroBanner from "~/components/layout/hero-banner.vue";
</script>
