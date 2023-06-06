<template>
    <div class="space-y-5">
        <div v-for="service in displayedServices" :key="service.key">
            <h2 class="text-md font-bold mb-2">
                {{ service.value }}:
            </h2>

            <div class="space-y-2">
                <div
                        class="flex border border-slate-100 rounded-md"
                        v-for="vehicle in vehicles[service.key]"
                        :key="vehicle.key"
                >
                    <div class="w-auto flex-1 rounded-l-md text-sm px-2 bg-slate-100 flex flex-col justify-center">
                        {{ vehicle.value }}
                    </div>
                    <div class="w-20">
                        <form-input
                                class="rounded-l-none bg-white border-none font-semibold"
                                v-bind="inputAttrs"
                                v-model="transportersStore.form.vehicles[0][service.key][vehicle.key]['value']"
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
    min: 1,
    type: 'number',
    placeholder: '*'
}

const configStore = useConfig();
const transportersStore = useTransporters();

const { form } = storeToRefs(transportersStore);
const { services, vehicles } = storeToRefs(configStore);

const displayedServices = computed(() => services.value.filter(it => form.value.services[0].includes(it.key)));
</script>
