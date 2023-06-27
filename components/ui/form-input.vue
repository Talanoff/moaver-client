<template>
    <div class="relative">
        <label class="block mb-2 text-sm font-bold" v-if="$attrs.label">
            {{ $attrs.label }}
        </label>
        <div class="relative flex items-center">
            <input
                    v-bind="$attrs"
                    :value="modelValue"
                    :disabled="disabled"
                    :required="required"
                    @keypress="$attrs.number ? onlyNumber($event) : ''"
                    class="appearance-none block w-full px-3.5 bg-slate-100 h-12 border-none text-sm rounded-lg focus:outline-none ring-2 ring-transparent focus:ring-blue-500/50"
                    @input="$emit('update:modelValue', $event.target.value)"
                    :placeholder="placeholder ?? ' '"
                    :class="{'!ring-red-500/50 !focus:ring-red-500/50': errors}"
            >

            <div class="absolute right-3.5 text-slate-1000 text-xs text-gray-500" v-if="$attrs.name">
                {{ $attrs.name }}
            </div>
        </div>

        <ul v-if="errors" class="text-red-500 text-sm">
            <li v-for="(error, index) of errors" :key="index">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps([
    'modelValue',
    'disabled',
    'required',
    'placeholder',
    'errors',
]);

defineEmits(['update:modelValue']);

const onlyNumber = ($event) => {
    let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 43 && keyCode !== 40 && keyCode !== 41) {
        $event.preventDefault();
    }
}
</script>
