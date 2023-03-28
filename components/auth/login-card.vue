<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <h2 class="text-3xl font-bold mb-8">Sign in</h2>
    <div class="mb-8">
      <form-input @inputEmit="(value)=>{inputt(value,'email')}" :type="'email'" class="w-full mb-4" title="Your email"/>
      <form-input @inputEmit="(value)=>{inputt(value,'password')}" :type="'password'" class="w-full" title="Your password"/>
    </div>
    <button
        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-4 py-3 bg-blue-900 rounded-lg text-gray-100"
        @click="store.showModal = false">X
    </button>
    <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Sign in
    </button>

  </form>
</template>

<script setup>
import {useBooking} from "~/store/booking";
import FormInput from "~/components/ui/form-input.vue";
const form = ref({})
const store = useBooking()
const submit = ()=>{
  console.log('login',form.value)
  store.showModal = false
}
const inputt = (value, type)=>{
form.value[type] = value
}
onUnmounted(()=>{
  store.$reset()
})
</script>

<style scoped>

</style>
