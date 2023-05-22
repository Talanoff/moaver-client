import { defineStore } from "pinia";
import Cookies from "js-cookie";

interface User {
    id: string;
    name: string;
    email: string;
}

type CurrentStore = {
    showModal: boolean;
    isLoggedIn: boolean;
    user: User | null;
}

export const useAuth = defineStore("auth", () => {
    const showModal = ref<boolean>(false);
    const isLoggedIn = ref(false);
    const user = ref<User | null>(null);

    const api = useApi();

    const onModalToggle = () => {
        showModal.value = !showModal.value;
    }

    const setUser = (payload: User) => {
        isLoggedIn.value = true;
        user.value = payload;
    }

    const checkMe = () => {
        if (Cookies.get('token')) {
            api.get('me').then(({ data }) => setUser(data));
        }
    }

    const login = (payload: { email: string; password: string; }): Promise<void> => {
        return api.post('login', payload).then(({ data }): void => assign(data));
    }

    const logout = () => {
        api.post('logout').then(() => {
            isLoggedIn.value = false;
            user.value = null;
            Cookies.remove('token');
        });
    }

    const assign = (payload: { token: string; user: User }) => {
        isLoggedIn.value = true;
        user.value = payload.user;
        Cookies.set('token', payload.token);
    }

    return {
        showModal,
        isLoggedIn,
        user,

        onModalToggle,
        setUser,
        checkMe,
        login,
        logout,
        assign
    }
});
