import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export default function () {
    const config = useRuntimeConfig();
    const {locale} = useI18n();

    const api = axios.create({
        baseURL: config.public.API_URL,
        withCredentials: true,
        headers: {
            'X-Locale': locale.value,
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json'
        }
    });

    api.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token: string | undefined = Cookies.get('token');

            if (token && config.headers) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }

            return config;
        }
    );

    api.interceptors.response.use(
        (response: AxiosResponse<any, any>) => response,
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                // window.location.href = '/auth/login';
            }

            return Promise.reject(error);
        }
    );

    return api;
}
