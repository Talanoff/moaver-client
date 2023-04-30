import {defineStore} from "pinia";
import useApi from "~/composables/use-api";
import {useMain} from "~/store/main";

export const useConfig = defineStore('config', () => {
    const api = useApi();

    const countries = ref([]);
    const services = ref([]);
    const vehicles = ref([]);
    const wishes = ref({});
    const mainStore = useMain();
    const getCountries = async (): Promise<void> => {
        mainStore.loader = true
        const {data} = await api.get('/countries');
        countries.value = data;
        mainStore.loader = false
    }

    const getServices = async (): Promise<void> => {
        mainStore.loader = true
        const {data} = await api.get('/services');
        services.value = data;
        mainStore.loader = false
    }

    const getVehicles = async (services: string[]): Promise<void> => {
        mainStore.loader = true
        const {data} = await api.get('/vehicles', {
            params: {
                services: services.join(',')
            }
        });
        vehicles.value = data;
        mainStore.loader = false
    }

    const getWishes = async (): Promise<void> => {
        mainStore.loader = true
        const {data} = await api.get('/wishes');
        wishes.value = data;
        mainStore.loader = false
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
