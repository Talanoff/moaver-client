<template>
    <div>
        <form-select
            class="w-20"
            v-model="locale"
            :options="locales"
        />
    </div>
</template>

<script setup>
import FormSelect from "~/components/ui/form-select.vue";

const { locale } = useI18n();

const locales = ref([
    {key: 'en', value: 'en'},
    {key: 'nl', value: 'nl'},
]);
</script>
