import { defineStore } from "pinia";
import useApi from "~/composables/use-api";
import { useMain } from "~/store/main";
import { useTransporters } from "~/store/transporters";
import { useBooking } from "~/store/booking";
import { computed, ref } from "@vue/reactivity";
import { KeyValue } from "~/types/forms";

interface ServiceInterface {
    key: number;
    value: string;
}

export const useConfig = defineStore('config', () => {
    const api = useApi();

    const countries = ref([]);
    const services = ref<ServiceInterface[]>([]);
    const vehicles = ref([]);
    const wishes = ref<{
        additional: ServiceInterface[];
        common: ServiceInterface[]
    }>({
        additional: [],
        common: []
    });
    const locationTypes = ref<KeyValue[]>([]);

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

        const selectedServices = services.value.filter((it: ServiceInterface) => transportersStore.form.services[0].includes(it.key))

        selectedServices.forEach((service: ServiceInterface) => {
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
        mainStore.loader = false;
    }

    const selectedWishes = computed(() => {
        return wishes.value.common
            .filter((it: ServiceInterface) => bookingStore.form.wishes[0].includes(it.key))
            .map(({value}: ServiceInterface) => value);
    });

    const selectedAdditionalWishes = computed(() => {
        return wishes.value.additional
            .filter((it: ServiceInterface) => bookingStore.form.additionalWishes[0].includes(it.key))
            .map(({value}: ServiceInterface) => value);
    });

    return {
        countries,
        services,
        vehicles,
        wishes,
        locationTypes,

        getCountries,
        getServices,
        getVehicles,
        getBookingItems,

        selectedWishes,
        selectedAdditionalWishes
    }
});
