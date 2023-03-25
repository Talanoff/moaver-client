<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png"
                                                                                       alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">Pick-up and delivery wishes/requirements</h2>

    <div>
      <div>
        <h2 class="text-xl text-center mb-4">Possibility to check the following options
        </h2>
        <div class="flex justify-between gap-2 mb-6">
          <form-checkbox :form="form" :id="1" :title="'Tail lift at pick-up'"
                         @inputEmit="(value)=>{inputt(value)}" class="w-1/2"/>
          <form-checkbox :form="form" :id="2" :title="'Tail lift for delivery'"
                         @inputEmit="(value)=>{inputt(value)}" class="w-1/2"/>
        </div>
      </div>
      <div>
        <div class="flex justify-between gap-2 mb-6">
          <form-checkbox :form="form" :title="'Indoor charging'" @inputEmit="(value)=>{inputt(value)}" :id="3"
                         class="w-1/2"/>
          <form-checkbox :form="form" :title="'Unloading inside'" @inputEmit="(value)=>{inputt(value)}" :id="4"
                         class="w-1/2"/>
        </div>
      </div>
      <div>
        <div class="flex justify-between gap-2 mb-6">
          <form-checkbox :title="'Call before pick-up'" @inputEmit="(value)=>{inputt(value)}" :id="5"
                         :form=" form" class="w-1/2"/>
          <form-checkbox :form="form" :title="'Call before delivery'" @inputEmit="(value)=>{inputt(value)}" :id="6"
                         class="w-1/2"/>
        </div>
      </div>
      <div>
        <div class="flex justify-between gap-2 mb-6">
          <form-checkbox :form="form" :title="'Appointment needed for delivery'" @inputEmit="(value)=>{inputt(value)}"
                         :id="7"
                         class="w-1/2"/>
          <form-checkbox :form="form" :title="'Urgent/Rush'" @inputEmit="(value)=>{inputt(value)}" :id="8"
                         class="w-1/2"/>
        </div>
      </div>
      <div>
        <div class="flex justify-between gap-2 mb-6">
          <form-checkbox :form="form" :title="'Forklift needed'" @inputEmit="(value)=>{inputt(value)}" :id="9"
                         class="w-full "/>
        </div>
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
import FormInput from "~/components/ui/form-input.vue";
import FormRadio from "~/components/ui/form-radio.vue";
import {useStoreIndex} from "~/store";
import FormTextarea from "~/components/ui/form-textarea.vue";
import FormSelect from "~/components/ui/form-select.vue";
import FormCheckbox from "~/components/ui/form-checkbox.vue";

const store = useStoreIndex()
const form = ref([])
const inputt = (value) => {
  if (form.value.length === 0) {
    form.value.push(value)
  } else {
    const index = form.value.indexOf(value);
    if (index === -1) {
      form.value.push(value);
    } else {
      form.value.splice(index, 1);

    }
  }
}
const submit = () => {
  localStorage.step3 = JSON.stringify(form.value)
  store.step = 4
}
const width = computed(() => {
  return (100 / (store.stepsProgress - store.step)) + '%'
})
onBeforeMount(()=>{
  if (localStorage.step3) {
    form.value =  JSON.parse(localStorage.step3)

  }
})
</script>
