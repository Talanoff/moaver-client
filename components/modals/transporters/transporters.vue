<template>
  <div class="fixed top-0 w-screen h-screen">
    <form class="flex justify-center items-center w-full z-[999] w-screen h-screen" @keypress.enter="submit"
          @submit.prevent="submit">
      <div
          class="flex bg-gray-600  bg-opacity-50 items-center justify-center absolute h-screen w-screen top-0 left-0"
          @click="store.transporters = false"
      />
      <div
          class="relative lg:w-1/2 sm:w-3/4 w-[90%] m-auto absolute  left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]">
        <div>
          <button
              class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-3 py-3 bg-blue-900 rounded-lg text-gray-100"
              @click="store.transporters = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div class="border-blue-600 p-2 rounded-md border-2 w-10 cursor-pointer"
               v-if="storeTransporters.currentStep > 1"
               @click="back()">
            <img
                src="/icons/arrow-left.png"
                alt="">
          </div>
        </div>
        <transporters-form/>
        <footer-component>{{
            storeTransporters.steps.length !== storeTransporters.currentStep ? 'Next' : 'submit'
          }}
        </footer-component>
      </div>

    </form>
  </div>
</template>

<script setup>
import FooterComponent from "~/components/modals/transporters/footer-component.vue";
import TransportersForm from "~/components/transportersForm.vue";
import {useTransporters} from "~/store/transporters";
import {useBooking} from "~/store/booking";

const store = useBooking();
const storeTransporters = useTransporters();
const submit = () => {
  if (storeTransporters.steps.length !== storeTransporters.currentStep) {
    if (storeTransporters.currentStep === 6) {
      if (storeTransporters.steps[5].fields[4].value === storeTransporters.steps[5].fields[5].value && storeTransporters.steps[5].fields[4].value !== '') {
        storeTransporters.currentStep++
      } else {
        storeTransporters.steps[5].fields[4].value = '';
        storeTransporters.steps[5].fields[5].value = '';
        alert('Password mismatch')
      }
    } else {
      storeTransporters.currentStep++
    }
  } else {
    console.log(storeTransporters.steps)
  }

};
const back = () => {
  storeTransporters.currentStep = storeTransporters.currentStep - 1
  console.log(storeTransporters.currentStep)
}
</script>

<style scoped></style>