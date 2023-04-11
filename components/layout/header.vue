<template>
  <header class="sm:px-10  py-10 container">
    <div id="sidemenu" class="sm:hidden flex justify-between items-center flex-row-reverse">
      <button class="sidemenu__btn" @click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <div class="text-2xl  font-black text-blue-600">
        MOAVER
      </div>
      <transition name="translateX">
        <nav v-show="navOpen">
          <div class="sidemenu__wrapper flex flex-col justify-between h-full">
            <ul class="sidemenu__list">
              <li class="sidemenu__item px-5" @click="navOpen=!navOpen">
                <nuxt-link to="/" class="text-lg py-2  font-bold">
                  HOME
                </nuxt-link>
              </li>
              <li class="sidemenu__item px-5" @click="navOpen=!navOpen">
                <nuxt-link
                    to="/partners"
                    class="font-bold text-lg py-2 mb-8 "
                >
                  BECOME A PARTNER
                </nuxt-link>
              </li>

            </ul>
            <div class="sidemenu__item flex " @click="navOpen=!navOpen">
              <div
                  class="text-white text-sm w-auto px-5 py-2.5  flex items-center"
                  @click="store.login = !store.login">
                <div class="w-6 rounded-2xl mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="100%"
                       height="100%" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                  </svg>
                </div>
                <div class="cursor-pointer  text-xl ">LOGIN</div>
              </div>
            </div>
          </div>
        </nav>
      </transition>
    </div>
    <nav class="hidden sm:flex justify-between items-end">
      <ul class="flex items-end">
        <li class="mr-16">
          <div class="text-2xl font-black text-blue-600 ">
            MOAVER
          </div>
        </li>
        <li class="mr-6 hover" :class="{'activeHover': $route.path === '/'}">
          <nuxt-link to="/" class="text-xl font-bold p-4">
            HOME
          </nuxt-link>
        </li>
        <li class="mr-6 hover"
            :class="{'activeHover': $route.path === '/partners'}">
          <nuxt-link
              to="/partners"

              class="text-xl font-bold p-4"
          >
            BECOME A PARTNER
          </nuxt-link>
        </li>
      </ul>
      <div class="flex items-center" @click="store.login = !store.login">
        <div class="w-6 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="100%"
               height="100%" viewBox="0 0 24 24" stroke-width="3" stroke="black" fill="none"
               stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="7" r="4"/>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
          </svg>
        </div>
        <div class="cursor-pointer text-xl font-bold hover">LOGIN</div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {useBooking} from "~/store/booking";

const store = useBooking();
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
  margin: 0;
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
