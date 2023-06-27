<template>
    <div class="relative" v-click-outside="onClickOutside" v-if="!isMobile">
        <label class="block mb-2 text-sm  text-slate-900 font-bold" v-if="$attrs.label">
            {{ $attrs.label }}
        </label>

        <button
                ref="button"
                type="button"
                class="relative w-full cursor-default rounded-md text-sm bg-slate-100 h-12 pr-10 text-left focus:outline-none ring-2 ring-transparent focus:ring-blue-500/50"
                :class="{'!ring-red-500/50 !focus:ring-red-500/50': errors}"
                aria-haspopup="listbox"
                :aria-expanded="expanded"
                aria-labelledby="listbox-label"
                :disabled="$attrs.disabled"
                @click.prevent="onToggle"
        >
            <input
                    class="ml-3 block w-full outline-none border-0 bg-slate-100"
                    :class="{
                        'placeholder:text-current': !$attrs.disabled
                    }"
                    :placeholder="currentValue"
                    :disabled="$attrs.disabled"
                    v-model="search"
            />
            <div class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <svg class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                          clip-rule="evenodd"
                    />
                </svg>
            </div>
        </button>

        <ul v-if="errors" class="text-red-500 text-sm">
            <li v-for="(error, index) of errors" :key="index">
                {{ error }}
            </li>
        </ul>

        <teleport to="body">
            <ul
                    v-if="expanded"
                    class="fixed z-[100] my-1 max-h-52 overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-1"
                    tabindex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    :style="listPosition"
            >
                <li
                        class="text-slate-900 relative cursor-default select-none py-1.5 pr-9"
                        role="option"
                        v-for="option of filteredItems"
                        :key="option.key"
                >
                    <button
                            type="button"
                            @click.prevent="onSelect(option.key)"
                            class="block w-full text-left truncate pl-3"
                            :value="option.key"
                    >
                        {{ option.value }}
                    </button>
                    <div
                            v-if="modelValue == option.key"
                            class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                    >
                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                </li>
            </ul>
        </teleport>
    </div>

    <div class="relative" v-else>
        <label class="block mb-2 text-sm font-bold" v-if="$attrs.label">
            {{ $attrs.label }}
        </label>
        <div class="relative">
            <select
                    :class="{'!ring-red-500/50 !focus:ring-red-500/50': errors}"
                    class="appearance-none block w-full px-3.5 bg-slate-100 h-12 border-none text-sm rounded-lg focus:outline-none ring-2 ring-transparent focus:ring-blue-500/50"
                    @change="$emit('update:model-value', $event.target.value)"
                    :disabled="$attrs.disabled"
            >
                <option :disabled="$attrs.required" value="">
                    {{ $t('forms.selectAnOption') }}
                </option>
                <option
                        v-for="option of options"
                        :value="option.key"
                        :selected="modelValue == option.key"
                >
                    {{ option.value }}
                </option>
            </select>

            <div class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <svg class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                          clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>

        <ul v-if="errors" class="text-red-500 text-sm">
            <li v-for="(error, index) of errors" :key="index">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const isMobile = ref(navigator && /Android|iPhone/i.test(navigator.userAgent));

const props = defineProps<{
    modelValue: string | number | null;
    options: {
        key: string;
        value: string;
    }[];
    errors?: string[] | null | undefined
}>();

const emits = defineEmits(['update:model-value']);

const {$i18n} = useNuxtApp();

const button = ref<HTMLButtonElement | null>(null);
const listPosition = ref<{
    left: string;
    width: string;
    top?: string | undefined;
    bottom?: string | undefined;
}>();
const expanded = ref<boolean>(false);
const search = ref<string>('');

const currentValue = computed(() => {
    return props.options?.find(({key}) => props.modelValue == key)?.value ?? $i18n.t('forms.selectAnOption');
});

const filteredItems = computed(() => props.options?.filter(({value}) => {
    const name = new RegExp(search.value.toString(), 'i');
    return name.test(value);
}));

const onToggle = () => {
    if (!expanded.value) {
        calculateListPosition();
    }

    expanded.value = !expanded.value
}

const onSelect = (value: string | number) => {
    emits('update:model-value', value);
    onClickOutside();
}

const onClickOutside = () => {
    search.value = '';
    expanded.value = false;
}

const calculateListPosition = (): void => {
    if (!button.value) {
        return;
    }

    const windowHeight = window.innerHeight;
    const {left, top, bottom, width} = button.value.getBoundingClientRect();

    listPosition.value = {
        left: left + 'px',
        width: width + 'px',
    };

    if (windowHeight < bottom + 200) {
        listPosition.value.bottom = (windowHeight - top) + 'px';
    } else {
        listPosition.value.top = bottom + 'px';
    }
}

const scrollCallback = () => {
    if (expanded.value) {
        calculateListPosition();
    }
}

document.addEventListener('scroll', scrollCallback);

onDeactivated(() => {
    document.removeEventListener('scroll', scrollCallback);
});
</script>
