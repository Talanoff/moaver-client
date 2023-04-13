<template>
    <div>
        <div v-if="store.currentStep !== steps.length">
            <div v-for="step in steps">
                <div
                        v-if="step.id === store.currentStep"
                        :key="step.id"
                        class="max-h-[90vh] overflow-y-auto overflow-x-hidden"
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
                                    v-model="store.form[field.controlName][0]"
                                    v-bind="field.attrs"
                                    v-if="!field.hidden && store.form[field.controlName]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="text-xl font-bold mt-4" v-else>
            Thank you for your assignment! We'll get to work for you right away.
        </h2>
    </div>
</template>

<script setup>
import {getFieldName} from "~/helpers/field-type";
import {useBooking} from "~/store/booking";

const store = useBooking();

defineProps(['steps']);
</script>
