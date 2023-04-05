<template>
  <div class=" ">
    <div v-for="(option,idx) in $attrs.options" :key="option.name">
      <div>
        <form-checkbox v-if="!option.type" :checked="option.checked"
                       :title="option.name"
                       @inputEmit="()=>{setCheckbox(idx)}"/>
        <div v-else class="flex  justify-center flex-wrap">
          <form-checkbox :checked="option.checked"
                         class="w-1/2 h-12"
                         :title="option.name"
                         @inputEmit="()=>{setCheckbox(idx)}"/>
          <form-input :type="option.type" v-model="option.value" :disabled="!option.checked"
                      class="flex items-center pl-4   text-gray-900 text-sm rounded-lg mb-0 h-12 w-1/2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FormCheckbox from "~/components/ui/form-checkbox.vue";
import {useBooking} from "~/store/booking";
import FormInput from "~/components/ui/form-input.vue";
import {useTransporters} from "~/store/transporters";

const store = useBooking()
const transportersStore = useTransporters()
const props = defineProps(['id']);
const setCheckbox = (idx) => {
  if (!store.transporters) {
    store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked = !store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
    if (store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].name === 'do you want to register') {
      store.steps[store.currentStep - 1].fields[6].show = store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
      store.steps[store.currentStep - 1].fields[7].show = store.steps[store.currentStep - 1].fields[props.id].attr.options[idx].checked
    }
  } else {
    transportersStore.steps[transportersStore.currentStep - 1].fields[props.id].attr.options[idx].checked = !transportersStore.steps[transportersStore.currentStep - 1].fields[props.id].attr.options[idx].checked
  }

}
</script>
<style scoped>

</style>