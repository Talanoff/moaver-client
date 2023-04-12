<template>
    <div>
        <div v-if="transporterStore.currentStep !== transporterStore.steps.length">
            <div v-for="step in transporterStore.steps">
                <div
                        v-if="step.id === transporterStore.currentStep"
                        class="sm:h-[450px] h-[350px] overflow-y-auto overflow-x-hidden"
                        :key="step.id"
                >
                    <h2 class="sm:text-3xl text-xl font-bold sm:mb-8 mb-2">
                        {{ step.id === 0 ? transporterStore.category : step.title }}
                    </h2>

                    <div class="flex flex-wrap -m-2.5">
                        <div
                                v-for="(field) in step.fields"
                                :key="field.id"
                                class="p-2.5"
                                :class="field.className"
                        >
                            <component
                                    :is="getFieldName(field.fieldType)"
                                    :id="field.id"
                                    v-model="field.value"
                                    v-bind="field.attr"
                                    v-if="field.show === true || field.show === undefined"
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
import {getFieldName} from "~/helpers/field-type";
import {useConfig} from "~/store/config";
import {useTransporters} from "~/store/transporters";

const transporterStore = useTransporters();
const configStore = useConfig();

configStore.getCountries();
</script>
