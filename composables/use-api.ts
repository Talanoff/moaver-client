import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import Cookies from "js-cookie";
import { useAuth } from "~/store/auth";

export default function () {
    const nuxtApp = useNuxtApp();
    const config = useRuntimeConfig();
    const {locale} = useI18n();
    const authStore= useAuth();

    const api = axios.create({
        baseURL: config.public.API_URL,
        withCredentials: true,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json'
        }
    });

    api.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token: string | undefined = Cookies.get('token');

            config.headers["X-Locale"] = locale.value;

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
                authStore.user = null;
                authStore.isLoggedIn = false;
                Cookies.remove('token');
            }

            return Promise.reject(error);
        }
    );

    // @ts-ignore
    nuxtApp.hook('i18n:localeSwitched', ({newLocale}) => {
        api.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                config.headers["X-Locale"] = newLocale;
                return config;
            }
        );
    });

    return api;
}
