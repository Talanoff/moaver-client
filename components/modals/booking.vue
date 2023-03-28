<template>
  <div class="fixed top-0 w-full">
    <div
        class="flex bg-gray-600 bg-opacity-50 items-center justify-center absolute h-screen w-screen top-0 left-0"
        @click="store.showModal = false"
    />
    <form-group class="mb-8" v-if="!store.login"/>
    <login-card v-else/>
  </div>
</template>

<script setup>
import { useBooking } from "~/store/booking";
import FormGroup from "~/components/ui/form-group.vue";
import LoginCard from "~/components/auth/login-card.vue";

const store = useBooking();
onUnmounted(() => {
  store.$reset()
});
</script>

<style scoped></style>
