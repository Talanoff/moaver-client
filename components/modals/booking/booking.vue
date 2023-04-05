<template>
  <form class="fixed top-0 w-full" @submit.prevent="submit">
    <div
        class="flex bg-gray-600  bg-opacity-50 items-center justify-center absolute h-screen w-screen top-0 left-0"
        @click="store.booking = false"
    />
    <div class="relative w-1/2 m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]">
      <button
          class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-3 py-3 bg-blue-900 rounded-lg text-gray-100"
          @click="store.booking = false">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <div class="border-blue-600 p-2 rounded-md border-2 w-10 cursor-pointer" v-if="store.currentStep > 1"
           @click="back()">
        <img
            src="/icons/arrow-left.png"
            alt="">
      </div>
      <client-form class="mb-8" v-if="!store.login && !store.transporters"/>
      <footer-component>{{ store.steps.length !== store.currentStep ? 'Next' : 'submit' }}</footer-component>
    </div>

  </form>
</template>

<script setup>
import {useBooking} from "~/store/booking";
import FooterComponent from "~/components/modals/booking/footer-component.vue";

const store = useBooking();
const submit = () => {
  if (store.steps.length !== store.currentStep) {
    if (store.currentStep === 6) {
      if (store.steps[5].fields[6].value === store.steps[5].fields[7].value && store.steps[5].fields[6].value !== '' || !store.steps[5].fields[6].show) {
        store.currentStep++
      } else {
        store.steps[5].fields[6].value = '';
        store.steps[5].fields[7].value = '';
        alert('Password mismatch')
      }
    } else {
      store.currentStep++
    }
  } else {
    console.log(store.steps)
  }

};
const back = () => {
  store.currentStep = store.currentStep - 1
  console.log(store.currentStep)
}
</script>

<style scoped></style>