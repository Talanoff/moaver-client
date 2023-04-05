<template>
  <div class=" flex items-end w-full gap-5">
    <div v-for="item in $attrs.items" :key="item.id" class="w-full">
      <!--      {{ value }} {{ item }}-->
      <form-select
          v-model="item.value"
          v-bind="item.attr"
          :id="item.id"
      />
    </div>

    <div @click="delField(props.id)"
         class=" cursor-pointer w-20 mb-2">

      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="100%" height="100%"
           viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
           stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="7" x2="20" y2="7"/>
        <line x1="10" y1="11" x2="10" y2="17"/>
        <line x1="14" y1="11" x2="14" y2="17"/>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
      </svg>

    </div>
  </div>
</template>

<script setup>
import FormSelect from "~/components/ui/form-select.vue";
import {useTransporters} from "~/store/transporters";

const storeTransporters = useTransporters()
const props = defineProps(['id']);
const delField = (id) => {
  storeTransporters.steps[storeTransporters.currentStep - 1].fields.forEach((field, idx) => {
    if (field.id === id && storeTransporters.steps[storeTransporters.currentStep - 1].fields.length > 1) {
      storeTransporters.steps[storeTransporters.currentStep - 1].fields.splice(idx, 1)
    }
  })

}
const value = ref('')

</script>
<style scoped>

</style>