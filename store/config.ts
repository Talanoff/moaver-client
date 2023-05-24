import { defineStore } from "pinia";
import useApi from "~/composables/use-api";
import { useMain } from "~/store/main";
import { useTransporters } from "~/store/transporters";
import { useBooking } from "~/store/booking";
import { computed, ref } from "@vue/reactivity";
import { KeyValue } from "~/types/forms";

export const useConfig = defineStore('config', () => {
    const api = useApi();

    const countries = ref<KeyValue[]>([]);
    const services = ref<KeyValue[]>([]);
    const vehicles = ref<KeyValue[]>([]);
    const wishes = ref<{
        additional: KeyValue[];
        common: KeyValue[]
    }>({
        additional: [],
        common: []
    });
    const locationTypes = ref<KeyValue[]>([]);
    const goodsTypes = ref<KeyValue[]>([]);

    const mainStore = useMain();
    const transportersStore = useTransporters();
    const bookingStore = useBooking();

    const getCountries = async (): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('countries');
        countries.value = data;
        mainStore.loader = false
    }

    const getServices = async (): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('services');
        services.value = data;
        mainStore.loader = false;
    }

    const getVehicles = async (serviceIds: number[]): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('vehicles', {
            params: {
                services: serviceIds.join(',')
            }
        });
        vehicles.value = data;

        const selectedServices = services.value.filter((it: KeyValue) => transportersStore.form.services[0].includes(it.key))

        selectedServices.forEach((service: KeyValue) => {
            const control = transportersStore.form.vehicles[0][service.key];

            transportersStore.form.vehicles[0][service.key] = data[service.key]?.reduce(
                (vacc: any, v: any) => ({
                    ...vacc,
                    [v.key]: {
                        key: v.key,
                        value: control ? control[v.key]['value'] : null
                    }
                }),
                {}
            )
        })
        mainStore.loader = false;
    }

    const getBookingItems = async (): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('booking');
        wishes.value = data.wishes;
        locationTypes.value = data.locationTypes;
        goodsTypes.value = data.goodsTypes;
        mainStore.loader = false;
    }

    const selectedWishes = computed(() => {
        return wishes.value.common
            .filter((it: KeyValue) => bookingStore.form.wishes[0].includes(it.key))
            .map(({value}: KeyValue) => value);
    });

    const selectedAdditionalWishes = computed(() => {
        return wishes.value.additional
            .filter((it: KeyValue) => bookingStore.form.additionalWishes[0].includes(it.key))
            .map(({value}: KeyValue) => value);
    });

    return {
        countries,
        services,
        vehicles,
        wishes,
        locationTypes,
        goodsTypes,

        getCountries,
        getServices,
        getVehicles,
        getBookingItems,

        selectedWishes,
        selectedAdditionalWishes
    }
});
