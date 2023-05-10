<template>
    <div class="relative" v-click-outside="onClickOutside">
        <label class="block mb-2 text-sm  text-gray-900  font-bold" v-if="$attrs.label">
            {{ $t(`forms.${$attrs.label}`) }}
        </label>
        <button
                :disabled="$attrs.disabled"
                type="button"
                class="relative w-full cursor-default rounded-md bg-gray-50 py-2 pr-10 text-left ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                aria-haspopup="listbox"
                :aria-expanded="expanded"
                aria-labelledby="listbox-label"
                @click.prevent="expanded = !expanded"
        >
                <span class="flex items-center">
                  <input type="text" class="ml-3 block truncate find-input bg-gray-50" :disabled="$attrs.disabled"
                         :placeholder="currentValue"
                         v-model="search">
                </span>
            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clip-rule="evenodd"/>
                </svg>
              </span>
        </button>

        <ul
                v-if="expanded"
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-2"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
        >
            <li
                    class="text-gray-900 relative cursor-default select-none py-2 pr-9"
                    id="listbox-option-0"
                    role="option"
                    v-for="option in filterCounties"
            >
                <button
                        type="button"
                        :value="option.key"
                        @click.prevent="onSelect(option)"
                        class="block w-full text-left"
                >
                    <span class="font-normal ml-3 block truncate">{{ option.value }}</span>
                </button>
                <span
                        v-if="modelValue === option.key"
                        class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                >
                  <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"/>
                  </svg>
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    modelValue: string;
    options: {
        key: string;
        value: string;
    }[];
}>();

const emits = defineEmits(['update:model-value']);

const expanded = ref<boolean>(false);
const search = ref<string>('')
const currentValue = computed(() => {
    return props.options?.find(({key}) => props.modelValue === key)?.value ?? 'Select an option'; // TODO translate
});
const filterCounties = computed(() => {
    return props.options?.filter(item => item.value.toLowerCase().indexOf(search.value.toLowerCase()) !== -1)
})
const onSelect = (option: {
    key: string;
    value: string | number | null;
}) => {
    emits('update:model-value', option.key);
    search.value = option.value;
    expanded.value = !expanded.value;
}

const onClickOutside = () => {
    expanded.value = false;
}
</script>
<style scoped>
.find-input {
    width: 100%;
    border: none;
    outline: none;
}
</style>