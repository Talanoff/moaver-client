<template>
    <div class="space-y-5">
        <div v-for="service in displayedServices" :key="service.id">
            <h2 class="text-md font-bold mb-2">
                {{ service.name }}:
            </h2>

            <div class="space-y-2">
                <div
                        class="flex border border-slate-100 rounded-md"
                        v-for="vehicle in vehicles[service.id]"
                        :key="vehicle.id"
                >
                    <div class="w-auto flex-1 rounded-l-md text-sm px-2 bg-slate-100 flex flex-col justify-center">
                        {{ vehicle.name }}
                    </div>
                    <div class="w-20">
                        <form-input
                                class="rounded-l-none bg-white border-none font-semibold"
                                v-bind="inputAttrs"
                                v-model="transportersStore.form.vehicles[0][service.id][vehicle.id]['value']"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import FormInput from "~/components/ui/form-input.vue";
import { useConfig } from "~/store/config";
import { useTransporters } from "~/store/transporters";
import { storeToRefs } from "pinia";

const inputAttrs = {
    type: 'number',
    min: 1,
    placeholder: '*'
}

const configStore = useConfig();
const transportersStore = useTransporters();

const { form } = storeToRefs(transportersStore);
const { services, vehicles } = storeToRefs(configStore);

configStore.getVehicles(form.value.services[0]);

const displayedServices = ref(
    services.value.filter(it => form.value.services[0].includes(it.id))
);
</script>
