<template>
<div class="fixed top-0">
  <div
      class="flex bg-gray-600 bg-opacity-50 items-center justify-center absolute h-screen w-screen top-0 left-0"
      @click="store.showModal = false"
  >

  </div>
  <div class=" p-8 rounded-xl ">
    <h2 class="mb-8">Omschrijf je vracht</h2>
    <form-group class="mb-8" />
    <input type="text" /><input type="text" />
  </div>
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
