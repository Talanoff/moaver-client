<template>
    <header class="sm:px-10 py-5 container">
        <div id="sidemenu" class="lg:hidden">
            <div class="flex items-center justify-between">
                <div class="text-2xl font-black text-blue-600">
                    <nuxt-link to="/">
                        <logo class="h-10"/>
                    </nuxt-link>
                </div>

                <button class="sidemenu__btn" @click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bottom"></span>
                </button>
            </div>

            <transition name="translateX">
                <nav v-if="navOpen">
                    <div class="sidemenu__wrapper flex flex-col overflow-auto justify-between h-full">
                        <ul class="sidemenu__list my-auto">
                            <li class="sidemenu__item" @click="navOpen=!navOpen">
                                <nuxt-link to="/">
                                    {{ $t('navigation.header.home') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item" @click="navOpen=!navOpen">
                                <nuxt-link to="/shippers">
                                    {{ $t('navigation.header.shippers') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item" @click="navOpen=!navOpen">
                                <nuxt-link to="/transporters">
                                    {{ $t('navigation.header.transporters') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item" @click="navOpen=!navOpen">
                                <nuxt-link to="/about-us">
                                    {{ $t('navigation.header.about') }}
                                </nuxt-link>
                            </li>
                            <li class="sidemenu__item">
                                <auth-dropdown
                                    class="mx-auto w-auto text-white items-center"
                                    @open="navOpen=!navOpen"
                                />
                            </li>
                            <li class="sidemenu__item mt-20">
                                <locale-switcher class="mx-auto justify-center text-white"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </transition>
        </div>

        <nav class="hidden lg:flex justify-between items-center">
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

<style lang="scss" scoped>
#sidemenu {
    .sidemenu__wrapper {
        //padding-top: 100px;
    }

    .sidemenu__list {
        @apply text-center text-xl p-0;

        .sidemenu__item {
            @apply px-2.5 py-3.5;

            a {
                text-decoration: none;
                line-height: 1.6em;
                display: block;
                color: white;
                transition: 0.4s ease;
            }
        }
    }

    nav {
        @apply w-screen h-screen bg-slate-700/90 fixed inset-0 z-40;
    }

    .sidemenu__btn {
        display: block;
        width: 20px;
        height: 20px;
        @apply appearance-none relative z-50;

        &.active {
            position: fixed !important;
            @apply right-5;

            .top {
                background: white;
                transform: rotate(-45deg);
            }

            .mid {
                background: white;
                transform: translateX(-20px) rotate(360deg);
                opacity: 0;
            }

            .bottom {
                background: white;
                transform: rotate(45deg);
            }
        }

        span {
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

            &.top {
                background: rgb(37 99 235);
                transform: translateY(-8px);
            }

            &.bottom {
                background: rgb(37 99 235);
                transform: translateY(8px);
            }
        }
    }
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
