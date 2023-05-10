<template>
    <div class="mb-8 mt-5">
        <div v-if="currentStep !== steps.length">
            <div v-for="step in steps">
                <div
                        v-if="step.id === currentStep"
                        :key="step.id"
                        class="max-h-[60vh] overflow-y overflow-x-hidden custom-scroll"
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
                                    v-bind="field.attrs"
                                    v-model="form[field.controlName][0]"
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
import { getFieldName } from "~/helpers/field-type";
import { useTransporters } from "~/store/transporters";
import { storeToRefs } from "pinia";

defineProps(['steps']);

const { form, currentStep } = storeToRefs(useTransporters());
</script>
