import { defineStore } from "pinia";

export const useConfig = defineStore('config', {
    state: () => ({
        countries: [],
        services: [],
        vehicles: []
    }),
    actions: {
        async getCountries(): Promise<void> {
            const api = useApi();
            const { data } = await api.get('/countries');
            this.countries = data;
        },

        async getServices(): Promise<void> {
            const api = useApi();
            const { data } = await api.get('/services');
            this.services = data;
        },

        async getVehicles(services: string[]): Promise<void> {
            const api = useApi();
            const { data } = await api.get('/vehicles', {
                params: {
                    services: services.join(',')
                }
            });
            this.vehicles = data;
        }
    }
});
