<template>
  <div class=" ">
    <form-checkbox v-for="(option,idx) in $attrs.options" :key="option.name" :checked="option.checked"
                   :title="option.name"
                   @inputEmit="()=>{setCheckbox(idx)}"/>
  </div>
</template>

<script setup>
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import {useBooking} from "~/store/booking";

const store = useBooking()
const props = defineProps(['id']);
const setCheckbox = (idx) => {
  store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked = !store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
  if (store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].name === 'do you want to register') {
    store.steps[store.currentStep - 1].fields[6].show = store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
    store.steps[store.currentStep - 1].fields[7].show = store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
  }
}
</script>
<style scoped>

</style>