<template>
    <div class="flex divide-x-2 -mx-1.5">
        <button
                type="button"
                v-for="lang of locales"
                :value="lang"
                :key="lang"
                @click.prevent="setLocale(lang)"
                class="px-1.5"
                :class="{'font-bold': lang === locale}"
        >
            {{ lang }}
        </button>
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const locales = ref(['nl', 'en']);
</script>
