<template>
    <skeleton-loader v-if="loading"/>
    <base-template v-else :title="page.title" :content="page.content"/>
</template>

<script setup>
import BaseTemplate from "~/components/ui/pages/base-template.vue";
import SkeletonLoader from "~/components/ui/pages/skeleton-loader.vue";

const api = useApi();
const loading = ref(true);
const page = ref({});
const { locale } = useI18n();

try {
    const { data } = await api.get('pages/1');
    page.value = data;
} finally {
    loading.value = false;
}

watch(locale, (value) => {
    loading.value = true;

    api.get('pages/1', {
        headers: { 'X-Locale': value }
    })
        .then(({ data }) => page.value = data)
        .finally(() => loading.value = false);
});
</script>
