<template>
    <div class="mb-8 mt-5">
        <div v-for="step in steps" :key="step.id">
            <div
                v-show="step.id === currentStep"
                class="max-h-[60vh] overflow-y overflow-x-hidden custom-scroll"
            >
                <div class="flex flex-wrap">
                    <div
                        class="p-2.5"
                        v-for="(field, index) in step.fields"
                        :key="`field-${index}`"
                        :class="field.className ?? ''"
                    >
                        <component
                            v-if="field.fieldType !== 'delimiter'"
                            :is="getFieldName(field.fieldType)"
                            :id="field.controlName"
                            v-bind="field.attrs"
                            v-model="form[field.controlName][0]"
                        />

                        <div class="my-2.5" v-else>
                            <hr class="border-slate-200"/>
                        </div>
                    </div>
                </div>
            </div>
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
