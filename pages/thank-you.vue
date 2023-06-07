<template>
  <div class="my-auto text-center">
      <h1 class="text-6xl font-bold">
          {{ $t('messages.thankYou') }}
      </h1>

      <div v-if="action" class="text-xl mt-5">
          {{ $t(`messages.${action}.headline`) }}
      </div>
  </div>
</template>

<script setup>
const router = useRoute();
const { $i18n } = useNuxtApp();

const action = ref(router.query.action ?? '');
useHead({
    title: $i18n.t('messages.thankYou')
})
</script>
