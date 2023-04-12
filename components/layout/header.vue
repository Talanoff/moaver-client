<template>
    <header class="sm:px-10 py-10 px-2 container">
        <div id="sidemenu" class="sm:hidden flex justify-between items-center flex-row-reverse">
            <button class="sidemenu__btn" @click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bottom"></span>
            </button>
            <div class="text-2xl font-black text-blue-600">
                <logo/>
            </div>
            <transition name="translateX">
                <nav v-show="navOpen">
                    <div class="sidemenu__wrapper flex flex-col overflow-auto justify-between h-full">
                        <ul class="sidemenu__list">
                            <li class="sidemenu__item px-5" @click="navOpen=!navOpen">
                                <nuxt-link to="/" class="text-lg py-2  font-bold">
                                    {{ $t('navigation.header.home') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item px-5" @click="navOpen=!navOpen">
                                <nuxt-link
                                        to="/partners"
                                        class="font-bold text-lg py-2 mb-8 "
                                >
                                    {{ $t('navigation.header.partner') }}
                                </nuxt-link>
                            </li>
                        </ul>
                        <div class="sidemenu__item flex " @click="navOpen=!navOpen">
                            <button
                                    class="text-white text-sm w-auto px-5 py-2.5 mb-12 flex items-center"
                                    @click="store.login = !store.login"
                            >
                                <div class="w-6 mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div class="cursor-pointer text-xl">
                                    {{ $t('navigation.header.login') }}
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </transition>
        </div>

        <nav class="hidden sm:flex justify-between items-center">
            <ul class="flex items-end font-semibold">
                <li class="mr-16">
                    <nuxt-link to="/" class="text-3xl font-black text-blue-600">
                        <logo/>
                    </nuxt-link>
                </li>
                <li class=" hover" :class="{'activeHover': $route.path === '/'}">
                    <nuxt-link to="/" class="font-semibold p-4">
                        {{ $t('navigation.header.home') }}
                    </nuxt-link>
                </li>
                <li class="ml-6 hover" :class="{'activeHover': $route.path === '/partners'}">
                    <nuxt-link to="/partners" class="font-semibold p-4">
                        {{ $t('navigation.header.partner') }}
                    </nuxt-link>
                </li>
            </ul>

            <locale-switcher class="ml-auto px-5"/>

            <button class="inline-flex items-center font-semibold" @click="storeAuth.onModalToggle()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {{ $t('navigation.header.login') }}
            </button>
        </nav>
    </header>
</template>

<script setup>
import Logo from "~/components/layout/logo.vue";
import LocaleSwitcher from "~/components/layout/locale-switcher.vue";
import {useAuth} from "~/store/auth";

const storeAuth = useAuth();
const navOpen = ref(false)
</script>

<style scoped>
#sidemenu nav {
    width: 100vw;
    background: grey;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}

#sidemenu .sidemenu__btn {
    display: block;
    width: 50px;
    height: 50px;
    /*background: grey;*/
    border: none;
    position: relative;
    z-index: 100;
    appearance: none;
    cursor: pointer;
    outline: none;
}

#sidemenu .sidemenu__btn span {
    display: block;
    width: 20px;
    height: 2px;
    margin: auto;
    background: rgb(37 99 235);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.4s ease;
}

#sidemenu .sidemenu__btn span.top {
    background: rgb(37 99 235);
    transform: translateY(-8px);
}

#sidemenu .sidemenu__btn span.bottom {
    background: rgb(37 99 235);
    transform: translateY(8px);
}

.active {
    position: fixed !important;
    right: 0;
}

#sidemenu .sidemenu__btn.active .top {
    background: white;
    transform: rotate(-45deg);
}

#sidemenu .sidemenu__btn.active .mid {
    background: white;
    transform: translateX(-20px) rotate(360deg);
    opacity: 0;
}

#sidemenu .sidemenu__btn.active .bottom {
    background: white;
    transform: rotate(45deg);
}

#sidemenu .sidemenu__wrapper {
    padding-top: 100px;
}

#sidemenu .sidemenu__list {
    padding-top: 50px;
    list-style: none;
    padding: 0;
    margin: 0;
}

#sidemenu .sidemenu__item a {
    text-decoration: none;
    line-height: 1.6em;
    display: block;
    color: white;
    transition: 0.4s ease;
}

#sidemenu .sidemenu__item a:hover {
    background: lightgrey;
    color: dimgrey;
}

.translateX-enter {
    transform: translateX(200px);
    opacity: 0;
}

.translateX-enter-active, .translateX-leave-active {
    transform-origin: top left 0;
    transition: 0.2s ease;
}

.translateX-leave-to {
    transform: translateX(200px);
    opacity: 0;
}

.hover {
    display: inline-block;
}

.hover:after {
    display: block;
    content: '';
    border-bottom: solid 3px rgb(37 99 235 / 1);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
}

.hover:hover:after {
    transform: scaleX(1);
}


.hover.fromLeft:after {
    transform-origin: 0% 50%;
}

.activeHover:after {
    transform: scaleX(1);
}
</style>
