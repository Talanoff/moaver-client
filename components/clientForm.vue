<template>
    <div class="mb-8 mt-5">
        <div v-if="store.currentStep !== steps.length">
            <div v-for="step in steps" :key="step.id">
                <div
                        v-if="step.id === store.currentStep"
                        class="max-h-[60vh] overflow-y overflow-x-hidden customScroll"

                >
                    <div class="flex flex-wrap">
                        <div
                                class="p-2"
                                v-for="field in step.fields"
                                :key="field.id"
                                :class="field.className"
                                v-show="!field.hidden && store.form[field.controlName]"
                        >
                            <component
                                    :is="getFieldName(field.fieldType)"
                                    :id="field.id"
                                    :steps="steps"
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
            {{ $t(`forms.thank`) }}
        </h2>
    </div>
</template>

<script setup>
import {getFieldName} from "~/helpers/field-type";
import {useBooking} from "~/store/booking";

const store = useBooking();

defineProps(['steps']);
</script>
<style>


.customScroll::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
}

.customScroll::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
}

.customScroll::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148)));
}
</style>
