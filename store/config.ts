import { defineStore } from "pinia";
import useApi from "~/composables/use-api";
import { useMain } from "~/store/main";
import { useTransporters } from "~/store/transporters";

interface ServiceInterface {
    id: number;
    name: string;
}

export const useConfig = defineStore('config', () => {
    const api = useApi();

    const countries = ref([]);
    const services = ref<ServiceInterface[]>([]);
    const vehicles = ref([]);
    const wishes = ref({});
    const mainStore = useMain();
    const transportersStore = useTransporters();

    const getCountries = async (): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('/countries');
        countries.value = data;
        mainStore.loader = false
    }

    const getServices = async (): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('/services');
        services.value = data;
        mainStore.loader = false;
    }

    const getVehicles = async (serviceIds: number[]): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('/vehicles', {
            params: {
                services: serviceIds.join(',')
            }
        });
        vehicles.value = data;

        const selectedServices = services.value.filter((it: ServiceInterface) => transportersStore.form.services[0].includes(it.id))

        selectedServices.forEach((service: ServiceInterface) => {
            const control = transportersStore.form.vehicles[0][service.id];

            transportersStore.form.vehicles[0][service.id] = data[service.id]?.reduce(
                (vacc: any, v: any) => ({
                    ...vacc,
                    [v.id]: {
                        key: v.id,
                        value: control ? control[v.id]['value'] : null
                    }
                }),
                {}
            )
        })
        mainStore.loader = false;
    }

    const getWishes = async (): Promise<void> => {
        mainStore.loader = true
        const { data } = await api.get('/wishes');
        wishes.value = data;
        mainStore.loader = false;
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
