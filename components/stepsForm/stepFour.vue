<template>
  <form class="w-1/2 relative m-auto absolute top-28 left-0 p-10 bg-white rounded-3xl z-20 max-w-[600px]"
        @submit.prevent="submit">
    <button class="border-blue-600 p-2 rounded-md border-2" @click="store.step--"><img src="/icons/arrow-left.png"
                                                                                       alt=""></button>
    <h2 class="text-2xl font-bold mb-8 mt-2">Additional wishes:</h2>


    <div class="grid grid-cols-2 gap-5">
      <form-checkbox v-for="(option,idx) in form.options" :key="option.name" :checked="option.checked" :id="idx"
                     :title="option.name"
                     @inputEmit="(value)=>{setForm(value,'checked', option.name)}"/>
      <div class="col-span-2">
        <form-textarea :value="form.text" @inputEmit="(value)=>{setForm(value, 'text')}"/>
      </div>
      <form-file :file-url="form.file" @inputEmit="(value)=>{setForm(value, 'file')}"/>
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
import {useBooking} from '~/store/booking';
import FormCheckbox from '~/components/ui/form-checkbox.vue';
import FormTextarea from '~/components/ui/form-textarea.vue';
import FormFile from '~/components/ui/form-file.vue';

const store = useBooking();
const form = ref({
  options: [
    {name: 'Part load', checked: false},
    {name: 'Refrigerated transport', checked: false},
    {name: 'Frozen transport', checked: false},
    {name: 'Electric vehicle', checked: false},
    {name: 'Call before pick-up', checked: false},
  ],
  text: '',
  file: '',

})
// const form = ref({checked: [], text: '', file: null});

const setForm = (value, type, name) => {
  if (type === 'checked') {
    form.value.options.forEach((el) => {
      if (el.name === name) {
        el.checked = value
      }
    })
  } else if (type === 'text') {
    form.value.text = value
  } else {
    form.value.file = value
  }
};

const submit = () => {
  store.step = 5;
  sessionStorage.step4 = JSON.stringify(form.value)
};

const width = computed(() => {
  return `${100 / (store.stepsProgress - store.step)}%`;
});

if (sessionStorage.step4) {
  form.value = JSON.parse(sessionStorage.step4)
}

</script>
