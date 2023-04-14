<template>
    <form @submit.prevent="login">
        <button>Login</button>
    </form>

    <form @submit.prevent="me">
        <button>me</button>
    </form>

    <form @submit.prevent="logout">
        <button>logout</button>
    </form>
</template>

<script setup>
const { $sanctumAuth, $apiFetch } = useNuxtApp()
const router = useRouter()
const errors = ref([])

const login = async () => {
    try {
        await $sanctumAuth.login({
            email: 'amina95@example.org',
            password: 'password'
        }, () => {
            // do something
        })
    } catch (e) {
        errors.value = e.errors
    }
}

const me = async () => {
    try {
        return await useAsyncData(() => $apiFetch('api/user'));
    } catch (e) {
        errors.value = e.errors
    }
}

const logout = async () => {
    await $sanctumAuth.logout(
        (data) => {
            console.log(data)
            // router.push('/account')
        }
    )
}
</script>
