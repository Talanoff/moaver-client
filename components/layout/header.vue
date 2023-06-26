<template>
    <header class="sm:px-10 py-5 px-2 container">
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
                <nav v-if="navOpen">
                    <div class="sidemenu__wrapper flex flex-col overflow-auto justify-between h-full">
                        <ul class="sidemenu__list">
                            <li class="sidemenu__item px-2.5" @click="navOpen=!navOpen">
                                <nuxt-link to="/">
                                    {{ $t('navigation.header.home') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item px-2.5" @click="navOpen=!navOpen">
                                <nuxt-link to="/shippers">
                                    {{ $t('navigation.header.shippers') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item px-2.5" @click="navOpen=!navOpen">
                                <nuxt-link to="/transporters">
                                    {{ $t('navigation.header.transporters') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item px-2.5" @click="navOpen=!navOpen">
                                <nuxt-link to="/about-us">
                                    {{ $t('navigation.header.about') }}
                                </nuxt-link>
                            </li>
                        </ul>
                        <div class="sidemenu__item flex " @click="navOpen=!navOpen">
                            <auth-dropdown/>
                        </div>
                    </div>
                </nav>
            </transition>
        </div>

        <nav class="hidden sm:flex justify-between items-center">
            <ul class="flex items-center font-medium lowercase">
                <li class="mr-16">
                    <nuxt-link to="/">
                        <logo class="h-10"/>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="/"
                        class="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 px-2.5 py-1.5"
                        :class="{'text-blue-600 !border-blue-600': $route.path === '/'}"
                    >
                        {{ $t('navigation.header.home') }}
                    </nuxt-link>
                </li>
                <li class="px-2.5">
                    <nuxt-link
                        to="/shippers"
                        class="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 px-2.5 py-1.5"
                        :class="{'text-blue-600 !border-blue-600': $route.path === '/shippers'}"
                    >
                        {{ $t('navigation.header.shippers') }}
                    </nuxt-link>
                </li>
                <li class="px-2.5">
                    <nuxt-link
                        to="/transporters"
                        class="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 px-2.5 py-1.5"
                        :class="{'text-blue-600 !border-blue-600': $route.path === '/transporters'}"
                    >
                        {{ $t('navigation.header.transporters') }}
                    </nuxt-link>
                </li>
                <li class="px-2.5">
                    <nuxt-link
                        to="/about-us"
                        class="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300 px-2.5 py-1.5"
                        :class="{'text-blue-600 !border-blue-600': $route.path === '/about-us'}"
                    >
                        {{ $t('navigation.header.about') }}
                    </nuxt-link>
                </li>
            </ul>

            <locale-switcher class="ml-auto px-5"/>

            <auth-dropdown/>
        </nav>
    </header>
</template>

<script setup>
import Logo from "~/components/layout/logo.vue";
import LocaleSwitcher from "~/components/layout/locale-switcher.vue";
import AuthDropdown from "~/components/layout/auth-dropdown.vue";

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
    z-index: 9;
}

#sidemenu .sidemenu__btn {
    display: block;
    width: 50px;
    height: 0px;
    /*background: grey;*/
    border: none;
    position: relative;
    z-index: 10;
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
</style>
