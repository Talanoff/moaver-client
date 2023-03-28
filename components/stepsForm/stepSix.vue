<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png"
                                                                                       alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">Personal info</h2>

    <div class="max-h-[500px] overflow-y-scroll">
      <div class="grid grid-cols-1 gap-5">
        <form-input :type-input="'text'" :value="form.name" :title="'Name'" :placeholder="'your name'"
                    @inputEmit="(value)=>{setForm(value,'name')}"/>
        <form-input :type-input="'text'" :value="form.address" :title="'Address'" :placeholder="'your address'"
                    @inputEmit="(value)=>{setForm(value,'address')}"/>
        <form-input :type-input="'number'" :value="form.phoneNumber" :title="'Phone number'"
                    :placeholder="'your phone number'" @inputEmit="(value)=>{setForm(value,'phoneNumber')}"/>
        <form-input :type-input="'email'" :value="form.email" :title="'E-mail address'"
                    :placeholder="'your e-mail address'" @inputEmit="(value)=>{setForm(value,'email')}"/>
        <form-input :type-input="'number'" :value="form.iban" :title="'IBAN'" :placeholder="'iban'"
                    @inputEmit="(value)=>{setForm(value,'iban')}"/>

        <form-checkbox :id="1" :checked="form.register" @inputEmit="(value)=>{setForm(value, 'register')}"
                       :title="'do you want to register?'" class="w-full"/>
        <div v-if="form.register">
          <form-input :type-input="'password'" :value="form.password" class=" mb-5" :title="'password'"
                      :placeholder="'password'" @inputEmit="(value)=>{setForm(value,'password')}"/>
          <form-input :type-input="'password'" :value="form.repassword" :title="'password'" :placeholder="'password'"
                      @inputEmit="(value)=>{setForm(value,'repassword')}"/>

        </div>
        <form-checkbox :id="2" :checked="form.agreeTerms" :title="'Agree to terms'"
                       @inputEmit="(value)=>{setForm(value, 'agreeTerms')}" class="w-1/2"/>
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
import {useBooking} from "~/store/booking";
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import FormInput from "~/components/ui/form-input.vue";

const store = useBooking()
const form = ref({
  name: '',
  address: '',
  phoneNumber: '',
  email: '',
  iban: '',
  password: '',
  repassword: '',
  register: false,
  agreeTerms: false
})
const setForm = (value, type) => {
  form.value[type] = value
};
const submit = () => {
  if(form.value.register && form.value.password === form.value.repassword){
    sessionStorage.step6 = JSON.stringify(form.value)
  }else if (!form.value.register){
    delete form.value.password
    delete form.value.repassword
    sessionStorage.step6 = JSON.stringify(form.value)
  }else {
    form.value.password = ''
    form.value.repassword = ''
    alert('your passwords do not match, please enter them again')
  }

  store.step = 7
}
const width = computed(() => {
  return (100 - 14 + '%')
})

if (sessionStorage.step6) {
  form.value = JSON.parse(sessionStorage.step6)
}

</script>
