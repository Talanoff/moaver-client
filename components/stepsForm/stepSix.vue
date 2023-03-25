<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]" @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png" alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">Personal info</h2>

<div class="max-h-[500px] overflow-y-scroll">
  <div class="flex justify-between gap-2 mb-4">
    <form-input :type-input="'text'" :value="form.name" class="w-full" :title="'Name'" :placeholder="'Name'" @inputEmit="(value)=>{inputt(value,'name')}"/>
  </div>
  <div class="flex justify-between gap-2 mb-4">
    <form-input :type-input="'text'" :value="form.address" class="w-full" :title="'Address'" :placeholder="'Address'" @inputEmit="(value)=>{inputt(value,'address')}"/>
  </div>
  <div class="flex justify-between gap-2 mb-4">
    <form-input :type-input="'number'" class="w-full" :value="form.phoneNumber" :title="'Phone number'" :placeholder="'Phone number'" @inputEmit="(value)=>{inputt(value,'phoneNumber')}"/>
  </div>
  <div class="flex justify-between gap-2 mb-4">
    <form-input :type-input="'email'" class="w-full" :value="form.email"  :title="'E-mail address'" :placeholder="'E-mail address'" @inputEmit="(value)=>{inputt(value,'email')}"/>
  </div>
  <div class="flex justify-between gap-2 mb-4">
    <form-input :type-input="'email'" class="w-full" :value="form.verificationEmail" :title="'Verification email address'" :placeholder="'Verification email address'" @inputEmit="(value)=>{inputt(value,'verificationEmail')}"/>
  </div>
  <div class="flex justify-between gap-2 mb-4">
    <form-input :type-input="'text'" class="w-full" :value="form.IBAN" :title="'IBAN'" :placeholder="'IBAN'" @inputEmit="(value)=>{inputt(value,'IBAN')}"/>
  </div>
  <div class="flex items-center justify-between gap-2 mb-4">
    <form-checkbox :id="1" :form="form.checked" @inputEmit="(value)=>{inputt(value, 'checked')}" :title="'do you want to register?'" class="w-full"/>

  </div>
  <div class="flex items-center justify-between gap-2 mb-4">
    <form-input :type-input="'password'" :value="form.password" class="w-full" :title="'password'" :placeholder="'password'" @inputEmit="(value)=>{inputt(value,'password')}"/>
    <form-input :type-input="'password'" :value="form.repassword" class="w-full" :title="'password'" :placeholder="'password'" @inputEmit="(value)=>{inputt(value,'repassword')}"/>
  </div>
  <div class="flex items-center justify-between gap-2 mb-4">
    <form-checkbox :id="2" :form="form.checked" :title="'Agree to terms'" @inputEmit="(value)=>{inputt(value, 'checked')}" class="w-1/2"/>
    <nuxt-link to="terms-and-conditions" class="text-blue-600">Terms And Conditions</nuxt-link>
  </div>


</div>

    <button
        class="absolute -top-5 -right-5 z-10 flex justify-center items-center px-4 py-3 bg-blue-900 rounded-lg text-gray-100"
        @click="store.showModal = false">X
    </button>
    <div class="flex justify-between items-center mt-8">
      <div class="w-1/4">
        <h2>Stap {{ store.step }} van {{ store.stepsProgress }}</h2>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-blue-600 h-2.5 rounded-full" :style="{width:width }"></div>
        </div>
      </div>
      <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Next
      </button>
    </div>
  </form>
</template>

<script setup>
import {useStoreIndex} from "~/store";
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import FormInput from "~/components/ui/form-input.vue";
const store = useStoreIndex()
const form=ref({});
const inputt = (value, type) => {
  if (type === 'checked') {
    if(form.value[type] !== undefined){
      const index = form.value[type].indexOf(value);
      if (index === -1) {
        form.value[type].push(value);
      } else {
        form.value[type].splice(index, 1);
      }
    }else{
      form.value[type] = []
      form.value[type].push(value);
    }

  } else {
    form.value[type] = value;
  }
};
const submit = () => {
  localStorage.step6 = JSON.stringify(form.value)
  store.step = 7
}
const width = computed(() => {
  return (100 - 14 + '%')
})
onBeforeMount(() => {
  if (localStorage.step6) {
    form.value = JSON.parse(localStorage.step6)
  }
})
</script>
