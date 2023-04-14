<template>
    <div>
        <div v-if="transportersStore.currentStep !== steps.length">
            <div v-for="step in steps">
                <div
                        v-if="step.id === transportersStore.currentStep"
                        class="sm:h-[450px] h-[350px] overflow-y-auto overflow-x-hidden"
                        :key="step.id"
                >
                    <div class="flex flex-wrap">
                        <div
                            class="p-2"
                            v-for="field in step.fields"
                            :key="field.id"
                            :class="field.className"
                        >
                            <component
                                :is="getFieldName(field.fieldType)"
                                :id="field.id"
                                v-model="transportersStore.form[field.controlName][0]"
                                v-bind="field.attrs"
                                v-if="!field.hidden && transportersStore.form[field.controlName]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <h2 class="text-xl font-bold mt-4">
                Thank you for your assignment! We'll get to work for you right away.
            </h2>
        </div>
    </div>
</template>

<script setup>
import { getFieldName } from "~/helpers/field-type";
import { useConfig } from "~/store/config";
import { useTransporters } from "~/store/transporters";

defineProps(['steps']);

const transportersStore = useTransporters();
const configStore = useConfig();

configStore.getCountries();
</script>
