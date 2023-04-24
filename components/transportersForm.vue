<template>
    <div>
        <div v-if="transportersStore.currentStep !== steps.length">
            <div v-for="step in steps">
                <div
                        v-if="step.id === transportersStore.currentStep"
                        :key="step.id"
                        class="max-h-[60vh] overflow-y-auto overflow-x-hidden"
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
                {{ $t(`forms.thank`) }}
            </h2>
        </div>
    </div>
</template>

<script setup>
import {getFieldName} from "~/helpers/field-type";
import {useConfig} from "~/store/config";
import {useTransporters} from "~/store/transporters";

defineProps(['steps']);

const transportersStore = useTransporters();
const configStore = useConfig();

configStore.getCountries();
</script>
