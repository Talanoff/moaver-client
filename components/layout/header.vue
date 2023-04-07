<template>
  <header class="sm:px-10  py-10 container">
    <div id="sidemenu" class="sm:hidden">
      <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="translateX">
        <nav v-show="navOpen">
          <div class="sidemenu__wrapper">
            <ul class="sidemenu__list">
              <li class="sidemenu__item">
                <nuxt-link to="/" class="text-2xl font-bold text-blue-600 ">
                  MOAVER
                </nuxt-link>
              </li>
              <li class="sidemenu__item">
                <nuxt-link to="/" class="text-xl font-bold">
                  HOME
                </nuxt-link>
              </li>
              <li class="sidemenu__item">
                <nuxt-link
                    to="/partners"
                    class="text-xl font-bold"
                >
                  BECOME A PARTNER
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
    <nav class="hidden sm:flex justify-between">
      <ul class="flex">
        <li class="mr-16">
          <nuxt-link to="/" class="text-2xl font-bold text-blue-600 ">
            MOAVER
          </nuxt-link>
        </li>
        <li class="mr-6 mt-1">
          <nuxt-link to="/" class="text-xl font-bold">
            HOME
          </nuxt-link>
        </li>
        <li class="mr-6 mt-1">
          <nuxt-link
              to="/partners"
              class="text-xl font-bold"
          >
            BECOME A PARTNER
          </nuxt-link>
        </li>
      </ul>
      <div class="flex items-center" @click="store.login = !store.login">
        <img src="images/user.png" alt="" class="mr-1 w-6">
        <div class="cursor-pointer  text-xl ">LOGIN</div>
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
  background: grey;
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
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
}

#sidemenu .sidemenu__btn span.top {
  transform: translateY(-8px);
}

#sidemenu .sidemenu__btn span.bottom {
  transform: translateY(8px);
}

#sidemenu .sidemenu__btn.active .top {
  transform: rotate(-45deg);
}

#sidemenu .sidemenu__btn.active .mid {
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}

#sidemenu .sidemenu__btn.active .bottom {
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
  font-size: 1.6em;
  padding: 0.5em;
  display: block;
  color: white;
  transition: 0.4s ease;
}

#sidemenu .sidemenu__item a:hover {
  background: lightgrey;
  color: dimgrey;
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active, .translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}

</style>
