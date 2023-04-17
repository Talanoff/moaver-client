import { defineStore } from "pinia";
import useApi from "~/composables/use-api";

export const useConfig = defineStore('config', () => {
    const api = useApi();

    const countries = ref([]);
    const services = ref([]);
    const vehicles = ref([]);
    const wishes = ref({});

    const getCountries = async (): Promise<void> => {
        const { data } = await api.get('/countries');
        countries.value = data;
    }

    const getServices = async (): Promise<void> => {
        const { data } = await api.get('/services');
        services.value = data;
    }

    const getVehicles = async (services: string[]): Promise<void> => {
        const { data } = await api.get('/vehicles', {
            params: {
                services: services.join(',')
            }
        });

        vehicles.value = data;
    }

    const getWishes = async (): Promise<void> => {
        const { data } = await api.get('/wishes');
        wishes.value = data;
    }

    return {
        countries,
        services,
        vehicles,
        wishes,
        getCountries,
        getServices,
        getVehicles,
        getWishes
    }
});
