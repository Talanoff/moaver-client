<template>
    <div>
        <div v-for="(option,val) in configStore.vehicles" :key="val">
            <h2 class="text-md font-bold">
                {{ val }}:
            </h2>
            <div class="flex flex-wrap items-center sm:mb-2" v-for="item in option" :key="item.id">
                <p class="w-1/2 text-md">
                    {{ item.name }}
                </p>
                <p class="w-1/2">
                    <form-input v-bind="{type:'number'}"
                                :modelValue="transportersStore.form.serviceQuantity[val]? transportersStore.form.serviceQuantity[val][0].quantity :''"
                                v-model="item.quantity"/>
                </p>

            </div>
        </div>
    </div>
</template>

<script setup>
import {useConfig} from "~/store/config";
import {useTransporters} from "~/store/transporters";
import FormInput from "~/components/ui/form-input.vue";

const transportersStore = useTransporters()
const configStore = useConfig();

configStore.getVehicles(transportersStore.form.services[0])
onUnmounted(() => {
    transportersStore.form.serviceQuantity = configStore.vehicles
})
</script>
<style scoped>

</style>
