<template>
    <div class="relative text-slate-900">
        <label class="block mb-2 text-sm font-bold" v-if="$attrs.label">
            {{ $t(`forms.${$attrs.label}`) }}
        </label>
        <div class="relative flex items-center">
            <input
                    v-bind="$attrs"
                    :value="modelValue"
                    :disabled="disabled"
                    :required="required"
                    @keypress="$attrs.number ? onlyNumber($event) : ''"
                    class="appearance-none block w-full px-3.5 bg-slate-100 h-12 border-none text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    @input="$emit('update:modelValue', $event.target.value)"
            >

            <div class="absolute right-3.5 text-slate-1000 text-xs text-gray-500" v-if="$attrs.name">
                {{ $t(`forms.${$attrs.name}`) }}
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps([
    'modelValue',
    'disabled',
    'required',
]);

const onlyNumber = ($event) => {
    let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 43 && keyCode !== 40 && keyCode !== 41) {
        $event.preventDefault();
    }
}
</script>
