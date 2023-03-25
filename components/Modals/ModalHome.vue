<template>
<div class="fixed top-0 w-full">
  <div
      class="flex bg-gray-600 bg-opacity-50 items-center justify-center absolute h-screen w-screen top-0 left-0"
      @click="store.showModal = false"
  >

  </div>
    <form-group class="mb-8" v-if="!store.login" />
    <login-card v-else/>
</div>
</template>

<script setup>
import { useStoreIndex } from "@/store";
import FormGroup from "~/components/ui/form-group.vue";

const store = useStoreIndex();
onUnmounted(()=>{
  store.$reset()
})
</script>

<style scoped></style>
