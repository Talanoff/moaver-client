<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20" @submit.prevent="submit">
    <h2 class="text-3xl font-bold mb-8">{{ store.steps.category }}</h2>
    <div class="flex justify-between mb-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 text-sm font-semibold">
        <form-radio @click="setCategory(card.name)" :card="card" v-for="(card,idx)  in store.categories" :key="idx"/>
      </div>
    </div>
    <div class="flex gap-2 mb-4">
      <form-input :type-input="'number'" :placeholder="'stuks'" @emit="inputt"/>
      <form-input :type-input="'number'" :placeholder="'kg'"/>
    </div>
    <form-textarea/>
    <button
        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-4 py-3 bg-blue-900 rounded-lg text-gray-100"
        @click="store.showModal = false">X
    </button>
    <div class="flex justify-between items-center mt-8">
      <div class="w-1/4">
        <h2>Stap 1 van 5</h2>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
        </div>
      </div>
      <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import FormInput from "~/components/ui/form-input.vue";
import FormRadio from "~/components/ui/form-radio.vue";
import {useStoreIndex} from "~/store";
import FormTextarea from "~/components/ui/form-textarea.vue";

const store = useStoreIndex()
const setCategory = (name) => {
  store.showModal = true
  store.steps.category = name
}
const inputt = () => {
  console.log('fdasfasd')
}
const submit = () => {
  console.log(store.steps)
}
</script>
