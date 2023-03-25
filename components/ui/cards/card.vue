<template>
  <button
      type="button"
      class="block group text-center"
      v-for="category of store.categories"
      :key="category.icon"
      @click="setCategory(category.name)"
  >
    <div
        :class="{'borderActive': store.steps.category === category.name}"  class=" flex justify-center items-center p-5 lg:p-8 border-2 border-slate-200 rounded-md group-hover:border-blue-600 group-hover:bg-slate-50 transition-colors duration-300">
      <svg class="h-16">
        <use :xlink:href="`/icons/categories.svg#${category.icon}`"/>
      </svg>
    </div>

    <div class="mt-1.5 group-hover:text-slate-700">
      {{ category.name }}
    </div>
  </button>
</template>

<script setup lang="ts">
import {useStoreIndex} from "~/store";

const store = useStoreIndex()
const setCategory = (name)=>{
  store.showModal = true
  if(!store.transporters){
    store.steps.category = name
  }
  store.step = 1
}

</script>

<style scoped>
.borderActive{
  border-color: rgb(37 99 235);
}
</style>