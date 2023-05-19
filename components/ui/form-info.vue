<template>
    <table class="divide-y divide-gray-200">
        <tr>
            <td class="w-1/2 text-sm font-semibold py-5 pr-5">{{ $t('forms.category') }}</td>
            <td class="w-1/2 py-5 pl-5">{{ $t(`categories.${bookingStore.form.category[0]}`) }}</td>
        </tr>
        <tr>
            <td class="w-1/2 text-sm font-semibold py-5 pr-5">{{ $t('forms.amountWeight.title') }}</td>
            <td class="w-1/2 py-5 pl-5">
                {{ $t(`forms.amountWeight.${bookingStore.form.category[0]}`, {
                    count: bookingStore.form.pieces[0],
                    weight: bookingStore.form.weight[0]
                }) }}
            </td>
        </tr>
        <tr v-if="bookingStore.form.goods[0]">
            <td class="w-1/2 text-sm font-semibold py-5 pr-5">{{ $t('forms.dispatchType') }}</td>
            <td class="w-1/2 py-5 pl-5">{{ bookingStore.form.goods[0] }}</td>
        </tr>
        <tr v-if="bookingStore.form.message[0]">
            <td class="w-1/2 text-sm font-semibold py-5 pr-5">{{ $t('forms.message') }}</td>
            <td class="w-1/2 py-5 pl-5">{{ bookingStore.form.message[0] }}</td>
        </tr>
        <tr>
            <td class="w-1/2 text-sm font-semibold py-5 pr-5">{{ $t('forms.collect') }}</td>
            <td class="w-1/2 py-5 pl-5">
                <div class="font-semibold">
                    {{ new Date(bookingStore.form.dateFrom[0]).toLocaleDateString() }}
                </div>
                <div class="text-slate-600">
                    <div>{{ getLocationTypeName(bookingStore.form.selectLocationFrom[0]) }}</div>
                    {{ bookingStore.form.locationFrom[0] }}
                </div>
            </td>
        </tr>
        <tr>
            <td class="w-1/2 text-sm font-semibold py-5 pr-5">{{ $t('forms.deliver') }}</td>
            <td class="w-1/2 py-5 pl-5">
                <div class="font-semibold">
                    {{ new Date(bookingStore.form.dateTo[0]).toLocaleDateString() }}
                </div>
                <div class="text-slate-600">
                    <div>{{ getLocationTypeName(bookingStore.form.selectLocationTo[0]) }}</div>
                    {{ bookingStore.form.locationTo[0] }}
                </div>
            </td>
        </tr>
        <tr v-if="selectedWishes.length || selectedAdditionalWishes.length || bookingStore.form.additionalWishesNotes[0]">
            <td class="w-1/2 text-sm font-semibold py-5 pr-5">
                {{ $t('forms.extras') }}
            </td>
            <td class="w-1/2 py-5 pl-5">
                <div class="space-y-2.5">
                    <div v-if="selectedWishes.length">{{ selectedWishes.join(', ') }}</div>
                    <div v-if="selectedAdditionalWishes.length">{{ selectedAdditionalWishes.join(', ') }}</div>
                    <div class="text-gray-600" v-if="bookingStore.form.additionalWishesNotes[0]">
                        {{ bookingStore.form.additionalWishesNotes[0] }}
                    </div>
                </div>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { useBooking } from "~/store/booking";
import { useConfig } from "~/store/config";
import { storeToRefs } from "pinia";

const bookingStore = useBooking();
const { selectedWishes, selectedAdditionalWishes, locationTypes } = storeToRefs(useConfig());

const getLocationTypeName = (key) => {
    return locationTypes.value.find(it => it.key === key)?.value;
}
</script>

